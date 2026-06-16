#!/usr/bin/env node
// Submit the site's URLs to IndexNow (Bing, Yandex, DuckDuckGo, etc.).
// Google does NOT use IndexNow — it stays on the normal sitemap/crawl path.
//
// Usage:
//   node tools/indexnow.mjs            # submit every URL in sitemap.xml
//   node tools/indexnow.mjs <url> ...  # submit only the URLs you pass
//
// Run this after publishing or updating content. The key file must already be
// live at HOST/KEY.txt (it ships in public/), or IndexNow returns 403.

const HOST = "pranav-saji.com";
const KEY = "e828852640d449cc9f96d0dcd2071ff6";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";

async function urlsFromSitemap() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Failed to fetch sitemap (${res.status})`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function main() {
  const cliUrls = process.argv.slice(2);
  const urlList = cliUrls.length ? cliUrls : await urlsFromSitemap();

  if (!urlList.length) {
    console.error("No URLs to submit.");
    process.exit(1);
  }

  // Guard: every URL must belong to HOST or IndexNow rejects the batch (422).
  const stray = urlList.filter((u) => !u.includes(HOST));
  if (stray.length) {
    console.error(`These URLs are not on ${HOST}:\n  ${stray.join("\n  ")}`);
    process.exit(1);
  }

  console.log(`Submitting ${urlList.length} URL(s) to IndexNow...`);
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });

  const body = await res.text();
  const codes = {
    200: "OK — URLs submitted successfully.",
    202: "Accepted — URLs received, key validation pending.",
    400: "Bad request — invalid format.",
    403: "Forbidden — key file not found or key mismatch. Is the .txt file live?",
    422: "Unprocessable — a URL does not belong to the host, or key/schema mismatch.",
    429: "Too many requests — slow down (possible spam flag).",
  };
  console.log(`HTTP ${res.status}: ${codes[res.status] ?? body ?? "unknown response"}`);
  process.exit(res.status === 200 || res.status === 202 ? 0 : 1);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
