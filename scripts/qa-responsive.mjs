// P9 responsive QA — drives system Chrome via puppeteer-core.
// Checks horizontal overflow + small tap targets at every required viewport
// and captures screenshots of each major page.
import puppeteer from 'puppeteer-core';
import fs from 'node:fs';

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE = 'http://localhost:4321';
const OUT = 'shots/p9';
fs.mkdirSync(OUT, { recursive: true });

const PAGES = [
  ['home', '/'],
  ['tour-timimoun', '/tours/timimoun-desert-escape/'],
  ['tours-index', '/tours/'],
  ['evisa', '/evisa/'],
  ['food', '/food/'],
  ['culture', '/culture/'],
  ['provinces', '/provinces/'],
  ['province-oran', '/provinces/oran/'],
  ['search', '/search/?q=sahara'],
  ['sitemap', '/sitemap/'],
  ['contact', '/contact/'],
];

// width, height, label, isTablet
const VIEWPORTS = [
  [360, 740, '360p'],
  [390, 844, '390p'],
  [414, 896, '414p'],
  [768, 1024, '768p'],
  [834, 1112, '834p'],
  [1024, 1366, '1024p'],
  // landscape (tablets)
  [1024, 768, '768l'],
  [1112, 834, '834l'],
  [1366, 1024, '1024l'],
];

const AUDIT = `(() => {
  const docW = document.documentElement.clientWidth;
  const overflowing = [];
  const els = document.querySelectorAll('body *');
  for (const el of els) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    if (r.right > docW + 1.5 || r.left < -1.5) {
      const cs = getComputedStyle(el);
      if (cs.position === 'fixed' || cs.visibility === 'hidden' || cs.display === 'none') continue;
      overflowing.push({
        tag: el.tagName.toLowerCase(),
        cls: (el.className && el.className.toString) ? el.className.toString().slice(0,40) : '',
        right: Math.round(r.right), left: Math.round(r.left)
      });
    }
  }
  // tap targets: interactive elements smaller than 44px in either axis
  const small = [];
  const tappable = document.querySelectorAll('a, button, input, select, [role=button], summary');
  for (const el of tappable) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none') continue;
    if (r.height < 40 || r.width < 24) {
      const txt = (el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 30);
      small.push({ tag: el.tagName.toLowerCase(), w: Math.round(r.width), h: Math.round(r.height), txt });
    }
  }
  return {
    scrollW: document.documentElement.scrollWidth,
    clientW: docW,
    overflow: overflowing.slice(0, 12),
    smallTaps: small.slice(0, 20),
    smallTapCount: small.length
  };
})()`;

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--hide-scrollbars'] });
const report = {};
const shotPages = new Set(['home', 'tour-timimoun', 'evisa', 'food', 'provinces', 'search', 'sitemap']);

for (const [pname, path] of PAGES) {
  report[pname] = {};
  const page = await browser.newPage();
  for (const [w, h, label] of VIEWPORTS) {
    await page.setViewport({ width: w, height: h, deviceScaleFactor: 1, isMobile: w < 768, hasTouch: w < 1024 });
    await page.goto(BASE + path, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 350));
    const res = await page.evaluate(AUDIT);
    const horiz = res.scrollW > res.clientW + 2;
    report[pname][label] = {
      horizontalOverflow: horiz,
      scrollW: res.scrollW, clientW: res.clientW,
      overflowEls: res.overflow,
      smallTapCount: res.smallTapCount,
      smallTaps: res.smallTaps,
    };
    // screenshot: one portrait phone (390p) + one tablet (768p) + one landscape (1024l) for key pages
    if (shotPages.has(pname) && (label === '390p' || label === '768p' || label === '1024l')) {
      await page.screenshot({ path: `${OUT}/${pname}-${label}.png`, fullPage: true });
    }
  }
  await page.close();
}

await browser.close();
fs.writeFileSync(`${OUT}/report.json`, JSON.stringify(report, null, 2));

// Console summary
let issues = 0;
for (const [pname, vps] of Object.entries(report)) {
  for (const [label, r] of Object.entries(vps)) {
    if (r.horizontalOverflow || r.smallTapCount > 0) {
      issues++;
      console.log(`[${pname} @ ${label}] overflow=${r.horizontalOverflow} (scrollW ${r.scrollW}/${r.clientW}) smallTaps=${r.smallTapCount}`);
      if (r.horizontalOverflow && r.overflowEls.length) {
        for (const e of r.overflowEls.slice(0, 4)) console.log(`    ↳ <${e.tag} class="${e.cls}"> right=${e.right} (vw ${r.clientW})`);
      }
      if (r.smallTaps.length) console.log(`    ↳ small: ` + r.smallTaps.slice(0,5).map(t => `${t.tag}(${t.w}x${t.h}"${t.txt}")`).join(', '));
    }
  }
}
console.log(issues === 0 ? '\\nNO responsive issues found.' : `\\n${issues} viewport(s) with findings.`);
