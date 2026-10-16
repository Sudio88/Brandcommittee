# Moonshot Vault: marketplace intelligence, brand notes and expert memories for six advisory seats

Extracted 2026-10-16 from the Google Drive folder "Moonshot-Vault" (read-only; no Drive file was edited).

**How to read this file**
- Each item is cited as `[[vault/path/note]] (note date)`. A section ID such as §C4 points to a section of the raw research record.
- **Vault says** means the item is stated in the note. **Inference** marks my own reading, which the vault does not state.
- Evidence grades are copied verbatim from the source: PRIMARY / DOCUMENTED, SECONDARY / REPORTED, PRACTITIONER / UNVERIFIED, GAP. The C-section tags `[DOC] [WIDE] [ONE] [⚠]`, and the labels UNVERIFIED and VERIFY, are also kept as written.
- Thai text is quoted exactly as it appears in the vault.
- Left out on purpose: bank account and SWIFT details (in the Monchhichi collab README), personal email addresses, salaries, health data, ID numbers and credentials.

## Sources read

| Vault path | Date |
|---|---|
| moonshot-sales / -promotion / -kol / -live / -mkp / -mkt `/MEMORY.md` | 2026-10-16 (all six) |
| 03-Resources/Marketplace-Intelligence/_MOC | 2026-09-19 |
| 03-Resources/Marketplace-Intelligence/Margin-and-Discount-Ceilings | 2026-09-19 |
| 03-Resources/Marketplace-Intelligence/TikTok-Shop-GMV-Max | 2026-09-19 |
| 03-Resources/Marketplace-Intelligence/Campaign-Prep-Platform-Rules | 2026-09-19 |
| 03-Resources/Marketplace-Intelligence/Brand-Building-Recipe-Thailand | 2026-09-19 |
| Double Digits/knowledge/campaign-prep-gaps | 2026-09-19 |
| Double Digits/research/raw-research-2026-09 (sections A–E) | 2026-09-19 |
| 02-Areas/Marketing-Brand/TikTok-Q3-2026-Beauty-Fest-Package | 2026-05-20 |
| 02-Areas/Marketing-Brand/2026-10-16-Weekly-MKT-7-14Oct-Insight | 2026-10-16 |
| 02-Areas/Marketing-Brand/2026-10-16-10.10-Shopee-Review-Reconciliation | 2026-10-16 |
| 02-Areas/Marketing-Brand/2026-10-16-10.10-MKP-Recap-Reconciliation | 2026-10-16 |
| 02-Areas/Marketing-Brand/2026-10-16-Weekly-Insight-10.10-and-Content | 2026-10-16 |
| 06-Entities-Brands/ The-Spiffy-Patch-Brand-Voice (2026-07-01), The-Spiffy-Patch-Naming (2026-06-29), Loom-by-Linee (2026-05-20), Loom-Why-Story (2026-07-14), Linee (2026-05-20), Linee-Professional (2026-05-20), Moonshot-Labs (2026-05-20), Moonshot-Corporation (2026-05-20), _MOC (2026-05-20) | as listed |
| 01-Projects/The-Spiffy-Patch-Launch | 2026-07-01 |
| 01-Projects/Control-Tower/README | 2026-05-20 |
| 01-Projects/Monchhichi-Linee-Collab/README (2026-05-25), GTM-Plan (2026-05-28), Flavor-Stories (2026-05-25) | as listed |

Notes on coverage:
- `06-Entities-Brands/` has no standalone Monchhichi note. The Monchhichi brand terms come from `01-Projects/Monchhichi-Linee-Collab/`.
- `Double Digits/knowledge/` also contains brand-building-recipe-thailand.md and tiktok-shop-gmv-max.md. They appear to be earlier copies of the Marketplace-Intelligence notes (same date and size). I did not diff them line by line.
- `03-Resources/Marketplace-Intelligence/Raw-Research-Record-2026-09` (72KB) is the vault-filed copy of the Double Digits raw research record. I read the Double Digits copy.

---

## 0. Cross-seat ground rules the vault sets

**Fees and grading**
- Use the take rates measured from Moonshot's own statements, not published fee stacks: **Shopee 33%, TikTok 26.3%**. Source: [[03-Resources/Marketplace-Intelligence/Margin-and-Discount-Ceilings]] (2026-09-19), confirmed in [[moonshot-mkp/MEMORY]] (2026-10-16).
- Keep the evidence grades. Never present a practitioner claim as fact, and never fill a GAP with a plausible number. Source: [[03-Resources/Marketplace-Intelligence/_MOC]] (2026-09-19).
- Thai platform fees changed four times in 2026. Re-verify commission, penalty points, campaign windows and VAT in Seller Centre before using them in a model. Source: same note.

**Benchmarks and reporting basis**
- Do not invent Thai benchmarks. AOV, return rate, cancellation rate, COD share and repeat purchase have no credible published Thai figure (all GAP). Measure them from Moonshot's own exports. Source: [[_MOC]] (2026-09-19); [[Double Digits/research/raw-research-2026-09]] §D8 (2026-09-19).
- Pick one GMV definition for every campaign readout, ideally confirmed basis with the platform-rebate line visible. Placed-basis ROAS flatters results by about 8–10%. Source: [[02-Areas/Marketing-Brand/2026-10-16-10.10-MKP-Recap-Reconciliation]] and [[...-10.10-Shopee-Review-Reconciliation]] (2026-10-16).
- The SBU dashboard export is the single source for weekly numbers. The MKP sheet reports Linee about 8% (฿107k) higher. Source: [[02-Areas/Marketing-Brand/2026-10-16-Weekly-MKT-7-14Oct-Insight]] (2026-10-16).

**Economics gate and dashboard**
- The Control Tower sales co-pilot runs the margin numbers as an economics gate before any behavioural argument. It refuses to run on an assumed margin. Source: [[Margin-and-Discount-Ceilings]] (2026-09-19).
- Control Tower RAG thresholds are locked. Source: [[01-Projects/Control-Tower/README]] (2026-05-20).

| Signal | RED | AMBER | GREEN |
|---|---|---|---|
| ROAS vs 4× target | ≤2.4× | 2.4–3.4× | ≥4.4× |
| GMV vs same day last week | ≤−30% | −10 to −30% | ≥+15% |
| MTD pace vs target | gap >25% with <10 days left | gap 10–25% | ≥+10% ahead |
| Refund rate | >5% | 3–5% | <2% |

A compound red fires a Google Chat alert. Alerts are routed by issue to role owners: Marketing, Ops, KOL/content, Brand, Live, and the founder for pace gaps.

---

## Seat 1: Sales Performance

### Measured numbers (vault says)

**Concentration and targets**
- Shopee was **83% of September sales**. "Any Shopee issue is a company-level issue." Confidence high. Source: [[moonshot-sales/MEMORY]] (2026-10-16), citing the 2026-09-25 meeting `สรุปผลการดำเนินงานและกลยุทธ์การตลาด`.
- Shopee carried **90.3%** of combined 10.10 GMV. Source: [[...-10.10-MKP-Recap-Reconciliation]] (2026-10-16).
- September targets were revised **16M → 12M → 11M**. Peter's rule: "lock targets, don't revise". Confidence high. Source: [[moonshot-sales/MEMORY]] (2026-10-16).
- The September result is in conflict and unresolved. The 09-17 meeting says about 9.5M against 11M; the 09-25 meeting says "89% of target". Confirm the base before citing either. Source: same.
- Oct 1–6 ran at about **65% of pace**. Spend fell 43% and contribution fell 26%, so cutting spend cut sales by more than it saved. Confidence medium. Source: same.

**Portfolio week, 7–14 Sep → 7–14 Oct.** Source: [[...-Weekly-MKT-7-14Oct-Insight]] (2026-10-16).

