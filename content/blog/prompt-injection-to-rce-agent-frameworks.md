---
title: "When a Prompt Becomes a Shell: Agent Frameworks Are Turning Text Into RCE"
slug: "prompt-injection-to-rce-agent-frameworks"
date: "2026-06-09"
category: "AI Cybersecurity"
excerpt: "Microsoft just traced two prompt injections in Semantic Kernel all the way to host-level code execution. One prompt launched calc.exe. Another wrote a payload to the Windows Startup folder and escaped the container sandbox. The takeaway is blunt: your LLM is not a security boundary, and the tools you expose define your attacker's reach."
tags: ["AI Security", "Prompt Injection", "Remote Code Execution", "AI Agents", "Semantic Kernel"]
readTime: "6 min read"
featured: true
---

For two years the standard line on prompt injection was that it was a content problem. The model says something it should not. It leaks a system prompt. It gets talked into a rude answer. Embarrassing, but bounded.

That framing is now wrong, and there is a public proof to point at.

On May 7, 2026, Microsoft's security team published research showing prompt injection escalating into host-level remote code execution inside Semantic Kernel, one of the most widely used agent frameworks, with more than 27,000 GitHub stars. Not a leaked prompt. Code running on the machine that hosts the agent.

If you build agents on a framework, this is the disclosure to read closely. Here is what actually happened and why it generalizes.

## CVE-2026-26030: a search filter that ran code

The first flaw lived in the in-memory vector store. To filter results, the framework built a Python lambda out of user-controlled text. A query for results in Paris became the string `lambda x: x.city == 'Paris'`, and that string was handed to `eval()`.

You can see the hole from here. Inject `' or MALICIOUS_CODE or '` into the search parameter and your code becomes part of the expression that gets evaluated.

The framework did try to defend itself. It scanned the abstract syntax tree for dangerous names like `eval`, `exec`, and `__import__`. The researchers walked straight around the blocklist using attributes it did not cover, things like `__name__`, `load_module`, `system`, and `BuiltinImporter`, traversing Python's type hierarchy with `tuple()` to reach internals without calling any blocked builtin.

The result: a single prompt launched `calc.exe` on the host running the agent. `calc.exe` is the polite demo. The mechanism runs anything.

The fix in semantic-kernel 1.39.4 and later replaces the blocklist with an allowlist: only safe AST constructs and an explicit set of permitted function calls are allowed through. That direction is the whole lesson. Blocklists enumerate badness and lose. Allowlists enumerate goodness and hold.

## CVE-2026-25592: a developer helper the model was never supposed to call

The second flaw is quieter and, to me, more instructive.

A method named `DownloadFileAsync` was decorated with `[KernelFunction]`. That attribute is what exposes a function to the model as a callable tool. The method was meant for developers. The decorator handed it to the AI, with no path validation.

So the attack chains cleanly:

1. A prompt injection tells the agent to write a malicious script inside its sandboxed container.
2. A second injection calls the exposed `DownloadFileAsync` to write a payload to the host's Windows Startup folder.
3. The next time a user logs in, the payload runs.

That is a sandbox escape. The agent was isolated inside an Azure Container Apps boundary, and the over-exposed tool reached past it to achieve full code execution on the host. The fix is to drop the `[KernelFunction]` decorator so the model can no longer see the method, and to add path canonicalization with a directory allowlist for the legitimate developer path.

## The pattern under both bugs

These look like two unrelated Python mistakes. They are the same mistake wearing two outfits.

In both cases the model was treated as a trusted caller. The first bug trusted model-shaped text to be safe inside `eval()`. The second bug trusted the model to only invoke tools a developer intended for it. Microsoft's own framing of the lesson is the sentence I would tape to every agent team's wall:

Your LLM is not a security boundary. The tools you expose define your attacker's reach.

Read that and the strategy falls out of it. You cannot prompt your way to safety, because the prompt is exactly the channel the attacker controls. Indirect injection makes this worse: the hostile instruction arrives through a document, a web page, a search result, a retrieved record, data your operators do not watch the way they watch user chat. By the time text reaches the model, assume an adversary may have written it.

Microsoft says the same vulnerable patterns exist in other frameworks, with LangChain and CrewAI named for future write-ups. So do not file this under "a Semantic Kernel bug." File it under "what happens when any framework lets model output reach a code path with privilege."

## What I would do this week

I build and break agents for a living, so this is the concrete list, not theory.

**Inventory every tool your agents can call, and treat the list as your attack surface.** For each one ask a single question: if a hostile string drove this call, what is the worst outcome? Anything that touches the filesystem, the shell, the network, or an interpreter is a code-execution candidate until proven otherwise. The `DownloadFileAsync` bug is what happens when nobody owns that list.

**Never put model output inside `eval`, `exec`, a template that compiles, a shell command, or a raw SQL string.** If you must evaluate a model-derived expression, parse it against an allowlisted grammar. Enumerate what is allowed, not what is forbidden. CVE-2026-26030 is a blocklist that lost.

**Enforce permissions below the model, at a boundary the prompt cannot rewrite.** Path canonicalization with a directory allowlist. A network egress allowlist. Least-privilege credentials for any tool the agent can invoke. The control has to live in code the model cannot talk its way past.

**Pin and patch your agent framework on the security clock.** These libraries move fast and update casually. A code-execution flaw in the layer that wires your model to tools is an incident-response item, not a routine dependency bump. Know your Semantic Kernel, LangChain, and CrewAI versions today.

**Sandbox like the sandbox will be escaped.** CVE-2026-25592 reached out of a managed container through one over-exposed function. Isolation buys you time, not immunity. No standing secrets, no deploy credentials, no host write access inside the blast radius unless a tool genuinely needs it.

## The honest part

None of this means stop building agents. The capability is real and the teams shipping it are not going to stand down. But the last month closed off a comfortable assumption. We told ourselves prompt injection was a content problem and the sandbox would hold. Microsoft showed a prompt opening a shell and a tool walking out of the container.

So here is the question I would put to your team. Make a list of every tool your agents can call. For each one, if the input were written by an attacker, what runs? If that list does not exist yet, that is not a research project. That is the work, and it starts this week.
