import type { Metadata } from "next";
import { processSteps } from "@/content/firm";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = pageMetadata({
  title: "Schedule a Consultation",
  description:
    "Book a 30-minute consultation with a CPA. No charge, no obligation — a working conversation about your situation and what we'd recommend.",
  path: "/schedule",
});

const expectations = [
  {
    icon: "clock" as const,
    title: "About 30 minutes",
    description:
      "Long enough to understand your situation, short enough to fit in a working day.",
  },
  {
    icon: "users" as const,
    title: "You'll speak with a CPA",
    description:
      "Not a salesperson working from a script. The person on the call does the work.",
  },
  {
    icon: "clipboard" as const,
    title: "Bring last year's return",
    description:
      "Helpful but not required. If you have it handy, the conversation gets more specific.",
  },
  {
    icon: "document" as const,
    title: "You'll leave with our read",
    description:
      "What we'd recommend, roughly what it would cost, and whether you need it at all.",
  },
];

/**
 * Consultation page.
 *
 * Deliberately minimal — no site navigation competing for attention beyond the
 * header. Replace the form with a scheduling embed (Calendly, Acuity, Microsoft
 * Bookings) by dropping the iframe into the marked slot below, or point
 * `consultationUrl` in content/site.ts straight at your booking tool.
 */
export default function SchedulePage() {
  return (
    <>
      <section
        data-surface="dark"
        className="on-dark relative overflow-hidden bg-primary text-primary-fg"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(48rem 28rem at 80% 0%, color-mix(in srgb, var(--color-accent) 34%, transparent), transparent 68%)",
          }}
        />
        <Container className="relative">
          <div className="max-w-2xl py-14 sm:py-16 lg:py-20">
            <p className="rule-accent mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/70 [&::before]:bg-[var(--color-highlight)]">
              Consultation
            </p>
            <h1 className="text-[2.125rem] leading-[1.1] text-primary-fg sm:text-[2.75rem] lg:text-[3.125rem]">
              Let&rsquo;s talk about your financial goals
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              A working conversation, not a pitch. Tell us what&rsquo;s going on
              and we&rsquo;ll tell you what we&rsquo;d actually do about it —
              including when the answer is less than you expected.
            </p>
            <p className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
              <span className="inline-flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-[var(--color-highlight)]" />
                30 minutes
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-[var(--color-highlight)]" />
                No charge
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-[var(--color-highlight)]" />
                No obligation
              </span>
            </p>
          </div>
        </Container>
      </section>

      <Breadcrumbs items={[{ name: "Schedule a Consultation", href: "/schedule" }]} />

      <section className="py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              {/*
                ── SCHEDULING EMBED SLOT ─────────────────────────────────────
                Replace this block with your booking tool's embed, e.g.:

                <div
                  className="calendly-inline-widget min-h-[720px]"
                  data-url="https://calendly.com/your-firm/consultation"
                />
                <script src="https://assets.calendly.com/assets/external/widget.js" async />

                Remember to allow the provider's domain in the CSP if you tighten
                the headers in next.config.ts.
              */}
              <div className="rounded-brand-lg border border-line bg-surface p-7 shadow-card sm:p-8">
                <h2 className="text-2xl">Request a time</h2>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">
                  Tell us a little about your situation and we&rsquo;ll come back
                  with times that work — usually the same business day.
                </p>
                <div className="mt-8">
                  <ContactForm compact />
                </div>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <h2 className="text-xl">What to expect</h2>
              <ul className="mt-6 space-y-5">
                {expectations.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-brand bg-accent/8 text-accent">
                      <Icon name={item.icon} className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-serif text-base font-semibold text-primary">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-9 rounded-brand-lg border border-line bg-muted p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                  Prefer to call?
                </p>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="mt-2 inline-block font-serif text-xl font-semibold text-primary hover:text-accent"
                >
                  {site.phone}
                </a>
                <div className="mt-4 space-y-1 text-sm text-ink-muted">
                  {site.hours.map((entry) => (
                    <p key={entry.days}>
                      {entry.days}: {entry.hours}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-brand-lg border border-line p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                  What happens next
                </p>
                <ol className="mt-4 space-y-3">
                  {processSteps.slice(0, 3).map((step) => (
                    <li key={step.number} className="flex gap-3 text-sm">
                      <span className="font-serif font-semibold text-accent">
                        {step.number}
                      </span>
                      <span className="text-ink-muted">{step.title}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