| | GMV | Ads | ROAS |
|---|---|---|---|
| Portfolio | ฿2.034M → ฿1.726M (−15.2%) | −23.7% | 3.66 → 4.07 |
| Linee (ex-Monchhichi) | −21.4% | — | — |
| Monchichi | +53.6% (mostly pre-order) | — | — |
| Moonshot | −35.6% | — | — |
| Spiffy | +107% | — | — |

Normal (non-campaign) days fell too:
- Linee: ฿141.5k → ฿113.2k per day
- Moonshot: ฿39.2k → ฿27.6k per day

The note's verdict: "a base problem, not a campaign problem."

**10.10 day**
- Portfolio 10.10 GMV was ฿581k against ฿664k on 9.9 (−12%), on 20% less ad spend. Source: [[...-Weekly-Insight-10.10-and-Content]] (2026-10-16).
- That headline hides the Linee brand: **−25% vs 9.9 and −50% vs 7.7**. Source: same.
- The root cause is **new-buyer acquisition**. Linee new buyers went 1,817 → 994 → 787 across 7.7, 9.9 and 10.10; returning buyers stayed flat at about 170–180. Source: same.
- Shopee-only confirmed sales were ฿531k: −17.2% vs 9.9 and +2.2% vs 8.8, so two cycles with no growth. There were 1,062 buyers, 65% of them new. Source: [[...-10.10-Shopee-Review-Reconciliation]] (2026-10-16).

**Three different 10.10 totals.** Source: [[...-MKP-Recap-Reconciliation]] (2026-10-16).

| Readout | 10.10 total | vs 9.9 |
|---|---|---|
| MKP recap (all platforms, probably placed basis) | ฿635.8k | −10.2% |
| Double-digit decks | ฿581k | −12% |
| Shopee review (Shopee only, confirmed) | ฿531k | −17.2% |

**Funnel and timing**
- Cart bank: Linee banked 8,605 cart units over 4–9 Oct. Cart-to-buyer rate rose from 23–33% during that week to 49.2% on D-day, while add-to-cart stayed flat (36.8% → 37.1%). "The day only harvested intent banked beforehand"; nobody owns that number. Source: [[...-Shopee-Review-Reconciliation]] (2026-10-16).
- On 10.10, the 02:00–11:00 block lost ฿86.9k with no owner, and the 13:00–21:00 block gained ฿76.6k. Source: same.
- Linee cancellations rose from 7.6% to 15.6%; 26 of the 117 cancels came in the 00:00 hour. Source: same.

### Rules and doctrines (vault says)
- Control Tower answers four daily questions: **PACE, MOVEMENT, HEALTH, PLAYBOOK**. MOVEMENT is decomposed into traffic / conversion / basket. Source: [[01-Projects/Control-Tower/README]] (2026-05-20).
- Set targets per brand and per platform before each campaign. 10.10 had none, so every "vs target" field was blank. Source: [[...-Shopee-Review-Reconciliation]], [[...-Weekly-Insight-10.10-and-Content]] (2026-10-16).
- Treat higher conversion on shrinking traffic as "a warning sign, not a win" (harvest, not improvement). Source: [[...-MKP-Recap-Reconciliation]] (2026-10-16).
- Use **product visitors** for cross-month trends. Shopee changed its shop-visitor metric on 1 Oct. Source: [[...-Weekly-MKT-7-14Oct-Insight]] (2026-10-16).
- Suppress ROAS when spend is under about ฿1k. Source: same.

### Research conclusions, graded
- Thai e-commerce conversion rate is **2.2% (2024) → 2.4–2.9% projected 2026**. Health & Beauty is 3.2–4.0%, but that figure is regional, not Thai. [SECONDARY]. Source: [[raw-research-2026-09]] §D8 (2026-09-19).
- Thai platform share in 2024: Shopee 50%, Lazada 28%, TikTok Shop 12.3%. [PRIMARY — กขค.]. Source: §D6.
- TikTok Shop is about 33% in 2026. [SECONDARY, directional]. Source: §D6.
- About **40% of annual sales** land in Double Digit Day campaigns, and D-day spikes **+494%** vs normal. [ONE, platform-published and self-serving]. Source: §C5.

### Memory lessons
These are the four sales memory lines quoted above: the Oct 1–6 spend cut, Shopee at 83%, locked targets, and the conflicting September base. Source: [[moonshot-sales/MEMORY]] (2026-10-16).

### Inference
- Seat 1's first job is reconciling which number is "true" (placed vs confirmed; SBU vs MKP) before judging pace.
- The vault's own evidence keeps pointing to new-buyer decline as the level problem and to timing as the shape problem.

---

## Seat 2: Pricing & Promotion

### Measured numbers (vault says)

All in this subsection come from [[03-Resources/Marketplace-Intelligence/Margin-and-Discount-Ceilings]] (2026-09-19) unless stated.

**Formula.** Margin before advertising = **1 − platform take − COGS** (each as a share of selling price).

**Platform take**

| Source | Shopee | TikTok | Grade |
|---|---|---|---|
| Published beauty fee stack | 25.7% | 21.9% | SECONDARY |
| BP `commission` line alone | 9.4% of gross | — | PRIMARY, but one ledger line |
| **Own monthly statements, Jan–Jul 2026** | **33%** | **26.3%** | **PRIMARY — measured** |

- Shopee's take rose every month of 2026, from about 21% to 33%.
- TikTok's 26.3% = commission 10.5 + growth 8.0 + transaction 3.2 + affiliate 4.6, measured on 15,766 Linee orders plus the MSL export (July 2026).
- Lazada: **35% is an assumption carried over from Shopee**, graded UNVERIFIED.
- Own site carries no marketplace take. It pays a 3.7% payment gateway, plus fulfilment and packaging outside the take.
- Trap: net-to-bank settlement of **64–69%** is not a fee rate. Seller promos and ads are already netted out, so using it as the take double-counts the discount.

**COGS as a share of price**

| Unit | COGS share | Basis |
|---|---|---|
| Linee | 10.0% | BP 2026 |
| Moonshot Labs | 8.0% | BP 2026 |
| Monchhichi retail | 12.0% | ฿42 on ฿349 |
| Spiffy box | 18.0% | ฿90 on ฿499 |

None of these has been checked against a costed BOM (inbound freight, duty, inspection). The note says they are "probably slightly light".

**Ceilings by brand and platform**

| Brand · platform | Margin | Ceiling | BEROAS @30% | Contribution zero |
|---|---|---|---|---|
| Linee · Shopee | 57% | 71% | 1.90× | 85% |
| Linee · TikTok | 64% | 78% | 1.68× | 86% |
| Moonshot Labs · Shopee | 59% | 77% | 1.80× | 88% |
| Moonshot Labs · TikTok | 66% | 82% | 1.61× | 89% |
| Monchhichi · Shopee | 55% | 65% | 2.01× | 82% |
| Monchhichi · TikTok | 62% | 73% | 1.77× | 84% |
| **Spiffy · Shopee** | 49% | **48%** | 2.43× | 73% |
| Spiffy · TikTok | 56% | 60% | 2.09× | 76% |

- Healthy ROAS bands: **Shopee 2.5–3.1× · TikTok 2.8–3.5× · Lazada 2.3–2.8×**.
- A discount costs **(1 − take)** of its depth. A 30% cut on Shopee costs about 20 margin points, not 30.
- A 50%-off Spiffy promo on Shopee needs **3.23×** marginal ROAS, above the 3.1× top of the band. The same promo on TikTok needs 2.66×, inside its band. The note calls this "a routing decision, not a veto".
- The 30% participate/skip floor "never binds for us". Citing it as a reason to join a campaign cites a test Moonshot always passes.

