/**
 * Content model for the CPA firm website template.
 *
 * Everything a firm needs to change when re-branding this site lives in the
 * `content/` directory and is typed by the interfaces below. No component
 * should hard-code firm-specific copy, contact details, colors, or claims.
 */

/* -------------------------------------------------------------------------- */
/*  Primitives                                                                */
/* -------------------------------------------------------------------------- */

/** Keys of the icon set in `src/components/ui/Icon.tsx`. */
export type IconName =
  | "calculator"
  | "receipt"
  | "chart"
  | "shield"
  | "briefcase"
  | "building"
  | "growth"
  | "handshake"
  | "clipboard"
  | "wallet"
  | "scales"
  | "users"
  | "home"
  | "stethoscope"
  | "hardhat"
  | "cart"
  | "cpu"
  | "heart"
  | "utensils"
  | "rocket"
  | "clock"
  | "phone"
  | "mail"
  | "pin"
  | "check"
  | "sparkle"
  | "lock"
  | "document";

export interface Cta {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  /** Optional flyout used by the desktop header. */
  children?: { label: string; href: string; description?: string }[];
}

export interface FaqItem {
  question: string;
  answer: string;
  /** Optional grouping used on the FAQ page. */
  category?: string;
}

/* -------------------------------------------------------------------------- */
/*  Brand + site configuration                                                */
/* -------------------------------------------------------------------------- */

/**
 * Every value here is emitted as a CSS custom property at runtime, so a new
 * firm can be re-skinned by editing this object alone. Use any valid CSS color.
 */
export interface ThemeConfig {
  /** Deep, authoritative brand color. Used for headers, footers, dark sections. */
  primary: string;
  /** A lighter step of `primary`, for hover states on dark surfaces. */
  primaryHover: string;
  /** Text/graphics that sit on top of `primary`. */
  primaryForeground: string;
  /** Secondary neutral — slate/charcoal. Body copy and muted UI. */
  secondary: string;
  /** High-contrast conversion color used for primary CTAs. */
  accent: string;
  accentHover: string;
  accentForeground: string;
  /** Page background and raised surfaces. */
  background: string;
  surface: string;
  /** Subtle tinted band used to separate alternating sections. */
  muted: string;
  /** Default body text color. */
  text: string;
  textMuted: string;
  border: string;
  /** Optional premium highlight (rules, small flourishes). */
  highlight: string;
  /** Corner radius scale, e.g. "0.5rem". Keep it restrained — sharp reads professional. */
  radius: string;
}

export interface BusinessHours {
  /** e.g. "Monday – Friday" */
  days: string;
  /** e.g. "8:30 AM – 5:30 PM" or "By appointment" */
  hours: string;
}

export interface SocialLink {
  platform: "linkedin" | "facebook" | "x" | "instagram" | "youtube";
  href: string;
}

export interface Address {
  street: string;
  street2?: string;
  city: string;
  /** Two-letter USPS state code, e.g. "TX". */
  state: string;
  zip: string;
  country: string;
}

export interface Credential {
  label: string;
  detail?: string;
}

export interface SiteConfig {
  /** Legal or trading name of the firm. */
  firmName: string;
  /** Short form used in tight spaces (mobile header, footer bottom bar). */
  shortName: string;
  /** Appended to page titles: "Tax Planning | {firmName}". */
  tagline: string;
  /** One-sentence description used as the default meta description. */
  description: string;
  /** Absolute URL, no trailing slash. Overridden by NEXT_PUBLIC_SITE_URL. */
  url: string;
  /**
   * Path to the firm's logo in /public, or `null` to render the built-in
   * wordmark (monogram + firm name) instead.
   */
  logo: string | null;
  /** Monogram shown when `logo` is null. 1–3 characters. */
  monogram: string;
  phone: string;
  /** E.164 for tel: links, e.g. "+15125550147". */
  phoneHref: string;
  email: string;
  /** Primary office. Additional offices belong in `content/locations.ts`. */
  address: Address;
  hours: BusinessHours[];
  /**
   * Where the "Schedule a Consultation" CTA points. Use the internal page by
   * default, or swap in a Calendly/Acuity/Microsoft Bookings URL.
   */
  consultationUrl: string;
  social: SocialLink[];
  /**
   * Verified credentials and memberships only. Remove anything the firm cannot
   * substantiate — these render as public trust claims.
   */
  credentials: Credential[];
  /** Shown in the footer. Required in several states for CPA firms. */
  licenseDisclaimer: string;
  /** Year the firm was established, used for the copyright range and "since" copy. */
  foundedYear: number;
  theme: ThemeConfig;
  nav: NavItem[];
  footerNav: { title: string; links: Cta[] }[];
  legalNav: Cta[];
}

