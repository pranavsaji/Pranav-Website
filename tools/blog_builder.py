#!/usr/bin/env python3
"""
Blog builder for pranav-saji.com
Generates SEO-friendly blog posts on AI cybersecurity and general AI topics.
Uses the Anthropic API (Claude) to research and write professional posts.

Usage:
    python tools/blog_builder.py                # generate one post (auto-selects category)
    python tools/blog_builder.py --category "AI Cybersecurity"
    python tools/blog_builder.py --category "AI"
    python tools/blog_builder.py --count 3      # generate multiple posts

Requirements:
    pip install anthropic python-frontmatter
    export ANTHROPIC_API_KEY=your_key_here
"""

import os
import json
import re
import argparse
import sys
from datetime import date
from pathlib import Path

try:
    import anthropic
except ImportError:
    print("Install anthropic: pip install anthropic")
    sys.exit(1)

# ── Config ──────────────────────────────────────────────────────────────────

ROOT = Path(__file__).parent.parent
BLOG_DIR = ROOT / "content" / "blog"
MANIFEST_FILE = BLOG_DIR / "_manifest.json"

CATEGORIES = ["AI Cybersecurity", "AI"]

AI_CYBERSECURITY_TOPICS = [
    "LLM security and prompt injection attacks",
    "AI-powered threat detection and SIEM modernization",
    "Adversarial machine learning and model robustness",
    "Deepfake detection and synthetic media threats",
    "AI in zero-trust security architecture",
    "Securing agentic AI systems and autonomous agents",
    "AI supply chain security and model poisoning",
    "LLM jailbreaking techniques and enterprise defenses",
    "Privacy-preserving machine learning and federated learning",
    "AI red teaming and penetration testing methodologies",
    "RAG security vulnerabilities and knowledge base protection",
    "AI-generated phishing and social engineering at scale",
    "Machine learning model governance and risk management",
    "Differential privacy in enterprise AI deployments",
    "AI in cloud security posture management (CSPM/SSPM)",
    "Generative AI data leakage risks and DLP strategies",
    "AI-assisted vulnerability research and patch prioritization",
    "Securing multi-agent systems and orchestration pipelines",
    "AI model watermarking and intellectual property protection",
    "Regulatory compliance for AI systems: NIST AI RMF, EU AI Act",
]

AI_TOPICS = [
    "Multi-agent AI system design and production architecture",
    "Retrieval-augmented generation (RAG) best practices",
    "Fine-tuning large language models for enterprise use cases",
    "Evaluating and benchmarking LLMs in production",
    "Prompt engineering techniques for complex reasoning tasks",
    "AI observability, monitoring, and LLMOps",
    "Vector databases and semantic search at scale",
    "Building reliable AI pipelines with LangChain and LangGraph",
    "Structured output generation with LLMs",
    "AI in information security operations and SOC automation",
    "Context window management for long-horizon AI tasks",
    "Tool use and function calling in production AI systems",
    "AI-powered code generation and developer productivity",
    "Multimodal AI systems and enterprise applications",
    "AI governance, explainability, and responsible deployment",
    "Reducing hallucination in production LLM systems",
    "Cost optimization strategies for LLM API usage",
    "Edge AI deployment and on-device inference",
    "AI product strategy and go-to-market for technical founders",
    "Building AI teams and hiring for AI engineering roles",
]

# ── Manifest ─────────────────────────────────────────────────────────────────

def load_manifest() -> dict:
    if MANIFEST_FILE.exists():
        with open(MANIFEST_FILE) as f:
            return json.load(f)
    return {"posts": []}


def save_manifest(manifest: dict):
    with open(MANIFEST_FILE, "w") as f:
        json.dump(manifest, f, indent=2)


def covered_topics(manifest: dict) -> set[str]:
    topics = set()
    for post in manifest.get("posts", []):
        topics.update(post.get("topics", []))
    return topics


def pick_topic(category: str, manifest: dict) -> str:
    used = covered_topics(manifest)
    pool = AI_CYBERSECURITY_TOPICS if category == "AI Cybersecurity" else AI_TOPICS
    # Prefer topics not yet covered
    fresh = [t for t in pool if not any(u.lower() in t.lower() or t.lower() in u.lower() for u in used)]
    if fresh:
        import random
        return random.choice(fresh)
    # All covered — pick least recently used
    import random
    return random.choice(pool)


def pick_category(manifest: dict) -> str:
    """Alternate categories to keep the feed balanced."""
    posts = manifest.get("posts", [])
    if not posts:
        return "AI Cybersecurity"
    last_cat = posts[-1].get("category", "AI")
    return "AI" if last_cat == "AI Cybersecurity" else "AI Cybersecurity"


# ── Slug helpers ─────────────────────────────────────────────────────────────

def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    text = re.sub(r"-+", "-", text).strip("-")
    return text[:80]


def unique_slug(base_slug: str, manifest: dict) -> str:
    existing = {p["slug"] for p in manifest.get("posts", [])}
    slug = base_slug
    counter = 2
    while slug in existing:
        slug = f"{base_slug}-{counter}"
        counter += 1
    return slug


# ── Generation ────────────────────────────────────────────────────────────────

