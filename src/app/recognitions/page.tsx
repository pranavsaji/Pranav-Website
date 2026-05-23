import type { Metadata } from "next";
import Link from "next/link";
import { recognitions, certifications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Recognitions & Awards — Pranav Saji | AI Leader",
  description:
    "Pranav Saji — Core Judge and Featured Speaker at the USAII Global Hackathon. Founding Engineer at Y Combinator F24 startup Flair Labs. Microsoft, Databricks, Oracle, and CompTIA certified AI engineer.",
  alternates: { canonical: "https://pranav-saji.com/recognitions" },
  openGraph: {
    title: "Recognitions & Awards — Pranav Saji",
    description:
      "USAII Global Hackathon Core Judge & Speaker. Y Combinator F24 Founding Engineer. Microsoft, Databricks, Oracle, CompTIA certified.",
    url: "https://pranav-saji.com/recognitions",
  },
};

const awardsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Recognitions and Awards — Pranav Saji",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Event",
        name: "USAII Global Hackathon — Core Judge",
        description: "Selected as a Core Judge for the USAII Global Hackathon, one of the premier global AI competitions. Evaluated cutting-edge AI innovations from teams worldwide.",
        performer: { "@type": "Person", name: "Pranav Saji", url: "https://pranav-saji.com" },
        organizer: { "@type": "Organization", name: "USAII" },
        eventStatus: "https://schema.org/EventScheduled",
        about: "Artificial Intelligence Competition",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Event",
        name: "USAII Global Hackathon — Featured Speaker",
        description: "Featured speaker sharing insights on Generative AI, AI security, and the future of AI-first product development to a global audience.",
        performer: { "@type": "Person", name: "Pranav Saji", url: "https://pranav-saji.com" },
        organizer: { "@type": "Organization", name: "USAII" },
        eventStatus: "https://schema.org/EventScheduled",
        about: "Generative AI, AI Security",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Role",
        name: "Founding Engineer — Flair Labs (Y Combinator F24)",
        description: "Selected as Founding Engineer at Flair Labs, a Y Combinator F24 company. Built the core GenAI-powered real estate platform from the ground up.",
        roleName: "Founding Engineer",
        about: { "@type": "Organization", name: "Flair Labs", description: "Y Combinator F24 company" },
      },
    },
  ],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(awardsSchema) }} />

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
