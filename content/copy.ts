import { site } from "./site";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE COPY
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Every heading, eyebrow, lead paragraph, button label and prose block on the
 * site. Components read from here, so a client site can be reworded end to end
 * without touching a single component.
 *
 * ⚠️  REWRITE THIS FILE FOR EVERY CLIENT.
 *
 * These pages are the largest block of indexable text on the site. If two
 * client sites ship with identical copy here, search engines treat them as
 * near-duplicates and rank one while suppressing the other — which defeats the
 * point of the site. Changing the firm name and colors is not enough.
 *
 * Strings that interpolate a value are functions, so the interpolation stays
 * type-checked: `serviceDetail.includesTitle("tax planning")`.
 */

/* -------------------------------------------------------------------------- */
/*  Shared labels                                                             */
/* -------------------------------------------------------------------------- */

export const actions = {
  consult: "Schedule a Consultation",
  consultShort: "Schedule",
  exploreServices: "Explore Our Services",
  allServices: "View all services",
  allIndustries: "All industries",
  allFaqs: "All FAQs",
  allArticles: "All articles",
  contactTeam: "Contact our team",
  call: "Call",
  meetTeam: "Meet our team",
  aboutFirm: "About our firm",
  learnMore: "Learn more",
  readArticle: "Read article",
  getDirections: "Get directions",
  sendMessage: "Send message",
  sending: "Sending…",
};

/* -------------------------------------------------------------------------- */
/*  Homepage hero                                                             */
/* -------------------------------------------------------------------------- */

export interface HeroPanel {
  title: string;
  /** Small pill in the panel header. Set to null to hide it. */
  badge: string | null;
  rows: { label: string; value: string }[];
  note: string | null;
}

export const hero = {
  eyebrow: `${site.address.city}, ${site.address.state} · Certified Public Accountants`,

  /**
   * The headline renders on two lines: `lead` in full-strength text, `trail`
   * in a muted tone beneath it. Keep each line under roughly 30 characters or
   * it will wrap to a third line on narrower desktops — see the sizing note in
   * `src/components/sections/Hero.tsx`.
   */
  headlineLead: "Clarity for your finances.",
  headlineTrail: "Confidence for what's next.",

  subhead:
    "Tax, accounting, and advisory services for individuals and growing businesses — from a firm that answers the phone, explains the reasoning, and quotes the fee before starting the work.",

  primaryCta: actions.consult,
  secondaryCta: { label: actions.exploreServices, href: "/services" },

  /**
   * Illustrative panel beside the headline. Set to `null` to hide it entirely
   * (the headline column then spans the full width), or replace it with a real
   * photograph of the team or office.
   *
   * Nothing here should be a date that will go stale — a site sold this year
   * is still serving these words next year.
   */
  panel: {
    title: "Your position at a glance",
    badge: "Illustrative",
    rows: [
      { label: "Books closed through", value: "Last month" },
      { label: "Projected tax liability", value: "Modeled" },
      { label: "Next filing deadline", value: "Tracked" },
      { label: "Open items", value: "None" },
    ],
    note: "Most clients hear from us in the fall — while there's still time for a decision to change the outcome.",
  } as HeroPanel | null,
};

/* -------------------------------------------------------------------------- */
/*  Homepage sections                                                         */
/* -------------------------------------------------------------------------- */

export const home = {
  services: {
    eyebrow: "What We Do",
    title: "Three practices, one team that talks to each other",
    lead: "Tax, accounting, and advisory work under one roof — so the return reflects the books, and the plan reflects both.",
    helperLead: "Not sure what you need?",
    helperLink: "Tell us your situation",
    helperTrail: "and we'll say so plainly.",
  },

  whyChooseUs: {
    eyebrow: "Why Firms Stay",
    title: "The differences show up in ordinary weeks",
    lead: "Not in a mission statement — in whether the call gets returned, whether the close lands on the date, and whether anyone told you in October.",
  },

  industries: {
    eyebrow: "Industries",
    title: "We know how your business actually makes money",
    lead: "Job costing and WIP look nothing like matter-level realization, which looks nothing like passive activity grouping. Depth in a handful of industries beats a claim to serve everyone.",
  },

  process: {
    eyebrow: "How It Works",
    title: "What working together looks like",
    lead: "No lengthy onboarding, no surprise invoice. You'll know the scope, the people, and the price before anything starts.",
    footerLine: "Let's talk about your financial goals.",
  },

  about: {
    valuesNote: (year: number) =>
      `Licensed CPAs on every engagement, serving clients since ${year}.`,
  },

  testimonials: {
    eyebrow: "Client Experience",
    title: "What clients say about working with us",
  },

  faqs: {
    eyebrow: "Common Questions",
    title: "Questions we're asked before the first meeting",
    helperLead: "Don't see yours?",
    helperLinkAll: "Read all FAQs",
    helperMiddle: "or",
    helperLinkAsk: "ask us directly",
  },

  resources: {
    eyebrow: "Resources",
    title: "Plain explanations of the things clients ask about",
    cta: "Visit the resource center",
  },
};

