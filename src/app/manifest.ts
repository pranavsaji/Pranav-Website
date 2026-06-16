import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pranav Saji - AI Leader & AI Security Expert",
    short_name: "Pranav Saji",
    description:
      "Personal site of Pranav Saji - AI Leader, Tech Entrepreneur, and AI Security expert in the San Francisco Bay Area.",
    start_url: "/",
    display: "standalone",
    background_color: "#040d1e",
    theme_color: "#040d1e",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
