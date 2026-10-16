# Frameworks: Head of Sales Performance (moonshot-sales)

16 frameworks, grouped by job: diagnose the gap, pace the month, price the option, read it back. Formulas are written out. Worked examples use Moonshot vault numbers; every input is labelled **ACTUAL** (vault, with V id) or **ASSUMPTION** (stated, replace with the real export). Platform fees older than 2026-08-17 carry **re-verify in Seller Centre**. Notation: t = platform take, c = COGS share of list price, d = discount depth, m = margin before ads.

---

## A. Diagnose the gap

### 1. Gap tree (brand → channel → SKU → traffic × CVR × AOV)
- **What it is:** a single decomposition of the baht gap to the locked target, ending in the one node that explains most of it.
- **Parts:** (1) total gap = target − projection; (2) split by brand (Linee, Monchhichi, Moonshot Labs, Spiffy, Loom); (3) channel (Shopee / TikTok / Lazada / D2C / Live / KOL / Offline / B2B); (4) top SKUs; (5) traffic × conversion × basket inside each store; (6) subtract quantified one-offs (#11). Report contribution next to GMV at every level.
- **When to use:** every "why are we behind" and every WBR.
- **How to score an option:** an option scores only on the node it moves. Baht closed on the dominant node × margin before ads; options aimed at non-dominant nodes score as distraction.
- **Worked example (October):**
  - Gap: 8.8M target − 5.75M projection = **3.05M** (ACTUAL, V003).
  - "Another brand" (probably Linee, inference) at 72% of 5.8M, forecast 4.2M → 1.6M, about half the gap (ACTUAL figures, V003; brand identity is inference).
  - Base erosion: Linee normal day ฿141.5k → ฿113.2k = −฿28.3k/day; Moonshot ฿39.2k → ฿27.6k = −฿11.6k/day (ACTUAL, V027). If it holds all 31 days (ASSUMPTION): ≈ ฿0.88M + ฿0.36M = **~฿1.24M**, about 40% of the gap from normal days alone.
  - Dominant node inside Linee: new buyers (#13).
- **Evidence grade:** decomposition identity PRACTITIONER (S001, S002); Moonshot inputs PRIMARY-measured (V003, V027). No Thai "gap tree" is published (sales_performance §1 GAP).
- **Sources:** V003, V027, V030, V031, S001, S002, S008.

### 2. Traffic × conversion × basket split
- **What it is:** GMV = visitors × CVR × AOV, so ΔGMV% ≈ Δln(visitors) + Δln(CVR) + Δln(AOV).
- **Parts:** product visitors (not shop visitors; Shopee changed the shop-visitor metric on 1 Oct, V027), CVR, AOV, cart-to-buyer rate.
- **When to use:** after #1 names a store or SKU.
- **How to score:** an option must target the term that fell. Higher conversion on shrinking traffic is "a warning sign, not a win" (V029).
- **Worked examples (ACTUAL, V027):**
  - Linee KIT: visitors +60%, buyers 150 → 58, CVR 5.4% → 1.3%. Conversion term, so listing or offer failure, not media.
  - Linee strips: visitors −28%, CVR held ~11.5%. Traffic term: "put budget back into strip reach before changing the listing".
  - LOOM: 786 Shopee visitors, ฿0 sales, two weeks running: "fix it or delist it".
  - 10.10 Linee: add-to-cart flat 36.8% → 37.1%, cart-to-buyer 23-33% → 49.2% on D-day: the day harvested a cart bank of 8,605 units built 4-9 Oct (V028).
- **Evidence grade:** identity PRIMARY (definitional); thresholds PRACTITIONER.
- **Sources:** V027, V028, V029, V031, S023.

### 3. New vs returning buyer split (and aMER)
- **What it is:** separate GMV into new-to-brand and returning buyers; acquisition MER = new-customer revenue ÷ spend.
- **Parts:** buyer counts by type, AOV by type, spend, repeat rate (Linee ~20%, goal 30%, V013).
- **When to use:** any decline in a brand with a repeat base; any judgement of ads or KOL.
- **How to score:** an option that grows returning-buyer revenue while new buyers fall is harvesting; score it below one that restores new buyers.
- **Worked example (ACTUAL, V030):** Linee new buyers 1,817 (7.7) → 994 (9.9) → 787 (10.10), −57%; returning ~170-180 flat. Linee 10.10 GMV −50% vs 7.7. Almost the whole fall is acquisition. Monchhichi: 61% of sales from returning buyers, ~68% of 10.10 GMV on pre-order, only 39 buyers had bought Linee before: a collector base, not a Linee acquisition engine.
- **Evidence grade:** PRIMARY-measured (vault); aMER concept PRACTITIONER (S005). CAC per new buyer: **GAP** (V003).
- **Sources:** V003, V013, V030, S005, S041.

### 4. One-off vs trend test
- **What it is:** strip quantified events from the gap before calling a trend.
- **Parts:** event log (stock-out, account loss, promo start/end, fee change, holiday, flood); lost sales = days affected × pre-event daily run-rate for that SKU-channel; trend = 3+ consecutive non-event weeks, visible YoY and vs rolling baseline, and in input metrics.
- **When to use:** before accepting any reason in the room.
- **How to score:** a reason without a baht figure scores zero. A reason whose baht figure is small next to the gap is rejected.
- **Worked examples:**
  - Floods hit 26-27 Sep, Lazada only (ACTUAL, V010). Moonshot Lazada ran ~฿1,500/day (ACTUAL, V014). Even total loss for 2 days ≈ ฿3k against a ~฿3M gap. Rejected, as leadership did (V003).
  - Monchhichi cap promo ended ~21 Sep: 30-40k/day → 10-12k/day (ACTUAL, V014, V006). Not a one-off: a promo-end step, so the base without the cap is ~฿11k/day. Gap per day vs ~฿35k = ~฿24k (ASSUMPTION midpoints).
  - Moonshot XL stock-out cut AOV and forced pre-order (ACTUAL, V013): one-off while import is stuck, but it binds all of Q4 (V016).
- **Evidence grade:** method PRIMARY (Oracle doc, S021) and PRACTITIONER (S022); Thai holiday and flood impact: GAP.
- **Sources:** V003, V006, V010, V013, V014, V016, S021, S022.

### 5. Reconciliation ladder (which number is true)
- **What it is:** one basis for every readout.
- **Parts:** Placed GMV → Paid/Confirmed → − cancellations → − returns/refunds → − seller-funded vouchers and co-funding → Net sales → − platform take (commission, transaction, programme fee, affiliate) → − COGS → − ads = contribution. Report the ratio at each rung.
- **When to use:** before pacing; whenever two decks disagree.
- **How to score:** an option justified on placed GMV or GMV Max ROI gets restated on confirmed basis before scoring ("never quote a GMV Max ROI as a ROAS", V034).
- **Worked example (ACTUAL, V029, V028):** three 10.10 totals: MKP recap ฿635.8k (all platforms, probably placed), decks ฿581k, Shopee review ฿531k (Shopee only, confirmed). Placed ROAS flatters ~8-10%. Linee cancellations rose 7.6% → 15.6%, 26 of 117 in the 00:00 hour. MKP sheet reports Linee ~8% (฿107k) above the SBU export; the SBU export wins (V027). Platform rebate ~31.8% of gross (฿177k in one day) "sits in no channel P&L" (V028).
- **Evidence grade:** platform definitions PRIMARY but non-TH pages, **re-verify in Seller Centre** (S024, S025, S027); vault PRIMARY-measured.
- **Sources:** V027, V028, V029, V034, S024, S025, S026, S027, S028.

## B. Pace the month

### 6. Phased required run-rate
- **What it is:** required daily sales for the rest of the month, weighted for the days that actually carry volume.
- **Formula:** flat: R = (T − MTD) ÷ days left. Phased: R_day = (T − MTD) × w_day ÷ Σ w over remaining days, where w = 1 on a normal day.
- **Weights (ACTUAL, Linee Shopee, V011):** baseline ~120k/day (Sep), 9.9 D-day ≈ 4× baseline (w = 4), mid-month and payday ~200k after the spike (w ≈ 200 ÷ 120 = 1.67). Week 3 dips after the double-digit week and recovers in week 4 (V010).
- **Worked example (October from 7 Oct):**
  - Flat: (8.8M − 1.0M) ÷ 25 = **~฿312k/day** (ACTUAL inputs, V003). Vault text says "~200k/day"; 200k × 25 + 1M = 6.0M, which is the projection, not the target. **CONFLICT; this seat uses 312k until Peter confirms.**
  - Phased (ASSUMPTION: Linee Shopee shape applied to the portfolio; payday 25-31 Oct = 7 days; 15 Oct = 1 day; 10.10 = 1 day; 16 normal days): Σw = 4 + 1.67 + 7 × 1.67 + 16 = 33.4. Per unit weight = 7.8M ÷ 33.4 = ~฿234k. So a normal day must do ~฿234k and 10.10 ~฿935k. Against 10.10 actual ฿581k (V030) the month was lost on D-day plus the base.
- **When to use:** daily, and before calling any day "behind".
- **How to score:** options that lift the base (normal-day weight) beat options that lift one day, because 16 of 25 weight-days are normal days.
- **Evidence grade:** method PRACTITIONER (S004, S005); weights PRIMARY-measured but one shop; share of month on D-days is a **GAP** (no public TH data; vault has "~40% of annual sales on DDD" graded ONE, V037).
- **Sources:** V003, V010, V011, V030, V037, S004, S005, S011, S052.

### 7. Control Tower PACE / MOVEMENT / HEALTH / PLAYBOOK and the WBR deck
- **What it is:** the four daily questions plus locked RAG thresholds, rolled into a fixed weekly business review.
- **Parts (ACTUAL, V031):** ROAS vs 4× target: RED ≤2.4×, AMBER 2.4-3.4×, GREEN ≥4.4×. GMV vs same day last week: RED ≤−30%, AMBER −10 to −30%, GREEN ≥+15%. MTD pace: RED gap >25% with <10 days left, AMBER gap 10-25%, GREEN ≥10% ahead. Refund: RED >5%, AMBER 3-5%, GREEN <2%. WBR: output block (net sales vs locked target, NMC, contribution per order) and input block (product visitors, CVR, AOV, in-stock % top 20 SKUs, confirmed ROAS, affiliate GMV, live hours and GMV/hour, voucher % of GMV, cancel and return rates); fixed order; one root cause, one owner, one date per exception (S023).
- **When to use:** every Monday and every daily check-in; admin fills the sheet before 9:00 (V004, V008, V014).
- **How to score:** an option must name which RAG signal it turns green and by when.
- **Worked example:** 6 Oct pace gap ~35% with 25 days left. The RAG has no cell for "gap >25% with >10 days left"; treat as RED for the founder alert. This is a threshold GAP to fix with Pinky.
- **Evidence grade:** RAG PRIMARY-internal; WBR PRIMARY (book method via S023, S048), detail on DMAIC and 400-500 metrics SECONDARY unverified (S030).
- **Sources:** V031, V019, S023, S030, S048.

## C. Price the option

### 8. Margin before ads, discount ceiling, contribution-zero, BEROAS
- **Formulas:**
  - m = 1 − t − c (share of selling price, no discount).
  - Margin at depth d, per baht of revenue: m_d = ((1 − d)(1 − t) − c) ÷ (1 − d).
  - Break-even ROAS at depth d: **BEROAS_d = (1 − d) ÷ ((1 − d)(1 − t) − c)**.
  - Contribution-zero depth: **d0 = 1 − c ÷ (1 − t)**.
  - A discount costs (1 − t) of its depth (V002).
- **Worked example (ACTUAL t, c from V002):** Linee · Shopee t = 0.33, c = 0.10. m = 57%; BEROAS at 0% = 1 ÷ 0.57 = 1.75×; at 30%: 0.70 ÷ (0.469 − 0.10) = **1.90×**; d0 = 1 − 0.10 ÷ 0.67 = **85%**. Spiffy · Shopee c = 0.18: BEROAS@30% = 0.70 ÷ 0.289 = **2.43×**; ceiling **48%**. On planning take 35% (V005), Linee m = 55%.
- **Check this seat raises:** Monchhichi m = 55% in V002 uses COGS 12%. Royalty is 7% on actual selling price (V038). If the royalty is not inside that 12% (not stated), m = 1 − 0.33 − 0.12 − 0.07 = **48%**, and BEROAS@0 = 2.08×. Inference; confirm with Earth.
- **When to use:** before any discount, ads target or channel routing.
- **How to score:** route the option to the platform where its BEROAS sits inside the healthy band (Shopee 2.5-3.1×, TikTok 2.8-3.5×, Lazada 2.3-2.8×, V002). Spiffy 50% off needs 3.23× on Shopee (above band) but 2.66× on TikTok: routing, not veto.
- **Evidence grade:** formula PRACTITIONER standard identity (S041); inputs PRIMARY-measured (V002, statements Jan-Jul 2026; Shopee's 4 Aug fee round, S031/S032, may not be in it: **re-verify in Seller Centre**). COGS not checked against a landed BOM ("probably slightly light", V002).
- **Sources:** V002, V005, V038, S031, S032, S033, S041.

### 9. Break-even uplift for a discount
- **What it is:** how many more units a promo must sell to stand still.
- **Formula:** required volume multiple = CPO_base ÷ CPO_promo; required uplift = CPO_base ÷ CPO_promo − 1, where CPO = contribution per unit after take, COGS, per-order fees, GWP, (optionally) ads.
- **Worked example (per ฿100 list, Linee · Shopee, t and c ACTUAL V002; ads and per-order fees excluded, ASSUMPTION):**
  - Base: 100 − 33 − 10 = ฿57.
  - 10% off (the 10.10 Linee mechanic, V004): 90 × 0.67 − 10 = ฿50.3 → 1.13×, **+13% units**.
  - 30% off: 70 × 0.67 − 10 = ฿36.9 → 1.54×, **+54%**.
  - Spiffy · Shopee 30% off: base 49 → 28.9 → 1.70×, **+70%**.
  - Ads at ROAS 4 (25% of revenue, ASSUMPTION) on Linee: base 57 − 25 = 32; 10% off 50.3 − 22.5 = 27.8 → 1.15×.
- **Read:** Linee's high gross margin makes shallow discounts cheap on unit maths. The real cost is pull-forward, deal-waiting and price-baseline erosion (S012, S050, V033). A 7.7 buy-7-get-7 did ฿450k on strips; 10.10's 7-get-1 did ฿179k: offer, not media, set the ceiling (V030).
- **How to score:** pass if expected incremental units net of pull-forward ≥ required uplift. Bijmolt's −3.63 elasticity (S037, US CPG, not Thai) predicts +36% for a 10% cut before pull-forward; never use it in place of our own read.
- **Evidence grade:** formula PRACTITIONER (pricing_promotion Q1); Nielsen: ~¾ of US CPG promos don't break even (S035, SECONDARY), 59% globally (S036, primary untraced).
- **Sources:** V002, V004, V030, V033, S012, S035, S036, S037, S038, S050.

### 10. Orders to break even on a fixed fee (packages, KOLs, agencies)
- **Formula:** incremental orders needed = F ÷ (AOV × m_d − ads per order − GWP per order); incremental GMV needed = F ÷ (m_d − ads share).
- **Worked examples:**
  - 12.12 Shopee package ฿300k (ACTUAL, V022; vault does not state whether ฿300k is the fee or expected sales, ASSUMPTION: fee). Strip 7 AOV "~200 นิด ๆ" → ฿200 (V011, ASSUMPTION exact). At 10% off, m_d = 50.3 ÷ 90 = 55.9% of revenue, contribution per order ≈ ฿200 × 0.559 = ~฿112 before ads → **~2,700 incremental orders**, ~฿537k incremental GMV. Best flash slot ever is ฿10-12k; Platinum 5 slots ≈ +฿50k (V011). Declined; vault expected a ฿100-200k loss (V022).
  - Big KOL ฿250k fee (Wave): vault break-even ฿370k sales (V015), which implies 67.6% contribution. At Linee Shopee m = 57%: ฿439k. At the KOL cost model's 40% room (V015): **฿625k**. **CONFLICT:** use ฿439k-625k, not ฿370k.
  - Affiliate envelope: ฿300k for ฿2M sales = 15% cost of sale (V015, V023).
- **How to score:** compare required incremental orders with the best measured comparable (flash slot, last D-day uplift). Above 2× the best comparable = decline.
- **Evidence grade:** arithmetic; inputs PRIMARY-internal; AOV a stated approximation.
- **Sources:** V011, V015, V022, V023.

### 11. Campaign package go / no-go (D-day uplift test)
- **What it is:** test the uplift a package needs against the uplift we have ever achieved.
- **Formula:** needed multiple = package target ÷ baseline; incremental contribution = (baseline × (multiple − 1) × days − post-event dip) × m_d − package fee − incremental ads. Go if ≥ 0 or inside the loss cap.
- **Worked examples (ACTUAL, V011):** Diamond ฿720k needs ฿150k baseline × 6; historic is ~4× on ~฿120k. 700k needs ~42,000 visitors, nearly double the record (implied ~฿16.7 per visitor). No-go. FMCG & Beauty Platinum: expected ฿500k over 3 days with flash-sale push. Go, and Ploy must present incremental sales and incremental cost of sale excluding ads.
- **Also check:** registration 2-4 weeks out, not the deadline (9.9 got zero flash slots because "we were not in the queue", V036); free shipping is the entry ticket; campaign stock deducted at approval (V033).
- **Evidence grade:** PRIMARY-internal; platform uplift claims (+469% Lazada 11.11, S009; +494%, V037) are company-reported: do not plan on them.
- **Sources:** V011, V033, V036, V037, S009, S010.

### 12. Marginal ROAS rule for adding or cutting spend
- **Formula:** marginal ROAS = ΔGMV ÷ Δspend; keep or add while marginal ROAS > BEROAS (= 1 ÷ m); profit effect = ΔGMV × m − Δspend.
- **Worked example (ACTUAL, V027):** Moonshot cut ads ฿64.7k, GMV fell ฿150k. Marginal = 2.32 > BEROAS ~1.7-1.9 at 58% variable margin. Profit effect = 150k × 0.58 − 64.7k = **−฿22.3k**. Same pattern at portfolio level 1-6 Oct: spend −43%, contribution −26% (V003).
- **Counter-evidence:** Shopee review modelled marginal ROAS 1.12 (elasticity 0.242, n = 12) and said "cut another 30%"; V027 calls that "a decision rule, not a fact". Stock position decides (V027, V016). Spiffy incremental ROAS 3.83 vs BEROAS ~2.0 on Shopee: positive, but "don't scale until the margin line is in"; Spiffy TikTok ROAS 0.46: cut (V027).
- **How to score:** an option that cuts spend scores on contribution, not ROAS. Suppress ROAS when spend < ~฿1k (V027). Lowering ROAS caps to chase volume did not lift sales (V006).
- **Evidence grade:** PRIMARY-internal, small n; BEROAS identity PRACTITIONER (S041); calibrate with lift tests (S042) and later MMM (S043).
- **Sources:** V003, V006, V016, V027, S041, S042, S043.

### 13. Net Marketing Contribution (two definitions, shown side by side)
- **Vault definition (wins for the dashboard):** NMC = net revenue − ad spend, where net revenue is already after trade spend (V004; trade-spend reading is inference from V002).
- **Contribution view (this seat also shows):** CM3 = net sales − platform take − COGS − fulfilment − ads − affiliate. Classic marketing-metrics NMC = sales × CM% − marketing (not re-verified, sales_performance §1 GAP).
- **Why both:** vault NMC does not net out take or COGS, so a channel with a 33% take and one with 3.7% (D2C gateway, V002) look alike. Compare channels on CM3; report NMC as the KPI.
- **Worked example:** 1-6 Oct contribution "−26% to ~2.73M" (V003). ~2.73M cannot sit on ~1M of 1-6 Oct sales; the comparison period is unclear. **Flag:** re-check the base before citing.
- **Evidence grade:** vault PRIMARY-internal; CM layers PRACTITIONER, definitions vary by team (S001, S002); CM3 ≥20% "scalable" is single-vendor US (S003), do not import.
- **Sources:** V002, V003, V004, V013, S001, S002, S003, S006.

### 14. Prime / Xtra (ร้านโค้ดคุ้ม) keep-or-exit and Mall vs non-Mall
- **Formula:** exit pays if fee saved > lost sales × margin after exit. Mall pays if extra conversion or traffic margin > Mall commission premium.
- **Worked example (ACTUAL, V020):** Prime/Extra ≈ 15% of GMV; July Prime ฿400k ≈ 11% of net sales; ~60% of Linee Shopee GMV comes via Extra codes; exit estimated −20-30% sales. Vault example: save ~1M, lose ~2M sales. Lost contribution = 2M × (1 − (0.33 − 0.15) − 0.10) = 2M × 0.72 = **฿1.44M > ฿1M saved: keep** (ASSUMPTION: the 15% sits inside the measured 33%). An early-2026 exit saw "เซลล์ฮวบ" and was reversed around February.
- **Mall:** Shopee Mall top commission 19.26% vs 16.05% non-Mall (~3pp), LazMall 18.73% vs 16.05% (S044, S045, **re-verify in Seller Centre**); Shopee Mall holds funds 15 days vs 3 (V037). No independent Mall conversion-uplift data: GAP.
- **How to score:** Prime is a shop-level switch (V020); test only on the Non-mall shop after it earns "ร้านค้าแนะนำ"; real decision Q1/April.
- **Evidence grade:** PRIMARY-internal estimate; programme fee 5.35-8.56% (S031) SECONDARY, **re-verify in Seller Centre**.
- **Sources:** V020, V025, V037, S031, S044, S045.

### 15. Contribution per live hour
- **Formula:** contribution/h = live GMV/h × m_d − (host cost/h + host commission + live ads/h + live promo cost/h). Rank slots and MCs on this, not GMV/h.
- **Inputs:** 6 in-house MCs × 7 h live/day = 42 live hours/day capacity (ACTUAL, V018). Agency: pure commission ~12% + 4% ads = 16% of GMV, or ~฿50k for ~300 h (≈ ฿167/h) + 1-2% (ACTUAL benchmark, V018). Freelance hosts ฿500-8,000+/h (S047, vendor); in-house MC ฿18-25k/month (S046).
- **Worked example:** agency fixed fee at Linee Shopee m = 57%: GMV/h to cover ฿167/h = 167 ÷ 0.57 = **~฿293/h** before commission and ads. Pure-commission agency leaves 57% − 16% = 41% before our ads. Linee 11:01 session: ฿77k at ฿45.6/viewer, 3× other sessions, peak concurrency 17 (ACTUAL, V028); duration not recorded.
- **Evidence grade:** **GAP: no own GMV-per-live-hour baseline yet** (V024). Build from session exports before adding hours.
- **Sources:** V018, V024, V027, V028, S046, S047.

## D. Read it back

### 16. Promo or package as a pre-registered experiment
- **What it is:** a card filed before launch: hypothesis, mechanic, CPO_base vs CPO_promo, required multiple (#9), loss cap in baht, read date, kill rule, control.
- **Parts:** concurrent control (platform, SKU or 10-20% customer holdout); windows −14 d / event / +14-30 d / 60-90 d repeat read; incremental units = lift − post-window deficit − cannibalised sister SKUs; split new vs repeat buyers.
- **Verdict formula:** incremental contribution = incremental units × CPO_promo − baseline units that took the discount × (CPO_base − CPO_promo) − fixed package cost. Pass if > 0, or inside the loss cap with an explicit new-buyer case.
- **When to use:** every double-day, package, new mechanic, commission change.
- **Worked example:** the 10.10 readout had no per-brand, per-platform targets, so every "vs target" field was blank (V028, V030), and 0 of 9 SKUs carried the Shopee Ads tag, so the post-mortem took 30 exports (V028). Next campaign: targets and tags before nomination.
- **Evidence grade:** PRACTITIONER (S039); pull-forward PRACTITIONER and academic (S012, S013, S029, S038).
- **Sources:** V022, V028, V030, S012, S013, S029, S038, S039.
