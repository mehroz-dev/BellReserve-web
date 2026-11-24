import type { MetadataRoute } from "next";
import { industries } from "@/lib/industries";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/industries", "/book-demo", "/privacy", "/terms", ...industries.map((i) => `/industries/${i.slug}`)];
  return pages.map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p.startsWith("/industries") || p === "/book-demo" ? 0.8 : 0.3,
  }));
}
