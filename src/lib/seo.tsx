import { useEffect } from "react";

export const SITE_URL = "https://www.preemiumpestmanagementservices.com";
export const BUSINESS_NAME = "PREEMIUM Pest Management Services Pvt. Ltd.";
export const PRIMARY_PHONE = "+91 70016 64727";
export const SECONDARY_PHONE = "+91 74608 55879";
export const WHATSAPP_URL =
  "https://wa.me/917001664727?text=Hi%2C%20I%20need%20pest%20control%20services%20in%20Varanasi";
export const BUSINESS_ADDRESS =
  "S-4/50, D-2-K, Mahaveer Road, Tajpur, Infront Of Mahaveer Greens Apartment, Near Mahaveer Mandir, Varanasi, Uttar Pradesh 221102";

const DEFAULT_TITLE =
  "Pest Control Services in Varanasi | Preemium";
const DEFAULT_DESCRIPTION =
  "Book pest control in Varanasi for termite, cockroach, rodent, mosquito and bed bug treatment for homes and businesses.";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noIndex?: boolean;
};

const upsertMeta = (selector: string, attrs: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => element?.setAttribute(key, value));
};

const upsertLink = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

export const Seo = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = "/favicon.jpeg",
  jsonLd,
  noIndex = false,
}: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;
    const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

    document.title = title;
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: noIndex ? "noindex, nofollow" : "index, follow",
    });
    upsertLink("canonical", canonicalUrl);

    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });

    const existing = document.head.querySelector("#page-json-ld");
    existing?.remove();

    if (jsonLd) {
      const script = document.createElement("script");
      script.id = "page-json-ld";
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [description, image, jsonLd, noIndex, path, title]);

  return null;
};

export const localBusinessJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: BUSINESS_NAME,
  url: SITE_URL,
  telephone: PRIMARY_PHONE,
  email: "info@preemiumpestmanagementservices.com",
  description: DEFAULT_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "S-4/50, D-2-K, Mahaveer Road, Tajpur, Infront Of Mahaveer Greens Apartment, Near Mahaveer Mandir",
    addressLocality: "Varanasi",
    addressRegion: "Uttar Pradesh",
    postalCode: "221102",
    addressCountry: "IN",
  },
  areaServed: [
    "Varanasi",
    "Uttar Pradesh",
    "Sarnath",
    "Sigra",
    "Lanka",
    "Bhelupur",
    "Pandeypur",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  sameAs: [SITE_URL],
});

export const serviceJsonLd = (name: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  serviceType: name,
  areaServed: {
    "@type": "City",
    name: "Varanasi",
  },
  provider: {
    "@id": `${SITE_URL}/#localbusiness`,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "187",
    bestRating: "5",
    worstRating: "1",
  },
  url: `${SITE_URL}${path}`,
});

export const faqJsonLd = (items: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});