**Entity economics (2026 plan, not actuals)**
- Net ÷ gross: Linee 79.4%, MSL 52.9%. EBIT as % of net: Linee **18.9%**, MSL **7.0%**.
- "Linee can afford an experiment that misses. Moonshot Labs cannot."
- MSL `seller_promotion` reads 42.5% of gross against Linee's 10.2%, graded **UNVERIFIED** (it may be a plan-import mapping error).

**Campaign evidence from the memories and October notes**
- Shopee 9.9 ran at about **4× the daily baseline** (Aug about 100k, Sep about 120k). Confidence medium. Source: [[moonshot-promotion/MEMORY]] (2026-10-16).
- The **12.12 Shopee package (฿300k) was declined** because of a possible ฿100–200k loss. Use it as the reference loss cap for packages. Confidence high. Source: same.
- Monchhichi daily sales fell from **30–40k to about 10k** when the cap promo ended. "GWP scarcity is the driver, not price." Confidence medium. Source: same.
- Strip offer evidence: 7.7 ran buy 7 get 7 and strips did **฿450k**. 10.10 ran mostly 7 get 1 and strips did ฿179k. "Offer, not media, set the ceiling." Source: [[...-Weekly-Insight-10.10-and-Content]] (2026-10-16).
- On 10.10, 14+7 and 7+7 were live-only, so the strong offer barely reached shelf traffic. Source: [[...-MKP-Recap-Reconciliation]] (2026-10-16).
- Moonshot contribution per pack: **single ฿234 vs 4-pack ฿185**. Product cost is only 8–13% of price, while platform rebate (31.8%) and ads (18.6%) cost about five times the product. Source: [[...-Shopee-Review-Reconciliation]] (2026-10-16).
- The Linee gift stack ran **8 mechanics against a plan of 3**. The note's instruction: cap at three. Source: same.

### Rules and doctrines (vault says)
- The **TikTok price baseline**: the campaign price must beat the lowest price of the last 30 days, extended to **60 days for SS tiers**. Every discount between now and D-day lowers the floor you then have to beat. Source: [[Campaign-Prep-Platform-Rules]] (2026-09-19); [[raw-research-2026-09]] §B1–B2 [US].
- Once a campaign is approved you can **only increase stock or lower price, never the reverse**. Source: §B1 [DOCUMENTED, TH].
- Nominated vouchers cannot be edited after submission. Standard discounts and flash deals don't apply during a campaign; coupons and free shipping do stack. Source: [[Campaign-Prep-Platform-Rules]] (2026-09-19).
- LIVE flash-sale prices legitimately override campaign pricing. The note calls this "the only way to go deeper on D-day". Source: same.
- **Bundles over price cuts in beauty.** Thai consumers publicly accuse brands of raising prices before mega days. Source: same, plus §C8. The forum thread is quoted verbatim: *"11.11 ของเจ้าพ่อ e-commerce มันถูกจริงๆ หรือแค่วันลวงโลก"* [WIDE].
- An add-on deal is "the cheapest AOV lever that does not discount the hero SKU and therefore does not contaminate price history". Source: §A2.
- Multi-packs only at single-pack value. Do not chase AOV on Moonshot until the stock answer is in. Source: [[...-Shopee-Review-Reconciliation]], [[...-MKP-Recap-Reconciliation]] (2026-10-16).
- Monchhichi collab: royalty is charged on the actual selling price. Promos lower royalty proportionally, but VAT and platform fees do not reduce the royalty base. Source: [[01-Projects/Monchhichi-Linee-Collab/README]] (2026-05-25).

### Research conclusions, graded
- TikTok tier guidance [US]: SS tier 25–30% off against a 60-day low; S tier about 20%; co-funding 1:9 platform:seller. "Double Days are SS/S tier." Source: §B1.
- About 80% of Thai shoppers don't buy from the cheapest seller (Priceza) [WIDE]. Source: §C8.
- *ยอดขายโตแต่เงินเข้าต่อชิ้นบางลง* ("volume grows, per-unit cash thins"), and panic-discounting at D+7 against a D-day benchmark [ONE]. Source: §C7.
- "Frequent discounting trains customers to wait for sales" [ONE]. Source: §C7.
- Shopee has **no evidence of a formal historical lowest-price rule**; the documented check is cross-platform and point-in-time against Lazada. Source: §A3.
- The Thai calendar is near-continuous (*Shopee จัดแคมเปญอยู่เกือบตลอดทั้งเดือน*) [WIDE]. Payday ~23rd–month-end is a formal campaign. Source: §C2.
- VAT: 7% runs only to **30 Sep 2026** (Royal Decree No. 799); the default is 10% [PRIMARY]. Model about a 2.8% RSP rise. Source: §D3.

### Inference
- Spiffy on Shopee is the only pairing where a "50% off" headline is structurally loss-making on ROAS norms. This seat should route deep Spiffy promos to TikTok or own-site.
- The vault's 10.10 evidence favours restoring the buy-7-get-7 value on strips over deeper percentage cuts.

---

## Seat 3: KOL & Creator

### Measured numbers (vault says)

**Moonshot's own creator economics**
- Monchhichi affiliate commission is **3% on TikTok vs 15% on Shopee**; the team is negotiating TikTok to **7–10%**. Confidence high. Source: [[moonshot-kol/MEMORY]] (2026-10-16).
- Affiliate creator budget is **฿2M**. Milk manages **฿300k for ฿2M sales**. Big-KOL breakeven is **฿370k sales on a ฿250k fee**. Confidence high. Source: same.
- The first Monchhichi celebrity seeding got **about 10–20% posted, with no conversion**, so seeding needs post-rate control. Confidence medium. Source: same.
- Fan content: get consent before reposting (a fan objected on 10-08). Confidence high. Source: same.

**Campaign and content evidence**
- The Spiffy TikTok follower gain collapsed from **1,243 in September to 6 in Oct 1–13**. September growth was KOL-driven, so KOL support appears to have stopped. Source: [[...-Weekly-Insight-10.10-and-Content]] (2026-10-16).
- The Wave / Tops of Beauty fan push had about 9.9M potential X reach but only about 168 tracked TikTok clicks. Source: same.
- Only 39 Monchhichi buyers had bought Linee before, and mixed orders fell 120 → 15. Monchhichi sells to collectors and fans; it is not acting as a Linee acquisition engine. Source: same.

**Monchhichi launch plan** — [[01-Projects/Monchhichi-Linee-Collab/GTM-Plan]] (2026-05-28):
- Creator shortlist of 30–50: 70% nano/micro, 20% paid mid-tier, one dentist anchor.
- TikTok affiliate commission **15–25%**. Seeding wave 1 of 20 creators at L-6; hero and mid-tier contracts need at least a 4-week lead.
- **KOL watch metric**: at least 3 of the top 10 KOLs should read a full Thai sentence from the flavour stories. Source: [[.../Flavor-Stories]] (2026-05-25).

### Rules and doctrines (vault says)

All in this subsection come from [[TikTok-Shop-GMV-Max]] (2026-09-19) unless stated.

**Commission timing**
- Open Collaboration rate changes take **30 days** to go live. Target Collaboration changes take **5 days**.
- Decreases are lagged 30 days for creators already promoting; increases apply instantly.
- Targeted overrides Open, which overrides the shop-wide rate.

**Tiered commission and the two baskets**
- Tiered commission is order-count based and its **thresholds cannot be changed**.
- **Red basket (ตะกร้าแดง) vs yellow basket (ตะกร้าเหลือง).** These are one basket with two commission rates. The Shop Ads rate is set separately (1–80%), and Thai practitioners put red at about half of yellow (20% vs ~10%).
- Brief the red rate openly. Creators who find it unannounced are "the most common reason top Thai creators publicly complain about a brand and drift away".
- Pitch to creators: "a halved rate on five times the volume still wins. Sell the baht, not the percentage."

