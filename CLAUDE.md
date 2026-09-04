# CLAUDE.md

Guidance for working in this repository — the CPA website template, or any
client fork made from it.

## What this is

A white-label Next.js site sold to CPA firms. One template, forked per client.
Read [README.md](README.md) for the architecture and
[docs/AGENCY-OPERATIONS.md](docs/AGENCY-OPERATIONS.md) for how forks are run.

## The one rule that matters

**Never edit `src/` in a client fork.**

`src/` is shared across every client site. A fork that edits it stops being able
to merge template fixes cleanly, and the cost compounds with every future
update. When a client needs something different:

| They want | It goes in |
| --- | --- |
| Different words, anywhere on the site | `content/copy.ts` |
| Different colors, logo, contact details | `content/site.ts` |
| Different services, industries, team, offices | the matching `content/*.ts` |
| Genuinely different *behavior* | the template, behind a config flag, then merge down |

Run `npm run check:upstream` in a fork to see whether this has been violated.

## Commands

```bash
npm run dev            # local development
npm run build          # production build — must pass before any handover
npm run typecheck      # tsc --noEmit
npm run check:content  # leftovers, placeholders, duplicate copy (gates deploy)
npm run check:upstream # how far this fork has drifted from the template
npm run baseline       # TEMPLATE REPO ONLY — see below
```

`npm run check:content` **fails in the template repo by design** — the template
is the placeholder. It must pass in a finished client fork.

`npm run baseline` regenerates the duplicate-copy fingerprint. Run it only in
the template, only after changing the template's own default content, and commit
the result. Running it in a client fork fingerprints their copy and makes the
duplicate check pass vacuously.

## Content rules

This site makes public claims on behalf of a licensed CPA firm. Some things must
never be invented, no matter how convenient:

- **Testimonials.** Only real client quotes with written permission to publish.
  The bundled ones are marked `PLACEHOLDER` and must be replaced or deleted. All
  testimonial sections hide themselves when the array is empty.
- **Statistics.** Years in practice, clients served, states filed in — every
  figure must be one the firm can substantiate on request.
- **Credentials and memberships.** CPA, EA, CVA, licensed states, AICPA and
  state society membership. Verified active, per individual.
- **Locations.** A page only for an office the firm actually operates.
  `areasServed` lists real communities, not a radius on a map.
- **Services.** Two shipped FAQ answers deliberately flag work the template does
  not assume the firm does — audit and review engagements, brokerage. Edit them
  to match reality or remove the service.
- **Tax figures in articles.** Written around principles rather than specific
  thresholds or rates, because those change annually and stale numbers on a CPA
  firm's site are a liability. If a figure is genuinely needed, cite the year.

Legal pages ship as drafts with visible template notices. They go to the
client's counsel, and the notices come out only after review.

## Conventions

- Use semantic design tokens (`bg-primary`, `text-accent`, `border-line`,
  `rounded-brand`), never raw Tailwind palette colors — a raw color stops
  responding to the theme config.
- Every page's metadata goes through `pageMetadata()` in `src/lib/seo.ts`, which
  returns `title.absolute`. Don't add a second firm-name suffix.
- Structured data builders in `src/lib/schema.ts` omit fields the content
  doesn't support. Don't add aggregate ratings, review counts, or price ranges
  that aren't real.
- Card components take a `headingLevel` prop so the document outline stays
  correct — pass `2` when a grid sits directly under the page `h1`.
- Icons are an inline set in `src/components/ui/Icon.tsx`. Add a key there and
  to `IconName` in `content/types.ts` rather than pulling in an icon package.

## Before handing a site to a client

```bash
npm run check:content && npm run typecheck && npm run build
```

Then walk the pre-launch checklist in the [README](README.md#before-you-go-live)
with someone at the firm who can verify each claim on the site.
