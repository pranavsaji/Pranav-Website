<!--
SUBMISSION META (remove before sending)

Best outlet: Dark Reading Commentary OR The Hacker News OR SC Media Perspectives
(NOT for HackerNoon — this is a timely news-reaction piece, better for trade security press)
Preferred: Dark Reading — email darkreadingsubmissions@informa.com
Subject: AI Is Now Finding Zero-Days Autonomously. Security Teams Are Not Ready.
Word count: ~850
Vendor neutral: yes

Author info:
- Author: Pranav Saji
- Title: Head of AI Security, Symosis Security
- Bio: Pranav Saji is Head of AI Security at Symosis Security and a Machine Learning Consultant at LinkedIn, based in the San Francisco Bay Area. He builds production AI security systems across enterprise environments and served as a core judge and featured speaker at the USAII Global Hackathon.
- Email: pranavs.mec@gmail.com
- Photo: attached

NOTE: The SSPM article is already queued for Dark Reading. Submit this one AFTER that one is accepted or declined. Or pitch this to SC Media Perspectives instead.
-->

# AI Is Now Finding Zero-Days Autonomously. Security Teams Are Not Ready.

On April 7, 2026, Anthropic announced something that should have stopped every security professional in their tracks. A model called Claude Mythos Preview had autonomously found and written working exploits for thousands of zero-day vulnerabilities across every major operating system and browser. No human guided the discovery. No human wrote the exploits. The model did it start to finish, with a 72 percent success rate.

Among its findings was CVE-2026-4747, a remote code execution vulnerability in FreeBSD's NFS implementation that had been sitting in production systems, undetected, for 17 years. Any unauthenticated attacker on the internet could have used it for full root access. The model found it in hours. It also found a 27-year-old denial-of-service flaw in OpenBSD. By late May, 50 participating organizations had used Mythos Preview through Anthropic's Project Glasswing program to identify more than 10,000 high and critical severity vulnerabilities.

Anthropic made the decision not to release this model publicly. That choice deserves credit. But the thing that keeps me up at night is not what Anthropic built. It is what happens when someone else builds the same thing without those guardrails.

## The Window Has Closed

For decades, enterprise security strategy has been built around a timing assumption: attackers need time. Time to find a vulnerability. Time to develop an exploit. Time to figure out how to deploy it. That window, even if only days or weeks, is what gives defenders a chance.

That assumption is now in serious trouble.

The gap between vulnerability disclosure and active exploitation has already been collapsing. In 2026, 28 percent of CVEs are being exploited within 24 hours of disclosure. AI accelerates every stage of that timeline. Reconnaissance is faster. Exploit development is faster. The ability to chain multiple vulnerabilities into a complete attack sequence, something that used to require a skilled human researcher working for weeks, can now be automated.

The implication for patch management is severe. An organization running a 30-day patching cycle is operating as if it still has 30 days after a vulnerability becomes public. It does not. In an environment where AI can autonomously develop and test exploits, the effective window is measured in hours, not weeks.

## What This Changes for Enterprise Security

The question I hear most often is whether Claude Mythos represents a turning point or just an incremental step. After thinking about it carefully, I believe it is a turning point, but not the one most people focus on.

The part that matters for enterprise defenders is not the headline capability. It is the democratization that follows. Anthropic's model was built by one of the best-resourced AI labs in the world, and they chose to restrict it. The same capability, built by less scrupulous actors or available through leaked weights or open-source reproduction, does not come with those restrictions.

History suggests that capability gaps at the frontier close within 12 to 18 months. Security teams need to assume that autonomous vulnerability discovery and exploit generation will be available to well-resourced adversaries within that window, and to less sophisticated actors not long after.

## Three Things Security Teams Should Do Differently Right Now

**Stop treating patch management as a scheduled process.** A 30-day patching cycle is a 30-day attack window. The highest-priority vulnerabilities, especially those in internet-facing infrastructure, network protocols, and anything touching authentication, need to be treated as incident response, not maintenance. Patch within hours, not weeks, for critical CVEs.

**Audit your legacy infrastructure systematically.** CVE-2026-4747 was 17 years old. The OpenBSD flaw was 27. These are not edge cases. Every organization has code running in production that was written before modern security practices existed, that has never been audited at the depth an AI model can now achieve. Assume you have similar vulnerabilities. Find them before someone else does.

**Think about AI-assisted offense when you design your defenses.** Traditional threat modeling assumes human adversaries operating at human speed. That model is outdated. When you design a security control, the question is no longer whether a skilled human could bypass it. The question is whether an autonomous system running thousands of attempts per hour could bypass it. The answer will often be different, and your controls should reflect that.

## The Honest Assessment

Project Glasswing is the right response from Anthropic. Giving defenders early access to the capability so they can find and fix vulnerabilities before attackers develop the same tools is exactly the kind of responsible deployment the industry needs to see more of. The 10,000-plus vulnerabilities already found and reported through that program represent real improvements to real software that real people use.

But Project Glasswing is also a preview of a world that is coming regardless of what any single organization decides. The underlying capability, AI that can autonomously find and exploit vulnerabilities at scale, is not going back in the box.

Security teams that are still operating on the assumption that they have time are making a bet that the next 17-year-old vulnerability in their stack gets found by a defender first. That bet is getting harder to win.
