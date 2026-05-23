import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { stats, experiences, skillCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pranav Saji — AI Leader, Tech Entrepreneur & Full-Stack Engineer | San Francisco",
  description:
    "Pranav Saji — AI Leader and Tech Entrepreneur in San Francisco. Head of AI Security at Symosis Security, ML Consultant at LinkedIn. $50M+ business impact. Fortune 500 clients: Amazon, Google, Meta. Ex-Deloitte.",
  alternates: { canonical: "https://pranav-saji.com" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Pranav Saji?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pranav Saji is an AI Leader, Tech Entrepreneur, and Full-Stack Engineer based in San Francisco Bay Area. He is currently Head of AI Security at Symosis Security and Machine Learning Consultant at LinkedIn, with over $50M in business impact delivered across Fortune 500 clients including Amazon, Google, and Meta. Previously a Data Scientist at Deloitte and Founding Engineer at Flair Labs (Y Combinator F24).",
      },
    },
    {
      "@type": "Question",
      name: "What does Pranav Saji do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pranav Saji builds AI-first platforms and enterprise security systems. He leads AI security engineering at Symosis Security and heads LinkedIn's Custom SSPM initiative on Azure Databricks. He has co-founded multiple startups and led engineering teams across AI, full-stack, and cloud infrastructure domains.",
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
      name: "What companies has Pranav Saji worked with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pranav Saji has worked with LinkedIn (as ML Consultant), Deloitte (as Data Scientist), and consulted for Fortune 500 enterprises including Amazon, Google, and Meta on AI security and machine learning initiatives. He also co-founded Referrio and served as Head of Engineering at BreatheIT, and was Founding Engineer at Flair Labs (YC F24).",
      },
    },
  ],
};

export default function Home() {
  const featured = experiences.slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background glows */}
        <div className="hero-glow w-[600px] h-[600px] bg-blue-600/10 top-0 left-1/4 -translate-x-1/2" style={{position:"absolute"}} />
        <div className="hero-glow w-[400px] h-[400px] bg-indigo-600/8 bottom-0 right-1/4" style={{position:"absolute"}} />

        <div className="container relative z-10 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-4">
                San Francisco Bay Area
              </p>

              <h1 className="heading-xl text-white mb-4">
                Pranav{" "}
                <span className="text-gradient">Saji</span>
              </h1>

              <p className="text-slate-300 text-xl font-medium mb-4 leading-snug">
                AI Leader · Tech Entrepreneur
                <br />
                Full-Stack Engineer
              </p>

              <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg">
                Building AI-first platforms that deliver measurable business outcomes.
                Head of AI Security at{" "}
                <span className="text-slate-200">Symosis Security</span>{" "}
                and Machine Learning Consultant at{" "}
                <span className="text-slate-200">LinkedIn</span>.
                Previously Deloitte.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/experience" className="btn btn-primary">
                  View Experience
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="https://www.linkedin.com/in/pranav-saji/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  LinkedIn
                </a>
                <Link href="/contact" className="btn btn-outline">
                  Contact
                </Link>
              </div>

              {/* Credential strip */}
              <div className="flex flex-wrap gap-2">
                {["Microsoft Certified", "Databricks Certified", "Oracle Certified", "Comptia Certified"].map((c) => (
                  <span
                    key={c}
                    className="text-xs px-3 py-1.5 rounded-md border border-white/8 text-slate-500 bg-white/[0.02]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 via-indigo-600/12 to-sky-400/8 rounded-3xl blur-3xl" />
                <div className="relative w-[min(320px,calc(100vw-48px))] h-[400px] sm:w-[360px] sm:h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/30">
                  <Image
                    src="/pranav-saji.png"
                    alt="Pranav Saji — AI Leader and Tech Entrepreneur in San Francisco Bay Area"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 320px, 360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040d1e]/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────── */}
      <section className="section-sm">
        <div className="container">
          <div className="divider mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.value} className="stat-card text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">{s.value}</div>
                <div className="text-slate-400 text-sm leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="divider mt-12" />
        </div>
      </section>

      {/* ── Featured Experience ─────────────────────── */}
      <section className="section-sm">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="heading-lg text-white">
                Recent <span className="text-gradient">Experience</span>
              </h2>
              <p className="text-slate-400 mt-2 text-sm">Latest roles and impact</p>
            </div>
            <Link
              href="/experience"
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 shrink-0"
            >
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="space-y-4">
            {featured.map((exp, i) => (
              <article key={i} className="card p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-base">{exp.role}</h3>
                    <p className="text-blue-400 text-sm mt-0.5">{exp.company}</p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <div className="text-slate-400 text-xs">{exp.period}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{exp.location}</div>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {exp.points.slice(0, 2).map((p, j) => (
                    <li key={j} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                      <span className="text-blue-500 mt-1 shrink-0 text-xs">›</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills preview ──────────────────────────── */}
      <section className="section-sm">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="heading-lg text-white">
                Technical <span className="text-gradient">Expertise</span>
              </h2>
              <p className="text-slate-400 mt-2 text-sm">Core technology stack</p>
            </div>
            <Link
              href="/skills"
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 shrink-0"
            >
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.slice(0, 3).map((cat) => (
              <div key={cat.name} className="card p-5">
                <h3 className="text-white font-medium text-sm mb-3">{cat.name}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.slice(0, 6).map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="section-sm">
        <div className="container">
          <div className="card p-10 sm:p-14 text-center relative overflow-hidden">
            <div className="hero-glow w-64 h-64 bg-blue-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{position:"absolute"}} />
            <div className="relative z-10">
              <h2 className="heading-lg text-white mb-3">
                Let&apos;s <span className="text-gradient">Connect</span>
              </h2>
              <p className="text-slate-400 max-w-md mx-auto text-sm mb-8">
                Open to collaborations, speaking engagements, and select advisory roles in AI and security.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact" className="btn btn-primary">Get in touch</Link>
                <a
                  href="https://www.linkedin.com/in/pranav-saji/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
