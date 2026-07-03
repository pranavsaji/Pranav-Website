import Link from "next/link";
import { projects, projectCategories } from "@/lib/data";
import { ACCENT, DOMAIN_ICON, Accent } from "@/lib/projectStyles";

export default function DomainTiles({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-4 ${compact ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
      {projectCategories.map((cat) => {
        const n = projects.filter((p) => p.category === cat.slug).length;
        const a = ACCENT[cat.accent as Accent];
        const icon = DOMAIN_ICON[cat.slug];
        return (
          <Link
            key={cat.slug}
            href={`/projects/${cat.slug}`}
            aria-label={`View ${cat.name} projects`}
            className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${a.tileBg} to-transparent p-5 transition-all ${a.tileBorder} hover:-translate-y-0.5`}
          >
            {/* hover glow */}
            <div
              className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full ${a.glow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`}
            />
            <div className="relative">
              <div
                className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border mb-4 ${a.iconBg}`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={icon} />
                </svg>
              </div>

              <div className="flex items-center justify-between gap-2 mb-1.5">
                <h3 className="text-white font-semibold text-sm leading-tight">{cat.name}</h3>
                <span className={`text-xs font-medium ${a.text} shrink-0`}>{n}</span>
              </div>

              {!compact && (
                <p className="text-slate-400 text-xs leading-relaxed mb-3">{cat.tagline}</p>
              )}

              <span className={`inline-flex items-center gap-1 text-xs font-medium ${a.text}`}>
                View projects
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
