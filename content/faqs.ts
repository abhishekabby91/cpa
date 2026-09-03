import type { FaqItem } from "./types";

/**
 * Site-wide FAQs. Rendered on the homepage (first `homepageFaqCount` entries)
 * and in full on /faqs, where they are grouped by `category`.
 *
 * These answers also feed FAQPage structured data, so keep them factually
 * accurate and specific to this firm. Remove any question the firm cannot
 * answer honestly — an unanswered question is better than a vague one.
 */
export const faqCategories = [
  "Working With a CPA",
  "Pricing & Engagement",
  "Tax Services",
  "Accounting & Bookkeeping",
  "Getting Started",
] as const;

export const homepageFaqCount = 6;

export const faqs: FaqItem[] = [
  {
    category: "Working With a CPA",
    question: "What does a CPA do that a tax preparer doesn't?",
    answer:
      "A Certified Public Accountant is licensed by a state board, meets ongoing education requirements, and can represent you before the IRS. Beyond preparing returns, a CPA can advise on entity structure, prepare financial statements to professional standards, and handle examinations and appeals. For a straightforward W-2 return, a preparer may be all you need. Once there's a business, property, equity compensation, or multi-state activity involved, the difference starts to matter.",
  },
  {
    category: "Working With a CPA",
    question: "Do you work with clients outside your metro area?",
    answer:
      "Yes. Most of our work happens through a secure client portal, video meetings, and phone calls. We serve clients across multiple states and file in every state where our clients have obligations. You're always welcome in the office if you'd rather meet in person.",
  },
  {
    category: "Working With a CPA",
    question: "Will I work with the same person each year?",
    answer:
      "Yes. Every client is assigned a lead accountant who stays with the relationship. You'll also know the other members of your service team, so a vacation or a busy week doesn't leave you without an answer.",
  },
  {
    category: "Pricing & Engagement",
    question: "How much does working with a CPA cost?",
    answer:
      "Fees depend on scope and complexity. Individual tax preparation is typically quoted as a flat fee based on the forms and schedules your situation requires. Bookkeeping and monthly accounting are quoted as a fixed monthly fee after we review your current file. Advisory work is scoped as a project or a monthly engagement. We give you a written quote before starting, so you approve the number in advance.",
  },
  {
    category: "Pricing & Engagement",
    question: "Do you bill hourly or by the engagement?",
    answer:
      "Recurring work — bookkeeping, monthly accounting, payroll, tax preparation — is billed at a fixed fee agreed in advance. Some project work, such as examination representation, is billed hourly because the scope depends on how the matter develops. We tell you which applies before you engage us.",
  },
  {
    category: "Pricing & Engagement",
    question: "What happens on a consultation call?",
    answer:
      "It's a working conversation, not a sales pitch. We ask about your situation, what's currently in place, and what's prompting the change. You'll leave with our read on what you need — including whether that's less than you thought, or a different firm entirely. There's no charge and no obligation.",
  },
  {
    category: "Tax Services",
    question: "What documents do I need for tax preparation?",
    answer:
      "We send a personalized organizer based on your prior-year return. Generally: all W-2s and 1099s, brokerage and cryptocurrency statements, K-1s, mortgage interest and property tax statements, records of retirement and HSA contributions, documentation of estimated payments made, and details of any major life events during the year. For businesses, add year-end financial statements or accounting file access, payroll reports, and fixed asset activity.",
  },
  {
    category: "Tax Services",
    question: "Do you provide tax planning, or only preparation?",
    answer:
      "Both, and they're different engagements. Preparation reports what already happened. Planning happens during the year — projections, scenario modeling, and a written action plan with deadlines while decisions can still change the outcome. We'll tell you honestly whether your situation warrants planning work.",
  },
  {
    category: "Tax Services",
    question: "Can you help if I have unfiled returns or an IRS notice?",
    answer:
      "Yes. We handle notices, examinations, unfiled prior-year returns, penalty abatement requests, and collection alternatives such as installment agreements. Send us the complete notice — every page — and we'll tell you what it actually says and what the response deadline is before recommending anything.",
  },
  {
    category: "Tax Services",
    question: "Can you file in multiple states?",
    answer:
      "Yes. Multi-state filings are routine for us, including part-year and nonresident individual returns and business filings in states where you have nexus. If you're not sure where you have obligations, a nexus review is usually the right starting point.",
  },
  {
    category: "Accounting & Bookkeeping",
    question: "Do you offer bookkeeping and payroll as well as tax?",
    answer:
      "Yes. Many clients use us for monthly bookkeeping or a full monthly close, payroll processing and filings, and the annual tax return. When the same team does all three, year-end work starts from a reconciled file rather than a reconstruction, which typically reduces the total cost.",
  },
  {
    category: "Accounting & Bookkeeping",
    question: "Our books are behind. Is that a problem?",
    answer:
      "It's common and it's fixable. We start with a diagnostic of the current file, give you a fixed quote and timeline for cleanup, then bring the records current period by period. Most cleanups take two to six weeks depending on volume and how complete the source documents are.",
  },
  {
    category: "Accounting & Bookkeeping",
    question: "Which accounting software do you support?",
    answer:
      "QuickBooks Online and Xero are our primary platforms, and we also work in QuickBooks Desktop. If you're on something else, tell us — we'd rather work in your system than force a migration that doesn't benefit you.",
  },
  {
    category: "Getting Started",
    question: "How do I schedule a consultation?",
    answer:
      "Use the scheduling page to book a time directly, call the office, or send the contact form and we'll reach out within one business day. Consultations run about 30 minutes and there's no charge.",
  },
  {
    category: "Getting Started",
    question: "How do I switch from my current accountant?",
    answer:
      "It's more routine than most people expect. We request your prior-year returns and accounting file, review them, and identify anything that needs attention. You don't need to have a difficult conversation with your current firm first — a standard request from us is all it takes, and we handle the transition timing so nothing gets dropped.",
  },
  {
    category: "Getting Started",
    question: "How do you keep my financial information secure?",
    answer:
      "Documents are exchanged through an encrypted client portal rather than email. Access is limited to the team members working on your engagement, and we maintain a written information security program as required of tax professionals. We will never ask for sensitive information by email or text.",
  },
];

export const homepageFaqs = faqs.slice(0, homepageFaqCount);
