import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, projectCategories } from "@/lib/data";
import { ACCENT, DOMAIN_ICON, Accent } from "@/lib/projectStyles";
import ProjectCard from "@/components/ProjectCard";

interface Props {
  params: Promise<{ domain: string }>;
}

const BASE = "https://pranav-saji.com";

export function generateStaticParams() {
  return projectCategories.map((c) => ({ domain: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { domain } = await params;
  const cat = projectCategories.find((c) => c.slug === domain);
  if (!cat) return {};

  const items = projects.filter((p) => p.category === cat.slug);
  const names = items.slice(0, 4).map((p) => p.name).join(", ");
  const url = `${BASE}/projects/${cat.slug}`;
  const title = `${cat.name} Projects`;
  const description = `${cat.name} projects by Pranav Saji: ${cat.tagline} Explore ${items.length} projects${names ? `, including ${names}` : ""}.`;

  return {
    title,
    description,
    keywords: [
      `${cat.name} projects`,
      `Pranav Saji ${cat.name}`,
      cat.name,
      "AI projects",
      "Pranav Saji portfolio",
      ...items.slice(0, 6).map((p) => p.name),
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${cat.name} Projects by Pranav Saji`,
      description,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${cat.name} projects by Pranav Saji` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cat.name} Projects by Pranav Saji`,
      description,
      creator: "@PranavInnovates",
    },
  };
}

export default async function DomainPage({ params }: Props) {
  const { domain } = await params;
  const cat = projectCategories.find((c) => c.slug === domain);
  if (!cat) notFound();

  const items = projects.filter((p) => p.category === cat.slug);
  const others = projectCategories.filter((c) => c.slug !== cat.slug);
  const a = ACCENT[cat.accent as Accent];
  const icon = DOMAIN_ICON[cat.slug];
  const url = `${BASE}/projects/${cat.slug}`;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": url,
    url,
    name: `${cat.name} Projects by Pranav Saji`,
    description: cat.tagline,
    isPartOf: { "@id": `${BASE}/#website` },
    about: { "@id": `${BASE}/#pranav-saji` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareSourceCode",
          name: p.name,
          description: p.description,
          codeRepository: p.repo,
          programmingLanguage: p.language,
          author: { "@type": "Person", "@id": `${BASE}/#pranav-saji`, name: "Pranav Saji" },
          ...(("demo" in p && p.demo) ? { url: p.demo } : {}),
        },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${BASE}/projects` },
      { "@type": "ListItem", position: 3, name: cat.name, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-slate-300 transition-colors">Projects</Link>
            <span>/</span>
            <span className={a.text}>{cat.name}</span>
          </nav>

          {/* Hero */}
          <div className="mb-14">
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl border mb-6 ${a.iconBg}`}>
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={icon} />
              </svg>
            </div>
            <h1 className="heading-lg text-white mb-4 max-w-3xl">
              {cat.name}{" "}
              <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-5">{cat.tagline}</p>
            <p className={`text-sm font-medium ${a.text}`}>
              {items.length} {items.length === 1 ? "project" : "projects"} in this domain
            </p>
          </div>

          {/* Projects grid */}
          {items.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          ) : (
            <p className="text-slate-500">No projects in this domain yet.</p>
          )}

          {/* Explore other domains */}
          <div className="mt-20">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
              Explore Other Domains
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {others.map((c) => {
                const ca = ACCENT[c.accent as Accent];
                const cn = projects.filter((p) => p.category === c.slug).length;
                return (
                  <Link
                    key={c.slug}
                    href={`/projects/${c.slug}`}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-colors bg-white/[0.02] border-white/10 text-slate-400 hover:text-white ${ca.hoverBorder}`}
                  >
                    {c.name}
                    <span className="text-xs opacity-60">{cn}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 flex flex-wrap items-center gap-3">
            <Link href="/projects" className="btn btn-outline">
              ← All projects
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Work with me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
