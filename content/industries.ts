import type { Industry } from "./types";

/**
 * Industry pages.
 *
 * Only list industries the firm has genuine experience serving — these pages
 * make an expertise claim. Each entry generates a page at /industries/[slug]
 * and is linked from navigation, the homepage, and the sitemap automatically.
 */
export const industries: Industry[] = [
  {
    slug: "small-business",
    name: "Small Business",
    icon: "building",
    summary:
      "Owner-operated companies that need accurate books, a real close, and a CPA who answers the phone.",
    headline: "Accounting built for owner-operated businesses",
    intro:
      "You're running operations, sales, and hiring at the same time. Accounting shouldn't be one more thing you do at 10pm. We keep the books current, file on time, and give you numbers you can actually manage from.",
    challenges: [
      {
        title: "Reporting that arrives too late to use",
        description:
          "Annual cleanup at tax time tells you how last year went. It doesn't help you price a job in March.",
      },
      {
        title: "Blurred personal and business finances",
        description:
          "Shared cards and owner draws make margins impossible to read and complicate the return.",
      },
      {
        title: "Entity structure chosen once and never revisited",
        description:
          "The structure that fit at launch often stops fitting well before anyone reconsiders it.",
      },
      {
        title: "Tax bills that arrive as a surprise",
        description:
          "Without projections, a good year turns into an unfunded liability the following April.",
      },
    ],
    approach: [
      {
        title: "Monthly books, closed on a date",
        description:
          "Reconciled accounts and a financial package delivered on a committed schedule each month.",
      },
      {
        title: "Quarterly check-ins with projections",
        description:
          "We update the tax projection quarterly so you can fund it as you go rather than all at once.",
      },
      {
        title: "Entity and compensation review",
        description:
          "An annual look at whether your structure and owner compensation still make sense.",
      },
      {
        title: "One point of contact",
        description:
          "The same team handles the books, the return, and the questions in between.",
      },
    ],
    relevantServices: [
      "bookkeeping",
      "monthly-accounting",
      "business-tax-preparation",
      "tax-planning",
      "payroll",
    ],
    faqs: [
      {
        question: "We're small. Do we really need a CPA?",
        answer:
          "Not every business does, and we'll say so. The point where it usually pays for itself is when payroll starts, when the entity becomes an S corporation or partnership, when you operate in more than one state, or when decisions get large enough that a wrong assumption is expensive.",
      },
      {
        question: "Can you handle both the bookkeeping and the tax return?",
        answer:
          "Yes, and it's usually less expensive that way. When the same team closes the books, year-end tax work starts from a reconciled file instead of a reconstruction.",
      },
    ],
    seo: {
      title: "CPA & Accounting Services for Small Businesses",
      description:
        "Monthly bookkeeping, tax preparation, payroll, and quarterly planning for owner-operated small businesses — from a CPA firm that answers the phone.",
    },
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "home",
    summary:
      "Investors, syndicators, and property managers navigating depreciation, basis, and passive activity rules.",
    headline: "Accounting for investors who think in properties, not periods",
    intro:
      "Real estate tax turns on details: basis, depreciation method, passive activity grouping, and how a disposition is structured. We handle entity-level accounting and the owner-level planning that determines what you actually keep.",
    challenges: [
      {
        title: "Passive activity losses that never get used",
        description:
          "Losses suspend year after year when grouping elections and participation aren't documented.",
      },
      {
        title: "Depreciation left on the table",
        description:
          "Buildings placed in service without a cost segregation analysis often depreciate far more slowly than they could.",
      },
      {
        title: "Basis tracked poorly across entities",
        description:
          "Multi-entity structures lose track of basis, and it surfaces at exactly the wrong moment — a sale.",
      },
      {
        title: "1031 exchanges structured too late",
        description:
          "Exchange requirements are strict and the clock starts at closing. Decisions made afterward are usually decisions foreclosed.",
      },
    ],
    approach: [
      {
        title: "Property-level books",
        description:
          "Chart of accounts and reporting by property and entity, so performance is visible per asset.",
      },
      {
        title: "Depreciation and cost segregation coordination",
        description:
          "Depreciation schedules maintained and cost segregation evaluated where the economics support it.",
      },
      {
        title: "Passive activity and participation planning",
        description:
          "Grouping elections and material participation documented contemporaneously, not reconstructed.",
      },
      {
        title: "Disposition planning",
        description:
          "Sale, exchange, and installment structures modeled before a property goes under contract.",
      },
    ],
    relevantServices: [
      "individual-tax-preparation",
      "business-tax-preparation",
      "tax-planning",
      "bookkeeping",
      "estate-and-trust-tax",
    ],
    faqs: [
      {
        question: "Do I qualify as a real estate professional for tax purposes?",
        answer:
          "It depends on hours and material participation, and the tests are specific. It's a fact question that has to be documented as the year happens — contemporaneous records are far stronger than a summary written after the fact.",
      },
      {
        question: "Is a cost segregation study worth it?",
        answer:
          "It depends on the property's basis, your holding period, and whether you can currently use the accelerated deductions. We model it before recommending one, because the study has a cost and accelerated depreciation is recaptured on sale.",
      },
    ],
    seo: {
      title: "CPA Services for Real Estate Investors & Owners",
      description:
        "Real estate accounting and tax: property-level books, depreciation and cost segregation coordination, passive activity planning, and disposition modeling.",
    },
  },
  {
    slug: "healthcare",
    name: "Healthcare & Medical Practices",
    icon: "stethoscope",
    summary:
      "Physician groups, dental practices, and clinics balancing payer cycles, partner comp, and growth.",
    headline: "Practice finances that keep pace with patient care",
    intro:
      "Independent practices carry unusual financial complexity: payer mix, long collection cycles, equipment financing, and partner compensation formulas. We handle the accounting and the planning around all of it.",
    challenges: [
      {
        title: "Long, uneven collection cycles",
        description:
          "Revenue recognized at billing and collected months later makes cash planning genuinely hard.",
      },
      {
        title: "Partner compensation formulas nobody can reconcile",
        description:
          "Production-based comp needs accurate cost allocation to be fair — and to be trusted.",
      },
      {
        title: "Equipment purchases decided without tax modeling",
        description:
          "Section 179, bonus depreciation, and financing structure meaningfully change the after-tax cost.",
      },
      {
        title: "Retirement plans that no longer fit the practice",
        description:
          "As partner income grows, a basic 401(k) often leaves substantial deferral capacity unused.",
      },
    ],
    approach: [
      {
        title: "Accrual-basis practice reporting",
        description:
          "Revenue and receivables presented so you can see production, collection, and margin separately.",
      },
      {
        title: "Provider and location profitability",
        description:
          "Reporting by provider, location, or service line to support compensation and expansion decisions.",
      },
      {
        title: "Capital expenditure modeling",
        description:
          "Equipment and buildout decisions modeled on after-tax cash cost before you sign.",
      },
      {
        title: "Retirement plan design review",
        description:
          "Plan structures compared as partner income grows, including profit sharing and cash balance designs.",
      },
    ],
    relevantServices: [
      "monthly-accounting",
      "business-tax-preparation",
      "tax-planning",
      "payroll",
      "cfo-advisory",
    ],
    faqs: [
      {
        question: "Do you work with practices that use a specialized PM system?",
        answer:
          "Yes. We work from the reports your practice management or EHR system produces and reconcile them into the general ledger, rather than asking you to change clinical systems for accounting convenience.",
      },
      {
        question: "Can you help evaluate an offer from a larger group or MSO?",
        answer:
          "Yes. Those transactions turn on deal structure, post-close compensation, and after-tax proceeds. We model the offer against continuing independently so the comparison is on real numbers.",
      },
    ],
    seo: {
      title: "CPA Services for Medical & Dental Practices",
      description:
        "Accounting and tax for independent healthcare practices: accrual reporting, provider profitability, equipment modeling, and retirement plan design.",
    },
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: "briefcase",
    summary:
      "Law firms, agencies, consultancies, and engineering firms managing utilization and partner comp.",
    headline: "Financial clarity for firms that sell expertise",
    intro:
      "When your product is time, margin lives in utilization, realization, and pricing. We build reporting around those drivers and handle the partner-level tax work that comes with a pass-through firm.",
    challenges: [
      {
        title: "Profitability by client or matter is invisible",
        description:
          "Firm-level margin can look healthy while specific engagements lose money every month.",
      },
      {
        title: "Realization gaps that go unmeasured",
        description:
          "The distance between hours worked, hours billed, and cash collected is where margin quietly disappears.",
      },
      {
        title: "Partner distributions outpacing cash",
        description:
          "Distribution policies set on profit rather than cash create year-end strain.",
      },
      {
        title: "Trust and retainer accounting",
        description:
          "Client funds carry compliance obligations that general bookkeeping often handles incorrectly.",
      },
    ],
    approach: [
      {
        title: "Engagement-level reporting",
        description:
          "Revenue and cost tracked by client, matter, or project so pricing decisions have a basis.",
      },
      {
        title: "Utilization and realization metrics",
        description:
          "Reporting that connects time entry to billing to collection.",
      },
      {
        title: "Partner compensation and distribution planning",
        description:
          "Draw schedules built against forecast cash and each partner's tax obligations.",
      },
      {
        title: "Trust account reconciliation",
        description:
          "Client trust and retainer balances reconciled separately, on schedule.",
      },
    ],
    relevantServices: [
      "monthly-accounting",
      "business-tax-preparation",
      "tax-planning",
      "cfo-advisory",
      "payroll",
    ],
    faqs: [
      {
        question: "Can you report profitability by client or matter?",
        answer:
          "Yes, provided time and expense are captured against those dimensions. If your current system doesn't support it, we'll help design a chart of accounts and tracking approach that does before building the reporting.",
      },
      {
        question: "How should partner distributions be scheduled?",
        answer:
          "Against forecast cash and each partner's projected tax liability, not against book profit. We build a schedule that funds quarterly estimates first and keeps a working capital floor in the firm.",
      },
    ],
    seo: {
      title: "CPA Services for Professional Services Firms",
      description:
        "Accounting and tax for law firms, agencies, and consultancies: matter-level profitability, realization reporting, partner distributions, and trust reconciliation.",
    },
  },
  {
    slug: "contractors",
    name: "Construction & Contractors",
    icon: "hardhat",
    summary:
      "General contractors, subs, and specialty trades managing job costing, retainage, and bonding.",
    headline: "Job costing that tells you which jobs actually made money",
    intro:
      "Construction accounting is its own discipline: percentage of completion, retainage, WIP schedules, and bonding requirements. We produce the reporting your surety and your bank expect, and the job-level detail you need to bid.",
    challenges: [
      {
        title: "Job profitability known only after closeout",
        description:
          "Without WIP reporting, an overrun surfaces when it's already too late to price around it.",
      },
      {
        title: "Retainage distorting the picture",
        description:
          "Receivables and cash diverge sharply when retainage isn't tracked separately.",
      },
      {
        title: "Bonding capacity constrained by reporting",
        description:
          "Sureties evaluate working capital and equity from statements. Weak reporting limits the work you can take.",
      },
      {
        title: "Change orders recognized inconsistently",
        description:
          "Unapproved change orders recorded as revenue overstate results and understate risk.",
      },
    ],
    approach: [
      {
        title: "Job cost accounting",
        description:
          "Labor, materials, subcontractors, and equipment coded to jobs and phases.",
      },
      {
        title: "WIP schedules and percentage of completion",
        description:
          "Monthly WIP with over- and under-billings computed and explained.",
      },
      {
        title: "Bonding and lender packages",
        description:
          "Statements and schedules prepared in the format your surety and bank require.",
      },
      {
        title: "Equipment and depreciation planning",
        description:
          "Purchase versus lease modeled with the tax treatment included.",
      },
    ],
    relevantServices: [
      "monthly-accounting",
      "financial-statements",
      "business-tax-preparation",
      "cash-flow-management",
      "payroll",
    ],
    faqs: [
      {
        question: "Do you prepare WIP schedules for our surety?",
        answer:
          "Yes. Monthly or quarterly WIP schedules with over- and under-billings, contract values, costs to date, and estimated costs to complete — presented in the format sureties expect.",
      },
      {
        question: "Which accounting method should we use for tax?",
        answer:
          "It depends on revenue, contract length, and whether contracts are home construction. Percentage of completion, completed contract, and cash methods each have eligibility rules and cash flow consequences. We evaluate the options against your contract mix.",
      },
    ],
    seo: {
      title: "CPA Services for Construction Companies & Contractors",
      description:
        "Construction accounting: job costing, WIP schedules, percentage of completion, retainage tracking, and bonding and lender-ready financial statements.",
    },
  },
  {
    slug: "startups",
    name: "Startups & Technology",
    icon: "rocket",
    summary:
      "Founders managing runway, equity, R&D credits, and investor reporting on a compressed timeline.",
    headline: "Books your investors trust and runway you can see",
    intro:
      "Early-stage companies need clean records, credible reporting, and tax positions that hold up in diligence. We set the foundation properly so a financing round doesn't turn into a cleanup project.",
    challenges: [
      {
        title: "Diligence exposing years of informal records",
        description:
          "A raise stalls while months of bookkeeping and missing filings are reconstructed under deadline.",
      },
      {
        title: "R&D credits never claimed",
        description:
          "Pre-revenue companies can often apply the credit against payroll taxes, but the study has to be documented.",
      },
      {
        title: "Equity and 409A questions handled late",
        description:
          "Option grants, 83(b) elections, and valuations have hard deadlines with real consequences.",
      },
      {
        title: "Multi-state exposure from a remote team",
        description:
          "Distributed hiring creates payroll and income tax obligations that accumulate quietly.",
      },
    ],
    approach: [
      {
        title: "Accrual books from the start",
        description:
          "GAAP-oriented reporting that investors and acquirers can read without adjustment.",
      },
      {
        title: "Runway and burn reporting",
        description:
          "Monthly burn, runway, and cash forecasting tied to the operating plan.",
      },
      {
        title: "R&D credit studies",
        description:
          "Qualifying activities documented and the payroll tax offset claimed where eligible.",
      },
      {
        title: "Diligence-ready records",
        description:
          "Filings, equity records, and state registrations kept current so a data room is a matter of days.",
      },
    ],
    relevantServices: [
      "monthly-accounting",
      "business-tax-preparation",
      "state-and-local-tax",
      "cfo-advisory",
      "payroll",
    ],
    faqs: [
      {
        question: "We're pre-revenue. Can we still use the R&D credit?",
        answer:
          "Possibly. Qualified small businesses can elect to apply a portion of the research credit against employer payroll taxes rather than income tax, which is what makes it useful pre-revenue. Eligibility depends on gross receipts history and the activities themselves, which have to be documented.",
      },
      {
        question: "When should we move from cash to accrual accounting?",
        answer:
          "Before you raise institutional capital, and generally once deferred revenue or meaningful receivables exist. Converting later under diligence pressure is more expensive than starting correctly.",
      },
    ],
    seo: {
      title: "CPA & Accounting Services for Startups",
      description:
        "Startup accounting and tax: accrual books, burn and runway reporting, R&D credit studies, equity and 409A coordination, and diligence-ready records.",
    },
  },
];

export const getIndustry = (slug: string) =>
  industries.find((i) => i.slug === slug);