/* -------------------------------------------------------------------------- */
/*  Conversion band                                                           */
/* -------------------------------------------------------------------------- */

export const cta = {
  title: "Ready to take control of your finances?",
  body: "Tell us what's going on and we'll tell you what we'd do about it — including when that's less than you expected.",
  primaryLabel: actions.consult,
  secondaryLabel: actions.contactTeam,
  /** Reassurance chips. Remove any the firm does not actually offer. */
  chips: ["30 minutes", "No charge", "No obligation"],
};

/* -------------------------------------------------------------------------- */
/*  Page templates                                                            */
/* -------------------------------------------------------------------------- */

export const pages = {
  services: {
    eyebrow: "Services",
    title: "Everything a growing business and its owners need from a CPA",
    lead: "Three practices under one roof, staffed by people who talk to each other — so the tax return reflects the books, and the plan reflects both.",
    secondaryCta: "Ask what you need",
    ctaTitle: "Not sure which of these you need?",
    ctaBody:
      "Describe your situation and we'll tell you what we'd actually recommend — including when that's less than you came in for.",
  },

  serviceDetail: {
    painEyebrow: "Sound familiar?",
    painTitle: "The situations that bring people to us",
    includesEyebrow: "What's included",
    includesTitle: (service: string) => `What ${service} covers`,
    includesLead: "Concrete deliverables, not a list of adjectives.",
    benefitsEyebrow: "What changes",
    benefitsTitle: "What you get out of it",
    audienceTitle: "Who this is for",
    industriesLabel: "Industry-specific guidance",
    faqEyebrow: "Questions",
    faqTitle: (service: string) => `${service} FAQs`,
    faqHelperLead: "More questions?",
    faqHelperLink: "Read all FAQs",
    relatedEyebrow: "Related",
    relatedTitle: "Services that often go with this",
    ctaTitle: (service: string) => `Let's talk about ${service}`,
    ctaBody:
      "Thirty minutes, no charge. We'll tell you what we'd do and what it would cost before you commit to anything.",
  },

  industries: {
    eyebrow: "Industries",
    title: "Depth in a handful of industries beats a claim to serve everyone",
    lead: "Job costing looks nothing like matter-level realization, which looks nothing like passive activity grouping. These are the sectors where we already know what your numbers should look like.",
    cardCta: (industry: string) => `How we help ${industry}`,
    ctaTitle: "Don't see your industry?",
    ctaBody:
      "We work with businesses outside these sectors too — and we'll tell you honestly if your situation calls for a firm with a different specialty.",
  },

  industryDetail: {
    challengesEyebrow: "Common challenges",
    challengesTitle: (industry: string) =>
      `What makes ${industry} finances different`,
    approachEyebrow: "How we help",
    approachTitle: "What we do differently for these businesses",
    servicesEyebrow: "Services",
    servicesTitle: (industry: string) => `What ${industry} clients use most`,
    faqEyebrow: "Questions",
    faqTitle: (industry: string) => `${industry} FAQs`,
    ctaTitle: (industry: string) => `Let's talk about your ${industry} business`,
    ctaBody:
      "Tell us how the business runs and where the numbers stop being useful. Thirty minutes, no charge.",
  },

  about: {
    storyEyebrow: "Our story",
    storyTitle: "How we got here",
    glanceTitle: "The firm at a glance",
    credentialsLabel: "Credentials & memberships",
    valuesEyebrow: "How we work",
    valuesTitle: "Four commitments we're willing to be held to",
    valuesLead:
      "Values are only useful if a client could tell whether you kept them. These are written so you could.",
    leadershipEyebrow: "Leadership",
    leadershipTitle: "The people you'd actually be working with",
    leadershipCta: "View the full team",
  },

  team: {
    eyebrow: "Our Team",
    title: "You'll know exactly who is doing your work",
    lead: "Every client is assigned a lead accountant who stays with the relationship year over year — so you're not re-explaining your business each January.",
    ctaTitle: "Want to meet the person who'd handle your work?",
    ctaBody:
      "Book a consultation and we'll pair you with the lead accountant whose practice fits your situation.",
  },

  teamProfile: {
    bioTitle: (firstName: string) => `About ${firstName}`,
    expertiseTitle: "Areas of focus",
    educationTitle: "Education",
    membershipsTitle: "Professional memberships",
    basedInTitle: "Based in",
    emailCta: (firstName: string) => `Email ${firstName}`,
    linkedinCta: "LinkedIn",
    colleaguesEyebrow: "Our Team",
    colleaguesTitle: "Others you might work with",
  },

  locations: {
    eyebrow: "Locations",
    title: "Meet in person, or work with us entirely remotely",
    lead: "Most of our work happens through a secure portal and video calls. The offices are here when you'd rather sit across a table.",
    cardCta: "View office details →",
    ctaTitle: "Outside our metro?",
    ctaBody:
      "We file in multiple states and work with clients across the country. Distance is rarely the constraint — tell us what you need.",
  },

  locationDetail: {
    officeEyebrow: "Office",
    officeTitle: (city: string) => `Visiting our ${city} office`,
    areasEyebrow: "Areas served",
    areasTitle: (city: string) => `Where our ${city} clients are`,
    areasLead:
      "These are the communities this office actually works with — not a radius drawn on a map.",
    servicesEyebrow: "Services",
    servicesTitle: (city: string) => `Available from our ${city} office`,
    servicesHelperLead: "Looking for something else?",
    servicesHelperLink: "See all services",
    teamEyebrow: "Your team",
    teamTitle: (city: string) => `Working from ${city}`,
    faqEyebrow: "Questions",
    faqTitle: (city: string) => `${city} office FAQs`,
    ctaTitle: (city: string) => `Talk to our ${city} team`,
    ctaBody:
      "Book a consultation, or call the office directly and we'll find a time that works.",
    /** Shown when a location has no mapEmbedUrl configured. */
    mapPlaceholderNote:
      "Add a Google Maps embed URL to this location to show an interactive map here.",
  },

  resources: {
    eyebrow: "Resources",
    title: "Plain explanations of the things clients actually ask about",
    lead: "No gated fluff and no recycled tax-season listicles. These are the answers we give on the phone, written down.",
    browseCta: "Browse all articles",
    guidesCta: "Guides & checklists",
    latestEyebrow: "Latest",
    latestTitle: "Recent articles",
    downloadsEyebrow: "Downloads",
    downloadsTitle: "Checklists and guides",
    downloadsLead:
      "Practical documents you can work through before an appointment.",
    allGuidesCta: "All guides",
    faqEyebrow: "FAQs",
    faqTitle: "Questions we hear most",
    ctaTitle: "Have a question these don't answer?",
    ctaBody: (phone: string) =>
      `Call ${phone} or send a note. We answer client questions year-round, not just in filing season.`,
  },

  blog: {
    eyebrow: "Blog",
    title: "Articles worth the ten minutes",
    lead: "Written by the people who do the work, and reviewed before publication. Search by keyword or filter by topic.",
    searchPlaceholder: "Search articles",
    searchLabel: "Search articles",
    emptyTitle: "No articles match that search",
    emptyBody:
      "Try a different term or clear the filters. If you're looking for something specific, ask us directly — it's often faster.",
    clearFilters: "Clear filters",
    allCategories: "All",
    ctaTitle: "Want this applied to your situation?",
    ctaBody:
      "General guidance only goes so far. Book a consultation and we'll tell you what actually applies to your facts.",
  },

  blogPost: {
    disclaimerLabel: "A note on general guidance:",
    disclaimerBody:
      "This article is general information, not advice on your specific situation, and tax rules change. Before acting on anything here, talk it through with a CPA who knows your facts —",
    disclaimerLink: "including us",
    inlineCtaTitle: "Questions about how this applies to you?",
    inlineCtaBody: "Thirty minutes, no charge, no obligation.",
    inlineCtaLabel: "Schedule a call",
    relatedEyebrow: "Keep reading",
    relatedTitle: "Related articles",
  },

  guides: {
    eyebrow: "Guides & Checklists",
    title: "Practical documents, not lead magnets",
    lead: "Work through these before an appointment and the first meeting gets a lot more useful.",
    cardCta: "Request this guide",
  },

  faqs: {
    eyebrow: "FAQs",
    title: "Straight answers to the questions we're asked most",
    lead: "If yours isn't here, ask — we'd rather answer it directly than have you guess.",
    askCta: "Ask a question",
    jumpToLabel: "Jump to",
    ctaTitle: "Still have a question?",
    ctaBody: (phone: string) =>
      `Call ${phone} or send a note — we answer questions year-round, not just during filing season.`,
  },

  contact: {
    eyebrow: "Contact",
    title: "Tell us what's going on",
    lead: "Send a note, call the office, or book a consultation directly. New inquiries get a response within one business day.",
    formTitle: "Send us a message",
    formLead: "A couple of sentences about your situation is plenty to start.",
    detailsTitle: "Reach us directly",
    phoneNote: "Fastest way to reach us during office hours",
    emailNote: "For general questions and document requests",
    otherOfficesLabel: "Other offices",
    securityTitle: "Sending documents securely",
    securityBody:
      "Please don't email Social Security numbers, account numbers, or tax documents. Once we connect, we'll send an encrypted portal link for anything sensitive. We will never ask for those details by email or text.",
    scheduleNudgeTitle: "Prefer to book a time directly?",
    scheduleNudgeBody: "Pick a slot on our consultation page — 30 minutes, no charge.",
  },

  schedule: {
    eyebrow: "Consultation",
    title: "Let's talk about your financial goals",
    lead: "A working conversation, not a pitch. Tell us what's going on and we'll tell you what we'd actually do about it — including when the answer is less than you expected.",
    formTitle: "Request a time",
    formLead:
      "Tell us a little about your situation and we'll come back with times that work — usually the same business day.",
    expectationsTitle: "What to expect",
    /** Icon keys must exist in `IconName` (content/types.ts). */
    expectations: [
      {
        icon: "clock" as const,
        title: "About 30 minutes",
        description:
          "Long enough to understand your situation, short enough to fit in a working day.",
      },
      {
        icon: "users" as const,
        title: "You'll speak with a CPA",
        description:
          "Not a salesperson working from a script. The person on the call does the work.",
      },
      {
        icon: "clipboard" as const,
        title: "Bring last year's return",
        description:
          "Helpful but not required. If you have it handy, the conversation gets more specific.",
      },
      {
        icon: "document" as const,
        title: "You'll leave with our read",
        description:
          "What we'd recommend, roughly what it would cost, and whether you need it at all.",
      },
    ],
    callTitle: "Prefer to call?",
    nextTitle: "What happens next",
  },

  legal: {
    eyebrow: "Legal",
    updatedLabel: "Last updated:",

    /**
     * ⚠️  Update `updated` whenever counsel reviews a policy — it is a public
     * claim about when the document was last checked. Set it per client; a
     * stale date on a policy page is worse than no date.
     */
    privacy: {
      title: "Privacy Policy",
      updated: "January 1, 2026",
      intro: (firm: string) =>
        `How ${firm} handles the information you share with us, on this website and in the course of an engagement.`,
    },
    terms: {
      title: "Terms of Use",
      updated: "January 1, 2026",
      intro: "The terms that govern your use of this website.",
    },
    accessibility: {
      title: "Accessibility Statement",
      updated: "January 1, 2026",
      intro:
        "We want this site to be usable by everyone, including people using assistive technology.",
    },
  },

  notFound: {
    code: "404",
    title: "We couldn't find that page",
    lead: "The link may be out of date, or the page may have moved. Here's where most people are headed.",
    homeCta: "Back to home",
    contactCta: "Contact us",
    popularLabel: "Popular pages",
  },
};

/* -------------------------------------------------------------------------- */
/*  Forms                                                                     */
/* -------------------------------------------------------------------------- */

export const forms = {
  contact: {
    serviceLabel: "What can we help with?",
    serviceUnsure: "Not sure yet",
    serviceOther: "Something else",
    preferredContactLabel: "Preferred contact method",
    messageLabel: "How can we help?",
    messageHint:
      "A couple of sentences is plenty — what's going on, and what prompted you to reach out.",
    privacyNote:
      "Your details are used only to respond to this inquiry. Please don't include Social Security numbers, account numbers, or tax documents — we'll send a secure portal link for those.",
    successTitle: "Message received",
    successAgain: "Send another message",
    errorFallback:
      "We couldn't send that. Please try again, or call us directly and we'll take the details over the phone.",
  },
};
