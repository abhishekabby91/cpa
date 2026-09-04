---
name: website-build
description: End-to-end workflow for building a client website on this template — analyze and audit the existing site, understand the business, map content, find gaps, define the sitemap, set SEO strategy, design, write copy, develop, optimize, test, and launch. Use when starting a new client site, migrating an existing one, auditing a live site, or when asked to act as a full website team (developer, SEO, UX, content strategist, QA). Also use for any single stage of that workflow — a content gap analysis, a redirect map, a pre-launch QA pass.
---

# Website Build

The full-team workflow for a client website on this template. Work the stages in
order; each one produces an artifact the next depends on. Skipping a stage
doesn't save time, it moves the cost to launch week.

## Roles this covers

Senior web developer · frontend · full-stack · UI/UX designer · design system ·
information architect · content strategist · SEO copywriter · technical SEO ·
local SEO · semantic SEO · website auditor · migration specialist · competitor
researcher · brand strategist · performance · accessibility · QA · analytics ·
launch and deployment.

They are one job with different hats, not a handoff chain. Decisions made in the
SEO stage constrain the sitemap; decisions in the sitemap constrain the copy.

---

## Stage 1 — Analyze

Understand what exists before proposing anything.

- Crawl the current site if there is one. Record every indexable URL.
- Pull 12 months of Google Search Console data: queries, pages, impressions,
  clicks, position. This is the only reliable record of what the firm already
  ranks for, and it is the thing a redesign most often destroys.
- Pull Analytics: entry pages, conversion paths, bounce, device split.
- Note what currently converts. Preserve it.

**Never skip this on a redesign.** A page with no traffic can be cut; a page
with rankings must be mapped, not deleted.

## Stage 2 — Audit

- **Technical:** crawlability, indexation, canonicals, redirect chains, status
  codes, Core Web Vitals, mobile usability, HTTPS, structured data validity.
- **Content:** thin pages, duplicates, cannibalization (two pages competing for
  one query), stale figures, outdated team and credentials.
- **Accessibility:** run the real check, don't eyeball it. `npm run qa`.
- **Conversion:** is there one obvious next action on every page?

Write findings as a prioritized list: impact × effort. Ship the fixes that are
high impact and low effort during the build, not after.

## Stage 3 — Understand the business

For a CPA firm specifically, get answers before writing a word:

- Which services actually generate revenue, versus which are listed out of habit
- Which client types they want more of, and which they want fewer of
- What a good lead looks like, and what happens to it after the form submits
- What they say on a first call that makes people hire them — that is the
  homepage headline, and they will not think to tell you unless you ask
- Which states they are licensed in, and what they must **not** be described as
  offering

[docs/CLIENT-INTAKE.md](../../../docs/CLIENT-INTAKE.md) is the worksheet.

## Stage 4 — Analyze existing pages

Inventory every page: URL, title, target query, traffic, conversions, and a
verdict — **keep, merge, rewrite, or retire**. Anything with rankings gets a
destination in the new structure even if the page itself is retired.

## Stage 5 — Understand the new structure

Group by how clients search and decide, not by the firm's internal org chart. A
firm that thinks in "compliance" and "advisory" departments still has clients
searching for "help with an IRS letter."

## Stage 6 — Map content

Old URL → new URL, for every page. This becomes `content/redirects.ts`. Where
nothing maps, redirect to the nearest useful parent — never to a 404, and never
en masse to the homepage.

## Stage 7 — Identify gaps

- **Content gaps:** queries the firm should own with no page to serve them.
- **Competitor gaps:** what the top three ranking firms cover that this one
  doesn't. Look at what actually ranks, not at who the client says competes.
- **Intent gaps:** informational, comparison and transactional pages for the same
  topic serve different searches. Most firms only have the last one.

## Stage 8 — Create the sitemap

One page per search intent. Resist the page that exists to satisfy an internal
stakeholder and serves no query. Every page needs a reason to exist that can be
stated in one sentence.

