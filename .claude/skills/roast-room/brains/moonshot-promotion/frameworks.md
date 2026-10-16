# Frameworks: Head of Pricing & Promotion (promo)

15 frameworks, grouped by job: price the promo, prove it is incremental, buy traffic, protect the price. Grades: **PRIMARY** = Moonshot measured or official platform page; **SECONDARY** = press or research summary; **PRACTITIONER** = blog, agency or vault practitioner claim; **GAP** = no credible number. Worked examples use vault numbers; every input is labelled **actual** (vault measured or decided) or **assumption**. Computed results are this seat's arithmetic, not vault statements.

Notation: P = list (shelf / ISP) price; d = total discount depth; t = platform take as a share of selling price; c = COGS as a share of P; r = royalty share of selling price (Monchhichi only); F = fixed per-order cost (GWP + GWP royalty + shipping subsidy + ฿1.07); CPO = contribution per order before ads.

---

## A. Price the promo

### 1. Promo waterfall to contribution per order (CPO)
- **What it is:** the per-order ledger every promo answer must show (V049 role definition).
- **Parts:**
  - List P → minus seller discount → minus seller-funded shop voucher → minus seller share of co-funded voucher = **P_net** (S038 research inference).
  - Minus take t × P_net (commission + transaction 3.21% + programme fee + affiliate; measured Shopee 33%, TikTok 26.3%) (V001).
  - Minus COGS (c × P), royalty (r × P_net), GWP landed cost + 15% GWP royalty for Monchhichi (V019), shipping subsidy, ฿1.07/order infrastructure fee (S005, S017; re-verify in Seller Centre).
  - **CPO = P_net × (1 − t − r) − c × P − F.**
