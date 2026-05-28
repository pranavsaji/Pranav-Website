import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { education, certifications, stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Pranav Saji",
  description:
    "Learn about Pranav Saji - Tech Entrepreneur, Generative AI Expert, and Full-Stack Engineer based in San Francisco Bay Area. MS Computer Science from Illinois Institute of Technology. Head of AI Security at Symosis Security.",
  alternates: { canonical: "https://pranav-saji.com/about" },
  openGraph: {
    title: "About Pranav Saji - AI Leader & Tech Entrepreneur",
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

const aboutFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://pranav-saji.com/about#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Pranav Saji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pranav Saji is an AI Leader, Tech Entrepreneur, and Full-Stack Engineer based in the San Francisco Bay Area. He is currently Head of AI Security at Symosis Security and a Machine Learning Consultant at LinkedIn, with over $50M in business impact delivered across Fortune 500 clients and high-growth startups. He was previously an Analyst at Deloitte and a Founding Engineer at Flair Labs (Y Combinator F24).",
      },
    },
    {
      "@type": "Question",
      name: "What does Pranav Saji do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pranav Saji builds AI-first platforms and enterprise security systems. He leads AI security engineering at Symosis Security and heads LinkedIn's Custom SSPM initiative on Azure Databricks, spanning 21+ applications across 50+ environments. He has co-founded multiple startups and led engineering teams across AI, full-stack, and cloud infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Pranav Saji located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pranav Saji is based in the San Francisco Bay Area, California, USA.",
      },
    },
    {
      "@type": "Question",
      name: "What is Pranav Saji's education?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pranav Saji holds an MS in Computer Science with a specialization in Artificial Intelligence from Illinois Institute of Technology, and a Bachelor of Technology in Electronics & Communications Engineering from Model Engineering College.",
      },
    },
  ],
};

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqSchema) }} />

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
                I build AI systems that create real business leverage - not demos, but production
                infrastructure that scales. My work sits at the intersection of AI engineering,
                security, and product strategy, with a track record of{" "}
                <span className="text-slate-200 font-medium">$50M+ in measurable business impact</span>{" "}
                across Fortune 100 companies and high-growth startups.
              </p>
              <p>
                Currently, I lead AI security engineering at{" "}
                <span className="text-slate-200 font-medium">Symosis Security</span>, architecting
                GenAI workflows for security analytics and evidence-based risk scoring. In parallel,
                I drive the InfoSec Custom SSPM initiative as a Machine Learning Consultant at{" "}
                <span className="text-slate-200 font-medium">LinkedIn</span> - spanning 21+
                applications across 50+ environments on Azure Databricks.
              </p>
              <p>
                I have founded and led engineering at multiple AI companies: co-founded Referrio,
                served as Head of Engineering at BreatheIT, and was a Founding Engineer at{" "}
                <span className="text-slate-200 font-medium">Flair Labs (Y Combinator F24)</span>.
                Earlier, as an Analyst at{" "}
                <span className="text-slate-200 font-medium">Deloitte</span>, I served multiple
                Fortune 500 clients delivering significant business impact.
              </p>
              <p>
                My technical range covers the full delivery stack: React, Next.js, Node.js, Python,
                FastAPI; cloud-native architecture on Azure, AWS, and GCP; and AI/ML systems built
                on LangChain, RAG, and large language models. I hold an{" "}
                <span className="text-slate-200 font-medium">MS in Computer Science (AI)</span>{" "}
                from Illinois Institute of Technology.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 via-indigo-600/12 to-sky-400/8 rounded-3xl blur-3xl" />
                <div className="relative w-64 h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/30">
                  <Image
                    src="/pranav-saji.png"
                    alt="Pranav Saji - AI Leader and Tech Entrepreneur in San Francisco"
                    fill
                    className="object-cover object-top"
                    sizes="256px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040d1e]/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="divider" /></div>

      {/* Who is Pranav Saji - visible, third-person FAQ for featured snippets / AI answers */}
      <section className="section-sm">
        <div className="container">
          <h2 className="heading-md text-white mb-8">Who is Pranav Saji?</h2>
          <div className="space-y-4 max-w-3xl">
            <div className="card p-6">
              <h3 className="text-white font-semibold text-base mb-2">Who is Pranav Saji?</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Pranav Saji is an AI Leader, Tech Entrepreneur, and Full-Stack Engineer based in the
                San Francisco Bay Area. He is currently Head of AI Security at Symosis Security and a
                Machine Learning Consultant at LinkedIn, with over $50M in business impact delivered
                across Fortune 500 clients and high-growth startups. He was previously an Analyst at
                Deloitte and a Founding Engineer at Flair Labs (Y Combinator F24).
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-white font-semibold text-base mb-2">What does Pranav Saji do?</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Pranav Saji builds AI-first platforms and enterprise security systems. He leads AI
                security engineering at Symosis Security and heads LinkedIn&apos;s Custom SSPM
                initiative on Azure Databricks, spanning 21+ applications across 50+ environments. He
                has co-founded multiple startups and led engineering teams across AI, full-stack, and
                cloud infrastructure.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-white font-semibold text-base mb-2">Where is Pranav Saji located?</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Pranav Saji is based in the San Francisco Bay Area, California, USA.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-white font-semibold text-base mb-2">What is Pranav Saji&apos;s education?</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Pranav Saji holds an MS in Computer Science with a specialization in Artificial
                Intelligence from Illinois Institute of Technology, and a Bachelor of Technology in
                Electronics &amp; Communications Engineering from Model Engineering College.
              </p>
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
