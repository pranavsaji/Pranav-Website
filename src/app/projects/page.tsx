import type { Metadata } from "next";
import Link from "next/link";
import { projects, projectCategories, symosisProjects } from "@/lib/data";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import SymosisSuite from "@/components/SymosisSuite";

export const metadata: Metadata = {
  title: "AI Projects - Security Platforms, Healthcare, Finance & Agentic AI",
  description:
    "70+ AI projects by Pranav Saji, including a production Symosis Security suite (AI-agent governance, autonomous pentesting, SSPM, GRC automation) plus open-source work across healthcare, finance, agentic AI, and enterprise search, organized by domain.",
  keywords: [
    "Pranav Saji projects",
    "AI portfolio",
    "AI security platforms",
    "Symosis Security",
    "AI agent governance",
    "SSPM",
    "GRC automation",
    "autonomous penetration testing",
    "agentic AI projects",
    "healthcare AI projects",
    "finance AI projects",
    "AI security projects",
    "LLM projects",
    "RAG projects",
    "multi-agent systems",
    "generative AI portfolio",
    "AI developer San Francisco",
  ],
  alternates: { canonical: "https://pranav-saji.com/projects" },
  openGraph: {
    type: "website",
    url: "https://pranav-saji.com/projects",
    title: "AI Projects by Pranav Saji - Security Platforms, Healthcare, Finance & Agentic AI",
    description:
      "70+ AI projects: a production Symosis Security suite plus open-source work across healthcare, finance, agentic AI, and enterprise, organized by domain.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pranav Saji AI Projects" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Projects by Pranav Saji",
    description:
      "50+ AI projects across healthcare, finance, security, and agentic AI, organized by domain.",
    creator: "@PranavInnovates",
  },
};

const DOMAIN_ACCENT: Record<string, string> = {
  red: "text-red-300 border-red-500/20 bg-red-500/[0.04]",
  indigo: "text-indigo-300 border-indigo-500/20 bg-indigo-500/[0.04]",
  emerald: "text-emerald-300 border-emerald-500/20 bg-emerald-500/[0.04]",
  amber: "text-amber-300 border-amber-500/20 bg-amber-500/[0.04]",
  blue: "text-blue-300 border-blue-500/20 bg-blue-500/[0.04]",
  fuchsia: "text-fuchsia-300 border-fuchsia-500/20 bg-fuchsia-500/[0.04]",
  cyan: "text-cyan-300 border-cyan-500/20 bg-cyan-500/[0.04]",
  violet: "text-violet-300 border-violet-500/20 bg-violet-500/[0.04]",
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://pranav-saji.com/projects",
  url: "https://pranav-saji.com/projects",
  name: "AI Projects by Pranav Saji",
  description:
    "A portfolio of 70+ AI and machine learning projects, including a production Symosis Security suite and open-source work across healthcare, finance, cybersecurity, agentic AI, and enterprise search.",
  isPartOf: { "@id": "https://pranav-saji.com/#website" },
  about: { "@id": "https://pranav-saji.com/#pranav-saji" },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: symosisProjects.length + projects.length,
    itemListElement: [
      ...symosisProjects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: p.name,
          applicationCategory: "SecurityApplication",
          description: p.description,
          author: { "@type": "Person", "@id": "https://pranav-saji.com/#pranav-saji", name: "Pranav Saji" },
          ...(("repo" in p && p.repo) ? { codeRepository: p.repo } : {}),
        },
      })),
      ...projects.map((p, i) => ({
        "@type": "ListItem",
        position: symosisProjects.length + i + 1,
        item: {
          "@type": "SoftwareSourceCode",
          name: p.name,
          description: p.description,
          codeRepository: p.repo,
          programmingLanguage: p.language,
          author: { "@type": "Person", "@id": "https://pranav-saji.com/#pranav-saji", name: "Pranav Saji" },
          ...(("demo" in p && p.demo) ? { url: p.demo } : {}),
        },
      })),
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pranav-saji.com" },
    { "@type": "ListItem", position: 2, name: "Projects", item: "https://pranav-saji.com/projects" },
  ],
};

export default function ProjectsPage() {
  const domainCount = projectCategories.length;
  const totalCount = projects.length + symosisProjects.length;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-4">
              Projects
            </p>
            <h1 className="heading-lg text-white mb-5 max-w-3xl">
              AI Built Across{" "}
              <span className="text-gradient">Every Domain That Matters</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              A working portfolio of {totalCount}+ projects, from a production
              security-product suite shipped as Head of AI Security at Symosis, to
              open-source AI work spanning healthcare, finance, agentic systems,
              and the enterprise.
            </p>
          </div>

          {/* Stat strip */}
          <div className="grid grid-cols-3 gap-4 mb-16 max-w-xl">
            <div className="stat-card text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{totalCount}+</div>
              <div className="text-xs text-slate-500 mt-1">Projects</div>
            </div>
            <div className="stat-card text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{symosisProjects.length}</div>
              <div className="text-xs text-slate-500 mt-1">Security Platforms</div>
            </div>
            <div className="stat-card text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{domainCount}</div>
              <div className="text-xs text-slate-500 mt-1">Domains</div>
            </div>
          </div>

          {/* Symosis Security Suite - flagship production work */}
          <SymosisSuite />

          <div className="divider mb-16" />

          {/* Domain overview */}
          <div className="mb-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">
              Open-Source & Personal Projects
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl">
              Public builds across every domain I work in. Filter to see depth in
              a space.
            </p>
          </div>
          <div className="mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
              Domains
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {projectCategories.map((cat) => {
                const n = projects.filter((p) => p.category === cat.slug).length;
                return (
                  <div
                    key={cat.slug}
                    className={`rounded-xl border p-5 ${DOMAIN_ACCENT[cat.accent]}`}
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-white font-semibold text-sm">{cat.name}</h3>
                      <span className="text-xs opacity-70">{n}</span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">{cat.tagline}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive explorer */}
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
            Explore All Work
          </h2>
          <ProjectsExplorer />

          {/* CTA */}
          <div className="mt-20 card p-8 md:p-10 text-center">
            <h2 className="text-white text-xl md:text-2xl font-semibold mb-3">
              Building something ambitious with AI?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-6">
              I lead AI engineering and security for enterprises and startups,
              from first prototype to production. Let&apos;s talk about what you
              are building.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                Get in touch
              </Link>
              <a
                href="https://github.com/pranavsaji"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
