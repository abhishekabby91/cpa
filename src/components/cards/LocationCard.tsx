import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { pages } from "@/content/copy";
import type { Location } from "@/content/types";
import { formatAddress } from "@/lib/utils";

export function LocationCard({
  location,
  /** Set to 2 when the grid sits directly under the page h1. */
  headingLevel = 3,
}: {
  location: Location;
  headingLevel?: 2 | 3;
}) {
  const Heading = `h${headingLevel}` as "h2" | "h3";

  return (
    <article className="group relative flex h-full flex-col rounded-brand-lg border border-line bg-surface p-6 shadow-card transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-raised">
      <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-brand bg-accent/8 text-accent">
        <Icon name="pin" className="h-5 w-5" />
      </span>

      <Heading className="text-lg">
        <Link href={`/locations/${location.slug}`} className="after:absolute after:inset-0">
          {location.city}, {location.state}
        </Link>
      </Heading>

      <address className="mt-2 text-sm not-italic leading-relaxed text-ink-muted">
        {formatAddress(location.address)}
      </address>

      <dl className="mt-4 space-y-1.5 text-sm">
        <div className="flex gap-2">
          <dt className="sr-only">Phone</dt>
          <dd className="relative z-10">
            <a
              href={`tel:${location.phoneHref}`}
              className="font-medium text-primary hover:text-accent"
            >
              {location.phone}
            </a>
          </dd>
        </div>
        <div className="flex gap-2">
          <dt className="sr-only">Hours</dt>
          <dd className="text-ink-muted">
            {location.hours[0]?.days}: {location.hours[0]?.hours}
          </dd>
        </div>
      </dl>

      <p className="mt-5 text-sm font-semibold text-accent">
        {pages.locations.cardCta}
      </p>
    </article>
  );
}
