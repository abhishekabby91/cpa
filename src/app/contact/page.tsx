import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/content/locations";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { directionsUrl } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description: `Call ${site.phone}, email ${site.email}, or send a message. We respond to new inquiries within one business day.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what's going on"
        lead="Send a note, call the office, or book a consultation directly. New inquiries get a response within one business day."
      />

      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl">Send us a message</h2>
            <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">
              A couple of sentences about your situation is plenty to start.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Contact details */}
          <aside className="lg:col-span-5">
            <div className="rounded-brand-lg border border-line bg-muted p-7">
              <h2 className="text-lg">Reach us directly</h2>

              <dl className="mt-6 space-y-6">
                <div className="flex gap-4">
                  <dt className="sr-only">Phone</dt>
                  <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <dd>
                    <a
                      href={`tel:${site.phoneHref}`}
                      className="font-serif text-lg font-semibold text-primary hover:text-accent"
                    >
                      {site.phone}
                    </a>
                    <p className="mt-0.5 text-sm text-ink-muted">
                      Fastest way to reach us during office hours
                    </p>
                  </dd>
                </div>

                <div className="flex gap-4">
                  <dt className="sr-only">Email</dt>
                  <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="font-medium text-primary hover:text-accent hover:underline"
                    >
                      {site.email}
                    </a>
                    <p className="mt-0.5 text-sm text-ink-muted">
                      For general questions and document requests
                    </p>
                  </dd>
                </div>

                <div className="flex gap-4">
                  <dt className="sr-only">Office</dt>
                  <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <dd>
                    <address className="not-italic leading-relaxed text-ink">
                      {site.address.street}
                      {site.address.street2 ? (
                        <>
                          <br />
                          {site.address.street2}
                        </>
                      ) : null}
                      <br />
                      {site.address.city}, {site.address.state} {site.address.zip}
                    </address>
                    <a
                      href={directionsUrl(site.address)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-block text-sm font-medium text-accent hover:underline"
                    >
                      Get directions →
                    </a>
                  </dd>
                </div>

                <div className="flex gap-4">
                  <dt className="sr-only">Office hours</dt>
                  <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <dd className="space-y-1">
                    {site.hours.map((entry) => (
                      <p key={entry.days} className="text-[0.9375rem]">
                        <span className="text-ink-muted">{entry.days}:</span>{" "}
                        <span className="text-ink">{entry.hours}</span>
                      </p>
                    ))}
                  </dd>
                </div>
              </dl>

              {locations.length > 1 ? (
                <div className="mt-7 border-t border-line pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                    Other offices
                  </p>
                  <ul className="mt-3 space-y-2">
                    {locations.slice(1).map((location) => (
                      <li key={location.slug} className="text-sm">
                        <Link
                          href={`/locations/${location.slug}`}
                          className="font-medium text-accent hover:underline"
                        >
                          {location.city}, {location.state}
                        </Link>
                        <span className="text-ink-muted"> · {location.phone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            {/* Security reassurance */}
            <div className="mt-6 flex gap-3 rounded-brand-lg border border-line p-5">
              <Icon name="lock" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-semibold text-primary">
                  Sending documents securely
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  Please don&rsquo;t email Social Security numbers, account
                  numbers, or tax documents. Once we connect, we&rsquo;ll send an
                  encrypted portal link for anything sensitive. We will never ask
                  for those details by email or text.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Scheduling nudge */}
      <section className="border-t border-line bg-muted py-14">
        <Container>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl">Prefer to book a time directly?</h2>
              <p className="mt-1.5 text-[0.9375rem] text-ink-muted">
                Pick a slot on our consultation page — 30 minutes, no charge.
              </p>
            </div>
            <Link
              href={site.consultationUrl}
              className="inline-flex shrink-0 items-center justify-center rounded-brand bg-accent px-6 py-3.5 font-semibold text-accent-fg transition-colors hover:bg-accent-hover"
            >
              Schedule a Consultation
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
