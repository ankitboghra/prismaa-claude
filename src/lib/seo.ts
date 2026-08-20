import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const absoluteUrl = (path = "/") =>
  new URL(path, siteConfig.url).toString();

interface PageMetaInput {
  title: string;
  description: string;
  /** Path with leading slash, e.g. "/services/psma-pet-ct". */
  path: string;
  /** Falls back to the site-wide OG image. */
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
}

/**
 * Every page's metadata goes through here so canonical URLs, OG tags and
 * Twitter cards can never drift apart. `metadataBase` is set once in the root
 * layout, so relative image paths resolve correctly.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = "/opengraph-image",
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  noIndex,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: "en_IN",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(type === "article"
        ? { publishedTime, modifiedTime, authors }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/**
 * Search-result titles are truncated near 60 characters. Section pages get a
 * location suffix because "in Surat" is what people actually type.
 */
export const titleWithLocation = (title: string) => `${title} in Surat`;
