import type { Metadata } from "next";
import Link from "next/link";
import { publications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Research & Publications - Pranav Saji | AI Engineer San Francisco",
  description:
    "Peer-reviewed research by Pranav Saji: RF Sensor for Food Adulteration Detection and Emotion Detection in Speech Using CNN. Published work at the intersection of hardware sensing, signal processing, and deep learning.",
  alternates: { canonical: "https://pranav-saji.com/research" },
  openGraph: {
    title: "Research & Publications - Pranav Saji",
    description:
      "Peer-reviewed research by Pranav Saji: RF Sensor for Food Adulteration Detection, Emotion Detection in Speech Using CNN.",
    url: "https://pranav-saji.com/research",
  },
};

const publicationsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Research Publications by Pranav Saji",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "ScholarlyArticle",
        name: "RF Sensor for Food Adulteration Detection",
        author: { "@type": "Person", name: "Pranav Saji", url: "https://pranav-saji.com" },
        about: "A hardware-based RF sensing approach for detecting food adulteration using signal processing techniques.",
        keywords: ["RF sensor", "food adulteration", "signal processing", "hardware sensing"],
        inLanguage: "en",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "ScholarlyArticle",
        name: "Emotion Detection in Speech Using CNN",
        author: { "@type": "Person", name: "Pranav Saji", url: "https://pranav-saji.com" },
        about: "Deep learning approach to classifying emotional states from speech audio using Convolutional Neural Networks.",
        keywords: ["emotion detection", "speech recognition", "CNN", "deep learning", "audio classification"],
        inLanguage: "en",
      },
    },
  ],
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pranav-saji.com" },
    { "@type": "ListItem", position: 2, name: "Research", item: "https://pranav-saji.com/research" },
  ],
};

export default function Research() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationsSchema) }} />

      <div className="page-header">
        <div className="container">
          <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-3">Publications</p>
          <h1 className="heading-lg text-white">
            Research &{" "}
            <span className="text-gradient">Publications</span>
          </h1>
          <p className="text-slate-400 mt-3 text-base max-w-xl">
            Peer-reviewed research at the intersection of hardware sensing, signal processing, and deep learning.
          </p>
        </div>
      </div>

      <section className="section-sm">
        <div className="container">
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
            {publications.map((pub, i) => (
              <article key={i} className="card p-7">
                <h2 className="text-white font-semibold text-base leading-snug mb-3">{pub.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{pub.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-indigo-500/8 border border-indigo-500/18 text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Publication
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><div className="divider" /></div>

      <section className="section-sm">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            <Link href="/experience" className="btn btn-primary">View Experience</Link>
            <Link href="/about" className="btn btn-outline">About Pranav</Link>
          </div>
        </div>
      </section>
    </>
  );
}
