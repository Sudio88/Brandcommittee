# Frameworks: Head of Marketplace (mkp)

16 frameworks, grouped by job: price the platform, buy or drop programmes, stay eligible, run the shop, go cross-border. Grades: **PRIMARY** = Moonshot measured or official platform page; **SECONDARY** = press or research summary; **PRACTITIONER** = blog, agency, calculator or vault practitioner claim; **GAP** = no credible number. Worked examples use vault numbers; every input is labelled **actual** (vault measured or decided) or **assumption**. Computed results are this seat's arithmetic, not vault statements. Every external fee or rule is dated; anything before 2026-08-17 carries "re-verify in Seller Centre".

Notation: P = list price; d = discount depth; P_net = P × (1 − d) after all seller-funded discounts; t = platform take as a share of selling price; c = COGS as a share of P; F = fixed per-order cost (pick/pack, packaging, GWP, shipping subsidy); m = margin before ads = 1 − t − c; CPO = contribution per order before ads.

Standard worked SKU: **Linee Whitening Strip 7, ฿299** (actual, V021). COGS: Linee blended 10% of price = ฿29.90 (actual blended share, V001; strip-level COGS is a GAP). F = ฿14 pick/pack (assumption: midpoint of ฿8-20, UNVERIFIED, V004 §D4).

---

## A. Price the platform

### F1. Fee stack per platform and tier (on the post-discount price)
- **What it is:** the line-by-line platform cost of one order, built per platform and shop tier, date-stamped (V046 role definition).
- **Parts (as reported, all re-verify in Seller Centre):**
  - Shopee TH: commission by category, top Mall 19.26% / non-Mall 16.05% incl. VAT from 4 Aug 2026 (S006, S007, S008); transaction 3.21% on item + shipping (S004, S012); infrastructure ฿1.07/order, reportedly waived at ≤100 completed orders in 30 days (S014); ร้านโค้ดคุ้ม (Free Shipping Xtra + Coins/Discount Xtra) 5.35-8.56% (S004, S013) or 6.42-8.56% (S014): sources conflict.
  - TikTok Shop TH: commission (Mall and non-Mall tables changed 5 Jul 2026, numbers not captured, S025, S026); Commerce Growth Fee 8.03% non-electronics, cap ฿199/item from 6 May 2026 (S022); transaction 3.21% with platform subsidies counted in the base from 21 Mar 2026 (S020); ฿1.07/order (S027); vault beauty non-Mall stack ≈21.94%, Mall ≈25.15% (V004 §D1).
  - Lazada TH: commission ~16.05% Marketplace / 18.73% LazMall general category after 1 Aug 2026 (S034); payment 3.21% (S031, S036); optional Premium Package ~8.56% (S032). Official Lazada announcement not found.
  - VAT: Thai fees quoted as base × 1.07 (S004). The vault notes 7% VAT runs only to 30 Sep 2026 (V004 §D3): if it moved, every VAT-inclusive rate moves too. GAP: confirm current rate.
- **When to use:** any fee, programme, tier or channel question; before every model.
- **How to score:** compare (a) the published stack with (b) Moonshot's measured take. Use the measured take for decisions; use the stack to explain the gap and to see which line a decision changes.
- **Worked example (Strip 7 at 10% off, P_net ฿269.10; Shopee non-Mall + Xtra, published, assumption on tier):**
  - Commission 16.05% = ฿43.19; transaction 3.21% = ฿8.64 (assumes no buyer-paid shipping); Xtra 6.42% = ฿17.28; infrastructure ฿1.07. Total **฿70.18 = 26.1%**.
  - Measured 33% = **฿88.80**. Gap **฿18.62 per order** that the published stack does not show (affiliate/AMS, campaign fees, rise across Jan-Jul per V001; inference).
  - Measured take predates the 4 Aug round (+~2.14pp incl. VAT, S006): this seat reads 35% (V029 planning) as "33% plus the August rise". Inference, not a vault statement.
