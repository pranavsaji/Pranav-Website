import { getAllPosts } from "@/lib/blog";

const BASE = "https://pranav-saji.com";

export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getAllPosts();
  const updated = posts.length
    ? new Date(posts[0].date).toUTCString()
    : new Date("2026-06-15").toUTCString();

  const items = posts
    .map((post) => {
      const url = `${BASE}/blog/${post.slug}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <dc:creator>Pranav Saji</dc:creator>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Pranav Saji - AI &amp; AI Security</title>
    <link>${BASE}/blog</link>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Pranav Saji on AI, large language models, agentic systems, and AI security.</description>
    <language>en-US</language>
    <lastBuildDate>${updated}</lastBuildDate>
    <managingEditor>pranavs.mec@gmail.com (Pranav Saji)</managingEditor>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
