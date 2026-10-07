import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/services/", priority: 0.9 },
    { path: "/about/", priority: 0.7 },
    { path: "/approach/", priority: 0.7 },
    { path: "/contact/", priority: 0.8 },
    { path: "/privacy/", priority: 0.2 },
    { path: "/terms/", priority: 0.2 },
  ];
  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
