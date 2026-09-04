/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SIGN-OFF ON PUBLIC CLAIMS
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * This site makes claims a state board can hold a licensed firm to. Some of them
 * cannot be checked by any script: a fabricated statistic and a real one look
 * identical in the source, and an invented testimonial reads exactly like an
 * approved one.
 *
 * So this file records a human attestation instead. `npm run check:content`
 * fails until every claim below is signed off with a real name and date, which
 * means the site cannot be handed over on the strength of "the AI wrote
 * something plausible."
 *
 * ⚠️  Do not fill these in on someone else's behalf. The name recorded here is
 * the person at the firm who confirmed the claim is true and can substantiate
 * it. If you are an agency, that is your client, not you — you are attesting
 * that you asked, not that the facts are yours to assert.
 */

export interface Attestation {
  /** Set true only after a named person at the firm has confirmed the claim. */
  verified: boolean;
  /** Who confirmed it. A real person's name, not "the client" or "marketing". */
  by: string;
  /** ISO date, e.g. "2026-09-04". When they confirmed it. */
  date: string;
  /** Optional: how it was confirmed, or what the substantiation is. */
  note?: string;
}

const unverified: Attestation = { verified: false, by: "", date: "" };

export const verification: Record<string, Attestation> = {
  /** Figures in content/firm.ts — years in practice, clients served, states filed in. */
  statistics: { ...unverified },

  /** Credentials and memberships in content/site.ts, and per person in team.ts. */
  credentials: { ...unverified },

  /** Every quote in content/testimonials.ts, and permission to publish each one. */
  testimonials: { ...unverified },

  /** Offices in content/locations.ts actually exist; areasServed is real. */
  locations: { ...unverified },

  /** Services listed are ones the firm is licensed and equipped to provide. */
  services: { ...unverified },

  /** Team names, titles, credentials and bios are accurate and current. */
  teamBios: { ...unverified },

  /** Privacy, terms and accessibility pages reviewed by the firm's counsel. */
  legalPages: { ...unverified },

  /** Articles reviewed by a licensed CPA at the firm before publication. */
  articles: { ...unverified },

  /**
   * The cookie table in content/privacy.ts matches what the site actually sets,
   * and counsel has confirmed the consent mode suits this firm's visitors.
   * Run a cookie scan against the finished site and reconcile before signing.
   */
  cookieDisclosure: { ...unverified },
};

/** Human-readable descriptions, used by the content check's failure output. */
export const claimDescriptions: Record<string, string> = {
  statistics: "Statistics in content/firm.ts can each be substantiated on request",
  credentials: "Credentials, licensed states and memberships are accurate and active",
  testimonials: "Every testimonial is a real client quote with permission to publish",
  locations: "Every office listed exists; areasServed lists real communities",
  services: "The firm is licensed and equipped to provide every service listed",
  teamBios: "Team names, titles, credentials and bios are accurate and current",
  legalPages: "Privacy, terms and accessibility pages reviewed by the firm's counsel",
  articles: "Articles reviewed by a licensed CPA at the firm before publication",
  cookieDisclosure: "Cookie categories match what the site sets; consent mode confirmed by counsel",
};
