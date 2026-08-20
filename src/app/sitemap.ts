import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { getArticles } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

/**
 * Priorities are relative, and used here to tell Google what we consider the
 * money pages: the homepage, the technology argument, and the individual scan
 * pages people search for by name.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [learn, blog] = await Promise.all([
    getArticles("learn"),
    getArticles("blog"),
  ]);

  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = (
    [
      { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
      { url: absoluteUrl("/services"), changeFrequency: "monthly", priority: 0.9 },
      { url: absoluteUrl("/technology"), changeFrequency: "monthly", priority: 0.9 },
      { url: absoluteUrl("/learn"), changeFrequency: "weekly", priority: 0.8 },
      { url: absoluteUrl("/team"), changeFrequency: "monthly", priority: 0.7 },
      { url: absoluteUrl("/about"), changeFrequency: "yearly", priority: 0.6 },
      { url: absoluteUrl("/gallery"), changeFrequency: "monthly", priority: 0.6 },
      { url: absoluteUrl("/blog"), changeFrequency: "weekly", priority: 0.7 },
      { url: absoluteUrl("/contact"), changeFrequency: "yearly", priority: 0.8 },
    ] satisfies MetadataRoute.Sitemap
  ).map((entry) => ({ ...entry, lastModified: now }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const articleRoutes: MetadataRoute.Sitemap = [...learn, ...blog].map(
    (article) => ({
      url: absoluteUrl(`/${article.collection}/${article.slug}`),
      lastModified: new Date(article.updatedAt ?? article.publishedAt),
      changeFrequency: "yearly",
      priority: article.featured ? 0.75 : 0.6,
    }),
  );

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes];
}