- **Evidence grade:** measured take PRIMARY (V001); every stack line PRACTITIONER/SECONDARY, search summary only.
- **Sources:** V001, V004, V029, V046, S004, S006, S007, S008, S012, S013, S014, S020, S022, S025, S026, S027, S031, S032, S034, S036.

### F2. Contribution per order (CPO) and break-even uplift
- **What it is:** what one order leaves after the platform and the product, and how many more orders a price change needs.
- **Formulas:**
  - **CPO = P_net × (1 − t) − c × P − F.**
  - **Break-even uplift (volume multiple) = CPO_before ÷ CPO_after.** Required % = multiple − 1.
  - **Allowable volume loss on a price rise = 1 − CPO_old ÷ CPO_new.**
  - A discount costs (1 − t) of its depth: 30% off on Shopee ≈ 20 margin points (V001).
- **When to use:** any discount, ISP change, voucher or bundle that touches price.
- **How to score:** an option passes only if the measured or credibly comparable uplift beats the break-even multiple.
- **Worked example (Strip 7, Shopee, t 33% actual):**
  - Full price: 299 × 0.67 − 29.90 − 14 = **฿156.43**.
  - 10% off: 269.10 × 0.67 − 29.90 − 14 = **฿136.40**. Break-even uplift 156.43 ÷ 136.40 = **1.147 → +14.7% orders** just to stand still.
  - ISP +10% (the post-9.9 rule for AOV < 500, V045) to ~฿329 (assumption on rounding): CPO ฿176.53, so volume can fall **11.4%** before the rise loses money.
- **Evidence grade:** inputs PRIMARY (V001, V021) except F (assumption); formula SECONDARY (pricing research summary, V001).
- **Sources:** V001, V004, V021, V045.

### F3. Break-even ROAS and marginal ROAS
- **What it is:** the ad-return floor per platform and depth.
- **Formulas:** **BEROAS = 1 ÷ m** (m before ads, after take, COGS and discount) (S084; V001). Judge added spend on **marginal ROAS = ΔGMV ÷ Δspend**, not average ROAS (V014).
- **When to use:** in-app, CPAS, GMV Max or Lazada sponsored spend decisions; programme fees that are really traffic purchases.
- **How to score:** marginal ROAS above BEROAS keeps or adds spend; below cuts it. Average "ROAS above 4" rules are a known error (V014).
- **Worked example:**
  - Linee Shopee m 57% → BEROAS **1.75×** at full price; **1.90×** at 30% off (actual table, V001).
  - Moonshot ad cut (actual, V014): GMV −฿150k for −฿64.7k ads = marginal **2.3×** vs BEROAS ~1.7-1.9 at 58% variable margin, so the cut cost ~฿20k+ profit.
  - Vault-recorded healthy bands: Shopee 2.5-3.1×, TikTok 2.8-3.5×, Lazada 2.3-2.8× (V001).
- **Evidence grade:** PRIMARY (V001, V014); conflicting "cut another 30%" model (marginal 1.12, n=12) is "a decision rule, not a fact" (V014).
- **Sources:** V001, V013, V014, S084.

### F4. Orders to break even on a fixed fee (packages, slots, agencies)
- **What it is:** converts any fixed platform fee into the incremental orders it must buy.
- **Formula:** **N = Fee ÷ incremental CPO**; incremental GMV needed = N × P_net. Compare with the best measured uplift.
- **When to use:** Shopee/TikTok campaign packages (Platinum, Diamond, Beauty Fest), paid slots, live agency fixed fees, Tops entry fees.
- **How to score:** pass if N is below a measured comparable uplift with margin to spare; otherwise only as a test with a loss cap.
- **Worked example (12.12 Platinum, Linee):**
  - Fee ~฿300k (actual figure, V035; treated here as cost, assumption on what the ฿300k covers). CPO at 10% off ฿136.40 (F2).
  - N = 300,000 ÷ 136.40 = **2,199 incremental orders ≈ ฿592k incremental GMV** at ฿269.10.
  - Measured best: 9.9 D-day ~4× a ~฿120k baseline ≈ ฿360k incremental on the day (actual, V035), and 10.10 was −17% vs 9.9 (V015). The package needs more than a record day of pure increment. Decision recorded: declined (V035).
  - Diamond: ฿720k target needs ฿150k baseline × 6 vs historic ~4×; ฿700k needs ~42,000 visitors, nearly double the record (actual, V035).
