#!/usr/bin/env bash
# Install the Moonshot Roast Room into the Moonshot vault.
#
#   bash install.sh                      # default vault path on Care's Mac
#   bash install.sh "/path/to/Moonshot-Vault"
#
# What it does (safe to run again; it only adds or refreshes Roast Room files):
#   .claude/skills/roast-room/        the skill, references, checker and 8 seat brains
#   .claude/agents/council-*.md       the 8 council seat agents (refreshed)
#   .claude/agents/moonshot-*.md      only if missing (your vault's own expert agents are never overwritten)
#   Roast-Room/                       the room app (app/, package.json); councils land in Roast-Room/sessions/
#   .claude/settings.json             adds the Roast Room permission rules (merged, nothing removed)
#   CLAUDE.md                         appends a short "Roast Room" routing section once
set -euo pipefail

SRC="$(cd "$(dirname "$0")" && pwd)"
VAULT="${1:-$HOME/Library/CloudStorage/GoogleDrive-care@moonshotstudio.ai/My Drive/Moonshot-Vault}"

if [ ! -d "$VAULT" ]; then
  echo "Vault not found: $VAULT"
  echo "Usage: bash install.sh \"/path/to/Moonshot-Vault\""
  exit 1
fi
if [ ! -f "$VAULT/_Hub/Quick-Context.md" ]; then
  echo "Warning: $VAULT has no _Hub/Quick-Context.md. Is this the Moonshot vault? Continuing anyway."
fi

echo "Installing the Moonshot Roast Room into: $VAULT"
mkdir -p "$VAULT/.claude/skills" "$VAULT/.claude/agents" "$VAULT/Roast-Room/sessions"

# 1. skill + brains (refresh)
rm -rf "$VAULT/.claude/skills/roast-room.new"
cp -R "$SRC/.claude/skills/roast-room" "$VAULT/.claude/skills/roast-room.new"
rm -rf "$VAULT/.claude/skills/roast-room"
mv "$VAULT/.claude/skills/roast-room.new" "$VAULT/.claude/skills/roast-room"
echo "  skill and 8 brains   -> .claude/skills/roast-room/"

# 2. council agents (refresh) and the vault's own experts (only if missing)
cp "$SRC"/.claude/agents/council-*.md "$VAULT/.claude/agents/"
echo "  8 council agents     -> .claude/agents/council-*.md"
for f in "$SRC"/.claude/agents/moonshot-*.md; do
  n="$(basename "$f")"
  if [ ! -f "$VAULT/.claude/agents/$n" ]; then cp "$f" "$VAULT/.claude/agents/$n"; echo "  added missing expert  -> .claude/agents/$n"; fi
done

# 3. the room app
rm -rf "$VAULT/Roast-Room/app"
cp -R "$SRC/app" "$VAULT/Roast-Room/app"
cp "$SRC/package.json" "$SRC/LICENSE" "$SRC/.env.example" "$VAULT/Roast-Room/"
[ -f "$VAULT/Roast-Room/sessions/.gitkeep" ] || touch "$VAULT/Roast-Room/sessions/.gitkeep"
echo "  room app              -> Roast-Room/ (start: cd Roast-Room && npm start)"

# 4. permissions (merge)
node - "$VAULT/.claude/settings.json" "$SRC/.claude/settings.json" <<'JS'
const fs = require("fs");
const [dst, src] = process.argv.slice(2);
const read = (p) => (fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, "utf8")) : {});
const d = read(dst), s = read(src);
d.permissions = d.permissions || {};
const allow = new Set([...(d.permissions.allow || []), ...(s.permissions?.allow || [])]);
d.permissions.allow = [...allow];
fs.writeFileSync(dst, JSON.stringify(d, null, 2) + "\n");
JS
echo "  permissions merged    -> .claude/settings.json"

# 5. routing note in the vault's CLAUDE.md (once)
if [ -f "$VAULT/CLAUDE.md" ] && grep -q "<!-- roast-room -->" "$VAULT/CLAUDE.md"; then
  echo "  CLAUDE.md             -> already has the Roast Room section"
else
  cat "$SRC/docs/claude-md-snippet.md" >> "$VAULT/CLAUDE.md"
  echo "  CLAUDE.md             -> appended the Roast Room section"
fi

echo
echo "Done. Next:"
echo "  1. cd \"$VAULT/Roast-Room\" && npm start      (then open http://localhost:4740)"
echo "  2. Open Claude Code in the vault folder and type: /roast-room <your decision>"
echo "  Restart any open Claude Code session so it loads the new agents."
