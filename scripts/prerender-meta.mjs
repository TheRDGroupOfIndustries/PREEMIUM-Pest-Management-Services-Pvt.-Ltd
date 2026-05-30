import { createClient } from "@sanity/client";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE_URL = "https://www.preemiumpestmanagementservices.com";
const DEFAULT_IMAGE = `${SITE_URL}/favicon.jpeg`;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

const readEnv = async () => {
  try {
    const envFile = await readFile(path.join(rootDir, ".env"), "utf8");
    return Object.fromEntries(
      envFile
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith("#") && line.includes("="))
        .map((line) => {
          const [key, ...value] = line.split("=");
          return [key, value.join("=")];
        }),
    );
  } catch {
    return {};
  }
};

const createBlogSlug = (title) => {
  if (!title) return "";

  return title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96)
    .replace(/-+$/g, "");
};

const plainText = (blocks = []) =>
  blocks
    .map((block) => {
      if (block?._type !== "block" || !Array.isArray(block.children)) return "";
      return block.children.map((child) => child.text || "").join("");
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

const truncate = (value, max = 155) => {
  if (!value || value.length <= max) return value || "";
  return `${value.slice(0, max - 1).replace(/\s+\S*$/, "")}...`;
};

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const upsertTag = (html, pattern, tag) => {
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
};

const withMeta = (template, meta) => {
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const canonical = `${SITE_URL}${meta.path === "/" ? "/" : meta.path}`;
  const image = meta.image || DEFAULT_IMAGE;

  let html = template.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);

  html = upsertTag(
    html,
    /<meta\s+name="description"[^>]*>/i,
    `<meta name="description" content="${description}" />`,
  );
  html = upsertTag(
    html,
    /<link\s+rel="canonical"[^>]*>/i,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
  );
  html = upsertTag(
    html,
    /<meta\s+property="og:title"[^>]*>/i,
    `<meta property="og:title" content="${title}" />`,
  );
  html = upsertTag(
    html,
    /<meta\s+property="og:description"[^>]*>/i,
    `<meta property="og:description" content="${description}" />`,
  );
  html = upsertTag(
    html,
    /<meta\s+property="og:url"[^>]*>/i,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
  );
  html = upsertTag(
    html,
    /<meta\s+property="og:image"[^>]*>/i,
    `<meta property="og:image" content="${escapeHtml(image)}" />`,
  );
  html = upsertTag(
    html,
    /<meta\s+name="twitter:title"[^>]*>/i,
    `<meta name="twitter:title" content="${title}" />`,
  );
  html = upsertTag(
    html,
    /<meta\s+name="twitter:description"[^>]*>/i,
    `<meta name="twitter:description" content="${description}" />`,
  );
  html = upsertTag(
    html,
    /<meta\s+name="twitter:image"[^>]*>/i,
    `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
  );

  return html;
};

const writeRoute = async (template, meta) => {
  const routePath = meta.path === "/" ? "" : meta.path.replace(/^\/+/, "");
  const filePath = routePath
    ? path.join(distDir, routePath, "index.html")
    : path.join(distDir, "index.html");

  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, withMeta(template, meta));
};

const parseServiceRoutes = async () => {
  const source = await readFile(path.join(rootDir, "src", "data", "servicesData.ts"), "utf8");
  const routes = [];
  const pattern =
    /{\s*id:\s*"[^"]+",\s*seoSlug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*seoTitle:\s*"([^"]+)",\s*seoDescription:\s*"([^"]+)"/g;

  for (const match of source.matchAll(pattern)) {
    routes.push({
      path: `/services/${match[1]}`,
      title: match[3],
      description: match[4],
    });
  }

  return routes;
};

const parsePestRoutes = async () => {
  const source = await readFile(path.join(rootDir, "src", "data", "pestData.ts"), "utf8");
  const routes = [];
  const pattern =
    /{\s*id:\s*"([^"]+)",\s*title:\s*"([^"]+)",[\s\S]*?shortDesc:\s*"([^"]+)"/g;

  for (const match of source.matchAll(pattern)) {
    routes.push({
      path: `/pest-control/${match[1]}`,
      title: `${match[2]} Control in Varanasi | Pest Guide`,
      description: truncate(
        `${match[3].replace(/\\"/g, '"')} Learn signs, risks and professional treatment options in Varanasi.`,
      ),
    });
  }

  return routes;
};

