import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - AI, Cybersecurity & Engineering Insights | Pranav Saji",
  description:
    "Pranav Saji's blog on AI security, large language models, agentic systems, and enterprise AI engineering. Practical insights from the field.",
  keywords: [
    "AI security blog",
    "LLM security",
    "AI cybersecurity",
    "agentic AI",
    "enterprise AI engineering",
    "Pranav Saji blog",
    "generative AI insights",
    "AI leader blog San Francisco",
  ],
  alternates: { canonical: "https://pranav-saji.com/blog" },
  openGraph: {
    type: "website",
    url: "https://pranav-saji.com/blog",
    title: "Blog - AI, Cybersecurity & Engineering Insights | Pranav Saji",
    description:
      "Practical insights on AI security, LLMs, agentic systems, and enterprise AI from Pranav Saji - Head of AI Security at Symosis Security.",
    images: [{ url: "/pranav-saji.png", width: 1200, height: 630, alt: "Pranav Saji Blog" }],
  },
};

const blogListingSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://pranav-saji.com/blog",
  url: "https://pranav-saji.com/blog",
  name: "Pranav Saji - AI & Cybersecurity Blog",
  description:
    "Insights on AI security, large language models, agentic systems, and enterprise AI engineering.",
  author: {
    "@type": "Person",
    "@id": "https://pranav-saji.com/#pranav-saji",
    name: "Pranav Saji",
  },
  publisher: {
    "@type": "Person",
    "@id": "https://pranav-saji.com/#pranav-saji",
    name: "Pranav Saji",
  },
  inLanguage: "en-US",
};

const CATEGORY_COLORS: Record<string, string> = {
  "AI Cybersecurity": "bg-red-500/10 text-red-400 border-red-500/20",
  AI: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingSchema) }}
      />

      <div className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">
              Writing
            </p>
            <h1 className="heading-lg text-white mb-5">
              AI, Security &{" "}
              <span className="text-gradient">Engineering Insights</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl">
              Practical writing on AI security, large language models, agentic
              systems, and building AI that works in production - from the field.
            </p>
          </div>

          {/* Featured posts */}
          {featured.length > 0 && (
            <section className="mb-16">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
                Featured
              </h2>
              <div className="space-y-4">
                {featured.map((post) => (
                  <PostCard key={post.slug} post={post} large />
                ))}
              </div>
            </section>
          )}

          {/* All posts */}
          {rest.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
                All Posts
              </h2>
              <div className="space-y-4">
                {rest.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          )}

          {posts.length === 0 && (
            <p className="text-slate-500 text-center py-20">
              No posts yet - check back soon.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

function PostCard({
  post,
  large = false,
}: {
  post: ReturnType<typeof getAllPosts>[number];
  large?: boolean;
}) {
  const catColor =
    CATEGORY_COLORS[post.category] ??
    "bg-slate-500/10 text-slate-400 border-slate-500/20";

  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article
        className={`card p-6 ${large ? "md:p-8" : ""} group-hover:border-blue-500/30 transition-all`}
      >
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-md border ${catColor}`}
          >
            {post.category}
          </span>
          <span className="text-slate-600 text-xs">{formatDate(post.date)}</span>
          <span className="text-slate-600 text-xs">{post.readTime}</span>
        </div>

        <h3
          className={`font-semibold text-white group-hover:text-blue-400 transition-colors mb-2 ${
            large ? "text-xl md:text-2xl" : "text-lg"
          }`}
        >
          {post.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag text-xs">
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
