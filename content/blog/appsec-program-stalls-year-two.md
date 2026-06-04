---
title: "Your AppSec Program Will Stall in Year Two. Here's Why"
slug: "appsec-program-stalls-year-two"
date: "2026-06-03"
category: "AI Cybersecurity"
excerpt: "Year one of an AppSec program feels productive: scanners deploy, champions emerge, dashboards impress leadership. Then around month thirteen the energy dissipates, the backlog stops shrinking, and the program hits a wall. Here is why it happens and how to plan for it."
tags: ["AppSec", "Security Program", "Vulnerability Management", "DevSecOps", "Security Strategy"]
readTime: "6 min read"
featured: true
---

Year one of an AppSec program feels productive. Scanners deploy, security champions emerge, dashboards impress leadership. But around month thirteen, the energy dissipates. The backlog stops shrinking, champions go quiet, and the program hits a wall.

## Year One Runs on Heroics, and Heroes Burn Out

Successful first-year wins depend on a few exceptional people: a dedicated security engineer triaging every critical finding, a staff developer actually reading SAST output rather than dismissing it, a manager protecting the team so it can fix real bug classes.

Heroics always work temporarily, but they do not scale. When key people leave or get pulled into incidents, the entire program wobbles. The system depends on individuals being unusually generous with their time, well beyond their regular responsibilities.

By month thirteen, these heroes are exhausted. They have delivered a year of secure-by-default work on top of their actual jobs, receiving only a larger backlog as thanks. A program that depends on heroes is a program with a countdown clock.

## The Backlog Isn't a Backlog. It's a Guilt Pile

Year one actually produces findings at unsustainable rates. A typical scanner generates 400 issues per quarter, with incorrect severities, unknown reachability, and widespread duplicates.

The result is a guilt machine, where findings accumulate faster than teams can address them. Developers learn that the security backlog is where tickets go to disappear, and they start auto-closing them. The dashboard number climbs while everyone tacitly ignores reality.

The Cloud Security Alliance's 2026 State of Modern Application and AI Security report found that 82% of organizations lack effective runtime visibility. Most teams drown in pre-production noise while actual exploitable vulnerabilities slip past, unmonitored, into production.

## Tools Were Never the Problem

Budget meetings often propose adding another tool to fix a stalling program: SAST, DAST, SCA, or an ASPM platform to correlate everything. This approach provides temporary momentum before hitting the same wall.

Tools find vulnerabilities. Workflows fix them. A finding only matters when it lands in a developer's existing workflow with enough context to act within five minutes, ranked against competing priorities. Otherwise it is noise. Adding sharper tools to broken workflows produces sharper noise.

The real issue: most programs buy tools without building the workflows to use them effectively.

## Attackers Think in Paths. Your Dashboard Thinks in Lists

Scanners produce isolated lists of CVEs, misconfigurations, and overprivileged accounts, each scored independently. Attackers see relationships and chains.

A medium-severity misconfiguration plus an overprivileged service account plus an exposed endpoint is not three medium findings. It is one critical path to customer data. Modern exploitation industrializes reconnaissance, weaponization, and lateral movement at machine speed across thousands of environments.

Dashboards answer "what vulnerabilities exist?" Attackers answer "what chains into a critical target?"

Shifting from CVSS scores to reachability and blast-radius prioritization eliminated roughly 70% of one program's backlog in a single review. Not through fixes, but through acknowledging irrelevance and stating it explicitly.

## Wire It Into the Work, or Watch It Decay

Year two depends on the program running without heroes. Security workflows must live inside developer workflows: findings as PR comments with specific line numbers and brief explanations, not separate tool tickets. Remediation time drops when friction disappears.

Equally important is ruthless honesty about what will not be done. A published prioritization policy, stating that unreachable, non-sensitive findings will not generate tickets, eliminates the guilt cycle. An explicit "we accept this risk" decision is more defensible than a 400-item ignored backlog.

## The Honeymoon Ends. Plan for It

Month nine feels productive because the heroics have not exhausted anyone yet and the backlog guilt has not crystallized. Use this calm to cut noise, rank by reachability and blast radius, move workflows into developer spaces, and document accepted risks.

This approach makes year two sustainable without adrenaline dependency. The alternative is hitting the wall at month thirteen and joining the pattern I have now watched play out four times.

---

*This article was originally published on [Medium](https://medium.com/@pranavs.mec/your-appsec-program-will-stall-in-year-two-heres-why-c2d3b0ee2db8).*
