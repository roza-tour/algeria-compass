# Algeria Compass — Deploy

## The two commands (everything else is detail)

**1. On your computer** — build, check, publish:

```bash
npm run deploy && git add -A && git commit -m "update site" && git push
```

**2. On the server (cPanel → Terminal)** — pull the changes live, one command:

```bash
cd ~/algeriacompass && git fetch origin && git reset --hard origin/main
```

(Identical to running `bash scripts/server-deploy.sh`.) Done — the site is updated.

---

## What `npm run deploy` actually does

Three steps, in order — and it **stops** if any of them fails:

| Step | What it does |
|---|---|
| 1. **build** | Renders every page from `src/` into `dist/` |
| 2. **seo-audit** | Checks indexation. **Blocks the deploy** if anything is broken |
| 3. **stage** | Copies `dist/` into the repo root (the live docroot) |

If step 2 finds a problem, **nothing is copied to the live site**. You cannot
accidentally publish broken pages.

---

## First time on a new machine

```bash
npm install
```

Once. Then `npm run deploy` works forever after.

---

## If the deploy stops with errors

You'll see a list like:

```
ERRORS (2):
  x /blog/some-page/: broken internal link /tours/old-slug/
  x sitemap lists a page that does not exist: /blog/removed/
[seo-audit] FAILED — fix the errors above before deploying.
```

Fix what it names, run `npm run deploy` again. The site stays untouched
meanwhile.

**Warnings** (lines with `!`) do not block anything — they're suggestions,
mostly long titles or descriptions.

---

## Useful extras

```bash
npm run audit:seo    # run the checks without deploying
npm run preview      # view the built site at http://localhost:4321
npm run dev          # live editing while you work
```

---

## On the server (cPanel)

The repo root **is** the website folder. The server just needs the latest code:

```bash
cd ~/algeriacompass
git fetch origin && git reset --hard origin/main
```

That's what `scripts/server-deploy.sh` runs. Nothing is built on the server —
the built files are already in the repo, which is why you run `npm run deploy`
locally first.

---

## One-time server setup (only if not done yet)

**Review moderation password.** Generate a hash and save it outside the web
folder so it is never public:

```bash
php -r "echo password_hash('YOUR-STRONG-PASSWORD', PASSWORD_DEFAULT), PHP_EOL;"
```

Paste the output into `data/.admin_hash` on the server (that folder is blocked
from the web). Until you do, `/reviews-admin.php` refuses all logins.

**Files the server keeps and git must never overwrite** — these are already in
`.gitignore`, leave them there:

```
reviews-approved.json      approved reviews shown on the site
data/*.jsonl               pending reviews awaiting moderation
data/.admin_hash           the admin password hash
data/rl-* , data/.login-*  rate-limit counters
```

---

## Adding content

**A new guide** — create `src/content/article/my-guide.md`, copy the frontmatter
shape from any existing guide, write the body, then `npm run deploy`.
It joins the blog index, the sitemap and `llms.txt` automatically.

## Seasonal ambience (fully automatic)

The whole site dresses itself for the calendar — snow in winter, drifting golden
motes in summer, petals in spring, leaves in autumn, night-and-stars for Ramadan,
gold for the Eids and Christmas — plus a slim season ribbon under the header
linking to the matching guide. **Nothing to maintain**: Islamic dates are
computed from the Hijri calendar, fixed dates from rules.

```bash
npm run season:calendar        # see the schedule for the next 18 months
SEASON_PREVIEW=christmas npm run build && npm run preview   # preview any season
```

Valid preview values: `spring summer autumn winter christmas ramadan eid mawlid yennayer national`.
Effects pause automatically for visitors who prefer reduced motion, thin out on
phones, and never sit over text.

---

**A seasonal look** — add to the frontmatter:

```yaml
occasion: "ramadan"        # or: christmas | winter | sahara
occasionEyebrow: "Ramadan & the Algerian calendar"
occasionTitle: "A month of fasting, lanterns and late nights"
occasionNote: "One or two sentences setting the scene."
```

The page then gets that season's colours, background motif, icon set and
display font. Pages without `occasion` are unaffected.

**A French version** — add a page under `src/pages/fr/`, then point the English
guide at it so search engines pair them:

```yaml
frAlt: "/fr/mon-guide/"
```

---

## Rules worth keeping

- **Never edit files in the repo root by hand** (`index.html`, `blog/`,
  `assets/`…). They are generated and will be overwritten. Edit `src/`.
- `.htaccess` is generated from `public/.htaccess` — edit that one.
- Always deploy with `npm run deploy`, never `npm run build` alone, so the
  indexation check runs.
