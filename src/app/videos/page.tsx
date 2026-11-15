import type { Metadata } from "next";
import Link from "next/link";

// The videos come from Pranav Innovates' own feed (pranavinnovates.com/videos.json, written by Video Studio when a
// video goes live), so this page stays current without a redeploy: Vercel refreshes it every 6 hours.
export const revalidate = 21600;

const FEEDS = ["https://pranavinnovates.com/videos.json", "https://pranavinnovates.pages.dev/videos.json"];
const CHANNEL = {
  youtube: "https://www.youtube.com/@PranavInnovates",
  instagram: "https://www.instagram.com/pranavinnovates/",
  site: "https://pranavinnovates.com/videos/",
};

type Video = {
  title: string;
  url: string;
  series: string | null;
  published: string | null;
  summary: string;
  youtube: string | null;
  thumbnail: string | null;
  instagram: string | null;
};

async function getVideos(): Promise<Video[]> {
  for (const feed of FEEDS) {
    try {
      const r = await fetch(feed, { next: { revalidate } });
      if (!r.ok) continue;
      const data = await r.json();
      if (Array.isArray(data?.videos)) {
        return data.videos.filter(
          (v: Video) => typeof v?.title === "string" && typeof v?.url === "string" && v.url.startsWith("https://"),
        );
      }
    } catch {
      // try the next feed
    }
  }
  return [];
}

export const metadata: Metadata = {
  title: "Videos - Pranav Saji | Pranav Innovates: AI News, Dev Tools & AI Papers Explained",
  description:
    "Pranav Saji's video channel Pranav Innovates: daily tech news, developer tools worth your time, AI research papers explained and short AI lessons, on YouTube and Instagram.",
  alternates: { canonical: "https://pranav-saji.com/videos" },
  openGraph: {
    title: "Videos - Pranav Saji | Pranav Innovates",
    description:
      "Daily tech news, developer tools, AI research papers explained and short AI lessons from Pranav Saji's channel Pranav Innovates.",
    url: "https://pranav-saji.com/videos",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pranav-saji.com" },
    { "@type": "ListItem", position: 2, name: "Videos", item: "https://pranav-saji.com/videos" },
  ],
};

function day(v: Video) {
  if (!v.published) return "";
  const d = new Date(v.published);
  return isNaN(d.getTime()) ? "" : d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "America/Los_Angeles" });
}

export default async function Videos() {
  const videos = await getVideos();
  const groups = new Map<string, Video[]>();
  for (const v of videos) {
    const k = v.series || "Videos";
    groups.set(k, [...(groups.get(k) || []), v]);
  }
  const list = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pranav Innovates videos by Pranav Saji",
    itemListElement: videos.slice(0, 50).map((v, i) => ({ "@type": "ListItem", position: i + 1, url: v.url, name: v.title })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(list).replace(/</g, "\\u003c") }} />

      <div className="page-header">
        <div className="container">
          <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-3">Pranav Innovates</p>
          <h1 className="heading-lg text-white">
            <span className="text-gradient">Videos</span>
          </h1>
          <p className="text-slate-400 mt-3 text-base max-w-xl">
            My channel Pranav Innovates: the day&apos;s tech news, developer tools worth your time, AI research papers
            explained and short AI lessons.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href={CHANNEL.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-primary">YouTube</a>
            <a href={CHANNEL.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Instagram</a>
            <a href={CHANNEL.site} target="_blank" rel="noopener" className="btn btn-outline">All videos with sources</a>
          </div>
        </div>
      </div>

      {[...groups.entries()].map(([series, items]) => (
        <section key={series} className="section-sm">
          <div className="container">
            <h2 className="text-white font-semibold text-xl mb-6">{series}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.slice(0, 9).map((v) => (
                <article key={v.url} className="card overflow-hidden">
                  {v.thumbnail && (
                    <a href={v.url} target="_blank" rel="noopener" aria-label={v.title}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={v.thumbnail} alt={v.title} loading="lazy" className="w-full aspect-video object-cover" />
                    </a>
                  )}
                  <div className="p-6">
                    <p className="text-slate-500 text-xs mb-2">{day(v)}</p>
                    <h3 className="text-white font-semibold text-base leading-snug mb-2">
                      <a href={v.url} target="_blank" rel="noopener" className="hover:text-blue-300 transition-colors">
                        {v.title}
                      </a>
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{v.summary}</p>
                    <div className="flex flex-wrap gap-4 text-xs font-medium">
                      {v.youtube && (
                        <a href={v.youtube} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                          YouTube
                        </a>
                      )}
                      {v.instagram && (
                        <a href={v.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                          Instagram
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {videos.length === 0 && (
        <section className="section-sm">
          <div className="container">
            <p className="text-slate-400">
              The latest videos are on <a href={CHANNEL.youtube} className="text-blue-400">YouTube</a> and{" "}
              <a href={CHANNEL.instagram} className="text-blue-400">Instagram</a>.
            </p>
          </div>
        </section>
      )}

      <div className="container"><div className="divider" /></div>

      <section className="section-sm">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            <Link href="/writing" className="btn btn-primary">Writing & Press</Link>
            <Link href="/contact" className="btn btn-outline">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
