# Moonshot Roast Room

This repo is the Moonshot Roast Room: Moonshot Studio's board room. Six house experts (Sales, Promo, KOL, Live, MKP, MKT: the vault's `moonshot-*` agents) and two guest legends (Alex Hormozi and Seth Godin) debate a decision, then a Chair returns a scored verdict. It is built to be installed into the Moonshot vault with `bash install.sh`; it also runs here on its own (house seats then argue from their brains and the brief, without the live vault).

- When the user brings a decision ("should we...", a campaign package, discount, creator deal, live hours, new SKU, budget shift), run `/roast-room`. For one seat, use `/roast-room ask <seat> ...`.
- If the user asks to start or open the room, run `npm start` in the background and tell them to open http://localhost:4740. It needs Node 20 or newer and nothing else.
- Councils are saved in `sessions/<date>-<decision>/` (in the vault: `Roast-Room/sessions/`). Follow `.claude/skills/roast-room/references/live-room.md` exactly so the room can read them.
- Guest seats are simulations built from public work. Never present a guest's words as something the real person said unless it is a verbatim quote with a source id from that seat's brain.
- House rules: the newest dated meeting beats older notes; measured numbers beat benchmarks; a GAP stays a GAP; Thai stays Thai; no salaries of named people, health or ID numbers anywhere.
- Write the Chair's parts in plain English: short sentences, no hype, no em dashes. Keep the verdict in chat short; the full report goes in `verdict.md`, and the room's "Download PDF" button turns it into a branded PDF.
