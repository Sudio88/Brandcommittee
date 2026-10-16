import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const APP_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
// Two layouts: this repo on its own (app/ beside .claude/), or installed into the
// Moonshot vault (Moonshot-Vault/Roast-Room/app with the skill in Moonshot-Vault/.claude/).
// Walk up from the app until a folder holds the skill.
function findRoot() {
  let dir = path.resolve(APP_ROOT, "..");
  for (let i = 0; i < 4; i++) {
    if (fs.existsSync(path.join(dir, ".claude", "skills", "roast-room"))) return dir;
    const up = path.dirname(dir);
    if (up === dir) break;
    dir = up;
  }
  return path.resolve(APP_ROOT, "..");
}
export const REPO_ROOT = findRoot();
// A host app (e.g. Sales Co-Pilot) can point the room at its own copy of the vault and keep
// sessions on persistent storage. Both default to the normal layout.
export const VAULT_DIR = process.env.ROOM_VAULT_DIR ? path.resolve(process.env.ROOM_VAULT_DIR) : REPO_ROOT;
export const BRAINS_DIR = path.join(REPO_ROOT, ".claude", "skills", "roast-room", "brains");
export const AGENTS_DIR = path.join(REPO_ROOT, ".claude", "agents");
// Sessions always sit beside the app: <room folder>/sessions
export const SESSIONS_DIR = process.env.ROOM_SESSIONS_DIR ? path.resolve(process.env.ROOM_SESSIONS_DIR) : path.join(APP_ROOT, "..", "sessions");

let cache = null;
export function env(key) {
  if (process.env[key]) return process.env[key];
  if (!cache) {
    cache = {};
    for (const p of [path.join(APP_ROOT, "..", ".env"), path.join(REPO_ROOT, ".env")]) {
      if (!fs.existsSync(p)) continue;
      for (const line of fs.readFileSync(p, "utf8").split(/\r?\n/)) {
        const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
        if (m && !(m[1] in cache)) cache[m[1]] = m[2].trim();
      }
    }
  }
  return cache[key] || "";
}
