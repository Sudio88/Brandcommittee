# Seats

## House seats (Moonshot Studio's own experts)

| Seat | Agent | Team role (vault) | Pillar | Owns the question | Brain |
|---|---|---|---|---|---|
| Sales | `council-sales` | `moonshot-sales` | Sales performance and forecast | Does this close the gap to target at a contribution we can bank? | `brains/moonshot-sales/` |
| Promo | `council-promo` | `moonshot-promotion` | Pricing and promotion | Is it above the margin floor, and is the uplift truly incremental? | `brains/moonshot-promotion/` |
| KOL | `council-kol` | `moonshot-kol` | KOL, creators and affiliates | Can the SKU fund the creator, and which creators actually move GMV? | `brains/moonshot-kol/` |
| Live | `council-live` | `moonshot-live` | Live commerce | Does it pay per live hour, and can the MCs run it? | `brains/moonshot-live/` |
| MKP | `council-mkp` | `moonshot-mkp` | Marketplace operations | Do the fees, rules and shop health allow it? | `brains/moonshot-mkp/` |
| MKT | `council-mkt` | `moonshot-mkt` | Marketing and growth | Is the spend incremental on contribution, and does it build the brand? | `brains/moonshot-mkt/` |

## Guest seats (simulated advisors built from public work)

| Seat | Agent | Pillar | Owns the question | Brain |
|---|---|---|---|---|
| Hormozi | `council-hormozi` | Offers, pricing, and sales | Will people pay, how much, and how do we close? | `brains/alex-hormozi/` |
| Godin | `council-godin` | Product and launch | Is it remarkable, and who exactly is it for? | `brains/seth-godin/` |

Brain paths are relative to `.claude/skills/roast-room/`. A full council seats all eight.

## Relevance weights

The Chair sets a weight per seat for each decision, before Round 1, and writes the reason in one line.

| Weight | Meaning |
|---|---|
| 3 | This decision lives in the seat's pillar |
| 2 | The pillar is materially affected |
| 1 | The pillar is touched at the edges |

Every seat is at least 1. Exactly one or two seats get a 3, and at least one 3 goes to a house seat: the people who own the numbers carry the decision. Guests are capped at 2.

## Quick council

`--quick` seats four: the two highest-weight seats, Sales or Promo as the contribution check (whichever is not already in), and the seat most likely to disagree with the others (often a guest; the Chair names why).

## Natural tensions to expect

- Promo and Sales (contribution now, ceilings, loss caps) against MKT and Live (traffic, reach, live-only price drops).
- MKT (broad reach, continuous media) against Godin (smallest viable audience, remarkable product first).
- Hormozi (offer and 30-day cash) against Godin (build the thing people talk about) and MKT (brand is built over months).
- KOL (creator GMV) against Promo (commission stacked on discount crosses the ceiling).
- MKP (platform rules, eligibility, shop health) against anyone who assumed a rule without a date.

If Round 1 comes back unanimous, be suspicious and press the seat whose pillar is most at risk in Round 2.
