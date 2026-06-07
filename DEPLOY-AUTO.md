# Auto-deploy: `git push` → live (one-time server setup)

The document root for **algeriacompass.com** is the git repo itself. These steps make
the server pull `origin/main` automatically, so you never deploy by hand again.
Pick **A (cron)** — simplest and most reliable on cPanel — or add **B (webhook)** on
top for instant deploys.

The pull/permissions logic lives in `scripts/server-deploy.sh` (committed in the repo).
Edit the `REPO=` line in it only if your document root is not
`~/public_html/algeriacompass.com`.

---

## A. Cron (recommended) — checks every 2 minutes, deploys only when main changes

One-time, via SSH **or** cPanel → *Cron Jobs*.

1. First, get the script onto the server (one manual pull):
   ```bash
   cd ~/public_html/algeriacompass.com
   git fetch origin && git checkout main && git reset --hard origin/main
   chmod +x scripts/server-deploy.sh
   ```
2. Add the cron job (cPanel → *Cron Jobs* → Common settings "Twice per hour" or paste):
   ```
   */2 * * * * /bin/sh "$HOME/public_html/algeriacompass.com/scripts/server-deploy.sh" >/dev/null 2>&1
   ```

That's it. After any `git push origin main`, the site updates within ~2 minutes.
Deploys are logged to `~/algeriacompass-deploy.log`. The script does nothing when
already up to date, so it's cheap to run often.

> Want it faster than 2 minutes? Lower the interval, or add the webhook below.

---

## B. Webhook (optional) — instant deploy on push

Only add this if your host allows PHP `shell_exec`. It calls the same script.

1. Create a secret (kept **above** the document root so it's never web-readable).
   Replace `USER` with your cPanel username:
   ```bash
   head -c 32 /dev/urandom | base64 > ~/.deploy_secret
   cat ~/.deploy_secret    # copy this value
   ```
2. Create `deploy.php` in the document root with this content:
   ```php
   <?php
   header('Content-Type: text/plain');
   $secret = trim(@file_get_contents(getenv('HOME') . '/.deploy_secret'));
   if ($secret === '') { http_response_code(500); exit("no secret\n"); }
   $payload = file_get_contents('php://input');
   $sig  = $_SERVER['HTTP_X_HUB_SIGNATURE_256'] ?? '';
   $calc = 'sha256=' . hash_hmac('sha256', $payload, $secret);
   if (!hash_equals($calc, $sig)) { http_response_code(403); exit("bad signature\n"); }
   echo "ok\n" . shell_exec('sh ' . escapeshellarg(__DIR__ . '/scripts/server-deploy.sh') . ' 2>&1');
   ```
   > Note: `deploy.php` is **not** tracked in git, so `git reset` won't touch it.
   > Keep a copy; re-create it if you ever wipe the docroot.
3. In GitHub → repo → *Settings → Webhooks → Add webhook*:
   - Payload URL: `https://algeriacompass.com/deploy.php`
   - Content type: `application/json`
   - Secret: the value from step 1
   - Events: *Just the push event*

Keep the cron job (A) as a safety net even with the webhook enabled.
