import type { MetadataRoute } from "next";
import { getProjects } from "@/app/lib/content";
import { siteUrl } from "@/app/lib/site";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();
  const pages = [
    { path: "", priority: 1 },
    { path: "/work", priority: 0.9 },
    { path: "/info", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
  ].map((page) => ({
    url: `${siteUrl}${page.path}`,
    changeFrequency: "monthly" as const,
    priority: page.priority,
  }));

  const work = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  return [...pages, ...work];
}
