export const siteConfig = {
  name: "Pranav Saji",
  title: "Pranav Saji — AI Leader, Tech Entrepreneur & Full-Stack Engineer",
  description:
    "Pranav Saji is a Tech Entrepreneur, Generative AI Expert, Full-Stack Engineer, and Product Leader based in San Francisco Bay Area. Head of AI Security at Symosis Security, Machine Learning Consultant at LinkedIn. Ex-Deloitte.",
  url: "https://pranav-saji.com",
  email: "pranavs.mec@gmail.com",
  linkedin: "https://www.linkedin.com/in/pranav-saji/",
  github: "https://github.com/pranavsaji",
  portfolio: "https://pranavsaji.github.io/",
  location: "San Francisco Bay Area",
};

export const experiences = [
  {
    company: "Symosis Security",
    role: "Head of AI Security",
    period: "Feb 2026 – Present",
    location: "San Francisco Bay Area",
    current: true,
    points: [
      "Building Security, ML, and GenAI workflows for security analytics, evidence-based risk scoring, and audit-ready reporting.",
      "Engineering reliable SaaS API ingestion pipelines with strong operational hygiene: retries, rate limiting, pagination, and schema evolution handling.",
      "Shipping production systems that accelerate security reviews and reduce manual compliance effort across enterprise and public sector programs.",
    ],
  },
  {
    company: "LinkedIn",
    role: "Machine Learning Consultant",
    period: "Dec 2024 – Present",
    location: "San Francisco Bay Area",
    current: true,
    points: [
      "Leading LinkedIn InfoSec's Custom SSPM initiative on Azure Databricks, spanning 21+ applications across 50+ environments.",
      "Designed and implemented a Python-based AI agent using LangChain to automate Jira-based InfoSec ticket triage for high-profile clients (Amazon, Google, Meta) — achieving 90% accuracy vs. a 70% target, delivering 2 quarters of time savings.",
      "Developed 3 custom tools with dynamic workflows, deployed on Azure with Azure Key Vault and LangSmith for observability.",
    ],
  },
  {
    company: "Referrio.io",
    role: "Co-Founder & CTO",
    period: "Feb 2025 – Aug 2025",
    location: "San Francisco Bay Area",
    current: false,
    points: [
      "Architected and delivered an AI-powered dual-platform MVP in 2 months — 66% ahead of the planned 6-month timeline.",
      "Built with Next.js, Node.js, Python, Prisma, Docker, GCP; deployed via Nginx and Cloudflare (WAF, CDN, SSL).",
      "Integrated AI-driven candidate scoring, real-time notification systems, and Stripe for automated referral payouts.",
    ],
  },
  {
    company: "BreatheIT",
    role: "Head of Engineering",
    period: "Nov 2024 – Jul 2025",
    location: "United States",
    current: false,
    points: [
      "Led full-stack and ML team building a GenAI recommendation platform across iOS, Android, and Web using React Native and React.",
      "Scaled a 15+ member engineering team; drove a 60% increase in user satisfaction and 50% boost in engagement.",
      "Designed AI-guided journaling, goal tracking, and wellness challenges with HIPAA/GDPR compliance.",
    ],
  },
  {
    company: "BreatheIT",
    role: "Founding Engineer",
    period: "Jul 2024 – Nov 2024",
    location: "United States",
    current: false,
    points: [
      "Architected mobile (React Native) and web (React) applications with a Node.js + PostgreSQL backend on GCP microservices.",
      "Implemented real-time notifications, Stripe reward systems, and AI-powered journaling features that drove a 60% increase in user satisfaction.",
    ],
  },
  {
    company: "Syndicate Bio",
    role: "AI Consultant",
    period: "Nov 2024 – Jul 2025",
    location: "Chicago, IL",
    current: false,
    points: [
      "Independently built 4 mission-critical platforms: Site Registration, Hospital Portal, Admin Dashboard, and Sponsor Portal.",
      "Delivered 70+ secure, production-grade workflows with microservices, RBAC, JWT authentication, and full CI/CD automation.",
      "Designed a HIPAA/GDPR-compliant Trusted Research Environment using AWS Glue, Lambda, S3, KMS, Athena, SageMaker, and DynamoDB for hospitals across Africa.",
    ],
  },
  {
    company: "Flair Labs (YC F24)",
    role: "Founding Engineer",
    period: "Sep 2024 – Nov 2024",
    location: "United States",
    current: false,
    points: [
      "Single-handedly built a full-stack GenAI-powered real estate platform using Flask and React with natural language property search.",
      "Engineered a GenAI workflow that extracts property traits from natural language queries, dynamically generates SQL, and fetches matching listings from Redfin/Zillow-scraped datasets.",
      "Integrated RCS/SMS-based messaging for real-time property insights and direct agent interaction.",
    ],
  },
  {
    company: "LinkedIn",
    role: "AI/ML Data Scientist",
    period: "Mar 2024 – May 2024",
    location: "Sunnyvale, CA",
    current: false,
    points: [
      "Built a RAG chatbot using Azure OpenAI that reduced document processing time by 83%, saving millions for the company.",
      "Achieved a 40% increase in user engagement through AI solutions for InfoSec analysis of ISO and SOC2 reports.",
      "Leveraged Azure AI Search, LangChain, Azure Functions, Key Vault, and Blob Storage.",
    ],
  },
  {
    company: "CREWASIS.AI",
    role: "Data Scientist",
    period: "Aug 2024 – Oct 2024",
    location: "United States",
    current: false,
    points: [
      "Developed a GenAI-based solution analyzing text and video data to extract key market insights for Fortune 500 clients.",
    ],
  },
  {
    company: "Illinois Institute of Technology",
    role: "Graduate Teaching Assistant",
    period: "Sep 2023 – May 2024",
    location: "Chicago, IL",
    current: false,
    points: [
      "Assisted in teaching Advanced Database Organization and Computer Networks courses.",
      "Supported students on machine learning projects and mentored on database and networking concepts.",
    ],
  },
  {
    company: "Deloitte India",
    role: "Analyst — Data Scientist",
    period: "Nov 2020 – Jul 2022",
    location: "Bengaluru, India",
    current: false,
    points: [
      "Led credit card fraud detection system development — achieved 25% reduction in false positives using XGBoost, Apache Kafka, and Airflow.",
      "Built healthcare PDF data extraction pipeline with CNN, PyTesseract, and spaCy — 75% increase in processing efficiency.",
      "Delivered real-time analytics solutions for Fortune 500 financial and healthcare clients.",
    ],
  },
];

