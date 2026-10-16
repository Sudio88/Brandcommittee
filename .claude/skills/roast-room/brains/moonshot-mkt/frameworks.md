# Frameworks: Head of Marketing & Growth (mkt)

16 frameworks, grouped by job: economics (1-5), measurement (6-8), allocation and timing (9-11), brand and creative (12-14), channel formats (15-16). Every worked example labels its inputs **actual** (vault-measured, with V id) or **assumption**. Margins use the measured take (Shopee 33%, TikTok 26.3%) and BP COGS shares from V001 unless stated; rerun at the planning take 35% / 28% (V031) as the sensitivity. COGS shares are "probably slightly light" (no landed BOM, V001), so BEROAS here is a floor, not a target.

---

## Economics

### 1. BEROAS ladder (break-even ROAS per brand × platform × discount)
- **What it is:** The ROAS at which a baht of media returns exactly a baht of contribution. Below it, every sale bought loses money.
- **Parts:** m(d) = (1 − take) − COGS/(1 − d) − royalty, all as shares of the selling price at discount d. BEROAS = 1 / m(d). External form: BEROAS = 1 / contribution margin before marketing (S001, S002).
- **Worked (actual inputs V001; royalty 7% from V019; arithmetic is this seat's):**

  | Brand · platform | m at list | BEROAS at list | BEROAS @30% (V001) |
  |---|---|---|---|
  | Linee · Shopee | 57% | 1.75× | 1.90× |
  | Linee · TikTok | 63.7% | 1.57× | 1.68× |
  | MSL · Shopee | 59% | 1.69× | 1.80× |
  | MSL · TikTok | 65.7% | 1.52× | 1.61× |
  | Monchhichi · Shopee, incl. 7% royalty | 48% | 2.08× | 2.33× (V001 shows 2.01× before royalty) |
  | Monchhichi · TikTok, incl. royalty | 54.7% | 1.83× | n/a |
  | Spiffy · Shopee | 49% | 2.04× | 2.43× |
  | Spiffy · TikTok | 55.7% | 1.80× | 2.09× |
  | Linee · D2C (3.7% gateway) | 86.3% | 1.16× before fulfilment (fulfilment = GAP) | n/a |

  Sensitivity: Linee Shopee at planning take 35% → m 55% → 1.82×; COGS +5pp → 1.92×.
- **When to use:** Before setting any ROAS target, cap or kill rule; before routing a deep discount.
- **How to score an option:** Option passes if its expected marginal ROAS (framework 2) clears BEROAS with a margin of safety; the healthy band (Shopee 2.5-3.1×, TikTok 2.8-3.5×, V001) is where ads are comfortable.
- **Conflict:** External BEROAS bands (Shopee 2.0-2.5×, TikTok 2.2-2.8×, SECONDARY, V004 §D4) and the pillar's illustrative ~2.4× at 25% COGS are higher than Moonshot's because Moonshot's COGS is 8-18%. **Measured wins** for Moonshot SKUs; use the external bands only for an unknown-cost SKU.
- **Evidence grade:** PRIMARY (Moonshot measured take); COGS BP-based, unverified vs BOM.
- **Sources:** V001, V019, V031, V004 §D4; S001, S002, S003, S089.

### 2. Marginal ROAS test (add or cut)
- **What it is:** Judge the last baht, not the average. Average ROAS above 4 can hide a marginal ROAS below BEROAS, and the reverse.
- **Parts:** Marginal ROAS = ΔGMV ÷ Δspend over matched windows. Profit change = ΔGMV × m − Δspend. Keep cutting only while marginal ROAS < BEROAS; keep adding while marginal ROAS > BEROAS.
- **Worked 1, Moonshot Patch ad cut (actual, V014):** GMV −฿150k, ads −฿64.7k → marginal ROAS 2.32. At 58% variable margin: −150k × 0.58 + 64.7k = **−฿22.3k profit**. The team rule "add Patch ads back while ROAS stays above 4" uses average ROAS; correct rule is marginal ROAS above ~1.9.
- **Worked 2, Moonshot live ads (actual GMV and spend, V014; attribution of the whole drop to ads is an assumption):** live ads ฿12.2k → ฿0.8k (−฿11.4k), LIVE ฿103k → ฿61k (−฿42k) → marginal 3.68. At MSL Shopee m 59%: −42k × 0.59 + 11.4k = **−฿13.4k**.
- **Counter-evidence:** Shopee review modelled marginal ROAS 1.12 (elasticity 0.242, n=12) and said "cut another 30%"; V014 calls it "a decision rule, not a fact". Stock position decides between them. Lowering ROAS caps to chase volume cut ROAS without lifting sales (V032).
- **When to use:** Every budget change of more than ~10% or any "cut to protect ROAS" proposal. Suppress ROAS readouts under ~฿1k spend (V014).
- **How to score:** Profit change in baht; positive wins. Report on confirmed basis (placed basis flatters ~8-10%, V016).
- **Evidence grade:** PRIMARY (Moonshot measured) with small-n caveat.
- **Sources:** V014, V015, V016, V032; S001.

### 3. Net Marketing Contribution by SBU, with the D2C comparator
- **What it is:** The seat's main KPI and Peter's comparison rule in one table.
- **Parts:** Dashboard NMC = net revenue − ad spend (V030), where net revenue = gross − trade spend (V001). Decision version (contribution after marketing, CM3-style, S081) = net revenue × m − ads. Report MoM revenue, ad spend, NMC per SBU (V031). D2C comparator: same baht at D2C BEROAS ~1.16-1.29× before fulfilment.
- **Worked, Sept (actual spend and sales V044; list-price, all-Shopee margin is an assumption, so these are upper bounds):**
  - Linee ฿800k → ฿3M (ROAS 3.75): 3,000k × 0.57 − 800k = **+฿910k**.
  - Monchhichi ฿200k → ฿430k (ROAS 2.15): 430k × 0.48 − 200k = **+฿6.4k**, effectively break-even. The same ฿200k only needs ROAS ≥1.29× on D2C (Monchhichi D2C: m = 1 − 0.037 − 0.12 − 0.07 = 77.3%), but Monchhichi D2C conversion is a GAP.
- **When to use:** Monthly budget meeting (targets first, then action plan, V047) and every SBU budget lock with Care and Peter (V031).
- **How to score:** Rank SBUs by decision-NMC and its trend; a channel whose spend is excluded from budget has its sales excluded from target (V047).
- **Conflict:** Dashboard NMC ignores fees and COGS, so it overstates; it wins for **reporting** (it is the agreed KPI, V039), decision-NMC wins for **allocation**. Say which one is quoted.
- **Evidence grade:** PRIMARY (vault definitions); CM layer definitions PRACTITIONER (S081, S082).
- **Sources:** V001, V030, V031, V039, V044, V047, V021; S081, S082, S083, S095.

### 4. Break-even uplift for a discount (shared with promo seat)
- **What it is:** How many more units a price cut must sell to leave contribution unchanged, before any media.
- **Parts:** CPO = P_net − take × P_net − COGS − per-order costs. Volume multiple = CPO_base ÷ CPO_promo. Required uplift % = multiple − 1. Then add media: contribution after ads = CPO_promo − P_net / ROAS.
- **Worked, Linee Shopee per ฿100 of list (actual take and COGS V001; 10% depth actual for 10.10 Linee, V030):**
  - Base: 100 − 33 − 10 = ฿57.
  - 10% off: 90 − 29.7 − 10 = ฿50.3 → **1.13×** (needs +13% units).
  - 30% off: 70 − 23.1 − 10 = ฿36.9 → **1.54×** (needs +54%).
  - With ads at the 4.7 target on the 10%-off order: 50.3 − 90/4.7 = ฿31.2 per ฿100 list.
- **External check:** average promo elasticity −3.63 (Bijmolt, S078) predicts +36% units for a 10% cut, before pull-forward; most CPG promotions do not break even (Nielsen 2014, S077); part of the bump is stockpiling or switching (S079). Moonshot evidence: offer depth set the strip ceiling (B7G7 ฿450k on 7.7 vs 7G1 ฿179k on 10.10, V017).
- **When to use:** Whenever media is asked to "push" a promo.
- **How to score:** Required uplift vs best measured uplift (9.9 D-day ~4× baseline, V037).
- **Evidence grade:** formula PRACTITIONER/academic; inputs PRIMARY.
- **Sources:** V001, V017, V030, V037; S077, S078, S079.

### 5. Orders to break even on a fixed fee (packages, KOL, events, agencies)
- **What it is:** Fixed cost ÷ incremental contribution per order = incremental orders needed in the window.
- **Parts:** Orders_BE = fee ÷ CPO_incremental; GMV_BE = fee ÷ m. Only incremental orders count (net of baseline).
- **Worked:**
  - **12.12 Shopee Platinum ~฿300k (actual fee, V037/V008).** Strip 7 AOV "~200 นิด ๆ" (actual, V037) → CPO ≈ 200 × 0.57 = ฿114 (assumption: COGS 10% of paid price) → **~2,630 incremental orders ≈ ฿526k incremental GMV**, about 4.4 days of the ~฿120k/day Linee baseline, while 5 flash slots add ~฿50k (V037). Declined: possible ฿100-200k loss.
  - **Big KOL ฿250k (actual fee, V043).** Vault says break-even at ฿370k sales, which implies 67.6% contribution. On measured Linee Shopee m 57%: **฿439k**; TikTok 63.7%: ฿392k; on the KOL cost model's 40% residual (V043): ฿625k. **Conflict:** measured take wins; use ฿439k on Shopee.
  - **Agency live ~฿50k for ~300 hours + 1-2% commission (actual quote, V046).** At m 57% − 2% = 55%: GMV_BE = **฿90.9k incremental (฿303/hour)**. Versus pure commission 12% + 4% ads = 16%: fixed fee wins once incremental GMV > 50k ÷ (0.16 − 0.02) = **฿357k** over the period.
  - **MCIX Linee Gen-Z proposal, indicative ฿1M (actual, V021).** GMV_BE on Linee Shopee = **฿1.75M incremental in-window**; anything less must be argued as brand (framework 11) with a stated loss cap.
- **When to use:** Any fixed-fee commitment: campaign package, celebrity, agency, event, listing fee.
- **How to score:** Incremental orders needed vs the best the team has ever measured; pass only with a loss cap, read date and owner.
- **Evidence grade:** PRIMARY inputs; arithmetic this seat's.
- **Sources:** V008, V021, V037, V043, V046.

## Measurement

### 6. Incrementality ladder
- **What it is:** Four layers of evidence, from weakest to strongest, for "would it have sold anyway?".
- **Parts:**
  1. Platform ROAS: upper bound. Shopee is last-click (Spiffy blended 3.2 vs direct ~1, V036); Monchhichi CPAS claimed ~70% of GMV at ROAS ~18.6 (V014); Loom in-app ROAS looked high only from other Linee products (V040); placed basis +8-10% (V016).
  2. Natural on/off reads: Lazada in-app stop → no sales, so in-app is incremental there (V030); Meta awareness stop → ROAS 3.4 → 3.0, spend and sales down (V036); Moonshot ad cut (V014).
  3. Designed tests: 14-28 day baseline + matched SKU holdout (V005); budget-step; TikTok Conversion Lift Study (test vs control groups, PRIMARY, S010); Meta incremental attribution (SECONDARY, uplift claims unverified, S012, S013). Promo holdout 10-20% (S080).
  4. MMM-lite: Meridian (open source, 29 Jan 2025, Bayesian, lift results as priors, S016) or Robyn, once there is long weekly history per SBU (pillar inference: ~2 years; PRACTITIONER).
- **When to use:** Before scaling any line more than 2× or defending one that only looks good on platform ROAS.
- **How to score:** The highest layer reached decides how much budget the line can hold; layer 1 alone caps it at test size.
- **Evidence grade:** Moonshot reads PRIMARY; tools PRIMARY docs; vendor uplift claims PRACTITIONER.
- **GAP:** no designed holdout has ever been run at Moonshot. Close with one budget-step test per SBU per month.
- **Sources:** V005, V014, V016, V030, V036, V040; S010-S018, S080.

### 7. GMV Max: settings and honest reading
- **What it is:** TikTok Shop's only Sales-objective ads format for new campaigns since July 2025 (S049, PRIMARY; re-verify in TikTok Ads help).
- **Parts (V005):** ROI target = historical non-LIVE GMV ÷ ad cost. Budget = 2 × non-LIVE GMV ÷ ROI target. Keep utilisation under 80%. Actual ROI 80-120% of target is healthy; above 120% means budget-constrained. ~7 days learning, no edits; last ROI edit at D-3; a manual ROI change voids ROI Protection for the day. Promotion Days lower ROI goal 10/20/30% with +50% budget, enable 3-5 days ahead (V002). GMV Max rebate −1.07pp take when ad spend >3% of trailing-30-day gross (PRIMARY, V004 §D1; re-verify in Seller Centre). Auto-select creative, include affiliate videos, open Authorization Recommended weekly.
- **Worked:** Linee GMV Max ROI 2.93 → 3.93 while impressions 297k → 56k on 4-7-month-old hero clips (actual, V017): **"starved, not broken"**; the fix is creative and budget, not ROI. Budget illustration: non-LIVE GMV ฿20k/day (assumption) at ROI target 3.9 → 2 × 20k ÷ 3.9 = **฿10.3k/day** budget, spend kept under 80%.
- **Red lines:** no shop-level GMV Max on the Linee shop (sells GWP, V035); needs a single sales campaign, targeted creative needs separate auction ads (V030).
- **When to use:** Every TikTok budget decision; TikTok recovery after the main-account loss.
- **How to score:** Never quote GMV Max ROI as ROAS; track new-buyer rate and CPA separately (V005). 9.9 case: ROAS 4.01× while contribution per new buyer fell ฿194 → ฿137 (V002).
- **Evidence grade:** PRIMARY (platform rules via vault); consultant starting budgets disagree ~3× (V004 §C5).
- **Sources:** V002, V004, V005, V017, V030, V035; S049-S052, S088, S090.

### 8. Funnel split and new-buyer economics (aMER)
- **What it is:** Find the one node that explains the gap: traffic × conversion × AOV, split new vs returning.
- **Parts:** GMV = product visitors × conversion × AOV. aMER = new-customer revenue ÷ spend (S007, S008). Cost per new buyer = spend ÷ new buyers. Use product visitors for cross-month trends (Shopee changed the shop-visitor metric on 1 Oct, V014).
- **Worked (actual):**
  - Linee new buyers 1,817 → 994 → 787 (7.7 / 9.9 / 10.10), returning flat ~170-180: **acquisition, not loyalty** (V017).
  - Linee strips: visitors −28%, conversion held ~11.5%: **reach**, put budget back into strip reach (V014).
  - Linee KIT: visitors +60%, buyers 150 → 58 (5.4% → 1.3%): **listing or offer** (V014).
  - 9.9: reach +80%, buyers +24%, click-to-buy 13.2% → 8.9%: **page** (V003).
- **When to use:** Every weekly review before any media change; "no idea" is not an answer (V044).
- **How to score:** Higher conversion on shrinking traffic is a warning, not a win (V016). The action goes to the node's owner: reach → mkt; page/offer → MKP/promo.
- **Evidence grade:** PRIMARY (Moonshot measured); aMER definition PRACTITIONER.
- **Sources:** V003, V014, V016, V017, V044; S007, S008, S009.

## Allocation and timing

### 9. Pre-event demand banking
- **What it is:** Double-days harvest intent banked before D-day: "Double-digit success is all pre-event" (V034).
- **Parts:** ATC / consideration from ~D-14 (content needs ~2 weeks to mature, V002); GMV Max live by ~D-10 for 7-day learning; ATC campaigns as a deliberate holding pattern, convert on payday (V047, V045); never go dark on the ramp (SG 9.9 collapse, V045); shift to in-app on D-day (V039). External spend curve 30% D-7→D-3 / 50% D-day / 20% D+1→D+3 [ONE] (V004 §C5).
- **Worked (actual, V015):** Linee banked 8,605 cart units 4-9 Oct; cart-to-buyer rose from 23-33% to 49.2% on D-day with ATC rate flat. Moonshot CPAS cart value ฿330.6k with 5.8% converted and no retargeting: lifting conversion to 10% (assumption) adds ~฿13.9k GMV ≈ ฿8.2k contribution at MSL m 59%, so retargeting is worth up to ~฿8k for that pool.
- **When to use:** Every double-day (11.11 next; Shopee TH ran 6-15 Nov 2025, re-verify 2026 dates) and payday.
- **How to score:** Cart bank vs target by D-1 (someone must own it); D-day conversion of banked carts.
- **Evidence grade:** PRIMARY (Moonshot); spend curve PRACTITIONER.
- **Sources:** V002, V004, V015, V034, V039, V045, V047.

### 10. SBU portfolio allocation
- **What it is:** Allocate the capped budget (Oct ฿1.5M, V031) to the SBU with the highest marginal contribution per baht, within each SBU's locked target and risk capacity.
- **Parts:** Marginal contribution per baht = marginal ROAS × m − 1. Risk capacity: Linee EBIT plan 18.9% can afford a miss, MSL 7.0% cannot (V001). Stock gates (MSL stuck import, V044). Priority order Monchhichi + Linee → MSL → Spiffy (V021). Budget hygiene (V047). Move like a portfolio (V038).
- **Worked:**

  | SBU line | Marginal ROAS | m | Per baht | Basis |
  |---|---|---|---|---|
  | MSL Patch (Shopee) | 2.32 | 0.58 | **+0.35** | actual (V014) |
  | Spiffy added spend | 3.83 | ~0.58 (after ~42% fees + COGS) | **+1.22** on the last baht, yet the brand is only ~break-even overall (฿39k left vs ฿34k ads): "keep at this level, don't scale until the margin line is in" | actual (V014) |
  | Monchhichi (Sept average as proxy) | 2.15 | 0.48 | **+0.03** | actual avg (V044); marginal unknown |
  | Spiffy TikTok | 0.46 | 0.557 | **−0.74**: cut | actual (V014) |
  | Linee Shopee | GAP | 0.57 | needs a budget-step test | V001 |
- **When to use:** Monthly budget meeting and any mid-month re-cut.
- **How to score:** Fund the highest per-baht line first up to its test-proven ceiling; never fund a negative line to defend a target.
- **Evidence grade:** PRIMARY.
- **Sources:** V001, V014, V021, V031, V038, V044, V047; V006 stage gates.

### 11. Brand vs activation ring-fence
- **What it is:** Protect a small reach/consideration line from 7-day ROAS judgement.
- **Parts:** External: Binet & Field ~60/40 brand/activation (S025, S026), varied by category, "not an absolute" (S027); online 62/38 claims unverified (S029, S030); critics say 60/40 is misused as a channel split (S028). Vault: keep 5-10% on a consideration objective because GMV Max keeps returning to existing converters (V003); new launches 20% awareness / 80% C-pass (V047); "reach alone does not convert to shop visits" (V047); stopping Meta awareness did not raise ROAS (V036).
- **Which wins:** for in-quarter allocation, **the vault** (measured Moonshot behaviour); 60/40 is long-horizon IPA evidence with no social-commerce Asian validation (GAP).
- **When to use:** Any proposal to zero awareness, or to fund a pure brand idea.
- **How to score:** Each SBU budget shows a ring-fenced line (5-10%; 20% at launch) judged on new-buyer share, brand search and follower growth over 4-8 weeks.
- **Evidence grade:** SECONDARY (external), PRIMARY (vault).
- **Sources:** V003, V036, V047; S025-S031.

## Brand and creative

### 12. Mental and physical availability (CEPs + distinctive assets)
- **What it is:** Brands grow by being thought of in more buying situations (category entry points) and easy to find and buy (S019, S020, S021, S022). Double Jeopardy: small brands have fewer and slightly less loyal buyers (S024).
- **Parts and Moonshot application:**
  - Linee CEPs: whitening without sensitivity, "ฟันขาว ไม่เสียวฟัน" (V041); fluoride-free. Online oral care is a ~฿600m pond (SECONDARY, V004 §D7), so reach matters more than loyalty schemes.
  - Spiffy assets: cat breeds, "Collect your cat", kind tone (V024, V052). Test for fame and uniqueness before spending behind them (S023).
  - Loom assets: flat navy PANTONE 2965C, serif wordmark, negative space, "Let your confidence loom." (V026, V025).
  - Monchhichi: nostalgia for women 28-42; Thai carries the payoff line (V019, V051).
  - Physical: Shopee 83% of sales (V009); Tops, Phu Mek (V021).
- **When to use:** Briefs, creative reviews, any brand-line spend.
- **How to score:** Does the work use the brand's asset and one named CEP? Does a stranger link the asset to the brand?
- **Evidence grade:** SECONDARY (summaries of Ehrenberg-Bass); no Thai data (GAP).
- **Sources:** V004, V009, V019, V021, V024, V025, V026, V041, V051, V052; S019-S024.

### 13. Creative system: proven first, then diverse volume
- **What it is:** Creative is the main lever inside automated buying, and Moonshot's content and commerce engines are disconnected (fresh TikTok clips sold ฿0.9k on 10.10 vs ฿14.0k on 7.7 on ~95 pieces/month, V017).
- **Parts:**
  1. Proven creatives first; no new Moonshot creative in October; static for retargeting, video for acquisition (V030).
  2. Boost the top ~10 clips, ~80% in-app / 20% C-pass (V047).
  3. Diversity across concept × persona × format; text-overlay variants count as duplicates under Meta Andromeda (PRACTITIONER, S053, S054, S055).
  4. Volume on satellites: ≥5 clips/day/channel, AI stills and 5-second motion allowed; AI test 50 accounts × 3 videos on sub accounts (V046, V034, V029). Physical product demo kept (V049).
  5. Producers ฿200/clip + ฿5,000 per 100 clips; 100 → 200 → 300 clips/month (V033). Lead time ~3 weeks (V047).
- **Worked (actual):** Spiffy video hold ~3 s, retention 1-2%, cartoon graphics may hide the product (V036); ~300 Spiffy videos, 3-4 above 100 likes, no affiliate sales on ~฿700 ads (V030).
- **When to use:** Monthly content plan and any "more content" request.
- **How to score:** Attributed orders (Spark code / GMV Max) per clip cost; share of spend on clips younger than 30 days.
- **Evidence grade:** PRIMARY (Moonshot); Andromeda PRACTITIONER; hook-rate benchmarks GAP.
- **Sources:** V017, V029, V030, V033, V034, V036, V046, V047, V049; S053-S057, S090.

### 14. Event and offline attribution plan
- **What it is:** No event or retail money without a pre-registered measurement plan (V013, V049).
- **Parts:** (a) UTM with brand-relevant names, owned by marketing (V029); (b) unique code or QR to LINE OA / D2C; (c) marketplace brand-search and store-visit lift in the event window vs control; (d) matched-store sell-out for retail; (e) cost per sample vs CAC (pillar inference, PRACTITIONER).
- **Worked:** Oct 1-6 events: IG ~7% engagement, ~฿12k sales, ~100k organic live views, ~200 link clicks, **none attributable** (actual, V029). Wave / Tops of Beauty: ~9.9M potential X reach → ~168 tracked TikTok clicks (actual, V017). Tops entry ฿150k account + ฿150k per SKU, 35% GP, back margin 17% in-store (actual terms, V019/V020 digest): for one SKU (฿300k) at m ≈ 1 − 0.35 − 0.17 − 0.10 = 38% (assumption that GP and back margin stack), break-even sell-out ≈ **฿789k** of shelf sales.
- **When to use:** Roadshows, fan meets, Tops, Phu Mek, CN tourist activations.
- **How to score:** Plan exists before commitment (yes/no gate); after, cost per attributed buyer vs online CAC.
- **Evidence grade:** PRIMARY (Moonshot); method PRACTITIONER. Offline lift benchmarks GAP.
- **Sources:** V013, V017, V019, V020, V029, V049, V050, V004 §E5; S058-S062.

## Channel formats

### 15. GMV and contribution per live hour
- **What it is:** Rank slots, hosts and live-ad support on contribution per hour, not GMV.
- **Parts:** GMV/h = live GMV ÷ live hours. Contribution/h = GMV/h × m − (host cost/h + live ads/h + promo cost/h).
- **Worked:** No own GMV/live-hour baseline (GAP, V012). Data points (actual): Linee 11:01 session ฿77k at ฿45.6 per viewer, 3× other sessions, peak concurrency 17 (V015); Moonshot live ads ROAS 8.45 in Sept, 11.26 on 8.8, ฿600 and zero attribution on 10.10 (V014, V015). Host cost: in-house MC ฿18-25k/month (PRACTITIONER, S092) ≈ ฿150/h on ~130 h (pillar inference); agency ~฿167/h + 1-2% (V046).
- **When to use:** Adding live hours, live ads, agency proposal for November (V029).
- **How to score:** Contribution/h above the in-house host cost and above the marginal ROAS of the same baht in in-app.
- **Evidence grade:** PRIMARY data points; baseline GAP.
- **Sources:** V012, V014, V015, V029, V046; S092, S093.

### 16. Prime / Mall keep-or-exit maths
- **What it is:** Programme fees are media by another name; judge them on contribution.
- **Parts:** Fee saved vs contribution lost (lost sales × m) vs return on redeploying the fee.
- **Worked (actual inputs V048; m is this seat's):** Prime ≈ 11% of Linee net sales (฿400k in July). Vault example: save ~฿1M, lose ~฿2M sales. At m 57%: −2,000k × 0.57 + 1,000k = **−฿140k** before redeploying; it pays only if the redeployed ฿1M runs at ~30% cost of sale (V048). An early-2026 exit saw "เซลล์ฮวบ" and Moonshot re-joined around February.
- **Mall:** Shopee Mall commission ~3pp above non-Mall (19.26% vs 16.05%, S085, SECONDARY, 2026-07: re-verify in Seller Centre); Mall settlement hold 15 days vs 3 (V004 §D2). Mall/brand trust may matter more for licensed Monchhichi (pillar inference).
- **When to use:** Q1/April Prime decision; any Mall application.
- **How to score:** Net contribution after redeploy > 0 with a measured (not modelled) sales loss from the Non-mall test.
- **Evidence grade:** PRIMARY (V048); fee table SECONDARY.
- **Sources:** V004, V010, V048; S085, S086, S087.
