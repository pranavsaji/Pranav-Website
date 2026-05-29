import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://pranav-saji.com"),
  title: {
    default: "Pranav Saji - AI Leader, Tech Entrepreneur & Full-Stack Engineer | San Francisco",
    template: "%s - Pranav Saji",
  },
  description:
    "Pranav Saji - AI Leader and Tech Entrepreneur in San Francisco. Head of AI Security at Symosis Security, Machine Learning Consultant at LinkedIn. $50M+ business impact. Ex-Deloitte. MS Computer Science, Illinois Tech.",
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
    "Pranav Saji Illinois Tech",
    "Pranav Saji Deloitte",
    "Pranav Saji LangChain",
    "Pranav Saji machine learning",
    "Pranav Saji AI security",
    "AI Leader San Francisco Bay Area",
    "Generative AI Expert San Francisco",
    "Machine Learning Consultant LinkedIn",
    "Head of AI Security San Francisco",
    "Full Stack Engineer AI San Francisco",
    "AI Tech Entrepreneur Bay Area",
    "LangChain RAG engineer San Francisco",
    "Azure Databricks ML engineer",
    "USAII Global Hackathon Judge",
    "YC F24 Founding Engineer",
    "AI consultant Fortune 500",
    "GenAI engineer San Francisco",
    "AI security engineer San Francisco",
  ],
  authors: [{ name: "Pranav Saji", url: "https://pranav-saji.com" }],
  creator: "Pranav Saji",
  publisher: "Pranav Saji",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://pranav-saji.com",
    siteName: "Pranav Saji",
    title: "Pranav Saji - AI Leader, Tech Entrepreneur & Full-Stack Engineer | San Francisco",
    description:
      "AI Leader and Tech Entrepreneur building AI-first platforms. Head of AI Security at Symosis Security, ML Consultant at LinkedIn. $50M+ business impact. Clients from Fortune 100 companies to multiple successful startups.",
    images: [
      {
        url: "/pranav-saji.png",
        width: 1200,
        height: 630,
        alt: "Pranav Saji - AI Leader and Tech Entrepreneur, San Francisco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Saji - AI Leader & Tech Entrepreneur | San Francisco",
    description:
      "AI Leader, Tech Entrepreneur, Full-Stack Engineer. Head of AI Security at Symosis Security, ML Consultant at LinkedIn. $50M+ business impact.",
    creator: "@PranavInnovates",
    images: ["/pranav-saji.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "https://pranav-saji.com" },
  category: "technology",
  verification: {
    google: "LsDURyp253LFvXtYjm_2y_3uCK3snwL3Z5tAHBHT7CM",
  },
  icons: {
    icon: [
      { url: "/pranav-saji.png", type: "image/png" },
    ],
    apple: "/pranav-saji.png",
    shortcut: "/pranav-saji.png",
  },
};

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://pranav-saji.com/#profilepage",
      url: "https://pranav-saji.com",
      name: "Pranav Saji - AI Leader, Tech Entrepreneur & Full-Stack Engineer",
      isPartOf: { "@id": "https://pranav-saji.com/#website" },
      mainEntity: { "@id": "https://pranav-saji.com/#pranav-saji" },
      about: { "@id": "https://pranav-saji.com/#pranav-saji" },
      dateCreated: "2024-01-01T00:00:00Z",
      dateModified: "2026-05-22T00:00:00Z",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://pranav-saji.com" },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://pranav-saji.com/#pranav-saji",
      name: "Pranav Saji",
      alternateName: "Pranav S",
      givenName: "Pranav",
      familyName: "Saji",
      url: "https://pranav-saji.com",
      mainEntityOfPage: "https://pranav-saji.com/about",
      image: {
        "@type": "ImageObject",
        "@id": "https://pranav-saji.com/#photo",
        url: "https://pranav-saji.com/pranav-saji.png",
        width: 360,
        height: 450,
        caption: "Pranav Saji - AI Leader and Tech Entrepreneur in San Francisco Bay Area",
      },
      description:
        "AI Leader, Tech Entrepreneur, and Full-Stack Engineer based in San Francisco Bay Area. Head of AI Security at Symosis Security, Machine Learning Consultant at LinkedIn. $50M+ in business impact. MS Computer Science from Illinois Institute of Technology.",
      jobTitle: ["Head of AI Security", "Machine Learning Consultant", "Tech Entrepreneur"],
      worksFor: [
        {
          "@type": "Organization",
          name: "Symosis Security",
          url: "https://symosis.io",
        },
        {
          "@type": "Organization",
          name: "LinkedIn",
          url: "https://linkedin.com",
          sameAs: "https://www.linkedin.com",
        },
      ],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Illinois Institute of Technology",
          url: "https://www.iit.edu",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Model Engineering College",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "International Institute of Information Technology Bangalore",
        },
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
        "https://www.wikidata.org/wiki/Q139970723",
        "https://orcid.org/0009-0007-9783-566X",
        "https://medium.com/@pranavs.mec",
        "https://x.com/PranavInnovates",
        "https://www.youtube.com/channel/UCSSgLP-Jz11cwOQA3ILwR8w",
        "https://sessionize.com/Pranav-Saji/",
      ],
      knowsAbout: [
        "Generative AI",
        "Large Language Models",
        "AI Security",
        "Machine Learning",
        "LangChain",
        "Retrieval-Augmented Generation",
        "Azure Databricks",
        "Full-Stack Engineering",
        "Next.js",
        "React",
        "Python",
        "Node.js",
        "Cloud Architecture",
        "SSPM",
        "HIPAA Compliance",
        "Enterprise AI",
      ],
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", name: "CompTIA Security+", credentialCategory: "certification" },
        { "@type": "EducationalOccupationalCredential", name: "Microsoft Certified: Azure AI Engineer Associate", credentialCategory: "certification" },
        { "@type": "EducationalOccupationalCredential", name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional", credentialCategory: "certification" },
        { "@type": "EducationalOccupationalCredential", name: "Academy Accreditation - Azure Databricks Platform Architect", credentialCategory: "certification" },
        { "@type": "EducationalOccupationalCredential", name: "Academy Accreditation - Databricks Fundamentals", credentialCategory: "certification" },
        { "@type": "EducationalOccupationalCredential", name: "Academy Accreditation - Generative AI Fundamentals", credentialCategory: "certification" },
        { "@type": "EducationalOccupationalCredential", name: "Building Agentic Workflows with LlamaIndex", credentialCategory: "certification" },
        { "@type": "EducationalOccupationalCredential", name: "Multi-Agent Systems with LangGraph", credentialCategory: "certification" },
        { "@type": "EducationalOccupationalCredential", name: "Building Scalable Agentic Systems", credentialCategory: "certification" },
      ],
      award: [
        "Core Judge at USAII Global Hackathon",
        "Featured Speaker at USAII Global Hackathon",
        "Founding Engineer at Flair Labs (Y Combinator F24)",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://pranav-saji.com/#website",
      url: "https://pranav-saji.com",
      name: "Pranav Saji",
      description:
        "Personal website of Pranav Saji - AI Leader, Tech Entrepreneur, and Full-Stack Engineer in San Francisco Bay Area.",
      publisher: { "@id": "https://pranav-saji.com/#pranav-saji" },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <meta name="msvalidate.01" content="71F5BA4BF6EC8DC5AD859C5749CC68F2" />
        <meta name="theme-color" content="#040d1e" />
        <meta name="color-scheme" content="dark" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="image_src" href="https://pranav-saji.com/pranav-saji.png" />
      </head>
      <body className="bg-[#040d1e] text-slate-100 min-h-screen">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
