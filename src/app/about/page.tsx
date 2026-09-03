import type { Metadata } from "next";
import { aboutContent, stats } from "@/content/firm";
import { site } from "@/content/site";
import { featuredTeam } from "@/content/team";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { TeamCard } from "@/components/cards/TeamCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = pageMetadata({
  title: "About Our Firm",
  description: `${site.firmName} has served individuals and owner-operated businesses since ${site.foundedYear}. How the firm works, what it values, and who you would be working with.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutContent.eyebrow}
        title={aboutContent.headline}
        lead={aboutContent.intro}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/team" size="lg">
            Meet our team
          </Button>
          <Button href={site.consultationUrl} variant="outlineDark" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </PageHero>

      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />

      <Section ariaLabelledBy="story-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading id="story-heading" eyebrow="Our story" title="How we got here" />
            <div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-muted">
              {aboutContent.story.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-brand-lg border border-line bg-muted p-7">
              <h2 className="text-lg">The firm at a glance</h2>
              <dl className="mt-6 space-y-5">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-b border-line pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-sm text-ink-muted">{stat.label}</dt>
                    <dd className="mt-1 font-serif text-2xl font-semibold text-primary">
                      {stat.value}
                    </dd>
                    {stat.detail ? (
                      <dd className="mt-0.5 text-xs text-ink-muted">{stat.detail}</dd>
                    ) : null}
                  </div>
                ))}
              </dl>

              {site.credentials.length ? (
                <div className="mt-7 border-t border-line pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                    Credentials &amp; memberships
                  </p>
                  <ul className="mt-3 space-y-2">
                    {site.credentials.map((credential) => (
                      <li key={credential.label} className="flex gap-2.5 text-sm">
                        <Icon name="check" className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />
                        <span>
                          <span className="font-medium text-primary">{credential.label}</span>
                          {credential.detail ? (
                            <span className="block text-xs text-ink-muted">
                              {credential.detail}
                            </span>
                          ) : null}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="muted" ariaLabelledBy="values-heading">
        <SectionHeading
          id="values-heading"
          eyebrow="How we work"
          title="Four commitments we're willing to be held to"
          lead="Values are only useful if a client could tell whether you kept them. These are written so you could."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {aboutContent.values.map((value, index) => (
            <Reveal key={value.title} delay={index * 70}>
              <div className="flex h-full flex-col rounded-brand-lg border border-line bg-surface p-7 shadow-card">
                <span className="mb-4 font-serif text-sm font-semibold tracking-widest text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg leading-snug">{value.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <WhyChooseUs />

      {featuredTeam.length ? (
        <Section ariaLabelledBy="leadership-heading">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              id="leadership-heading"
              eyebrow="Leadership"
              title="The people you'd actually be working with"
              className="max-w-2xl"
            />
            <Button href="/team" variant="secondary">
              View the full team
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTeam.map((member, index) => (
              <Reveal key={member.slug} delay={index * 70}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      <Process />
      <CtaBand />
    </>
  );
}
