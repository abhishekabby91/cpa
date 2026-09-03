import { stats } from "@/content/firm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/** Credibility band. Every figure here must be substantiable — see content/firm.ts. */
export function Stats() {
  if (stats.length === 0) return null;

  return (
    <section className="border-b border-line bg-muted" aria-label="Firm at a glance">
      <Container>
        <dl className="grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 70}>
              <div className="px-2 py-8 sm:px-6 lg:px-8 lg:py-10">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <p className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-ink">{stat.label}</p>
                  {stat.detail ? (
                    <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                      {stat.detail}
                    </p>
                  ) : null}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