- **Evidence grade:** PRIMARY inputs (V035, V015); package benefits as TikTok/Shopee describe them are self-reported (V018).
- **Sources:** V010, V015, V018, V035.

## B. Buy or drop programmes

### F5. Prime/Xtra keep-vs-exit
- **What it is:** a shop-level switch (cannot be tested per SKU, V045) traded against its traffic.
- **Formula (first order):** **Δ contribution of exit ≈ Fee saved − Sales lost × m + Redeployed budget × (ROAS_r × m_r − 1).** m should exclude the Prime fee itself, which makes exit look worse, not better.
- **When to use:** Prime/Xtra, ร้านโค้ดคุ้ม, Lazada Premium Package, any % of GMV programme.
- **How to score:** exit only if Δ > 0 under the measured sales loss, and only after a clean test shop result.
- **Worked example (Linee, vault worked numbers, actual):** save ~฿1M, lose ~฿2M sales (V045). 1.0M − 2.0M × 0.57 = **−฿140k before redeploy**. Redeploy break-even on that ฿1M at m 57%: ROAS ≥ 1.14 ÷ 0.57 = **2.0×** marginal. The vault's "≈400k saving at ~30% cost of sale" line cannot be reproduced from the transcript; confirm with Ploy before citing.
- **Internal inconsistency to fix:** ฿400k ÷ 11% implies ~฿3.6M July net sales, against the "Linee Shopee baseline ~฿6.7M" in the same note (V045). Confirm which window each number covers.
- **New risk:** the Aug 2026 round reportedly narrowed the PRIME commission discount (S009, re-verify in Seller Centre), which lowers Prime's net value; recompute before the Q1/April decision.
- **Evidence grade:** PRIMARY (V045, V008); S009 PRACTITIONER.
- **Sources:** V008, V045, S004, S009, S014.

### F6. Mall vs non-Mall
- **What it is:** a tier choice that buys trust, Mall-only campaign slots and (reportedly) manual keyword bidding at a commission and cash cost.
- **Parts:** commission premium ~3.21pp on Shopee top rates (19.26 vs 16.05%) (S006); LazMall +2.68pp general (18.73 vs 16.05%) (S034); Shopee fund hold 15 days Mall vs 3 days (V004 §D2); stricter LSR 5% vs 10% (S003); manual keyword Mall-only claim (S041, unverified); TikTok Mall parity (4-6%, 2024) may have ended 5 Jul 2026 (S019, S025).
- **Formulas:** **required order uplift = Δfee ÷ m**; **working capital tied = extra hold days × daily GMV**.
- **When to use:** opening a shop, licensed goods, a hybrid flagship + clearance setup.
- **How to score:** Mall wins only if conversion/traffic uplift beats Δfee ÷ m and the working capital is affordable.
- **Worked example (illustrative, Linee shop tier GAP):** 3.21 ÷ 57 = **5.6% more orders** needed; 12 extra hold days × ~฿120k/day (actual baseline, V035) = **~฿1.44M** working capital.
- **Evidence grade:** SECONDARY/PRACTITIONER, all re-verify in Seller Centre; no Mall conversion study found (GAP).
- **Sources:** V004, V035, S003, S006, S019, S025, S034, S041, S042, S043, S044.

### F7. Campaign package and programme value test (incremental, not headline)
- **What it is:** the readout that decides whether a joined package or programme earned its fee.
- **Parts:** incremental sales and incremental cost of sale **excluding ads** (the 09-28 ask to Ploy, V035); confirmed basis (V016); new vs repeat buyers (V017); post-window dip.
- **Formula:** **Incremental contribution = (Campaign GMV − baseline GMV) × m − package fee − incremental voucher/co-fund cost.**
- **When to use:** FMCG & Beauty Platinum (joined: expected ฿500k over 3 days; 5 slots → ~+฿50k), 11.11, 12.12, TikTok Beauty Fest.
- **How to score:** positive at D+14 on confirmed basis, with the new-buyer count up, renews. Higher conversion on shrinking traffic is "a warning sign, not a win" (V016).
- **Evidence grade:** PRIMARY method (V016, V035).
- **Sources:** V016, V017, V035.

