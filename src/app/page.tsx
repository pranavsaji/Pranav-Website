"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#recognitions", label: "Recognitions" },
  { href: "#education", label: "Education" },
  { href: "#publications", label: "Research" },
  { href: "#contact", label: "Contact" },
];

const stats = [
  { value: "$3M+", label: "Cost savings delivered at LinkedIn" },
  { value: "92%", label: "AI triage accuracy (from 60%)" },
  { value: "83%", label: "Faster document processing" },
  { value: "66%", label: "Ahead of schedule at Referrio" },
];

const experiences = [
  {
    company: "Symosis Security",
    role: "Head of AI Security",
    period: "Feb 2026 – Present",
    location: "San Francisco Bay Area",
    color: "#4f86f7",
    icon: "🛡️",
    points: [
      "Building Security, ML, and GenAI workflows for security analytics and evidence-based risk scoring",
      "Engineering reliable SaaS API ingestion pipelines with retries, rate limiting, pagination, and schema evolution",
      "Shipping production systems that accelerate security reviews and reduce manual compliance effort across enterprise and public sector",
    ],
  },
  {
    company: "LinkedIn",
    role: "Machine Learning Consultant",
    period: "Dec 2024 – Present",
    location: "San Francisco Bay Area",
    color: "#0077b5",
    icon: "💼",
    points: [
      "Leading LinkedIn InfoSec's Custom SSPM initiative on Azure Databricks, spanning 21+ applications across 50+ environments",
      "Built Python-based AI agent with LangChain for Jira InfoSec ticket triage (Amazon, Google, Meta clients) — 90% accuracy vs. 70% target, 2 quarters of time savings",
      "Developed 3 custom tools with dynamic workflows, deployed on Azure with Azure Key Vault and LangSmith observability",
    ],
  },
  {
    company: "Referrio.io",
    role: "Co-Founder & CTO",
    period: "Feb 2025 – Aug 2025",
    location: "San Francisco Bay Area",
    color: "#a855f7",
    icon: "🚀",
    points: [
      "Architected and delivered AI-powered dual-platform MVP in 2 months — 66% ahead of planned 6-month timeline",
      "Built with Next.js, Node.js, Python, Prisma, Docker, GCP; deployed via Nginx and Cloudflare (WAF, CDN, SSL)",
      "Integrated AI-driven candidate scoring, real-time notifications, and Stripe for automated referral payouts",
    ],
  },
  {
    company: "BreatheIT",
    role: "Head of Engineering / Founding Engineer",
    period: "Jul 2024 – Jul 2025",
    location: "United States",
    color: "#06b6d4",
    icon: "🧘",
    points: [
      "Led full-stack and ML team building a GenAI recommendation platform across iOS, Android, and Web (React Native + React)",
      "Scaled 15+ member team; drove 60% increase in user satisfaction and 50% boost in engagement",
      "Designed AI-guided journaling, wellness challenges, and reward systems; maintained HIPAA/GDPR compliance",
    ],
  },
  {
    company: "Syndicate Bio",
    role: "AI Consultant",
    period: "Nov 2024 – Jul 2025",
    location: "Chicago, IL",
    color: "#10b981",
    icon: "🧬",
    points: [
      "Independently built 4 mission-critical platforms (Site Registration, Hospital Portal, Admin Dashboard, Sponsor Portal)",
      "Delivered 70+ secure production-grade workflows with microservices, RBAC, JWT auth, and full CI/CD",
      "Designed HIPAA/GDPR-compliant Trusted Research Environment using AWS Glue, Lambda, S3, SageMaker, DynamoDB for hospitals across Africa",
    ],
  },
  {
    company: "Flair Labs (YC F24)",
    role: "Founding Engineer",
    period: "Sep 2024 – Nov 2024",
    location: "United States",
    color: "#f59e0b",
    icon: "🏡",
    points: [
      "Single-handedly built a GenAI-powered real estate platform with natural language property search using Flask and React",
      "Engineered GenAI workflow extracting property traits from queries, generating dynamic SQL, fetching Redfin/Zillow listings",
      "Integrated RCS/SMS messaging for real-time property insights and direct agent interaction",
    ],
  },
  {
    company: "LinkedIn",
    role: "AI/ML Data Scientist",
    period: "Mar 2024 – May 2024",
    location: "Sunnyvale, CA",
    color: "#0077b5",
    icon: "🤖",
    points: [
      "Built RAG chatbot using Azure OpenAI reducing document processing time by 83%, saving millions",
      "Achieved 40% increase in user engagement through AI solutions for InfoSec team (ISO/SOC2 analysis)",
      "Leveraged Azure AI Search, LangChain, Azure Functions, Key Vault, and Blob Storage",
    ],
  },
  {
    company: "Deloitte India",
    role: "Analyst — Data Scientist",
    period: "Nov 2020 – Jul 2022",
    location: "Bengaluru, India",
    color: "#86bc25",
    icon: "📊",
    points: [
      "Led credit card fraud detection system — 25% reduction in false positives using XGBoost, Apache Kafka, and Airflow",
      "Built healthcare PDF data extraction pipeline with CNN + PyTesseract + spaCy — 75% increase in processing efficiency",
      "Delivered real-time analytics pipelines for Fortune 500 financial and healthcare clients",
    ],
  },
];