/* -------------------------------------------------------------------------- */
/*  Marketing content                                                         */
/* -------------------------------------------------------------------------- */

export interface Stat {
  /** e.g. "25+", "1,200", "98%". Keep every figure verifiable. */
  value: string;
  label: string;
  /** Optional clarifier rendered in small text. */
  detail?: string;
}

export interface ServiceCategory {
  slug: string;
  name: string;
  /** One line for the services index and navigation flyout. */
  summary: string;
  icon: IconName;
  services: Service[];
}

export interface Service {
  slug: string;
  name: string;
  /** Category slug this service belongs to. */
  category: string;
  icon: IconName;
  /** Card copy — one or two sentences. */
  summary: string;
  /** Detail-page hero headline. Lead with the client outcome. */
  headline: string;
  /** Detail-page hero sub-copy. */
  intro: string;
  /** The situations that bring clients to this service. */
  painPoints: string[];
  /** Concrete deliverables — what the engagement actually includes. */
  includes: { title: string; description: string }[];
  /** Outcome-focused benefits. */
  benefits: string[];
  /** Audience fit. */
  idealFor: string[];
  faqs: FaqItem[];
  /** Slugs of related services shown at the foot of the page. */
  related: string[];
  seo: { title: string; description: string };
  featured?: boolean;
}

export interface Industry {
  slug: string;
  name: string;
  icon: IconName;
  summary: string;
  headline: string;
  intro: string;
  /** Financial challenges specific to this industry. */
  challenges: { title: string; description: string }[];
  /** How the firm addresses them. */
  approach: { title: string; description: string }[];
  /** Slugs from services.ts that matter most to this industry. */
  relevantServices: string[];
  faqs: FaqItem[];
  seo: { title: string; description: string };
}

export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  /** e.g. "CPA", "CPA, CGMA", "EA". Leave empty for non-credentialed staff. */
  credentials: string;
  /** Path in /public, or null to render initials. */
  photo: string | null;
  /** Short bio for the team index card. */
  shortBio: string;
  /** Full bio paragraphs for the profile page. */
  bio: string[];
  expertise: string[];
  education?: string[];
  memberships?: string[];
  linkedin?: string;
  email?: string;
  featured?: boolean;
}

export interface Testimonial {
  /** The client's own words. Never write these on a client's behalf. */
  quote: string;
  /** Full name, or initials where the client asked not to be identified. */
  author: string;
  /** Company name — include only with written permission. */
  company?: string;
  industry?: string;
  location?: string;
  /** Optional 1–5 rating, omitted if the firm does not collect ratings. */
  rating?: number;
}

export interface ProcessStep {
  /** "01", "02", ... */
  number: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface Differentiator {
  title: string;
  description: string;
  icon: IconName;
}

export interface Location {
  slug: string;
  city: string;
  /** Two-letter USPS state code. */
  state: string;
  stateName: string;
  address: Address;
  phone: string;
  phoneHref: string;
  email: string;
  hours: BusinessHours[];
  /** Localized hero headline. */
  headline: string;
  intro: string;
  /** Neighborhoods, counties, or metros this office genuinely serves. */
  areasServed: string[];
  /** Service slugs offered from this office. */
  services: string[];
  /** Slugs of team members based at this office. */
  team: string[];
  faqs: FaqItem[];
  /** Google Maps embed URL, or null to render an address card with a directions link. */
  mapEmbedUrl: string | null;
  /** Latitude/longitude for LocalBusiness structured data. Omit if unknown. */
  geo?: { latitude: number; longitude: number };
  seo: { title: string; description: string };
}

export interface Post {
  slug: string;
  title: string;
  /** Category name — must match an entry in `postCategories`. */
  category: string;
  /** ISO date, e.g. "2026-01-14". */
  date: string;
  /** Team member slug, or a plain name for guest authors. */
  author: string;
  excerpt: string;
  readingTime: string;
  /** Path in /public, or null to render a generated gradient card. */
  image: string | null;
  /** Simple block content so the template needs no MDX toolchain out of the box. */
  body: PostBlock[];
  seo?: { title?: string; description?: string };
  featured?: boolean;
}

export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "quote"; text: string };

export interface Guide {
  slug: string;
  title: string;
  description: string;
  /** e.g. "Checklist", "Worksheet", "PDF guide". */
  format: string;
  icon: IconName;
  /** Where the download or gated form lives. */
  href: string;
}