- **When to use:** every discount, bundle, GWP or voucher proposal, before anything else.
- **How to score an option:** higher CPO at equal or higher expected orders wins; any option whose CPO is below the ceiling-implied floor (#2) fails.
- **Worked example (Monchhichi Nom Yen, Shopee):**
  - Inputs: P ฿349 (actual, V030); COGS ฿42 (actual, V001); t 33% (actual, V001); royalty 7% of selling price (actual, V019); cap GWP ~฿20 (actual, V040); GWP royalty 15% × 20 = ฿3 (actual rate, V019); fulfilment excluded (assumption).
  - Full price + free cap: 349 − 115.17 take − 42 − 24.43 royalty − 20 − 3 = **฿144.40**.
  - Crossed-out 349 → 299, no gift: 299 − 98.67 − 42 − 20.93 = **฿137.40**.
  - 299 + cap: **฿117.40**.
  - Verdict: GWP at full price beats the ฿50 cut on CPO and leaves the price history at 349.
- **Evidence grade:** PRIMARY inputs (V001, V019); formula PRACTITIONER (S038 summary).
- **Sources:** V001, V019, V030, V040, V049, S005, S017, S038.

### 2. Margin before ads and the discount ceiling
- **What it is:** the vault's economics gate; Control Tower refuses to run on an assumed margin (V001).
- **Formulas (t, c as shares; d as depth off list):**
  - Margin before ads at depth d: **m(d) = (1 − t) − c ÷ (1 − d)**.
  - Break-even ROAS: **BEROAS(d) = 1 ÷ m(d)**.
  - Contribution-zero depth: **d0 = 1 − c ÷ (1 − t)**.
  - Ceiling (depth where BEROAS hits the top of the healthy band R_top): **d* = 1 − c ÷ ((1 − t) − 1/R_top)**.
  - Each discount point off list costs (1 − t) margin points: 30% off on Shopee ≈ 20 points (V001).
- **When to use:** before any depth above "less is more" 3-5-7% (V039); any routing choice between platforms.
- **How to score:** d below d* passes; d between d* and d0 needs a stated reason and loss cap; d at or past d0 is a red line.
- **Worked example (reproduces the vault table, actual inputs):**
  - Linee Shopee, t .33, c .10: m(0) 57%; m(30%) = .67 − .1429 = 52.7% → BEROAS 1.90×; d0 85%; d* (R_top 3.1) = 1 − .10/.3474 = 71%. All match V001.
  - Spiffy 50% off: Shopee m = .67 − .36 = 31% → 3.23× (above 3.1 band, fails); TikTok m = .737 − .36 = 37.7% → 2.65× (inside 2.8-3.5? no, below the 2.8 floor, so cheaper than the band and passes). Vault: "a routing decision, not a veto" (V001).
- **Sensitivity at planning take 35% Shopee (assumption, V031):** Linee ceiling 71 → 69%; Monchhichi 65 → 63%; Spiffy 48 → **45%**; MSL 77 → 76%; Linee BEROAS@30% 1.90 → 1.97×.
- **Monchhichi with royalty (computed; the V001 table appears to exclude royalty since its margin = 1 − take − COGS):** Shopee effective t = .33 + .07 = .40 → m(0) 48%, ceiling **57%** (not 65%), d0 80%. TikTok t = .333 → ceiling **69%** (not 73%).
- **Evidence grade:** PRIMARY (V001 measured Jan-Jul 2026); the 33% predates the 4 Aug Shopee commission rise (S001, S010: re-verify in Seller Centre), so true current take is likely higher.
- **Sources:** V001, V031, V039, S001, S010.

### 3. Break-even uplift (volume multiple)
- **What it is:** how many more orders the promo must sell, net of pull-forward, just to stand still.
- **Formula:** required multiple = **CPO_base ÷ CPO_promo**; required uplift % = multiple − 1. With fixed costs, use CPO (#1), not margin %.
- **When to use:** every depth change, every "deepen the discount" request.
- **How to score:** compare required uplift to (a) the best measured Moonshot uplift for that mechanic and (b) the elasticity prior (Bijmolt −3.63, S038, SECONDARY). An option whose required uplift exceeds the measured best is a no unless it is an acquisition test with a loss cap.
- **Worked example (Linee Strip 7, Shopee):**
  - Inputs: P ฿299 (actual, V021); c 10% blended Linee (assumption: strip BOM not in vault, GAP); t 33% (actual).
  - Full price CPO = 200.33 − 29.90 = **฿170.43**.
  - 10% off (269.10): 180.30 − 29.90 = ฿150.40 → multiple 1.13 (**+13.3%**). Elasticity prior predicts ~+36% before pull-forward.
  - 30% off (209.30): 140.23 − 29.90 = ฿110.33 → multiple 1.54 (**+54.5%**). Prior ~+109%, but van Heerde shows much of the bump is time-shifting and switching (S041), so the pass is on paper only.
  - Buy 7 get 7 at ฿299: COGS doubles → 200.33 − 59.80 = ฿140.53 → **+21.3%** more orders needed. 7.7 B7G7 did ฿450k vs 10.10 7G1 ฿179k strips (actual, V017): ~2.5× GMV, far above +21%. Illustrative contribution before ads: 450k × (140.53/299) ≈ ฿211.5k vs 179k × (166.16/299) ≈ ฿99.5k (assumes all strip GMV at ฿299 per order; different days, not a controlled test).
- **Evidence grade:** formula PRACTITIONER/SECONDARY (S038, S035); inputs PRIMARY except strip COGS (GAP).
- **Sources:** V017, V021, V001, S035, S038, S041.

### 4. Fixed-fee campaign package test with a loss cap
- **What it is:** a paid package (Shopee Platinum/Diamond, TikTok Beauty Fest) priced as an experiment.
- **Formulas:**
  - Orders to break even = **Fee ÷ incremental CPO**.
  - Incremental GMV needed ≈ **(Fee + baseline give-up) ÷ m(d)**, where baseline give-up = baseline list GMV × d × (1 − t).
  - Expected loss = Fee − (expected incremental GMV × m(d)); must be under the stated cap.
- **When to use:** any package with a fixed fee or slot commitment.
- **How to score:** pass only if expected loss ≤ cap and the uplift assumed ≤ measured history (9.9 D-day ~4×, V037).
- **Worked example (12.12 Platinum, Linee Shopee):**
  - Inputs: fee ~฿300k (actual, V037); baseline ~฿120k/day (actual, Sep, V037); 3-day window and 10% depth (assumptions); t 33%.
  - m(10%) = .67 − .10/.90 = 55.9%.
  - Baseline give-up: 3 × 120k × 10% × .67 ≈ ฿24.1k.
  - Incremental GMV needed: (300k + 24.1k) ÷ .559 ≈ **฿580k before ads**, about 1.6× the 3-day baseline on top of it.
  - Orders view: 300k ÷ ฿150.40 (Strip CPO at 10% off) ≈ **1,995 incremental orders**.
  - Team read: possible ฿100-200k loss → declined (V037). Diamond needed ฿150k baseline × 6 vs historic ~4×, and ฿700k needs ~42,000 visitors, nearly double the record (V037).
- **Evidence grade:** PRIMARY inputs; GAP on package fees for other tiers (FMCG & Beauty Platinum fee not recorded; TikTok Gold ~฿4.8M+ is TikTok's own claim, V018).
- **Sources:** V037, V008, V018, V001.

### 5. Break-even ROAS and marginal ROAS
- **What it is:** Peter's demand: derive break-even ROAS from COGS + trade spend + fees (V021); then spend to marginal, not average, ROAS.
- **Formulas:** BEROAS = 1 ÷ contribution margin before marketing (S059). Marginal ROAS = ΔGMV ÷ Δspend. Profit change from a spend cut = ΔGMV × m − Δspend.
- **When to use:** whenever a promo comes with ad support, or ads are cut around a campaign.
- **How to score:** keep spend while marginal ROAS > BEROAS at the promo depth (not the full-price BEROAS).
- **Worked example (actual, V014):** Moonshot ads cut saved ฿64.7k, GMV fell ฿150k → marginal ROAS 2.3; at 58% variable margin, contribution lost 150k × .58 = ฿87k → net **-฿22k**. Rule "add ads back while ROAS > 4" is wrong; the bar is marginal ROAS > ~1.9.
- **Evidence grade:** PRIMARY (V014); formula SECONDARY (S059). Conflicting vault model (Shopee review: "cut another 30%", marginal ROAS 1.12, n=12) is "a decision rule, not a fact"; stock position decides (V014).
- **Sources:** V014, V021, V001, S059.

### 6. CM layers and Net Marketing Contribution (NMC)
- **What it is:** the KPI ladder this seat reports into. NMC is the main KPI from October (V039).
- **Parts:** CM1 = net revenue − COGS; CM2 = CM1 − fulfilment, payment, returns; CM3 = CM2 − variable marketing (S060, PRACTITIONER). Vault NMC = net revenue − ad spend, where net revenue is already after trade spend (V030; inference V039).
- **When to use:** post-campaign readouts; comparing promo-led vs ad-led growth.
- **How to score:** a promo that raises GMV but lowers CM3 per order is flagged; "growth bought with vouchers" = rising campaign-day share plus falling CM3/order (sales_performance research inference).
- **Evidence grade:** PRIMARY (definition decided in vault); layer definitions PRACTITIONER.
- **Sources:** V030, V039, S060, S061.

## B. Prove it is incremental

### 7. Incrementality decomposition and post-campaign readout
- **What it is:** credit a promo only with lift net of pull-forward, cannibalised sister SKUs and would-have-bought.
- **Formula:** incremental contribution = incremental units × CPO_promo − baseline units that took the discount × (CPO_base − CPO_promo) − fixed package cost (pricing research Q5, built on S041, S043, S053).
- **Parts:** pre-window −14 days (pre-promo dip), promo window, post-window +14 to +30 days, repeat read 60-90 days (S053); new vs repeat buyers by platform ID; sister-SKU cannibalisation.
- **When to use:** every double-day and payday readout; role definition demands uplift vs baseline, cannibalisation of following weeks, new vs repeat (V049).
- **How to score:** pass only if incremental contribution > 0, or < loss cap with an explicit new-buyer case.
- **Moonshot evidence:** Linee new buyers 1,817 → 994 → 787 across 7.7 / 9.9 / 10.10 while returning stayed ~170-180 (V017): the double-days are harvesting, not acquiring. Monthly shape: dip in week 3 after double-digit week, recover week 4 (V036). Post-campaign trough has never been measured (GAP).
- **Evidence grade:** academic SECONDARY (S039-S047); Moonshot data PRIMARY; Moonshot pull-forward size GAP.
- **Sources:** V017, V036, V049, S041, S043, S047, S053, S056, S057.

### 8. Pre-registration card (promo as an experiment)
- **What it is:** a one-card plan before any promo ships.
- **Parts:** hypothesis; mechanic; CPO_promo vs CPO_base; break-even multiple; loss cap in baht; read date; kill criteria; control (platform DiD, matched SKU, or 10-20% customer holdout) (S053, S054).
- **When to use:** any test-and-learn promo: Monchhichi "buy 2, cap at 50% off" (V032), Strip BOGO (V032), Nom Yen first-10/20-orders free (V030), payday test before 10.10 (V039).
- **How to score:** no card, no promo. A promo with no concurrent control can only be graded "directional".
- **Evidence grade:** PRACTITIONER (S053, S054); marketplace holdout tooling GAP (whether shop-voucher follower targeting allows a clean holdout is unverified).
- **Sources:** S053, S054, V030, V032, V039.

### 9. Readout basis discipline
- **What it is:** one GMV definition per readout, confirmed basis with the platform-rebate line visible (V016).
- **Parts:** placed → confirmed → minus cancels → minus returns → minus seller vouchers → net sales → CM3 (S062, S063, research inference).
- **When to use:** before quoting any campaign result.
- **How to score:** a readout that mixes bases is rejected. Placed-basis ROAS flatters by ~8-10% (V016).
- **Moonshot evidence:** three 10.10 totals: ฿635.8k (MKP, placed), ฿581k (decks), ฿531k (Shopee confirmed) (V016). SBU dashboard export is the single source; MKP sheet runs Linee ~8% (฿107k) high (V014).
- **Evidence grade:** PRIMARY.
- **Sources:** V014, V016, S062, S063.

## C. Buy traffic and access

### 10. Commission × discount stack and lock-date calendar
- **What it is:** creator commission is a variable cost that stacks on the discount; its changes have lock periods.
- **Parts:** TikTok Open Collaboration change takes 30 days; Target 5 days; decreases lag 30 days for active creators; increases are instant; Targeted > Open > shop-wide (V005).
- **Formula:** affiliate-order take = commission + growth + transaction + affiliate rate (+ royalty for Mon).
- **Worked example (Monchhichi TikTok, raise affiliate 3% → 10%):** affiliate-order take 10.5 + 8.0 + 3.2 + 10 = 31.7% (actual components, V001; 10% proposed, V039) + 7% royalty = 38.7%. m(0) = .613 − .12 = 49.3%; ceiling (R_top 3.5) = 1 − .12/(.613 − .286) ≈ **63%** vs 73% in the table. Raise only with a lower discount on the same order.
- **Latest dates (computed from today 2026-10-16):** Open Collab for 11.11 needed by 12 Oct (missed); Target for 11.11 by 6 Nov; Open for 12.12 by 12 Nov; Target for 12.12 by 7 Dec.
- **Evidence grade:** PRACTITIONER/PRIMARY mix (V005 from TikTok docs and practitioners); re-verify in Seller Centre.
- **Sources:** V001, V005, V011, V039.

### 11. Contribution per live hour
- **What it is:** rank live slots and live promos by contribution, not GMV/hour (live research inference).
- **Formula:** contribution/h = GMV/h × m(d) − (host cost/h + commission + live ads/h + promo cost/h).
- **Worked example (assumptions from the Sorin agency benchmark, V046):** fixed fee ~฿50k for ~300 h = ฿166.7/h + 2% commission. At Linee Shopee 10% off (m 55.9%): break-even GMV/h = 166.7 ÷ (.559 − .02) ≈ **฿309/h**. Versus pure commission 12% + 4% ads = 16% of GMV: fixed fee is cheaper once GMV/h > 166.7 ÷ (.16 − .02) ≈ **฿1,191/h**.
- **Moonshot evidence:** Linee 11:01 session ฿77k at ฿45.6 per viewer, 3× other sessions (V015); Exclusive Streaming Price ฿0 on 10.10 (V015); Spiffy LIVE ฿9.1k → ฿19.4k on ฿0 ads (V014).
- **Evidence grade:** formula PRACTITIONER; own GMV/live-hour baseline **GAP** (V012). Close it from Shopee/TikTok live exports per session, hour and host.
- **Sources:** V012, V014, V015, V046.

### 12. Paid programme and Mall cost test (Prime/Xtra, Premium, Mall)
- **What it is:** treat programme fees as the price of traffic access, inside the campaign P&L (S002 research inference).
- **Parts:** Shopee Xtra / ร้านโค้ดคุ้ม 5.35-8.56% (S002, S005; re-verify in Seller Centre); Lazada Premium 8.56% (S019; re-verify); Mall commission premium ~3pp on Shopee (S010; re-verify); Mall settlement hold 15 days vs 3 (V004 §D2).
- **Formula:** keep the programme while (sales lost on exit × m) > fee saved. Vault example: save ~฿1M, lose ~฿2M sales; exit pays only if the redeployed ฿1M runs at ~30% cost of sale (V048).
- **How to score:** keep Prime for Linee through Q4; test exit on the Non-mall shop only once it holds "ร้านค้าแนะนำ" (V048).
- **Evidence grade:** PRIMARY (V048 measured July ฿400k ≈ 11% of net sales); conflict: 08-27 also says ~15% of GMV; Mall conversion uplift GAP.
- **Sources:** V048, V010, S002, S005, S010, S019, V004.

## D. Protect the price

### 13. Price-floor calendar (backwards from D-day)
- **What it is:** every discount before D-day lowers the floor the campaign price must beat.
- **Parts:** TikTok: beat 30-day low, 60 days for SS tier (V002, US-derived); TikTok TH Seller Flash Sale: 14-day low (S022); Shopee: no evidence of a formal historical lowest-price rule, the documented check is cross-platform vs Lazada (V004 §A3); once approved, only lower price or add stock (V004 §B1).
- **Dates (computed, 2026-10-16):** any TikTok price since 12 Oct counts for 11.11; the 12.12 SS 60-day window opened 13 Oct; warm-up content live by 28 Oct (D-14, V002); GMV Max launch by 4 Nov (7-day learning), last ROI edit 8 Nov (D-3) (V002); Shopee ISP change needs ~14 days' letter, so letter by ~23 Oct to land before a 6 Nov window start (2025 pattern, V004 §A1; assumption for 2026).
- **How to score:** an option that sets a lower reference price inside the window scores against itself at the next campaign.
- **Evidence grade:** PRIMARY/PRACTITIONER mix; all re-verify in Seller Centre.
- **Sources:** V002, V003, V004, V048, S022, S023, S025.

### 14. Non-price mechanic ladder (GWP, add-on, multipack, bundle)
- **What it is:** reach the deal feel without touching the hero single-unit price.
- **Ladder (cheapest price-history damage first):**
  1. GWP: everyday cap ~฿50 (V049); Monchhichi cap ~฿20 cost (V040); royalty 15% of GWP cost (V019).
  2. Add-on deal: "the cheapest AOV lever that does not discount the hero SKU" (V004 §A2). Cannot also sit in a bundle (V032).
  3. Multipack at single-pack value only (V015, V016); not on MSL while stock-limited (single ฿234 vs 4-pack ฿185).
  4. % off: last.
- **How to score:** compute CPO for each rung (#1); pick the highest CPO that clears the conversion goal. Free-gift variants sharing one SKU: let the customer choose, never random (V047).
- **Evidence grade:** PRIMARY for Moonshot outcomes (V008, V017); PRACTITIONER for "bundles over price cuts in beauty" (V002 + §C8, Thai forum quote *"11.11 ของเจ้าพ่อ e-commerce มันถูกจริงๆ หรือแค่วันลวงโลก"*).
- **Sources:** V002, V004, V008, V015, V016, V017, V019, V032, V040, V047, V049.

### 15. Price architecture and equity guardrails (good-better-best)
- **What it is:** tiering so price-sensitive buyers get a stripped entry option instead of a discounted core (S048).
- **Parts:** Moonshot ladder: Spiffy ~฿390-499; Linee toothpaste ฿179 up to the Kit ~฿1,545; Monchhichi ฿259-1,599; Loom quiet premium (V021, V027, V019, V023). Guardrails: price premium vs category median and % units sold at full price (S051, research inference).
- **When to use:** Loom (no headline % off; "fix it or delist it", 786 visitors, ฿0 sales, V014); Kids line; Monchhichi Strip at MOQ 25,000 (V021).
- **How to score:** an option that cuts the "Better" core price to win "Good" buyers loses to adding a "Good" tier. Heavy discounting damages equity most for premium brands (S049, S046).
- **Evidence grade:** SECONDARY (S048, S049, S051); Thai price-ending evidence GAP.
- **Sources:** S046, S048, S049, S051, S052, V014, V019, V021, V023, V027.
