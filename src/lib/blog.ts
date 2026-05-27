import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  featured: boolean;
  content?: string;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    category: data.category ?? "",
    excerpt: data.excerpt ?? "",
    tags: data.tags ?? [],
    readTime: data.readTime ?? "5 min read",
    featured: data.featured ?? false,
    content,
  };
}

export async function getPostWithHtml(slug: string): Promise<BlogPost> {
  const post = getPostBySlug(slug);
  const processed = await remark()
    .use(remarkHtml, { sanitize: false })
    .process(post.content ?? "");
  return { ...post, content: processed.toString() };
}

export function getAllPosts(): BlogPost[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
