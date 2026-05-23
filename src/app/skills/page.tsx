import type { Metadata } from "next";
import Link from "next/link";
import { skillCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skills — Pranav Saji",
  description:
    "Technical skills of Pranav Saji: Generative AI, LangChain, LLMs, RAG, React, Next.js, Node.js, Python, Azure, AWS, GCP, Docker, Kubernetes, AI Security, and more.",
  alternates: { canonical: "https://pranav-saji.com/skills" },
  openGraph: {
    title: "Technical Skills — Pranav Saji",
    description:
      "Full-stack capabilities: AI/ML, Frontend, Backend, Cloud, Security, and Data Engineering.",
    url: "https://pranav-saji.com/skills",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pranav-saji.com" },
    { "@type": "ListItem", position: 2, name: "Skills", item: "https://pranav-saji.com/skills" },
  ],
};

export default function Skills() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="page-header">
        <div className="container">
          <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-3">Expertise</p>
          <h1 className="heading-lg text-white">
            Technical <span className="text-gradient">Skills</span>
          </h1>
          <p className="text-slate-400 mt-3 text-base max-w-xl">
            Full-stack capabilities across AI/ML, frontend, backend, cloud infrastructure, and security engineering.
          </p>
        </div>
      </div>

      <section className="section-sm">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat) => (
              <div key={cat.name} className="card p-6">
                <h2 className="text-white font-semibold text-sm mb-4 pb-3 border-b border-white/[0.06]">
                  {cat.name}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><div className="divider" /></div>

      {/* Tech at a glance */}
      <section className="section-sm">
        <div className="container">
          <h2 className="heading-md text-white mb-8">Core Stack at a Glance</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-slate-300 font-medium text-sm mb-3">AI & GenAI</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Building production-grade LLM systems using LangChain, RAG pipelines, and Azure OpenAI.
                Experience deploying agentic workflows with LangSmith observability across enterprise environments.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-slate-300 font-medium text-sm mb-3">Full-Stack Engineering</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                End-to-end ownership: React/Next.js/React Native frontends, Node.js/Python backends,
                PostgreSQL and cloud databases, deployed on GCP, AWS, and Azure with Docker and Kubernetes.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-slate-300 font-medium text-sm mb-3">AI Security</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Designing SSPM systems, HIPAA/GDPR-compliant architectures, and Trusted Research Environments.
                Integrating Adaptive Shield, Azure Key Vault, and SOC2 analysis workflows.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-slate-300 font-medium text-sm mb-3">Data Engineering</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Building real-time pipelines with Apache Kafka, Airflow, and Spark. Experience with
                Azure Databricks at enterprise scale spanning 50+ environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="divider" /></div>

      <section className="section-sm">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            <Link href="/experience" className="btn btn-primary">See it in action</Link>
            <Link href="/contact" className="btn btn-outline">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
