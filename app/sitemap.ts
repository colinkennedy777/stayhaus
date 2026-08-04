import type { MetadataRoute } from "next";
import { properties } from "@/data/properties";
import { guides } from "@/data/guides";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/stays",
    "/explore",
    "/about",
    "/partner",
    "/contact",
    "/guest-support",
    "/faq",
    "/policies",
    "/terms",
    "/privacy",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const propertyRoutes = properties.map((p) => ({
    url: `${siteConfig.url}/stays/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const guideRoutes = guides.map((g) => ({
    url: `${siteConfig.url}/explore/${g.destinationSlug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...propertyRoutes, ...guideRoutes];
}