const skillCategories = [
  {
    name: "AI & Machine Learning",
    icon: "🧠",
    color: "#4f86f7",
    skills: ["Generative AI", "LangChain", "LLMs", "RAG", "TensorFlow", "PyTorch", "XGBoost", "NLP", "Computer Vision", "Deep Learning"],
  },
  {
    name: "Frontend",
    icon: "🎨",
    color: "#a855f7",
    skills: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "Flutter", "Redux", "Framer Motion"],
  },
  {
    name: "Backend & APIs",
    icon: "⚙️",
    color: "#06b6d4",
    skills: ["Node.js", "Python", "FastAPI", "Flask", "Prisma", "PostgreSQL", "REST APIs", "GraphQL", "Microservices"],
  },
  {
    name: "Cloud & DevOps",
    icon: "☁️",
    color: "#10b981",
    skills: ["Azure", "AWS", "GCP", "Docker", "Kubernetes", "Nginx", "Cloudflare", "CI/CD", "LangSmith", "Azure Databricks"],
  },
  {
    name: "Security & Compliance",
    icon: "🔒",
    color: "#f59e0b",
    skills: ["AI Security", "SSPM", "HIPAA/GDPR", "JWT Auth", "RBAC", "Azure Key Vault", "SOC2", "Threat Management"],
  },
  {
    name: "Data Engineering",
    icon: "📊",
    color: "#ec4899",
    skills: ["Apache Kafka", "Apache Airflow", "Apache Spark", "SQL", "DynamoDB", "Azure AI Search", "Databricks", "ETL Pipelines"],
  },
];

const certifications = [
  { name: "Azure Databricks Platform Architect", org: "Databricks", icon: "🏗️" },
  { name: "Generative AI: Working with Large Language Models", org: "LinkedIn Learning", icon: "🤖" },
  { name: "Career Essentials in Generative AI", org: "Microsoft & LinkedIn", icon: "🎓" },
  { name: "Introduction to TensorFlow for AI/ML", org: "Coursera / DeepLearning.AI", icon: "🧮" },
  { name: "Installing, Running and Testing LLMs Locally", org: "LinkedIn Learning", icon: "💻" },
];

const education = [
  {
    school: "Illinois Institute of Technology",
    degree: "Master of Science — Computer Science",
    specialization: "Specialization in Artificial Intelligence",
    location: "Chicago, IL",
    icon: "🎓",
    color: "#a855f7",
  },
  {
    school: "International Institute of Information Technology Bangalore",
    degree: "Executive Post Graduate Programme",
    specialization: "Machine Learning and Artificial Intelligence",
    location: "Bangalore, India",
    icon: "🤖",
    color: "#4f86f7",
  },
  {
    school: "Model Engineering College",
    degree: "Bachelor of Technology — BTech",
    specialization: "Electronics and Communications Engineering",
    location: "Kerala, India",
    icon: "⚡",
    color: "#06b6d4",
  },
];

