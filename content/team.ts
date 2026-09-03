import type { TeamMember } from "./types";

/**
 * Team directory.
 *
 * PLACEHOLDER PEOPLE — replace every entry before launch. Never publish a
 * credential (CPA, CFP, EA, CVA) that the individual does not actually hold,
 * and confirm each person's license is active in the states listed.
 *
 * Photos: drop headshots in /public/team/ and set `photo`. Leave `photo` null
 * and the template renders a styled monogram instead of a broken image.
 */
export const team: TeamMember[] = [
  {
    slug: "margaret-chen",
    name: "Margaret Chen",
    title: "Managing Partner",
    credentials: "CPA",
    photo: null,
    featured: true,
    shortBio:
      "Founded the firm in 2004 after a decade in audit and closely held business tax. Works primarily with owner-operated companies through growth and transition.",
    bio: [
      "Margaret founded the firm in 2004 with a straightforward premise: business owners deserve an accountant who returns calls and explains the reasoning. Two decades later, that premise still governs how the firm works.",
      "Her practice centers on closely held businesses — the entity structuring, owner compensation, and multi-year planning that determine what a business is actually worth to the people who built it. She works closely with clients through financing, acquisition, and eventual transition.",
      "Before founding the firm she spent ten years in public accounting, first in audit and then in tax for privately held companies. She is a frequent speaker on entity selection and succession planning for regional business groups.",
    ],
    expertise: [
      "Entity structure and selection",
      "Owner compensation planning",
      "Business succession and exit planning",
      "Multi-year tax strategy",
    ],
    education: [
      "B.B.A., Accounting — The University of Texas at Austin",
      "M.S., Taxation — Example State University",
    ],
    memberships: [
      "American Institute of CPAs (AICPA)",
      "Texas Society of CPAs (TXCPA)",
    ],
    linkedin: "https://www.linkedin.com/in/example",
    email: "mchen@harborridgecpa.com",
  },
  {
    slug: "david-okonkwo",
    name: "David Okonkwo",
    title: "Partner, Tax",
    credentials: "CPA, MST",
    photo: null,
    featured: true,
    shortBio:
      "Leads the firm's tax practice, with a focus on multi-state compliance, real estate, and IRS representation.",
    bio: [
      "David leads the tax practice and handles the firm's most technically involved engagements: multi-state nexus questions, real estate dispositions, and examination defense.",
      "He is the person clients call when a notice arrives. Over fifteen years he has represented individuals and businesses in federal and state examinations, collection matters, and voluntary disclosure programs, and he is candid with clients about which outcomes are realistic.",
      "He joined the firm in 2011 from a national accounting firm's state and local tax group.",
    ],
    expertise: [
      "Multi-state and local tax (SALT)",
      "IRS examination and collections representation",
      "Real estate taxation",
      "Voluntary disclosure agreements",
    ],
    education: [
      "B.S., Accounting — Example State University",
      "M.S., Taxation — Example University",
    ],
    memberships: [
      "American Institute of CPAs (AICPA)",
      "Texas Society of CPAs (TXCPA)",
    ],
    linkedin: "https://www.linkedin.com/in/example",
    email: "dokonkwo@harborridgecpa.com",
  },
  {
    slug: "priya-raman",
    name: "Priya Raman",
    title: "Director, Client Accounting Services",
    credentials: "CPA",
    photo: null,
    featured: true,
    shortBio:
      "Runs the firm's outsourced accounting practice and the monthly close for clients across construction, healthcare, and professional services.",
    bio: [
      "Priya oversees the client accounting group, which handles bookkeeping, monthly close, and financial reporting for clients ranging from single-location practices to multi-entity construction groups.",
      "She rebuilt the firm's close process around committed delivery dates, and she is unusually direct about what accurate reporting requires from both sides. Clients who work with her tend to stop asking whether the numbers are right.",
      "She specializes in construction and healthcare reporting, including WIP schedules and provider-level profitability.",
    ],
    expertise: [
      "Monthly close and financial reporting",
      "Construction job costing and WIP",
      "QuickBooks Online and Xero implementation",
      "Accounting process design",
    ],
    education: ["B.B.A., Accounting — Example State University"],
    memberships: ["American Institute of CPAs (AICPA)"],
    linkedin: "https://www.linkedin.com/in/example",
    email: "praman@harborridgecpa.com",
  },
  {
    slug: "james-whitfield",
    name: "James Whitfield",
    title: "Director, Advisory",
    credentials: "CPA, CVA",
    photo: null,
    shortBio:
      "Leads fractional CFO and valuation engagements for companies preparing to grow, borrow, or sell.",
    bio: [
      "James leads the firm's advisory practice: fractional CFO engagements, business valuations, and transaction support.",
      "He spent eight years in corporate finance before returning to public accounting, and he brings an operator's view to forecasting and pricing work. His valuation engagements support ownership transitions, buy-sell agreements, and estate filings.",
    ],
    expertise: [
      "Fractional CFO engagements",
      "Business valuation",
      "Financial forecasting and modeling",
      "Transaction and diligence support",
    ],
    education: [
      "B.S., Finance — Example University",
      "M.B.A. — Example Graduate School of Business",
    ],
    memberships: [
      "American Institute of CPAs (AICPA)",
      "National Association of Certified Valuators and Analysts (NACVA)",
    ],
    linkedin: "https://www.linkedin.com/in/example",
    email: "jwhitfield@harborridgecpa.com",
  },
  {
    slug: "sofia-alvarez",
    name: "Sofia Alvarez",
    title: "Senior Tax Manager",
    credentials: "CPA",
    photo: null,
    shortBio:
      "Manages individual and pass-through tax engagements, with particular depth in equity compensation.",
    bio: [
      "Sofia manages a portfolio of individual and pass-through tax clients, including households with significant equity compensation and multi-state filing requirements.",
      "She built the firm's equity compensation modeling approach, which walks clients through ISO, NSO, and RSU decisions against AMT exposure and cash needs before an exercise window opens.",
    ],
    expertise: [
      "Individual and pass-through taxation",
      "Equity compensation planning",
      "Multi-state individual filings",
      "Estimated payment planning",
    ],
    education: ["B.B.A., Accounting — Example State University"],
    memberships: ["American Institute of CPAs (AICPA)"],
    linkedin: "https://www.linkedin.com/in/example",
    email: "salvarez@harborridgecpa.com",
  },
  {
    slug: "thomas-becker",
    name: "Thomas Becker",
    title: "Payroll & Compliance Manager",
    credentials: "",
    photo: null,
    shortBio:
      "Oversees payroll processing and multi-state registration for the firm's client base.",
    bio: [
      "Thomas oversees payroll operations, including multi-state withholding and unemployment registrations for clients with distributed teams.",
      "He handles payroll tax notices end to end and maintains the firm's compliance calendar, which is why most clients never have to think about a filing deadline.",
    ],
    expertise: [
      "Payroll processing and compliance",
      "Multi-state registrations",
      "Payroll tax notice resolution",
      "Worker classification review",
    ],
    email: "tbecker@harborridgecpa.com",
  },
];

export const getTeamMember = (slug: string) => team.find((m) => m.slug === slug);

export const featuredTeam = team.filter((m) => m.featured);
