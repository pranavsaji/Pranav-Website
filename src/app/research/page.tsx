import type { Metadata } from "next";
import Link from "next/link";
import { publications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Research & Publications — Pranav Saji",
  description:
    "Published research by Pranav Saji: RF Sensor for Food Adulteration Detection and Emotion Detection in Speech Using CNN. Research at the intersection of hardware sensing and deep learning.",
  alternates: { canonical: "https://pranav-saji.com/research" },
  openGraph: {
    title: "Research & Publications — Pranav Saji",
    description:
      "Peer-reviewed research: RF Sensor for Food Adulteration Detection, Emotion Detection in Speech Using CNN.",
    url: "https://pranav-saji.com/research",
  },
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
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-indigo-500/8 border border-indigo-500/18 text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
