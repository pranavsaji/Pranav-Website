import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pranav-saji.com"),
  title: {
    default: "Pranav Saji | AI Leader, Tech Entrepreneur & Full-Stack Engineer | San Francisco",
    template: "%s | Pranav Saji",
  },
  description:
    "Pranav Saji — Tech Entrepreneur, Generative AI Expert, Full-Stack Engineer, and Product Leader in San Francisco Bay Area. Head of AI Security at Symosis Security, Machine Learning Consultant at LinkedIn. Ex-Deloitte. Microsoft, Databricks, Oracle, Comptia certified. USAII Global Hackathon Core Judge & Speaker.",
  keywords: [
    "Pranav Saji",
    "pranav saji",
    "Pranav Saji AI",
    "Pranav Saji engineer",
    "Pranav Saji LinkedIn",
    "Pranav Saji San Francisco",
    "Pranav Saji Symosis",
    "Pranav Saji Generative AI",
    "AI Leader San Francisco Bay Area",
    "Generative AI Expert San Francisco",
    "Full Stack Engineer AI",
    "Machine Learning Consultant LinkedIn",
    "Head of AI Security Symosis Security",
    "Tech Entrepreneur Bay Area",
    "USAII Hackathon Judge",
    "LangChain engineer",
    "RAG AI engineer",
    "Next.js React developer AI",
    "pranav saji website",
    "pranav saji portfolio",
  ],
  authors: [{ name: "Pranav Saji", url: "https://pranav-saji.com" }],
  creator: "Pranav Saji",
  publisher: "Pranav Saji",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://pranav-saji.com",
    siteName: "Pranav Saji",
    title: "Pranav Saji | AI Leader, Tech Entrepreneur & Full-Stack Engineer",
    description:
      "Tech Entrepreneur, Generative AI Expert, and Full-Stack Engineer building AI-first platforms. Head of AI Security at Symosis Security, ML Consultant at LinkedIn. Ex-Deloitte. Based in San Francisco Bay Area.",
    images: [
      {
        url: "/pranav-saji.png",
        width: 800,
        height: 1000,
        alt: "Pranav Saji - AI Leader and Tech Entrepreneur in San Francisco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Saji | AI Leader & Full-Stack Engineer | San Francisco",
    description:
      "Tech Entrepreneur, Generative AI Expert, Full-Stack Engineer. Head of AI Security @ Symosis, ML Consultant @ LinkedIn. San Francisco Bay Area.",
    images: ["/pranav-saji.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://pranav-saji.com",
  },
  verification: {
    google: "google-site-verification",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://pranav-saji.com/#person",
      name: "Pranav Saji",
      url: "https://pranav-saji.com",
      image: {
        "@type": "ImageObject",
        url: "https://pranav-saji.com/pranav-saji.png",
        width: 800,
        height: 1000,
      },
      jobTitle: ["Head of AI Security", "Machine Learning Consultant", "Tech Entrepreneur"],
      worksFor: [
        { "@type": "Organization", name: "Symosis Security", url: "https://symosis.com" },
        { "@type": "Organization", name: "LinkedIn", url: "https://linkedin.com" },
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
      ],
      description:
        "Tech Entrepreneur, Generative AI Expert, Full-Stack Engineer, and Product Leader based in San Francisco Bay Area. Head of AI Security at Symosis Security, Machine Learning Consultant at LinkedIn. Ex-Deloitte. USAII Global Hackathon Core Judge and Speaker.",
      knowsAbout: [
        "Generative AI",
        "Large Language Models",
        "Machine Learning",
        "AI Security",
        "Full-Stack Engineering",
        "Next.js",
        "React",
        "React Native",
        "Node.js",
        "LangChain",
        "Azure Databricks",
        "AWS",
        "GCP",
        "RAG",
        "LLMs",
        "TypeScript",
        "Python",
        "Docker",
        "Kubernetes",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Azure Databricks Platform Architect",
          credentialCategory: "certification",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Career Essentials in Generative AI by Microsoft and LinkedIn",
          credentialCategory: "certification",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://pranav-saji.com/#website",
      url: "https://pranav-saji.com",
      name: "Pranav Saji",
      description: "Personal website of Pranav Saji — AI Leader, Tech Entrepreneur, Full-Stack Engineer",
      publisher: { "@id": "https://pranav-saji.com/#person" },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#050816" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="bg-[#050816] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
