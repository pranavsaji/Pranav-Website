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
| `src/lib/data.ts` | Single source of truth — all content (experiences, stats, skills, recognitions, publications, `projects`, `projectCategories`, `symosisProjects`) |
| `src/lib/projectStyles.ts` | `ACCENT` (Tailwind class strings per accent color) + `DOMAIN_ICON` (SVG path per domain slug) — a new project domain needs entries in both |
| `src/app/projects/` | Projects hub (67 open-source + 24 Symosis = "90+"), per-domain SEO pages at `/projects/[domain]` (9 domains incl. `systems`), all derived from `projectCategories` |
| `src/app/globals.css` | Global styles, custom classes (`.card`, `.btn`, `.stat-card`, `.text-gradient`, `.tag`) |
| `src/app/layout.tsx` | Root layout — fonts, Nav, Footer |
| `src/app/page.tsx` | Home: hero, stats strip, featured experience, skills preview, FAQ, CTA |
| `src/app/ai/page.tsx` | SEO pillar page — "Pranav Saji AI Leader & Expert" hub targeting "pranav ai"; pillars, stats, post list, FAQ, Connect-with-Pranav block; ProfilePage + FAQPage schema. In nav as "AI" |
| `src/app/ai-security/page.tsx` | SEO pillar page — "Pranav Saji AI Security Expert" hub; auto-links all AI-security blog posts (cluster), ProfilePage + FAQPage schema. Linked from /ai (not in nav) |
| `src/components/Nav.tsx` | Top nav with "Get in touch" CTA |
| `src/app/*/page.tsx` | Sub-pages: about, experience, ai-security, skills, recognitions, research, writing, blog, contact |

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
- Projects tab mirrors github.com/pranavsaji (82 repos): all substantive repos are in `data.ts`; test/fork/profile repos (claude-test, rufus, churntest, fluttertest*, Course, portfolio forks, tipcalculator, older portfolios, Java-Project) deliberately excluded
- Project counts ("90+") are hardcoded in `/projects` metadata + `llms.txt` — update both when adding projects; bump `/projects` date in `sitemap.ts`

## Git / Deploy
- Remote: `git@github.com:pranavsaji/Pranav-Website.git` (branch: `main`)
- Deploy: Vercel (connected to GitHub, auto-deploys on push to `main`)
- Domain: pranav-saji.com

## Press Outreach Structure

### media-article/
Contains drafted articles for trade publication submission. One file per article. Each file has a comment block at the top with submission metadata (outlet, email, word count, status). Do not deploy these as web pages — they are working documents only.

| File | Outlet | Status |
|---|---|---|
| `mcp-poisoning-your-agent-trusts-its-tools.md` | HackerNoon | Published 2026-06-03 — [link](https://hackernoon.com/your-ai-agent-trusts-its-tools-too-much) |
| `sspm-illusion-of-control-dark-reading.md` | Dark Reading | Ready to send |
| `deepfake-cfo-fraud-sc-media.md` | SC Media | Ready to send |
| `ai-agents-fail-integration-layer-venturebeat.md` | VentureBeat | Submitted, watch Google Doc |
| `ai-finds-zero-days-what-security-teams-must-do.md` | Dark Reading / SC Media | Ready to send |
| `ai-coding-agents-rce-trustfall-symjack-dark-reading.md` | Dark Reading / The Hacker News | Draft, news hook fresh (SymJack May 26, TrustFall June 2026) |
| `ai-cyber-weapon-executive-order-mexico-breach-venturebeat.md` | VentureBeat / SC Media | Draft, news hook fresh (EO signed June 2, 2026) |

### qwoted/
One file per Qwoted journalist opportunity. Named `NNN-short-description-reporter-name.md`. Each file contains: opportunity details, why it fits Pranav, the exact pitch sent, and an outcome tracker. Update outcome when the article publishes or the pitch is not selected.

Convention: never write a new pitch without creating a corresponding file here first.

## Last Updated
2026-07-08
