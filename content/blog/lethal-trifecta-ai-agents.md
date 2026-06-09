---
title: "The Lethal Trifecta: Why Your Most Useful AI Agent Is One Bad Email Away From a Breach"
slug: "lethal-trifecta-ai-agents"
date: "2026-06-09"
category: "AI Cybersecurity"
excerpt: "Simon Willison named the pattern: an agent with private data access, exposure to untrusted text, and a way to send data out is exploitable by design. EchoLeak and GeminiJack turned that pattern into working attacks against Microsoft 365 Copilot and Google Gemini Enterprise. The fix is not a better prompt. It is removing one leg of the triangle."
tags: ["AI Security", "Prompt Injection", "AI Agents", "Data Exfiltration", "AI Governance"]
readTime: "6 min read"
featured: false
---

Here is the uncomfortable thing about the most useful AI agents in your company. The exact features that make them valuable are the features that make them exploitable. That is not a bug you can patch. It is a shape, and the shape has a name.

Simon Willison calls it the lethal trifecta. Once you see it, you cannot unsee it, and you start noticing it in almost every agent worth deploying.

## Three ingredients, one breach

An agent is exploitable for data theft when it has all three of these at once:

1. **Access to private data.** It can read your email, your documents, your databases, your tickets. This is the entire reason you bought it.
2. **Exposure to untrusted content.** It processes text you did not write: inbound emails, shared docs, calendar invites, web pages, retrieved records. This is also the reason you bought it.
3. **A way to send data out.** It can make an external request, render an image from a URL, call an API, or generate a link a user might click. Again, a feature.

Any one of these is fine. Any two is usually fine. All three together is a working exfiltration channel, because an attacker who controls the untrusted content can write instructions, the agent reads your private data, and the agent ships that data out through the external request. As Willison puts it: if your agentic system has all three, it is vulnerable, period.

Notice that nothing here is a software flaw in the traditional sense. There is no buffer overflow, no missing patch. The system is doing exactly what it was designed to do. The attacker just supplied the instructions.

## This already happened, twice, in name brands

If this sounded theoretical, two disclosed attacks settle it.

**EchoLeak, against Microsoft 365 Copilot.** An attacker sends an ordinary-looking email with hidden instructions inside it. The victim does nothing unusual. Later they ask Copilot a normal question. Copilot's retrieval pulls in the poisoned email along with everything else, executes the buried instructions, reads sensitive content the user has access to, and exfiltrates it through an image URL request. The user never clicked the malicious email. They just used their assistant.

**GeminiJack, against Google Gemini Enterprise.** Same shape, different door. Malicious instructions hide in a shared document or a calendar invite. The enterprise RAG system indexes it as part of normal operation. During a routine search the instructions fire, private data gets read, and it leaves through an image URL.

Both are the trifecta executing exactly as predicted. Private data access, untrusted content, exfiltration path. The attacker supplied leg two and rode the other two out the door.

## Why "just train the model to ignore it" does not save you

Every team's first instinct is to defend at the model: better system prompts, injection classifiers, alignment training. Do those things, but do not mistake them for the control.

The reason is structural. The untrusted content and the legitimate instructions arrive through the same channel, as text, and the model has no reliable way to tell the user's intent from an attacker's intent embedded in a document it was asked to read. Current research is not shy about it: agents may always fall for some prompt injection. You are buying down probability, not eliminating the class. If your only defense is the model being clever enough not to get fooled, you have no defense, you have a coin flip with good odds.

The durable move is to break the triangle. Take away any one leg and the attack collapses even when the model gets fooled.

## What I would actually do

This is the list I would run against every agent with real data access.

**Map the three legs for each agent, explicitly.** Write down what private data it can read, what untrusted content it ingests, and every way it can send data out. Most teams have never drawn this. The drawing is where the risk becomes obvious, because you will find agents sitting on all three legs that nobody flagged.

**Cut the exfiltration leg first, because it is the cheapest to cut.** Block external image loading in agent-rendered content. This single change kills the most common exfiltration path in both EchoLeak and GeminiJack, the image URL. Restrict outbound requests to an allowlist of domains the agent genuinely needs. An agent that summarizes your email does not need to call arbitrary URLs.

**Shrink the private-data leg with least privilege.** The agent should reach only the data the current task requires, scoped to the user and the moment, not standing access to everything the service account can see. The blast radius of a successful injection is exactly the data the agent could touch.

**Treat untrusted content as untrusted, structurally.** Where you can, separate the channel that carries data to summarize from the channel that carries instructions to follow. Do not let retrieved documents silently become commands.

**Audit agents like privileged infrastructure, not like apps.** Log what they read and where they send it. Monitor connected MCP tools for poisoning and for tool definitions that change under you. An agent with the trifecta deserves the same scrutiny you give a service account with broad access, because that is what it is.

## The leadership version

You do not need to memorize the CVEs to act on this. You need one question in every AI deployment review:

Does this agent read private data, ingest untrusted content, and have a way to send data out? If the answer is yes to all three, it is exploitable by design, and the right response is not a better prompt. It is removing a leg or tightly fencing the one you cannot remove.

The useful agents will keep having this shape, because the shape is what makes them useful. The teams that stay safe are not the ones with the cleverest system prompt. They are the ones who looked at the triangle, picked a leg, and cut it before an attacker drew the same picture they did.
