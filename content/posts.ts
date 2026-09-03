import type { Post } from "./types";

/**
 * Resource center articles.
 *
 * Content is stored as structured blocks so the template ships without an MDX
 * toolchain. If you'd rather author in Markdown, swap this file for an MDX
 * pipeline — the blog components read `Post`, so only the loader changes.
 *
 * ⚠️  IMPORTANT: These articles are deliberately written around principles and
 * process rather than specific dollar thresholds, rates, or deadlines, because
 * those change annually and a stale figure on a CPA firm's website is a
 * liability. Where a figure is genuinely needed, cite the year it applies to and
 * add it to your annual content review. Have a licensed CPA at the firm review
 * every article before it is published under the firm's name.
 */
export const postCategories = [
  "Tax Tips",
  "Tax Planning",
  "Business Accounting",
  "Small Business",
  "Financial Planning",
  "IRS & Compliance",
  "Industry Insights",
  "Business Advisory",
] as const;

export const posts: Post[] = [
  {
    slug: "why-your-tax-bill-surprised-you",
    title: "Why Your Tax Bill Surprised You (and How to Stop It Happening Again)",
    category: "Tax Planning",
    date: "2026-08-18",
    author: "margaret-chen",
    readingTime: "6 min read",
    image: null,
    featured: true,
    excerpt:
      "An unexpected balance due is almost never a mistake on the return. It's usually one of five things that happened during the year — all of which are visible in advance.",
    body: [
      {
        type: "paragraph",
        text: "Every April, a handful of clients call with the same question phrased slightly differently: how did this happen? The return is correct. The number is still much larger than expected. Something went wrong somewhere, and it wasn't in the preparation.",
      },
      {
        type: "paragraph",
        text: "It usually wasn't. In our experience, an unexpected balance due traces back to one of five causes, and each of them is visible months before the return is filed.",
      },
      { type: "heading", text: "1. Withholding stopped matching your income" },
      {
        type: "paragraph",
        text: "Withholding is calculated from a form you filled out — often years ago, sometimes at a different job, usually before a raise, a bonus structure, or a spouse's return to work. A W-4 that was correct at the time can be substantially wrong two promotions later.",
      },
      {
        type: "paragraph",
        text: "This is the most common cause and the easiest to fix. A mid-year projection tells you whether your current withholding will land you close, and there's still time to adjust the remaining paychecks rather than write one large check in April.",
      },
      { type: "heading", text: "2. Income arrived without withholding attached" },
      {
        type: "paragraph",
        text: "Consulting income, a Schedule K-1, rental profit, capital gains, and most retirement distributions arrive without anything withheld. Every dollar of that income carries a tax liability that has to be funded some other way — usually through quarterly estimated payments.",
      },
      {
        type: "list",
        items: [
          "1099 and consulting income",
          "K-1 income from a partnership or S corporation",
          "Rental profit after depreciation",
          "Realized capital gains, including from a rebalanced portfolio",
          "Retirement account distributions with insufficient withholding elected",
        ],
      },
      { type: "heading", text: "3. Equity compensation was withheld at a flat rate" },
      {
        type: "paragraph",
        text: "RSU vesting is commonly withheld at a flat supplemental rate. If your marginal rate is higher than that flat rate, the shortfall is yours to make up at filing. This surprises people every single year, and the gap grows with the size of the vest.",
      },
      {
        type: "callout",
        title: "Worth checking before your next vest",
        text: "Compare the withholding rate on your last vesting statement against your actual marginal rate. If there's a gap, the fix is either additional withholding elsewhere or an estimated payment in the same quarter as the vest — not a decision to make next April.",
      },
      { type: "heading", text: "4. A good year moved you across a threshold" },
      {
        type: "paragraph",
        text: "Several parts of the tax code phase in or out based on income. Credits shrink, additional taxes begin, and deduction limitations tighten. None of these announce themselves. A year that was better than the last can trigger two or three at once, and the combined effect is larger than any single one would suggest.",
      },
      { type: "heading", text: "5. Your business had a profitable year and you didn't fund it" },
      {
        type: "paragraph",
        text: "For pass-through owners, business profit lands on your personal return whether or not you took the cash out. A strong year in the business creates a personal liability that has to be funded from somewhere — and if the cash was reinvested in inventory, equipment, or payroll, it may not be sitting anywhere convenient.",
      },
      { type: "heading", text: "The fix is a projection, not a better return" },
      {
        type: "paragraph",
        text: "None of these is a preparation problem. By the time a return is being prepared, the year is closed and the outcome is set. What changes the experience is running a projection during the year — mid-year and again in the fall — so you know the number early enough to adjust withholding, size an estimated payment, or accelerate a deduction.",
      },
      {
        type: "paragraph",
        text: "The goal isn't to eliminate the liability. It's to know about it while you still have options, and to have the cash set aside when it comes due.",
      },
      {
        type: "quote",
        text: "A tax surprise is a planning failure, not a filing failure. The return just delivers the news.",
      },
    ],
    seo: {
      description:
        "Five reasons an unexpected tax bill happens — withholding drift, untaxed income, flat-rate equity withholding, threshold effects, and unfunded pass-through profit — and how mid-year projections prevent them.",
    },
  },
  {
    slug: "s-corporation-reasonable-compensation",
    title: "Reasonable Compensation for S Corporation Owners: What Actually Supports Your Number",
    category: "Tax Tips",
    date: "2026-07-22",
    author: "david-okonkwo",
    readingTime: "7 min read",
    image: null,
    featured: true,
    excerpt:
      "There is no safe percentage. What holds up is a documented analysis of the work the owner actually performs — and most S corporations don't have one.",
    body: [
      {
        type: "paragraph",
        text: "Ask five business owners how they set their S corporation salary and you'll hear five rules of thumb — a percentage of distributions, a percentage of profit, a round number that felt defensible. None of these appear anywhere in the law, and none of them is what an examiner evaluates.",
      },
      { type: "heading", text: "What the standard actually is" },
      {
        type: "paragraph",
        text: "An S corporation owner who performs services for the company must be paid reasonable compensation for those services, and that compensation is subject to payroll taxes. Distributions above that amount are not. The incentive to understate salary is obvious, which is why this is a recurring examination area.",
      },
      {
        type: "paragraph",
        text: "\"Reasonable\" means what the company would pay someone else to do the same work. Not a percentage of anything — a market wage for a defined role.",
      },
      { type: "heading", text: "The factors that carry weight" },
      {
        type: "list",
        items: [
          "The duties the owner actually performs, described specifically",
          "Hours worked, including seasonal variation",
          "Training, credentials, and experience the role requires",
          "What the company pays non-owner employees doing comparable work",
          "Compensation data for the role in your industry and geography",
          "What the business would have to pay to replace the owner's function",
        ],
      },
      { type: "subheading", text: "Where the analysis usually goes wrong" },
      {
        type: "paragraph",
        text: "The most common error is treating the owner as one undifferentiated role. In a small company, the owner is frequently doing three jobs — selling, delivering the service, and running operations. Each of those has a market rate, and the honest analysis allocates hours across them and prices each one.",
      },
      {
        type: "paragraph",
        text: "The second most common error is never revisiting the number. A salary set when the company had three employees and $600,000 in revenue is not automatically defensible at twenty employees and $5 million.",
      },
      {
        type: "callout",
        title: "The documentation is the deliverable",
        text: "The analysis matters more than the number it produces. A file containing the role description, hour allocation, comparable wage data, and the reasoning is what turns your salary from an assertion into a position. Prepare it contemporaneously — a study written after a notice arrives carries far less weight.",
      },
      { type: "heading", text: "What happens if the number is too low" },
      {
        type: "paragraph",
        text: "On examination, distributions can be recharacterized as wages. That brings employment taxes, interest, and potentially penalties, and it can extend to multiple open years. Because the adjustment applies to the entity, it also affects every owner in the same position.",
      },
      { type: "heading", text: "And if it's too high?" },
      {
        type: "paragraph",
        text: "You've overpaid employment taxes on the excess. That's a real cost, and it's the reason the answer isn't simply \"pay yourself a lot.\" The point is to land on a supportable figure, document how you got there, and revisit it as the business changes.",
      },
      {
        type: "paragraph",
        text: "If your current salary was set by a rule of thumb and hasn't been reviewed in a few years, that's worth an afternoon of work before it becomes a conversation with an examiner.",
      },
    ],
    seo: {
      description:
        "How reasonable compensation for S corporation owners is actually determined: the factors that matter, how to allocate hours across roles, and why contemporaneous documentation is the deliverable.",
    },
  },
  {
    slug: "monthly-close-checklist",
    title: "What a Real Monthly Close Includes (and Why Categorized Transactions Aren't Enough)",
    category: "Business Accounting",
    date: "2026-06-30",
    author: "priya-raman",
    readingTime: "5 min read",
    image: null,
    featured: true,
    excerpt:
      "Most small business 'monthly reporting' is a categorized bank feed. Here's the gap between that and financials you can manage from.",
    body: [
      {
        type: "paragraph",
        text: "When a prospective client tells us their books are current, they usually mean transactions have been categorized through last month. That's necessary, and it isn't the same as a close.",
      },
      {
        type: "paragraph",
        text: "The difference shows up the first time you try to compare two months and can't explain why one looks so much better than the other.",
      },
      { type: "heading", text: "What gets skipped" },
      {
        type: "list",
        items: [
          "Bank, credit card, and loan reconciliation to actual statements",
          "Accrual of expenses incurred but not yet billed",
          "Deferral of revenue collected but not yet earned",
          "Amortization of prepaid insurance, software, and deposits",
          "Depreciation on fixed assets",
          "Inventory adjustment to a physical or perpetual count",
          "Payroll accrual across period boundaries",
          "Review of every balance sheet account against a supporting schedule",
        ],
      },
      {
        type: "paragraph",
        text: "Skip these and the profit and loss statement becomes a cash movement report wearing an income statement's clothing. Expenses land in the month they were paid rather than the month they were incurred. A single annual insurance payment makes one month look terrible and eleven months look better than they were.",
      },
      { type: "heading", text: "The balance sheet is where errors hide" },
      {
        type: "paragraph",
        text: "Most owners read the P&L and ignore the balance sheet. That's backwards from a diagnostic standpoint: nearly every P&L error has a corresponding balance sheet symptom. Undeposited funds that keep growing, an unreconciled clearing account, a negative liability, an accounts receivable balance nobody recognizes — each of these means the income statement above it is wrong.",
      },
      {
        type: "callout",
        title: "A quick self-check",
        text: "Pull your balance sheet as of last month end. Can someone produce a supporting schedule for every line — a reconciliation, an aging report, an amortization schedule, a loan statement? Every account without one is an account nobody has actually verified.",
      },
      { type: "heading", text: "A close needs a date" },
      {
        type: "paragraph",
        text: "The other half of a real close is that it finishes on a committed date. \"When we get to it\" produces reporting you can't plan around, and reporting you can't plan around doesn't get used. Pick a date — the tenth business day, the fifteenth — and treat it the way you'd treat a customer deadline.",
      },
      { type: "heading", text: "Then someone has to read it" },
      {
        type: "paragraph",
        text: "A closed set of books that nobody reviews is a compliance exercise. The month is worth thirty minutes: compare to prior periods, ask about anything that moved more than expected, and decide what, if anything, you're going to do differently. That review is where the accounting starts earning its cost.",
      },
    ],
    seo: {
      description:
        "The accrual adjustments, reconciliations, and balance sheet review that separate a real monthly close from categorized transactions — plus a self-check for your own books.",
    },
  },
  {
    slug: "irs-notice-what-to-do-first",
    title: "An IRS Notice Arrived. Here's What to Do in the First 48 Hours",
    category: "IRS & Compliance",
    date: "2026-05-14",
    author: "david-okonkwo",
    readingTime: "5 min read",
    image: null,
    excerpt:
      "Most notices are routine and a meaningful share are wrong. The two worst responses are ignoring it and paying it immediately.",
    body: [
      {
        type: "paragraph",
        text: "A letter from the IRS produces one of two reactions: put it in a drawer, or pay whatever it says as fast as possible. Both are mistakes, and they're mistakes in opposite directions.",
      },
      { type: "heading", text: "First: read the whole thing, including the back" },
      {
        type: "paragraph",
        text: "Notices carry a number in the upper right — CP2000, CP14, LT11, and so on — which tells you what kind of notice it is and what rights come with it. Critically, they carry a response deadline, and some deadlines are jurisdictional: miss them and specific appeal rights are gone regardless of the merits.",
      },
      {
        type: "list",
        items: [
          "The notice number and the tax year it concerns",
          "The response deadline, and what happens if you miss it",
          "The specific item being adjusted",
          "Whether the notice is proposing a change or assessing one",
          "The appeal or petition rights described, usually on later pages",
        ],
      },
      { type: "heading", text: "Second: check whether it's actually correct" },
      {
        type: "paragraph",
        text: "Many notices are automated matching letters — the agency's records show a document you didn't report. Sometimes that's right. Often it's a security sale reported at gross proceeds with no basis, income reported under the wrong taxpayer identification number, or a document that was reported on the return in a different place than the matching program expected.",
      },
      {
        type: "paragraph",
        text: "Compare the notice line by line against the filed return and the underlying documents before accepting anything.",
      },
      {
        type: "callout",
        title: "Don't pay a proposed adjustment reflexively",
        text: "A proposed adjustment isn't an assessment. Paying it can be read as agreement and can make the position harder to unwind. If you disagree, respond in writing before the deadline and say so.",
      },
      { type: "heading", text: "Third: respond in writing, on time" },
      {
        type: "paragraph",
        text: "Respond by the deadline even if you're still gathering documents — a timely response that requests additional time is enormously better than silence. Send correspondence in a way that produces proof of delivery, keep a complete copy, and reference the notice number on every page.",
      },
      { type: "heading", text: "When to bring in representation" },
      {
        type: "paragraph",
        text: "A simple math notice you understand and agree with can be handled directly. Bring in a CPA, enrolled agent, or tax attorney when the notice proposes a substantial change, when it concerns a position you can't fully document, when it involves payroll taxes, when it opens an examination, or when there are unfiled returns behind it.",
      },
      {
        type: "paragraph",
        text: "With a power of attorney on file, correspondence and calls go to your representative instead of to you. For most people, that alone is worth the engagement.",
      },
    ],
    seo: {
      description:
        "What to do in the first 48 hours after an IRS notice: read the notice number and deadline, verify the adjustment against your return, respond in writing on time, and know when to bring in representation.",
    },
  },
  {
    slug: "remote-employees-state-tax-obligations",
    title: "One Remote Hire, Five New Filing Obligations",
    category: "Small Business",
    date: "2026-04-09",
    author: "david-okonkwo",
    readingTime: "6 min read",
    image: null,
    excerpt:
      "Hiring someone in a new state is a compliance event, not just an HR one. Here's what it triggers and the order to handle it in.",
    body: [
      {
        type: "paragraph",
        text: "A client hires a great candidate who happens to live two states away. Everyone's pleased. Nobody mentions that the company now has registration, withholding, and possibly income tax obligations in a state it has never filed in.",
      },
      {
        type: "paragraph",
        text: "This is the single most common compliance gap we find in growing companies, and it accumulates quietly. The obligations start with the first paycheck, not with the first notice.",
      },
      { type: "heading", text: "What a single out-of-state employee can trigger" },
      {
        type: "list",
        items: [
          "State income tax withholding registration and periodic filings",
          "State unemployment insurance registration and quarterly wage reports",
          "Local income tax withholding in states with municipal taxes",
          "Corporate income or franchise tax nexus for the business itself",
          "State-specific requirements — paid leave programs, workers' compensation, mandated notices",
        ],
      },
      {
        type: "paragraph",
        text: "The fourth one is the one that catches people. In many states, having an employee working there is enough to create income tax nexus for the company, which means an entity return and apportionment — not just payroll registration.",
      },
      { type: "heading", text: "The order to do this in" },
      {
        type: "subheading", text: "Before the first paycheck",
      },
      {
        type: "paragraph",
        text: "Register for withholding and unemployment in the employee's work state. Registration usually takes days to weeks, and you cannot legally withhold and remit without an account number.",
      },
      { type: "subheading", text: "In the first month" },
      {
        type: "paragraph",
        text: "Confirm the state's specific requirements: workers' compensation coverage, paid family leave or disability programs, required new-hire reporting, and any state-mandated employment notices.",
      },
      { type: "subheading", text: "In the first quarter" },
      {
        type: "paragraph",
        text: "Evaluate whether the hire created income or franchise tax nexus, and add the state to your compliance calendar if so. This is the step that gets skipped, because payroll is running fine and nothing appears to be wrong.",
      },
      {
        type: "callout",
        title: "If you're already behind",
        text: "Most states offer voluntary disclosure programs that limit the lookback period and typically waive penalties. They are only available before the state contacts you. Once a notice or nexus questionnaire arrives, that option is generally gone.",
      },
      { type: "heading", text: "The reciprocity question" },
      {
        type: "paragraph",
        text: "Some neighboring states have reciprocity agreements that simplify withholding for cross-border commuters. These are specific bilateral arrangements, not a general principle — they don't apply to a fully remote employee several states away, and assuming otherwise is a common and expensive error.",
      },
      {
        type: "paragraph",
        text: "The practical rule: before extending an offer to someone in a state you don't currently file in, spend twenty minutes finding out what it obligates you to. It's a much shorter conversation than the one that starts with a notice.",
      },
    ],
    seo: {
      description:
        "What hiring one out-of-state remote employee triggers: withholding and unemployment registration, local taxes, potential income tax nexus, and how to sequence compliance.",
    },
  },
  {
    slug: "thirteen-week-cash-forecast",
    title: "The 13-Week Cash Forecast: The Only Report Some Owners Need",
    category: "Business Advisory",
    date: "2026-03-05",
    author: "james-whitfield",
    readingTime: "6 min read",
    image: null,
    excerpt:
      "Profitable companies run out of cash. A rolling weekly forecast is the tool that shows you the problem while you can still do something about it.",
    body: [
      {
        type: "paragraph",
        text: "Profit and cash are different things, and the gap between them is where otherwise healthy businesses get into trouble. A company can post its best quarter and still be unable to make payroll, because profit was consumed by receivables, inventory, and debt principal — none of which appear on the income statement.",
      },
      { type: "heading", text: "Why thirteen weeks" },
      {
        type: "paragraph",
        text: "One quarter is far enough ahead to act on and close enough in to forecast accurately. Beyond that, weekly precision degrades into guesswork. It's the horizon lenders and restructuring professionals use, and it maps to a natural rolling cycle: each week you add one, drop one, and update actuals.",
      },
      { type: "heading", text: "What goes into it" },
      {
        type: "paragraph",
        text: "This is a cash document, not an accrual one. Every line is a dated movement of money.",
      },
      {
        type: "list",
        items: [
          "Expected collections, built from your actual AR aging and each customer's payment behavior — not from invoice terms",
          "Payroll by pay date, including employer taxes",
          "Rent, debt service, and other fixed obligations by due date",
          "Vendor payments by planned payment date",
          "Tax deposits — payroll, sales, and estimated income tax",
          "Known capital expenditures and non-recurring items",
        ],
      },
      {
        type: "callout",
        title: "Use payment behavior, not terms",
        text: "The most common modeling error is forecasting collections on stated terms. If a customer on net-30 reliably pays in 52 days, model 52. The forecast's usefulness comes entirely from being honest about how money actually moves.",
      },
      { type: "heading", text: "Reading it" },
      {
        type: "paragraph",
        text: "Look at the low point, not the ending balance. A forecast that ends the quarter comfortably but dips below zero in week seven is telling you about week seven. That trough is the constraint, and it's what determines whether you can make a hire, take a job, or need to have a conversation with your bank.",
      },
      { type: "heading", text: "What it changes" },
      {
        type: "paragraph",
        text: "Owners who maintain one stop making decisions from the checking account balance. They call the bank two months before they need the line, not two days. They know which large invoice actually matters this month, and they can tell a customer's collections department precisely why the payment date matters.",
      },
      {
        type: "quote",
        text: "Cash constraints are far more manageable when you see them eight weeks out than when you see them on Thursday.",
      },
      {
        type: "paragraph",
        text: "It takes a few hours to build the first one and roughly thirty minutes a week to maintain. For most owner-operated businesses, it's the highest-return half hour on the calendar.",
      },
    ],
    seo: {
      description:
        "How to build and use a rolling 13-week cash flow forecast: what to include, why to model actual payment behavior rather than terms, and reading the trough instead of the ending balance.",
    },
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const featuredPosts = posts.filter((p) => p.featured);

/** Posts sorted newest first — the default ordering everywhere. */
export const sortedPosts = [...posts].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const getRelatedPosts = (slug: string, limit = 3) => {
  const post = getPost(slug);
  if (!post) return [];
  const sameCategory = sortedPosts.filter(
    (p) => p.slug !== slug && p.category === post.category,
  );
  const others = sortedPosts.filter(
    (p) => p.slug !== slug && p.category !== post.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
};
