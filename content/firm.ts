import type { Differentiator, Guide, ProcessStep, Stat } from "./types";

/**
 * Homepage and About page content: statistics, differentiators, process, and
 * the firm's story.
 *
 * Every statistic below renders as a public claim. Replace each one with a
 * figure the firm can substantiate, or delete it. Rounded, honest numbers read
 * better than precise, invented ones.
 */

export const stats: Stat[] = [
  { value: "20+", label: "Years in practice", detail: "Serving Central Texas since 2004" },
  { value: "600+", label: "Clients served", detail: "Individuals and businesses" },
  { value: "18", label: "States we file in", detail: "Multi-state compliance" },
  { value: "Licensed CPAs", label: "On every engagement", detail: "Texas State Board of Public Accountancy" },
];

/** Short proof points rendered directly beneath the homepage hero. */
export const heroTrustPoints: string[] = [
  "Licensed CPAs",
  "AICPA member firm",
  "Fixed-fee engagements",
  "Secure client portal",
];

export const differentiators: Differentiator[] = [
  {
    icon: "users",
    title: "You work with a named accountant",
    description:
      "Every client has a lead accountant who stays with the relationship year over year. You won't re-explain your business each January, and you'll always know who to call.",
  },
  {
    icon: "chart",
    title: "Planning happens before the year closes",
    description:
      "We run projections mid-year and again in the fall, while decisions can still change the outcome. A return prepared in March mostly reports what's already fixed.",
  },
  {
    icon: "wallet",
    title: "Fixed fees, quoted in advance",
    description:
      "Recurring work is priced as a flat fee agreed before we start. You won't get an invoice for a phone call, which means you'll actually make the call.",
  },
  {
    icon: "clock",
    title: "A close date we commit to",
    description:
      "Monthly financials arrive on a date we agree to, not whenever the month's work gets finished. Reporting you can't schedule around isn't reporting.",
  },
  {
    icon: "sparkle",
    title: "Plain explanations, not jargon",
    description:
      "We tell you what a number means and what to do about it. If an answer requires a technical citation, you'll get the citation and the translation.",
  },
  {
    icon: "lock",
    title: "Security built into how we work",
    description:
      "Documents move through an encrypted portal, never email. Access is limited to your engagement team, under a written information security program.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Schedule a consultation",
    description:
      "A 30-minute conversation about your situation, what's in place now, and what prompted the search. No charge, no obligation, no pitch.",
    icon: "phone",
  },
  {
    number: "02",
    title: "We review where you stand",
    description:
      "We look at prior returns, your accounting file, and any open notices, then tell you plainly what's working and what needs attention.",
    icon: "clipboard",
  },
  {
    number: "03",
    title: "You get a scope and a fixed quote",
    description:
      "A written proposal covering exactly what we'll do, who does it, when it's delivered, and what it costs. You approve the number before work begins.",
    icon: "document",
  },
  {
    number: "04",
    title: "We do the work and keep you current",
    description:
      "Books closed on schedule, filings made on time, and a standing check-in so nothing waits until year end to be discussed.",
    icon: "check",
  },
  {
    number: "05",
    title: "We plan for what's next",
    description:
      "Projections during the year, an annual structure review, and a heads-up when something in your situation or the law changes what you should do.",
    icon: "growth",
  },
];

/**
 * About page narrative. Rewrite entirely for the firm — this is the section
 * where a template most obviously reads as a template.
 */
export const aboutContent = {
  eyebrow: "Our Firm",
  headline: "Built for owners who want a straight answer",
  intro:
    "Harbor Ridge CPA Group was founded in 2004 on the observation that most business owners weren't getting bad accounting — they were getting silence. Returns filed, questions unanswered, no one calling in October to say something was worth doing before December.",
  story: [
    "We started with a handful of clients in Austin and a commitment that has not changed: return the call, explain the reasoning, and price the work in advance so nobody hesitates to ask a question.",
    "Today the firm serves more than 600 individuals and businesses across Central Texas and eighteen states, with practices in tax, client accounting, and advisory. We've grown deliberately — adding people rather than volume — because the model only works if the person who knows your business is still the person who picks up the phone.",
    "Most of our clients are owner-operated businesses somewhere between their first employee and their eventual transition, along with the households behind them. We're good at that stage, and we're honest when a situation calls for a firm with a different specialty.",
  ],
  values: [
    {
      title: "Say the useful thing",
      description:
        "Including when it's that you don't need the service you called about, or that a strategy you read about won't work for your facts.",
    },
    {
      title: "Do the unglamorous parts properly",
      description:
        "Reconciliations, basis tracking, documentation. The work that goes unnoticed until the year someone asks for it.",
    },
    {
      title: "Price so questions are free",
      description:
        "Fixed fees agreed in advance. An hourly meter on a phone call is a good way to guarantee the call never happens.",
    },
    {
      title: "Keep the relationship, not just the file",
      description:
        "The same lead accountant year after year, because context is most of what makes advice worth anything.",
    },
  ],
};

/** Downloadable resources. Point `href` at a real file in /public or a gated form. */
export const guides: Guide[] = [
  {
    slug: "individual-tax-document-checklist",
    title: "Individual Tax Document Checklist",
    description:
      "Everything to gather before your appointment, organized by situation — employment, investments, property, and life events.",
    format: "Checklist",
    icon: "clipboard",
    href: "/contact?resource=individual-tax-checklist",
  },
  {
    slug: "small-business-year-end-close",
    title: "Small Business Year-End Close Checklist",
    description:
      "The reconciliations, schedules, and confirmations to complete before handing your file to a tax preparer.",
    format: "Checklist",
    icon: "check",
    href: "/contact?resource=year-end-close",
  },
  {
    slug: "entity-selection-guide",
    title: "Choosing a Business Entity",
    description:
      "How sole proprietorships, partnerships, S corporations, and C corporations compare on tax, liability, and administrative cost.",
    format: "Guide",
    icon: "scales",
    href: "/contact?resource=entity-selection",
  },
  {
    slug: "irs-notice-first-steps",
    title: "You Received an IRS Notice: First Steps",
    description:
      "How to read a notice, what the deadlines mean, and what to do before responding or paying anything.",
    format: "Guide",
    icon: "shield",
    href: "/contact?resource=irs-notice",
  },
  {
    slug: "multi-state-nexus-worksheet",
    title: "Multi-State Nexus Self-Assessment",
    description:
      "A worksheet to identify where remote employees, sales volume, and property may have created filing obligations.",
    format: "Worksheet",
    icon: "pin",
    href: "/contact?resource=nexus-worksheet",
  },
  {
    slug: "quarterly-estimated-payments",
    title: "Quarterly Estimated Payments Explained",
    description:
      "Who owes them, how safe harbors work, and how to size payments when income varies through the year.",
    format: "Guide",
    icon: "wallet",
    href: "/contact?resource=estimated-payments",
  },
];
