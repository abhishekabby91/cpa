# CPA Firm Website Template

A reusable, white-label website for US CPA firms. Built with Next.js 15 (App
Router), TypeScript, and Tailwind CSS v4.

Everything that changes between firms — name, branding, colors, services,
industries, team, offices, testimonials, FAQs, articles, **and every heading
and line of prose on the site** — lives in typed config files under `content/`.
No component contains firm-specific copy, a color value, or a phone number.

Selling sites built from this? Read
[Selling this to multiple firms](#selling-this-to-multiple-firms) and
[THIRD-PARTY-LICENSES.md](THIRD-PARTY-LICENSES.md) first.

---

## Quick start

```bash
npm install
cp .env.example .env.local     # set NEXT_PUBLIC_SITE_URL
npm run dev                    # http://localhost:3000
```

```bash
npm run build     # production build (every page prerenders to static HTML)
npm start         # serve the production build
npm run typecheck # tsc --noEmit
npm run lint
```

Requires Node 20.9+.

---

## Launching a new firm

Work through these in order. Steps 1–3 get you a correct site; step 4 is what
separates it from a template.

### 1. `content/site.ts` — identity and branding

The single source of truth for firm name, logo, contact details, office hours,
navigation, credentials, license disclaimer, and the color theme. Editing the
`theme` block re-skins every page — those values are emitted as CSS custom
properties at runtime, and every component reads them through Tailwind tokens.

```ts
theme: {
  primary: "#0B2545",   // headers, footers, dark sections
  accent:  "#0E7490",   // primary CTAs — the conversion color
  radius:  "0.5rem",    // corner radius scale
  // …
}
```

Two things to verify after changing colors:

- **Contrast.** The design targets WCAG 2.2 AA (4.5:1 body text, 3:1 large
  text). A darker accent or a lighter primary can break that. See
  [Verifying your changes](#verifying-your-changes).
- **Logo.** Set `logo: "/logo.svg"` to use a real mark, or leave it `null` and
  the template renders a monogram lockup from `monogram` + `firmName`.

### 2. Replace the rest of `content/`

| File | Contains |
| --- | --- |
| `content/site.ts` | Firm identity, contact, hours, nav, credentials, theme |
| `content/copy.ts` | **Every heading, lead, button label and prose block on the site** |
| `content/services.ts` | Service catalog — each entry generates `/services/[slug]` |
| `content/industries.ts` | Industry pages — each generates `/industries/[slug]` |
| `content/team.ts` | Team directory and profiles at `/team/[slug]` |
| `content/locations.ts` | Offices, areas served, and pages at `/locations/[slug]` |
| `content/testimonials.ts` | Client quotes (**placeholders — must be replaced**) |
| `content/faqs.ts` | Site-wide FAQs, grouped by category |
| `content/firm.ts` | Statistics, differentiators, process, About copy, guides |
| `content/posts.ts` | Resource center articles |
| `content/types.ts` | The content model. Read this first. |

Adding a service, industry, office, team member, or article is a single entry
in the relevant array. The page, navigation entry, sitemap URL, internal links,
and structured data all follow automatically.

### 3. Wire up the integrations

- **Scheduling.** Point `site.consultationUrl` at Calendly, Acuity, or
  Microsoft Bookings, or keep the built-in `/schedule` page and drop the embed
  into the marked slot in `src/app/schedule/page.tsx`.
- **Contact form.** `src/app/api/contact/route.ts` validates submissions and
  forwards them to `CONTACT_FORM_WEBHOOK_URL`. Without that variable set,
  submissions are validated and discarded — wire it to your CRM or email
  provider before launch, and add a rate limiter or CAPTCHA if you see abuse.
- **Maps.** Set `mapEmbedUrl` on a location to embed Google Maps. Left `null`,
  the page renders an address card with a directions link instead.
- **Analytics.** Add your script in `src/app/layout.tsx`. If you tighten the
  CSP in `next.config.ts`, allow the provider's domain there too.

### 4. Rewrite the copy — this is the step that matters

Open `content/copy.ts`. Every heading, eyebrow, lead paragraph, button label
and prose block on the site lives there, so you can reword the whole site
without opening a component.

The bundled copy is written to be *good enough to ship*, which is exactly why
it's dangerous to leave alone. See
[Selling this to multiple firms](#selling-this-to-multiple-firms) for why.

Also rewrite the service and industry bodies in `content/services.ts` and
`content/industries.ts`, and the About story in `content/firm.ts`. Those are
the largest blocks of indexable text on the site.

---

## Before you go live

This site makes public claims on a licensed firm's behalf. Work through this
list with someone at the firm who can verify each item.

- [ ] **Statistics** in `content/firm.ts` — every figure is one the firm can
      substantiate on request. Delete anything you can't back up.
- [ ] **Credentials and memberships** in `content/site.ts` — accurate, current,
      and verified for every state the firm practices in.
- [ ] **License disclaimer** in `content/site.ts` — matches what the firm's
      state board requires.
- [ ] **Testimonials** in `content/testimonials.ts` — the shipped entries are
      clearly-marked placeholders. Replace each with a real quote you have
      written permission to publish, at the attribution level the client
      approved. If there are none yet, export an empty array; every section
      that uses testimonials hides itself when the list is empty.
- [ ] **Locations** in `content/locations.ts` — a page for each office the firm
      actually operates, and no others. `areasServed` lists communities the
      office genuinely works with.
- [ ] **Service pages** — two FAQ answers (on `financial-statements` and
      `exit-planning`) explicitly describe what the template does *not* assume
      the firm does. Edit them to match reality or remove the service.
- [ ] **Legal pages** — `/privacy`, `/terms`, and `/accessibility` are drafted
      for a US CPA firm and carry visible template notices. Have counsel review
      and adapt them, then remove the notices.
- [ ] **Blog articles** — reviewed by a licensed CPA before publishing under
      the firm's name. Articles are deliberately written around principles
      rather than specific thresholds or rates, because those change annually.
      Add any figures you do use to an annual content review.
- [ ] **`NEXT_PUBLIC_SITE_URL`** set to the production domain, so canonical
      URLs, `sitemap.xml`, and Open Graph tags are correct.
- [ ] **Contact webhook** configured and tested end to end.
- [ ] **Team photos** in `/public/team/`, referenced from `content/team.ts`.
      Members without a photo render a monogram rather than a broken image.

---

## Selling this to multiple firms

This repo is set up to be **forked per client**: mark it as a GitHub template,
and each new engagement starts as an independent copy with its own repo, its own
hosting project, its own domain and its own analytics. Nothing is shared at
runtime, so one client's bad deploy or outage never touches another's.

[docs/AGENCY-OPERATIONS.md](docs/AGENCY-OPERATIONS.md) covers running this as a
web development company: ownership boundaries (domain, hosting account, code,
content), new client setup, maintenance across many forks, handover, and
offboarding.

The cost of forking is that fixes don't propagate — a Next.js security patch
lands in the template and reaches nobody. Two things keep that manageable:

```bash
git remote add template https://github.com/YOUR-ORG/YOUR-TEMPLATE.git  # day one
npm run check:upstream    # what is this fork missing, and what will conflict?
```

and one discipline: **never edit `src/` in a client fork**. A fork with an
untouched `src/` merges upstream cleanly every time. Per-client differences
belong in `content/` — which, after the copy extraction, is where every word on
the site already lives.

Collect the firm's information first — [docs/CLIENT-INTAKE.md](docs/CLIENT-INTAKE.md)
is a worksheet you can send as-is. The build is under an hour; getting verified
answers about credentials, statistics and testimonials is what sets the
timeline.

### Per-client checklist

```bash
# 1. Create the client repo from this template (GitHub: "Use this template")
# 2. Clone it, then:
npm install
cp .env.example .env.local     # set NEXT_PUBLIC_SITE_URL to the client domain
npm run dev
```

Then, in order:

1. `content/site.ts` — name, monogram or logo, colors, contact, hours, offices,
   credentials, license disclaimer
2. `content/copy.ts` — **rewrite, don't tweak** (see below)
3. `content/services.ts`, `industries.ts`, `firm.ts` — rewrite the bodies
4. `content/team.ts`, `locations.ts`, `faqs.ts` — real people, offices, answers
5. `content/testimonials.ts` — real approved quotes, or an empty array
6. `content/posts.ts` — the client's own articles, CPA-reviewed
7. Work the pre-launch checklist above
8. Deploy, and set `LICENSE` terms per your client agreement

### The duplicate-content problem

This is the failure mode that kills template-built sites, so it's worth being
blunt about.

Service and industry pages are the largest block of indexable text on a CPA
firm's site, and they're the pages that rank for the searches worth having.
If you sell twenty sites that all carry the bundled *"Decisions made in October
change April"* page word for word, search engines see twenty near-duplicates.
They pick one and suppress the rest. The client who bought the site expecting
organic traffic doesn't get it, and neither do the other nineteen.

Nothing in the architecture stops you from shipping the defaults, so there's a
check that does:

```bash
npm run check:content
```

It exits non-zero — so it can gate a deploy — on three things:

- **Leftovers.** Regions, offices and dates from another firm still present
  because a file was never opened. This is how a Sacramento firm ships a
  "Serving Central Texas" statistic and an `/locations/austin-tx` page.
- **Placeholders.** `PLACEHOLDER` markers, `example.com` addresses, reserved
  555-01xx phone numbers, example LinkedIn URLs.
- **Duplicate copy.** Prose still byte-identical to the template, measured per
  file against `scripts/template-baseline.json`. Articles must be 100% replaced;
  services and industries allow 15%; shared labels are looser.

Running it in *this* repo fails by design — the template is the placeholder.
It should pass in a finished client fork.

If you change the template's own content, regenerate the fingerprint with
`npm run baseline` and commit it. Never run that in a client fork: it would
fingerprint their copy and make the duplicate check pass vacuously.

A workable minimum per client:

- **Hero headline and subhead** — completely different. This is the line a
  prospect reads first and the one most likely to be compared.
- **Service pages** — rewrite `headline`, `intro`, `painPoints`, and the
  `includes` descriptions. Keep the structure; replace the words.
- **Industry pages** — same, and cut any industry the firm doesn't actually
  serve rather than shipping it unedited.
- **FAQ answers** — rewrite in the firm's own voice, and delete questions they
  would answer differently.
- **Articles** — do not ship the bundled six on more than one site. They're
  reference implementations of the block format, not a content library.

Two things you *can* safely reuse across clients: page structure and section
labels ("Services", "Questions", "Related"). Google does not penalize shared
navigation and headings — it's the body prose that has to differ.

### What to reuse between forks

Once you've built two or three client sites, the parts worth copying forward
are the ones that aren't copy: `src/components`, `src/lib`, the design tokens
in `src/app/globals.css`, and the shape of `content/types.ts`. Those are the
same on every site. Everything under `content/` should differ.

If you reach the point where hand-patching forks hurts more than it helps,
that's the signal to move `src/` into a private npm package and reduce each
client repo to `content/` plus a deploy config. The content model here is
already shaped for that split — nothing in `src/` imports from a specific
client's data, only from the typed interfaces.

---

## Architecture

```
content/            Typed content — the only place firm-specific data lives
src/
  app/              Routes (App Router). Every page prerenders to static HTML.
    api/contact/    Form endpoint: validation, honeypot, webhook forwarding
    sitemap.ts      Generated from content/
    robots.ts
    opengraph-image.tsx   Social card, drawn from site config
    icon.tsx        Favicon, drawn from the monogram
  components/
    layout/         Header, Footer, Breadcrumbs, MobileCtaBar, SkipLink, Logo
    sections/       Composable page sections (Hero, Process, CtaBand, FAQs…)
    cards/          Service, Industry, Team, Testimonial, Blog, Location
    forms/          ContactForm
    seo/            JsonLd
    ui/             Button, Container, Section, Icon, Reveal
  lib/
    theme.ts        Config → CSS custom properties
    seo.ts          Canonical / Open Graph / Twitter metadata builder
    schema.ts       JSON-LD builders
    utils.ts
```

### Design system

Colors, radii, shadows, and fonts are Tailwind v4 theme tokens declared in
`src/app/globals.css`. Color tokens use `@theme inline` so they resolve against
the runtime custom properties from `content/site.ts` — which is what makes a
re-skin a config edit rather than a rebuild of the token layer.

Use the semantic tokens (`bg-primary`, `text-accent`, `border-line`,
`rounded-brand`) rather than raw Tailwind palette colors, or a component will
stop responding to the theme.

### Dependencies

React, Next.js, and Tailwind. That's it — no UI kit, no icon package, no
animation library. Icons are an inline SVG set in `src/components/ui/Icon.tsx`;
add a key there and to `IconName` in `content/types.ts` to extend it.

### SEO

Every page goes through `pageMetadata()` in `src/lib/seo.ts`, so nothing ships
without a canonical URL, Open Graph tags, and a Twitter card.

Structured data (`src/lib/schema.ts`) covers `AccountingService`, `WebSite`,
`Service`, `Person`, `Article`, `LocalBusiness`, `FAQPage`, and
`BreadcrumbList`. The builders deliberately omit fields the content doesn't
support — no invented aggregate ratings, review counts, or price ranges.

### Accessibility

Semantic landmarks, a skip link, one `h1` per page with no skipped heading
levels, labeled form controls with announced errors, a visible focus ring on
every interactive element, and `prefers-reduced-motion` respected throughout.
The FAQ accordion is built on native `<details>`/`<summary>`, so keyboard
support comes from the browser and answers stay in the DOM for crawlers while
collapsed.

Scroll reveals are opt-in on JavaScript: the hiding rule is scoped to a `.js`
class added at runtime, so content is fully visible without it.

---

## Verifying your changes

After re-branding, check the things a config change can quietly break:

1. `npm run build` — catches type errors in content edits.
2. **Contrast.** Run your palette through a WCAG checker, or audit the built
   site with Lighthouse or axe DevTools. Body text needs 4.5:1 against its
   background; text 24px+ (or 18.66px+ bold) needs 3:1. The bundled palette was
   verified across all page templates at AA.
3. **Headline fit.** The homepage hero headline is a deliberate two-line break.
   A longer headline or a wider font may reflow it — check at 1024px and
   1440px, and adjust the size classes in `src/components/sections/Hero.tsx`.
4. **Mobile.** No horizontal scrolling at 390px, and the sticky call/schedule
   bar clears the footer.
5. `/sitemap.xml` and `/robots.txt` show your production domain.

---

## Deployment

Every page is static, so the site deploys anywhere that runs Node — Vercel,
Netlify, Cloudflare, or a container. The only server-rendered route is
`/api/contact`.

Set `NEXT_PUBLIC_SITE_URL` in your host's environment (no trailing slash), plus
`CONTACT_FORM_WEBHOOK_URL` if you're using the bundled form endpoint.

Security headers — HSTS, `X-Content-Type-Options`, `X-Frame-Options`,
`Referrer-Policy`, and `Permissions-Policy` — are set in `next.config.ts`. Add
a Content-Security-Policy there once you know your final set of third-party
scripts.
