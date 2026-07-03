import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { projectCategories } from "@/lib/data";

// Real last-modified dates. Update a page's date when its content meaningfully
// changes — emitting `new Date()` on every build makes Google ignore the field.
const PAGE_DATES: Record<string, string> = {
  "": "2026-06-11",
  "/about": "2026-05-22",
  "/ai": "2026-06-09",
  "/experience": "2026-05-22",
  "/projects": "2026-07-03",
  "/ai-security": "2026-06-09",
  "/skills": "2026-05-22",
  "/recognitions": "2026-05-22",
  "/research": "2026-05-22",
  "/writing": "2026-06-03",
  "/contact": "2026-05-22",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pranav-saji.com";
  const posts = getAllPosts();
  const latestPost = posts.length ? new Date(posts[0].date) : new Date(PAGE_DATES[""]);

  const priorities: Record<string, number> = {
    "": 1.0,
    "/ai": 0.95,
    "/ai-security": 0.95,
    "/about": 0.9,
    "/experience": 0.9,
    "/projects": 0.9,
    "/blog": 0.9,
    "/skills": 0.8,
    "/recognitions": 0.8,
    "/writing": 0.8,
    "/research": 0.7,
    "/contact": 0.7,
  };

  const staticPages: MetadataRoute.Sitemap = Object.entries(PAGE_DATES).map(
    ([path, date]) => ({
      url: `${base}${path}`,
      lastModified: new Date(date),
      changeFrequency: path === "/ai" || path === "/ai-security" ? "weekly" : "monthly",
      priority: priorities[path] ?? 0.7,
    })
  );

  // /blog and the pillar hubs surface the newest post, so they update with it
  staticPages.push({
    url: `${base}/blog`,
    lastModified: latestPost,
    changeFrequency: "weekly",
    priority: 0.9,
  });

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Per-domain project pages (/projects/healthcare, /projects/finance, ...)
  const domainPages: MetadataRoute.Sitemap = projectCategories.map((c) => ({
    url: `${base}/projects/${c.slug}`,
    lastModified: new Date(PAGE_DATES["/projects"]),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages, ...domainPages];
}
