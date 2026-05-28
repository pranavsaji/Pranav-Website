import type { Metadata } from "next";
import Link from "next/link";
import { experiences } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience - Pranav Saji | AI Leader San Francisco",
  description:
    "Pranav Saji's full career: Head of AI Security at Symosis Security, ML Consultant at LinkedIn, Co-Founder at Referrio, Head of Engineering at BreatheIT, Founding Engineer at Flair Labs (YC F24), Analyst at Deloitte serving Fortune 500 clients.",
  alternates: { canonical: "https://pranav-saji.com/experience" },
  openGraph: {
    title: "Professional Experience - Pranav Saji | AI Leader San Francisco",
    description:
      "AI leadership across Symosis Security, LinkedIn, Flair Labs (YC F24), BreatheIT, Referrio, and Deloitte. $50M+ business impact. Fortune 500 clients.",
    url: "https://pranav-saji.com/experience",
  },
};

const workHistorySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Pranav Saji - Work Experience",
  description: "Professional experience of Pranav Saji, AI Leader and Tech Entrepreneur",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Occupation",
        name: "Head of AI Security",
        description: "Building Security, ML, and GenAI workflows for security analytics, evidence-based risk scoring, and audit-ready reporting at enterprise scale.",
        provider: { "@type": "Organization", name: "Symosis Security" },
        startDate: "2026-02",
        occupationalCategory: "AI Security Engineering",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Occupation",
        name: "Machine Learning Consultant",
        description: "Leading LinkedIn InfoSec's Custom SSPM initiative on Azure Databricks across 21+ applications and 50+ environments. Built AI agent achieving 90% triage accuracy for Fortune 500 clients.",
        provider: { "@type": "Organization", name: "LinkedIn", sameAs: "https://linkedin.com" },
        startDate: "2024-12",
        occupationalCategory: "Machine Learning Engineering",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Occupation",
        name: "Co-Founder & CTO",
        description: "Architected and delivered an AI-powered dual-platform MVP in 2 months - 66% ahead of the planned 6-month timeline.",
        provider: { "@type": "Organization", name: "Referrio.io" },
        startDate: "2025-02",
        endDate: "2025-08",
        occupationalCategory: "Software Engineering",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Occupation",
        name: "Founding Engineer",
        description: "Built the core GenAI-powered real estate platform from the ground up at a Y Combinator F24 company.",
        provider: { "@type": "Organization", name: "Flair Labs", description: "Y Combinator F24" },
        occupationalCategory: "Full-Stack Engineering",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Occupation",
        name: "Data Scientist",
        description: "Built real-time fraud detection systems and healthcare data pipelines for Fortune 500 clients.",
        provider: { "@type": "Organization", name: "Deloitte", sameAs: "https://www.deloitte.com" },
        occupationalCategory: "Data Science",
      },
    },
  ],
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pranav-saji.com" },
    { "@type": "ListItem", position: 2, name: "Experience", item: "https://pranav-saji.com/experience" },
  ],
};

export default function Experience() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workHistorySchema) }} />

      <div className="page-header">
        <div className="container">
          <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-3">Work History</p>
          <h1 className="heading-lg text-white">
            Professional <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-slate-400 mt-3 text-base max-w-xl">
            Building AI-powered products at scale - from enterprise security to Y Combinator-backed startups.
          </p>
        </div>
      </div>

      <section className="section-sm">
        <div className="container">
          <div className="relative">
            {/* Left border line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/40 via-indigo-600/30 to-transparent hidden md:block" />

            <div className="space-y-0">
              {experiences.map((exp, i) => (
                <article
                  key={i}
                  className="relative md:pl-10 pb-10 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-0 top-0 -translate-x-1/2 mt-1">
                    <div
                      className={`w-2.5 h-2.5 rounded-full border-2 ${
                        exp.current
                          ? "border-blue-500 bg-blue-500"
                          : "border-blue-500/50 bg-[#040d1e]"
                      }`}
                    />
                  </div>

                  <div className="card p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <h2 className="text-white font-semibold text-base">{exp.role}</h2>
                          {exp.current && (
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-600/20 text-blue-400 border border-blue-500/20 leading-none">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-blue-400 text-sm">{exp.company}</p>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <div className="text-slate-400 text-xs">{exp.period}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{exp.location}</div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.points.map((point, j) => (
                        <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                          <span className="text-blue-500/70 mt-1 shrink-0 text-xs">›</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="divider" /></div>

      <section className="section-sm">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            <Link href="/skills" className="btn btn-primary">Technical Skills</Link>
            <Link href="/about" className="btn btn-outline">About Pranav</Link>
            <Link href="/contact" className="btn btn-outline">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
