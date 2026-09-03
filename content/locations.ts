import type { Location } from "./types";

/**
 * ⚠️  Office locations.
 *
 * Create a page here ONLY for an office the firm actually operates, or a
 * service area it genuinely serves. Publishing location pages for cities where
 * the firm has no presence is a deceptive local-SEO practice, and it is the
 * fastest way to lose both rankings and credibility.
 *
 * `areasServed` should list real neighborhoods, cities, or counties the office
 * works with — not an aspirational radius.
 *
 * If the firm has a single office, keep one entry here; the /locations index
 * adapts to however many are defined.
 */
export const locations: Location[] = [
  {
    slug: "austin-tx",
    city: "Austin",
    state: "TX",
    stateName: "Texas",
    address: {
      street: "1200 Congress Avenue",
      street2: "Suite 900",
      city: "Austin",
      state: "TX",
      zip: "78701",
      country: "US",
    },
    phone: "(512) 555-0147",
    phoneHref: "+15125550147",
    email: "austin@harborridgecpa.com",
    hours: [
      { days: "Monday – Thursday", hours: "8:30 AM – 5:30 PM" },
      { days: "Friday", hours: "8:30 AM – 4:00 PM" },
      { days: "Saturday – Sunday", hours: "Closed" },
    ],
    headline: "CPA services in Austin, Texas",
    intro:
      "Our downtown Austin office has served Central Texas businesses and households since 2004. Tax, accounting, payroll, and advisory work for owner-operated companies across the metro — with in-person meetings when you want them and a secure portal when you don't.",
    areasServed: [
      "Downtown Austin",
      "South Congress",
      "East Austin",
      "West Lake Hills",
      "Round Rock",
      "Cedar Park",
      "Pflugerville",
      "Travis County",
      "Williamson County",
    ],
    services: [
      "individual-tax-preparation",
      "business-tax-preparation",
      "tax-planning",
      "bookkeeping",
      "monthly-accounting",
      "payroll",
      "cfo-advisory",
      "irs-representation",
    ],
    team: ["margaret-chen", "david-okonkwo", "priya-raman", "sofia-alvarez"],
    faqs: [
      {
        question: "Where do I park for an appointment?",
        answer:
          "Visitor parking is available in the building garage on the west side, and we validate for the length of your appointment. Let us know at the front desk when you arrive.",
      },
      {
        question: "Do I need to visit the office to become a client?",
        answer:
          "No. Onboarding, document exchange, and review meetings can all happen remotely through our secure portal and video calls. Many Austin-area clients meet in person once a year and handle everything else remotely.",
      },
      {
        question: "Do you serve businesses outside Travis County?",
        answer:
          "Yes. We work with clients throughout Central Texas and file in eighteen states for clients with multi-state obligations.",
      },
    ],
    // Paste the src URL from Google Maps → Share → Embed a map. Leave null to
    // render an address card with a "Get directions" link instead.
    mapEmbedUrl: null,
    geo: { latitude: 30.2711, longitude: -97.7437 },
    seo: {
      title: "CPA Firm in Austin, TX",
      description:
        "Tax, accounting, bookkeeping, payroll, and CFO advisory services for Austin-area individuals and businesses. Licensed CPAs serving Central Texas since 2004.",
    },
  },
  {
    slug: "round-rock-tx",
    city: "Round Rock",
    state: "TX",
    stateName: "Texas",
    address: {
      street: "301 Sample Parkway",
      street2: "Suite 210",
      city: "Round Rock",
      state: "TX",
      zip: "78664",
      country: "US",
    },
    phone: "(512) 555-0182",
    phoneHref: "+15125550182",
    email: "roundrock@harborridgecpa.com",
    hours: [
      { days: "Monday – Thursday", hours: "8:30 AM – 5:00 PM" },
      { days: "Friday", hours: "By appointment" },
      { days: "Saturday – Sunday", hours: "Closed" },
    ],
    headline: "CPA services in Round Rock, Texas",
    intro:
      "Our Williamson County office focuses on small businesses, medical and dental practices, and contractors across the northern Austin metro. Monthly accounting, payroll, and tax work with the same team year over year.",
    areasServed: [
      "Round Rock",
      "Georgetown",
      "Hutto",
      "Leander",
      "Cedar Park",
      "Pflugerville",
      "Williamson County",
    ],
    services: [
      "bookkeeping",
      "monthly-accounting",
      "payroll",
      "business-tax-preparation",
      "individual-tax-preparation",
      "catch-up-bookkeeping",
    ],
    team: ["priya-raman", "thomas-becker", "james-whitfield"],
    faqs: [
      {
        question: "Is the Round Rock office open on Fridays?",
        answer:
          "Fridays are by appointment. Our Austin office keeps standard Friday hours if you need same-week in-person time.",
      },
      {
        question: "Can I work with an Austin-based accountant from Round Rock?",
        answer:
          "Yes. The two offices operate as one firm, and we assign your lead accountant based on the work you need rather than the office nearest you.",
      },
    ],
    mapEmbedUrl: null,
    geo: { latitude: 30.5083, longitude: -97.6789 },
    seo: {
      title: "CPA Firm in Round Rock, TX",
      description:
        "Accounting, bookkeeping, payroll, and tax services for Round Rock and Williamson County businesses. Licensed CPAs serving the northern Austin metro.",
    },
  },
];

export const getLocation = (slug: string) =>
  locations.find((l) => l.slug === slug);

/** The office used for LocalBusiness structured data and the footer. */
export const primaryLocation = locations[0];
