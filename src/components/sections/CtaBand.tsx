import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

/**
 * Reusable conversion band. Every long page ends with one; service and industry
 * pages pass copy specific to what the reader just read.
 */
export function CtaBand({
  title = "Ready to take control of your finances?",
  body = "Tell us what's going on and we'll tell you what we'd do about it — including when that's less than you expected.",
  primaryLabel = "Schedule a Consultation",
  primaryHref = site.consultationUrl,
  secondaryLabel = "Contact our team",
  secondaryHref = "/contact",
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-canvas py-16 sm:py-20" aria-labelledby="cta-heading">
      <Container>
        <div
          data-surface="dark"
          className="on-dark relative overflow-hidden rounded-brand-lg bg-primary px-6 py-12 text-primary-fg sm:px-12 sm:py-14"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(38rem 24rem at 88% 0%, color-mix(in srgb, var(--color-accent) 42%, transparent), transparent 70%)",
            }}
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 id="cta-heading" className="text-[1.75rem] leading-tight text-primary-fg sm:text-[2rem]">
                {title}
              </h2>
              <p className="mt-3 text-white/75">{body}</p>

              <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/60">
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="check" className="h-3.5 w-3.5" />
                  30 minutes
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="check" className="h-3.5 w-3.5" />
                  No charge
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="check" className="h-3.5 w-3.5" />
                  No obligation
                </span>
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button href={primaryHref} variant="onDark" size="lg">
                {primaryLabel}
              </Button>
              <Button href={secondaryHref} variant="outlineDark" size="lg">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
