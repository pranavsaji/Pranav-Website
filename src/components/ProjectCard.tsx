import { projects, projectCategories } from "@/lib/data";
import { ACCENT, Accent } from "@/lib/projectStyles";

type Project = (typeof projects)[number];

const catBySlug = Object.fromEntries(projectCategories.map((c) => [c.slug, c]));

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18v4.5M18 6l-7.5 7.5M8 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

export default function ProjectCard({ project: p }: { project: Project }) {
  const cat = catBySlug[p.category];
  const a = ACCENT[(cat?.accent as Accent) ?? "blue"];

  return (
    <article className={`card p-6 flex flex-col ${a.hoverBorder} transition-all`}>
      <div className="flex items-center justify-between gap-3 mb-4">
        <span
          className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-md border ${a.pill}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
          {cat?.name}
        </span>
        {"featured" in p && p.featured && (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-300/90">
            ★ Featured
          </span>
        )}
      </div>

      <h3 className="text-white font-semibold text-lg leading-snug mb-1">{p.name}</h3>
      <p className={`text-sm font-medium mb-3 ${a.text}`}>{p.tagline}</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{p.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {p.tags.slice(0, 4).map((t) => (
          <span
            key={t}
            className="text-[11px] text-slate-400 bg-white/[0.04] border border-white/5 px-2 py-0.5 rounded"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06] mt-auto">
        <span className="flex items-center gap-1.5 text-xs text-slate-500">
          <span className={`w-2 h-2 rounded-full ${a.dot}`} />
          {p.language}
        </span>
        <div className="ml-auto flex items-center gap-3">
          {"demo" in p && p.demo && (
            <a
              href={p.demo as string}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-emerald-300 hover:text-emerald-200 transition-colors"
            >
              <ExternalIcon /> Live
            </a>
          )}
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            <GitHubIcon /> Code
          </a>
        </div>
      </div>
    </article>
  );
}
