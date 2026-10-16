# Live room files

The Moonshot Roast Room (a local web app on http://localhost:4740) watches the sessions folder and plays a council as its files appear: portraits talk one at a time, rebuttal arrows fly, votes land, and the verdict comes up. It reads the round files you already write, plus four small JSON files. Write each one at the moment listed, as plain JSON (no comments, no trailing commas). Seat names can be keys (`promo`) or display names (`Promo`, `Ries & Trout`).

The room is optional. Write these files anyway; they cost a few lines and the council runs the same without the room.

## Order

| When | File |
|---|---|
| Step 2, with `brief.md` | `council.json` |
| Round 1 cards back | `round-1.md` (one `## <Seat>` heading per card, cards verbatim, `## Chair notes` last) |
| After the Round 1 Chair notes | `cruxes.json` |
| Round 2 cards back | `round-2.md` |
| With `draft-resolution.md` | `draft.json` (skip in quick mode when Round 3 is skipped) |
| Round 3 cards back | `round-3.md` |
| Last, after `verdict.md` | `verdict.json` |

## council.json

```json
{
  "title": "Join the 11.11 Shopee package",
  "decision": "Buy the Shopee 11.11 package for Monchhichi x Linee, or not.",
  "mode": "full",
  "options": [
    { "id": "A", "label": "Buy the full package" },
    { "id": "B", "label": "Seller vouchers only" },
    { "id": "C", "label": "Skip, push TikTok live" }
  ],
  "weights": {
    "promo": { "weight": 3, "reason": "Package economics vs the ceiling" },
    "mkp": { "weight": 2, "reason": "Campaign eligibility and fees" }
  },
  "seats": ["sales", "promo", "kol", "live", "mkp", "mkt", "hormozi", "sutherland"],
  "brief": "Two or three sentences.",
  "assumptions": ["Package price as quoted by Shopee (assumed)"]
}
```

`mode` is `full` or `quick`. `seats` lists only the seats at the table. Give every seat at the table a weight (1 to 3). Option labels stay short: under 50 characters.

## cruxes.json

```json
{
  "cruxes": [
    {
      "question": "Does the 11.11 package pay back above the Linee ceiling?",
      "sides": [
        { "position": "No, vouchers only stay above the ceiling", "seats": ["Promo", "Sales"] },
        { "position": "Yes, the package buys traffic we cannot get", "seats": ["MKT", "Live"] }
      ]
    }
  ],
  "unanimous": false,
  "note": "One plain sentence on what the room is fighting about."
}
```

One to three cruxes. Questions under 90 characters, positions under 50.

## draft.json

```json
{
  "option": "B",
  "label": "GO WITH CONDITIONS",
  "recommendation": "One or two sentences.",
  "conditions": ["Checkable condition"],
  "next_steps": ["Step with a date"],
  "cheapest_test": "One line.",
  "kill_criteria": "One line."
}
```

## verdict.json

```json
{
  "label": "GO WITH CONDITIONS",
  "call": "One or two sentences the team can act on, naming the option.",
  "recommended": "B",
  "why": [
    { "point": "One line.", "seat": "Promo", "framework": "Break-even uplift" }
  ],
  "minority": { "seat": "MKT", "quote": "The seat's own words, copied from a card.", "would_have_to_be_true": "One line." },
  "next_steps": [ { "when": "This week", "action": "One line." } ],
  "kill_criteria": "One line.",
  "conditions": ["Checkable condition"],
  "fights": [ { "crux": "The question", "story": "Who was on each side, who moved, how it resolved." } ],
  "amendments": [ { "seat": "MKP", "amendment": "One line.", "adopted": true, "reason": "One line." } ],
  "cheapest_test": "One line.",
  "revisit": "When and with what numbers.",
  "override_note": ""
}
```

`label` is one of GO, GO WITH CONDITIONS, RESHAPE, WAIT, DON'T DO IT. Put the three strongest arguments first in `why` and at most three `next_steps`; the room shows those up front and folds the rest under "Full detail". The room computes the option scores, confidence, and votes itself from the cards, so they are not in this file.
