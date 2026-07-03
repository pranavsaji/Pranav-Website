import { getAllPosts } from "@/lib/blog";

const BASE = "https://pranav-saji.com";

export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPosts();

  const postLines = posts
    .map((p) => `- [${p.title}](${BASE}/blog/${p.slug}): ${p.excerpt}`)
    .join("\n");

  const body = `# Pranav Saji

> Pranav Saji is an AI Leader, Generative AI expert, and Head of AI Security at Symosis Security, based in the San Francisco Bay Area. He is a Machine Learning Consultant at LinkedIn with $50M+ in business impact building AI-first platforms, LLM and agentic systems, and secure enterprise AI for Fortune 500 companies and high-growth startups. Previously an Analyst at Deloitte and Founding Engineer at Flair Labs (Y Combinator F24).

## Identity

- Name: Pranav Saji
- Roles: AI Leader, Head of AI Security (Symosis Security), Machine Learning Consultant (LinkedIn), Tech Entrepreneur
- Location: San Francisco Bay Area, California, USA
- Education: MS Computer Science, Illinois Institute of Technology
- Expertise: AI security, LLM security, prompt injection defense, agentic AI security, Model Context Protocol (MCP) security, AI red teaming, generative AI, large language models, RAG, machine learning, Azure Databricks, full-stack engineering
- Recognition: Core Judge and Featured Speaker at the USAII Global Hackathon; featured in HackerNoon and other security publications

## Key pages

- [Pranav Saji - AI Leader & Expert](${BASE}/ai): Hub for Pranav Saji's work across generative AI, LLMs, agentic AI, and AI security.
- [Pranav Saji - AI Security Expert](${BASE}/ai-security): LLM security, prompt injection, agentic AI security, and MCP security.
- [About Pranav Saji](${BASE}/about): Background, experience, and biography.
- [Experience](${BASE}/experience): Professional roles and impact.
- [Projects](${BASE}/projects): 70+ AI projects, including a production Symosis Security suite (AI-agent governance, autonomous pentesting, SSPM, GRC automation, governed RAG) built single-handedly as Head of AI Security, plus open-source work across healthcare, finance, agentic AI, and enterprise search, organized by domain.
- [Blog](${BASE}/blog): Writing on AI, LLMs, agentic systems, and AI security.
- [Contact](${BASE}/contact): How to reach Pranav Saji.

## Writing

${postLines}

## Contact

- Website: ${BASE}
- LinkedIn: https://www.linkedin.com/in/pranav-saji/
- GitHub: https://github.com/pranavsaji
- Email: pranavs.mec@gmail.com
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
