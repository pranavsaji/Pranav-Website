import type { Metadata } from "next";
import Link from "next/link";
import { writings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Writing & Press - Pranav Saji | AI Security Author",
  description:
    "Bylined articles and press by Pranav Saji on AI security, AI agents, and the emerging tool-layer attack surface. Published in HackerNoon and leading security outlets.",
  alternates: { canonical: "https://pranav-saji.com/writing" },
  openGraph: {
    title: "Writing & Press - Pranav Saji",
    description:
      "Bylined articles and press by Pranav Saji on AI security, AI agents, and the tool-layer attack surface.",
    url: "https://pranav-saji.com/writing",
  },
};

const writingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Articles and Press by Pranav Saji",
  itemListElement: writings.map((w, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Article",
      headline: w.title,
      url: w.url,
      datePublished: w.date,
      author: { "@type": "Person", name: "Pranav Saji", url: "https://pranav-saji.com" },
      publisher: { "@type": "Organization", name: w.outlet },
      keywords: w.tags,
      inLanguage: "en",
    },
  })),
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pranav-saji.com" },
    { "@type": "ListItem", position: 2, name: "Writing", item: "https://pranav-saji.com/writing" },
  ],
};

export default function Writing() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(writingSchema) }} />

      <div className="page-header">
        <div className="container">
          <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-3">Press</p>
          <h1 className="heading-lg text-white">
            Writing &{" "}
            <span className="text-gradient">Press</span>
          </h1>
          <p className="text-slate-400 mt-3 text-base max-w-xl">
            Bylined articles on AI security, AI agents, and the emerging tool-layer attack surface.
          </p>
        </div>
      </div>

      <section className="section-sm">
        <div className="container">
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
            {writings.map((w, i) => (
              <article key={i} className="card p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-blue-500/8 border border-blue-500/18 text-blue-300">
                    {w.outlet}
                  </span>
                  <span className="text-slate-500 text-xs">
                    {new Date(w.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </span>
                </div>
                <h2 className="text-white font-semibold text-base leading-snug mb-3">{w.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{w.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {w.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-indigo-500/8 border border-indigo-500/18 text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read Article
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><div className="divider" /></div>

      <section className="section-sm">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            <Link href="/recognitions" className="btn btn-primary">View Recognitions</Link>
            <Link href="/contact" className="btn btn-outline">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
