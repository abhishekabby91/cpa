import { site } from "@/content/site";
import { hero } from "@/content/copy";
import { heroTrustPoints } from "@/content/firm";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

/**
 * Homepage hero.
 *
 * The headline leads with the client's outcome rather than the firm's category.
 * The visual is drawn rather than photographed so the template ships without a
 * stock-photo look — swap the right column for a real photograph of the team or
 * office when you have one.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-fg on-dark" data-surface="dark">
      {/* Depth without gradient noise: one soft radial and a hairline grid. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "radial-gradient(60rem 40rem at 78% 8%, color-mix(in srgb, var(--color-accent) 34%, transparent), transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className={hero.panel ? "lg:col-span-7" : "lg:col-span-9"}>
            <p className="rule-accent mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/70 [&::before]:bg-[var(--color-highlight)]">
              {hero.eyebrow}
            </p>

            <h1
              // Sized so both lines of the headline hold at each breakpoint.
              // `text-wrap: balance` (global for headings) is opted out of here
              // because it re-flows the deliberate two-line break.
              className="text-[2.25rem] leading-[1.08] text-primary-fg [text-wrap:initial] sm:text-[2.625rem] lg:text-[2.5rem] xl:text-[2.875rem]"
            >
              {hero.headlineLead}
              <br />
              <span className="text-white/70">{hero.headlineTrail}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              {hero.subhead}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={site.consultationUrl} size="lg">
                {hero.primaryCta}
              </Button>
              <Button href={hero.secondaryCta.href} variant="outlineDark" size="lg">
                {hero.secondaryCta.label}
              </Button>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-2.5">
              {heroTrustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <Icon name="check" className="h-3.5 w-3.5 text-[var(--color-highlight)]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Illustrative panel. Set `hero.panel` to null in content/copy.ts to
              drop it, or replace this column with a photograph of the team. */}
          {hero.panel ? (
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md rounded-brand-lg border border-white/12 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/65">
                    {hero.panel.title}
                  </p>
                  {hero.panel.badge ? (
                    <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-1 text-[0.6875rem] font-semibold text-white/80">
                      {hero.panel.badge}
                    </span>
                  ) : null}
                </div>

                <dl className="mt-5 space-y-4">
                  {hero.panel.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-4 border-b border-white/[0.07] pb-3 last:border-0 last:pb-0"
                    >
                      <dt className="text-sm text-white/60">{row.label}</dt>
                      <dd className="font-serif text-[0.9375rem] font-semibold text-white">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {hero.panel.note ? (
                  <div className="mt-6 flex items-start gap-3 rounded-brand bg-white/[0.06] p-4">
                    <Icon name="sparkle" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-highlight)]" />
                    <p className="text-[0.8125rem] leading-relaxed text-white/70">
                      {hero.panel.note}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
