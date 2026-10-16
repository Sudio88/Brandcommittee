#!/usr/bin/env bash
# One step to get the latest Moonshot Roast Room running on http://localhost:4740.
#
#   bash update.sh                       # or: npm run update
#   bash update.sh "/path/to/Moonshot-Vault"
#
# 1. pulls the latest code into this folder
# 2. if the room is installed in the vault (Moonshot-Vault/Roast-Room), refreshes that copy too
# 3. stops whatever is running on port 4740 (the original Roast Room on 4730 is left alone)
# 4. starts the room and prints the version, so you can check it matches the corner of the page
set -euo pipefail

SRC="$(cd "$(dirname "$0")" && pwd)"
BRANCH="$(git -C "$SRC" rev-parse --abbrev-ref HEAD)"
VAULT="${1:-$HOME/Library/CloudStorage/GoogleDrive-care@moonshotstudio.ai/My Drive/Moonshot-Vault}"
PORT="${PORT:-4740}"

cd "$SRC"
echo "1. Pulling the latest code ($BRANCH)..."
git fetch -q origin "$BRANCH"
git checkout -q "$BRANCH" 2>/dev/null || git checkout -q -b "$BRANCH" "origin/$BRANCH"
git pull -q --ff-only origin "$BRANCH"
echo "   now at $(git log --oneline -1)"

ROOM="$SRC"
if [ -d "$VAULT/Roast-Room/app" ]; then
  echo "2. Refreshing the vault copy..."
  bash "$SRC/install.sh" "$VAULT" | sed 's/^/   /'
  ROOM="$VAULT/Roast-Room"
else
  echo "2. No vault install found at $VAULT/Roast-Room (skipping; run bash install.sh to add it)."
fi

echo "3. Stopping anything on port $PORT..."
PIDS="$(lsof -ti tcp:"$PORT" -sTCP:LISTEN 2>/dev/null || true)"
if [ -n "$PIDS" ]; then kill $PIDS 2>/dev/null || true; sleep 1; echo "   stopped $PIDS"; else echo "   nothing was running"; fi

echo "4. Starting the room from $ROOM"
echo "   Open http://localhost:$PORT and press Cmd+Shift+R. The top-left corner should show v$(node -p "require('$SRC/package.json').version") · 8 seats."
cd "$ROOM"
PORT="$PORT" exec node app/server.mjs
