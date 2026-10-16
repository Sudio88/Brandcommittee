// Smoke test. Offline (default): every seat has an agent, a brain and four portraits.
// With --api: one seat card from the API (needs ANTHROPIC_API_KEY).
import fs from "node:fs";
import path from "node:path";
import { SEATS, systemFor, parseCard, checkQuotes } from "../lib/seats.mjs";
import { AGENTS_DIR, BRAINS_DIR, APP_ROOT } from "../lib/env.mjs";

let bad = 0;
const need = (ok, what) => { if (!ok) { bad++; console.log("  MISSING", what); } };
for (const s of SEATS) {
  need(fs.existsSync(path.join(AGENTS_DIR, `council-${s.key}.md`)), `agent council-${s.key}.md`);
  if (s.agent) need(fs.existsSync(path.join(AGENTS_DIR, `${s.agent}.md`)), `team role ${s.agent}.md`);
  for (const f of ["_hot.md", "frameworks.md", "principles.md", "positions.md", "voice.md", "stories.md", "books.md", "sources.md"])
    need(fs.existsSync(path.join(BRAINS_DIR, s.slug, f)), `brain ${s.slug}/${f}`);
  for (const sh of ["base", "open", "mid", "blink"])
    need(fs.existsSync(path.join(APP_ROOT, "public", "portraits", `${s.key}-${sh}.webp`)), `portrait ${s.key}-${sh}.webp`);
  console.log(`${s.short.padEnd(11)} system prompt ${String(systemFor(s.key)[0].text.length).padStart(6)} chars`);
}
console.log(bad ? `\n${bad} missing file(s)` : "\nall 12 seats complete");
if (!process.argv.includes("--api")) process.exit(bad ? 1 : 0);

const ai = await import("../lib/anthropic.mjs");
const { MODELS } = await import("../lib/council.mjs");
const sys = systemFor("promo");

const t0 = Date.now();
const card = await ai.stream({
  model: MODELS.seat, system: sys, maxTokens: 900,
  messages: [{ role: "user", content: `MOONSHOT ROAST ROOM COUNCIL, ROUND 1 OF 3: OPENING POSITION
You hold the PROMO seat. THE BRIEF: Should Linee go back to a buy 7 get 7 strip offer for 11.11 on Shopee? Options: (A) buy 7 get 7, (B) a new bundle with a GWP hook, (C) hold price and lean on live and creators.
Answer under 200 words in this shape:
SEAT: PROMO
STANCE: ...
OPTION SCORES: A n/10 · B n/10 · C n/10
PILLAR SCORE: n/10
CONFIDENCE: n/5
RUIN RISK: none | possible | likely
DOOR: one-way | two-way
THE CALL: one sentence.
WHY: 1. with a framework and source id, e.g. (Break-even uplift, S004)` }],
});
console.log(`seat card in ${((Date.now() - t0) / 1000).toFixed(1)}s\n`, card);
console.log(parseCard(card, ["A", "B", "C"]));
console.log(checkQuotes("promo", card));
console.log(ai.usage);
