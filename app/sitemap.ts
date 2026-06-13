import type { MetadataRoute } from "next";
import { sitemapRouteConfigs, siteLastModified, siteUrl } from "./site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRouteConfigs.map(({ route, priority, changeFrequency }) => ({
    url: `${siteUrl}${route === "/" ? "" : route}`,
    lastModified: new Date(siteLastModified),
    changeFrequency,
    priority
  }));
}
