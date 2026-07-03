// Shared accent + icon maps for project surfaces (explorer, domain pages, tiles,
// home teaser). Full class strings are written out so the Tailwind JIT keeps them.

export type Accent =
  | "red"
  | "indigo"
  | "emerald"
  | "amber"
  | "blue"
  | "fuchsia"
  | "cyan"
  | "violet";

export const ACCENT: Record<
  Accent,
  {
    pill: string;
    dot: string;
    activeBtn: string;
    hoverBorder: string;
    text: string;
    tileBg: string;
    tileBorder: string;
    iconBg: string;
    glow: string;
  }
> = {
  red: {
    pill: "bg-red-500/10 text-red-300 border-red-500/20",
    dot: "bg-red-400",
    activeBtn: "bg-red-500/15 text-red-200 border-red-500/40",
    hoverBorder: "hover:border-red-500/40",
    text: "text-red-300",
    tileBg: "from-red-500/[0.08]",
    tileBorder: "hover:border-red-500/40",
    iconBg: "bg-red-500/10 text-red-300 border-red-500/20",
    glow: "bg-red-500/20",
  },
  indigo: {
    pill: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    dot: "bg-indigo-400",
    activeBtn: "bg-indigo-500/15 text-indigo-200 border-indigo-500/40",
    hoverBorder: "hover:border-indigo-500/40",
    text: "text-indigo-300",
    tileBg: "from-indigo-500/[0.08]",
    tileBorder: "hover:border-indigo-500/40",
    iconBg: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    glow: "bg-indigo-500/20",
  },
  emerald: {
    pill: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    dot: "bg-emerald-400",
    activeBtn: "bg-emerald-500/15 text-emerald-200 border-emerald-500/40",
    hoverBorder: "hover:border-emerald-500/40",
    text: "text-emerald-300",
    tileBg: "from-emerald-500/[0.08]",
    tileBorder: "hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    glow: "bg-emerald-500/20",
  },
  amber: {
    pill: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    dot: "bg-amber-400",
    activeBtn: "bg-amber-500/15 text-amber-200 border-amber-500/40",
    hoverBorder: "hover:border-amber-500/40",
    text: "text-amber-300",
    tileBg: "from-amber-500/[0.08]",
    tileBorder: "hover:border-amber-500/40",
    iconBg: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    glow: "bg-amber-500/20",
  },
  blue: {
    pill: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    dot: "bg-blue-400",
    activeBtn: "bg-blue-500/15 text-blue-200 border-blue-500/40",
    hoverBorder: "hover:border-blue-500/40",
    text: "text-blue-300",
    tileBg: "from-blue-500/[0.08]",
    tileBorder: "hover:border-blue-500/40",
    iconBg: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    glow: "bg-blue-500/20",
  },
  fuchsia: {
    pill: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20",
    dot: "bg-fuchsia-400",
    activeBtn: "bg-fuchsia-500/15 text-fuchsia-200 border-fuchsia-500/40",
    hoverBorder: "hover:border-fuchsia-500/40",
    text: "text-fuchsia-300",
    tileBg: "from-fuchsia-500/[0.08]",
    tileBorder: "hover:border-fuchsia-500/40",
    iconBg: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20",
    glow: "bg-fuchsia-500/20",
  },
  cyan: {
    pill: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    dot: "bg-cyan-400",
    activeBtn: "bg-cyan-500/15 text-cyan-200 border-cyan-500/40",
    hoverBorder: "hover:border-cyan-500/40",
    text: "text-cyan-300",
    tileBg: "from-cyan-500/[0.08]",
    tileBorder: "hover:border-cyan-500/40",
    iconBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    glow: "bg-cyan-500/20",
  },
  violet: {
    pill: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    dot: "bg-violet-400",
    activeBtn: "bg-violet-500/15 text-violet-200 border-violet-500/40",
    hoverBorder: "hover:border-violet-500/40",
    text: "text-violet-300",
    tileBg: "from-violet-500/[0.08]",
    tileBorder: "hover:border-violet-500/40",
    iconBg: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    glow: "bg-violet-500/20",
  },
};

// One line-art icon (SVG path d) per project domain slug.
export const DOMAIN_ICON: Record<string, string> = {
  "ai-security": "M12 2 4 5v6c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3zm-1.2 12.2L8 11.4l1.4-1.4 1.4 1.4L14.6 8 16 9.4l-5.2 4.8z",
  agentic: "M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3M6 6h12v12H6zM10 10h4v4h-4z",
  healthcare: "M12 21C7 17 3 13.6 3 9.6 3 7 5 5 7.5 5c1.6 0 3 .8 3.9 2 .9-1.2 2.3-2 3.9-2C19 5 21 7 21 9.6c0 4-4 7.4-9 11.4z",
  finance: "M4 19V5M4 19h16M8 15l3.2-3.2 2.6 2.2L19 9",
  enterprise: "M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4M9 10h.01M15 10h.01M9 13.5h.01M15 13.5h.01",
  content: "M12 3l1.9 4.6L18.5 8.5l-4.6 1.9L12 15l-1.9-4.6L5.5 8.5l4.6-.9L12 3zM18 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z",
  devtools: "M8 7l-4 5 4 5M16 7l4 5-4 5M14 4l-4 16",
  "applied-ml": "M4 20V4M4 20h16M8 20v-5M12 20V9M16 20v-8",
};
