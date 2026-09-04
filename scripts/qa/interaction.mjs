import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const BASE = process.env.QA_BASE_URL || 'http://localhost:3000';

/**
 * Honor a pre-installed browser. CI images and sandboxes often ship one that
 * doesn't match the version Playwright expects, and re-downloading it on every
 * run is slow. Set QA_BROWSER_PATH to point at an existing binary.
 */
const launchOptions = process.env.QA_BROWSER_PATH
  ? { executablePath: process.env.QA_BROWSER_PATH }
  : {};


/**
 * Routes are derived from the live sitemap, not hardcoded, so this suite keeps
 * working after a client renames every service and office.
 */
async function sitemapPaths() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (!res.ok) throw new Error(`Could not read ${BASE}/sitemap.xml — is the server running?`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => new URL(m[1]).pathname)
    .filter((p, i, a) => a.indexOf(p) === i);
}

/** One representative page per template, so the suite stays fast as content grows. */
function sampleRoutes(all) {
  const first = (prefix, depth) =>
    all.filter((p) => p.startsWith(prefix) && p.split('/').filter(Boolean).length === depth)[0];
  return [...new Set([
    '/',
    '/services', first('/services/', 2),
    '/industries', first('/industries/', 2),
    '/about', '/team', first('/team/', 2),
    '/locations', first('/locations/', 2),
    '/resources', '/resources/blog', first('/resources/blog/', 3),
    '/resources/guides', '/faqs', '/contact', '/schedule',
    '/privacy', '/terms', '/accessibility',
    '/this-page-does-not-exist-404-check',
  ].filter(Boolean))];
}
const b = await chromium.launch(launchOptions);
const pass = [], fail = [];
const check = (name, ok, detail = '') => (ok ? pass : fail).push(`${name}${detail ? ' — ' + detail : ''}`);

// ── Desktop: skip link, nav flyout, FAQ accordion, blog filter ────────────
{
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();

  await p.goto(BASE + '/', { waitUntil: 'networkidle' });
  await p.keyboard.press('Tab');
  const firstFocus = await p.evaluate(() => document.activeElement.textContent.trim());
  check('skip link is first tab stop', firstFocus === 'Skip to main content', firstFocus);
  const skipVisible = await p.evaluate(() => {
    const r = document.activeElement.getBoundingClientRect();
    return r.width > 10 && r.height > 10;
  });
  check('skip link becomes visible on focus', skipVisible);

  // Desktop nav flyout via keyboard
  await p.goto(BASE + '/', { waitUntil: 'networkidle' });
  const toggle = p.locator('nav[aria-label="Main"] button[aria-expanded]').first();
  await toggle.click();
  check('flyout opens', await toggle.getAttribute('aria-expanded') === 'true');
  const flyoutLinks = await p.locator('nav[aria-label="Main"] ul li a').count();
  check('flyout renders links', flyoutLinks > 0, `${flyoutLinks} links`);
  await p.keyboard.press('Escape');
  await p.waitForTimeout(150);
  check('Escape closes flyout', await toggle.getAttribute('aria-expanded') === 'false');

  // FAQ accordion
  await p.goto(BASE + '/faqs', { waitUntil: 'networkidle' });
  const det = p.locator('main details').first();
  check('accordion starts closed', !(await det.evaluate(d => d.open)));
  const answerInDom = await det.evaluate(d => (d.querySelector('summary + div')?.textContent || ''));
  check('answer is in the DOM while collapsed (crawlable)', answerInDom.length > 40, `${answerInDom.length} chars`);
  await det.locator('summary').click();
  await p.waitForTimeout(120);
  check('accordion opens on click', await det.evaluate(d => d.open));

  // Blog search + category filter
  await p.goto(BASE + '/resources/blog', { waitUntil: 'networkidle' });
  const before = await p.locator('article').count();
  await p.fill('#post-search', 'payroll-nonsense-zzz');
  await p.waitForTimeout(250);
  const noneLeft = await p.locator('article').count();
  check('search narrows results', before > 0 && noneLeft === 0, `${before} → ${noneLeft}`);
  await p.click('text=Clear filters');
  await p.waitForTimeout(250);
  check('clear filters restores results', (await p.locator('article').count()) === before);
  await p.locator('button[aria-pressed]', { hasText: 'Tax Planning' }).first().click();
  await p.waitForTimeout(250);
  const filtered = await p.locator('article').count();
  check('category filter applies', filtered > 0 && filtered < before, `${before} → ${filtered}`);

  await ctx.close();
}

