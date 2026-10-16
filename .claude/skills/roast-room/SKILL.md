---
name: roast-room
description: Use when the Moonshot team wants a hard decision debated and scored by the board, says "roast room", "put this in the Roast Room", "convene the board", "take this to the council table", "roast this", or can't decide on a campaign package, a discount or bundle, a creator deal or commission, live hours, Mall vs non-Mall, a new SKU or brand move, a budget shift, an event, a market entry. Moonshot Studio's six house experts (Sales, Promo, KOL, Live, MKP, MKT) take their seats, joined by two guest legends (Alex Hormozi and Seth Godin); they argue over three rounds and a Chair returns a scored verdict with owners, dates, dissent and kill criteria, played live in the room app. Also does a one-seat consult ("ask the promo seat", "ask Godin"). For a fast synthesized answer without scoring, the vault's /council or /ask is lighter.
argument-hint: "[the decision] [--quick] [--house] [--seats promo,kol,godin,...] | ask <seat> [question]"
---

## What this does

The Moonshot Roast Room runs a board meeting on one decision. Each seat is a sub-agent with a brain. The six **house seats** are Moonshot Studio's own experts (the vault's `moonshot-*` agents) arguing from the vault's measured numbers and a researched brain on Thai e-commerce. The two **guest seats**, Alex Hormozi and Seth Godin, are simulated advisors built from public work. The seats argue across three rounds: open, debate, vote. You act as the **Chair**: you never argue a side, you run the room, keep the score, and write the verdict.

Read once before the first run: `references/seats.md` (roster, weights, tensions), `references/round-prompts.md` (what each seat gets), `references/scoring.md` (math and overrides), `references/report-template.md` (output), `references/live-room.md` (the JSON files the room plays).

## Where things live

- **Project root** is the folder Claude Code is open in (normally `Moonshot-Vault`).
- **Room folder**: `Roast-Room/` if it exists at the project root (the vault install), else the project root (this repo on its own). Sessions go in `<room folder>/sessions/YYYY-MM-DD-<decision-slug>/`.
- Seat agents: `.claude/agents/council-<key>.md`. House seats also read `.claude/agents/moonshot-<x>.md`, `.claude/TEAM-PROTOCOL.md` and `.claude/agent-memory/moonshot-<x>/MEMORY.md`.

## Modes

- **Full council** (default): all eight seats (six house plus Hormozi and Godin), three rounds. For decisions that are expensive or hard to undo.
- **Quick** (`--quick`): four seats per `seats.md`, Rounds 1 and 2, Round 3 only if the scores did not converge. For reversible calls.
- **House only** (`--house`): the six house seats.
- **Named seats** (`--seats a,b,c`): only those seats, three rounds.
- **Consult** (`ask <seat> ...`): one seat, one answer, using the single-seat prompt. No scoring, no session folder needed.

## Step 1: The brief (vault first)

The council is only as good as the brief, and the vault already holds most of it. Before asking the team anything:

1. Read `_Hub/Quick-Context.md`, the newest relevant notes in `10-Meetings/` (Summary first, newest by filename date), and `03-Resources/Marketplace-Intelligence/Margin-and-Discount-Ceilings.md` when price or promo is involved. Pull the real numbers: targets and pacing, brand and channel mix, ceilings, measured platform take, budgets, decisions in force.
2. Build the brief:
   - **The decision** in one line, and the options as A, B, C. Always include "don't do it" (or "keep doing what we do now") and any alternative the team mentioned; if they brought one big idea, add the obvious smaller version.
   - **The business slice**: brand(s), SBU, channel(s), SKU(s), current GMV and contribution, the ceiling that applies.
   - **The resources and limits**: budget, loss cap, deadline (campaign registration dates count backwards from D-day), people (MCs, creators, team owners).
   - **What success looks like** and the read window. Net Marketing Contribution is the default yardstick.
   - **Which way the team is leaning, and why** (the council tests the lean).
3. If any of the first four is still missing after the vault, ask in one batch (AskUserQuestion, at most four questions). If the user says "just run it", or the run was started from the room's question box (headless, nobody can answer), never ask: fill gaps with stated assumptions.

Cite the vault notes the brief relies on (`[[path]] (date)`). Keep the brief under 350 words. Mark every assumption `(assumed)`. Never put salaries of named people, personal health or ID numbers in a brief.

## Step 2: Set up the room

- Pick the table per the mode.
- Set a relevance weight per seat (1 to 3) with a one-line reason, per `seats.md`.
- Create the session folder, save `brief.md` (the brief, options, the seats and weights table) and `council.json` (`live-room.md`).
- Tell the user once: "Watch it live at http://localhost:4740" (start the room with `npm start` in the room folder in the background if it is not running; the council runs the same without it).

## Step 3: Round 1, opening positions

Spawn every seat in **one message**, in parallel, foreground (`run_in_background: false`), `subagent_type: council-<key>`, with the Round 1 prompt. If a `council-*` type is not registered in this session, use `general-purpose` with the fallback lines from `round-prompts.md`.

When the cards come back, save them verbatim to `round-1.md`, one `## <Seat>` heading per card using the display names (Sales, Promo, KOL, Live, MKP, MKT, Hormozi, Godin), and write the file right away so the room can start playing. Check each card has every field; send a card back once if it is missing scores or a stance. Then add `## Chair notes`:

