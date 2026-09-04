# The Content Interview

**This is the highest-leverage 60 minutes in the whole engagement.**

A client site needs roughly 14,000 words of firm-specific prose. Asking a CPA
firm to write it produces one of two outcomes: nothing for six weeks, or two
paragraphs of "we are your trusted financial partner." Both kill the project.

So don't ask them to write. Ask them to talk, record it, and hand the transcript
to Claude — it can draft the entire site from a good interview, and the partner
spends an hour instead of a month.

## Before the call

- Get their last-year financials conversation out of the way first. You want the
  partner relaxed, not thinking about scope.
- Ask for: the prior year's tax return count by type, their current site if any,
  and the names of two or three competitors they lose work to.
- **Record it.** Say so upfront and get a yes. The transcript is the deliverable.
- Block 60 minutes. It will run to 75.

## Who has to be in the room

A partner. Not a marketing coordinator, not an office manager. The questions
below need someone who decides what the firm takes on and who can say "we don't
do that." An associate's answers will be plausible and wrong in ways you won't
catch until launch.

---

## The questions

Ask these in order. Follow the tangents — the tangents are where the copy is.

### Positioning (10 min)

1. Someone calls you for the first time. What do they say is wrong?
2. What do you say back that makes them decide to hire you? *(This is the
   homepage headline. They will not think to tell you unless asked directly.)*
3. What kind of client do you want more of? Describe a specific one.
4. What kind do you want fewer of? Why?
5. What do people assume about working with a CPA that isn't true of you?

### Services (15 min)

6. Which services actually generate revenue, versus which are on the list out of
   habit?
7. Walk me through what a client actually gets in your biggest service. What
   lands in their inbox and when?
8. What's a service you're good at that clients don't know to ask for?
9. **What must we not say you do?** *(Audit and review engagements, brokerage,
   legal advice, investment management. Get this explicitly — it goes straight
   into the FAQ answers and it is the question that keeps you out of trouble.)*
10. What do you charge, roughly, and how is it structured? Fixed, hourly, both?

### Industries (10 min)

11. Which industry could you talk about for an hour with no notes?
12. What do those clients get wrong about their own numbers?
13. What do you know about that industry that a generalist CPA doesn't?
14. Which industries do you *not* want, and why?

### Proof (10 min)

15. Tell me about a client engagement that went really well. What changed for
    them? *(Do not publish this as a case study without written permission —
    but it tells you what outcomes to write about.)*
16. Which clients would say yes to a short testimonial? *(You need names. Their
    permission, in writing, is a separate step.)*
17. How long have you been practising, how many clients, which states are you
    licensed in? *(Every figure here is a public claim — see verification.)*
18. What credentials do you and your team hold? Are they all current?

### Process and objections (10 min)

19. What happens between "I want to hire you" and the first piece of work?
20. What's the most common reason a prospect doesn't hire you?
21. What question do you answer on nearly every first call?
    *(That is your first FAQ, in their words.)*

### The last question (5 min)

22. If this website worked perfectly for a year, what would be different about
    your firm?

---

## After the call

1. Transcribe it. Any decent transcription tool is fine — accuracy of names and
   figures matters more than punctuation.
2. Hand the transcript to a Claude session with the client's repo attached:

   > Here's the content interview transcript for [firm]. Read `CLAUDE.md`, use
   > the `website-build` skill, and draft `content/copy.ts`, `services.ts`,
   > `industries.ts`, `firm.ts` and `faqs.ts` from it. Use their words where the
   > phrasing is good. Flag anything you had to infer rather than take from the
   > transcript, and do not fill in `verification.ts`.

3. Send the draft to the partner for correction, not approval. "Here's what I
   heard — fix what's wrong" gets a response. "Please review and approve" does
   not.
4. Get `content/verification.ts` signed by the partner before launch.

## Why this works

The prose that comes back is in the firm's actual voice, because it came out of
their mouth. It's specific, because you asked specific questions. It differs
from every other client's site, which is the whole SEO argument. And you spent
one hour instead of chasing a Google Doc for a month.

The recording also protects you. When someone at the firm later says "we never
said we do that," there is a transcript.