SYSTEM_PROMPT = """You are Pranav Saji — Head of AI Security at Symosis Security and Machine Learning Consultant at LinkedIn. You write professional, deeply technical blog posts for your personal website (pranav-saji.com).

Your writing style:
- Direct and authoritative, never fluffy or generic
- Grounded in real engineering decisions and production experience
- Uses concrete examples, failure modes, and practical guidance
- Assumes a technical audience (engineers, security professionals, AI practitioners)
- No buzzword padding — every sentence earns its place
- First person where natural, but the writing is about the content, not you

SEO approach:
- Include semantically relevant keywords naturally throughout
- Use clear H2 and H3 structure that reflects how people search for information
- Write excerpts/introductions that answer the core question immediately
- Aim for comprehensive coverage that earns featured snippet consideration

Output format: Return a complete markdown blog post with YAML frontmatter, ready to save as a .md file. Use this exact frontmatter schema:

---
title: "Exact post title"
slug: "url-friendly-slug"
date: "YYYY-MM-DD"
category: "AI Cybersecurity" or "AI"
excerpt: "2-3 sentence summary for SEO meta description and card preview. Should be compelling and keyword-rich."
tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"]
readTime: "X min read"
featured: false
---

Then the full post content in markdown. Target 1200-1800 words. Use ## for H2, ### for H3. Bold key terms sparingly. No horizontal rules. No conclusion header — end naturally."""


def generate_post(category: str, topic: str, client: anthropic.Anthropic) -> str:
    today = date.today().isoformat()

    user_prompt = f"""Write a professional blog post for pranav-saji.com.

Topic: {topic}
Category: {category}
Today's date: {today}

Requirements:
- Title should be specific and searchable (not generic)
- Cover the topic with depth and practical insight
- Include concrete examples, real failure modes, or actionable guidance
- The post should be genuinely useful to someone building or defending AI systems
- Naturally incorporate SEO keywords related to "{topic}"
- Write as someone with hands-on production experience in AI security and ML engineering

Return the complete markdown file content starting with the --- frontmatter block."""

    message = client.messages.create(
        model="claude-opus-4-7",
        max_tokens=4096,
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": user_prompt}],
    )

    return message.content[0].text


# ── Parsing ───────────────────────────────────────────────────────────────────

def parse_frontmatter(raw: str) -> tuple[dict, str]:
    """Extract YAML frontmatter and body from raw markdown string."""
    import re as _re
    match = _re.match(r"^---\n(.*?)\n---\n(.*)", raw, _re.DOTALL)
    if not match:
        raise ValueError("Could not parse frontmatter from generated post")

    fm_raw, body = match.group(1), match.group(2)
    meta: dict = {}
    for line in fm_raw.splitlines():
        if ": " in line:
            key, _, val = line.partition(": ")
            key = key.strip()
            val = val.strip().strip('"').strip("'")
            if val.startswith("["):
                # Parse tag list
                val = [v.strip().strip('"').strip("'") for v in val.strip("[]").split(",")]
            meta[key] = val

    return meta, body.strip()


# ── Main ──────────────────────────────────────────────────────────────────────

def build_post(category: str | None, manifest: dict, client: anthropic.Anthropic) -> dict:
    if category is None:
        category = pick_category(manifest)

    topic = pick_topic(category, manifest)
    print(f"  Category : {category}")
    print(f"  Topic    : {topic}")
    print("  Generating...")

    raw = generate_post(category, topic, client)

    try:
        meta, body = parse_frontmatter(raw)
    except ValueError:
        # Fallback: save raw content and derive metadata
        meta = {"title": topic, "category": category, "tags": [], "readTime": "7 min read", "featured": "false"}
        body = raw

    title = meta.get("title", topic)
    slug_base = meta.get("slug") or slugify(title)
    slug = unique_slug(slugify(slug_base), manifest)
    today = date.today().isoformat()
    tags = meta.get("tags", [])
    if isinstance(tags, str):
        tags = [tags]

    # Reconstruct clean frontmatter
    frontmatter = f"""---
title: "{title}"
slug: "{slug}"
date: "{today}"
category: "{category}"
excerpt: "{meta.get('excerpt', '')}"
tags: {json.dumps(tags)}
readTime: "{meta.get('readTime', '7 min read')}"
featured: false
---"""

    full_content = f"{frontmatter}\n\n{body}\n"

    # Save file
    BLOG_DIR.mkdir(parents=True, exist_ok=True)
    output_path = BLOG_DIR / f"{slug}.md"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(full_content)

    print(f"  Saved    : content/blog/{slug}.md")

    # Return manifest entry
    return {
        "slug": slug,
        "title": title,
        "category": category,
        "date": today,
        "topics": [topic] + [t.lower() for t in tags[:3]],
    }


def main():
    parser = argparse.ArgumentParser(description="Generate blog posts for pranav-saji.com")
    parser.add_argument("--category", choices=CATEGORIES, help="Post category")
    parser.add_argument("--count", type=int, default=1, help="Number of posts to generate")
    args = parser.parse_args()

    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        print("Error: ANTHROPIC_API_KEY environment variable not set")
        sys.exit(1)

    client = anthropic.Anthropic(api_key=api_key)
    manifest = load_manifest()

    for i in range(args.count):
        if args.count > 1:
            print(f"\n── Post {i + 1}/{args.count} ──────────────────────────")
        else:
            print("\nGenerating blog post...")

        entry = build_post(args.category, manifest, client)
        manifest["posts"].append(entry)
        save_manifest(manifest)
        print(f"  Done: \"{entry['title']}\"")

    print(f"\nTotal posts in manifest: {len(manifest['posts'])}")
    print("Run `npm run build` to include new posts in the site.")


if __name__ == "__main__":
    main()
