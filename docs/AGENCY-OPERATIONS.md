# Running This as a Web Development Company

How to operate many separate client sites from one template: what's separate,
what's shared, and what to do when they conflict.

---

## The separation boundaries

Each client gets their own everything. Nothing is shared at runtime — no
multi-tenant database, no shared deployment, no single point of failure across
your book of business.

| Layer | Per client | Notes |
| --- | --- | --- |
| **Git repository** | One repo per client | Created from this template |
| **Hosting project** | One Vercel/Netlify project | Separate build, separate logs, separate outage |
| **Domain + DNS** | Client's own | See ownership below — this one matters |
| **Environment variables** | Per project | `NEXT_PUBLIC_SITE_URL`, form webhook, analytics |
| **Analytics** | Client's own GA4 property | Never a shared property |
| **Form destination** | Client's CRM or inbox | Never routed through yours |
| **Scheduling tool** | Client's own account | Their calendar, their data |

The upside of this model is blast radius: a bad deploy, an expired certificate,
or a compromised form endpoint affects exactly one client. The cost is
maintenance, addressed below.

## Who owns what

Settle this in writing before the first build. The technical setup follows from
the commercial answer, not the other way round.

**Domain and DNS.** Register in the *client's* account and take delegated
access, or you become a hostage negotiator the day they leave. If you must hold
it, say so in the contract and commit to transferring on request.

**The hosting account.** Two workable models:

- *Agency-owned* — sites live in your Vercel team, you bill hosting as part of a
  retainer. Simpler for you, and the client cannot self-serve a rollback.
  Requires a documented exit: what happens to the site if they stop paying.
- *Client-owned* — the client's own Vercel account, you get team access. Cleaner
  ethically and on exit, more onboarding friction, and they can break things.

**The code.** Under default copyright a client gets no rights unless you grant
them. Decide whether they receive the repository at launch, on final payment, or
never — and whether the grant covers reuse on a second site. See
[THIRD-PARTY-LICENSES.md](../THIRD-PARTY-LICENSES.md).

**Content.** The firm's copy, photos, and articles are theirs. Say so — it
removes a common source of friction at the end of an engagement.

---

## New client setup

```bash
# 1. Create the repo from this template (GitHub → "Use this template")
git clone https://github.com/YOUR-ORG/client-name.git
cd client-name
npm install

# 2. Wire the fork to the template so it can receive fixes later.
#    Do this on day one — retrofitting it across ten forks is miserable.
git remote add template https://github.com/YOUR-ORG/YOUR-TEMPLATE.git

# 3. Configure
cp .env.example .env.local     # NEXT_PUBLIC_SITE_URL = the client's domain
npm run dev
```

Then work [CLIENT-INTAKE.md](CLIENT-INTAKE.md) and the content order in the
[README](../README.md#per-client-checklist).

Before handover:

```bash
npm run check:content    # leftovers, placeholders, duplicate copy — must pass
npm run typecheck
npm run build
```

---

## Maintenance across many forks

This is the real cost of fork-per-client, and it is worth being honest about it
before you have fifteen of them.

A Next.js security release touches `package.json` and `package-lock.json`. A
component fix touches `src/`. Neither reaches a client site by itself.

```bash
npm run check:upstream      # in a client fork: what is it missing?
```

It reports template commits the fork lacks, and — more usefully — which shared
files the fork has edited, because those are what will conflict when you merge.

**The discipline that makes this survivable:** never edit `src/` in a client
fork. If a client needs different words, that belongs in `content/copy.ts`. If
they need a different color, `content/site.ts`. If they genuinely need different
*behavior*, build it in the template behind a config flag and merge it down, so
every fork gets it and none of them drift.

A fork with an untouched `src/` merges upstream cleanly, every time. A fork with
three hand-edits does not, and the cost compounds with every future update.

**Suggested cadence:**

| Trigger | Action |
| --- | --- |
| Security advisory in a dependency | Patch template, merge to all live forks, deploy — same week |
| Template component fix or improvement | Merge at the next touch of that client's site |
| Quarterly | Run `check:upstream` across every live fork; merge anything outstanding |
| Annually | Review each client's legal page dates, statistics, and team roster |

That last one is not optional maintenance. Statistics go stale, team members
leave, and a policy page dated three years ago is a bad look on a firm that
sells diligence.

### When forks are too expensive

If a routine patch costs you more than about half a day across your book, the
model has outgrown itself. The next step is moving `src/` into a private npm
package so client repos hold only `content/`, config, and a dependency version.
The content model here is already shaped for that split — nothing in `src/`
imports client data, only the typed interfaces in `content/types.ts`.

Don't do it prematurely. Below roughly five clients, forking is genuinely
cheaper than maintaining a package release process.

---

## Handover

What a client should receive at launch, whichever ownership model you chose:

- The live site, on their domain, with SSL
- Admin access appropriate to the model — at minimum, read access to their
  hosting project and full control of DNS
- Where content lives, and what changing it requires. Be honest: this is a
  developer-edited codebase, not a WordPress admin. If they expect to edit copy
  themselves, that expectation has to be set before the sale, not at handover.
- Their analytics property, in their own account
- Confirmation the contact form reaches a human, tested end to end
- The pre-launch checklist, signed off by someone at the firm who can
  substantiate every credential, statistic and testimonial on the site

## Offboarding

Have this written down before you need it:

- Domain and DNS transferred, with a date
- Hosting either transferred or the site exported and handed over
- Final content export — the `content/` directory is their copy, in plain text
- Analytics property ownership transferred
- Your access to their systems revoked, and confirmed

A clean exit is a referral. A messy one is a review.