## Stage 9 — SEO strategy

- **Keyword and intent:** map a primary query per page, and confirm the intent
  matches the page type. A service page targeting an informational query loses.
- **Local:** NAP consistent everywhere, LocalBusiness schema per office, real
  areas served. Location pages only for offices that exist.
- **Semantic:** cover the entities and subtopics that define the subject, not
  keyword repetitions.
- **Internal linking:** every service links to related services and its
  industries; every article links to the service it supports.
- **Schema:** built in `src/lib/schema.ts`. Emit only what the content supports —
  no invented ratings or price ranges.

## Stage 10 — UX/UI

The design system is built. Work within it: semantic tokens only, no raw
palette colors. Per-client visual change belongs in the theme block of
`content/site.ts`. Verify contrast after any color change — `npm run qa`.

## Stage 11 — Write content

Every word lives in `content/`. Nothing goes in a component.

Lead with the client's situation and outcome, not the firm's category. Avoid
guarantees about refunds, audit outcomes, or savings — for a licensed firm these
are regulatory exposure, not marketing copy.

**Rewrite, don't tweak.** Shipping the template's default prose across multiple
client sites makes them near-duplicates that suppress each other.
`npm run check:content` enforces this.

## Stage 12 — Develop

Configure, don't fork. If a client needs something the config can't express,
build it in the template behind a flag and merge down — never edit `src/` in a
client fork. See [CLAUDE.md](../../../CLAUDE.md).

## Stage 12b — Privacy and consent

Any script that measures or targets the visitor waits for their choice. The
template ships Google Consent Mode v2 booting denied, a banner where refusal is
as easy as acceptance, a granular preference centre reachable from the footer,
and Global Privacy Control honoured without prompting.

Per client:

- Reconcile `content/privacy.ts` with a real cookie scan of the finished site. A
  cookie table that doesn't match what is actually set is worse than none.
- Confirm the mode. `opt-in` ships by default and is required under GDPR/UK
  GDPR; `opt-out` is common under US state laws. **Counsel decides**, not you.
- Add any embed the client wants — chat, maps, scheduling, pixels — behind the
  matching category, never outside the gate.
- `npm run qa` asserts no analytics cookie is set and no measurement request is
  sent before consent. Do not "temporarily" bypass it to debug analytics.

## Stage 13 — Optimize

Static generation is the default; keep it. Before adding any dependency, ask
what it costs on mobile. Images sized and lazy-loaded below the fold; fonts
self-hosted through `next/font`.

## Stage 14 — Test

```bash
npm run check:content   # leftovers, placeholders, duplicate copy
npm run typecheck
npm run build
npm run qa              # accessibility, mobile, forms, SEO artifacts
```

`npm run qa` also runs against a deployment: `QA_BASE_URL=https://… npm run qa`.

Then check by hand what automation can't: does the form reach a human? Does the
phone number dial? Does the scheduling link book a real slot?

## Stage 15 — Launch and monitor

- `url` in `content/site.ts` set to the final domain **before** launch, or
  search engines index the staging URL as canonical.
- Redirects live and verified with real old URLs.
- Analytics receiving events; submit a test inquiry and confirm it arrives.
- Sitemap submitted to Search Console.
- **Week one:** watch Coverage for 404 spikes — that is a missed redirect.
- **Month one:** compare query positions against the pre-launch baseline from
  stage 1. That baseline is the only way to know whether the redesign helped.

---

## Non-negotiables

This site makes public claims for a licensed firm. Never invent a testimonial, a
statistic, a credential, or an office location. If it cannot be substantiated on
request, it does not ship.

`content/verification.ts` requires a named person at the firm to sign off on each
class of claim, and `npm run check:content` fails until they have. Do not fill
that file in on their behalf — the whole point is that no script, and no model,
can tell an invented figure from a true one. See
[CLAUDE.md](../../../CLAUDE.md).