## C. Stay eligible

### F8. Campaign readiness gate
- **What it is:** the go/no-go list before any campaign; the vault checklist has 152 tasks plus a PLATFORM RULES tab (V002, V047).
- **Parts:**
  1. **Deadlines:** registration 2-4 weeks out; Shocking Sale nomination 24-hour window five working days out (V004 §A1); 2025 11.11 deadlines Shopee TH 6 Nov, TikTok 7 Nov (ONE source, V004 §C1); TikTok Open Collaboration rate change takes 30 days (V005).
  2. **Stock:** physical, not system; deducted at approval; scope SKUs out of OMS sync (V002); buffer only where tight (Monchhichi) (V032).
  3. **Listing compliance:** exact peroxide % on pack (V021); no banned claims (V005, V024); SKU rejection triggers: rating < 4.2, ship > 2 days, product added < 24h, not price-competitive vs Lazada (V004 §A3).
  4. **Shop health:** penalty points < 3; LSR headroom; TikTok 12-hour chat response is an eligibility gate (V002).
  5. **Ads:** GMV Max learns ~7 days, last ROI edit D-3; Shopee caps GMV if ROAS target is >25% above max suggested (V002). Every campaign SKU carries the Ads tag (0 of 9 did on 10.10, V015).
  6. **Courier:** last pickup 17:00 → packing ends 16:00 (V002).
  7. **Day-of:** vouchers, free shipping on (Shopee + Lazada), test orders, monitor conversion (V032).
- **When to use:** D-30, D-14, D-3, D-day.
- **How to score:** any red on 1-4 is a no-go for that SKU; 5-7 are fix-by-date items with an owner.
- **Evidence grade:** PRIMARY (vault decisions) plus SECONDARY/PRACTITIONER platform rules, re-verify in Seller Centre.
- **Sources:** V002, V004, V005, V015, V021, V024, V032, V047.

### F9. Shop-health budget (penalty points and LSR headroom)
- **What it is:** treats points and late-shipment rate as a budget the campaign spends.
- **Parts:** Shopee NFR, LSR (rolling 7 days), seller-requested cancels (S050, S051); points accumulate per quarter, privileges suspended in 28-day blocks (S052); 3 points = 28-day campaign ban and gates voucher nomination; reset first Monday of Jan/Apr/Jul/Oct (V002) (5 Oct 2026, next 4 Jan 2027); LSR cap 10% regular / 5% Mall-Preferred (S003). TikTok moving from violation points (12/24/36/48, 48 = permanent) to a 0-1,000 Account Health Rating (S058, S060, S062); TikTok flash sale needs < 36 violation points (S086); cancellation trap: handle ≥ 90% of cancel requests or the platform auto-approves future small cancels (V004 §C7).
- **Formula:** **Max late orders this window = LSR cap × orders in the rolling 7-day window − late orders already in it.**
- **Worked example (assumption):** 3,000 orders in the 7-day window at a 5% cap = **150 late orders** of headroom. Linee 10.10 cancels doubled 7.6% → 15.6%, 26 of 117 in the 00:00 hour (actual, V015): cancellations need their own watch.
- **How to score:** a plan that spends > 50% of headroom before 12.12 needs extra courier capacity or a smaller nomination (seat judgement).
- **Evidence grade:** SECONDARY/PRACTITIONER, mostly older than 60 days: re-verify in Seller Centre. Current TH point values per violation: GAP (2021 MY tiers only, V004 §A3).
- **Sources:** V002, V004, V015, S003, S050, S051, S052, S058, S060, S062, S086.

