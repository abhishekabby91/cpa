# Third-Party Licenses

This template is distributed with third-party software and fonts. All of it is
licensed for commercial use and redistribution, but some of it carries
attribution obligations that travel with the product — including to a client
you sell a site to.

Read this before your first sale.

---

## Software dependencies

| Package | License | Obligation |
| --- | --- | --- |
| next | MIT | Retain copyright + license text |
| react, react-dom | MIT | Retain copyright + license text |
| tailwindcss, @tailwindcss/postcss | MIT | Retain copyright + license text |
| postcss | MIT | Retain copyright + license text |
| typescript | Apache-2.0 | Retain notices; state changes if you modify it |

MIT and Apache-2.0 both permit commercial use, modification, and sale. Neither
is copyleft — you are not required to open-source your own work, and nothing
here restricts what you charge.

The license texts ship inside `node_modules` and are reproduced in the build
output where required. Verify the current set before a release:

```bash
npx license-checker --production --summary
```

---

## Fonts

The template loads two typefaces through `next/font/google`, which **downloads
and self-hosts them into your build output**. They are redistributed with every
site you deploy, so their licenses apply to your product, not just to your
development machine.

| Font | License | Used for |
| --- | --- | --- |
| Inter | SIL Open Font License 1.1 | Body and interface text |
| Source Serif 4 | SIL Open Font License 1.1 | Headings and display text |

The OFL permits bundling, embedding, and sale as part of a larger work. Two
conditions matter in practice:

1. **The license and copyright notice must travel with the font.** Vendor the
   `OFL.txt` from each font's upstream repository into this directory and keep
   it there. Do not paraphrase it.
2. **The fonts may not be sold on their own.** Selling a website that embeds
   them is fine; selling the font files is not.

If you swap in a commercial typeface, check its webfont license carefully.
Many are licensed per-domain or capped by monthly pageviews, which makes them
a poor fit for a template you deploy to many client domains — the license you
bought for one site usually does not cover twenty.

---

## Your own license

This repository has no `LICENSE` file, and that is deliberate — the terms you
grant your buyers are a business decision, not a technical one. Under default
copyright, buyers receive no rights beyond what you grant them in writing.

Decide before your first sale, and put it in the client's contract as well as
in the repository you hand over:

- Can the client resell or redistribute the code?
- Can they use it for a second site of their own?
- What happens if they stop paying you — do they keep the site?
- Do you retain the right to reuse improvements made for one client?

A short custom license file plus a clause in your engagement letter covers
this. It is worth twenty minutes of a lawyer's time before the first deal, not
after the third.

---

## Content

The bundled copy, article text, and illustrative data in `content/` were
written for this template and carry no third-party rights. The placeholder
testimonials are not real client statements and must be replaced — see the
pre-launch checklist in `README.md`.

Any photography, logo, or icon you add is yours to license. The icon set in
`src/components/ui/Icon.tsx` was drawn for this template and has no external
dependency.
