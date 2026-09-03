import type { Service, ServiceCategory } from "./types";

/**
 * Service catalog.
 *
 * Adding a service is a two-step change: append it to `services` below and add
 * its slug to the relevant category in `serviceCategories`. The services index,
 * navigation, footer, sitemap and detail pages all read from here — there is no
 * separate page to create.
 *
 * Copy guidance: lead with the client's situation and the outcome, not with the
 * firm. Avoid guarantees about refunds, audit results, or savings.
 */
export const services: Service[] = [
  /* ── TAX ──────────────────────────────────────────────────────────────── */
  {
    slug: "individual-tax-preparation",
    name: "Individual Tax Preparation",
    category: "tax",
    icon: "receipt",
    featured: true,
    summary:
      "Federal and state returns prepared by a CPA who reviews the whole picture — not just the forms you sent in.",
    headline: "A return that reflects your entire financial year",
    intro:
      "Equity compensation, rental income, a side business, a move between states: personal returns get complicated fast. We prepare the return, explain what drove the outcome, and flag what to change before next year.",
    painPoints: [
      "Your return has outgrown consumer tax software",
      "You received a K-1, 1099-B, or equity comp statement you don't fully understand",
      "You owed far more than expected and want to know why",
      "You moved states, worked remotely, or earned income in more than one state",
      "Last year's preparer never asked you a question",
    ],
    includes: [
      {
        title: "Federal and state return preparation",
        description:
          "Form 1040 with all required schedules, plus resident, part-year, and nonresident state filings.",
      },
      {
        title: "Document review and follow-up",
        description:
          "We reconcile the documents you provide against last year's return and ask about what's missing.",
      },
      {
        title: "Basis and carryforward tracking",
        description:
          "Capital loss carryforwards, passive activity losses, and partnership basis tracked year over year.",
      },
      {
        title: "A review call before we file",
        description:
          "We walk through the return, explain the drivers of your liability, and answer questions before signing.",
      },
      {
        title: "Estimated payment schedule",
        description:
          "Quarterly vouchers and payment guidance so the next year doesn't produce a surprise.",
      },
      {
        title: "Year-round access",
        description:
          "Questions in July get the same attention as questions in March. Reach out when something changes.",
      },
    ],
    benefits: [
      "One preparer who knows your history instead of a new person each season",
      "Fewer notices, because returns are reconciled before they're filed",
      "A clear explanation of what you owe and why",
      "Planning items identified while there is still time to act on them",
    ],
    idealFor: [
      "W-2 households with equity compensation or investment income",
      "Self-employed professionals and 1099 contractors",
      "Landlords and real estate investors",
      "Multi-state and remote workers",
      "Households with trust, partnership, or S corporation K-1s",
    ],
    faqs: [
      {
        question: "What documents do you need to prepare my return?",
        answer:
          "We send a personalized organizer based on last year's return. At minimum: W-2s, all 1099s, brokerage and crypto statements, K-1s, mortgage interest and property tax statements, HSA and retirement contribution records, and documentation for major life events such as a home purchase, marriage, or new dependent.",
      },
      {
        question: "How long does preparation take?",
        answer:
          "Most individual returns are ready for review within two weeks of receiving a complete document set. Returns with multiple K-1s or several state filings take longer, particularly when K-1s arrive late.",
      },
      {
        question: "Can you file an extension for me?",
        answer:
          "Yes. An extension moves the filing deadline, not the payment deadline, so we calculate an estimated payment to submit with it and help you avoid late-payment penalties and interest.",
      },
      {
        question: "Do I need to come into the office?",
        answer:
          "No. Documents can be uploaded to a secure client portal and review meetings can happen by video or phone. You're welcome in the office if you'd prefer to meet in person.",
      },
    ],
    related: ["tax-planning", "state-and-local-tax", "irs-representation"],
    seo: {
      title: "Individual Tax Preparation Services",
      description:
        "CPA-prepared federal and state individual tax returns, with basis tracking, a pre-filing review call, and year-round access to your preparer.",
    },
  },
  {
    slug: "business-tax-preparation",
    name: "Business Tax Preparation",
    category: "tax",
    icon: "briefcase",
    featured: true,
    summary:
      "Entity returns for S corporations, partnerships, and C corporations, reconciled to your books before anything is filed.",
    headline: "Entity returns that reconcile to your books",
    intro:
      "A business return is only as good as the ledger behind it. We close the year properly, reconcile the balance sheet, and file returns that hold up — for the entity and for every owner's K-1.",
    painPoints: [
      "Your books and your tax return have never quite agreed",
      "K-1s arrive so late that owners are always extending",
      "Owner basis and distributions have not been tracked",
      "You're unsure whether your entity type still fits the business",
      "Reasonable compensation for S corporation owners has never been documented",
    ],
    includes: [
      {
        title: "Entity return preparation",
        description:
          "Forms 1120-S, 1065, and 1120 with all supporting schedules and required state filings.",
      },
      {
        title: "Book-to-tax reconciliation",
        description:
          "We tie the return to your trial balance and document every book-tax difference.",
      },
      {
        title: "Owner K-1s delivered on a schedule",
        description:
          "K-1s issued in time for owners to file, with a short explanation of each figure.",
      },
      {
        title: "Basis and distribution tracking",
        description:
          "Stock and debt basis maintained per owner so distributions are treated correctly.",
      },
      {
        title: "Fixed asset and depreciation schedules",
        description:
          "Additions, disposals, Section 179, and bonus depreciation reviewed against your capital plans.",
      },
      {
        title: "Entity structure review",
        description:
          "An annual look at whether your current structure still matches how the business operates.",
      },
    ],
    benefits: [
      "Owners receive K-1s early enough to file on time",
      "Clean, reconciled books that stand up to lender and buyer diligence",
      "Documented positions instead of undocumented estimates",
      "Depreciation and structure decisions made deliberately, not by default",
    ],
    idealFor: [
      "S corporations and partnerships with two or more owners",
      "Single-member LLCs that have outgrown Schedule C",
      "Businesses filing in more than one state",
      "Companies preparing for a loan, raise, or sale",
    ],
    faqs: [
      {
        question: "When are business tax returns due?",
        answer:
          "Calendar-year partnerships and S corporations file by March 15; C corporations by April 15. Extensions push those to September 15 and October 15 respectively. We map your deadlines at the start of the year so nothing is a surprise.",
      },
      {
        question: "Can you work with our existing bookkeeper?",
        answer:
          "Yes, and we do this often. We give your bookkeeper a year-end close checklist and handle the adjusting entries, so the relationship you already have keeps working.",
      },
      {
        question: "Our books are behind. Can you still file?",
        answer:
          "We can file an extension and bring the books current first. Filing from incomplete records tends to create amended returns later, which costs more than doing it once correctly.",
      },
    ],
    related: ["monthly-accounting", "tax-planning", "cfo-advisory"],
    seo: {
      title: "Business Tax Preparation for S Corps, Partnerships & C Corps",
      description:
        "CPA-prepared entity tax returns reconciled to your books, with owner basis tracking, timely K-1s, and an annual entity structure review.",
    },
  },
  {
    slug: "tax-planning",
    name: "Tax Planning",
    category: "tax",
    icon: "chart",
    featured: true,
    summary:
      "Projections and decisions made during the year, while the outcome can still be changed.",
    headline: "Decisions made in October change April",
    intro:
      "By the time a return is prepared, most of the year's tax outcome is already fixed. Planning work happens earlier: we project the year, model the alternatives, and give you a short list of actions with deadlines attached.",
    painPoints: [
      "Every April brings a number you did not expect",
      "You make large financial decisions without knowing the tax consequence",
      "Retirement plan and entity choices were made years ago and never revisited",
      "Income swings sharply from year to year",
      "You're approaching a liquidity event — a sale, an exercise, a large distribution",
    ],
    includes: [
      {
        title: "Mid-year and year-end projections",
        description:
          "A modeled estimate of federal and state liability, updated as the year develops.",
      },
      {
        title: "Scenario modeling",
        description:
          "Side-by-side comparisons: entity elections, timing of income and deductions, retirement plan design, charitable strategies.",
      },
      {
        title: "Retirement plan analysis",
        description:
          "SEP, SIMPLE, solo 401(k), safe harbor, and cash balance plans compared on cost and benefit for your situation.",
      },
      {
        title: "Equity compensation planning",
        description:
          "ISO, NSO, RSU, and 83(b) timing modeled against AMT exposure and cash needs.",
      },
      {
        title: "Estimated payment management",
        description:
          "Quarterly payments adjusted through the year to track actual results, not last year's figures.",
      },
      {
        title: "A written action plan",
        description:
          "Each recommendation with an owner, a deadline, and the expected effect. No open-ended advice.",
      },
    ],
    benefits: [
      "Fewer surprises, because the number is modeled before it's owed",
      "Large decisions made with the after-tax result in view",
      "Cash set aside on a schedule instead of scrambled for in April",
      "Multi-year strategy rather than one-year reaction",
    ],
    idealFor: [
      "Business owners with variable or growing income",
      "Households approaching a liquidity event",
      "Professionals with significant equity compensation",
      "Real estate investors weighing acquisitions or dispositions",
      "Anyone whose income changed materially this year",
    ],
    faqs: [
      {
        question: "When should tax planning happen?",
        answer:
          "The most useful window is mid-year through early Q4, when there's still time to act. Some items — entity elections, retirement plan adoption, charitable vehicles — have hard deadlines well before December 31.",
      },
      {
        question: "Is planning included with tax preparation?",
        answer:
          "Preparation includes the observations that come out of the return. Planning is separate work: projections, modeling, and a written plan. We'll tell you plainly whether your situation warrants it.",
      },
      {
        question: "Can you guarantee I'll pay less tax?",
        answer:
          "No, and be cautious of anyone who does. What planning provides is visibility and options — a clear picture of your projected liability and the specific, defensible steps available to you before the year closes.",
      },
    ],
    related: ["business-tax-preparation", "cfo-advisory", "estate-and-trust-tax"],
    seo: {
      title: "Tax Planning Services for Individuals & Businesses",
      description:
        "Proactive CPA tax planning: mid-year projections, scenario modeling, retirement and equity comp analysis, and a written action plan with deadlines.",
    },
  },
  {
    slug: "irs-representation",
    name: "IRS Representation",
    category: "tax",
    icon: "shield",
    summary:
      "Notices, audits, and collections handled by a CPA who deals with the agency so you don't have to.",
    headline: "You don't have to answer the IRS alone",
    intro:
      "An IRS or state notice is a process, not a verdict. We review what's actually being asked, respond within the deadline, and represent you through examination or collections under a power of attorney.",
    painPoints: [
      "A notice arrived and you're not sure whether it's serious",
      "You've been selected for examination",
      "There are unfiled returns from prior years",
      "A balance has moved into collections",
      "A prior preparer took a position you can't support",
    ],
    includes: [
      {
        title: "Notice review and response",
        description:
          "We read the notice, verify whether the agency is correct, and respond in writing before the deadline.",
      },
      {
        title: "Examination representation",
        description:
          "Form 2848 power of attorney, document preparation, and direct correspondence with the examiner.",
      },
      {
        title: "Unfiled return remediation",
        description:
          "Back returns reconstructed and filed to bring you current and stop failure-to-file penalties from compounding.",
      },
      {
        title: "Collection alternatives",
        description:
          "Installment agreements, currently-not-collectible status, and offers in compromise evaluated honestly against your facts.",
      },
      {
        title: "Penalty abatement requests",
        description:
          "First-time abatement and reasonable cause requests where the record supports them.",
      },
      {
        title: "State tax authority matters",
        description:
          "Representation before state agencies for income, franchise, and sales tax issues.",
      },
    ],
    benefits: [
      "Deadlines met, which is often what determines the outcome",
      "Correspondence handled by someone who has done it before",
      "A realistic assessment of your position rather than an optimistic one",
      "A path back to compliance you can actually complete",
    ],
    idealFor: [
      "Taxpayers with an open notice, exam, or balance due",
      "Businesses facing payroll tax issues",
      "Anyone with unfiled prior-year returns",
      "Clients who inherited a problem from a prior preparer",
    ],
    faqs: [
      {
        question: "I received a notice. What should I do first?",
        answer:
          "Don't ignore it and don't pay it reflexively — a meaningful share of notices are wrong or partially wrong. Send us the full notice, including every page. We'll tell you what it says, whether it's correct, and what the response deadline is.",
      },
      {
        question: "Can you settle my tax debt for less than I owe?",
        answer:
          "An offer in compromise is a real program with strict eligibility rules based on your income, assets, and expenses. Most taxpayers do not qualify. We'll evaluate your facts against the actual criteria and tell you candidly whether it's worth pursuing.",
      },
      {
        question: "Do I have to speak with the IRS myself?",
        answer:
          "In most cases, no. Once a power of attorney is on file, correspondence and calls come to us. We keep you informed and involved in every decision.",
      },
    ],
    related: ["individual-tax-preparation", "business-tax-preparation", "state-and-local-tax"],
    seo: {
      title: "IRS Representation & Tax Resolution",
      description:
        "CPA representation for IRS and state notices, examinations, unfiled returns, penalty abatement, and collection alternatives.",
    },
  },
  {
    slug: "state-and-local-tax",
    name: "State & Local Tax",
    category: "tax",
    icon: "scales",
    summary:
      "Multi-state nexus, apportionment, and sales tax obligations sorted out before they become assessments.",
    headline: "Know where you owe before a state tells you",
    intro:
      "Remote employees, marketplace sales, and out-of-state customers create filing obligations that are easy to miss. We determine where the business has nexus, get it registered and current, and keep the filings on schedule.",
    painPoints: [
      "You hired employees or contractors in states you don't file in",
      "Economic nexus thresholds may have been crossed without anyone noticing",
      "Sales tax has never been collected on taxable services or SaaS",
      "A state sent a nexus questionnaire",
      "Apportionment has been estimated rather than computed",
    ],
    includes: [
      {
        title: "Nexus study",
        description:
          "A state-by-state review of physical and economic nexus based on payroll, property, and sales data.",
      },
      {
        title: "Registration and remediation",
        description:
          "Registrations filed and back exposure addressed, including voluntary disclosure agreements where they reduce lookback and penalties.",
      },
      {
        title: "Income and franchise tax filings",
        description:
          "State returns prepared with computed apportionment, not estimates.",
      },
      {
        title: "Sales and use tax compliance",
        description:
          "Taxability review by state, filing calendar setup, and coordination with your billing system.",
      },
      {
        title: "Remote workforce review",
        description:
          "Payroll withholding and employer registration obligations mapped to where your people actually work.",
      },
    ],
    benefits: [
      "Exposure quantified before a state assesses it",
      "Registrations handled once, correctly, with a filing calendar",
      "Diligence-ready state compliance ahead of a raise or sale",
      "Clarity on which states genuinely require a filing — and which don't",
    ],
    idealFor: [
      "Businesses with remote or distributed teams",
      "E-commerce and SaaS companies",
      "Service firms with out-of-state clients",
      "Companies preparing for financing or acquisition",
    ],
    faqs: [
      {
        question: "What creates a filing obligation in another state?",
        answer:
          "Physical presence — an employee, office, or inventory — generally creates nexus. Most states also apply economic nexus thresholds based on sales volume or transaction count. Thresholds and rules vary by state and by tax type, so the analysis has to be done state by state.",
      },
      {
        question: "We may already be behind. Is it better to wait?",
        answer:
          "Almost never. Exposure accrues with interest and penalties, and voluntary disclosure programs — which typically limit the lookback period and waive penalties — close once a state contacts you first.",
      },
    ],
    related: ["business-tax-preparation", "tax-planning", "monthly-accounting"],
    seo: {
      title: "State & Local Tax (SALT) Services",
      description:
        "Multi-state nexus studies, apportionment, sales and use tax compliance, and voluntary disclosure support for growing businesses.",
    },
  },
  {
    slug: "estate-and-trust-tax",
    name: "Estate & Trust Tax",
    category: "tax",
    icon: "home",
    summary:
      "Fiduciary returns and estate filings prepared with the beneficiaries, not just the forms, in mind.",
    headline: "Fiduciary filings handled with care",
    intro:
      "Serving as executor or trustee comes with filing duties and personal responsibility. We prepare the returns, coordinate with your attorney, and make sure beneficiaries receive accurate K-1s on time.",
    painPoints: [
      "You've been named executor or trustee and don't know what to file",
      "A decedent's final personal return still needs to be prepared",
      "Trust income and distributions have never been formally allocated",
      "Beneficiaries are waiting on K-1s to file their own returns",
      "Step-up in basis was never documented for inherited assets",
    ],
    includes: [
      {
        title: "Fiduciary income tax returns",
        description: "Form 1041 for estates and trusts, with required state filings.",
      },
      {
        title: "Final individual returns",
        description: "The decedent's final Form 1040, coordinated with the estate return.",
      },
      {
        title: "Beneficiary K-1s",
        description:
          "Distributable net income allocated correctly and K-1s issued in time to file.",
      },
      {
        title: "Estate tax returns where required",
        description:
          "Form 706 preparation, including portability elections for surviving spouses.",
      },
      {
        title: "Basis documentation",
        description:
          "Date-of-death valuations captured and documented so beneficiaries have defensible basis.",
      },
      {
        title: "Coordination with counsel",
        description:
          "We work alongside the estate attorney so the tax filings match the governing documents.",
      },
    ],
    benefits: [
      "Fiduciary duties met without guesswork",
      "Beneficiaries receive what they need, when they need it",
      "Basis and valuation decisions documented at the time, not reconstructed years later",
      "One point of contact across the family's returns",
    ],
    idealFor: [
      "Executors and personal representatives",
      "Individual and corporate trustees",
      "Families with revocable and irrevocable trusts",
      "Beneficiaries of estates in administration",
    ],
    faqs: [
      {
        question: "Does every estate have to file a tax return?",
        answer:
          "Not every estate owes federal estate tax, but an estate or trust with income above the filing threshold generally must file Form 1041. Whether a Form 706 is required depends on the size of the estate and whether a portability election is desired — that's worth evaluating even when no tax is due.",
      },
      {
        question: "When is a portability election worth making?",
        answer:
          "Portability lets a surviving spouse carry over the deceased spouse's unused exclusion, but it generally requires filing a timely Form 706 even when no tax is owed. For many families it's inexpensive insurance against future changes in the exclusion amount.",
      },
    ],
    related: ["individual-tax-preparation", "tax-planning"],
    seo: {
      title: "Estate & Trust Tax Services",
      description:
        "Form 1041 fiduciary returns, final individual returns, Form 706 estate tax filings, beneficiary K-1s, and basis documentation.",
    },
  },

  /* ── ACCOUNTING ───────────────────────────────────────────────────────── */
  {
    slug: "bookkeeping",
    name: "Bookkeeping",
    category: "accounting",
    icon: "clipboard",
    featured: true,
    summary:
      "Categorized transactions and reconciled accounts every month, on a schedule you can rely on.",
    headline: "Books that are current, reconciled, and understandable",
    intro:
      "Most business owners don't need more reports — they need to trust the ones they have. We keep the ledger clean and closed on a fixed schedule, so the numbers you're looking at are the numbers.",
    painPoints: [
      "You find out how the quarter went several months after it ends",
      "Bank and credit card accounts haven't been reconciled in months",
      "Personal and business spending are mixed together",
      "Your chart of accounts has grown to hundreds of unused lines",
      "Your tax preparer starts each year by rebuilding the file",
    ],
    includes: [
      {
        title: "Transaction categorization",
        description:
          "Bank, credit card, and merchant activity coded to a chart of accounts built for your business.",
      },
      {
        title: "Monthly reconciliations",
        description:
          "Every bank, card, and loan account reconciled — the step most commonly skipped.",
      },
      {
        title: "Accounts payable and receivable tracking",
        description: "Open bills and unpaid invoices maintained so aging is accurate.",
      },
      {
        title: "Chart of accounts design",
        description:
          "A structure that produces useful reports and maps cleanly to your tax return.",
      },
      {
        title: "Monthly close on a schedule",
        description:
          "Books closed by a committed date each month, not whenever there's time.",
      },
      {
        title: "Software setup and support",
        description:
          "QuickBooks Online or Xero configured, connected, and maintained.",
      },
    ],
    benefits: [
      "Current numbers when you need to make a decision",
      "A clean file at year end, which lowers the cost of tax work",
      "Lender and investor requests answered in days, not weeks",
      "Fewer errors carried forward into the following year",
    ],
    idealFor: [
      "Small businesses without an in-house accountant",
      "Owners currently doing the books themselves at night",
      "Firms whose books are cleaned up once a year at tax time",
      "Businesses preparing for financing or a sale",
    ],
    faqs: [
      {
        question: "Which accounting software do you support?",
        answer:
          "QuickBooks Online and Xero are our primary platforms. We also work in QuickBooks Desktop and can advise on migration when a platform change makes sense.",
      },
      {
        question: "What does bookkeeping cost?",
        answer:
          "Pricing depends on transaction volume, the number of accounts, and how much cleanup the file needs. We quote a fixed monthly fee after reviewing your current file, so the number doesn't move month to month.",
      },
      {
        question: "Can you take over from our current bookkeeper?",
        answer:
          "Yes. We start with a review of the existing file, document what needs correcting, and agree on a transition date so nothing is dropped mid-month.",
      },
    ],
    related: ["monthly-accounting", "catch-up-bookkeeping", "payroll"],
    seo: {
      title: "Bookkeeping Services for Small Businesses",
      description:
        "Monthly bookkeeping with full account reconciliation, a purpose-built chart of accounts, and a committed close date. QuickBooks Online and Xero.",
    },
  },
  {
    slug: "monthly-accounting",
    name: "Monthly Accounting",
    category: "accounting",
    icon: "calculator",
    featured: true,
    summary:
      "A full monthly close with accrual adjustments and a CPA review — bookkeeping plus the judgment on top.",
    headline: "A real close, reviewed by a CPA, every month",
    intro:
      "Categorized transactions are the starting point. A monthly close adds the accruals, deferrals, and reconciliations that make financial statements accurate — then a CPA reviews them and tells you what changed.",
    painPoints: [
      "Your P&L swings wildly month to month for reasons nobody can explain",
      "Revenue is recorded when cash arrives rather than when it's earned",
      "Prepaid expenses and deferred revenue are never adjusted",
      "The balance sheet has accounts nobody has reviewed in a year",
      "You're managing a growing business off a checking account balance",
    ],
    includes: [
      {
        title: "Full monthly close",
        description:
          "Accruals, deferrals, prepaid amortization, and depreciation posted each period.",
      },
      {
        title: "Balance sheet reconciliation",
        description:
          "Every balance sheet account supported by a schedule that ties.",
      },
      {
        title: "CPA review",
        description:
          "A licensed CPA reviews the close before financials are issued.",
      },
      {
        title: "Monthly financial package",
        description:
          "P&L, balance sheet, and cash flow statement with comparatives and a written summary.",
      },
      {
        title: "Budget-to-actual reporting",
        description:
          "Variances identified and explained where you maintain a budget.",
      },
      {
        title: "A recurring review meeting",
        description:
          "A standing call to walk through results and decide what to do about them.",
      },
    ],
    benefits: [
      "Financial statements accurate enough to manage from",
      "Trends visible early, while there's still time to respond",
      "Year-end work already substantially complete",
      "Statements your bank and investors will accept",
    ],
    idealFor: [
      "Businesses past roughly $1M in revenue",
      "Companies with inventory, deferred revenue, or project accounting",
      "Owners reporting to a board, bank, or investor group",
      "Firms whose bookkeeping is fine but whose reporting isn't",
    ],
    faqs: [
      {
        question: "How is this different from bookkeeping?",
        answer:
          "Bookkeeping records and reconciles what happened. A monthly close adds the accrual-basis adjustments that make the financials accurate for the period, plus a CPA review before the package is issued. Many clients start with bookkeeping and move up as reporting demands grow.",
      },
      {
        question: "When do we receive our financials?",
        answer:
          "We commit to a close date — typically by the 15th business day of the following month — and hold to it. You'll know when the package arrives.",
      },
    ],
    related: ["bookkeeping", "financial-statements", "cfo-advisory"],
    seo: {
      title: "Monthly Accounting & Close Services",
      description:
        "A complete monthly close with accrual adjustments, balance sheet reconciliation, CPA review, and a financial package delivered on a committed date.",
    },
  },
  {
    slug: "financial-statements",
    name: "Financial Statement Preparation",
    category: "accounting",
    icon: "document",
    summary:
      "Compiled financial statements prepared to professional standards for lenders, investors, and boards.",
    headline: "Statements that satisfy the people asking for them",
    intro:
      "When a bank, bonding agent, or investor asks for financial statements, internal reports usually aren't enough. We prepare compiled statements with the notes and presentation those readers expect.",
    painPoints: [
      "A lender or bonding agent has requested CPA-prepared statements",
      "Investor reporting requires a consistent, comparable format",
      "Your statements lack the disclosures a reader expects",
      "A contract or covenant requires statements on a set schedule",
    ],
    includes: [
      {
        title: "Compilation engagements",
        description:
          "Financial statements compiled in accordance with SSARS, with the accountant's report.",
      },
      {
        title: "Full statement set",
        description:
          "Balance sheet, income statement, statement of cash flows, and statement of changes in equity.",
      },
      {
        title: "Notes and disclosures",
        description:
          "Prepared where required, including significant accounting policies and commitments.",
      },
      {
        title: "Comparative presentation",
        description: "Prior-period figures presented alongside the current period.",
      },
      {
        title: "Lender and covenant support",
        description:
          "Covenant calculations prepared and supporting schedules provided to your lender.",
      },
    ],
    benefits: [
      "Statements in the form your lender or investor actually requires",
      "Consistent presentation period over period",
      "Faster diligence, because the record is already organized",
      "One firm handling both the close and the reporting",
    ],
    idealFor: [
      "Businesses with bank debt or covenant reporting",
      "Contractors working with bonding agents",
      "Companies reporting to outside investors or a board",
      "Firms preparing for a transaction",
    ],
    faqs: [
      {
        question: "Do you perform audits and reviews?",
        answer:
          "This template describes compilation services. Audit and review engagements have separate independence, staffing, and peer review requirements — list them here only if your firm actually performs them, and remove this service or edit this answer accordingly.",
      },
      {
        question: "What's the difference between a compilation, a review, and an audit?",
        answer:
          "A compilation presents management's figures in financial statement format without assurance. A review provides limited assurance based on inquiry and analytical procedures. An audit provides reasonable assurance based on substantive testing. Your lender or counterparty determines which level they require.",
      },
    ],
    related: ["monthly-accounting", "business-valuation", "cfo-advisory"],
    seo: {
      title: "Financial Statement Preparation & Compilation",
      description:
        "Compiled financial statements with notes, comparatives, and covenant schedules — prepared for lenders, bonding agents, investors, and boards.",
    },
  },
  {
    slug: "payroll",
    name: "Payroll Services",
    category: "accounting",
    icon: "users",
    summary:
      "Payroll processed, taxes filed, and multi-state registrations kept current.",
    headline: "Payroll that files on time in every state you operate",
    intro:
      "Payroll penalties are among the most expensive and most avoidable. We run the cycles, file the returns, and keep registrations current as your team spreads across state lines.",
    painPoints: [
      "You've received payroll tax notices",
      "New hires live in states where you aren't registered",
      "Contractor versus employee classification hasn't been reviewed",
      "S corporation owner compensation has never been documented",
      "Year-end W-2s and 1099s are a scramble",
    ],
    includes: [
      {
        title: "Payroll processing",
        description:
          "Regular cycles run on schedule with direct deposit and employee self-service.",
      },
      {
        title: "Payroll tax filings",
        description:
          "Forms 941, 940, W-2, W-3, and 1099-NEC prepared and filed, along with state returns.",
      },
      {
        title: "Multi-state registration",
        description:
          "Withholding and unemployment accounts opened and maintained where your employees work.",
      },
      {
        title: "Reasonable compensation analysis",
        description:
          "Documented support for S corporation owner salary levels.",
      },
      {
        title: "Worker classification review",
        description:
          "Contractor versus employee status assessed against federal and state tests.",
      },
      {
        title: "Notice resolution",
        description: "Payroll tax notices researched and answered on your behalf.",
      },
    ],
    benefits: [
      "Filing deadlines met across every jurisdiction",
      "Owner compensation positions that are documented, not assumed",
      "Classification decisions made before an agency questions them",
      "Payroll data that flows straight into your monthly close",
    ],
    idealFor: [
      "Businesses with employees in more than one state",
      "S corporations paying owner-employees",
      "Companies mixing W-2 staff and 1099 contractors",
      "Owners currently running payroll themselves",
    ],
    faqs: [
      {
        question: "Do we need to register in every state where an employee lives?",
        answer:
          "Generally yes. Employing someone in a state usually creates withholding and unemployment insurance obligations there, and often income tax nexus for the business as well. We map the requirements before the first paycheck goes out.",
      },
      {
        question: "How is reasonable compensation determined?",
        answer:
          "It's based on the value of the services the owner actually performs — duties, hours, experience, and comparable market pay. We document the analysis so the position is supportable if it's ever examined.",
      },
    ],
    related: ["bookkeeping", "state-and-local-tax", "business-tax-preparation"],
    seo: {
      title: "Payroll Services & Payroll Tax Compliance",
      description:
        "Payroll processing, federal and multi-state payroll tax filings, worker classification review, and documented reasonable compensation analysis.",
    },
  },
  {
    slug: "catch-up-bookkeeping",
    name: "Catch-Up & Cleanup Bookkeeping",
    category: "accounting",
    icon: "clock",
    summary:
      "Months or years of unreconciled records brought current and made filing-ready.",
    headline: "From months behind to filing-ready",
    intro:
      "Falling behind on the books happens to good businesses. We rebuild the ledger period by period, reconcile it to source documents, and hand back a file you can keep current.",
    painPoints: [
      "Bookkeeping stopped when the business got busy",
      "Prior-year returns can't be filed because the books aren't done",
      "A lender or buyer needs financials you can't produce",
      "A previous bookkeeper left mid-year",
      "The file has duplicate entries, unreconciled accounts, and negative balances",
    ],
    includes: [
      {
        title: "File diagnostic",
        description:
          "A review of the current state with a written scope and fixed quote before work begins.",
      },
      {
        title: "Historical transaction cleanup",
        description:
          "Prior periods categorized, duplicates removed, and errors corrected.",
      },
      {
        title: "Account reconciliation",
        description:
          "Bank, card, and loan accounts reconciled back to statements for every period.",
      },
      {
        title: "Balance sheet correction",
        description:
          "Opening balances, equity accounts, and loan balances corrected and supported.",
      },
      {
        title: "Filing-ready year-end packages",
        description: "Trial balances and schedules prepared for each open tax year.",
      },
      {
        title: "Transition to ongoing service",
        description:
          "A clean handoff into monthly bookkeeping so the file stays current.",
      },
    ],
    benefits: [
      "Back returns can finally be filed accurately",
      "A defensible starting point instead of an estimate",
      "Financials available for lenders, buyers, and partners",
      "A fixed scope and price, quoted before work starts",
    ],
    idealFor: [
      "Businesses several months or years behind",
      "Owners facing unfiled returns or an IRS notice",
      "Companies that lost their bookkeeper unexpectedly",
      "Firms preparing for a transaction with messy records",
    ],
    faqs: [
      {
        question: "How far back can you go?",
        answer:
          "As far as the records support. We commonly rebuild three to six years for unfiled returns. The limiting factor is source documentation — bank statements, merchant reports, and loan records.",
      },
      {
        question: "How long does cleanup take?",
        answer:
          "Most cleanups run two to six weeks depending on volume and how complete the source records are. We give you a timeline with the fixed quote after the diagnostic.",
      },
    ],
    related: ["bookkeeping", "irs-representation", "monthly-accounting"],
    seo: {
      title: "Catch-Up & Cleanup Bookkeeping Services",
      description:
        "Rebuild months or years of back bookkeeping: reconciled accounts, corrected balance sheets, and filing-ready year-end packages at a fixed quoted price.",
    },
  },

  /* ── ADVISORY ─────────────────────────────────────────────────────────── */
  {
    slug: "cfo-advisory",
    name: "CFO Advisory",
    category: "advisory",
    icon: "growth",
    featured: true,
    summary:
      "Senior financial leadership on a fractional basis — forecasting, pricing, hiring plans, and capital decisions.",
    headline: "Financial leadership without a full-time hire",
    intro:
      "There's a stage where a bookkeeper isn't enough and a full-time CFO isn't justified. Fractional CFO work fills it: a rolling forecast, real unit economics, and someone in the room when the decisions get expensive.",
    painPoints: [
      "You're growing but can't tell whether growth is profitable",
      "Hiring and capital decisions are made on instinct",
      "There's no forecast beyond the current quarter",
      "Pricing hasn't been revisited since the business started",
      "You're preparing to raise capital or approach a lender",
    ],
    includes: [
      {
        title: "Rolling 13-week cash forecast",
        description:
          "Weekly cash visibility, updated continuously, so decisions are made against real runway.",
      },
      {
        title: "Annual budget and operating plan",
        description:
          "A plan built bottom-up from your drivers, with monthly budget-to-actual review.",
      },
      {
        title: "Unit economics and margin analysis",
        description:
          "Profitability by product, service line, customer, or location — whichever drives your decisions.",
      },
      {
        title: "Pricing and capacity modeling",
        description:
          "Price changes and hiring plans modeled before you commit to them.",
      },
      {
        title: "Capital and financing support",
        description:
          "Lender packages, covenant modeling, and support through diligence.",
      },
      {
        title: "A standing leadership meeting",
        description:
          "A recurring session with a defined agenda and decisions tracked to completion.",
      },
    ],
    benefits: [
      "Decisions grounded in a model rather than a hunch",
      "Cash constraints seen weeks ahead instead of the week of",
      "Clear visibility into which parts of the business actually earn",
      "A credible financial story for lenders and investors",
    ],
    idealFor: [
      "Businesses between roughly $2M and $50M in revenue",
      "Companies growing quickly or entering a new market",
      "Owners preparing to raise debt or equity",
      "Firms with a controller but no strategic finance function",
    ],
    faqs: [
      {
        question: "How much of your time do we get?",
        answer:
          "Engagements are typically structured as a set number of days per month, with a standing meeting and defined deliverables. We'll recommend a level after understanding your decisions and calendar, and adjust as the business changes.",
      },
      {
        question: "Do we need clean books first?",
        answer:
          "Yes — a forecast built on unreliable data will mislead you. If the books need work, we do that first and are direct about the sequencing.",
      },
      {
        question: "Can you work alongside our existing controller?",
        answer:
          "That's a common arrangement. Your controller owns the close; we focus on forecasting, analysis, and the decisions in front of ownership.",
      },
    ],
    related: ["cash-flow-management", "monthly-accounting", "exit-planning"],
    seo: {
      title: "Fractional CFO & Business Advisory Services",
      description:
        "Fractional CFO support: rolling 13-week cash forecasts, annual operating plans, unit economics, pricing models, and lender-ready financial packages.",
    },
  },
  {
    slug: "cash-flow-management",
    name: "Cash Flow Management",
    category: "advisory",
    icon: "wallet",
    summary:
      "A weekly view of what's coming in and going out, so payroll is never a question.",
    headline: "Know your cash position weeks in advance",
    intro:
      "Profitable businesses run out of cash. We build a rolling forecast tied to your actual receivables, payables, and debt service, then work the levers that move it.",
    painPoints: [
      "Cash is tight even in profitable months",
      "Receivables are collected far later than terms allow",
      "Payroll and tax deposits create a monthly scramble",
      "Seasonal swings aren't planned for",
      "Debt service consumes more cash than expected",
    ],
    includes: [
      {
        title: "13-week rolling forecast",
        description:
          "Weekly inflows and outflows projected from your actual AR, AP, payroll, and debt schedules.",
      },
      {
        title: "Receivables acceleration",
        description:
          "Terms, invoicing cadence, and collection process reviewed and tightened.",
      },
      {
        title: "Payables and vendor terms",
        description:
          "Payment timing structured to protect cash without damaging vendor relationships.",
      },
      {
        title: "Seasonality planning",
        description:
          "Reserves and credit facilities sized against your historical cycle.",
      },
      {
        title: "Debt service review",
        description:
          "Existing obligations mapped and refinancing evaluated where it improves coverage.",
      },
    ],
    benefits: [
      "Advance warning instead of a surprise",
      "Faster collections without straining client relationships",
      "Confidence to invest or hire when the forecast supports it",
      "A financing conversation that starts before you need the money",
    ],
    idealFor: [
      "Seasonal and project-based businesses",
      "Companies growing faster than their working capital",
      "Contractors and firms with long collection cycles",
      "Owners who have had a close call on payroll",
    ],
    faqs: [
      {
        question: "Why 13 weeks?",
        answer:
          "One quarter is far enough out to act on and close enough in to forecast with real accuracy. It's the standard horizon lenders and turnaround professionals use, and it maps naturally to a rolling quarterly cycle.",
      },
      {
        question: "Who maintains the forecast?",
        answer:
          "We build it and update it during the engagement, then hand over a maintained model with documentation if you want to bring it in-house.",
      },
    ],
    related: ["cfo-advisory", "monthly-accounting", "bookkeeping"],
    seo: {
      title: "Cash Flow Management & 13-Week Forecasting",
      description:
        "Rolling 13-week cash forecasts built from real AR, AP, payroll, and debt data — plus receivables acceleration and seasonality planning.",
    },
  },
  {
    slug: "business-valuation",
    name: "Business Valuation",
    category: "advisory",
    icon: "scales",
    summary:
      "A defensible valuation for a sale, buy-in, buy-out, estate filing, or partner dispute.",
    headline: "A valuation you can defend to the other side",
    intro:
      "Valuations get read by buyers, courts, and the IRS. We build the analysis on documented methodology and normalized financials, and we explain how we got to the number.",
    painPoints: [
      "A partner is buying in or being bought out",
      "You're evaluating an offer for the business",
      "An estate or gift filing requires a supported value",
      "A buy-sell agreement references a valuation nobody has performed",
      "A divorce or dispute requires an independent figure",
    ],
    includes: [
      {
        title: "Normalized financial analysis",
        description:
          "Historical results adjusted for owner compensation, one-time items, and non-operating activity.",
      },
      {
        title: "Multiple valuation approaches",
        description:
          "Income, market, and asset approaches applied and reconciled with documented reasoning.",
      },
      {
        title: "Market and transaction data",
        description:
          "Comparable transactions and industry multiples applied to your facts.",
      },
      {
        title: "Discount analysis",
        description:
          "Marketability and control discounts considered and supported where applicable.",
      },
      {
        title: "Written valuation report",
        description:
          "A report documenting methodology, assumptions, and conclusions.",
      },
    ],
    benefits: [
      "A number supported by methodology rather than a rule of thumb",
      "A basis for negotiation both sides can examine",
      "Documentation that stands up to review",
      "Clarity on which levers actually change the value",
    ],
    idealFor: [
      "Owners considering a sale or transition",
      "Partnerships with buy-sell provisions",
      "Estate and gift tax filings",
      "Litigation and dispute support",
    ],
    faqs: [
      {
        question: "How long does a valuation take?",
        answer:
          "Most engagements run four to eight weeks depending on complexity and how quickly records are available. Litigation and tax-reporting engagements often take longer because of the documentation standard.",
      },
      {
        question: "Will the IRS or a court accept the report?",
        answer:
          "No valuation is automatically accepted. What matters is methodology, documentation, and the credentials of the analyst. We prepare reports to the standard the intended use requires and tell you upfront which standard applies.",
      },
    ],
    related: ["exit-planning", "cfo-advisory", "financial-statements"],
    seo: {
      title: "Business Valuation Services",
      description:
        "Defensible business valuations for sales, buy-ins, buy-outs, estate and gift filings, and disputes — with a documented written report.",
    },
  },
  {
    slug: "exit-planning",
    name: "Exit & Succession Planning",
    category: "advisory",
    icon: "handshake",
    summary:
      "Preparing the business — and the after-tax proceeds — for a transition that may be years out.",
    headline: "Start three years before you plan to leave",
    intro:
      "The value an owner realizes is largely determined before the business goes to market. We work on the things buyers pay for and the structuring that determines what you keep.",
    painPoints: [
      "You'd like to exit in the next few years with no plan in place",
      "The business depends heavily on you personally",
      "Records wouldn't survive buyer diligence",
      "You don't know what the sale would net after tax",
      "A family or management transition has never been structured",
    ],
    includes: [
      {
        title: "Readiness assessment",
        description:
          "An honest review of what a buyer would find, and what to fix first.",
      },
      {
        title: "Value driver planning",
        description:
          "The specific items that raise multiple — customer concentration, owner dependence, recurring revenue, clean records.",
      },
      {
        title: "Transaction structure modeling",
        description:
          "Asset versus stock sale, installment terms, and earnout treatment modeled for after-tax proceeds.",
      },
      {
        title: "Pre-transaction tax planning",
        description:
          "Structuring evaluated well ahead of a letter of intent, when changes are still possible.",
      },
      {
        title: "Diligence preparation",
        description:
          "Financial records, contracts, and schedules organized before a buyer asks.",
      },
      {
        title: "Succession alternatives",
        description:
          "Family transfer, management buyout, and third-party sale compared on proceeds and timeline.",
      },
    ],
    benefits: [
      "Fixable problems addressed while there's still time",
      "A clear view of after-tax proceeds, not just headline price",
      "Faster, calmer diligence",
      "A transition timed to your plans rather than to an unsolicited offer",
    ],
    idealFor: [
      "Owners planning a transition in the next one to five years",
      "Family businesses considering a generational transfer",
      "Partnerships preparing for a founder's retirement",
      "Companies that have received unsolicited interest",
    ],
    faqs: [
      {
        question: "When should exit planning start?",
        answer:
          "Three years before a target exit is a reasonable minimum. Several of the highest-impact items — clean financial history, reduced owner dependence, entity structuring — need multiple years of track record to be credible to a buyer.",
      },
      {
        question: "Do you broker the sale?",
        answer:
          "This template describes advisory and tax structuring work, not brokerage. Investment banking and business brokerage require separate licensing — edit this answer to match what your firm actually does and who you refer to.",
      },
    ],
    related: ["business-valuation", "cfo-advisory", "tax-planning"],
    seo: {
      title: "Exit & Succession Planning for Business Owners",
      description:
        "Prepare your business and your after-tax proceeds for a transition: readiness assessment, value drivers, deal structure modeling, and diligence preparation.",
    },
  },
];

/**
 * Category grouping used by navigation, the services index, and the footer.
 * `services` is derived from the array above, so a service only has to be
 * defined once.
 */
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "tax",
    name: "Tax Services",
    summary:
      "Preparation, planning, and representation for individuals, businesses, estates, and trusts.",
    icon: "receipt",
    services: services.filter((s) => s.category === "tax"),
  },
  {
    slug: "accounting",
    name: "Accounting & Bookkeeping",
    summary:
      "A clean ledger, a real monthly close, payroll, and statements your lender will accept.",
    icon: "calculator",
    services: services.filter((s) => s.category === "accounting"),
  },
  {
    slug: "advisory",
    name: "Advisory & CFO Services",
    summary:
      "Forecasting, cash flow, valuation, and the financial leadership behind bigger decisions.",
    icon: "growth",
    services: services.filter((s) => s.category === "advisory"),
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const getServices = (slugs: string[]) =>
  slugs.map(getService).filter((s): s is Service => Boolean(s));

export const featuredServices = services.filter((s) => s.featured);
