---
title: "The Assistant Layer Just Became Contestable: Reading the EU's Android AI Order"
slug: "eu-dma-android-assistant-layer-2026"
date: "2026-07-27"
category: "AI"
excerpt: "On July 16, the European Commission adopted two binding Digital Markets Act decisions requiring Google to open 11 Android capabilities to rival AI assistants and to share anonymized search data with competing engines. Most coverage framed it as another antitrust skirmish. It is more consequential than that: it makes the assistant layer on two billion devices a contested market, and it hands enterprises a set of questions about device policy and agent authority that most have not thought about yet."
tags: ["AI Regulation", "Digital Markets Act", "AI Assistants", "Android", "Enterprise AI", "AI Governance", "Agentic AI"]
readTime: "8 min read"
featured: false
---

On July 16, 2026, the European Commission adopted two binding decisions under the Digital Markets Act that get less attention than they deserve. The first requires Google to give competing AI assistants the same access to Android that it grants its own. The second requires Google to share anonymized search data, including queries, clicks, and ranking signals, with rival search engines. Alphabet has until November 2026 to finalize the dataset and January 2027 to produce a pricing offer.

The first decision is the one that matters for anyone building or governing AI systems. It names 11 Android capabilities that assistants depend on and requires Google to open them: voice activation, the ability to be set as the user's default assistant, and critically, the ability to act across applications. The Commission's own examples are worth quoting because they describe agentic behavior, not chat: a rival assistant should be able to book a taxi, suggest a reply inside a messaging app, or recall a place the user recently visited.

Read that as a regulator's description of what an assistant is expected to do in 2026, and the implications get interesting fast.

## Why this is a structural change, not a compliance story

For the entire history of mobile, the assistant slot has been an OS-vendor privilege. Whoever controlled the platform controlled which assistant got the wake word, the lock-screen access, the cross-app hooks, and the default. Everyone else got an app icon. That asymmetry is why the assistant market never really became a market, and why the enormous investment in frontier models over the last three years has mostly reached consumers through chat interfaces rather than through the device layer where the useful context lives.

The DMA order changes the input to that equation. If a rival assistant can be set as default, invoked by voice, and permitted to act across apps, then the assistant slot on the largest mobile install base in the world becomes something you can win on product quality rather than platform ownership. That is a genuinely different competitive shape, and the labs with strong models and no distribution are the obvious beneficiaries.

Two caveats keep this from being a clean story. It is EU-only, so the immediate market is a few hundred million users rather than the full Android base, and the platform gatekeepers have historically complied with DMA orders in the narrowest technically defensible way. Expect the first implementations to be functional and awkward. But the precedent travels, and interoperability requirements written for one jurisdiction tend to become the global engineering default because maintaining two architectures is expensive.

## What this actually means for enterprise leaders

The competitive narrative is for the labs. Three things here land on your desk.

**1. Your mobile device policy now has an AI agent clause it probably does not have.** Think about what "act across apps" means on a device that also holds corporate email, an authenticator, an internal chat client, and a VPN profile. A third-party assistant with default status and cross-app authority is a component with access to enterprise data, operating under a vendor agreement you did not sign and a data-handling policy you have not reviewed.

Most mobile device management policies today have detailed positions on app installation, OS versions, and encryption, and no position at all on which assistant holds the default slot or what it may reach. That gap closes on its own, badly, the first time an employee sets a consumer assistant as default on a device with corporate mail. Get ahead of it: decide now whether assistant defaults are managed, which assistants are permitted, and what cross-app scopes are acceptable on managed devices.

**2. The attack surface arrives with the capability.** I wrote separately about the July disclosures showing that content an agent reads becomes instruction it follows. Now put that failure mode on a phone with an assistant that has cross-app authority, and the injection channel is any message, calendar invite, or web page the assistant processes on the user's behalf. A malicious meeting invitation that causes an assistant to forward a thread is not a hypothetical once the assistant genuinely has cross-app write access.

This is not an argument against the DMA order. Opening the assistant layer is good for competition and probably good for users. It is an argument that the security work has to be done at the same pace as the capability work, and the historical pattern is that it is not. Enterprises that treat assistant permissions on managed devices with the same rigor they apply to browser extensions will be fine. The ones that treat it as a consumer preference will not.

**3. Search data sharing changes what you can build.** The second decision gets less coverage but has a long tail. Requiring Google to share anonymized query, click, and ranking signals with rival search engines attacks the data moat that has made competitive general search economically impossible for twenty years. If that data actually becomes available on reasonable terms, the quality gap between Google and alternative engines narrows, and the retrieval layer underneath AI answers becomes more plural.

For anyone building retrieval-augmented systems that depend on web search, more viable search backends means real supplier choice in a place where there has effectively been one. Watch the January 2027 pricing offer, because that is where this decision either becomes real or becomes a formality.

## The regulatory pattern worth tracking

Step back from Android and there is a broader signal. The Commission did not write a rule about model training, safety evaluations, or capability thresholds. It wrote a rule about interoperability and access at the assistant layer.

That is a meaningful shift in where AI regulation is being applied. The EU AI Act governs models and use cases by risk category. This DMA action governs the distribution layer, on the theory that who gets to reach the user matters as much as what the model can do. It is competition law doing AI policy, and it moves faster than AI-specific legislation because the legal machinery already exists and the enforcement precedent is established.

Expect more of this. The most consequential near-term AI rules in the EU may well come from competition and platform regulation rather than from the AI Act, because that is where enforcement is quickest and the levers are already in place. If your regulatory monitoring function only watches AI-specific legislation, it is watching the slower half of the field.

## What to do about it

Three actions, none of them large.

Add an assistant clause to your mobile device policy before the first rival assistants ship on Android in the EU. Decide whether the default assistant slot is user-managed or enterprise-managed on corporate devices, and what cross-app permissions are acceptable. This is a decision you can make in a meeting and will regret not having made.

Second, treat assistant permissions as a reviewable integration, the same category as browser extensions and OAuth grants. The question to ask of each is what data it can reach and under whose authority it acts. That framing generalizes past this specific order to every agentic product that will ask for cross-app access over the next two years.

Third, if you build on search, start tracking the November 2026 dataset deadline and the January 2027 pricing offer. A real second source in web search would be the first genuine change in that supplier landscape in two decades, and it is worth knowing early whether it materializes.

## The bottom line

The Commission's order is narrow in geography and specific in scope, and it will be complied with grudgingly. It still marks the moment the assistant layer stopped being a platform privilege and became a contested market. The competitive consequences will play out over years. The governance consequences arrive on your managed devices as soon as the first rival assistant ships with cross-app authority, and that is a policy question you can answer now or answer later during an incident.