### F10. Safety stock and stock integrity
- **What it is:** stock you can promise, not stock the system shows.
- **Formula (ONE source, widely reproduced):** **Safety stock = (Peak daily sales × Max lead time) − (Avg daily sales × Avg lead time)** (V004 §C6).
- **Parts:** physical count before nomination; online/offline stock flag, not new SKUs; stock leaves only via orders or documented VRN lots; scan out every order (V031); Tops is outright sale, stock deducted on shipment (V031).
- **Worked example (Monchhichi, units are assumption: ฿299 average):** avg ~฿11k/day ≈ 37 units; peak ~฿35k/day ≈ 117 units (actual baht, V038, V030). With max lead 30 days and avg lead 21 days (assumptions; real lead times GAP): 117 × 30 − 37 × 21 = **2,733 units** of safety stock. Integrity check: one toothpaste shows ~10,000 in system vs ~3,600 physical (actual, V031), so the system figure cannot be the nomination basis.
- **How to score:** nominate only physical units minus safety stock minus committed pre-orders (Monchhichi ~฿188k due 31 Oct, V014).
- **Evidence grade:** formula PRACTITIONER [ONE]; stock facts PRIMARY.
- **Sources:** V004, V014, V030, V031, V038.

## D. Run the shop

### F11. Search and listing two-pass
- **What it is:** Shopee search filters on title keywords, then ranks on recent sales velocity, conversion, CTR, completeness, shop quality and price (S045).
- **Parts:** Thai-first titles: [Brand] + Thai product noun + benefit/ingredient + size/pack + English term (S049; research inference); ads feed organic rank only through the sales and clicks they create (S041); Shopee Video uploads converted where existing videos earned zero (V042); fix titles and keywords by hand per SKU (V037); weekly search of the product name for resellers (V005).
- **Diagnostic split:** visitors down with conversion flat = reach problem (Linee strips: visitors −28%, conversion ~11.5%, V014); visitors up with conversion down = listing or offer problem (Linee KIT 5.4% → 1.3%, V014); visitors with ฿0 sales for two weeks = fix or delist (Loom 786 visitors, V014).
- **Metric hygiene:** Shopee changed its shop-visitor metric on 1 Oct 2026; use product visitors for cross-month trends (V014).
- **Evidence grade:** ranking factors PRACTITIONER (no official doc reachable, GAP); diagnostics PRIMARY.
- **Sources:** V005, V014, V037, V042, S041, S045, S046, S047, S048, S049.

### F12. GMV reconciliation ladder (placed → confirmed → net)
- **What it is:** one basis per readout.
- **Ladder:** Placed GMV → Paid/Confirmed → − cancellations → − returns/refunds → − seller vouchers and co-funding → Net sales → − commission, transaction, programme, affiliate fees and ads → CM.
- **Worked example (10.10, actual, V016):** MKP recap ฿635.8k (all platforms, probably placed) vs decks ฿581k vs Shopee review ฿531k (Shopee only, confirmed). Placed-basis ROAS flatters by ~8-10%. The platform rebate (~31.8% of gross, ฿177k in one day) "sits in no channel P&L" (V015).
- **Evidence grade:** PRIMARY (V015, V016); platform definitions PRIMARY but non-TH pages (S081, S082, S083), check the TH tooltip.
- **Sources:** V014, V015, V016, S081, S082, S083.

### F13. TikTok GMV Max operating rules
- **What it is:** the only Sales-objective format for new TikTok Shop ads since July 2025 (S065, S087).
- **Formulas (V005):** **ROI target = historical non-LIVE GMV ÷ ad cost**; **Budget = 2 × non-LIVE GMV ÷ ROI target**; utilisation < 80%; actual 80-120% of target is healthy, > 120% means budget-constrained. ROI Protection is void for the day on any manual ROI change. GMV Max rebate −1.07pp of fees when ad spend > 3% of trailing-30-day gross (V004 §D1, PRIMARY).
- **Rebate worked example (assumption):** ฿500k trailing TikTok gross → spend > ฿15k to qualify; value ≈ 1.07% × 500k = **฿5,350**. Eligibility on the new and satellite accounts is under investigation (V027).
- **Shop-level vs product GMV Max:** shop-level stops all product campaigns and would sell the whole Linee catalogue incl. Monchhichi GWP; not adopted (V033).
- **Moonshot evidence:** Linee GMV Max ROI 2.93 → 3.93 while impressions fell 297k → 56k ("starved, not broken"); Linee GMV Max Auto ROAS 7.04 on ฿7.1k never scaled (V017, V015).
- **Evidence grade:** PRIMARY (vault, platform); vendor claims (100+ videos per product, ROI credit-back) PRACTITIONER, unverified (S066).
- **Sources:** V004, V005, V015, V017, V027, V033, S065, S066, S087, S088.

