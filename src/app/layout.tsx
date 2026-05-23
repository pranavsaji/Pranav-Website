import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://pranav-saji.com"),
  title: {
    default: "Pranav Saji — AI Leader, Tech Entrepreneur & Full-Stack Engineer | San Francisco",
    template: "%s — Pranav Saji",
  },
  description:
    "Pranav Saji is a Tech Entrepreneur, Generative AI Expert, Full-Stack Engineer, and Product Leader in San Francisco Bay Area. Head of AI Security at Symosis Security, Machine Learning Consultant at LinkedIn. Ex-Deloitte. Microsoft, Databricks, Oracle, Comptia certified.",
  keywords: [
    "Pranav Saji",
    "pranav saji",
    "Pranav Saji AI",
    "Pranav Saji engineer",
    "Pranav Saji LinkedIn",
    "Pranav Saji San Francisco",
    "Pranav Saji Symosis Security",
    "Pranav Saji Generative AI",
    "Pranav Saji portfolio",
    "pranav saji website",
    "AI Leader San Francisco",
    "Generative AI Expert Bay Area",
    "Machine Learning Consultant LinkedIn",
    "Head of AI Security",
    "Full Stack Engineer AI San Francisco",
    "USAII Hackathon Judge Speaker",
    "LangChain engineer San Francisco",
    "RAG AI engineer",
  ],
  authors: [{ name: "Pranav Saji", url: "https://pranav-saji.com" }],
  creator: "Pranav Saji",
  publisher: "Pranav Saji",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://pranav-saji.com",
    siteName: "Pranav Saji",
    title: "Pranav Saji — AI Leader, Tech Entrepreneur & Full-Stack Engineer",
    description:
      "Tech Entrepreneur, Generative AI Expert, and Full-Stack Engineer building AI-first platforms. Head of AI Security at Symosis Security, ML Consultant at LinkedIn. Based in San Francisco Bay Area.",
    images: [{ url: "/pranav-saji.png", width: 800, height: 1000, alt: "Pranav Saji" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Saji — AI Leader & Full-Stack Engineer",
    description: "Tech Entrepreneur, Generative AI Expert, Full-Stack Engineer. San Francisco Bay Area.",
    images: ["/pranav-saji.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "https://pranav-saji.com" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://pranav-saji.com/#pranav-saji",
      name: "Pranav Saji",
      givenName: "Pranav",
      familyName: "Saji",
      url: "https://pranav-saji.com",
      image: { "@type": "ImageObject", url: "https://pranav-saji.com/pranav-saji.png" },
      jobTitle: ["Head of AI Security", "Machine Learning Consultant", "Tech Entrepreneur"],
      worksFor: [
        { "@type": "Organization", name: "Symosis Security" },
        { "@type": "Organization", name: "LinkedIn" },
      ],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Illinois Institute of Technology" },
        { "@type": "CollegeOrUniversity", name: "Model Engineering College" },
        { "@type": "CollegeOrUniversity", name: "International Institute of Information Technology Bangalore" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        addressCountry: "US",
      },
      email: "pranavs.mec@gmail.com",
      sameAs: [
        "https://www.linkedin.com/in/pranav-saji/",
        "https://github.com/pranavsaji",
        "https://pranavsaji.github.io/",
      ],
      knowsAbout: [
        "Generative AI", "Machine Learning", "AI Security", "Full-Stack Engineering",
        "Next.js", "React", "LangChain", "RAG", "Azure Databricks", "Python", "Node.js",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://pranav-saji.com/#website",
      url: "https://pranav-saji.com",
      name: "Pranav Saji",
      description: "Personal website of Pranav Saji — AI Leader, Tech Entrepreneur, Full-Stack Engineer",
      publisher: { "@id": "https://pranav-saji.com/#pranav-saji" },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: "https://pranav-saji.com/search?q={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <meta name="theme-color" content="#040d1e" />
        <link rel="canonical" href="https://pranav-saji.com" />
      </head>
      <body className="bg-[#040d1e] text-slate-100 min-h-screen">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
