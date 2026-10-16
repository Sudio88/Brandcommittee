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
| Levinson | `council-levinson` | Capital-scarce growth | What can time, energy and imagination do instead of money, and is it profit, not just sales? | `brains/jay-conrad-levinson/` |
| Godin | `council-godin` | Product and launch | Is it remarkable, and who exactly is it for? | `brains/seth-godin/` |
| Sharp | `council-sharp` | Brand growth evidence | Does it grow penetration, and are we easy to find and remember? | `brains/byron-sharp/` |
| Ries | `council-ries` | Positioning and category | Which word do we own, and which battle are we choosing? | `brains/ries-and-trout/` |
| Sutherland | `council-sutherland` | Reframing and signalling | What perception could we change instead of the product? | `brains/rory-sutherland/` |

Brain paths are relative to `.claude/skills/roast-room/`.

## Choosing the two guests (full council)

Name the regime first, then the guests. Opening with a doctrine produces a confident wrong answer.

| Regime | Situation at Moonshot | Invite |
|---|---|---|
| R1 New SKU, no money | New SKU or brand, no reviews, no media budget | Levinson + Godin |
| R2 Category entry | Entering an occupied category or a new market (SG, MY, CN shoppers) | Ries & Trout + Sharp |
| R3 Funded scale-up | Reviews exist, marginal ROAS above break-even, budget to deploy | Sharp + Sutherland |
| R4 Efficient plateau | ROAS fine, growth flat, promo-dependent | Sutherland + Sharp |
| R5 Repeat and referral | First order won; repeat, bundles, community | Levinson + Hormozi |
| Offer or price call | Discount depth, bundles, GWP, package buy, price change | Hormozi + Sutherland |

If two regimes fit, pick the guest pair whose doctrines disagree with each other: the fight is the value.

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
- Sharp (broad reach, continuous, physical availability) against Godin and Ries & Trout (smallest viable audience, one word, sacrifice).
- Hormozi (offer and 30-day cash) against Sutherland (change the perception, not the price) and Sharp (brand is built over years).
- Levinson (profit with imagination, no money) against MKT (funded media plan).
- KOL (creator GMV) against Promo (commission stacked on discount crosses the ceiling).
- MKP (platform rules, eligibility, shop health) against anyone who assumed a rule without a date.

If Round 1 comes back unanimous, be suspicious and press the seat whose pillar is most at risk in Round 2.
