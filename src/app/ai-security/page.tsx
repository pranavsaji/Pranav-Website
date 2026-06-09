import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Pranav Saji - AI Security Expert | LLM & Agentic AI Security",
  description:
    "Pranav Saji is an AI security expert and Head of AI Security at Symosis Security in San Francisco. Specializing in LLM security, prompt injection defense, agentic AI security, MCP security, AI red teaming, and securing enterprise AI systems.",
  keywords: [
    "Pranav Saji AI security",
    "Pranav AI security",
    "Pranav Saji LLM security",
    "AI security expert San Francisco",
    "LLM security expert",
    "prompt injection defense",
    "agentic AI security",
    "MCP security",
    "AI red teaming",
    "Head of AI Security",
    "enterprise AI security",
  ],
  alternates: { canonical: "https://pranav-saji.com/ai-security" },
  openGraph: {
    type: "profile",
    url: "https://pranav-saji.com/ai-security",
    title: "Pranav Saji - AI Security Expert | LLM & Agentic AI Security",
    description:
      "AI security expert specializing in LLM security, prompt injection, agentic AI, and MCP security. Head of AI Security at Symosis Security, San Francisco.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pranav Saji - AI Security Expert" }],
  },
};

const TOPICS = [
  {
    title: "LLM & Application Security",
    desc: "Securing large language model applications against the OWASP LLM Top 10 - prompt injection, data leakage, insecure output handling, and model abuse.",
  },
  {
    title: "Agentic AI Security",
    desc: "Threat modeling autonomous AI agents: tool abuse, the lethal trifecta, excessive agency, and turning untrusted text into remote code execution.",
  },
  {
    title: "Model Context Protocol (MCP) Security",
    desc: "Defending the AI tool-integration layer against tool poisoning, supply-chain attacks, and malicious MCP servers.",
  },
  {
    title: "RAG & Knowledge-Base Security",
    desc: "Hardening retrieval-augmented generation pipelines, vector databases, and the data that feeds enterprise AI.",
  },
  {
    title: "AI Red Teaming",
    desc: "Adversarial testing of AI systems to surface jailbreaks, injection paths, and failure modes before attackers do.",
  },
  {
    title: "AI Governance & Compliance",
    desc: "Translating the EU AI Act, executive orders, and emerging regulation into practical controls for high-risk AI systems.",
  },
];

const aiSecFaqs = [
  {
    q: "Who is Pranav Saji?",
    a: "Pranav Saji is an AI security expert and AI Leader based in the San Francisco Bay Area. He is Head of AI Security at Symosis Security and a Machine Learning Consultant at LinkedIn, with over $50M in business impact across Fortune 500 clients and high-growth startups.",
  },
  {
    q: "What is Pranav Saji's expertise in AI security?",
    a: "Pranav Saji specializes in LLM and application security, agentic AI security, Model Context Protocol (MCP) security, RAG pipeline security, AI red teaming, and AI governance. He publishes research on the LLM threat landscape and advises enterprises on deploying AI safely.",
  },
  {
    q: "How can I work with Pranav Saji on AI security?",
    a: "Pranav Saji is open to AI security collaborations, advisory roles, and speaking engagements. You can reach him through the contact page on pranav-saji.com or via LinkedIn.",
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://pranav-saji.com/ai-security#page",
      url: "https://pranav-saji.com/ai-security",
      name: "Pranav Saji - AI Security Expert",
      isPartOf: { "@id": "https://pranav-saji.com/#website" },
      about: { "@id": "https://pranav-saji.com/#pranav-saji" },
      mainEntity: { "@id": "https://pranav-saji.com/#pranav-saji" },
      description:
        "Pranav Saji is an AI security expert specializing in LLM security, agentic AI security, MCP security, and AI red teaming.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://pranav-saji.com" },
          { "@type": "ListItem", position: 2, name: "AI Security", item: "https://pranav-saji.com/ai-security" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://pranav-saji.com/ai-security#faq",
      mainEntity: aiSecFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

function isSecurityPost(post: ReturnType<typeof getAllPosts>[number]): boolean {
  if (post.category.toLowerCase().includes("cybersecurity")) return true;
  const securityTags = ["security", "prompt injection", "red teaming", "rce", "remote code execution", "threat", "deepfake", "compliance", "governance"];
  return post.tags.some((t) => securityTags.some((s) => t.toLowerCase().includes(s)));
}

export default function AISecurityPage() {
  const posts = getAllPosts().filter(isSecurityPost);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      <div className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-14">
            <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">
              AI Security
            </p>
            <h1 className="heading-lg text-white mb-5">
              Pranav Saji -{" "}
              <span className="text-gradient">AI Security Expert</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
              I&apos;m <strong className="text-white">Pranav Saji</strong>, Head of AI Security at{" "}
              <span className="text-slate-200">Symosis Security</span> in the San Francisco Bay Area.
              I help enterprises secure AI and large language model systems - from prompt injection
              and agentic-AI threats to Model Context Protocol (MCP) security and AI red teaming.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/contact" className="btn btn-primary">Work with me</Link>
              <Link href="/blog" className="btn btn-outline">Read the blog</Link>
              <Link href="/about" className="btn btn-outline">About Pranav</Link>
            </div>
          </div>

          {/* Topic areas */}
          <section className="mb-16">
            <h2 className="heading-md text-white mb-6">
              AI Security <span className="text-gradient">Focus Areas</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {TOPICS.map((t) => (
                <div key={t.title} className="card p-5">
                  <h3 className="text-white font-semibold text-base mb-2">{t.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Writing cluster */}
          {posts.length > 0 && (
            <section className="mb-16">
              <h2 className="heading-md text-white mb-2">
                AI Security <span className="text-gradient">Research & Writing</span>
              </h2>
              <p className="text-slate-400 text-sm mb-6">
                In-depth analysis on the AI and LLM threat landscape by Pranav Saji.
              </p>
              <div className="space-y-4">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                    <article className="card p-6 group-hover:border-blue-500/30 transition-all">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-xs font-medium px-2.5 py-1 rounded-md border bg-red-500/10 text-red-400 border-red-500/20">
                          {post.category}
                        </span>
                        <span className="text-slate-600 text-xs">{formatDate(post.date)}</span>
                        <span className="text-slate-600 text-xs">{post.readTime}</span>
                      </div>
                      <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors mb-2 text-lg">
                        {post.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{post.excerpt}</p>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="heading-md text-white mb-6">
              AI Security <span className="text-gradient">FAQ</span>
            </h2>
            <div className="space-y-3">
              {aiSecFaqs.map((item) => (
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

          {/* CTA */}
          <div className="card p-10 text-center relative overflow-hidden">
            <div className="hero-glow w-64 h-64 bg-blue-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ position: "absolute" }} />
            <div className="relative z-10">
              <h2 className="heading-md text-white mb-3">
                Securing AI at your <span className="text-gradient">organization?</span>
              </h2>
              <p className="text-slate-400 max-w-md mx-auto text-sm mb-8">
                Open to AI security advisory, collaborations, and speaking engagements.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact" className="btn btn-primary">Get in touch</Link>
                <a
                  href="https://www.linkedin.com/in/pranav-saji/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