const publications = [
  {
    title: "RF Sensor for Food Adulteration Detection",
    description:
      "Research on leveraging Radio Frequency sensors to detect food adulteration, combining signal processing with machine learning for accurate classification.",
    icon: "📡",
    tags: ["RF Sensors", "Signal Processing", "ML", "Food Safety"],
  },
  {
    title: "Emotion Detection in Speech Using CNN",
    description:
      "Deep learning approach using Convolutional Neural Networks for real-time emotion recognition in speech signals, achieving high accuracy across multiple emotional states.",
    icon: "🎙️",
    tags: ["CNN", "Deep Learning", "NLP", "Speech Analysis"],
  },
];

const recognitions = [
  {
    title: "Core Judge",
    event: "USAII Global Hackathon",
    description:
      "Selected as a Core Judge for the USAII Global Hackathon — one of the premier AI competitions globally. Evaluated cutting-edge AI innovations and projects from teams worldwide.",
    icon: "⚖️",
    badge: "JUDGE",
    color: "#f59e0b",
    bgColor: "rgba(245, 158, 11, 0.1)",
    borderColor: "rgba(245, 158, 11, 0.3)",
  },
  {
    title: "Speaker",
    event: "USAII Global Hackathon",
    description:
      "Featured speaker at the USAII Global Hackathon, sharing insights on Generative AI, AI security, and the future of AI-first product development to a global audience.",
    icon: "🎤",
    badge: "SPEAKER",
    color: "#a855f7",
    bgColor: "rgba(168, 85, 247, 0.1)",
    borderColor: "rgba(168, 85, 247, 0.3)",
  },
  {
    title: "YC-Backed Startup Engineer",
    event: "Flair Labs (YC F24)",
    description:
      "Founding Engineer at Flair Labs, a Y Combinator F24 company. Built the core GenAI-powered real estate platform from the ground up.",
    icon: "🏆",
    badge: "YC F24",
    color: "#f97316",
    bgColor: "rgba(249, 115, 22, 0.1)",
    borderColor: "rgba(249, 115, 22, 0.3)",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "nav-glass shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="logo-text text-xl tracking-tight">
              Pranav Saji
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/pranav-saji/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 btn-primary text-sm py-2 px-4"
              >
                Connect
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-slate-400 hover:text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mobile-menu border-t border-white/5">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* ─── HERO ────────────────────────────────────────────────────── */}
        <section
          id="hero"
          className="hero-bg min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
        >
          {/* Background orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Left — Text */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Available for select opportunities
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-4">
                  <span className="text-white">Pranav</span>{" "}
                  <span className="gradient-text">Saji</span>
                </h1>

                <p className="text-xl sm:text-2xl text-slate-300 font-medium mb-3">
                  AI Leader · Tech Entrepreneur · Full-Stack Engineer
                </p>

                <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                  Building AI-first platforms that deliver measurable business outcomes.
                  Head of AI Security{" "}
                  <span className="text-blue-400">@ Symosis Security</span> ·{" "}
                  ML Consultant{" "}
                  <span className="text-blue-400">@ LinkedIn</span> ·{" "}
                  Based in{" "}
                  <span className="text-cyan-400">San Francisco Bay Area</span>.
                </p>

                {/* Certification badges */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
                  {["Microsoft Certified", "Databricks Certified", "Oracle Certified", "Comptia Certified"].map((cert) => (
                    <span
                      key={cert}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400"
                    >
                      {cert}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a href="#experience" className="btn-primary">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    View My Work
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pranav-saji/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a href="#contact" className="btn-secondary">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact
                  </a>
                </div>
              </div>

              {/* Right — Photo */}
              <div className="flex-shrink-0">
                <div className="relative">
                  {/* Glow rings */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-cyan-500/30 blur-2xl scale-110" />

                  {/* Photo ring */}
                  <div className="photo-ring float-animation pulse-glow relative z-10">
                    <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-slate-800">
                      <Image
                        src="/pranav-saji.png"
                        alt="Pranav Saji — AI Leader and Tech Entrepreneur in San Francisco"
                        width={320}
                        height={400}
                        priority
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl px-3 py-2 text-sm font-bold shadow-xl z-20">
                    🛡️ AI Security
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl px-3 py-2 text-sm font-bold shadow-xl z-20">
                    🤖 GenAI Expert
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center mt-16">
              <a href="#about" className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors">
                <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
                <svg className="w-5 h-5 bounce-animation" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ─── ABOUT / STATS ─────────────────────────────────────────────── */}
        <section id="about" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  I&apos;m{" "}
                  <span className="text-white font-semibold">Pranav Saji</span> — a Tech Entrepreneur,
                  Full-Stack Engineer, Generative AI Expert, and Product Leader who architects and
                  scales AI-first platforms that deliver measurable business outcomes and intuitive
                  user experiences.
                </p>
                <p className="text-slate-400 leading-relaxed mb-6">
                  My expertise spans the full stack — from React/Next.js frontends and Node.js/Python
                  backends to cloud-native microservices on Azure, AWS, and GCP. I specialize in
                  building production-grade AI systems using LangChain, RAG architectures, and LLMs
                  that solve real enterprise problems.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Currently leading AI security engineering at{" "}
                  <span className="text-blue-400 font-medium">Symosis Security</span> and consulting
                  for{" "}
                  <span className="text-blue-400 font-medium">LinkedIn&apos;s InfoSec team</span>{" "}
                  on custom SSPM initiatives. Previously contributed to YC-backed companies and led
                  engineering teams of 15+ engineers.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.value} className="stat-card">
                    <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-slate-400 text-sm leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick facts strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: "📍", label: "San Francisco Bay Area" },
                { icon: "🎓", label: "MS CS — Illinois Tech" },
                { icon: "🏢", label: "Ex-Deloitte · LinkedIn" },
                { icon: "🚀", label: "Founder · YC Flair Labs" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="glass-card p-4 flex items-center gap-3 text-slate-300 text-sm"
                >
                  <span className="text-xl">{fact.icon}</span>
                  <span>{fact.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider max-w-6xl mx-auto" />

        {/* ─── EXPERIENCE ────────────────────────────────────────────────── */}
        <section id="experience" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Work <span className="gradient-text">Experience</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Building AI-powered products at scale — from enterprise security to YC-backed startups
              </p>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>

            <div className="relative">
              {/* Timeline vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line hidden md:block" />

              <div className="space-y-8">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative md:pl-20">
                    {/* Timeline dot */}
                    <div
                      className="absolute left-6 top-6 w-4 h-4 rounded-full border-2 border-current hidden md:block z-10"
                      style={{ color: exp.color, backgroundColor: exp.color + "33" }}
                    />

                    <div className="glass-card p-6 hover:border-blue-500/30 transition-all duration-300 group">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{exp.icon}</span>
                          <div>
                            <h3 className="text-white font-bold text-lg leading-tight">{exp.role}</h3>
                            <div
                              className="text-base font-semibold mt-0.5"
                              style={{ color: exp.color }}
                            >
                              {exp.company}
                            </div>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="text-sm text-slate-400 font-medium">{exp.period}</span>
                          <div className="text-xs text-slate-500 mt-0.5">{exp.location}</div>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex gap-2 text-slate-400 text-sm leading-relaxed">
                            <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider max-w-6xl mx-auto" />

        {/* ─── SKILLS ────────────────────────────────────────────────────── */}
        <section id="skills" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Technical <span className="gradient-text">Expertise</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Full-stack capabilities across AI/ML, frontend, backend, cloud, and security
              </p>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((cat) => (
                <div
                  key={cat.name}
                  className="glass-card p-6 hover:border-blue-500/30 transition-all duration-300"
                  style={{ borderColor: cat.color + "20" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                      style={{ backgroundColor: cat.color + "20" }}
                    >
                      {cat.icon}
                    </div>
                    <h3 className="font-bold text-white">{cat.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider max-w-6xl mx-auto" />

        {/* ─── RECOGNITIONS & EVENTS ──────────────────────────────────────── */}
        <section id="recognitions" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Recognitions &{" "}
                <span className="gradient-text-gold">Events</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Speaking, judging, and contributing to the global AI community
              </p>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {recognitions.map((rec, idx) => (
                <div
                  key={idx}
                  className="recognition-badge p-6"
                  style={{
                    background: rec.bgColor,
                    borderColor: rec.borderColor,
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{rec.icon}</span>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full border"
                      style={{
                        color: rec.color,
                        borderColor: rec.borderColor,
                        backgroundColor: rec.bgColor,
                      }}
                    >
                      {rec.badge}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">{rec.title}</h3>
                  <p className="font-medium text-sm mb-3" style={{ color: rec.color }}>
                    {rec.event}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">{rec.description}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                Certifications &{" "}
                <span className="gradient-text">Credentials</span>
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="glass-card p-4 flex items-start gap-3 hover:border-blue-500/30 transition-all"
                  >
                    <span className="text-2xl flex-shrink-0">{cert.icon}</span>
                    <div>
                      <div className="text-white font-medium text-sm leading-snug">{cert.name}</div>
                      <div className="text-slate-500 text-xs mt-1">{cert.org}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider max-w-6xl mx-auto" />

        {/* ─── EDUCATION ──────────────────────────────────────────────────── */}
        <section id="education" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="gradient-text">Education</span>
              </h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="gradient-border p-6 hover:shadow-xl transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                    style={{ backgroundColor: edu.color + "20" }}
                  >
                    {edu.icon}
                  </div>
                  <h3 className="text-white font-bold mb-1 leading-tight">{edu.school}</h3>
                  <p className="font-medium text-sm mb-1" style={{ color: edu.color }}>
                    {edu.degree}
                  </p>
                  <p className="text-slate-400 text-sm mb-2">{edu.specialization}</p>
                  <div className="flex items-center gap-1 text-slate-500 text-xs">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider max-w-6xl mx-auto" />

        {/* ─── PUBLICATIONS ────────────────────────────────────────────────── */}
        <section id="publications" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Research &{" "}
                <span className="gradient-text">Publications</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Peer-reviewed research at the intersection of hardware sensing and deep learning
              </p>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {publications.map((pub, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{pub.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-3 leading-tight">{pub.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{pub.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider max-w-6xl mx-auto" />

        {/* ─── CONTACT ────────────────────────────────────────────────────── */}
        <section id="contact" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
            </div>

            <div className="relative text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold mb-4">
                Get In <span className="gradient-text">Touch</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Whether you&apos;re looking to collaborate on an AI project, have a speaking
                opportunity, or just want to connect — I&apos;d love to hear from you.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                <a
                  href="mailto:pranavs.mec@gmail.com"
                  className="glass-card p-5 flex flex-col items-center gap-3 hover:border-blue-500/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Email</div>
                    <div className="text-slate-500 text-xs">pranavs.mec@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/pranav-saji/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 flex flex-col items-center gap-3 hover:border-blue-500/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">LinkedIn</div>
                    <div className="text-slate-500 text-xs">linkedin.com/in/pranav-saji</div>
                  </div>
                </a>

                <a
                  href="https://github.com/pranavsaji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 flex flex-col items-center gap-3 hover:border-blue-500/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">GitHub</div>
                    <div className="text-slate-500 text-xs">github.com/pranavsaji</div>
                  </div>
                </a>
              </div>

              <a href="mailto:pranavs.mec@gmail.com" className="btn-primary text-lg px-8 py-3">
                Send a Message
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Pranav Saji · San Francisco Bay Area
          </div>
          <div className="flex items-center gap-6 text-slate-500 text-sm">
            <a href="mailto:pranavs.mec@gmail.com" className="hover:text-slate-300 transition-colors">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/pranav-saji/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/pranavsaji"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://pranavsaji.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Portfolio
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
