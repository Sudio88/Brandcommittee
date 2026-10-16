
<!-- roast-room -->
## Roast Room (board-level decisions)

- For a hard, expensive or hard-to-undo decision (campaign package, discount depth, creator deal, live hours, Mall vs non-Mall, new SKU, budget shift, market entry), offer `/roast-room <decision>`: the six house experts plus Hormozi and Godin debate it over three rounds and the Chair returns a scored verdict with owners, dates and dissent. Use `/council` or `/ask` for quick answers.
- If the user asks to open the room, run `npm start` in `Roast-Room/` in the background and point them to http://localhost:4740.
- Councils are saved in `Roast-Room/sessions/<date>-<decision>/`. The Chair follows `.claude/skills/roast-room/references/live-room.md` exactly so the room can play them.
- Guest seats (Hormozi and Godin) are simulations built from public work. Never present their words as something the real person said unless it is a verbatim quote with a source id from that seat's brain.
- House seats never edit vault notes during a council. After the verdict the Chair may add one dated line per seat to `.claude/agent-memory/moonshot-<x>/MEMORY.md` and offers a ready-to-paste decision note.
