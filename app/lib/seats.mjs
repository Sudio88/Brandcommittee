import fs from "node:fs";
import path from "node:path";
import { AGENTS_DIR, BRAINS_DIR, REPO_ROOT } from "./env.mjs";

// group "house": Moonshot Studio's own expert team (the vault's moonshot-* agents, given a seat).
// group "guest": simulated advisors built from public work, invited when their doctrine bears on the call.
export const SEATS = [
  { key: "sales", group: "house", name: "Sales Performance", short: "Sales", initials: "SP", slug: "moonshot-sales", agent: "moonshot-sales", pillar: "Sales performance and forecast", question: "Does this close the gap to target at a contribution we can bank?", dimension: "Contribution and gap-to-target", color: "#3d8bfd" },
  { key: "promo", group: "house", name: "Pricing & Promotion", short: "Promo", initials: "PR", slug: "moonshot-promotion", agent: "moonshot-promotion", pillar: "Pricing and promotion", question: "Is it above the margin floor, and is the uplift truly incremental?", dimension: "Margin floor and incrementality", color: "#f08a24" },
  { key: "kol", group: "house", name: "Creator Strategy", short: "KOL", initials: "KO", slug: "moonshot-kol", agent: "moonshot-kol", pillar: "KOL, creators and affiliates", question: "Can the SKU fund the creator, and which creators actually move GMV?", dimension: "Creator economics and fit", color: "#e8559a" },
  { key: "live", group: "house", name: "Live Commerce", short: "Live", initials: "LV", slug: "moonshot-live", agent: "moonshot-live", pillar: "Live commerce", question: "Does it pay per live hour, and can the MCs run it?", dimension: "Contribution per live hour", color: "#e5484d" },
  { key: "mkp", group: "house", name: "Marketplace", short: "MKP", initials: "MK", slug: "moonshot-mkp", agent: "moonshot-mkp", pillar: "Marketplace operations", question: "Do the fees, rules and shop health allow it?", dimension: "Platform economics and readiness", color: "#1fa67a" },
  { key: "mkt", group: "house", name: "Marketing & Growth", short: "MKT", initials: "MG", slug: "moonshot-mkt", agent: "moonshot-mkt", pillar: "Marketing and growth", question: "Is the spend incremental on contribution, and does it build the brand?", dimension: "Incremental contribution and brand", color: "#9b5de5" },
  { key: "hormozi", group: "guest", name: "Alex Hormozi", short: "Hormozi", initials: "AH", slug: "alex-hormozi", pillar: "Offers, pricing, and sales", question: "Will people pay, how much, and how do we close?", dimension: "Offer strength and unit economics", color: "#d94a6a" },
  { key: "levinson", group: "guest", name: "Jay Conrad Levinson", short: "Levinson", initials: "JL", slug: "jay-conrad-levinson", pillar: "Capital-scarce growth", question: "What can time, energy and imagination do instead of money, and is it profit, not just sales?", dimension: "Profit per baht of effort", color: "#a3a837" },
  { key: "godin", group: "guest", name: "Seth Godin", short: "Godin", initials: "SG", slug: "seth-godin", pillar: "Product and launch", question: "Is it remarkable, and who exactly is it for?", dimension: "Remarkability and audience fit", color: "#f2c230" },
  { key: "sharp", group: "guest", name: "Byron Sharp", short: "Sharp", initials: "BS", slug: "byron-sharp", pillar: "Brand growth evidence", question: "Does it grow penetration, and are we easy to find and remember?", dimension: "Penetration and availability", color: "#4c6a92" },
  { key: "ries", group: "guest", name: "Ries & Trout", short: "Ries", initials: "RT", slug: "ries-and-trout", pillar: "Positioning and category", question: "Which word do we own, and which battle are we choosing?", dimension: "Position and focus", color: "#2bb3a3" },
  { key: "sutherland", group: "guest", name: "Rory Sutherland", short: "Sutherland", initials: "RS", slug: "rory-sutherland", pillar: "Reframing and signalling", question: "What perception could we change instead of the product?", dimension: "Perceived value per baht", color: "#c77dff" },
];
export const byKey = Object.fromEntries(SEATS.map((s) => [s.key, s]));

