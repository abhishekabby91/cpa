"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { actions } from "@/content/copy";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

/**
 * Sticky site header.
 *
 * Desktop: horizontal nav with hover/focus flyouts for sections that have
 * children. Mobile: a full-height panel with disclosure sub-menus and the
 * consultation CTA pinned where a thumb can reach it.
 */
export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close everything on navigation.
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // Elevate the header once the page scrolls away from the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes any open menu; clicking outside closes the desktop flyout.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  // Prevent background scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  const openWithDelay = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const closeWithDelay = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-surface/95 backdrop-blur transition-shadow duration-300",
        scrolled ? "border-line shadow-card" : "border-transparent",
      )}
    >
      {/* Utility bar — phone and hours, hidden on small screens where the
          sticky call bar covers the same job. */}
      <div className="hidden border-b border-line/70 bg-primary text-primary-fg lg:block">
        <Container>
          <div className="flex items-center justify-between py-2 text-[0.8125rem]">
            <p className="text-white/70">
              {site.hours[0]?.days} {site.hours[0]?.hours} · {site.address.city},{" "}
              {site.address.state}
            </p>
            <div className="flex items-center gap-5">
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-white"
              >
                <Icon name="phone" className="h-3.5 w-3.5" />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-1.5 text-white/80 transition-colors hover:text-white"
              >
                <Icon name="mail" className="h-3.5 w-3.5" />
                {site.email}
              </a>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex h-[4.5rem] items-center justify-between gap-4">
          <Logo />

          <nav
            ref={navRef}
            aria-label="Main"
            className="hidden items-center gap-1 lg:flex"
          >
            {site.nav.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const expanded = openMenu === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && openWithDelay(item.label)}
                  onMouseLeave={() => hasChildren && closeWithDelay()}
                >
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-brand px-3 py-2 text-[0.9375rem] font-medium transition-colors",
                        isActive(item.href)
                          ? "text-accent"
                          : "text-primary hover:text-accent",
                      )}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                    {hasChildren ? (
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-label={`${expanded ? "Hide" : "Show"} ${item.label} menu`}
                        onClick={() => setOpenMenu(expanded ? null : item.label)}
                        className="-ml-2 rounded p-1 text-primary/60 transition-colors hover:text-accent"
                      >
                        <svg
                          viewBox="0 0 16 16"
                          className={cn(
                            "h-3 w-3 transition-transform duration-200",
                            expanded && "rotate-180",
                          )}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M4 6l4 4 4-4" />
                        </svg>
                      </button>
                    ) : null}
                  </div>

                  {hasChildren && expanded ? (
                    <div className="absolute left-0 top-full z-50 w-72 pt-2">
                      <ul className="overflow-hidden rounded-brand-lg border border-line bg-surface p-2 shadow-float">
                        {item.children!.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block rounded-brand px-3 py-2.5 transition-colors hover:bg-muted"
                            >
                              <span className="block text-sm font-semibold text-primary">
                                {child.label}
                              </span>
                              {child.description ? (
                                <span className="mt-0.5 block text-xs leading-relaxed text-ink-muted">
                                  {child.description}
                                </span>
                              ) : null}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href={site.consultationUrl} size="md">
              {actions.consult}
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-brand border border-line text-primary transition-colors hover:border-accent hover:text-accent"
              aria-label={`Call ${site.firmName} at ${site.phone}`}
            >
              <Icon name="phone" className="h-[1.15rem] w-[1.15rem]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-brand border border-line text-primary transition-colors hover:border-accent hover:text-accent"
            >
              <span className="sr-only">
                {mobileOpen ? "Close menu" : "Open menu"}
              </span>
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {mobileOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        hidden={!mobileOpen}
        className="border-t border-line bg-surface lg:hidden"
      >
        <nav aria-label="Mobile" className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto">
          <Container>
            <ul className="divide-y divide-line py-2">
              {site.nav.map((item) => (
                <li key={item.label} className="py-1">
                  {item.children?.length ? (
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-base font-medium text-primary">
                        {item.label}
                        <svg
                          viewBox="0 0 16 16"
                          className="h-4 w-4 text-ink-muted transition-transform duration-200 group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M4 6l4 4 4-4" />
                        </svg>
                      </summary>
                      <ul className="pb-2 pl-1">
                        <li>
                          <Link
                            href={item.href}
                            className="block py-2.5 text-[0.9375rem] font-semibold text-accent"
                          >
                            All {item.label}
                          </Link>
                        </li>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block py-2.5 text-[0.9375rem] text-ink-muted"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-3 text-base font-medium text-primary"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="space-y-3 border-t border-line py-5">
              <Button href={site.consultationUrl} size="lg" className="w-full">
                {actions.consult}
              </Button>
              <Button
                href={`tel:${site.phoneHref}`}
                variant="secondary"
                size="lg"
                className="w-full"
                external
              >
                <Icon name="phone" className="h-4 w-4" />
                Call {site.phone}
              </Button>
            </div>
          </Container>
        </nav>
      </div>
    </header>
  );
}
