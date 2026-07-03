"use client";

import { useState, useMemo } from "react";
import { projects, projectCategories } from "@/lib/data";
import { ACCENT, Accent } from "@/lib/projectStyles";
import ProjectCard from "@/components/ProjectCard";

const catBySlug = Object.fromEntries(projectCategories.map((c) => [c.slug, c]));

export default function ProjectsExplorer() {
  const [active, setActive] = useState<string>("all");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: projects.length };
    for (const p of projects) c[p.category] = (c[p.category] ?? 0) + 1;
    return c;
  }, []);

  const visible = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActive("all")}
          className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
            active === "all"
              ? "bg-white/10 text-white border-white/25"
              : "bg-white/[0.02] text-slate-400 border-white/10 hover:text-white hover:border-white/20"
          }`}
        >
          All Work
          <span className="ml-2 text-xs opacity-60">{counts.all}</span>
        </button>
        {projectCategories.map((cat) => {
          const a = ACCENT[cat.accent as Accent];
          const isActive = active === cat.slug;
          return (
            <button
              key={cat.slug}
              onClick={() => setActive(cat.slug)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                isActive
                  ? a.activeBtn
                  : "bg-white/[0.02] text-slate-400 border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {cat.name}
              <span className="ml-2 text-xs opacity-60">{counts[cat.slug] ?? 0}</span>
            </button>
          );
        })}
      </div>

      {/* Active domain tagline + deep link to the standalone domain page */}
      {active !== "all" && catBySlug[active] && (
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <p className="text-slate-400 text-sm max-w-2xl">{catBySlug[active].tagline}</p>
          <a
            href={`/projects/${active}`}
            className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap"
          >
            Open domain page →
          </a>
        </div>
      )}

      {/* Project grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