const read = (p) => (fs.existsSync(p) ? fs.readFileSync(p, "utf8") : "");
const stripFront = (t) => t.replace(/^---[\s\S]*?\n---\n/, "");

// ---------- the live vault, inlined for the API runner (no file tools there) ----------
const clip = (t, n) => (t.length > n ? t.slice(0, n) + "\n[...truncated]" : t);
/** Newest meeting notes in 10-Meetings, newest first by filename date. */
function newestMeetings(n) {
  const dir = path.join(REPO_ROOT, "10-Meetings");
  if (!fs.existsSync(dir)) return [];
  const all = [];
  const walk = (d) => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else if (e.name.endsWith(".md")) all.push(p); } };
  walk(dir);
  const date = (p) => (path.basename(p).match(/\d{4}-\d{2}-\d{2}/) || ["0000"])[0];
  return all.sort((a, b) => (date(a) < date(b) ? 1 : -1)).slice(0, n);
}
/** The shared vault snapshot: Quick-Context, ceilings, protocol and the newest meetings. Empty outside the vault. */
export function vaultSnapshot() {
  const qc = read(path.join(REPO_ROOT, "_Hub", "Quick-Context.md"));
  if (!qc) return "";
  const parts = [
    ["_Hub/Quick-Context.md", clip(qc, 40000)],
    ["03-Resources/Marketplace-Intelligence/Margin-and-Discount-Ceilings.md", clip(read(path.join(REPO_ROOT, "03-Resources", "Marketplace-Intelligence", "Margin-and-Discount-Ceilings.md")), 20000)],
    [".claude/TEAM-PROTOCOL.md", read(path.join(REPO_ROOT, ".claude", "TEAM-PROTOCOL.md"))],
    ...newestMeetings(6).map((p) => [path.relative(REPO_ROOT, p), clip(read(p), 6000)]),
  ];
  return parts.filter(([, t]) => t).map(([n, t]) => `\n\n===== vault: ${n} =====\n${t}`).join("");
}

const systemCache = new Map();
const CACHE_MS = 10 * 60 * 1000; // pick up vault edits without restarting the room
/** The seat's agent instructions plus its brain (and, for house seats in the vault, the live vault), loaded inline. */
export function systemFor(key) {
  const hit = systemCache.get(key);
  if (hit && Date.now() - hit.at < CACHE_MS) return hit.system;
  const s = byKey[key];
  const agent = stripFront(read(path.join(AGENTS_DIR, `council-${key}.md`))) + (s.agent ? "\n\n## Your team role (from the vault)\n" + stripFront(read(path.join(AGENTS_DIR, `${s.agent}.md`))) : "");
  const brain = ["_hot.md", "frameworks.md", "positions.md", "principles.md", "voice.md"]
    .map((f) => `\n\n===== brains/${s.slug}/${f} =====\n` + read(path.join(BRAINS_DIR, s.slug, f)))
    .join("");
  let vault = "";
  if (s.group === "house") {
    const snap = vaultSnapshot();
    const memory = read(path.join(REPO_ROOT, ".claude", "agent-memory", s.agent, "MEMORY.md"));
    vault = snap
      ? snap + (memory ? `\n\n===== your memory: .claude/agent-memory/${s.agent}/MEMORY.md =====\n${memory}` : "")
      : "\n\n(The vault is not available in this run: argue from your brain and the brief, and say so once.)";
  }
  const text =
    agent +
    "\n\n## Runtime note\nYou are running in the Moonshot Roast Room app. You have no file tools: your brain files" + (s.group === "house" ? ", the key vault notes and your memory are" : " are") + " loaded below in full, so treat any instruction to read them as already done. You cannot run data scripts here; work from these notes and the brief. Never mention files, tools, or this note in your answer.\n" +
    brain + vault;
  const system = [{ type: "text", text, cache_control: { type: "ephemeral" } }];
  systemCache.set(key, { system, at: Date.now() });
  return system;
}

