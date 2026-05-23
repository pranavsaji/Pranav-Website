import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { education, certifications, stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Pranav Saji",
  description:
    "Learn about Pranav Saji — Tech Entrepreneur, Generative AI Expert, and Full-Stack Engineer based in San Francisco Bay Area. MS Computer Science from Illinois Institute of Technology. Head of AI Security at Symosis Security.",
  alternates: { canonical: "https://pranav-saji.com/about" },
  openGraph: {
    title: "About Pranav Saji — AI Leader & Tech Entrepreneur",
    description:
      "Tech Entrepreneur, Generative AI Expert, Full-Stack Engineer. MS CS from Illinois Tech. Head of AI Security at Symosis, ML Consultant at LinkedIn.",
    url: "https://pranav-saji.com/about",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pranav-saji.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://pranav-saji.com/about" },
  ],
};

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Page header */}
      <div className="page-header">
        <div className="container">
          <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-3">About</p>
          <h1 className="heading-lg text-white">
            Pranav <span className="text-gradient">Saji</span>
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="section-sm">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
            <div className="space-y-5 text-slate-400 text-base leading-relaxed">
              <p>
                I&apos;m Pranav Saji — a Tech Entrepreneur, Full-Stack Engineer, Generative AI Expert,
                and Product Leader who architects and scales AI-first platforms that deliver measurable
                business outcomes and intuitive user experiences.
              </p>
              <p>
                My expertise spans the full stack: frontend development with React, Next.js, and React
                Native; backend systems with Node.js, Python, Flask, and FastAPI; cloud-native
                microservices on Azure, AWS, and GCP; and AI/ML engineering with LangChain, RAG
                architectures, and large language models.
              </p>
              <p>
                Currently, I lead AI security engineering at{" "}
                <span className="text-slate-200 font-medium">Symosis Security</span>, where I build
                GenAI workflows for security analytics and evidence-based risk scoring. Simultaneously,
                I serve as a Machine Learning Consultant at{" "}
                <span className="text-slate-200 font-medium">LinkedIn</span>, leading the InfoSec
                team&apos;s Custom SSPM initiative across Azure Databricks.
              </p>
              <p>
                Before that, I co-founded Referrio, served as Head of Engineering at BreatheIT,
                and was a Founding Engineer at Flair Labs — a Y Combinator F24 company. Earlier in my
                career, I was a Data Scientist at{" "}
                <span className="text-slate-200 font-medium">Deloitte</span>, where I built real-time
                fraud detection systems and healthcare data pipelines for Fortune 500 clients.
              </p>
              <p>
                I hold a Master of Science in Computer Science with a specialization in Artificial
                Intelligence from the Illinois Institute of Technology, Chicago.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-white/8">
                <Image
                  src="/pranav-saji.png"
                  alt="Pranav Saji — AI Leader and Tech Entrepreneur in San Francisco"
                  fill
                  className="object-cover object-top"
                  sizes="256px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="divider" /></div>

      {/* Stats */}
      <section className="section-sm">
        <div className="container">
          <h2 className="heading-md text-white mb-8">Impact by the Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.value} className="stat-card text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">{s.value}</div>
                <div className="text-slate-400 text-sm leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><div className="divider" /></div>

      {/* Education */}
      <section className="section-sm">
        <div className="container">
          <h2 className="heading-md text-white mb-8">Education</h2>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i} className="card p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-white font-semibold text-base">{edu.school}</h3>
                    <p className="text-blue-400 text-sm mt-1">{edu.degree}</p>
                    {edu.specialization && (
                      <p className="text-slate-500 text-sm mt-0.5">{edu.specialization}</p>
                    )}
                  </div>
                  <span className="text-slate-500 text-xs shrink-0">{edu.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><div className="divider" /></div>

      {/* Certifications */}
      <section className="section-sm">
        <div className="container">
          <h2 className="heading-md text-white mb-8">Certifications</h2>
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

      {/* Quick links */}
      <section className="section-sm">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            <Link href="/experience" className="btn btn-primary">View Experience</Link>
            <Link href="/skills" className="btn btn-outline">Technical Skills</Link>
            <Link href="/contact" className="btn btn-outline">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
