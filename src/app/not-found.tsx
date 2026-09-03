import Link from "next/link";
import { serviceCategories } from "@/content/services";
import { site } from "@/content/site";
import { actions, pages } from "@/content/copy";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container>
      <div className="mx-auto max-w-2xl py-24 text-center sm:py-32">
        <p className="font-serif text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          {pages.notFound.code}
        </p>
        <h1 className="mt-4 text-[2rem] leading-tight sm:text-4xl">
          {pages.notFound.title}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-ink-muted">
          {pages.notFound.lead}
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg">
            {pages.notFound.homeCta}
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            {pages.notFound.contactCta}
          </Button>
        </div>

        <nav aria-label="Popular pages" className="mt-14 border-t border-line pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
            {pages.notFound.popularLabel}
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
            {[
              ...serviceCategories.map((category) => ({
                label: category.name,
                href: `/services#${category.slug}`,
              })),
              { label: "Our Team", href: "/team" },
              { label: "FAQs", href: "/faqs" },
              { label: "Resources", href: "/resources" },
              { label: actions.consult, href: site.consultationUrl },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex rounded-full border border-line px-4 py-2 text-sm text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Container>
  );
}