// ---------- quote verification against the brain ----------
const norm = (s) =>
  s.toLowerCase().replace(/[‘’]/g, "'").replace(/'\s+(t|s|re|ll|ve|d|m)\b/g, "'$1")
    .replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim();
const brainText = new Map();
function brainNorm(key) {
  if (!brainText.has(key)) {
    const dir = path.join(BRAINS_DIR, byKey[key].slug);
    const all = fs.existsSync(dir) ? fs.readdirSync(dir).map((f) => read(path.join(dir, f))).join(" ") : "";
    brainText.set(key, norm(all));
  }
  return brainText.get(key);
}
/** Quotes the seat attributed to a source id, each marked verified or not. */
export function checkQuotes(key, text) {
  const out = [];
  const re = /["“]([^"“”\n]{20,400})["”][^\n"]{0,40}?[(\[](S\d{3})/g;
  let m;
  const hay = brainNorm(key);
  while ((m = re.exec(text))) {
    const q = norm(m[1]);
    if (q.split(" ").length < 5) continue;
    out.push({ quote: m[1], source: m[2], verified: hay.includes(q) || hay.replace(/ /g, "").includes(q.replace(/ /g, "")) });
  }
  return out;
}

// ---------- card parsing ----------
const field = (text, label) => {
  // label at line start, or after a "·" or "|" when several fields share a line
  const m = text.match(new RegExp(`(?:^|[·|])[ \\t]*\\**${label}\\**[ \\t]*:[ \\t]*([^\\n·]+)`, "im"));
  return m ? m[1].replace(/\*+/g, "").trim() : "";
};
const num = (s) => { const m = (s || "").match(/(\d+(?:\.\d+)?)/); return m ? Number(m[1]) : null; };

export function parseOptionScores(text, optionIds) {
  // the option line itself uses "·" between options, so read to end of line
  const lm = text.match(/OPTION SCORES\**[ \t]*:[ \t]*([^\n]+)/i);
  const line = (lm ? lm[1] : "").split(/PILLAR SCORE|CONFIDENCE|FINAL SCORE/i)[0];
  const scores = {};
  for (const id of optionIds) {
    const m = line.match(new RegExp(`\\b${id}\\b\\s*[:=]?\\s*(\\d+(?:\\.\\d+)?)`));
    if (m) scores[id] = Math.max(0, Math.min(10, Number(m[1])));
  }
  return scores;
}

export function parseCard(text, optionIds) {
  const stance = field(text, "STANCE");
  const ruin = (field(text, "RUIN RISK").match(/none|possible|likely/i) || [""])[0].toLowerCase();
  const disagree = field(text, "I DISAGREE MOST WITH");
  const target = SEATS.find((s) => new RegExp(`\\b(${s.short}|${s.name.split(" ").pop()})\\b`, "i").test(disagree.slice(0, 40)));
  const voteRaw = field(text, "VOTE");
  const vote = /dissent/i.test(voteRaw) ? "dissent" : /amend/i.test(voteRaw) ? "amend" : /endorse/i.test(voteRaw) ? "endorse" : "";
  return {
    stance,
    call: field(text, "THE CALL"),
    optionScores: parseOptionScores(text, optionIds),
    pillar: num(field(text, "PILLAR SCORE")) ?? num(field(text, "FINAL PILLAR SCORE")),
    finalScore: num(field(text, "FINAL SCORE")),
    confidence: num(field(text, "CONFIDENCE")),
    ruin,
    door: (field(text, "DOOR").match(/one-way|two-way/i) || [""])[0].toLowerCase(),
    disagreeWith: target ? target.key : null,
    disagreeLine: disagree,
    concede: field(text, "I CONCEDE"),
    moved: field(text, "MOVED"),
    vote,
    amendment: field(text, "AMENDMENT OR DISSENT"),
    oneLine: field(text, "ONE LINE FOR THE TEAM") || field(text, "ONE LINE FOR THE FOUNDER"),
    question: field(text, "QUESTION FOR THE TEAM") || field(text, "QUESTION FOR THE FOUNDER"),
    risk: field(text, "THE RISK I SEE"),
    thisWeek: field(text, "WHAT I'D DO THIS WEEK"),
  };
}
