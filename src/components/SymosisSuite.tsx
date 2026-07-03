import { symosisProjects, symosisGroups } from "@/lib/data";

type Accent = "red" | "blue" | "amber" | "violet" | "cyan" | "emerald";

const ACCENT: Record<Accent, { pill: string; dot: string; text: string; hoverBorder: string; bar: string }> = {
  red: {
    pill: "bg-red-500/10 text-red-300 border-red-500/20",
    dot: "bg-red-400",
    text: "text-red-300",
    hoverBorder: "hover:border-red-500/40",
    bar: "bg-red-400",
  },
  blue: {
    pill: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    dot: "bg-blue-400",
    text: "text-blue-300",
    hoverBorder: "hover:border-blue-500/40",
    bar: "bg-blue-400",
  },
  amber: {
    pill: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    dot: "bg-amber-400",
    text: "text-amber-300",
    hoverBorder: "hover:border-amber-500/40",
    bar: "bg-amber-400",
  },
  violet: {
    pill: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    dot: "bg-violet-400",
    text: "text-violet-300",
    hoverBorder: "hover:border-violet-500/40",
    bar: "bg-violet-400",
  },
  cyan: {
    pill: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    dot: "bg-cyan-400",
    text: "text-cyan-300",
    hoverBorder: "hover:border-cyan-500/40",
    bar: "bg-cyan-400",
  },
  emerald: {
    pill: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    dot: "bg-emerald-400",
    text: "text-emerald-300",
    hoverBorder: "hover:border-emerald-500/40",
    bar: "bg-emerald-400",
  },
};

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path strokeLinecap="round" d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export default function SymosisSuite() {
  const groupsBySlug = Object.fromEntries(symosisGroups.map((g) => [g.slug, g]));

  return (
    <section id="symosis" className="mb-24">
      {/* Section intro */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/[0.07] via-transparent to-indigo-500/[0.05] p-8 md:p-10 mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Symosis Security Suite
          </span>
        </div>
        <h2 className="heading-md text-white mb-4 max-w-3xl">
          A production security-product suite,{" "}
          <span className="text-gradient">built single-handedly</span>
        </h2>
        <p className="text-slate-400 leading-relaxed max-w-3xl mb-6">
          As Head of AI Security at Symosis Security, I designed and shipped a
          portfolio of 20+ production and production-grade platforms across the
          AI-security and GRC space, from multi-cloud AI-agent governance and
          autonomous penetration testing to compliance automation and governed
          RAG. Each one is engineered on a signature Workflows to Agents to Tools
          pattern that confines the LLM to reasoning while enforcing detection and
          policy in deterministic, unit-tested code.
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {[
            { v: `${symosisProjects.length}`, l: "Platforms built" },
            { v: `${symosisGroups.length}`, l: "Product lines" },
            { v: "20+", l: "Regulatory frameworks mapped" },
            { v: "9", l: "Multi-LLM providers shipped" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-2xl font-bold text-white">{s.v}</div>
              <div className="text-xs text-slate-500 mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Groups */}
      <div className="space-y-14">
        {symosisGroups.map((group) => {
          const items = symosisProjects.filter((p) => p.group === group.slug);
          if (items.length === 0) return null;
          const a = ACCENT[group.accent as Accent];
          return (
            <div key={group.slug}>
              <div className="flex items-baseline gap-3 mb-1">
                <span className={`w-1.5 h-6 rounded-full ${a.bar}`} />
                <h3 className="text-white font-semibold text-lg">{group.name}</h3>
                <span className="text-slate-600 text-sm">{items.length}</span>
              </div>
              <p className="text-slate-500 text-sm mb-6 ml-4 max-w-2xl">{group.tagline}</p>

              <div className="grid md:grid-cols-2 gap-5">
                {items.map((p) => (
                  <article
                    key={p.slug}
                    className={`card p-6 flex flex-col ${a.hoverBorder} transition-all`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h4 className="text-white font-semibold text-lg leading-tight">
                          {p.name}
                        </h4>
                        <p className="text-slate-500 text-xs mt-0.5">{p.codename}</p>
                      </div>
                      {"featured" in p && p.featured && (
                        <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-amber-300/90">
                          ★ Flagship
                        </span>
                      )}
                    </div>

                    <p className={`text-sm font-medium mb-3 ${a.text}`}>{p.tagline}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {p.description}
                    </p>

                    {/* Highlight metric */}
                    <div className={`flex items-start gap-2 rounded-lg border px-3 py-2 mb-4 ${a.pill}`}>
                      <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
                      </svg>
                      <span className="text-xs leading-snug">{p.highlight}</span>
                    </div>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.stack.slice(0, 6).map((t) => (
                        <span
                          key={t}
                          className="text-[11px] text-slate-400 bg-white/[0.04] border border-white/5 px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Frameworks */}
                    {p.frameworks && p.frameworks.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 mb-5">
                        <span className="text-[10px] uppercase tracking-wider text-slate-600">
                          Standards
                        </span>
                        {p.frameworks.map((f) => (
                          <span key={f} className="text-[11px] text-slate-500">
                            {f}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/[0.06] mt-auto">
                      {"badge" in p && p.badge ? (
                        <span className="text-[11px] font-medium text-blue-300">
                          {p.badge as string}
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-600">
                          Symosis Security
                        </span>
                      )}
                      {"repo" in p && p.repo ? (
                        <a
                          href={p.repo as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                        >
                          <GitHubIcon /> View code
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                          <LockIcon /> Proprietary
                        </span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
