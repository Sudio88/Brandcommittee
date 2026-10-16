# Frameworks: Head of Live Commerce (live)

15 frameworks, grouped by job: price the live hour, pick the host, slot the hours, run the show, buy the traffic, diagnose, stay legal. Grades: **PRIMARY** = Moonshot measured or decided, or an official platform/regulator page; **SECONDARY** = press or research summary; **PRACTITIONER** = blog, agency, job ad, or a vault practitioner rule; **GAP** = no credible number. Worked examples use vault numbers; every input is labelled **actual** (vault measured or decided) or **assumption**. Computed results are this seat's arithmetic, not vault statements.

Notation: G = GMV per live hour (confirmed basis); P = list price; d = live discount depth off list; t = platform take (Shopee 33%, TikTok 26.3% measured, V010); c = COGS share of P; m(d) = margin before ads at depth d = (1 − t) − c ÷ (1 − d); CPO = contribution per order before ads; LH = live hour.

---

## A. Price the live hour

### 1. GMV per live hour and the live funnel
- **What it is:** the seat's base unit. Every live target is entered as hours × GMV/hour (V005, decided 2026-10-01).
- **Formula:** **G = live GMV (confirmed) ÷ live hours on air.** Decompose: **G = viewers/h × product-click rate × click-to-order rate × AOV.** Also track GMV per viewer, peak concurrency, average watch time, AOV live vs non-live (V040).
- **Parts:** confirmed GMV (placed flatters ROAS 8-10%, V019); hours from the session log, not the roster; per brand × platform × MC × slot.
- **When to use:** every live readout, slot decision, MC review, and before adding hours.
- **How to score an option:** higher G at equal cost wins; but rank on contribution per hour (#3), never G alone.
- **Worked example:**
  - Linee 11:01 session: ฿77k at ฿45.6 per viewer, peak concurrency 17, 3× the other sessions (actual, V017). Viewers ≈ 77,000 ÷ 45.6 ≈ **1,689** (computed).
  - Linee LIVE week 7-14 Oct ฿221k (actual, V016). If one MC channel ran 7h × 7 days = 49 LH (assumption; real hours are a GAP), **G ≈ ฿4,510/h**; at 6 days (42 LH) G ≈ ฿5,262/h.
- **Evidence grade:** formula PRACTITIONER (V040, live_commerce research); inputs PRIMARY. **GAP:** no own G baseline exists (V015).
- **Sources:** V005, V015, V016, V017, V019, V040, V041.

### 2. Contribution per live order and break-even uplift
- **What it is:** what one live order is worth after the live price, take and COGS.
- **Formulas:** **CPO = P(1 − d)(1 − t) − cP − royalty − GWP.** Royalty for Monchhichi = 7% of actual selling price (V020). **Break-even uplift = CPO_full ÷ CPO_live** (orders multiple the live price must deliver).
- **When to use:** before any live-only price, flash drop or Exclusive Streaming Price.
- **How to score:** pass if the live session's measured order lift beats break-even uplift; fail if the depth passes the ceiling (V010).
- **Worked example (Linee Strip 7, Shopee):**
  - P ฿299 (actual, V001); t 33% (actual, V010); c 10% → ฿29.90 (actual, V010).
  - Full price: 299 × 0.67 − 29.90 = **฿170.4**.
  - Live flash 10% off (฿269.1): 180.3 − 29.9 = **฿150.4**; break-even uplift 1.13×.
  - Live flash 20% off (฿239.2): 160.3 − 29.9 = **฿130.4**; break-even uplift **1.31×**.
  - Same 20% on TikTok (t 26.3%): 176.3 − 29.9 = ฿146.4.
- **Evidence grade:** inputs PRIMARY (V010); formula PRACTITIONER.
- **Sources:** V001, V010, V020, S054.

### 3. Contribution per live hour (CLH) and break-even GMV per hour
- **What it is:** the ranking metric for MCs, slots and hosts. Peter's lens: contribution, not ROAS (V001); NMC = net revenue − ad spend (V026).
- **Formulas:**
  - **CLH = G × m(d) − (MC cost/h + MC commission + live ads/h + promo cost not in m + studio and ops/h).**
  - **Break-even G = fixed cost/h ÷ (m(d) − variable cost share).**
- **When to use:** ranking slots, deciding to add or cut hours, comparing in-house vs agency.
- **How to score:** keep a slot only if CLH > 0 after live ads; scale the slot with the highest CLH, not the highest G.
- **Worked example (Linee Shopee, 20% live price):**
  - m(20%) = 0.67 − 0.10 ÷ 0.80 = **54.5%** (computed from actual V010 inputs).
  - G ฿4,510/h (assumption from #1). Gross contribution 4,510 × 0.545 = **฿2,458/h**.
  - In-house MC base ≈ ฿110/h (assumption: market ad ~฿20k/month, S031, over 7h × 26 days = 182 LH). Before live ads and studio: **฿2,348/h** headroom.
  - Agency at the role-definition reference ฿2,500/h (V040): CLH = 2,458 − 2,500 = **−฿42/h** before ads. Break-even G = 2,500 ÷ 0.545 = **฿4,587/h**.
- **Evidence grade:** formula PRACTITIONER (live_commerce research §4 inference); m PRIMARY; G and cost/h assumptions.
- **Sources:** V001, V010, V026, V040, S031, S054.

### 4. Break-even ROAS and marginal ROAS for live ads
- **What it is:** the test for adding or cutting LIVE ads (Shopee live ads, LIVE GMV Max).
- **Formulas:** **BEROAS = 1 ÷ m(d).** **Marginal ROAS = ΔGMV ÷ Δad spend.** Keep spend while marginal ROAS > BEROAS. Average ROAS ("keep ads while ROAS > 4") is the known wrong rule (V016).
- **When to use:** any live ad budget change; Peter's "derive BEROAS from COGS + trade spend + fees" (V001).
- **How to score:** marginal ROAS above BEROAS = keep or add; below = cut.
- **Worked example (Moonshot LIVE, week 7-14 Oct):**
  - Live ads ฿12.2k → ฿0.8k (−฿11.4k); LIVE ฿103k → ฿61k (−฿42k) (actual, V016).
  - Marginal ROAS 42 ÷ 11.4 = **3.68×** vs BEROAS MSL Shopee 1 ÷ 0.59 = **1.69×** (V010, full price assumed).
  - Lost contribution 42k × 0.59 = ฿24.8k vs ฿11.4k saved: **net −฿13.4k a week** (assumes the whole drop came from the cut).
  - Exception: Moonshot stock is constrained (~2 weeks cover, V003). Then the cut is a stock call, not an efficiency call. State which.
  - Reference: Moonshot live ads returned 11.26 ROAS on 8.8 and got ฿600 on 10.10 (V017).
- **Evidence grade:** PRIMARY inputs; computation this seat's.
- **Sources:** V001, V003, V010, V016, V017.

### 5. Orders to break even on a fixed fee
- **What it is:** the check for any fixed live cost: agency package, freelance host, studio, campaign package that bundles live.
- **Formula:** **Orders to break even = fixed fee ÷ (incremental CPO − per-order variable fees).** Per hour = orders ÷ contracted hours.
- **When to use:** the November agency proposal (V006), freelance hosts, celebrity or KOL live slots.
- **How to score:** compare orders/h needed against the best measured orders/h on that brand and slot; if the need beats history, decline or cap the loss.
- **Worked examples:**
  - Sorin-style fixed ~฿50k for ~300h + 1-2% (actual quote, V002). Linee Strip 7 at 20% live price, CPO ฿130.4, less 1.5% commission (฿3.6) = ฿126.8 → **395 orders, ~1.3 orders per live hour.**
  - Freelance host ~฿2,000 per session (V011): 2,000 ÷ 130.4 ≈ **16 orders per session**.
  - 12.12 Shopee package ~฿300k (actual, declined, V009): at Linee full-price CPO ฿170.4 → **1,760 incremental orders**.
  - Micro-KOL TikTok live slot ฿16,000-40,000 (vault §C4, ONE-source rate card): 123-307 orders at ฿130.4.
- **Evidence grade:** PRIMARY (V002, V009) and PRACTITIONER (V011, V014).
- **Sources:** V002, V006, V009, V011, V014, V023.

## B. Pick the host

### 6. Host model comparison: in-house MC vs affiliate host vs agency
- **What it is:** cost per live hour and per baht of GMV for each host model (V040).
- **Parts and inputs:**
  - In-house MC: base + commission. Market ads ฿12-30k/month, commonly ฿18-25k, 4-6h/day in 2-3h rounds (S031-S033, PRACTITIONER). Moonshot MC commission rate: GAP.
  - Agency pure commission: ~12% + 4% ads = **16% of GMV** (V002).
  - Agency fixed: ~฿50k per ~300h (≈ ฿167/h) + 1-2% (V002). Agencies prefer fixed.
  - Role-definition reference ~฿1,900-2,500/live hour (V040). **CONFLICT** with the Sorin quote (≈ ฿167/h): the Sorin figure is a dated meeting quote (2026-09-17) and wins until the November proposal (V006) brings a priced alternative.
  - Freelance ~฿2,000/session (V011); vendor tiers ฿500-8,000+/h (S035, biased upward).
  - Affiliate live host: commission only; Monchhichi 3% TikTok, 15% Shopee (V033).
- **Crossovers (computed):** pure commission 16% vs fixed ฿2,500/h → equal at **G = ฿15,625/h**. Sorin fixed ฿167/h + 1.5% vs 16% → equal at **G ≈ ฿1,152/h**; above that, fixed is cheaper.
- **When to use:** any hire, agency, or affiliate-host decision.
- **How to score:** lowest total cost per baht of contribution at the expected G; in-house wins on cost per hour; outside hosts only where incremental G covers the premium (live_commerce research §4).
- **Evidence grade:** PRIMARY (V002) for agency quote; PRACTITIONER for market rates; GAP for Thai MC commission norms.
- **Sources:** V002, V006, V011, V033, V040, S031, S032, S033, S034, S035.

## C. Slot the hours

### 7. Slot test grid (prove before scale)
- **What it is:** a grid of hour block × day type, each cell earning hours only on its own CLH.
- **Parts:** blocks 11:00-13:00, 13:00-15:00, 19:00-21:00, 21:00-23:00, 23:00-02:00, 02:00-11:00. Day types: weekday, weekend, mid-month 15th, payday 25th-5th, D-day, D+1.
- **Priors (to test, not to assume):**
  - Beauty peaks 19:00-22:00 weekdays, 11:00-13:00 weekends (V012, US-derived PRACTITIONER).
  - TikTok TH 9.9 viewer record at 20:00, not midnight; "the 19:00-21:00 block is where the day is won" (V013, DOC).
  - Monchhichi Shopee LIVE peaked 13:00-15:00 (V018); Linee 11:01 session did 3× per viewer (V017). Daytime is under-tested.
  - 10.10: 02:00-11:00 lost ฿86.9k with no owner; 13:00-21:00 gained ฿76.6k (V017).
  - Real Shopee spikes on the 15th and 25th (V009).
  - External: Thai beauty 21:00-23:00 posting peak (S028, posting not sales).
- **When to use:** monthly schedule, before adding hours, before D-days.
- **How to score:** a cell scales when it beats the current median CLH on at least 4 comparable sessions (this seat's rule, not a benchmark). Own data beats every prior above.
- **Evidence grade:** PRIMARY (V009, V017, V018) for Moonshot points; PRACTITIONER for priors; GAP for payday and double-day live uplift in Thailand.
- **Sources:** V009, V012, V013, V017, V018, V035, V040, S028, S029.

### 8. MC capacity and rotation plan
- **What it is:** how 6 MCs turn into live hours without breaking platform rules or the hosts.
- **Parts:**
  - Capacity: 6 MCs × 7 live hours = **42 LH/day**, ~1,092 LH per 26-day month (computed from V002 scope).
  - One channel per MC (V002); max 5 channels per person on TikTok (V002).
  - **No same-host simultaneous live on two channels** below Tier 6 (~฿10M/month): re-run, ban and −2,000 points vs a 200-point start (V002).
  - Session length priors conflict: 60-90 min (V012, US-derived) vs ≥2h (S029) vs 4-6h Douyin loops (S020). MC job ads: 2-3h rounds (S031). Moonshot curve: GAP.
  - Fatigue: host performance −20-30% after four straight streaming days (V012, PRACTITIONER).
  - Content production is outside MC scope (V002); the MC-run channel proposal (5 clips/day, 50/50) is not final.
- **When to use:** monthly roster; D-day extensions (Fern +1-2h on 10.10, V005).
- **How to score:** hours placed where CLH is highest; no MC on more than 4 straight live days in a rotation; every extension carries a readout.
- **Evidence grade:** PRIMARY (V002, V005); PRACTITIONER (V012, S020, S029, S031).
- **Sources:** V002, V005, V012, S020, S029, S031.

## D. Run the show

### 9. Run-of-show product matrix and close formulas
- **What it is:** the order products appear and how each pitch closes.
- **Parts:**
  - Traffic SKU (cheap, room-sticking: Spiffy single or mini, live-only bundle) → hero (Linee strips, Monchhichi Nom Yen) → profit SKU once concurrency peaks (S020, PRACTITIONER; live_commerce research inference).
  - 3-minute close, TikTok TH's own formula: 30s hook → 2-minute demo → 30s CTA [DOC] (V014 §C3).
  - 5-minute rotation for the long tail [WIDE] (V014 §C3); hook every 5-10 min (V040).
  - Engagement beats: flavour-guessing game (V005), bundle and GWP reveals, Monchhichi fandom moments (V040). Watch time and interactions are the only officially confirmed LIVE ranking inputs (S023).
  - Script flow: Tammy writes, MC delivers, recorded; AI drafts ("ขอ 5 สคริปจบ ... ใช้เวลา 10 นาที") so nobody waits on one person (V005).
- **When to use:** every session brief.
- **How to score:** product-click rate and orders per segment; traffic SKU must not sit below its contribution-zero depth (V010).
- **Evidence grade:** DOC/WIDE (vault research) and PRACTITIONER.
- **Sources:** V005, V010, V014, V040, S020, S021, S023.

### 10. D-day live playbook
- **What it is:** the double-day sequence. "ไลฟ์วันแคมเปญมันคือแค่การ convert" (V005): the day harvests intent built before it.
- **Parts:**
  - D-14: warm-up content live; D-7 to D-1: live banner, promo video, ads, Shopee live event pre-set so followers get "add to calendar" (V005, V012).
  - D-3: last LIVE GMV Max ROI edit (V012).
  - D-day: open LIVE 1 hour before official start, 2-3 sessions, LIVE flash price below the registered price (the only legal way deeper on D-day), answer 1-star reviews within 2 hours (V014 §B8, V012).
  - **Exclusive Streaming Price on** (it was ฿0 on 10.10, V017).
  - Load-test the CF comment-ordering bot (ระบบดูดคอมเมนต์ CF) before D-day; check stock 1-2× daily; announce limited quantities to avoid ของหมดกลาง Live (V012, V014 §C3).
  - Cover the dead block: 02:00-11:00 had no owner on 10.10 (V017).
- **When to use:** 11.11 (3-4 prime sessions per brand, Moonshot live ads restored, second push 18:00-23:00: V017, V018) and 12.12.
- **How to score:** confirmed live GMV and CLH vs 9.9 and 10.10 on the same basis; cancellations by hour (00:00 hour had 26 of 117 cancels on 10.10, V017).
- **Evidence grade:** PRIMARY (V005, V017); DOC/WIDE (V014); PRACTITIONER (V012).
- **Sources:** V005, V012, V013, V014, V017, V018.

### 11. Live promo set
- **What it is:** a standing set of live-only mechanics, signed off once from historical data and reused; Live owns its trade spend (V004).
- **Parts:** flash drops within ceiling (V010); GWP and bundle reveals before % off (V023: "GWP scarcity is the driver, not price"); max three gift mechanics (promo seat); every mechanic wired in the back end ("ห้ามหยิบเพิ่มนอกระบบตามโปรปากเปล่า", V030).
- **Routing rule:** live-only offers create urgency, but on 10.10 the strongest offers (14+7, 7+7) were live-only and barely reached shelf traffic (V019). If live reach is small, the hero offer goes on shelf too.
- **Constraints:** no live promos during an ISP change (~14 days' notice, V028); live absorbs mid-month and payday weight and can starve non-live days (V003); TikTok LIVE flash deals: below 14-day low, one per 24h (S048 US, S049 TH; re-verify in Seller Centre).
- **How to score:** CPO (#2) at or above the ceiling-implied floor; incremental orders vs break-even uplift; effect on non-live days.
- **Evidence grade:** PRIMARY (V003, V004, V019, V030); PRIMARY-US (S048).
- **Sources:** V003, V004, V010, V019, V023, V028, V030, S048, S049.

## E. Buy the traffic

### 12. LIVE GMV Max setup and reading
- **What it is:** TikTok's only Shop sales-ads format since July 2025; LIVE GMV Max is available in TH (S050, S051; re-verify in Seller Centre).
- **Parts (V011, V012):**
  - LIVE GMV Max attributes all orders from all shops in the live room.
  - LIVE budget = 2-3× historical LIVE ad spend; keep 50-70 videos queued or 5-10 new creatives a day.
  - ROI target from history (vault formula for non-LIVE: historical GMV ÷ ad cost; the LIVE analogue is this seat's inference). Healthy actual ROI 80-120% of target; above 120% = budget-constrained.
  - Learning ~7 days, no edits; hold ROI ≥3 days; last edit D-3; manual ROI change voids ROI Protection for the day. Agency guide: 5-7 days and >10 conversions before major change (S026).
  - Promotion Days lower ROI goal 10/20/30% and add +50% budget; enable 3-5 days ahead (V012).
  - Creative Boost is blind to GMV. Shop-level GMV Max was not adopted because it would sell GWP (V027).
  - **Never quote a GMV Max ROI as a ROAS.** Hold out a comparable session or SKU (V011).
- **Constraint now:** the main TikTok account is unavailable; a new account waits 14 days before live (V006, V034).
- **How to score:** marginal ROAS vs BEROAS (#4) on confirmed GMV, with a holdout.
- **Evidence grade:** PRACTITIONER (vault notes, agency); PRIMARY (S050) for format; platform rules all re-verify in Seller Centre.
- **Sources:** V006, V011, V012, V027, V034, S026, S050, S051.

## F. Diagnose

### 13. Live decline diagnosis tree
- **What it is:** one root cause before any fix list (Peter's demand, V001).
- **Order of checks:**
  1. **Basis:** placed vs confirmed; same hours? (V019).
  2. **Traffic support:** ΔLIVE GMV vs Δlive ads. Moonshot: ads −93%, GMV −41% → traffic-supported (V016).
  3. **Slot, host, content:** ads flat, GMV down. Linee: ads −9%, GMV −30% → "content or slot quality, not budget" (V016).
  4. **Organic momentum:** Spiffy +113% on ฿0 ads (V016).
  5. **Funnel:** viewers → clicks → orders → AOV; GMV per viewer (V017).
  6. **Offer:** live price vs shelf; live-only hero offers (V019); strip offer depth (V018).
  7. **Stock and ops:** stock integrity gap (V034); CF bot; cancellations.
  8. **Platform:** account status, health rating, re-run strike (V002, S037, S038).
- **How to score:** name the single node that explains most of the drop; one owner, one action, one read date.
- **Evidence grade:** PRIMARY.
- **Sources:** V001, V002, V016, V017, V018, V019, V034, S037, S038.

## G. Stay legal and on-licence

### 14. Live compliance and platform-risk gate
- **What it is:** spoken claims follow the same rules as written ones; one bad live can hurt the whole shop under health ratings (live_commerce research §5 inference).
- **Parts:**
  - Thai FDA: cosmetic ads need no licence but must not be false, exaggerated or therapeutic; Cosmetic Advertising Manual B.E. 2567; live-selling guidance Oct 2025 (S043, S044). No "รักษาสิว", "ลดการอักเสบ", guaranteed results (S045, S047).
  - Spiffy never-use list: treat / cure / heal / medicated / kills bacteria / antibacterial / anti-inflammatory / fades dark spots / wound (V021); FDA classification per SKU first (V022).
  - Linee peroxide % printed exactly (HP 1% vs Monchhichi 3%) (V001); Loom 12% PAP claim held carefully (V039).
  - TikTok bans "#1", "best", "only" and diagnose/prevent/treat/cure claims (V011).
  - Health ratings: Creator Health Rating from Jan 2026 (200-point start), Account Health Rating by Jul 2026; LIVE with miscategorised products draws enforcement (S037, S038; re-verify in Seller Centre).
  - Lucky draws and game-like mechanics are prohibited in US LIVE policy (S041); TH unverified. Treat prize games as restricted until checked.
  - Monchhichi licence (V020): Classic Boy + Girl only; no 3D plush; designs need prior written approval; Mon cannot promote another company's business (V001); marketplace channel approval gap.
- **How to score:** pass/fail. Any fail blocks the session script.
- **Evidence grade:** PRIMARY (V020, V021, S037, S043); SECONDARY/PRACTITIONER for word lists.
- **Sources:** V001, V011, V020, V021, V022, V039, S037, S038, S041, S042, S043, S044, S045, S046, S047.

### 15. Event live vs always-on live
- **What it is:** two formats with different economics.
- **Parts:** Event live = drops, pre-order, limited GWP, brand-face sessions ("CEO answers everything" with Nuza, V005); suits Monchhichi (61% returning buyers, ~68% of 10.10 GMV on pre-order, V018). Always-on = hero conversion on Linee strips and daily Shopee search traffic.
- **When to use:** choosing a format per brand; Care's test: concentrate live on Linee + Monchhichi, not Moonshot and Spiffy (V003).
- **How to score:** event lives judged on CLH of the event window plus pre-order cash; always-on on CLH per slot. Evidence comparing the two in Thailand: GAP.
- **Evidence grade:** PRIMARY (V003, V018); GAP for external comparison.
- **Sources:** V003, V005, V018, V023.
