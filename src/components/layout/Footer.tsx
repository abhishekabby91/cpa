import Link from "next/link";
import { site } from "@/content/site";
import { locations } from "@/content/locations";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";
import { directionsUrl } from "@/lib/utils";

const socialLabels: Record<string, string> = {
  linkedin: "LinkedIn",
  facebook: "Facebook",
  x: "X",
  instagram: "Instagram",
  youtube: "YouTube",
};

const socialPaths: Record<string, string> = {
  linkedin:
    "M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21H9z",
  facebook:
    "M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0022 12z",
  x: "M17.53 3h3.05l-6.66 7.61L21.75 21h-6.13l-4.8-6.28L5.32 21H2.27l7.12-8.14L2.25 3h6.28l4.34 5.74zm-1.07 16.13h1.69L7.62 4.78H5.8z",
  instagram:
    "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.24a6.6 6.6 0 100 13.2 6.6 6.6 0 000-13.2zm0 10.88a4.28 4.28 0 110-8.56 4.28 4.28 0 010 8.56zm8.4-11.14a1.54 1.54 0 11-3.08 0 1.54 1.54 0 013.08 0z",
  youtube:
    "M21.58 7.19a2.5 2.5 0 00-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42a2.5 2.5 0 00-1.77 1.77A26 26 0 002 12a26 26 0 00.42 4.81 2.5 2.5 0 001.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42a2.5 2.5 0 001.77-1.77A26 26 0 0022 12a26 26 0 00-.42-4.81zM10 15.02V8.98L15.5 12z",
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const yearRange =
    currentYear > site.foundedYear
      ? `${site.foundedYear}–${currentYear}`
      : String(site.foundedYear);

  return (
    <footer className="bg-primary text-primary-fg on-dark" data-surface="dark">
      <Container>
        <div className="grid gap-12 py-14 lg:grid-cols-12 lg:gap-8 lg:py-16">
          {/* Firm block */}
          <div className="lg:col-span-3">
            <Logo tone="dark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {site.description}
            </p>

            {site.social.length ? (
              <ul className="mt-6 flex gap-2.5">
                {site.social.map((link) => (
                  <li key={link.platform}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-brand border border-white/15 text-white/70 transition-colors hover:border-white/50 hover:text-white"
                      aria-label={`${site.firmName} on ${socialLabels[link.platform]}`}
                    >
                      <svg viewBox="0 0 24 24" className="h-[1.1rem] w-[1.1rem]" fill="currentColor" aria-hidden="true">
                        <path d={socialPaths[link.platform]} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {/* Link columns */}
          <div className="grid content-start gap-10 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-4 lg:gap-6">
            {site.footerNav.map((column) => (
              <div key={column.title}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/80 transition-colors hover:text-white hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact block */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
              Contact
            </h2>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                <a href={`tel:${site.phoneHref}`} className="font-medium hover:underline">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                <a href={`mailto:${site.email}`} className="text-white/80 hover:underline">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                <address className="not-italic leading-relaxed text-white/80">
                  {site.address.street}
                  {site.address.street2 ? (
                    <>
                      <br />
                      {site.address.street2}
                    </>
                  ) : null}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                  <br />
                  <a
                    href={directionsUrl(site.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-white/60 underline underline-offset-2 hover:text-white"
                  >
                    Get directions
                  </a>
                </address>
              </li>
              <li className="flex gap-3">
                <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                <div className="space-y-0.5 text-white/80">
                  {site.hours.map((entry) => (
                    <p key={entry.days}>
                      <span className="text-white/60">{entry.days}:</span> {entry.hours}
                    </p>
                  ))}
                </div>
              </li>
            </ul>

            {locations.length > 1 ? (
              <p className="mt-5 text-sm">
                <Link
                  href="/locations"
                  className="font-semibold text-white/90 underline underline-offset-4 hover:text-white"
                >
                  View all {locations.length} offices
                </Link>
              </p>
            ) : null}
          </div>
        </div>

        {/* Credentials strip */}
        {site.credentials.length ? (
          <div className="border-t border-white/10 py-6">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {site.credentials.map((credential) => (
                <li key={credential.label} className="flex items-center gap-2 text-sm">
                  <Icon name="check" className="h-3.5 w-3.5 text-white/50" />
                  <span className="text-white/85">{credential.label}</span>
                  {credential.detail ? (
                    <span className="text-white/45">· {credential.detail}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Legal */}
        <div className="border-t border-white/10 py-7">
          <p className="max-w-4xl text-xs leading-relaxed text-white/50">
            {site.licenseDisclaimer}
          </p>
          <div className="mt-5 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/50">
              © {yearRange} {site.firmName}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {site.legalNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/60 transition-colors hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
