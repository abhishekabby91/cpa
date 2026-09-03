import Image from "next/image";
import Link from "next/link";
import type { TeamMember } from "@/content/types";
import { initials } from "@/lib/utils";

export function TeamCard({
  member,
  /** Set to 2 when the grid sits directly under the page h1. */
  headingLevel = 3,
}: {
  member: TeamMember;
  headingLevel?: 2 | 3;
}) {
  const Heading = `h${headingLevel}` as "h2" | "h3";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-brand-lg border border-line bg-surface shadow-card transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-raised">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-primary">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`${member.name}, ${member.title}`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          /* Monogram fallback — no broken images before real headshots exist. */
          <div
            className="flex h-full w-full items-center justify-center bg-[linear-gradient(140deg,var(--color-primary),var(--color-primary-hover))]"
            aria-hidden="true"
          >
            <span className="font-serif text-4xl font-semibold text-white/85">
              {initials(member.name)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <Heading className="text-lg leading-snug">
          <Link href={`/team/${member.slug}`} className="after:absolute after:inset-0">
            {member.name}
            {member.credentials ? (
              <span className="text-ink-muted">, {member.credentials}</span>
            ) : null}
          </Link>
        </Heading>
        <p className="mt-1 text-sm font-medium text-accent">{member.title}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
          {member.shortBio}
        </p>
      </div>
    </article>
  );
}