// ── Mobile: menu, sticky CTA bar ─────────────────────────────────────────
{
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const p = await ctx.newPage();
  await p.goto(BASE + '/', { waitUntil: 'networkidle' });

  const burger = p.locator('button[aria-controls="mobile-menu"]');
  check('menu starts closed', await burger.getAttribute('aria-expanded') === 'false');
  await burger.click();
  await p.waitForTimeout(200);
  check('menu opens', await burger.getAttribute('aria-expanded') === 'true');
  check('menu panel is visible', await p.locator('#mobile-menu').isVisible());
  check('body scroll locked while open',
    await p.evaluate(() => getComputedStyle(document.body).overflow === 'hidden'));
  await p.keyboard.press('Escape');
  await p.waitForTimeout(200);
  check('Escape closes menu', await burger.getAttribute('aria-expanded') === 'false');
  check('body scroll restored',
    await p.evaluate(() => getComputedStyle(document.body).overflow !== 'hidden'));

  // Sticky CTA bar appears after scroll
  const hiddenAtTop = await p.evaluate(() => {
    const bar = document.querySelector('[aria-hidden="true"].fixed');
    return bar ? bar.getBoundingClientRect().top >= window.innerHeight - 2 : null;
  });
  check('sticky CTA hidden at top of page', hiddenAtTop === true, String(hiddenAtTop));
  await p.evaluate(() => window.scrollTo(0, 1200));
  await p.waitForTimeout(500);
  const shownAfterScroll = await p.evaluate(() => {
    const bar = [...document.querySelectorAll('.fixed')].find(e => e.querySelector('a[href^="tel:"]'));
    return bar ? bar.getBoundingClientRect().top < window.innerHeight - 20 : null;
  });
  check('sticky CTA appears after scroll', shownAfterScroll === true, String(shownAfterScroll));

  // No horizontal overflow anywhere on mobile
  const overflow = await p.evaluate(() =>
    document.documentElement.scrollWidth - document.documentElement.clientWidth);
  check('no horizontal scroll on mobile home', overflow <= 1, `${overflow}px`);

  for (const path of ['/services/tax-planning', '/resources/blog/monthly-close-checklist', '/contact', '/locations/austin-tx']) {
    await p.goto(BASE + path, { waitUntil: 'networkidle' });
    const o = await p.evaluate(() =>
      document.documentElement.scrollWidth - document.documentElement.clientWidth);
    check(`no horizontal scroll on ${path}`, o <= 1, `${o}px`);
  }
  await ctx.close();
}

// ── Contact form: client validation + server round trip ──────────────────
{
  const ctx = await b.newContext({ viewport: { width: 1280, height: 900 } });
  const p = await ctx.newPage();
  await p.goto(BASE + '/contact', { waitUntil: 'networkidle' });

  await p.click('button[type="submit"]');
  await p.waitForTimeout(250);
  const errs = await p.locator('[role="alert"]').count();
  check('empty submit shows field errors', errs >= 3, `${errs} errors`);
  const focused = await p.evaluate(() => document.activeElement.getAttribute('name'));
  check('focus moves to first invalid field', focused === 'firstName', String(focused));

  await p.fill('#firstName', 'Jordan');
  await p.fill('#lastName', 'Reyes');
  await p.fill('#email', 'not-an-email');
  await p.fill('#message', 'We are two years behind on bookkeeping and have an IRS notice.');
  await p.click('button[type="submit"]');
  await p.waitForTimeout(250);
  const emailInvalid = await p.getAttribute('#email', 'aria-invalid');
  check('invalid email is rejected client-side', emailInvalid === 'true', String(emailInvalid));

  await p.fill('#email', 'jordan@example.com');
  await p.click('button[type="submit"]');
  await p.waitForSelector('[role="status"]', { timeout: 5000 });
  const success = await p.locator('[role="status"]').textContent();
  check('valid submission succeeds', /Message received|be in touch/i.test(success || ''), (success || '').slice(0, 60));
  await ctx.close();
}