export const skillCategories = [
  {
    name: "AI & Machine Learning",
    skills: [
      "Generative AI", "LangChain", "LLMs", "RAG", "TensorFlow", "PyTorch",
      "XGBoost", "NLP", "Computer Vision", "Deep Learning", "LangSmith",
    ],
  },
  {
    name: "Frontend Engineering",
    skills: [
      "React", "Next.js", "React Native", "TypeScript", "Tailwind CSS",
      "Flutter", "Redux", "Framer Motion", "Responsive Design",
    ],
  },
  {
    name: "Backend & APIs",
    skills: [
      "Node.js", "Python", "FastAPI", "Flask", "Prisma", "PostgreSQL",
      "REST APIs", "GraphQL", "Microservices", "JWT Auth",
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      "Azure", "AWS", "GCP", "Docker", "Kubernetes", "Nginx",
      "Cloudflare", "CI/CD", "Azure Databricks", "GitHub Actions",
    ],
  },
  {
    name: "AI Security",
    skills: [
      "SSPM", "HIPAA/GDPR", "RBAC", "Azure Key Vault",
      "SOC2 Analysis", "Threat Management", "Zero Trust", "Adaptive Shield",
    ],
  },
  {
    name: "Data Engineering",
    skills: [
      "Apache Kafka", "Apache Airflow", "Apache Spark", "SQL",
      "DynamoDB", "Azure AI Search", "ETL Pipelines", "Smartsheet",
    ],
  },
];

export const education = [
  {
    school: "Illinois Institute of Technology",
    degree: "Master of Science — Computer Science",
    specialization: "Specialization in Artificial Intelligence",
    location: "Chicago, IL",
  },
  {
    school: "International Institute of Information Technology Bangalore",
    degree: "Executive Post Graduate Programme",
    specialization: "Machine Learning and Artificial Intelligence",
    location: "Bangalore, India",
  },
  {
    school: "Model Engineering College",
    degree: "Bachelor of Technology — Electronics & Communications Engineering",
    specialization: "",
    location: "Kerala, India",
  },
];

export const certifications = [
  { name: "Azure Databricks Platform Architect", issuer: "Databricks" },
  { name: "Generative AI: Working with Large Language Models", issuer: "LinkedIn Learning" },
  { name: "Career Essentials in Generative AI", issuer: "Microsoft & LinkedIn" },
  { name: "Introduction to TensorFlow for AI, ML, and Deep Learning", issuer: "DeepLearning.AI / Coursera" },
  { name: "Installing, Running and Testing LLMs Locally", issuer: "LinkedIn Learning" },
];

export const publications = [
  {
    title: "RF Sensor for Food Adulteration Detection",
    description:
      "Research leveraging Radio Frequency sensors to detect food adulteration, combining signal processing techniques with machine learning classifiers for accurate, non-destructive detection.",
    tags: ["RF Sensors", "Signal Processing", "Machine Learning", "Food Safety"],
  },
  {
    title: "Emotion Detection in Speech Using CNN",
    description:
      "Deep learning approach using Convolutional Neural Networks for real-time emotion recognition in speech signals, achieving high accuracy across multiple emotional states.",
    tags: ["CNN", "Deep Learning", "NLP", "Speech Analysis"],
  },
];

export const stats = [
  { value: "$50M+", label: "Business impact delivered across clients & ventures" },
  { value: "5+", label: "AI companies founded, co-founded, or led as CTO / Head of Engineering" },
  { value: "20+", label: "Clients from Fortune 100 companies to multiple successful startups" },
];

export const recognitions = [
  {
    title: "Core Judge",
    event: "USAII Global Hackathon",
    type: "JUDGE",
    description:
      "Selected as a Core Judge for the USAII Global Hackathon — one of the premier global AI competitions. Evaluated cutting-edge AI innovations and projects from teams worldwide.",
    link: "https://aihackathon.usaii.org/global-ai-builder-series",
    linkLabel: "View Speaker Lineup",
  },
  {
    title: "Speaker",
    event: "USAII Global Hackathon",
    type: "SPEAKER",
    description:
      "Featured speaker at the USAII Global Hackathon, sharing insights on Generative AI, AI security, and the future of AI-first product development to a global audience.",
    link: "https://aihackathon.usaii.org/global-ai-builder-series",
    linkLabel: "View Speaker Lineup",
  },
  {
    title: "Founding Engineer",
    event: "Flair Labs — Y Combinator F24",
    type: "YC F24",
    description:
      "Selected as Founding Engineer at Flair Labs, a Y Combinator F24 company. Built the core GenAI-powered real estate platform from the ground up.",
  },
];
