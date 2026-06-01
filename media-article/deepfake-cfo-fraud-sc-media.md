<!--
SUBMISSION META (remove before sending)

Outlet: SC Media Perspectives
Find email: go to scworld.com/contribute, click "Email the editors here" (protected mailto link)
Subject: The Deepfake CFO Is Already in Your Conference Room
Format: paste article into email body, attach headshot separately
Word count: ~780

Include at bottom of email:
- Title: Your SaaS Security Is an Illusion. Here Is How I Know. (NO — wrong article. This one is:)
  Title: The Deepfake CFO Is Already in Your Conference Room
- Author: Pranav Saji
- Job title: Head of AI Security, Symosis Security
- Organization: Symosis Security
- Email: pranavs.mec@gmail.com
- Photo: attached (color headshot)
-->

# The Deepfake CFO Is Already in Your Conference Room

The finance worker at Arup had every reason to trust what he saw. The video call looked normal. The CFO was there. Colleagues he recognized were on screen. They walked him through the details of a confidential acquisition. He sent 15 wire transfers totaling $25 million before anyone realized that every person on that call was fake.

That was 2024. The tools that made it possible cost less and work better now. The FBI logged nearly $900 million in AI-related fraud complaints in 2025, and that is only what got reported. Most victims never identify the AI component when filing, so the real number is significantly higher. Deloitte projects AI-enabled fraud losses in the US could hit $40 billion by 2027. A Swiss businessman lost several million francs after a series of phone calls from a convincing audio clone of a trusted business partner. The FBI logged over 22,000 AI-related fraud complaints in a single year, and researchers estimate fewer than five percent of voice clone victims ever report what happened to them.

The technology required to do this is no longer expensive, specialized, or hard to find. Deepfake-as-a-service platforms have been widely available since 2025. For a few hundred dollars, anyone can clone a voice from publicly available audio, generate a real-time video persona, and run a convincing impersonation at scale. The attackers who hit Arup did not need a nation-state budget. They needed patience and a working internet connection.

## Why the Old Controls Do Not Work Here

Social engineering has always exploited trust. What deepfakes do differently is remove the signals we relied on to verify that trust.

We taught employees to distrust email. So we told them: if the request seems suspicious, call the person directly. We trained them to recognize phishing. We taught them to hover over links, check sender addresses, look for grammatical errors.

None of that works when the voice on the phone is the CEO. None of it works when the face on the video call is the CFO. The fraud is not in the email anymore. It is in the channel we told people was safe.

This is the specific danger of deepfake fraud. It does not try to deceive your technical controls. It deceives your people at the exact moment they are using their judgment correctly. The Arup employee did what we would want any employee to do. He was suspicious of the initial email. He got on a video call to verify. He saw faces he recognized. He proceeded. He lost $25 million.

## What Actually Stops It

Detection technology helps at the margins, and it is getting better. Spectral artifacts in audio, background noise patterns, compression mismatches, and timing anomalies can surface synthetic content when you know what to look for. Real-time detection tools for platforms like Zoom and Teams are improving. But they are not yet reliable enough to be your primary defense, and attackers adapt to detection as fast as detection improves.

The control that actually works is procedural, not technical, and it has a name that understates how important it is: out-of-band verification.

Any request that involves a wire transfer, a vendor banking change, a credential update, or access to sensitive systems should require confirmation through a separate, pre-established channel. Not a phone number from the email. Not a number from the call itself. A number you already have, verified independently, before anyone is under pressure to act.

That confirmation step needs to be mandatory, not discretionary. The Arup employee was under social pressure during that call. Urgency and authority are built into these attacks by design. A process that relies on individual judgment in the moment will fail when the deepfake is good enough.

Other controls that reduce exposure:

Require dual authorization on wire transfers above a defined threshold. One person receiving an instruction, however convincing, should not be enough to move significant funds.

Establish verbal code words for high-stakes decisions. A pre-agreed phrase, known only internally and verified before any major action, is something a deepfake cannot replicate from public audio.

Create a no-penalty pause culture. Make it explicitly safe for any employee to say "I need to verify this through another channel before I proceed" without career risk. The Arup employee felt confident enough in what he saw. What if he had felt confident enough in his right to pause?

Train for the specific scenario. Employees who have heard "someone may call you sounding exactly like your CFO and it will be convincing" are more likely to trigger verification than employees who have never imagined that as a real possibility.

## The Honest Reality

No enterprise is immune to this. The target does not have to be a finance worker. It can be an IT administrator resetting credentials. An HR employee updating direct deposit information. A developer adding an authorized user to a production system.

The deepfake CFO is not a future threat. It is a current capability, deployed at scale against real organizations right now. The question is not whether your company could be targeted. It is whether your processes would catch it before the wire goes out.

The answer, for most organizations, is that they have not tested that assumption. Now is the time to find out.
