import { ImageResponse } from "next/og";
import { getPostBySlug, getPostSlugs, formatDate } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Pranav Saji blog post";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #040d1e 0%, #0a1a35 100%)",
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            color: "#94a3b8",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "6px 18px",
              borderRadius: 8,
              border: "1px solid rgba(59,130,246,0.4)",
              background: "rgba(59,130,246,0.12)",
              color: "#60a5fa",
            }}
          >
            {post.category}
          </div>
          <div style={{ display: "flex" }}>{formatDate(post.date)}</div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: post.title.length > 70 ? 52 : 62,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 1020,
          }}
        >
          {post.title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                borderRadius: 32,
                background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                fontSize: 26,
                fontWeight: 700,
              }}
            >
              PS
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 30, fontWeight: 600 }}>
                Pranav Saji
              </div>
              <div style={{ display: "flex", fontSize: 22, color: "#94a3b8" }}>
                AI Leader · AI Security
              </div>
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#64748b" }}>
            pranav-saji.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