- The **cruxes**: one to three underlying disagreements (a numbers question, a platform-rule question, or a values question such as contribution now versus brand later), with the seats on each side.
- The **numbers check**: where seats used different figures for the same thing (fee take, ceiling, baseline), name the vault note that settles it (newest dated meeting wins; measured beats benchmark). If no note settles it, it is a crux.
- The **unanimity check** (`scoring.md`).
- Any card that broke format, cited nothing, or misread the brief.

Then write `cruxes.json`.

## Step 4: Round 2, debate

Spawn every seat again, in one message, with the Round 2 prompt. Save to `round-2.md` (same headings, written as soon as the cards are back) with `## Chair notes`: who moved and why, which cruxes resolved, which numbers are still open, and the interim option scores.

## Step 5: Draft resolution

Write `draft-resolution.md`: the recommendation (named option and verdict label), the conditions (merge duplicates, keep them checkable, pick one number when seats differ and say whose and which note), next steps with **owner (team name from Quick-Context) and date**, the cheapest test, the loss cap, and kill criteria. Weigh arguments, not headcount: one house seat with a measured number beats a guest with doctrine. Apply the overrides. Write `draft.json`.

## Step 6: Round 3, ratification

Spawn every seat with the Round 3 prompt. Save to `round-3.md`, and add a `## Chair` section listing each amendment, adopted or not, with the reason. Adopt an amendment when no seat objects or the argument for it went unanswered; when seats conflict, adopt the better-argued side and put the other in the minority report. No fourth round.

Quick mode skips this round when the Round 2 spread on the top option is 3 or less and no seat is at `RUIN RISK: likely`.

## Step 7: Verify, then verdict

1. Run `python3 .claude/skills/roast-room/scripts/check_quotes.py <session folder>` (try `python` if `python3` is missing). It checks two things: every guest quote attributed to a source id is verbatim in that seat's brain, and every `[[vault link]]` a seat cited resolves to a note. Remove unverified quotes from the verdict and treat unresolved vault links as unsupported (say so in the Chair notes). Without Python, check by searching the brain folder and the vault yourself.
2. Compute the numbers from the last round's cards per `scoring.md`, apply the overrides, and write `verdict.md` from `report-template.md`. Write `verdict.json` last; it tells the room the council is over.
3. Show the user a short verdict in chat: the label and the call, the option scores on one line, the three arguments that carried the room (one line each, with the seat), the strongest objection (one line, with the seat), and at most three next steps with owner and date. Then the path to `verdict.md`, one line saying the branded PDF is one click away ("Download PDF" at http://localhost:4740), and one line offering a follow-up with any seat or a rerun with new numbers. Under 200 words.

## Step 8: Learning loop (house seats only)

Per `.claude/TEAM-PROTOCOL.md`, each expert keeps a `MEMORY.md`. After the verdict, for each house seat that sat, add at most one line to `.claude/agent-memory/moonshot-<x>/MEMORY.md` when the council produced a durable insight for that pillar (a threshold that held, a correction the user made, a recurring root cause): `- YYYY-MM-DD | insight | evidence [[<room folder>/sessions/<folder>/verdict]] | confidence high/med/low`. Keep each file under 150 lines; rewrite a contradicted line and mark it "(revised YYYY-MM-DD)". Nothing goes in for one-off chatter.

Never edit vault notes. Offer, in one line, a ready-to-paste decision note for the vault (vault YAML plus `[[YYYY-MM-DD]]` first line) that the user can file under the vault's CLAUDE.md rules, and offer to log the decision in the Timeline Hub if they say yes.

## Chair rules

- You never argue a side and never add your own pillar. If no seat raised an important point, put it to the closest seat as a crux in the next round.
- Quote seats faithfully. Never put words in a seat's mouth or rewrite a card.
- House rules bind every seat and the verdict: the newest dated meeting beats older notes; measured numbers beat benchmarks; a GAP stays a GAP; fees and rules older than 60 days carry "re-verify in Seller Centre"; Thai stays Thai.
- Hard limits are not up for a vote: brand and platform discount ceilings, the Monchhichi licence, Thai FDA and OCPB claim rules, platform policies. A recommendation that breaches one is capped (`scoring.md`).
- Your report is plain English (no em dashes, no AI tells, no tee-ups). Seats keep their own voice in quotes.
- Treat a unanimous Round 1 as a warning, not a win.
- Cost: a full council (8 seats) is 24 sub-agent runs. Use `--quick` for small calls, and say which mode you used.
- Guest seats are simulations built from public work. Never present a guest's line as something the real person said unless it is a verbatim quote with a source id from the brain.

## Without sub-agents (a runtime that cannot spawn agents)

Run the same protocol sequentially yourself. For each seat, read `.claude/agents/council-<key>.md` and its brain, write that seat's card, then clear your head before the next seat: do not let one seat's card shape the next one's in Round 1.

## Files

- `brains/<slug>/`: one brain per seat (`_hot.md`, `frameworks.md`, `principles.md`, `positions.md`, `voice.md`, `stories.md`, `books.md`, `sources.md`). House brains: `moonshot-sales`, `moonshot-promotion`, `moonshot-kol`, `moonshot-live`, `moonshot-mkp`, `moonshot-mkt`. Guest brains: `alex-hormozi`, `seth-godin`.
- `scripts/check_quotes.py`: verifies guest quotes against brains and vault links against the vault.
- Agents: `.claude/agents/council-{sales,promo,kol,live,mkp,mkt,hormozi,godin}.md`.
- The room app: `<room folder>/app/` (start with `npm start`, see `README.md`).