**Oral-care rate guidance**
- About **15% is the floor** to be visible in Open Collaboration. **20–25% Targeted with samples** is what gets a mid-tier creator to build a funnel.
- Do not import US benchmarks.

**Practitioner doctrine endorsed by the note**
- "Do not rush to buy affiliates. Creators join brands that already sell."
- "Judge creators on conversion, not views."
- "Choose partners on commission × scalable volume."

**GMV Max levers**
- Open the **Authorization Recommended** tab weekly: unauthorised creator videos that already generated orders.
- GMV Max Pro ACO = GMV ÷ (ad + affiliate cost). It excludes coupons and platform commission, and it tilts delivery toward lower-commission creative.

**Reseller and channel policing**
- A **ตัวแทน (reseller)** who opens their own shop becomes a competing seller.
- Policing: gate Open Collaboration, filter sample requests, keep hero SKUs Targeted-only, and search the product name weekly.

**Claims and penalties**
- TikTok Shop SEA bans superlatives ("#1", "best", "only") and any diagnose/prevent/treat/cure claim; enforcement escalates to regulator referral.
- Fake orders: up to **US$200 per violation**, plus a 90-day balance suspension.

**Stage gates.** Stage 1 (฿0–10m) runs no affiliate programme. Stage 2 (฿10–100m) builds the affiliate machine. Source: [[Brand-Building-Recipe-Thailand]] (2026-09-19).

### Research conclusions, graded

**Thai influencer rate card, 2026** [ONE — agency rate card, self-serving]. Source: [[raw-research-2026-09]] §C4.

| Tier | Post (THB) | Video (THB) |
|---|---|---|
| Nano (1–10K) | 3,000–8,000 | 5,000–12,000 |
| Micro (10–100K) | 6,000–15,000 | 10,000–25,000 |
| Mid (100–500K) | 45,000–80,000 | 65,000–120,000 |
| Macro (500K–1M) | 80,000–150,000 | 120,000–200,000 |
| Mega (1M+) | 90,000+ | 150,000+ |

- Multipliers: TikTok 0.8×, Live 2.0×, Video Review 2.5×.
- Worked example: a micro-KOL TikTok live slot costs about **฿16,000–40,000**.