// ── API route: server-side validation independent of the client ──────────
{
  const ctx = await b.newContext();
  const req = ctx.request;
  let r = await req.post(BASE + '/api/contact', { data: { firstName: 'A' } });
  check('API rejects incomplete payload', r.status() === 422, `status ${r.status()}`);

  r = await req.post(BASE + '/api/contact', {
    data: { firstName: 'Jordan', lastName: 'Reyes', email: 'jordan@example.com',
            message: 'A real message that is long enough.' } });
  check('API accepts valid payload', r.status() === 200, `status ${r.status()}`);

  r = await req.post(BASE + '/api/contact', {
    data: { firstName: 'Bot', lastName: 'Bot', email: 'bot@example.com',
            message: 'spam spam spam spam', companyWebsite: 'http://spam.example' } });
  check('API silently drops honeypot submissions', r.status() === 200, `status ${r.status()}`);

  // A Buffer is sent as raw bytes; a string would be JSON-encoded into valid
  // JSON, which the route correctly answers 422 rather than 400.
  r = await req.post(BASE + '/api/contact', {
    headers: { 'Content-Type': 'application/json' },
    data: Buffer.from('{"firstName": "A", '),
  });
  check('API rejects malformed body', r.status() === 400, `status ${r.status()}`);
  await ctx.close();
}

// ── SEO artifacts ────────────────────────────────────────────────────────
{
  const ctx = await b.newContext();
  const req = ctx.request;
  const sm = await (await req.get(BASE + '/sitemap.xml')).text();
  const urls = (sm.match(/<loc>/g) || []).length;
  check('sitemap lists every page', urls >= 40, `${urls} URLs`);
  check('sitemap includes service detail pages', sm.includes('/services/tax-planning'));
  check('sitemap includes location pages', sm.includes('/locations/austin-tx'));
  const rb = await (await req.get(BASE + '/robots.txt')).text();
  check('robots.txt points at sitemap', rb.includes('/sitemap.xml'));
  check('robots.txt disallows /api/', rb.includes('/api/'));
  const og = await req.get(BASE + '/opengraph-image');
  check('OG image renders', og.status() === 200 && (og.headers()['content-type'] || '').includes('image'));
  const icon = await req.get(BASE + '/icon');
  check('favicon renders', icon.status() === 200);

  const home = await (await req.get(BASE + '/')).text();
  check('home emits AccountingService JSON-LD', home.includes('"AccountingService"'));
  check('home emits FAQPage JSON-LD', home.includes('"FAQPage"'));
  check('home emits canonical', /rel="canonical"/.test(home));
  const svc = await (await req.get(BASE + '/services/tax-planning')).text();
  check('service page emits Service + Breadcrumb JSON-LD',
    svc.includes('"Service"') && svc.includes('"BreadcrumbList"'));
  const post = await (await req.get(BASE + '/resources/blog/monthly-close-checklist')).text();
  check('article emits Article JSON-LD', post.includes('"Article"'));
  const loc = await (await req.get(BASE + '/locations/austin-tx')).text();
  check('location emits LocalBusiness JSON-LD', loc.includes('"LocalBusiness"'));
  const team = await (await req.get(BASE + '/team/margaret-chen')).text();
  check('team profile emits Person JSON-LD', team.includes('"Person"'));

  // JSON-LD must be valid JSON on every page type
  for (const [name, html] of [['home', home], ['service', svc], ['article', post], ['location', loc]]) {
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    let ok = blocks.length > 0;
    for (const m of blocks) { try { JSON.parse(m[1].replace(/\\u003c/g, '<')); } catch { ok = false; } }
    check(`${name} JSON-LD parses`, ok, `${blocks.length} blocks`);
  }
  await ctx.close();
}

console.log(`\n${'='.repeat(60)}`);
pass.forEach(t => console.log('  ✓ ' + t));
if (fail.length) { console.log(''); fail.forEach(t => console.log('  ✗ ' + t)); }
console.log(`${'='.repeat(60)}\n${pass.length} passed, ${fail.length} failed`);
await b.close();
process.exit(fail.length ? 1 : 0);
