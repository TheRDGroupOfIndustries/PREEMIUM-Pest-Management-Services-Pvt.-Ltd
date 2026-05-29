import { createClient } from "@sanity/client";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE_URL = "https://www.preemiumpestmanagementservices.com";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

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

const staticRoutes = [
  { path: "/", priority: "1.0" },
  { path: "/services", priority: "0.9" },
  { path: "/services/pest-control-services-varanasi", priority: "0.9" },
  { path: "/services/termite-treatment-varanasi", priority: "0.95" },
  { path: "/services/rodent-control-varanasi", priority: "0.85" },
  { path: "/services/fogging-service-varanasi", priority: "0.85" },
  { path: "/services/mosquito-control-varanasi", priority: "0.9" },
  { path: "/services/bed-bug-treatment-varanasi", priority: "0.9" },
  { path: "/services/commercial-fumigation-varanasi", priority: "0.85" },
  { path: "/services/bird-control-varanasi", priority: "0.75" },
  { path: "/services/snake-bee-control-varanasi", priority: "0.75" },
  { path: "/services/spider-lizard-control-varanasi", priority: "0.75" },
  { path: "/services/weed-control-varanasi", priority: "0.75" },
  { path: "/services/garden-pest-control-varanasi", priority: "0.75" },
  { path: "/pest-control", priority: "0.85" },
  { path: "/pest-control/termites", priority: "0.65" },
  { path: "/pest-control/flies", priority: "0.65" },
  { path: "/pest-control/mosquitos", priority: "0.65" },
  { path: "/pest-control/ants", priority: "0.65" },
  { path: "/pest-control/cockroaches", priority: "0.65" },
  { path: "/pest-control/bed-bugs", priority: "0.65" },
  { path: "/pest-control/silverfish", priority: "0.65" },
  { path: "/pest-control/grain-beetles", priority: "0.65" },
  { path: "/pest-control/fabric-beetles", priority: "0.65" },
  { path: "/pest-control/crawling-insects", priority: "0.65" },
  { path: "/pest-control/ticks", priority: "0.65" },
  { path: "/pest-control/rats", priority: "0.65" },
  { path: "/pest-control/mice", priority: "0.65" },
  { path: "/pest-control/bandicoot-rat", priority: "0.65" },
  { path: "/pest-control/birds", priority: "0.65" },
  { path: "/pest-control/wood-borers", priority: "0.65" },
  { path: "/pest-control/spiders", priority: "0.65" },
  { path: "/industries", priority: "0.75" },
  { path: "/our-process", priority: "0.75" },
  { path: "/certifications", priority: "0.7" },
  { path: "/gallery", priority: "0.65" },
  { path: "/blog", priority: "0.8" },
  { path: "/contact", priority: "0.9" },
];

const escapeXml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const fetchBlogRoutes = async () => {
  const env = await readEnv();
  const projectId = process.env.VITE_SANITY_PROJECT_ID || env.VITE_SANITY_PROJECT_ID;
  const dataset = process.env.VITE_SANITY_DATASET || env.VITE_SANITY_DATASET;

  if (!projectId || !dataset) {
    console.warn("Sanity env vars missing. Sitemap will include static routes only.");
    return [];
  }

  try {
    const client = createClient({
      projectId,
      dataset,
      apiVersion: "2023-05-03",
      useCdn: true,
    });

    const posts = await client.fetch(
      `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
        title,
        "slug": slug.current,
        publishedAt
      }`,
    );

    return posts.map((post) => ({
      path: `/blog/${createBlogSlug(post.title) || post.slug}`,
      priority: "0.7",
      lastmod: post.publishedAt ? post.publishedAt.slice(0, 10) : undefined,
    }));
  } catch (error) {
    console.warn(`Could not fetch Sanity blog slugs: ${error.message}`);
    return [];
  }
};

const createSitemap = (routes) => {
  const seen = new Set();
  const urls = routes.filter((route) => {
    if (seen.has(route.path)) return false;
    seen.add(route.path);
    return true;
  });

  const body = urls
    .map((route) => {
      const loc = `${SITE_URL}${route.path === "/" ? "/" : route.path}`;
      const lastmod = route.lastmod ? `\n    <lastmod>${route.lastmod}</lastmod>` : "";

      return `  <url>\n    <loc>${escapeXml(loc)}</loc>${lastmod}\n    <priority>${route.priority}</priority>\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
};

const blogRoutes = await fetchBlogRoutes();
const sitemap = createSitemap([...staticRoutes, ...blogRoutes]);
const outputPath = path.join(rootDir, "public", "sitemap.xml");

await writeFile(outputPath, sitemap);

console.log(`Generated sitemap.xml with ${staticRoutes.length + blogRoutes.length} URLs (${blogRoutes.length} blog posts).`);
