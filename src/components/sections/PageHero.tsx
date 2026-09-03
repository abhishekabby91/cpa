import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

/**
 * Interior page hero. Always renders the page's single <h1>.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";

  return (
    <section
      data-surface={dark ? "dark" : undefined}
      className={cn(
        "relative overflow-hidden",
        dark ? "on-dark bg-primary text-primary-fg" : "border-b border-line bg-muted",
      )}
    >
      {dark ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(48rem 28rem at 82% 0%, color-mix(in srgb, var(--color-accent) 32%, transparent), transparent 68%)",
          }}
        />
      ) : null}

      <Container className="relative">
        <div
          className={cn(
            "max-w-3xl py-14 sm:py-16 lg:py-20",
            align === "center" && "mx-auto text-center",
          )}
        >
          {eyebrow ? (
            <p
              className={cn(
                "rule-accent mb-4 text-xs font-semibold uppercase tracking-[0.16em]",
                align === "center" && "[&::before]:mx-auto",
                dark
                  ? "text-white/70 [&::before]:bg-[var(--color-highlight)]"
                  : "text-accent",
              )}
            >
              {eyebrow}
            </p>
          ) : null}

          <h1
            className={cn(
              "text-[2.125rem] leading-[1.1] sm:text-[2.75rem] lg:text-[3.125rem]",
              dark && "text-primary-fg",
            )}
          >
            {title}
          </h1>

          {lead ? (
            <p
              className={cn(
                "mt-5 text-lg leading-relaxed",
                dark ? "text-white/75" : "text-ink-muted",
              )}
            >
              {lead}
            </p>
          ) : null}

          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