### F14. GMV and contribution per live hour
- **What it is:** the unit for adding live hours or hiring an agency.
- **Formulas:** **GMV/h = live GMV ÷ live hours.** **Contribution/h = GMV/h × (m − commission%) − (MC cost/h + live ads/h + promo cost/h).** Agency fixed fee: **break-even GMV/h = fee per hour ÷ (m − commission%)**.
- **Worked example (agency benchmark, actual quotes V043; Linee m 57% actual):** fixed ~฿50k for ~300h = ฿167/h + 2% commission → break-even **~฿304 GMV/h** before ads and promo. Pure commission model 12% + 4% ads = 16% of GMV → contribution ≈ 41% of live GMV before promo.
- **GAP:** no own GMV-per-live-hour baseline (V012). Close it from the Shopee livestream promo exports (`raw promo data */_manifest.csv`, V048) by session, hour and host. Known points: Linee 11:01 session ฿77k at ฿45.6/viewer, 3× other sessions (V015); Linee LIVE ฿317k → ฿221k week on week with live ads −9% only (V014).
- **Evidence grade:** formula SECONDARY (live research summary); inputs PRIMARY; baseline GAP.
- **Sources:** V012, V014, V015, V043, V048.

## E. Accounts and cross-border

### F15. Account-risk ladder (main, new, satellite accounts)
- **What it is:** a check before adding accounts or channels.
- **Parts:** main TikTok account unavailable; up to 5 marketing accounts, verified one phone number at a time in the company name; dual-SIM phones (~฿1,000) instead of an agency number service (V037, V032, V027); new account 14 days before live (V027); max 5 channels per person; same-host dual live = re-run, ban and −2,000 points (V043); fake orders up to US$200 per violation plus 90-day balance suspension (V005). Linked-account enforcement (same entity, ID, bank, device, IP) is a general platform pattern, not verified for TikTok TH (research inference).
- **How to score:** each new account must name its owner, its purpose (volume + baskets vs brand), its rebate eligibility and its link exposure. If the main-account loss was enforcement-driven, no scaling of satellites until the AHR status and appeal path are read in Seller Center.
- **Evidence grade:** PRIMARY (vault decisions); multi-account rules GAP on all three platforms.
- **Sources:** V005, V027, V032, V037, V043, S058, S060.

### F16. Cross-border route chooser (SG / MY)
- **What it is:** picks the route by licence, regulation and break-even, not by forecast.
- **Routes:** (a) Shopee cross-border via the Thai shop (MY first, PH second; customers must buy via the Thai shop) (V039); (b) local partner / notification holder (Momentum Commerce at JBP simulation, V021); (c) TikTok Shop SG cross-border (needs licence and local fulfilment, unverified, S072).
- **Gates:** Monchhichi is Thailand only, no export (V019); each ASEAN market needs a local cosmetic notification holder (S073); oral H2O2 0.1% consumer limit under the ACD (S074, S075).
- **Worked example (Singapore, actual, V042):** Sept MTD SGD 1,320 sales on ~SGD 2,000 spend (ROAS 0.66); plan SGD 800 for SGD 1,200-1,500 (≈1.5-1.9×). Spend must be set from BEROAS (COGS + trade spend + marketplace fee); SG fee stack is a GAP, so BEROAS cannot yet be computed. Otherwise the budget moves to D2C (V042).
- **Evidence grade:** PRIMARY (vault); route options SECONDARY/PRACTITIONER; SIP terms GAP.
- **Sources:** V019, V021, V039, V042, S017, S072, S073, S074, S075.
