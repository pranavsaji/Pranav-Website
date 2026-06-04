import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostSlugs, getPostWithHtml, getAllPosts, formatDate } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const slugs = getPostSlugs();
  if (!slugs.includes(slug)) return {};

  const post = await getPostWithHtml(slug);
  const url = `https://pranav-saji.com/blog/${slug}`;
  const canonical = post.canonical ?? url;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: ["Pranav Saji"],
      tags: post.tags,
      images: [
        {
          url: "/pranav-saji.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      creator: "@pranavsaji",
      images: ["/pranav-saji.png"],
    },
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  "AI Cybersecurity": "bg-red-500/10 text-red-400 border-red-500/20",
  AI: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const slugs = getPostSlugs();
  if (!slugs.includes(slug)) notFound();

  const post = await getPostWithHtml(slug);
  const allPosts = getAllPosts();
  const related = allPosts
    .filter(
      (p) => p.slug !== slug && p.category === post.category
    )
    .slice(0, 2);

  const url = `https://pranav-saji.com/blog/${slug}`;
  const catColor =
    CATEGORY_COLORS[post.category] ??
    "bg-slate-500/10 text-slate-400 border-slate-500/20";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    url,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(", "),
    articleSection: post.category,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      "@id": "https://pranav-saji.com/#pranav-saji",
      name: "Pranav Saji",
      url: "https://pranav-saji.com",
    },
    publisher: {
      "@type": "Person",
      "@id": "https://pranav-saji.com/#pranav-saji",
      name: "Pranav Saji",
    },
    image: {
      "@type": "ImageObject",
      url: "https://pranav-saji.com/pranav-saji.png",
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    isPartOf: {
      "@type": "Blog",
      "@id": "https://pranav-saji.com/blog",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
            <Link href="/" className="hover:text-slate-300 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              className="hover:text-slate-300 transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-400 truncate max-w-[200px]">
              {post.title}
            </span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-md border ${catColor}`}
              >
                {post.category}
              </span>
              <span className="text-slate-500 text-sm">
                {formatDate(post.date)}
              </span>
              <span className="text-slate-600 text-sm">·</span>
              <span className="text-slate-500 text-sm">{post.readTime}</span>
            </div>

            <h1 className="heading-lg text-white mb-5">{post.title}</h1>

            <p className="text-slate-400 text-lg leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span key={tag} className="tag text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-8 pt-8 border-t border-white/[0.06]">
              <div className="w-9 h-9 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-sm font-semibold">
                PS
              </div>
              <div>
                <p className="text-white text-sm font-medium">Pranav Saji</p>
                <p className="text-slate-500 text-xs">
                  Head of AI Security · ML Consultant at LinkedIn
                </p>
              </div>
            </div>
          </header>

          {/* Content */}
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
          />

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-white/[0.06]">
            <div className="card p-6 md:p-8 text-center">
              <h3 className="text-white font-semibold text-lg mb-2">
                Want to talk about AI security or engineering?
              </h3>
              <p className="text-slate-400 text-sm mb-5">
                I&apos;m always open to conversations about AI strategy, security
                architecture, and enterprise AI deployments.
              </p>
              <Link
                href="/contact"
                className="btn btn-primary inline-flex"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
                Related Posts
              </h2>
              <div className="space-y-4">
                {related.map((rp) => {
                  const rc =
                    CATEGORY_COLORS[rp.category] ??
                    "bg-slate-500/10 text-slate-400 border-slate-500/20";
                  return (
                    <Link key={rp.slug} href={`/blog/${rp.slug}`} className="block group">
                      <div className="card p-5 group-hover:border-blue-500/30 transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className={`text-xs font-medium px-2 py-0.5 rounded border ${rc}`}
                          >
                            {rp.category}
                          </span>
                          <span className="text-slate-600 text-xs">
                            {formatDate(rp.date)}
                          </span>
                        </div>
                        <h3 className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors">
                          {rp.title}
                        </h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Back link */}
          <div className="mt-12">
            <Link
              href="/blog"
              className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
