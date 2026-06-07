#!/bin/sh
# Algeria Compass — server-side auto-deploy.
#
# The cPanel document root for algeriacompass.com IS this git repository, so
# "deploying" is simply: fetch origin/main, and if it moved, hard-reset the
# working tree to it and normalise file permissions. The site is static, so
# LiteSpeed serves files straight from disk — there is no page cache to flush.
#
# This script is safe to run repeatedly: it does nothing when already up to date.
# Wire it to cron (recommended) or a webhook — see DEPLOY-AUTO.md.
set -eu

# --- config: change REPO if your document root lives elsewhere -----------------
REPO="$HOME/public_html/algeriacompass.com"
BRANCH="main"
LOG="$HOME/algeriacompass-deploy.log"
# ------------------------------------------------------------------------------

cd "$REPO" 2>/dev/null || { echo "$(date -u) ERROR: repo not found at $REPO" >>"$LOG"; exit 1; }

git fetch --quiet origin "$BRANCH"
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse "origin/$BRANCH")

# Already current — exit quietly (keeps cron output empty).
[ "$LOCAL" = "$REMOTE" ] && exit 0

# Mirror the working tree exactly to origin/main (docroot is never hand-edited).
git reset --hard "origin/$BRANCH"

# Normalise permissions so Apache/LiteSpeed never returns 403.
find "$REPO" -type d -exec chmod 755 {} \;
find "$REPO" -type f -exec chmod 644 {} \;

echo "$(date -u) deployed ${LOCAL} -> ${REMOTE}" >>"$LOG"
