import type { SiteConfig } from "./types";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  START HERE WHEN LAUNCHING A NEW FIRM
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * This file is the single source of truth for firm identity, branding, contact
 * details and navigation. Editing it re-skins the entire site.
 *
 * The values below are PLACEHOLDERS for a fictional firm. Replace every one of
 * them with verified information before launch. In particular:
 *
 *   • Credentials, memberships and license language must be accurate for the
 *     firm and for every state it practices in.
 *   • Only list offices the firm actually operates and areas it genuinely serves.
 *   • Never publish a statistic the firm cannot substantiate on request.
 */
export const site: SiteConfig = {
  firmName: "Harbor Ridge CPA Group",
  shortName: "Harbor Ridge",
  tagline: "Certified Public Accountants",
  description:
    "Tax, accounting, and advisory services for individuals and growing businesses. Straight answers, proactive planning, and a team that knows your numbers.",
  url: "https://www.harborridgecpa.com",

  // Drop an SVG or PNG in /public and point to it, e.g. "/logo.svg".
  logo: null,
  monogram: "HR",

  phone: "(512) 555-0147",
  phoneHref: "+15125550147",
  email: "hello@harborridgecpa.com",

  address: {
    street: "1200 Congress Avenue",
    street2: "Suite 900",
    city: "Austin",
    state: "TX",
    zip: "78701",
    country: "US",
  },

  hours: [
    { days: "Monday – Thursday", hours: "8:30 AM – 5:30 PM" },
    { days: "Friday", hours: "8:30 AM – 4:00 PM" },
    { days: "Saturday – Sunday", hours: "Closed" },
  ],

  // Point this at your scheduling tool (Calendly, Acuity, Microsoft Bookings)
  // or leave it on the built-in consultation page.
  consultationUrl: "/schedule",

  social: [
    { platform: "linkedin", href: "https://www.linkedin.com/company/example" },
    { platform: "facebook", href: "https://www.facebook.com/example" },
  ],

  // Verified credentials only.
  credentials: [
    { label: "Licensed CPAs", detail: "Texas State Board of Public Accountancy" },
    { label: "AICPA Member Firm", detail: "American Institute of CPAs" },
    { label: "TXCPA Member", detail: "Texas Society of CPAs" },
    { label: "IRS e-file Provider", detail: "Authorized" },
  ],

  licenseDisclaimer:
    "Harbor Ridge CPA Group, PLLC is a licensed CPA firm registered with the Texas State Board of Public Accountancy. Information on this website is general in nature and is not a substitute for professional advice on your specific situation.",

  foundedYear: 2004,

  /**
   * ── THEME ────────────────────────────────────────────────────────────────
   * These values become CSS custom properties at runtime (see src/lib/theme.ts),
   * so changing a hex code here restyles every component. Verify contrast after
   * any change — the design targets WCAG 2.2 AA (4.5:1 for body text).
   */
  theme: {
    primary: "#0B2545",
    primaryHover: "#123763",
    primaryForeground: "#F6F8FB",
    secondary: "#334155",
    accent: "#0E7490",
    accentHover: "#0B5F76",
    accentForeground: "#FFFFFF",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    muted: "#F5F7FA",
    text: "#1B2430",
    textMuted: "#516176",
    border: "#E2E8F0",
    highlight: "#B08D57",
    radius: "0.5rem",
  },

  nav: [
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Tax Services", href: "/services#tax", description: "Preparation, planning, and IRS representation" },
        { label: "Accounting & Bookkeeping", href: "/services#accounting", description: "Monthly close, financials, payroll" },
        { label: "Advisory & CFO", href: "/services#advisory", description: "Forecasting, cash flow, growth strategy" },
      ],
    },
    {
      label: "Industries",
      href: "/industries",
      children: [
        { label: "Small Business", href: "/industries/small-business" },
        { label: "Real Estate", href: "/industries/real-estate" },
        { label: "Healthcare", href: "/industries/healthcare" },
        { label: "Professional Services", href: "/industries/professional-services" },
        { label: "Contractors", href: "/industries/contractors" },
        { label: "Startups", href: "/industries/startups" },
      ],
    },
    {
      label: "About",
      href: "/about",
      children: [
        { label: "Our Firm", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "Locations", href: "/locations" },
      ],
    },
    {
      label: "Resources",
      href: "/resources",
      children: [
        { label: "Blog", href: "/resources/blog" },
        { label: "Guides & Checklists", href: "/resources/guides" },
        { label: "FAQs", href: "/faqs" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ],

  footerNav: [
    {
      title: "Firm",
      links: [
        { label: "Our Firm", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "Locations", href: "/locations" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Tax Services", href: "/services/tax-planning" },
        { label: "Accounting", href: "/services/monthly-accounting" },
        { label: "Bookkeeping", href: "/services/bookkeeping" },
        { label: "Payroll", href: "/services/payroll" },
        { label: "CFO Advisory", href: "/services/cfo-advisory" },
        { label: "IRS Representation", href: "/services/irs-representation" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "Small Business", href: "/industries/small-business" },
        { label: "Real Estate", href: "/industries/real-estate" },
        { label: "Healthcare", href: "/industries/healthcare" },
        { label: "Professional Services", href: "/industries/professional-services" },
        { label: "Contractors", href: "/industries/contractors" },
        { label: "Startups", href: "/industries/startups" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/resources/blog" },
        { label: "Guides & Checklists", href: "/resources/guides" },
        { label: "FAQs", href: "/faqs" },
        { label: "Schedule a Consultation", href: "/schedule" },
      ],
    },
  ],

  legalNav: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
};

/** Canonical origin. Environment wins so previews and production stay correct. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || site.url
).replace(/\/$/, "");
