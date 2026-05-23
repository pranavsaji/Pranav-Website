@AGENTS.md

# Pranav Website — Claude Context

## Purpose
Personal portfolio site for Pranav Saji (AI Leader, SF Bay Area) — deployed at pranav-saji.com.

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript 5
- Tailwind CSS v4 (PostCSS plugin, `@import "tailwindcss"` in globals.css)
- No database, no auth, no API routes — fully static output

## File Map
| File | Purpose |
|------|---------|
| `src/lib/data.ts` | Single source of truth — all content (experiences, stats, skills, recognitions, publications) |
| `src/app/globals.css` | Global styles, custom classes (`.card`, `.btn`, `.stat-card`, `.text-gradient`, `.tag`) |
| `src/app/layout.tsx` | Root layout — fonts, Nav, Footer |
| `src/app/page.tsx` | Home: hero, stats strip, featured experience, skills preview, CTA |
| `src/components/Nav.tsx` | Top nav with "Get in touch" CTA |
| `src/app/*/page.tsx` | Sub-pages: about, experience, skills, recognitions, research, contact |

## CLI / Entry Points
```bash
npm run dev      # local dev (localhost:3000)
npm run build    # production build
npm run lint     # ESLint
```

## Key Design Decisions
- All site content lives in `src/lib/data.ts` — edit there, not in page components
- Hero photo: portrait rectangle `360×450px`, `rounded-2xl`, `object-top` crop — not a circle
- Stats strip: 3 leader-tier metrics only (`$50M+`, `3M+`, `Fortune 500`) — keep executive-level, no percentages
- Color system: `#040d1e` navy background; blue-indigo gradient (`#3b82f6 → #6366f1 → #0ea5e9`) for `.text-gradient`; trust-building deep navy matches LinkedIn/IBM aesthetic
- No `node_modules` present in repo — run `npm install` before `npm run dev`

## Git / Deploy
- Remote: `git@github.com:pranavsaji/Pranav-Website.git` (branch: `main`)
- Deploy: Vercel (connected to GitHub, auto-deploys on push to `main`)
- Domain: pranav-saji.com

## Last Updated
2026-05-22
