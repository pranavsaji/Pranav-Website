import type { Metadata } from "next";
import Link from "next/link";
import { recognitions, certifications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Recognitions — Pranav Saji",
  description:
    "Pranav Saji — Core Judge and Speaker at the USAII Global Hackathon. Founding Engineer at Y Combinator F24 company Flair Labs. Microsoft, Databricks, Oracle, and Comptia certified.",
  alternates: { canonical: "https://pranav-saji.com/recognitions" },
  openGraph: {
    title: "Recognitions & Events — Pranav Saji",
    description:
      "USAII Global Hackathon Core Judge & Speaker. YC F24 Founding Engineer. Microsoft, Databricks, Oracle certified.",
    url: "https://pranav-saji.com/recognitions",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pranav-saji.com" },
    { "@type": "ListItem", position: 2, name: "Recognitions", item: "https://pranav-saji.com/recognitions" },
  ],
};

const typeStyles: Record<string, { bg: string; border: string; text: string }> = {
  JUDGE: {
    bg: "rgba(245, 158, 11, 0.06)",
    border: "rgba(245, 158, 11, 0.2)",
    text: "#fbbf24",
  },
  SPEAKER: {
    bg: "rgba(99, 102, 241, 0.06)",
    border: "rgba(99, 102, 241, 0.2)",
    text: "#818cf8",
  },
  "YC F24": {
    bg: "rgba(249, 115, 22, 0.06)",
    border: "rgba(249, 115, 22, 0.2)",
    text: "#fb923c",
  },
};

export default function Recognitions() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="page-header">
        <div className="container">
          <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-3">Community</p>
          <h1 className="heading-lg text-white">
            Recognitions &{" "}
            <span className="text-gradient">Events</span>
          </h1>
          <p className="text-slate-400 mt-3 text-base max-w-xl">
            Speaking, judging, and contributing to the global AI community.
          </p>
        </div>
      </div>

      {/* Recognitions */}
      <section className="section-sm">
        <div className="container">
          <h2 className="heading-md text-white mb-8">Highlights</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recognitions.map((rec, i) => {
              const s = typeStyles[rec.type] ?? typeStyles["JUDGE"];
              return (
                <article
                  key={i}
                  className="rounded-xl p-6 border transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: s.bg, borderColor: s.border }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="recognition-tag"
                      style={{ color: s.text, background: `${s.bg}`, border: `1px solid ${s.border}` }}
                    >
                      {rec.type}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-base mb-1">{rec.title}</h3>
                  <p className="text-sm mb-3" style={{ color: s.text }}>{rec.event}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{rec.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <div className="container"><div className="divider" /></div>

      {/* Certifications */}
      <section className="section-sm">
        <div className="container">
          <h2 className="heading-md text-white mb-8">Certifications & Credentials</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <div key={i} className="card p-5">
                <h3 className="text-white text-sm font-medium leading-snug mb-1">{cert.name}</h3>
                <p className="text-slate-500 text-xs">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><div className="divider" /></div>

      <section className="section-sm">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            <Link href="/experience" className="btn btn-primary">View Experience</Link>
            <Link href="/contact" className="btn btn-outline">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
