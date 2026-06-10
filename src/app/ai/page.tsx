import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, formatDate } from "@/lib/blog";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pranav Saji - AI Leader & Expert | Generative AI, LLMs, AI Security",
  description:
    "Pranav AI - Pranav Saji is an AI Leader, Generative AI expert, and Head of AI Security based in San Francisco. He builds AI-first platforms, LLM and agentic systems, and secure enterprise AI with $50M+ in business impact.",
  keywords: [
    "Pranav AI",
    "Pranav Saji AI",
    "Pranav AI expert",
    "Pranav AI leader",
    "Pranav Saji Generative AI",
    "Pranav AI San Francisco",
    "AI Leader San Francisco",
    "Generative AI expert",
    "LLM expert",
    "AI security expert",
    "machine learning consultant",
  ],
  alternates: { canonical: "https://pranav-saji.com/ai" },
  openGraph: {
    type: "profile",
    url: "https://pranav-saji.com/ai",
    title: "Pranav Saji - AI Leader & Expert | Generative AI, LLMs, AI Security",
    description:
      "Pranav Saji is an AI Leader, Generative AI expert, and Head of AI Security in San Francisco. Building AI-first platforms with $50M+ business impact.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pranav Saji - AI Leader" }],
  },
};

const PILLARS = [
  {
    title: "Generative AI & LLMs",
    desc: "Architecting production LLM applications - RAG pipelines, fine-tuning, and prompt engineering - that deliver measurable business value.",
  },
  {
    title: "Agentic AI",
    desc: "Building autonomous, multi-agent systems with LangChain, LangGraph, and the Model Context Protocol that move beyond chatbots to real workflows.",
  },
  {
    title: "AI Security",
    desc: "Securing AI and LLM systems against prompt injection, agent abuse, and supply-chain attacks as Head of AI Security at Symosis Security.",
    href: "/ai-security",
  },
  {
    title: "Machine Learning",
    desc: "End-to-end ML on Azure Databricks - from data pipelines to deployed models - delivered for LinkedIn and Fortune 500 enterprises.",
  },
  {
    title: "Enterprise AI Strategy",
    desc: "Helping leaders turn AI from experiment to ROI: governance, architecture, and the org changes that make AI actually ship.",
  },
  {
    title: "AI Speaking & Judging",
    desc: "Core Judge and Featured Speaker at the USAII Global Hackathon, and an active voice on the AI threat landscape in the press.",
  },
];

const aiFaqs = [
  {
    q: "Who is Pranav Saji in AI?",
    a: "Pranav Saji is an AI Leader, Generative AI expert, and Tech Entrepreneur based in the San Francisco Bay Area. He is Head of AI Security at Symosis Security and a Machine Learning Consultant at LinkedIn, with over $50M in business impact building AI-first platforms for Fortune 500 clients and high-growth startups.",
  },
  {
    q: "What kind of AI work does Pranav Saji do?",
    a: "Pranav Saji works across generative AI and large language models, agentic and multi-agent AI systems, AI security, and enterprise machine learning. He architects production AI platforms using LangChain, LangGraph, the Model Context Protocol, and Azure Databricks, and advises organizations on deploying AI safely and effectively.",
  },
  {
    q: "Is Pranav Saji an AI expert?",
    a: "Yes. Pranav Saji is a recognized AI expert and AI Leader. He holds certifications including Microsoft Azure AI Engineer and Oracle Generative AI Professional, has judged and spoken at the USAII Global Hackathon, publishes research on AI and LLM security, and has been featured in publications such as HackerNoon.",
  },
  {
    q: "How can I connect with Pranav Saji about AI?",
    a: "You can connect with Pranav Saji through the contact page on pranav-saji.com, on LinkedIn at linkedin.com/in/pranav-saji, or through his AI newsletter. He is open to AI collaborations, advisory roles, and speaking engagements.",
  },
];

const aiSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://pranav-saji.com/ai#page",
      url: "https://pranav-saji.com/ai",
      name: "Pranav Saji - AI Leader & Expert",
      isPartOf: { "@id": "https://pranav-saji.com/#website" },
      about: { "@id": "https://pranav-saji.com/#pranav-saji" },
      mainEntity: { "@id": "https://pranav-saji.com/#pranav-saji" },
      description:
        "Pranav Saji is an AI Leader, Generative AI expert, and Head of AI Security in San Francisco.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://pranav-saji.com" },
          { "@type": "ListItem", position: 2, name: "AI", item: "https://pranav-saji.com/ai" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://pranav-saji.com/ai#faq",
      mainEntity: aiFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function AIPage() {
  const posts = getAllPosts().slice(0, 8);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aiSchema) }} />

      <div className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center mb-16">
            <div>
              <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">
                Artificial Intelligence
              </p>
              <h1 className="heading-lg text-white mb-5">
                Pranav Saji -{" "}
                <span className="text-gradient">AI Leader & Expert</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed">
                I&apos;m <strong className="text-white">Pranav Saji</strong> - an AI Leader,
                Generative AI expert, and Head of AI Security based in the San Francisco Bay Area.
                I build AI-first platforms, LLM and agentic systems, and secure enterprise AI -
                with <strong className="text-white">$50M+</strong> in business impact across
                Fortune 500 companies and high-growth startups.
              </p>
            </div>
            <div className="hidden md:block shrink-0">
              <div className="relative w-[180px] h-[225px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/30">
                <Image
                  src="/pranav-saji.png"
                  alt="Pranav Saji - AI Leader and Generative AI expert in San Francisco"
                  fill
                  className="object-cover object-top"
                  sizes="180px"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {stats.map((s) => (
              <div key={s.value} className="stat-card text-center">
                <div className="text-3xl font-bold text-gradient mb-2">{s.value}</div>
                <div className="text-slate-400 text-xs leading-snug">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Pillars */}
          <section className="mb-16">
            <h2 className="heading-md text-white mb-6">
              How Pranav works in <span className="text-gradient">AI</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {PILLARS.map((p) => (
                <div key={p.title} className="card p-5">
                  <h3 className="text-white font-semibold text-base mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                  {p.href && (
                    <Link href={p.href} className="text-blue-400 hover:text-blue-300 text-sm mt-3 inline-flex items-center gap-1">
                      Learn more
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Writing */}
          {posts.length > 0 && (
            <section className="mb-16">
              <h2 className="heading-md text-white mb-2">
                Pranav&apos;s AI <span className="text-gradient">Writing & Research</span>
              </h2>
              <p className="text-slate-400 text-sm mb-6">
                Latest analysis on AI, LLMs, agentic systems, and AI security.
              </p>
              <div className="space-y-4">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                    <article className="card p-5 group-hover:border-blue-500/30 transition-all">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-slate-600 text-xs">{formatDate(post.date)}</span>
                        <span className="text-slate-600 text-xs">{post.readTime}</span>
                      </div>
                      <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors text-base">
                        {post.title}
                      </h3>
                    </article>
                  </Link>
                ))}
              </div>
              <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm mt-6 inline-flex items-center gap-1">
                Read all posts
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </section>
          )}

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="heading-md text-white mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <div className="space-y-3">
              {aiFaqs.map((item) => (
                <details key={item.q} className="card p-5 group">
                  <summary className="flex items-center justify-between cursor-pointer list-none text-white font-medium text-sm">
                    {item.q}
                    <svg
                      className="w-4 h-4 text-blue-400 shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-slate-400 text-sm leading-relaxed mt-3">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Connect with Pranav */}
          <section id="connect" className="card p-10 sm:p-12 relative overflow-hidden">
            <div className="hero-glow w-64 h-64 bg-blue-600/10 top-0 right-0" style={{ position: "absolute" }} />
            <div className="relative z-10">
              <h2 className="heading-md text-white mb-3">
                Connect with <span className="text-gradient">Pranav</span>
              </h2>
              <p className="text-slate-400 max-w-lg text-sm mb-8">
                Open to AI collaborations, advisory roles, and speaking engagements. Reach out
                directly or follow along.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/contact" className="btn btn-primary justify-center">Get in touch</Link>
                <a href="https://www.linkedin.com/in/pranav-saji/" target="_blank" rel="noopener noreferrer" className="btn btn-outline justify-center">
                  Connect on LinkedIn
                </a>
                <a href="https://www.linkedin.com/newsletters/7468174182753820672/" target="_blank" rel="noopener noreferrer" className="btn btn-outline justify-center">
                  AI Newsletter
                </a>
                <a href="https://x.com/PranavInnovates" target="_blank" rel="noopener noreferrer" className="btn btn-outline justify-center">
                  Follow on X
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
