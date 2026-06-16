---
name: publish-indexnow
description: After any change that affects published pages is deployed to production, ping IndexNow so Bing, Yandex, and DuckDuckGo (and Bing-powered AI search) re-index immediately. Use whenever content/SEO/page changes are committed and pushed to main, or when the user says "publish", "ship", "deploy", or "submit to indexnow".
---

# Publish + IndexNow

When a change to a **published page** (any route under `src/app/`, blog content in `content/blog/`, `sitemap.ts`, schema, metadata, or `llms.txt`) is shipped, notify IndexNow so search engines crawl the new/changed URLs right away.

Google does NOT use IndexNow — it stays on the sitemap/GSC path. This skill is for Bing, Yandex, DuckDuckGo, and Bing-powered AI engines (ChatGPT Search, Copilot).

## When to run

Run **after** the change is committed, pushed to `main`, and the Vercel production deploy is **live**. Do NOT submit before deploy — IndexNow validates against the live URL and the key file, so pre-deploy submissions are pointless (URLs aren't live) or fail (403).

Skip entirely for changes that don't alter any published page (e.g. README, internal tooling, `.claude/`, comments-only edits).

## Steps

1. **Confirm the deploy is live.** Either check `vercel ls` shows the newest Production deploy as `Ready`, or poll the affected URL until it returns 200:
   ```bash
   until curl -s -o /dev/null -w "%{http_code}" "https://pranav-saji.com/" | grep -q "200"; do sleep 5; done
   ```

2. **Determine which URLs changed** from the files in the just-pushed commit(s):
   - A changed `content/blog/<slug>.md` → `https://pranav-saji.com/blog/<slug>`
   - A changed `src/app/<route>/page.tsx` → `https://pranav-saji.com/<route>` (root `page.tsx` → `https://pranav-saji.com/`)
   - Changes to `sitemap.ts`, root `layout.tsx`, shared components, or a new post → submit the **full sitemap** instead (run with no args).

3. **Submit.** Prefer the narrow set of changed URLs; use the full sitemap only when many pages or shared files changed:
   ```bash
   # specific changed URLs (preferred for routine updates)
   npm run indexnow https://pranav-saji.com/blog/<slug> https://pranav-saji.com/<route>

   # OR full sitemap (new post, sitemap change, or site-wide change)
   npm run indexnow
   ```

4. **Confirm the response.** `HTTP 200` or `202` = accepted. `403` = key file not live (deploy not finished, wait and retry). `422` = a URL isn't on pranav-saji.com. `429` = submitting too often; back off.

## Guardrails

- **Avoid full-sitemap blasts on every small edit** — IndexNow flags repeated bulk submissions as spam (429). For a single edited post, submit just that one URL.
- The key file lives at `public/e828852640d449cc9f96d0dcd2071ff6.txt` and ships with the deploy. If you rotate the key, update both that file and `tools/indexnow.mjs`.
- This does nothing for Google. For Google, the sitemap in Search Console is the path.
