# Frameworks: Head of Creator Strategy (kol)

15 frameworks, grouped by job: can the SKU fund the creator, which creators move GMV, run the machine, stay legal, prove it. Grades: **PRIMARY** = Moonshot measured or official platform / government page; **SECONDARY** = press or research summary; **PRACTITIONER** = blog, agency, rate card or vault practitioner claim; **GAP** = no credible number. Worked examples use vault numbers; every input is labelled **actual** (vault measured or decided) or **assumption**. Computed results are this seat's arithmetic, not vault statements.

Notation: P = realised price per order; t = platform take ex-affiliate (TikTok 21.7% = measured 26.3% minus the 4.6% affiliate line, V001; Shopee 33%, V001, whether it already contains AMS is a GAP); k = COGS in baht; r = royalty share (Monchhichi 7% of selling price, V018); c = commission rate; F = fixed fee; m = margin before commission and ads as a share of P; CPO = contribution per order before ads.

---

## A. Can the SKU fund the creator

### 1. Creator CPO waterfall
- **What it is:** the per-order ledger for an affiliate or creator-driven order. "SKU affordability first" (V047).
- **Parts:** P → minus t × P → minus k → minus r × P → minus c × P → minus per-order costs not in t (sample, GWP + 15% GWP royalty for Monchhichi, V018) = **CPO = P × (1 − t − r − c) − k**.
- **When to use:** before any commission rate, fee, seeding batch or boost is approved.
- **How to score an option:** higher CPO at equal expected orders wins; CPO ≤ 0 before ads is a red line; CPO that cannot clear BEROAS inside the healthy band (#4) fails if ads are part of the plan.
- **Worked example (Monchhichi toothpaste, TikTok):** P ฿349 (actual, V001 costing price); t 21.7% = ฿75.73 (actual, V001); k ฿42 (actual, V001); r 7% = ฿24.43 (actual, V018). CPO before commission **฿206.84** (m = 59.3%).
  - c 3% (actual today, V038): ฿10.47 → **CPO ฿196.37**.
  - c 10% (proposed, V038): ฿34.90 → **฿171.94**.
  - c 15% (vault oral-care visibility floor, V002): ฿52.35 → **฿154.49**.
  - c 20%: ฿69.80 → **฿137.04**. c 25% (top of GTM plan, V019): **฿119.59**.
  - Sensitivity at the GTM online price ฿259 (actual, V019; CONFLICT with ฿349, reconcile): CPO before commission ฿142.67; at 10% ฿116.77.
- **Shopee version (Monchhichi, AMS 15%):** 349 − 115.17 (33%) − 42 − 24.43 − 52.35 = **฿115.05** (assumes 33% excludes AMS; if it already includes AMS this double-counts, GAP).
- **Evidence grade:** PRIMARY inputs (V001, V018); formula is this seat's arithmetic.
- **Sources:** V001, V018, V019, V038, V047.

### 2. The 40% envelope (affordable commission ceiling)
- **What it is:** Care's cost model handed to Milk: marketplace 35% + COGS 15% + fulfilment 5% + back office 2% = 57%, plus 3-5% margin ≈ 60%; the other **40%** must cover affiliate commission + headcount + marketing + KOL fees (V041).
- **Formula:** max commission ≈ 40% − 1 ÷ ROAS_target − (KOL fees + headcount as % of sales).
- **When to use:** setting the commission ladder per brand and channel; checking Milk's envelope against media.
- **How to score:** an option whose commission + ad cost of sale + fees exceeds 40% of sales fails.
- **Worked example (actual targets, assumption that all creator sales also carry ads at target):** ads at ROAS 4.7 (actual Oct global target, V009) = 21.3% of sales.
  - c 10% → 31.3% → **8.7%** left for KOL fees and headcount.
  - c 15% → 36.3% → **3.7%** left.
  - c 20% → 41.3% → **over by 1.3%**. Ceiling ≈ **18.7%** with no fees at all.
  - Milk's envelope ฿300k for ฿2M (actual, V041) = 15% cost of sale: fits only if ads on those sales stay ≤ 25% (ROAS ≥ 4).
- **CONFLICT:** COGS 15% here vs measured 10% Linee / 12% Monchhichi (V001). Treat 15% as conservative planning; measured gives ~3-5 extra points of room.
- **Evidence grade:** PRIMARY (vault decision); arithmetic is this seat's.
- **Sources:** V001, V009, V041.

### 3. Commission-change break-even uplift and lock timing
- **What it is:** a rate rise must buy enough extra affiliate orders to keep total contribution flat; a rate cut takes 30 days to bite.
- **Formula:** required order multiple = CPO_old ÷ CPO_new.
- **Lock rules:** Open Collaboration changes take **30 days** to go live, Target **5 days**; decreases are lagged 30 days for creators already promoting; increases apply instantly; Target overrides Open overrides shop-wide (V002, PRACTITIONER inside a vault note, 2026-09-19). External: increase immediate, decrease 30-day protection, creators notified ~2 days before (S011, S012, PRACTITIONER, 2026); Shop Ads commission decreases follow the same 30-day protection (S013, PRIMARY non-TH, undated). **Which wins:** plan on the vault's stricter 30-day Open rule until the TH Seller Centre page is checked (re-verify in Seller Centre).
- **When to use:** any request to raise, cut or tier a rate; every double-day calendar.
- **How to score:** compare required uplift with evidence of creator response; reject a cut timed inside D-30 of a mega day.
- **Worked example (Monchhichi TikTok, actual CPOs from #1):**
  - 3% → 10%: 196.37 ÷ 171.94 = **1.14×** (+14% affiliate orders to stand still).
  - 3% → 15%: **1.27×**. 3% → 20%: **1.43×**.
  - Today's base: TikTok Monchhichi media ~฿18k of ฿225k Oct plan (actual, V030) and affiliate ROAS ~1.0 (actual, V038): the 3% rate is buying almost no creator supply, so +14% is a low bar.
  - Timing (computed): for 11.11 an Open change needed to start by 12 Oct (missed); Target rates must be set by **6 Nov** at the latest. For 12.12, Open changes by **12 Nov**.
- **Evidence grade:** formula arithmetic; lock rule PRACTITIONER / PRIMARY non-TH; re-verify in Seller Centre.
- **Sources:** V002, V030, V038, S011, S012, S013.

### 4. Break-even ROAS on creator-led ads (Spark, GMV Max on affiliate posts)
- **What it is:** paid boost behind a creator clip still pays the commission, so the bar is higher than the shop BEROAS.
- **Formulas:** **BEROAS = 1 ÷ (m − c)**. GMV Max Pro ACO = GMV ÷ (ad cost + affiliate cost); it excludes coupons and platform commission and tilts delivery toward lower-commission creative (V002). Never quote a GMV Max ROI as a ROAS (V002).
- **When to use:** any Spark code, mass-authorised GMV Max pool, CPAS behind affiliate content.
- **How to score:** marginal ROAS above BEROAS and inside the healthy band (TikTok 2.8-3.5×, Shopee 2.5-3.1×, V001) passes; below BEROAS cut.
- **Worked example (Monchhichi TikTok, m 59.3%, actual):** c 3% → BEROAS **1.78×**; 10% → **2.03×**; 15% → **2.26×**; 20% → **2.55×**; 25% → **2.92×**. Measured affiliate ROAS ~1.0 (V038) fails at every rate: the problem is the content-to-traffic link, not the rate. Shopee Monchhichi with AMS 15%: m 48.0% → BEROAS **3.03×**, at the top of the Shopee band, which supports the decision to trim Shopee slightly (V038).
- **Counter-evidence to respect:** 9.9 GMV Max ROAS 4.01× while first-order contribution per new buyer fell ฿194 → ฿137 (V046): a good ROAS can hide worse unit economics.
- **Evidence grade:** PRIMARY inputs; arithmetic.
- **Sources:** V001, V002, V038, V046.

### 5. Orders to break even on a fixed fee
- **What it is:** the doctrine's fixed-fee check (V047). **Orders = F ÷ CPO; GMV to break even = F ÷ (m − c)**.
- **When to use:** every paid KOL, celebrity pair, package fee, content buyout that is meant to sell.
- **How to score:** compare orders needed with this creator's proven orders (or the best comparable); if no history, the fee is a test and must sit under a stated loss cap.
- **Worked examples:**
  - Micro fee ฿8,000 (assumption inside Tellscore micro ฿5-10k, S040 SECONDARY ~2024): Monchhichi TikTok at 10% → 8,000 ÷ 171.94 = **47 orders**. Linee Strip 7 on Shopee at list ฿299 (actual price, V021; COGS 10% actual, V001; AMS 15% assumption) → CPO ฿125.58 → **64 orders**; at the realised AOV "~200 นิด ๆ" (V036) → CPO ~฿74 → **108 orders**.
  - Big KOL Wave ฿250k (actual, V041): vault says break-even at **฿370k** sales. That implies a 67.6% contribution rate, above every measured margin. At Linee Shopee m 57% (V001) the bar is **~฿439k**; at Monchhichi Shopee incl. royalty (48%) **~฿521k**; inside Care's 40% envelope **~฿625k**. **Inference:** treat ฿370k as optimistic until Milk shows the inputs.
  - Competitor celebrity pair: paid ฿900k, got back ฿1.2M, "ไม่คุ้ม" (actual as stated, V033). At 57% margin that is ฿684k contribution, a **~฿216k loss**; break-even needed ~฿1.58M.
  - Spiffy programme ฿125k (actual, V045): ฿499 box, COGS ฿90 (V001), TikTok t 21.7%, c 15% (assumption) → CPO ฿225.87 → **554 orders**. Actual: no affiliate sales (V029). Part of the fee bought assets, so the content-library value is the only recovery.
  - TikTok Beauty Fest Gold fee ฿2.4M (TikTok's claim, V017): Linee Strip 7 on TikTok at 15% → CPO ฿159.37 → **~15,060 incremental orders**, against 1,062 Shopee buyers on Linee's whole 10.10 (V014).
- **Evidence grade:** PRIMARY inputs where labelled; rate cards PRACTITIONER/SECONDARY.
- **Sources:** V001, V014, V017, V021, V033, V036, V041, V045, V047, S040.

### 6. Hybrid deal design (small fee + Target commission + KPI tranche)
- **What it is:** the doctrine's preferred deal shape (V047): a small fee for guaranteed deliverables, Target commission for sales, ad authorisation and usage licence locked in.
- **Parts:** fee F (deliverables, physical demo, posting window); Target commission c (5-day lock, above the Open rate); KPI tranche, e.g. 50% on posting and 50% if GMV reaches F ÷ (m − c) within 30 days (research inference, not a sourced standard); per-video Spark code ≥ 60-90 days plus mass authorisation kept on for the term (S015, S016 PRACTITIONER); usage licence priced separately (6-month social +20-30%, perpetual +50-100%; S074, S075 PRACTITIONER, US norms); exclusivity only when priced (30-day category +20-50%, S076).
- **When to use:** any creator above nano, any mid-tier who will not work on commission alone.
- **How to score:** total cost at expected GMV vs a pure-fee and a pure-commission alternative; prefer the shape where the brand's cost is mostly variable.
- **Worked example (assumption):** micro creator, ฿4,000 posting fee + ฿4,000 KPI tranche + 15% Target on Monchhichi TikTok (CPO ฿154.49): tranche paid only at 8,000 ÷ 0.443 = ~฿18k GMV (~52 orders); if the clip sells nothing, the loss is capped at ฿4,000.
- **Evidence grade:** doctrine PRIMARY (V047); clause pricing PRACTITIONER; Thai-market usage-rights norms are a GAP.
- **Sources:** V047, S015, S016, S072-S078.

## B. Which creators move GMV

### 7. GPM and proven-GMV creator scoring
- **What it is:** select on GMV per 1,000 views and on GMV already sold, not followers (V047; V002 "judge creators on conversion, not views"; "choose partners on commission × scalable volume").
- **Formulas:** **GPM = GMV ÷ views × 1,000**. Expected GMV = expected views × GPM ÷ 1,000. Max fee = expected GMV × (m − c) × haircut (assumption 0.5 for a first deal).
- **Parts:** proven GMV (TikTok Affiliate Center, Kalodata/FastMoss per kol research), GPM by category, post consistency, audience fit (Monchhichi: Thai women 28-42, collectors, V019/V016), claim safety record.
- **When to use:** shortlisting, promoting Open creators to Target, pricing any fee.
- **How to score:** rank by expected contribution = expected GMV × (m − c) − F; drop anyone with no sales history for a fee deal (offer commission + sample instead).
- **Worked example:** GAP. No creator-level GPM exists in the vault (V028). Illustration only (assumption): 50,000 views × GPM ฿200 = ฿10,000 GMV; Monchhichi TikTok at 10% m − c = 49.3% → ฿4,927 contribution; with haircut 0.5 the max fee is ~฿2,460, so a ฿8,000 micro fee fails.
- **Evidence grade:** doctrine PRIMARY; data GAP. Close with Creator Hub per-creator export plus TikTok Affiliate Center.
- **Sources:** V002, V016, V019, V028, V047.

### 8. Seeding funnel economics
- **What it is:** free samples are a lottery ticket; price the ticket. **Cost per posting creator = landed sample cost ÷ post rate**; batch break-even orders = batch cost ÷ CPO.
- **Parts:** sample landed cost; post rate; videos per post; GMV from the top few; promote winners.
- **Benchmarks:** post rate 30-40% no-strings, below 30% signals a vetting problem (S046, PRACTITIONER US 2026); 20% cold → 40%+ refined → 62% white-glove (S047, PRACTITIONER). Moonshot measured: Monchhichi celebrity seeding **10-20% posted, zero conversion** (V042). **Vault wins** for Moonshot planning; the benchmark is the target, not the forecast.
- **When to use:** any PR box, sample wave, To The Moon drop.
- **How to score:** cost per posting creator vs a paid micro clip (~฿10k KOL clip, ฿200-500 bought clip, V038/V032); a batch must name the orders it needs.
- **Worked example (Monchhichi):** tube ฿42 (actual) + cap ~฿20 (actual, V039) + parcel ฿19-32 + pick/pack ฿8-20 (V004 §D4, UNVERIFIED) ≈ **฿89-114** landed. At 15% post rate → **฿593-760 per posting creator**; at 35% → ฿254-326. A 100-sample batch (~฿8.9-11.4k) needs **52-67 orders** at TikTok 10% CPO ฿171.94. First batch delivered zero (V042).
- **Evidence grade:** Moonshot PRIMARY on post rate; costs partly UNVERIFIED; benchmarks PRACTITIONER.
- **Sources:** V004, V032, V038, V039, V042, S046, S047.

### 9. Creator power-law portfolio and the Open → Target ladder
- **What it is:** a few creators make most of the affiliate GMV; run the army as a funnel and promote by data.
- **Parts:** Open Collaboration with low-cost samples for discovery (first-time sellers start Open, then Target; S001 PRIMARY TH, undated) → top decile by GPM promoted to Target (higher rate, samples, mass authorisation, hybrid fee) → To The Moon community for retention (V038).
- **Benchmarks:** ~5% of creators generate most affiliate revenue ("5-10-85"); top-10 concentration > 50% = fragile; 10-20% of onboarded affiliates sell monthly (S045, S048 PRACTITIONER US 2026). Concentration cap per creator 25-30% of affiliate GMV is a research judgment, not sourced.
- **Moonshot reality:** To The Moon 60-100 KOLs, 2 of top 3 are internal staff, no ambassador tier, affiliate share unknown, KPI 10% (V038). Thai creators drive ~70% of TikTok Shop TH GMV (TikTok's own 2024 disclosure, V004 §D6). "Creators join brands that already sell" (V002).
- **When to use:** monthly commission review; deciding who gets samples and Target invitations.
- **How to score:** share of affiliate GMV from top 10; active-seller share; number promoted to Target per month.
- **Evidence grade:** PRACTITIONER benchmarks; Moonshot data GAP.
- **Sources:** V002, V004, V038, S001, S045, S048.

### 10. Basket and channel routing (red vs yellow, TikTok vs Shopee AMS)
- **What it is:** set the rate per basket and per platform deliberately, and give every creator the right link.
- **Parts:**
  - TikTok: red basket (ตะกร้าแดง) and yellow basket (ตะกร้าเหลือง) are one basket with two rates; Shop Ads rate set separately (1-80%); Thai practitioners put red at about half of yellow (~10% vs 20%) (V002). Equal rates on both, as Monchhichi had at 3%, is "a structural error" (V038). Brief the red rate openly or top creators drift away (V002).
  - KOLs attach the small basket (ตะกร้าเล็ก), not the big one (V039).
  - Shopee AMS: commission counts only delivered orders with no cancel or return (S023, PRIMARY, undated); Extra Comm sits on top of base (S024; launched 8 May 2023, S026); last click within 7 days (S027, PRACTITIONER 2024-12); co-sponsored ceiling 18% (V004 §A2 SECONDARY). All re-verify in Seller Centre.
  - Pitch: "a halved rate on five times the volume still wins. Sell the baht, not the percentage" (V002).
- **When to use:** monthly commission table (one table per brand and channel, V038); every creator brief.
- **How to score:** CPO by basket and platform (#1); rate visible to creators; separate Shopee AMS link for cross-posts.
- **Evidence grade:** vault PRACTITIONER plus PRIMARY platform pages (snippets).
- **Sources:** V002, V004, V038, V039, S023, S024, S026, S027.

## C. Run the machine

### 11. Content supply chain and boost concentration
- **What it is:** creators are also Moonshot's creative supply for GMV Max; buy, store and boost deliberately.
- **Parts:**
  - Lead time ~3 weeks ship → film → receive; commission assets ~3 weeks before a campaign; fast-track = buy ~10 usable videos outright (V045). Warm-up content live by D-14 (V003).
  - Pipeline: KOL content → Tammy's Content OS → PIM; marketing takes content only from PIM (V037).
  - Cost ladder per clip (actual quotes): KOL ~฿10k; vendor ~฿500-833 (฿25k for 30-50); bulk ~฿50-75 (200 for ฿10-15k); QL ~฿33-100; in-house producer ฿200 + ฿5,000 per 100 = **฿250 effective** (V038, V032, V043).
  - Boost: top ~10 clips, ~80% in-app / 20% C-pass (V045); open the Authorization Recommended tab weekly (V002); GMV Max auto-pulls basketed content only on auto (V043 note); keep 50-70 videos in queue or 5-10 new per day for LIVE GMV Max (V002).
- **When to use:** monthly content plan; any "we need more content" request.
- **How to score:** cost per *selling* clip, not per clip: ~95 pieces/month produced vs fresh clips selling ฿0.9k on 10.10 (V016), and Linee GMV Max starved by 4-7-month-old hero clips (V016).
- **Evidence grade:** PRIMARY (vault measured and decided).
- **Sources:** V002, V003, V016, V032, V037, V038, V043, V045.

### 12. Live host deal economics (GMV per live hour)
- **What it is:** pricing host and agency deals the seat negotiates (cross-flag to Live).
- **Formulas:** **GMV per live hour = live GMV ÷ live hours**. Contribution per hour = GMV/h × m − (host cost/h + commission + live ads/h + promo/h).
- **Agency crossover (actual benchmark from Sorin, V043):** pure commission ~12% + 4% ads = 16% of GMV vs fixed ~฿50k for ~300 hours (฿167/h) + 1-2% commission. Fixed is cheaper when 167 + 0.015G < 0.16G → **G > ~฿1,150 GMV/hour** (range ฿1,110-1,190 for 1-2%).
- **In-house reference:** MC base ~฿18-25k/month + commission (S084, PRACTITIONER 2026); ~฿150/h base-only illustration (research arithmetic).
- **Moonshot data:** no own GMV-per-live-hour baseline yet (V011): GAP. Best single session: Linee 11:01 ฿77k at ฿45.6 per viewer, peak concurrency 17 (V014).
- **When to use:** November agency livestream proposal (V028); MC basket-split proposal (50/50, V043).
- **How to score:** contribution per hour by host and slot, not GMV/h.
- **Sources:** V011, V014, V028, V043, S084.

### 13. Creator calendar back from D-day
- **What it is:** the dates that are already lost if nobody counts back.
- **Parts (D = 11.11 shown, computed):** Open rate change D-30 (12 Oct, missed); content ship D-21 (**21 Oct**); warm-up live D-14 (**28 Oct**); Target rate set by D-5 (**6 Nov**); Shopee TH registration ~6 Nov, TikTok TH ~7 Nov (V004 §C1, [ONE], 2025 dates, re-verify); last GMV Max ROI edit D-3 (**8 Nov**) (V003). 10.10 template: 20 KOL posts + ≥15 Spark/Gen codes released gradually so ads can test; 2 KOLs per brand co-post; simultaneous drop (30 Spiffy KOLs on 8 Oct) (V033).
- **When to use:** every double-day and payday plan.
- **How to score:** count of steps already late; a plan with a late commission or content step must say what replaces it (Target boost, bought clips).
- **Evidence grade:** vault rules PRACTITIONER/DOCUMENTED; dates computed; re-verify in Seller Centre.
- **Sources:** V003, V004, V033.

## D. Stay legal

### 14. Brief and contract compliance gate
- **What it is:** pass/fail checks on every brief and contract (V047).
- **Parts:**
  - Claims: Thai FDA 2567 cosmetic ad criteria (summary): no therapeutic claims (รักษาสิว ฝ้า กระ, ลดการอักเสบ), no permanent whitening, no doctor/expert/agency/celebrity certifying ("ยืนยันโดยแพทย์และผู้เชี่ยวชาญ" banned), no unverified before/after; reviewers posing as real users who exaggerate share liability; personal experience without guarantee is allowed (S051, SECONDARY, 2025-11). Banned words incl. "ฆ่าเชื้อแบคทีเรีย", "ป้องกันการเกิดสิว" (S052, S053). Spiffy never-words list (V023). TikTok bans superlatives and diagnose/prevent/treat/cure (V002).
  - **CONFLICT:** Monchhichi GTM plan (2026-05-28) has "one dentist anchor" (V019); doctrine bans doctor or dentist endorsement (V047) and the FDA summary bans expert certification (S051). Doctrine and law win: a dentist may share personal use, never certify.
  - Licence (Monchhichi): approvals, "Silence = deemed refusal", artwork to Sekiguchi, TH only (V018).
  - Disclosure: #โฆษณา in every contract (V047). No enacted OCPB rule mandating it was found; OCPB is moving to make influencers liable like product owners (S059) and signed an ethical influencer MOU on 10 Sep 2026 (S060). Keep it as a cheap hedge.
  - Tax: **CONFLICT** doctrine says WHT 3% / 5% (V047); Revenue Department says 3% for services (ข้อ 8) and 2% for pure advertising (ข้อ 10) of ท.ป.4/2528 (S064-S066, PRIMARY). Law wins; 5% is unconfirmed (S071). Platform-paid commission needs no brand withholding; off-platform cash bonuses do (research inference).
  - Physical demo on camera; no 100% AI clips (V047); no reposting old clips on TikTok (V033); consent before reposting fan content (V028).
  - Creator health: TikTok TH Creator Health Rating replaced violation points from Jan 2026 (S081, PRIMARY; re-verify in Seller Centre).
- **When to use:** before any brief ships and any contract is signed.
- **How to score:** any fail blocks; no partial credit.
- **Sources:** V002, V018, V019, V023, V028, V033, V047, S051-S055, S059, S060, S064-S066, S071, S081.

## E. Prove it

### 15. Creator incrementality readout
- **What it is:** the read that answers "which creators actually move GMV".
- **Parts:** confirmed-basis GMV (placed flatters ROAS ~8-10%, V015); SBU export as single source (V013); orders and GMV per creator and per clip; new vs returning buyers (Linee new buyers 1,817 → 994 → 787 across 7.7 / 9.9 / 10.10, V016); commission paid; NMC = net revenue − ad spend, with KOL fees counted as marketing (V029, V009); budget hygiene: spend excluded from budget means its sales are excluded from target (V045); UTM or code before any event money (V009, V028).
- **When to use:** D+14 and D+30 after any creator wave; monthly commission review.
- **How to score:** contribution per baht of creator cost; share of new buyers; holdout or before/after on a comparable SKU (V002 "hold out a comparable SKU").
- **Evidence grade:** PRIMARY rules; data GAP until Creator Hub exports exist.
- **Sources:** V002, V009, V013, V015, V016, V028, V029, V045.
