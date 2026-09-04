# Client Intake

Everything you need from a CPA firm before building their site, ordered by what
it unblocks. Send this as-is, or paste the sections into your own form.

The build is not the bottleneck — a full reskin takes under an hour. Collecting
verified answers to section 3 is what actually sets the timeline, so send this
at the start of the engagement, not when you're ready to build.

---

## 1. Identity — unblocks the whole site (30 minutes of their time)

Without these nothing renders correctly. Ask for them first.

- **Legal firm name**, exactly as registered (e.g. "Calder & Finch CPAs, LLP")
- **Short name** for tight spaces
- **Logo** — SVG preferred, PNG at 2x acceptable. No logo? We use a monogram;
  confirm the initials.
- **Brand colors** — hex codes if they have a brand guide. If not, we choose and
  they approve. We need a dark primary, an accent for buttons, and confirmation
  that the accent is not their competitor's color.
- **Main phone**, and whether it should be click-to-call on mobile
- **Main email** for inquiries
- **Office address(es)**, suite numbers included
- **Office hours**, per location, including seasonal changes (many firms extend
  hours January–April — say so, we'll note it)
- **Year founded**
- **Domain** they'll use, and who controls DNS

## 2. Compliance — do not skip, do not guess (their responsibility to verify)

Everything here is a public claim a state board can hold them to. Get it in
writing from a partner, not from a marketing coordinator.

- **Which states are they licensed in?** List every one.
- **License disclaimer** their state board requires, verbatim. Requirements
  differ by state; some mandate specific wording.
- **Professional memberships** — AICPA, state society, others. Current only.
- **Credentials to display** — CPA, EA, CVA, CFP. Each individual's, verified
  active.
- **Services they must NOT be described as offering.** This one gets skipped and
  it matters. Audit and review engagements have independence and peer-review
  requirements; business brokerage needs separate licensing. The template ships
  with two FAQ answers that flag this — they need editing or deleting.
- **Any statistic they want published** — years in practice, clients served,
  states filed in — with the basis for each. If they can't substantiate it on
  request, it doesn't go on the site.

## 3. Content — the long pole (plan for 2–3 weeks of back-and-forth)

- **Services** they actually offer, and which to feature. For each: what's
  included, who it's for, what a client typically pays (even a range helps us
  write honestly about pricing).
- **Industries** with genuine depth. Ask "which industry could you talk about
  for an hour without notes?" — that's the list. Anything else is a claim they
  can't back in a first meeting.
- **Team** — name, title, credentials, 2–3 paragraph bio, areas of focus,
  education, memberships, LinkedIn, headshot. Chase the headshots early; they
  are reliably the last thing to arrive.
- **Testimonials** — real client quotes **with written permission**, including
  whether the client's name and company may be used. No permission, no
  testimonial; the section hides itself when the list is empty.
- **FAQs** — the questions they actually get on first calls. Their answers, in
  their words.
- **Articles** — do they have existing content? Will they write? Will they
  approve ghostwritten drafts? A licensed CPA at the firm must review anything
  published under the firm's name.
- **Areas served** — real communities they work in, not a radius. Location pages
  for cities they have no presence in are a deceptive local-SEO practice and the
  fastest way to lose both rankings and credibility.

## 4. Integrations — needed before launch, not during build

- **Scheduling tool** — Calendly, Acuity, Microsoft Bookings? Get the booking
  link, or confirm we use the built-in consultation page.
- **Where contact form submissions go** — CRM, shared inbox, help desk? Get the
  webhook URL or email address, and someone who confirms receipt in testing.
- **Client portal** they already use, if any, so we link to the right one.
- **Analytics** — existing GA4 property, or do we create one?
- **Google Business Profile** — do they have one per location? Verified?
- **Existing site**, if any: we need its URL map so redirects preserve rankings.

## 5. Legal review — start it early, it gates launch

- Privacy policy, terms of use, and accessibility statement drafts go to
  **their** counsel, not yours. The template ships drafts with visible notices
  saying exactly this.
- Confirm what the firm's engagement letter says about website content, so the
  site's disclaimers don't contradict it.
- Agree in writing what the client may do with the code after launch — see
  [THIRD-PARTY-LICENSES.md](../THIRD-PARTY-LICENSES.md).

---

## Before you hand it over

```bash
npm run check:content   # blocks on leftovers, placeholders, duplicate copy
npm run build           # must pass clean
```

Then walk the pre-launch checklist in the [README](../README.md#before-you-go-live)
with someone at the firm who can verify each claim.
