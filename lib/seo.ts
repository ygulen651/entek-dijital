import type { Metadata } from "next";

export const siteConfig = {
  name: "Entek Digital",
  url: "https://www.entekdigital.com",
  language: "tr-TR",
  locale: "tr_TR",
};

export function absoluteUrl(path: string) {
  return new URL(path, `${siteConfig.url}/`).href;
}

export function pageMetadata(title: string, description: string, path: string, image = "/og", article = false): Metadata {
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: fullTitle, description, url: absoluteUrl(path),
      siteName: siteConfig.name, locale: siteConfig.locale,
      type: article ? "article" : "website",
      images: [{ url: absoluteUrl(image), alt: title }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [absoluteUrl(image)] },
  };
}

export function pageSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org", "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`, url: absoluteUrl(path), name, description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
  };
}

// Only explicit ISO dates are used; display dates and missing dates are never guessed.
export function isoDate(value?: string): string | undefined {
  if (!value || !/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2}))?$/.test(value)) return undefined;
  const parsed = new Date(value);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value.slice(0, 10) ? value : undefined;
}
