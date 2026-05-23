import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pranav-saji.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/experience`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/skills`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/recognitions`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/research`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
}