**Commission and ecosystem**
- TikTok TH affiliate by category: skincare 15%, supplements 20%, new or promo SKUs 30–50% [ONE]. Source: §C4.
- 20%+ "actually moves creators" in campaign periods [ONE + inference]. Source: §C4.
- Minimum to join TikTok Shop affiliate in TH: 5,000 followers [WIDE]. Source: §C4.
- *ค่าคอมสูงไม่ได้แปลว่าขายดี* — "high commission ≠ high sales" [ONE]. Source: §C4.
- The platform bumps affiliate commission to 20% during campaigns [ONE]. Source: §C3.
- Shopee AMS co-sponsored commission ceiling is 18%, with 100,000+ affiliates [SECONDARY]. Source: §A2, §A4.
- Affiliate creators drive 60% of TikTok Shop revenue for some brands (AnyMind 2026) [SECONDARY, directional only]. Source: §D4.
- About 70% of TikTok Shop TH GMV comes from Thai creators (TikTok's own 2024 disclosure). Source: §D6.
- KOC vs paid talent: KOC programmes are ops investment and cannot be scaled quickly. Skincare validation takes 12–18 months. Source: §E5.

**GAPs**
- Creator booking lead times and campaign-season surcharges. Source: §C4.
- Seagull / 4U2 affiliate-day mechanics: "Do not let anyone sell a 'Seagull model' citing public data; there isn't any." Source: §C9.
- The "70% of GMV Max spend goes to affiliate clips" figure has no published source. Source: [[TikTok-Shop-GMV-Max]] §8.

**TikTok Q3 Beauty Fest package.** Source: [[02-Areas/Marketing-Brand/TikTok-Q3-2026-Beauty-Fest-Package]] (2026-05-20). The numbers below are TikTok's own claims.
- Q1'26 results: 100% average brand GMV uplift; 900+ creators met.
- Packages: Gold about ฿4.8M+ (fee ฿2.4M + ฿2M ads via GMV Max); Platinum about ฿21M+.
- Offline Region Tour: 150 creators per region.

### Inference
- Moonshot's measured TikTok affiliate line (4.6% of GMV in the 26.3% take) and Monchhichi's 3% rate sit far below the 15% visibility floor the vault recommends. That would explain weak organic creator pull on TikTok, but the vault does not draw this link explicitly.

---

## Seat 4: Live Commerce

### Measured numbers (vault says)

**Memory and trend**
- Live was the **only growing channel in September (+9% MoM)**. Confidence high. Source: [[moonshot-live/MEMORY]] (2026-10-16).
- Dual-channel live with the same host is **banned below Tier 6 (about ฿10M/month)**. Confidence medium. Source: same.
- There is **no own GMV-per-live-hour baseline yet**. Build one from exports before scaling hours. Confidence high. Source: same.

**Linee live**
- Linee LIVE fell from ฿317k to ฿221k (−30%) week on week, with live ads down only 9%. "Content or slot quality, not budget." Source: [[...-Weekly-MKT-7-14Oct-Insight]] (2026-10-16).
- Linee live sales: 9.9 ฿208k → 10.10 ฿128k. Source: [[...-Shopee-Review-Reconciliation]] (2026-10-16).
- The Linee 11:01 session did **฿77k at ฿45.6 per viewer, 3× the other sessions**, with peak concurrency of only 17. Source: same.

**Moonshot, Spiffy and Monchhichi live**
- Moonshot live ads returned **11.26 ROAS on 8.8**. On 10.10 they got ฿600 and zero attribution. Source: same.
- Moonshot LIVE fell from ฿103k to ฿61k after live ads went from 12.2k to 0.8k (September live ROAS 8.45). Source: [[...-Weekly-MKT-7-14Oct-Insight]] (2026-10-16).
- Spiffy LIVE rose from **฿9.1k to ฿19.4k with ฿0 live ads**: "Cheapest growth line in the portfolio." Source: same.
- Monchhichi Shopee LIVE grew from ฿69.9k to ฿138.7k, peaking 13:00–15:00. Source: [[...-Weekly-Insight-10.10-and-Content]] (2026-10-16).
- Exclusive Streaming Price on 10.10 was **฿0**, an unused lever. Source: [[...-Shopee-Review-Reconciliation]] (2026-10-16).

### Rules and doctrines (vault says)

**Format and timing**
- Sessions should run **60–90 minutes**. Under 30 minutes gets no algorithmic traction; over 2 hours causes fatigue.
- Increase LIVE frequency 50–100% during platform promos.
- Host performance drops **20–30% after four consecutive streaming days**.
- Beauty peak windows are **19:00–22:00 on weekdays and 11:00–13:00 on weekends**.
- Sources: [[raw-research-2026-09]] §B8 [US-derived]; [[Campaign-Prep-Platform-Rules]] (2026-09-19).
- Prime time is **20:00–24:00** [WIDE]. TikTok TH's 9.9 concurrent-viewer record came at **2 ทุ่ม (20:00) on 9 Sep — not at midnight** [DOC]. "The 19:00–21:00 block is where the day is won." Source: §C2; [[campaign-prep-gaps]] (2026-09-19).
- D-day: open LIVE **1 hour before** the official start, run 2–3 sessions, use LIVE Flash Sale to go below the registered price, and answer 1-star reviews within 2 hours. Source: §B8.

**Close formulas** — §C3
- **The 3-minute close**, TikTok TH's own formula [DOC]: 30s hook → 2-minute demo → 30s CTA.
- The Chinese **5-minute rotation** [WIDE]. Hybrid practice: 3-minute close on hero SKUs, 5-minute rotation on the long tail.

**CF ordering and stock**
- CF comment-ordering bots (*ระบบดูดคอมเมนต์ CF*) fail exactly when comment velocity spikes, which is when the price drops. Load-test before D-day. Source: §C3 [WIDE]; [[Campaign-Prep-Platform-Rules]].
- Mid-live stockout is the named nightmare, *ของหมดกลาง Live*. Check inventory 1–2× daily and announce limited quantities [WIDE]. Source: §C3.
- "Consistency beats intensity": publish a fixed live calendar [WIDE]. Source: §C3.

**GMV Max for LIVE.** Source: [[TikTok-Shop-GMV-Max]] (2026-09-19).
- LIVE GMV Max attributes all orders from all shops in the liveroom.
- Keep a supply of 50–70 videos in queue, or 5–10 new creatives per day.
- LIVE budget = 2–3× historical LIVE ad spend.
- Creative Boost is blind to GMV and is excluded from ROI Protection.

**11.11 plan.** Turn on Exclusive Streaming Price, run 3–4 prime sessions per brand, restore Moonshot live ads, and add a second push 18:00–23:00. Source: [[...-Shopee-Review-Reconciliation]], [[...-Weekly-Insight-10.10-and-Content]] (2026-10-16).

### Research conclusions, graded
- 9.9 2025 TH: **440,000+ live sessions in 4 days**, and 88% of views went to Thai sellers. The "+14,000%" figure is flagged `[⚠ treat as marketing, not a benchmark]`. Source: §C3.
- Freelance live hosts start at about **฿2,000 per session**. Source: [[TikTok-Shop-GMV-Max]] §7.
- Video/live commerce is about 25% of Thai e-commerce value [PRIMARY, Priceza Jan 2026]. Source: §D6.
- GAP: no published Thai guidance on host shift lengths or handover. Source: §C3, §C9.

### Inference
- The live evidence is consistent in one direction: when live ad support is cut, live GMV falls (Moonshot), but when the slot and host quality is wrong, budget does not fix it (Linee).
- The ฿45.6-per-viewer 11:01 session suggests daytime slots are under-tested.

---

## Seat 5: Marketplace Operations

### Measured numbers (vault says)

**Memory items** — [[moonshot-mkp/MEMORY]] (2026-10-16)
- The measured Shopee take is **about 33% vs the published 25.7%**. Always use the measured figure.
- **Shopee Prime/Extra is kept for Linee through Q4.** Test a Non-mall exit first, with the decision in Q1/April. Prime ≈ **11% of net sales** (July).
- The TikTok main account is unavailable; new and satellite accounts are in play.
- There is a stock integrity gap (system vs physical) on Monchhichi/Linee toothpaste. The warehouse picks from system stock only.

**Fee stacks** — [[raw-research-2026-09]] §D1–D2 (2026-09-19)

TikTok Shop, beauty, non-Mall [SECONDARY, eff. Jul 2026]:

| Line | Rate |
|---|---|
| Commission | 10.70% |
| Growth fee | 8.03% (cap ฿199/item) |
| Transaction fee | 3.21% |
| Infrastructure fee | ฿1.07/order |
| **Total** | **≈21.94%**; Mall ≈25.15% |
| GMV Max rebate | −1.07pp when ad spend >3% of trailing-30-day gross [PRIMARY] |

Shopee, beauty, non-Mall with ส่งฟรี Xtra [SECONDARY]:

| Line | Rate |
|---|---|
| Commission | 16.05% (13.91% optimistic) |
| Transaction fee | 3.21% |
| ส่งฟรี Xtra service fee | ~6.42% |
| **Total** | **≈25.7% + ฿1.07** (≈19.3% if not enrolled) |

Fee changes in 2026: TikTok changed fees on 21 Mar, 6 May and 5 Jul (about +4pp in eight weeks); Shopee on about 1 Jun and 4 Aug. Source: §D.

**Settlement and tax**
- TikTok settles D+7 business days + 1, so model about a 10–12 day cash lag. Source: §D1.
- Shopee holds funds 3 days, or **15 days for Mall**: "Mall status costs roughly two weeks of working capital". Source: §D2.
- TikTok withholding tax since 1 Jul 2025: 3% on platform fees and 1% on shipping, for juristic sellers. Source: §D1.

**Logistics costs**
- ฿19–32 per parcel; packaging and pick/pack ฿8–20 per order [UNVERIFIED]. Source: §D4.
- Returns / RTS / COD refusal: GAP. Use a placeholder of 5–10% RTS on COD, graded UNVERIFIED. Source: §D4.

**10.10 operations**
- 0 of 9 SKUs carried the Shopee Ads tag, and there were no custom product tags, so the post-mortem took 30 exports. Source: [[...-Shopee-Review-Reconciliation]] (2026-10-16).
- The platform rebate was about 31.8–31.9% of gross (฿177k in one day) and "sits in no channel P&L". Source: same.
- LOOM: 786 Shopee visitors and ฿0 sales in both weeks. "Fix it or delist it." Source: [[...-Weekly-MKT-7-14Oct-Insight]] (2026-10-16).
- Linee KIT: visitors +60% but buyers fell from 150 to 58 (conversion 5.4% → 1.3%), which points to a listing or offer failure. Source: same.
- Monchhichi pre-order: **31 Oct must ship about ฿188k** of orders. Source: same.

### Rules and doctrines (vault says)
Source: [[Campaign-Prep-Platform-Rules]] (2026-09-19) and [[Double Digits/knowledge/campaign-prep-gaps]] (2026-09-19). The working checklist built from them has **152 tasks** plus a 12 PLATFORM RULES tab.

1. **Two deadlines are usually already blown.** The TikTok Open Collaboration rate takes 30 days to go live, and the price-baseline window has already started.
2. **The published registration deadline is the last date, not the target.** Submit 2–4 weeks out. 9.9 got zero flash slots because "we were not in the queue", not because the mechanic failed: 147 impressions converted at 136 orders per 1,000.
3. **Campaign stock is deducted at approval, not on D-day.** External OMS sync is blocked while a SKU is under promotion, and an attempted sync can delete Shopee variants. Scope campaign SKUs out of the sync before nomination.
4. **Three penalty points means a 28-day campaign ban** and also gates voucher nomination. Points reset on the first Monday of Jan/Apr/Jul/Oct, so the **October reset falls between 10.10 and 11.11**. TikTok's 12-hour chat response is now an eligibility gate.
5. **Ad learning phases are hard deadlines.** GMV Max learns for about 7 days with no edits. Hold each ROI setting at least 3 days, so the last ROI edit is at **D-3**. Shopee caps GMV if the ROAS target is more than 25% above its maximum suggested ROAS.
6. **Promotion Days.** TikTok lowers the ROI goal 10/20/30% and adds +50% budget; enable it 3–5 days ahead. The baseline is the lower of the trailing 7-day ROI and the entered target. Shopee's equivalent is Speed Boost, which drops the effective target to about 70%.
7. **The courier, not the stockout, is the named failure:** *"แพ็กเสร็จแล้ว แต่ไม่มีรถมารับของ"*. If the last pickup is 17:00, packing ends at 16:00. Shopee's late-shipment cap is 5% for Mall and Preferred sellers, and non-fulfilment is measured on a rolling 7-day window, so "Mega-day ops failure doesn't cost this campaign, it disqualifies us from the next one."

Smaller rules from the same notes:
- Free Shipping (ส่งฟรี) is an entry ticket for campaigns.
- Free product boost: 5 products every 4 hours, six times a day.
- "Approved" is not "Scheduled".
- Content needs about 2 weeks to mature, so warm-up content must be live by D-14.
- Shoppers plan about 2.8 days ahead.
- 10.10 and 10.25 are one plan.
- ถูกชัวร์ / Real-time Bidding winners cannot withdraw for 24 hours and must hold stock with no cap.

### Research conclusions, graded

**Shopee nomination and penalties**
- Shopee Shocking Sale nomination is a 24-hour window, five working days out [DOCUMENTED]. Source: §A1.
- Bulk upload is limited to 1,000 rows. Source: §A1.
- Penalty tiers (3/6/9/12/15 points) come from a 2021 Malaysian document: "five years old, verify current TH tiers". Source: §A3.

**SKU rejection triggers** — §A3
- Shop rating below 4.2.
- Shipping time over 2 days.
- Product added within the last 24 hours.
- Not price-competitive against Lazada on price plus shipping.

**Timelines** — §A1, §C1
- Thailand's 11.11 window is among the shortest and latest in SEA: Shopee TH ran 6–15 Nov 2025.
- Registration deadlines: Shopee TH 6 Nov, TikTok TH 7 Nov [ONE].

**TikTok eligibility** — §B4 [US]
- SPS ≥3.5 to enrol and ≥3.0 to stay enrolled.
- 1% campaign service fee.

**Safety stock and operational risk** — §C6
- Formula in circulation [ONE, widely reproduced]: `Safety Stock = (Peak daily sales × Max lead time) − (Avg daily sales × Avg lead time)`.
- Some shops hit 23× normal volume on 9.9 [ONE].
- Multi-channel overselling is the #1 named stock risk [WIDE].
- The fear is *1-ดาว คะแนนร้านตก และลูกค้าที่ไม่กลับมาซื้อซ้ำ* (a 1-star review, falling shop rating and customers who don't return) [ONE].

**Post-campaign and cancellations** — §C7 [DOC/ONE]
- TikTok cancellation trap: if fewer than 90% of cancellation requests are handled in a month, the platform auto-approves future cancels under $30.
- *ห้ามขอให้ผู้ซื้อยกเลิกแทน*: sellers must not ask the buyer to cancel on their behalf.

**Open checks** (owners as named in the vault)
- Ploy: TH nomination lead time.
- Tammy: Shopee TH commission and technical support fee.
- May: whether Mall keeps manual bidding, and GMV Max Coupon availability for TH.
- Milk: red-basket rate per SKU.
- Account managers: co-funding and Super Brand Day allocation ("a conversation, not a search").
- Sources: [[Campaign-Prep-Platform-Rules]]; [[TikTok-Shop-GMV-Max]] §9.

### Inference
- The vault treats Moonshot's measured 33% Shopee take as already including the 2026 increases. Any model still on 25.7% is roughly 7 points optimistic on every Shopee SKU.

---

## Seat 6: Marketing & Growth

### Measured numbers (vault says)

**KPI and targets**
- **Net Marketing Contribution is the main KPI, not ROAS alone.** October targets are global ROAS **4.7** and keyword ROAS **4.0**. Confidence high. Source: [[moonshot-mkt/MEMORY]] (2026-10-16).
- The October plan line "1.5M × ROAS 5 = 8.5M" doesn't compute; it equals 7.5M. Confirm before reuse. Source: same.
- Event ROI has no attribution yet. Define a UTM or code before committing event money. Source: same.

**Brand spend efficiency**
- Monchhichi in September: **฿200k spend → ฿430k (about 50% cost of sale)**, vs Linee ฿800k → ฿3M. Confidence medium. Source: [[moonshot-mkt/MEMORY]] (2026-10-16).
- Monchhichi CPAS claimed about 70% of GMV (CPAS ROAS about 18.6), which is likely over-attribution: "Don't scale CPAS on that number." Source: [[...-Weekly-MKT-7-14Oct-Insight]] (2026-10-16).

**Moonshot ad-cut analysis.** Source: [[...-Weekly-MKT-7-14Oct-Insight]] (2026-10-16).
- GMV fell ฿150k while ads saved ฿64.7k, a marginal return of about 2.3 on the cut spend.
- Break-even ROAS is about **1.7–1.9** at a 58% variable margin, so the cut cost about ฿20k+ profit.
- **The team's rule is wrong.** "Add Patch ads back while ROAS stays above 4" uses average ROAS; the rule should be marginal ROAS above about 1.9.
- This contradicts the Shopee review's "cut another 30%" (modelled marginal ROAS 1.12, elasticity 0.242, n=12), which the note says is "a decision rule, not a fact". The stock position decides between them.

**Spiffy**
- Spiffy is roughly break-even: about ฿39k left after about 42% fees and COGS, against ฿34k ads. Incremental ROAS on added spend is 3.83. "Keep at this level, don't scale until the margin line is in." Source: same.
- Spiffy TikTok returned ROAS **0.46**: cut it. Source: same.

**Linee channels**
- Linee strips lost reach, not conversion. Visitors fell 28% while conversion held at about 11.5%. "Put budget back into strip reach before changing the listing." Source: same.
- Linee TikTok GMV Max ROI rose from 2.93 to 3.93 while impressions fell from 297k to 56k: "Starved, not broken". Hero clips are 4–7 months old. Source: [[...-Weekly-Insight-10.10-and-Content]] (2026-10-16).
- Linee CPAS fell 29.8k → 6.0k between 7.7 and 10.10, in line with the traffic loss. Source: same.
- Linee GMV Max Auto returned ROAS 7.04 on ฿7.1k and was never scaled. Linee Search Brand Ads spent ฿591 to return ฿109: kill it. Source: [[...-Shopee-Review-Reconciliation]] (2026-10-16).
- Moonshot CPAS cart value was ฿330.6k, with only 5.8% converted and no retargeting. Source: same.

**Content and attribution**
- Content volume was about 95 pieces per month, but fresh TikTok clips sold ฿0.9k on 10.10 vs ฿14.0k on 7.7. "The content engine and the commerce engine are disconnected." Source: [[...-Weekly-Insight-10.10-and-Content]] (2026-10-16).
- Cross-sell failed twice: Linee×Monchhichi mixed orders 120 → 15, Moonshot×Spiffy 32 → 3. "Adding a brand to a shop is not building baskets." Source: same.
- **9.9 attribution case**: GMV Max ROAS **4.01×** and improving, while incremental margin fell from 48% to 43% and first-order contribution per new buyer fell from **฿194 to ฿137**. Source: [[Campaign-Prep-Platform-Rules]], [[TikTok-Shop-GMV-Max]] (2026-09-19).
- 9.9 funnel: reach +80%, buyers +24%, click-to-buy fell from 13.2% to 8.9%. "We are losing them at the page." Source: [[campaign-prep-gaps]] (2026-09-19).

### Rules and doctrines (vault says)

**GMV Max settings.** Source: [[TikTok-Shop-GMV-Max]] (2026-09-19).
- ROI target = historical non-LIVE GMV ÷ ad cost.
- Budget = 2 × non-LIVE GMV ÷ ROI target.
- Keep budget utilisation under 80%.
- Actual ROI above 120% of target is TikTok's abnormal flag (budget-constrained); healthy is 80–120%.
- ROI Protection is void for the whole day on any manual ROI change.
- The note's summary: **"TikTok pays us to set ROI at or below recommended and then leave it alone."**
- **Never quote a GMV Max ROI as a ROAS.** Capture a 14–28 day baseline and hold out a comparable SKU; track new-buyer rate and CPA separately.
- Use auto-select creative and include affiliate videos.

**Stage gates.** Source: [[Brand-Building-Recipe-Thailand]] (2026-09-19).
- COGS must be ≤20–25% of RSP, a 4–5× markup.
- "Under 10% net at ฿200m+ means you are buying revenue."
- Model another 3pp of take against you.
- Offline is the step function from ฿100m to ฿500m.
- No single foreign market above 30% of revenue.
- The product card, not the video, is the asset.

**Spend allocation**
- Keep 5–10% of spend on a consideration objective. GMV Max keeps returning to existing converters, so frequency climbs. The 90/10 split is advice for new brands, and "Linee has demand." Source: [[campaign-prep-gaps]] (2026-09-19).
- Monchhichi collab ROAS gates: **>4× scale / <2.5× cut** over Days 1–14. Day-7 kill/scale call. Collapse to three drops if Drop 2 GMV is under 50% of Drop 1. Source: [[01-Projects/Monchhichi-Linee-Collab/GTM-Plan]] (2026-05-28).

### Research conclusions, graded
- **BEROAS** [SECONDARY, Aug 2026]: TikTok non-Mall 2.2–2.8× break-even, 2.8–3.5× healthy; Shopee 2.0–2.5× / 2.5–3.1×; Lazada 1.8–2.3×. Source: §D4.
- Selling cost is 60–70% of GMV. Source: [[Brand-Building-Recipe-Thailand]] §0.1.
- Beauty ROAS 2.82–3.50×, TikTok beauty 3.5×, Meta 2.19× (retargeting 3.61×) [SECONDARY]. Source: §D4.
- TikTok CPC for beauty ฿1–2; CPM ฿50–200 [ONE]. "Ads get expensive on D-day" is unverified: one agency says mega days are cheaper per order `[⚠]`. Source: §C5.
- LINE Ads spend curve: 30% D-7→D-3, 50% D-day, 20% D+1→D+3 [ONE]. Source: §C5.
- Shopee Ads heuristics: bid 20–30% below the suggested rate, manage to CIR, 3-day review cycle [WIDE-ish]. Source: §C5.
- CPAS (Meta → Shopee) for cart retargeting is standard in Thailand [WIDE]. Source: §C5.
- Hero SKU = 30 orders/day for 30 days; Super Hero = 100 orders/day for 30 days [ONE]. Source: §C5.
- The two GMV Max consultants disagree by about 3× on starting budget (฿500–1,000 vs ฿1,700–3,400 per day). Source: §C5.
- **Category and market numbers.** Thai toothpaste is about ฿12,025m (2025), whitening is 12%, and the channel split is 75% modern trade / 20% traditional / 5% online. So online oral care is a **~฿600m pond** [SECONDARY, Marketeer]. Source: §D7; [[Brand-Building-Recipe-Thailand]] Part 4.
- **Offline costs.** A 7-Eleven listing is about ฿1,000,000 per SKU; trade terms run over 10% of sales; actual payment arrives in about 62 days; over 50% of retail price goes to distribution [SECONDARY]. Source: §E5.
- **Brand cases** [SECONDARY]. MizuMi had 3 SKUs at ฿100m and ~20% net at ฿1bn; Skinsista stalled around ฿229–282m with ~4.7% net. "Sought at shelf vs bought at shelf" is flagged as inference from SECONDARY data. Source: §E1, §E7.
- **Hismile vs Zenyum** [SECONDARY]. Hismile: >60% gross margin, zero outside capital, a 2.5★ Trustpilot average across 21,000+ reviews, "exactly our lane — PAP+". Zenyum: acquired by makeO, price undisclosed. Source: §E4.
- **Competitor**: usmile entered Thailand in 2026, a direct threat to Linee. Source: §E1.

### Inference
- The vault repeatedly argues for marginal (not average) ROAS and for contribution over ROAS.
- Seat 6 should treat "ROAS above 4" style rules as a known failure pattern.
- The 7.7 vs 10.10 strip comparison is the strongest internal evidence that offer depth and reach, not efficiency, drive Linee's level.

---

## Brand section

### Linee (core oral care, Linee Professional Co., Ltd.)

**Positioning, tier and channel** — [[06-Entities-Brands/Linee]], [[06-Entities-Brands/Linee-Professional]] (2026-05-20)
- Fluoride-free, hydroxyapatite-based, **"premium-but-accessible"**.
- Primary channel is TikTok Shop Thailand; Shopee was 83% of September group sales. Source: [[moonshot-sales/MEMORY]] (2026-10-16).
- Celebrity collab: Bell Chanel. Gross margin about 40–45%. Patent filed on a dual-tube dispenser.

**SKUs and hero products**
- Toothpaste, whitening mouthwash (FDA in progress), and a kids line (Jul 2026).
- October notes name **Whitening Strips** as the hero ("the whole story"), plus the Whitening KIT and Aura White. Source: [[...-Weekly-Insight-10.10-and-Content]] (2026-10-16).
- The Whitening Kit is about ฿1,545 per unit; Shopee shows about ฿3,100 per order because buyers take about two units. Source: [[_MOC]] (2026-09-19).
- Regular Linee toothpaste is ฿179. Source: [[01-Projects/Monchhichi-Linee-Collab/Nomyen-Packaging]] (2026-05-28).

**Economics** — [[Margin-and-Discount-Ceilings]] (2026-09-19)
- COGS 10% of price. Ceiling 71% on Shopee and 78% on TikTok. EBIT plan 18.9% of net.

**Guardrails**
- The Thai FDA hydrogen peroxide limit is unverified. ASEAN aligns to ≤0.1% (EU), which is why PAP and nHAP are the commercial routes. Flag it on every whitening claim. Source: [[_MOC]]; §E6.
- TikTok bans superlatives and treat/cure claims. Source: [[TikTok-Shop-GMV-Max]] §7.
- Over-claim warning from the Hismile case. Source: [[Brand-Building-Recipe-Thailand]] Part 3.

### Loom (premium oral care)

**Positioning and price tier**
- Premium, affluent oral care. Target markets: TH, SG, UAE, EU. Source: [[06-Entities-Brands/Loom-by-Linee]] (2026-05-20).
- **Brand architecture correction**: "Loom is a **standalone sibling to Linee** … **not** a sub-brand. 'Loom by Linee' is deprecated — correct on sight." Source: [[06-Entities-Brands/Loom-Why-Story]] (2026-07-14).

**Hero SKU**
- Dual Wave Whitening Kit (model 29TW): **12% PAP**, NanoCloud 10K™ + Soft Cloud Brush™, made by Jiangxi Yuke / IVISMILE.
- Guardrail: "12% PAP is verified retail-legal across TH/SG/UAE/EU — preserve this claim carefully in all regulatory filings." Source: [[Loom-by-Linee]] (2026-05-20).

**Voice — "quiet premium"** (the register is defined in [[Loom-Why-Story]], 2026-07-14)
- "Declarative, fragment-driven, restrained. English-primary. No exclamation, no hype grammar."
- The voice takes an abstract noun ("confidence"), not "the confident".

Canon lines:
- Tagline: **Whitening That Works. Zero Compromise.**
- Descriptor: **Effective. Gentle. Every day.**
- Sign-off: **Let your confidence loom.**
- Category: **Regenerative Whitening™**
- Theme line: "Weaving confidence into every smile."
- Ingredients: nano-hydroxyapatite ("said once, with weight") plus an osmanthus ritual.

Design rules:
- Flat matte navy **PANTONE 2965C**, refined serif wordmark, generous negative space.
- **No gradients.** "The deck matches the box, not the reverse."

**Current state**
- LOOM had 786 Shopee visitors and ฿0 sales in both weeks: fix or delist. Source: [[...-Weekly-MKT-7-14Oct-Insight]] (2026-10-16).
- LOOM content is starved: 9 → 6 → 2 pieces. "Deliberate pause or drift?" Source: [[...-Weekly-Insight-10.10-and-Content]] (2026-10-16).

### Moonshot Labs (MSL, microneedle skincare, Moonshot Corporation Co., Ltd.)

**Positioning and SKUs** — [[06-Entities-Brands/Moonshot-Labs]], [[06-Entities-Brands/Moonshot-Corporation]] (2026-05-20)
- Science-backed, anti-aging. Goal: #1 microneedle skincare brand in Thailand within 2–3 years. Korean OEMs.
- SKUs: **Awesome Patch** (hero), Dot, Lip, XL. Expansion to Singapore (May 2026) and UAE/Dubai (Aug 2026).
- Hero gross margin about 55%.

**Economics**
- COGS 8%. Ceiling 77% on Shopee and 82% on TikTok. EBIT plan **7.0%**; already about 47% "given away" in trade spend. "Cannot afford to be wrong." Source: [[Margin-and-Discount-Ceilings]] (2026-09-19).

**Current state**
- Stock-limited. Single patch earns ฿234 contribution vs ฿185 for the 4-pack, so margin comes first and AOV is not the target. Source: [[...-Shopee-Review-Reconciliation]] (2026-10-16).
- The normal-day base fell 34%. Source: [[...-Weekly-Insight-10.10-and-Content]] (2026-10-16).

### The Spiffy Patch (under Moonshot Labs)

**Products and price tier** — [[01-Projects/The-Spiffy-Patch-Launch]] (2026-07-01)
- **The Spiffy Patch — Calming Acne**: hydrocolloid patch, cica hero, mirror compact in 5 case colours, about **THB 390** and about 76–80% margin.
- **The Spiffy Patch — Brightening Under-Eye**: FurEver hydrogel patches in cat silhouettes (5 breeds), caffeine + peptide hero.
- Sold as a 2-step ritual with The Awesome Dot.
- The margin note uses a **฿499 box with 18% COGS**, the highest COGS ratio in the group. Source: [[Margin-and-Discount-Ceilings]] (2026-09-19).
- **#1 gate**: get a written Thai FDA cosmetic-vs-device classification before any packaging goes to print. Source: [[The-Spiffy-Patch-Launch]] (2026-07-01).

**Voice: "Cute that cares."** — [[06-Entities-Brands/The-Spiffy-Patch-Brand-Voice]] (2026-07-01)
- Audience: Thai/SEA Gen-Z and young millennials (~16–28), TikTok-first, sensitive skin in a humid climate, ingredient-aware.
- Pillars: Cute that cares · Made for real (Thai) skin · Little fix, big glow-up · **Collect your cat**.
- Tone: warm, witty, kind, gentle-confident, "lightly punny (cat, sparingly)". Not clinical, shaming, hypey or cringe.

**Two non-negotiables**
1. **Always kind**: never shame the skin.
2. **Always cosmetic-safe**: never a medical claim (Thai FDA).
   - **NEVER** use: treat / cure / heal / medicated / kills bacteria / antibacterial / anti-inflammatory / fades dark spots / wound.
   - Use appearance-only swaps such as "helps the spot look flatter & calmer".

**Naming** — [[06-Entities-Brands/The-Spiffy-Patch-Naming]] (2026-06-29)
- Names are benefit-led **[Benefit] [Function]**. The ingredient never goes in the name.
- Never double "Patch". No version numbers.
- "Personality lives in the FurEver cat-breed edition + art, not the product name."
- Eye products use Brightening, not Calming.

**Current state**
- Shopee ceiling is **48%**, the fragile pairing. Source: [[Margin-and-Discount-Ceilings]] (2026-09-19).
- Roughly break-even; don't scale. Source: [[...-Weekly-MKT-7-14Oct-Insight]] (2026-10-16).

### Monchhichi × Linee (licensed IP)

Sources for this subsection: [[01-Projects/Monchhichi-Linee-Collab/README]] (2026-05-25), [[.../GTM-Plan]] (2026-05-28), [[.../Flavor-Stories]] (2026-05-25), unless stated.

**Licence terms** (Licence Agreement #0631, final draft 20 May 2026; signatures pending at note date)
- Licensor: Sekiguchi, via agent El Brand Group.
- **Thailand only, no export.** Term 1 Jun 2026 – 31 Aug 2027. Non-exclusive.
- Licensed property: **Monchhichi Classic Boy + Girl only**.
- Royalty: **7% of gross sales** (Net Sales deductions capped at 10% of gross). GWP royalty: **15% of GWP manufacturing cost**.
- Minimum guarantee: **USD 30k lump sum at signing**, about ฿975k. Break-even licensed retail is about **฿13.93M**.
- Missing 1 Jul production or 1 Aug market launch **forfeits the MG**.
- Governing law: Japan.

**Licence limits (guardrails)**
- **Maximum 4 Monchhichi toothpaste SKUs**: Nomyen นมเย็น, Bubble Milk Tea ชานมไข่มุก, Banana Milkshake นมกล้วยปั่น, Matcha Zen มัทฉะ. Classic White Tea Mint is **plain Linee, zero royalty, no Monchhichi branding**.
- **No 3D plush of any kind.** GWP is limited to 2 of 4 items: charm, compact mirror, hair accessory, pouch.
- All designs need prior written approval. **"Silence = deemed refusal."**
- **Channel gap.** Schedule C allows "speciality store for personal care + online social platforms". Tops (a supermarket) and Shopee/Lazada (marketplaces) may not qualify; get written approval first.
- Mandatory security labels at USD 0.011 per unit, with a USD 10k penalty.
- Spell it **"Monchhichi"** (double h) and include the © Sekiguchi notice.
- Custom artwork assigns to Sekiguchi.
- Agreement terms are confidential.

**Price tier**

| SKU | Online | Offline | Pre-order |
|---|---|---|---|
| Toothpaste tube | ฿259 | ~฿219 | ฿239 |
| Whitening Strips | ฿699 | — | — |
| Gift Box | ฿1,599 | — | — |

- Open item: reconcile ฿259 vs ฿249.
- The margin note uses ฿349 retail at ฿42 COGS (12%). Source: [[Margin-and-Discount-Ceilings]] (2026-09-19).

**Positioning and voice**
- Audience: Thai millennial women **28–42**, nostalgia-driven.
- Flavour stories are about 70% English / 30% Thai, and "Thai carries the emotional payoff as a full sentence".
- Matcha must be described as **café-sweet, never bitter or ceremonial**.
- Hero hook: **Nomyen**. Rule: "One hero SKU — resist scope creep."

**Collab strategy and current state**
- Monchhichi sells to collectors and fans: 61% of sales from returning buyers and about 68% of 10.10 GMV on pre-order. Source: [[...-Weekly-Insight-10.10-and-Content]] (2026-10-16).
- "GWP scarcity is the driver, not price." Source: [[moonshot-promotion/MEMORY]] (2026-10-16).
- TikTok affiliate commission is 3%. Source: [[moonshot-kol/MEMORY]] (2026-10-16).

**Offline partner terms.** Tops: 35% GP, back margin 17% in-store / 22% omni, entry fees ฿150k for the account plus ฿150k per SKU. "Tops is a reach/brand bet until store count scales."

### Inference across brands
- The vault defines a clear price and voice ladder:
  - Spiffy: playful Gen-Z, ~฿390–499.
  - Linee: premium-but-accessible, ฿179 toothpaste up to the kit.
  - Monchhichi: nostalgic collector, ฿259–1,599.
  - Loom: quiet affluent premium, English-first.
  - MSL: science and anti-aging.
- Seat advice that mixes these registers, such as hype grammar on Loom or medical verbs on Spiffy, would break vault canon.
