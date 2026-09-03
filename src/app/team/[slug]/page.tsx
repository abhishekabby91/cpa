import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTeamMember, team } from "@/content/team";
import { locations } from "@/content/locations";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { personSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { TeamCard } from "@/components/cards/TeamCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeading } from "@/components/ui/Section";
import { initials } from "@/lib/utils";

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return {};

  const name = member.credentials ? `${member.name}, ${member.credentials}` : member.name;
  return pageMetadata({
    title: `${name} — ${member.title}`,
    description: member.shortBio,
    path: `/team/${member.slug}`,
  });
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  const colleagues = team.filter((m) => m.slug !== member.slug).slice(0, 3);
  const offices = locations.filter((location) => location.team.includes(member.slug));

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
              "radial-gradient(46rem 26rem at 85% 0%, color-mix(in srgb, var(--color-accent) 30%, transparent), transparent 68%)",
          }}
        />
        <Container className="relative">
          <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-20">
            <div className="lg:col-span-4">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-brand-lg border border-white/12">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={`${member.name}, ${member.title}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 320px, 80vw"
                    className="object-cover"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex h-full w-full items-center justify-center bg-white/[0.06]"
                  >
                    <span className="font-serif text-5xl font-semibold text-white/70">
                      {initials(member.name)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="rule-accent mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/70 [&::before]:bg-[var(--color-highlight)]">
                {member.title}
              </p>
              <h1 className="text-[2.125rem] leading-tight text-primary-fg sm:text-[2.75rem]">
                {member.name}
                {member.credentials ? (
                  <span className="text-white/60">, {member.credentials}</span>
                ) : null}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
                {member.shortBio}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={site.consultationUrl}>Schedule a Consultation</Button>
                {member.email ? (
                  <Button href={`mailto:${member.email}`} variant="outlineDark" external>
                    <Icon name="mail" className="h-4 w-4" />
                    Email {member.name.split(" ")[0]}
                  </Button>
                ) : null}
                {member.linkedin ? (
                  <Button href={member.linkedin} variant="outlineDark" external>
                    LinkedIn
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Breadcrumbs
        items={[
          { name: "Our Team", href: "/team" },
          { name: member.name, href: `/team/${member.slug}` },
        ]}
      />

      <Section ariaLabelledBy="bio-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 id="bio-heading" className="text-2xl">
              About {member.name.split(" ")[0]}
            </h2>
            <div className="prose-brand mt-6">
              {member.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="space-y-8 lg:col-span-5">
            <div className="rounded-brand-lg border border-line bg-muted p-6">
              <h2 className="text-base">Areas of focus</h2>
              <ul className="mt-4 space-y-2.5">
                {member.expertise.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-ink-muted">
                    <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {member.education?.length ? (
              <div className="rounded-brand-lg border border-line p-6">
                <h2 className="text-base">Education</h2>
                <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                  {member.education.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {member.memberships?.length ? (
              <div className="rounded-brand-lg border border-line p-6">
                <h2 className="text-base">Professional memberships</h2>
                <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                  {member.memberships.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {offices.length ? (
              <div className="rounded-brand-lg border border-line p-6">
                <h2 className="text-base">Based in</h2>
                <ul className="mt-4 space-y-2 text-sm">
                  {offices.map((office) => (
                    <li key={office.slug}>
                      <Link
                        href={`/locations/${office.slug}`}
                        className="font-medium text-accent hover:underline"
                      >
                        {office.city}, {office.state}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </Section>

      {colleagues.length ? (
        <Section tone="muted" ariaLabelledBy="colleagues-heading">
          <SectionHeading
            id="colleagues-heading"
            eyebrow="Our Team"
            title="Others you might work with"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {colleagues.map((colleague) => (
              <TeamCard key={colleague.slug} member={colleague} />
            ))}
          </div>
        </Section>
      ) : null}

      <CtaBand />
      <JsonLd data={personSchema(member)} />
    </>
  );
}
