import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Pranav Saji | AI Leader San Francisco",
  description:
    "Contact Pranav Saji — AI Leader, Tech Entrepreneur, and Full-Stack Engineer in San Francisco Bay Area. Open to collaborations, speaking engagements, and advisory roles.",
  alternates: { canonical: "https://pranav-saji.com/contact" },
  openGraph: {
    title: "Contact Pranav Saji",
    description:
      "Reach out to Pranav Saji for collaborations, speaking engagements, and advisory roles in AI and security.",
    url: "https://pranav-saji.com/contact",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://pranav-saji.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://pranav-saji.com/contact" },
  ],
};

const channels = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Best for detailed inquiries and project discussions.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/pranav-saji",
    href: siteConfig.linkedin,
    description: "Connect professionally or follow for AI and engineering insights.",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/pranavsaji",
    href: siteConfig.github,
    description: "Browse open-source work and technical projects.",
    external: true,
  },
];

export default function Contact() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="page-header">
        <div className="container">
          <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-3">Contact</p>
          <h1 className="heading-lg text-white">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-slate-400 mt-3 text-base max-w-lg">
            Open to collaborations on AI projects, speaking engagements, and select advisory roles
            in AI and security.
          </p>
        </div>
      </div>

      <section className="section-sm">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12">
            {/* Contact form */}
            <div>
              <h2 className="text-white font-semibold text-base mb-6">Send a Message</h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {channels.map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  target={ch.external ? "_blank" : undefined}
                  rel={ch.external ? "noopener noreferrer" : undefined}
                  className="card p-5 flex items-start gap-4 group block hover:border-blue-500/30 transition-all"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-white font-medium text-sm">{ch.label}</span>
                      {ch.external && (
                        <svg className="w-3 h-3 text-slate-500 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </div>
                    <p className="text-blue-400 text-xs mb-1">{ch.value}</p>
                    <p className="text-slate-500 text-xs">{ch.description}</p>
                  </div>
                  <svg className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              ))}

              <div className="card p-6">
                <h2 className="text-white font-medium text-sm mb-3">Open to</h2>
                <ul className="space-y-2 text-slate-400 text-sm">
                  {[
                    "AI / ML consulting engagements",
                    "Speaking at conferences and events",
                    "Advisory roles in AI and security",
                    "Technical collaboration on AI products",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-blue-500/60 text-xs mt-1">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6">
                <h2 className="text-white font-medium text-sm mb-2">Location</h2>
                <p className="text-slate-400 text-sm">San Francisco Bay Area, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container"><div className="divider" /></div>

      <section className="section-sm">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            <Link href="/about" className="btn btn-primary">About Pranav</Link>
            <Link href="/experience" className="btn btn-outline">View Experience</Link>
          </div>
        </div>
      </section>
    </>
  );
}
