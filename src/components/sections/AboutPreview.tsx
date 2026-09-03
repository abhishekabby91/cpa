import { aboutContent } from "@/content/firm";
import { featuredTeam } from "@/content/team";
import { site } from "@/content/site";
import { actions, home } from "@/content/copy";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { initials } from "@/lib/utils";

export function AboutPreview() {
  return (
    <Section ariaLabelledBy="about-heading">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading
            id="about-heading"
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.headline}
            lead={aboutContent.intro}
          />
          <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-muted">
            {aboutContent.story[0]}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/about" variant="secondary">
              {actions.aboutFirm}
            </Button>
            <Button href="/team" variant="ghost">
              {actions.meetTeam} →
            </Button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <dl className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {aboutContent.values.map((value) => (
              <div key={value.title}>
                <dt className="font-serif text-base font-semibold text-primary">
                  {value.title}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {value.description}
                </dd>
              </div>
            ))}
          </dl>

          {featuredTeam.length ? (
            <div className="mt-10 flex items-center gap-4 rounded-brand-lg border border-line bg-muted p-5">
              {/* Spaced rather than overlapped: initials need to stay readable,
                  which a photo stack doesn't have to worry about. */}
              <ul className="flex shrink-0 gap-1.5">
                {featuredTeam.slice(0, 4).map((member) => (
                  <li key={member.slug}>
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-serif text-xs font-semibold tracking-wide text-primary-fg"
                      title={member.name}
                    >
                      {initials(member.name)}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-ink-muted">
                {home.about.valuesNote(site.foundedYear)}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