const fetchBlogRoutes = async () => {
  const env = await readEnv();
  const projectId = process.env.VITE_SANITY_PROJECT_ID || env.VITE_SANITY_PROJECT_ID;
  const dataset = process.env.VITE_SANITY_DATASET || env.VITE_SANITY_DATASET;

  if (!projectId || !dataset) return [];

  const client = createClient({
    projectId,
    dataset,
    apiVersion: "2023-05-03",
    useCdn: true,
  });

  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      body,
      mainImage
    }`,
  );

  return posts
    .filter((post) => post.title)
    .map((post) => ({
      path: `/blog/${createBlogSlug(post.title) || post.slug?.current}`,
      title: post.title,
      description: truncate(plainText(post.body) || `Read ${post.title}.`),
    }));
};

const staticRoutes = [
  {
    path: "/",
    title: "Pest Control Services in Varanasi | Preemium",
    description:
      "Book pest control in Varanasi for termite, cockroach, rodent, mosquito and bed bug treatment for homes and businesses.",
  },
  {
    path: "/services",
    title: "Pest Control Services in Varanasi | Termite, Bed Bug, Rodent",
    description:
      "Explore pest control services in Varanasi, including termite, cockroach, rodent, mosquito, bed bug and fumigation treatments.",
  },
  {
    path: "/pest-control",
    title: "Pest Control in Varanasi | Home & Commercial Pest Experts",
    description:
      "Get pest control in Varanasi for homes, offices, hotels, hospitals and industries, including termite, cockroach, rodent and mosquito control.",
  },
  {
    path: "/industries",
    title: "Pest Management for Industries in Varanasi | PREEMIUM",
    description:
      "Industry pest management in Varanasi for manufacturing, warehouses, pharma, food processing, hotels, offices and societies.",
  },
  {
    path: "/our-process",
    title: "Our Pest Control Process in Varanasi | ERDM & IPM",
    description:
      "See PREEMIUM's pest control process in Varanasi, including ERDM, IPM, safety protocols, training and service reporting.",
  },
  {
    path: "/certifications",
    title: "Pest Control Certifications & Compliance | PREEMIUM",
    description:
      "View PREEMIUM Pest Management certifications, DPIIT recognition, IPCA membership, safety standards and compliance documents.",
  },
  {
    path: "/gallery",
    title: "Pest Control Service Gallery in Varanasi | PREEMIUM",
    description:
      "View PREEMIUM Pest Management service photos, pest control operations and professional treatment work across Varanasi.",
  },
  {
    path: "/blog",
    title: "Pest Control Blog in Varanasi | Expert Tips & Guides",
    description:
      "Read pest control articles for Varanasi homes and businesses on termite treatment, mosquitoes, cockroaches, rodents and bed bugs.",
  },
  {
    path: "/contact",
    title: "Contact Pest Control Experts in Varanasi | Preemium",
    description:
      "Contact PREEMIUM Pest Management in Varanasi for termite, cockroach, rodent, mosquito, bed bug and commercial pest control.",
  },
];

const template = await readFile(path.join(distDir, "index.html"), "utf8");
const routes = [
  ...staticRoutes,
  ...(await parseServiceRoutes()),
  ...(await parsePestRoutes()),
  ...(await fetchBlogRoutes()),
];

const seen = new Set();
for (const route of routes) {
  if (!route.path || seen.has(route.path)) continue;
  seen.add(route.path);
  await writeRoute(template, route);
}

console.log(`Prerendered route metadata for ${seen.size} pages.`);
