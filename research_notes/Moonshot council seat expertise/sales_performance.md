# Sales Performance Management, Forecasting and Root-Cause Diagnosis for Thai Consumer E-commerce Brands (Shopee, TikTok Shop, Lazada), 2024-2026

Research date: 16 Oct 2026. Method note: WebFetch could not reach most primary domains from this environment (DNS/proxy blocks on bangkokpost.com, cube.asia, momentum.asia, lazada CDN). Most findings below come from search-engine extracts of those pages. Each claim is labelled **[PRIMARY]** (platform, research-firm or company data, or official definitions), **[SECONDARY]** (press or blog restating primary data) or **[OPINION]** (practitioner view or vendor claim). Before quoting any figure externally, check it against the original.

---

## 1. Frameworks for decomposing a sales gap and contribution-margin layers (CM1/CM2/CM3, Net Marketing Contribution, contribution per order)

### Takeaway
No single source publishes a "Thai marketplace gap tree". The best practice is to stitch two well-documented ideas together. The first is the D2C contribution-margin stack (CM1 → CM2 → CM3), taught most visibly by Common Thread Collective (CTC) and finance-for-DTC blogs. The second is the standard revenue identity of traffic × conversion × AOV, applied per brand → channel → SKU. CTC's distinctive contribution is operational: set a contribution-margin goal, break it into daily expectations and track it every day. That maps directly onto this seat's choice of Net Marketing Contribution as the main KPI.

### Cited Findings
- **[OPINION / practitioner consensus]** CM1 is generally defined as net revenue minus COGS, sometimes also net of discounts and returns. CM2 subtracts variable fulfilment: outbound shipping, payment processing, 3PL and a returns reserve. CM3 subtracts variable marketing, leaving what each order contributes after COGS, payment processing, fulfilment, shipping, returns and variable marketing. Definitions vary by team, and some put the same item in a different layer. — [Polar Analytics, contribution margin formula (CM2/CM3 variants)](https://www.polaranalytics.com/post/contribution-margin-formula-for-ecommerce-how-to-calculate-it); [Eightx, CM1 explainer](https://eightx.co/blog/what-is-cm1-contribution-margin-before-marketing); [MobiLoud](https://www.mobiloud.com/blog/ecommerce-contribution-margin); [Saras Analytics](https://www.sarasanalytics.com/blog/contribution-margin-analysis)
- **[OPINION, single vendor]** A commonly quoted benchmark says a scalable DTC brand's CM3 is 20% of revenue or more. It comes from one vendor blog, is US DTC-centric and is not validated for Thai marketplaces. — [Eightx, average contribution margin by vertical](https://eightx.co/blog/average-contribution-margin-by-vertical)
- **[OPINION, CTC / Taylor Holiday]** "Set a goal for contribution margin. Track it every day." In CTC's method the simple version divides the month's revenue expectation by 30. CTC's version adds a day-of-week effect and other levers, producing a daily expectation for revenue, spend and contribution margin "all the way down the chain". CTC tracks about 27 metrics daily, including contribution margin, revenue, ad spend, aMER (acquisition MER) and new versus returning customer revenue, at campaign level. — [Taylor Holiday LinkedIn post](https://www.linkedin.com/posts/taylor-holiday-a169b322_set-a-goal-for-contribution-margin-track-activity-7058100919221047296-vRoz); [CTC, "How to Execute … Every Single Day"](https://commonthreadco.com/blogs/ecommerce-playbook/execute-every-single-day)
- **[OPINION / self-reported, unverified]** CTC claims 2025 client forecast accuracy of 3.15%, with clients growing revenue 32.65% and contribution margin 41.83% ("Prophit Engine"). A 2026 interview summary says it forecast $3B within 4% across 1,000+ brands. One monthly scorecard shows contribution margin 4.68% ahead of forecast while revenue was 2.14% behind. That gap is a useful illustration that revenue and contribution can diverge in the same month. — [CTC Coach's Corner, May lessons on forecasts](https://commonthreadco.com/blogs/coachs-corner/may-lessons-forecast-strategic-growth-tactics); [CTC Modern Media Playbook](https://commonthreadco.com/blogs/ecommerce-playbook/the-modern-media-playbook)
- **[OPINION]** For SEA marketplace sellers, GMV is a useful measure of scale but a poor steering metric on its own. Sellers should steer on profit after ads, platform fees and returns. — [Dataglass Labs, SEA seller market research 2026](https://www.dataglasslabs.com/blog/southeast-asia-seller-market-research-2026)
- **[PRIMARY, Cube data via Cube blog]** In Thailand skincare, nearly half of TikTok Shop sales happen outside official brand stores, through affiliates and resellers. This matters for the brand → channel → store decomposition, because brand-level sales on TikTok are not captured by the brand's own shop analytics. — [Cube, skincare strategy across Shopee/Lazada/TikTok Shop in Thailand](https://cube.asia/why-the-same-skincare-brand-strategy-wont-work-across-shopee-lazada-and-tiktok-shop-in-thailand/)

### Inferences
- A workable gap tree for this seat is: Net Marketing Contribution gap = (net-sales gap × CM2%) − marketing-spend variance. Split the net-sales gap by brand, then channel (Shopee / TikTok Shop / Lazada / D2C / offline / B2B), then top SKUs. Within each marketplace store, decompose it as sessions (or product views) × conversion rate × AOV, then net it down from gross GMV for cancellations, returns and seller-funded vouchers (see section 5). The seat should always ask which single node explains most of the gap, not list every movement.
- "Contribution per order" = CM3 / net orders. It is the cleanest way to compare live, affiliate, ads-driven and campaign-day orders, because AOV and voucher cost per order differ sharply between them.
- On TikTok Shop, affiliate commission is a variable selling cost and belongs in CM3, the marketing layer. Otherwise channel contribution is overstated relative to Shopee, where more spend runs through Shopee Ads.
- Thai-specific CM layer benchmarks for marketplace beauty and personal care sellers (fee stack, voucher co-funding, ad-to-sales ratio) were not found. See Gaps.

### Gaps
- No public Thai-marketplace benchmark for CM1/CM2/CM3 or for ad spend as a share of sales, also called TACOS (total advertising cost of sale), for beauty and personal care.
- CTC's own definitions page (for example "contribution margin = net revenue − COGS − variable costs − ad spend") could not be fetched. The definitions above come from other practitioners.
- No public source defines "Net Marketing Contribution" for the Thai context. The classic marketing-metrics definition (sales × gross margin % − marketing expenses) was not re-verified in this session.

---

## 2. Pacing and forecasting: MTD vs target, required run-rate, double-day and payday seasonality, post-campaign hangover

### Takeaway
Public data on what share of a Thai seller's monthly or annual GMV falls on double-days or payday does not exist in any citable form. Platforms publish only uplift multiples, such as Lazada's "+469% vs normal days" for 11.11 2025, and research firms describe the campaign calendar as Shopee's primary growth mechanism. Pacing should therefore come from the brand's own daily history: a daily target curve weighted by day-of-week, campaign days and payday, not a flat /30. The evidence on promotional pull-forward and post-sale hangover is general rather than Thai-specific, but it is consistent.

### Cited Findings
- **[PRIMARY, Lazada press release, 2025]** At Lazada's 11.11 2025, total platform uplift was 469% versus normal days. Top sellers in SEA generated 58% higher GMV than at 9.9 2025. The release title cites an "11X GMV uplift" for brand-led commerce. These are company-reported figures and are not Thailand-specific. — [Lazada press release PDF](https://lazada-com.oss-ap-southeast-1.aliyuncs.com/229-press-release.pdf)
- **[OPINION / research-firm characterisation]** Cube describes Shopee's monthly "double-digit" calendar (3.3, 6.6, 9.9, 10.10, 11.11, 12.12) as the primary mechanism behind Shopee's growth. — [Cube, Shopee growth strategy in SEA 2026](https://cube.asia/shopee-growth-strategy-southeast-asia/)
- **[SECONDARY / OPINION]** Payday campaigns: one seller guide reports that in 2025 Shopee payday promotions gave "stable and consistent traffic", mainly keeping store sales going between major festivals, with smaller discounts than mega-sales. — [Duoke, Shopee 2025 campaign review / 2026 guide](https://www.duoke.com/en/blog/article/250-Shopee-Seller-Guide-2026-Growth-Planning). Shopee Thailand ran a "2.25 Payday" window on 23-27 Feb 2026. — [Shopdora, Shopee Thailand weekly report Feb 2026](https://blog.shopdora.com/en/page/shopee-thailand-weekly-report-key-campaigns-trending-keywords-for-sellers-feb-2026/). Lazada Thailand runs a Payday Sale from the 25th to month-end. — [Sphere Agency, Lazada Thailand guide 2026](https://sphereagency.com/articles/lazada-seller-guide-thailand)
- **[OPINION, Philippines, unverified]** Shopee traffic rises by an average of 40-60% during payday windows. The figure is for the Philippines, has no published methodology and should not be applied to Thailand. — [CloudEcommerce, Shopee payday strategies 2026](https://www.cloudecommerce.com/blog/shopee-payday-sale-strategies-that-drive-maximum-revenue-in-2026/)
- **[OPINION, third-party]** TikTok Shop's strongest quarter on record was "largely driven" by SEA live-commerce volume during the 9.9 to 12.12 double-days. — [DAMI, TikTok Shop growth SEA 2025](https://www.tkdami.com/blog/8892/)
- **[OPINION / practitioner, Recast]** Promotions produce pull-forward and pull-backward effects: customers delay purchases before a sale, and a "hangover" follows it. "The pre-periods and post-periods can actually swamp the total effect of the sale", especially when too much margin was given away at the peak. — [Recast, are pull-forward promotions incremental?](https://getrecast.com/sales-promotions/)
- **[OPINION]** Promo lift measured against the prior week's baseline misses demand pulled from the week after and purchase intent that would have happened anyway. Use a holdout or a wider pre/post window. — [Gladly, pulled-forward spending](https://www.gladly.ai/blog/pulled-forward-spending/); [Made With Intent, promotional pricing guide](https://www.madewithintent.ai/articles/promotional-pricing-ecommerce-guide)
- **[PRIMARY, academic, 2025]** Customers acquired through promotions, including Black Friday shoppers, spent more during the promotion and less afterwards, consistent with forward buying. — [arXiv 2508.00208, Channel Adoption Pathways and Post-Adoption Behavior](https://arxiv.org/pdf/2508.00208)
- **[OPINION, CTC]** Daily pacing: monthly target ÷ days, adjusted for day-of-week, with the same daily expectation applied to spend and contribution margin. — [Taylor Holiday LinkedIn](https://www.linkedin.com/posts/taylor-holiday-a169b322_set-a-goal-for-contribution-margin-track-activity-7058100919221047296-vRoz)

### Inferences
- Required run-rate = (monthly target − MTD actual) ÷ remaining days. For Thai marketplaces, the remaining days must be weighted. A month containing a double-day (for example 10.10) and a payday window (25th to month-end) should carry a phased target curve built from the brand's own last two or three equivalent months. Being "behind on the 9th" is meaningless if 30-50% of the month typically lands on the 10th and the 25th-31st. This share is the brand's own number to compute; no public benchmark exists.
- Hangover check: compare the 7-14 days after a double-day with the same days in a non-campaign month, and compare campaign-month total versus the average of the adjacent months. If campaign-month total growth is well below campaign-day growth, the campaign mostly shifted demand rather than creating it.
- Campaign dependence metric for the seat: % of monthly net sales (and CM3) made on campaign days. Rising dependence combined with falling CM3 per order is the classic red flag: growth bought with vouchers.

### Gaps
- No Thai or SEA published figure for the share of a seller's monthly or annual GMV on double-days or payday. Searches across Priceza, Cube, Momentum Works and platform pages found only uplift multiples.
- No Thai-specific quantification of post-11.11 or post-12.12 hangover.
- Shopee Thailand and TikTok Shop Thailand campaign result press releases for 2024-2026 were not retrieved.

---

## 3. Thai e-commerce market structure 2024-2026: size, platform shares, TikTok Shop growth, beauty and personal care

### Takeaway
Thailand was SEA's fastest-growing platform e-commerce market in 2025, up 51.8% YoY according to Momentum Works. The three-way split has moved fast. Shopee still leads at roughly 48-50% of platform GMV. TikTok Shop is a clear #2, about 33% in H1 2025 per Cube, and Cube data reportedly shows it at 48% in Q2 2026. Lazada is shrinking, at about 18% in H1 2025. In skincare specifically, TikTok Shop already outsold Shopee in Q4 2025. Market-size estimates disagree widely by source and definition (platform GMV versus all e-commerce versus ETDA's B2B-inclusive value).

### Cited Findings
**Market size**
- **[PRIMARY, Momentum Works "Ecommerce in Southeast Asia 2026", released 14 Apr 2026]** SEA platform e-commerce GMV was US$157.6B in 2025, up 22.8%. Thailand (+51.8% YoY) and Malaysia (+47.6%) grew fastest. Shopee, Lazada and TikTok Shop (including Tokopedia) hold about 98.8% of platform GMV. Shopee has 53% regional share, and TikTok Shop plus Tokopedia GMV equals 65.7% of Shopee's. Lazada is described as gaining traction in Thailand after a brand-led shift. — [Momentum Works press release PDF](https://thelowdown.momentum.asia/wp-content/uploads/2026/04/Embargoed-Press-release-Momentum-Works-Ecommerce-in-SEA-2026.pdf); [The Low Down, US$157.6B report](https://thelowdown.momentum.asia/new-report-southeast-asias-platform-ecommerce-reaches-us157-6b-in-2025-with-top-platforms-expanding-share-to-98-8/); [Yicai Global](https://www.yicaiglobal.com/news/se-asias-e-commerce-sites-see-gmv-jump-23-to-over-usd1576-billion-in-2025-report-says)
- **[SECONDARY]** Thailand platform GMV was US$35.5B in 2025 (+51.8%), attributed to Momentum Works by Bangkok Post and Dataglass. This could not be confirmed against the original report. — [Bangkok Post, Thailand driving e-commerce growth](https://www.bangkokpost.com/business/general/3239004/thailand-driving-ecommerce-growth); [Dataglass Labs](https://www.dataglasslabs.com/blog/southeast-asia-seller-market-research-2026)
- **[PRIMARY, prior edition]** Momentum Works' previous edition reported SEA platform GMV of US$128.4B for 2024, with the top 3 platforms at 84% share. — [Momentum Works press release](https://thelowdown.momentum.asia/press-release-southeast-asias-platform-ecommerce-gmv-reaches-us128-4b-top-3-platforms-increase-market-share-to-84-momentum-works/)
- **[SECONDARY, Google-Temasek-Bain e-Conomy SEA 2025, Nov 2025]** Thailand's digital economy GMV was about US$56B in 2025 (+16% from US$49B in 2024). E-commerce was about US$33B, growing 22% YoY. Thailand has 850,000 video sellers (+175% YoY) and is SEA's #2 video-commerce market. Taken from press coverage, not the report itself. — [The Story Thailand](https://www.thestorythailand.com/en/?p=167996); [Thailand Business News](https://www.thailand-business-news.com/?p=257935)
- **[SECONDARY, Priceza]** Thai e-commerce was about 1 trillion baht in 2024 (Bangkok Post, Jan 2025, with 2 trillion expected by 2030). Another report says 1.1 trillion baht, +14%. Priceza expected 2026 growth to slow to about 7% (Bangkok Post, Jan 2026). — [Nation Thailand, 1 trillion baht milestone](https://www.nationthailand.com/business/economy/40052525); [Nation Thailand, 2025 trends](https://www.nationthailand.com/business/trade/40045863); [Bangkok Post, Priceza trends](https://www.bangkokpost.com/business/general/2944837/priceza-highlights-latest-e-commerce-trends)
- **[CONFLICT]** ETDA-attributed 2024 figures range from "over 600 billion baht" to "almost 1 trillion baht", and these figures may include B2B. Not reconciled. — [BigSeller](https://www.bigseller.pro/blog/articleDetails/3308.htm?source=app); [Statista (ETDA)](https://statista.com/statistics/1003758/thailand-e-commerce-value-industry)
- Growth figures also conflict: Momentum Works has +51.8% for platform GMV, e-Conomy SEA has +22% for e-commerce, and Priceza has +14% (2024). They differ in scope and method, so the seat should not mix them.

**Platform shares and TikTok Shop**
- **[SECONDARY citing Cube data, Bangkok Post 22 Jan 2026]** Thailand H1 2025 shares: Shopee 48%, TikTok Shop 33%, Lazada 18%. TikTok was up about 6 points YoY and Lazada down about 7 points. The metric (sales or GMV) is not specified. — [Chiang Rai Times summary](https://www.chiangraitimes.com/business/thailand-e-commerce-sites/); [Clout Media, social commerce Thailand 2026](https://cloutmediaagency.com/en/blogs/social-commerce-thailand-2026)
- **[PRIMARY, Cube 2026 article, per search extract]** TikTok Shop held 48% of Thailand's combined platform GMV in Q2 2026. Across six SEA markets in FY2025, Shopee had 59% and Lazada 9%, down from 16% in 2024. This conflicts with Momentum Works' 53% Shopee regional share; the two use different methodologies. — [Cube, what the data shows in 2026](https://cube.asia/shopee-lazada-and-tiktok-shop-in-southeast-asia-what-the-data-shows-in-2026/)
- **[SECONDARY, Momentum Works 2024 data via Katadata]** Shopee had about 51% of Thailand platform GMV in 2024. — [Katadata](https://databoks.katadata.co.id/en/technology-telecommunications/statistics/68629ac92be0b/shopee-tiktok-shop-and-blibli-market-share-in-indonesia-2024)
- **[PRIMARY, company filings via Creden, reported by Bangkok Post]** TikTok Shop Thailand's revenue rose 350% to 54.4 billion baht, with profit up 184% to 3 billion baht ("last year", most likely FY2024). TikTok ranked #2 in revenue for the first time. Shopee remained the leader, but its profit declined. — [Bangkok Post, TikTok Shop flexes muscle in 3-way Thailand tussle](https://www.bangkokpost.com/business/general/3276269/tiktok-shop-flexes-muscle-in-3way-thailand-tussle)
- **[SECONDARY]** TikTok Shop Thailand GMV was about US$5.9B in H1 2025 (estimate). — [Sellercraft](https://sellercraft.co/tiktok-shop-vs-shopee-gmv-trends-in-southeast-asia-2023-2025-unpacking-the-e-commerce-showdown/)
- **[PRIMARY, Priceza survey]** Thai consumers' platform usage: Shopee 75%, Lazada 67%, TikTok 51%. 83% say they have bought based on influencer recommendations. — [Campaign Asia](https://campaignasia.com/article/how-ai-and-local-insights-are-shaping-thailands-ecommerce-boom/504686); [The Story Thailand, Priceza 2025 trends](https://www.thestorythailand.com/21/01/2025/146079/)

**Beauty and personal care**
- **[PRIMARY, Cube Q4 2025]** Thailand skincare e-commerce sales in Q4 2025: TikTok Shop about THB 4.7B (US$144M), Shopee about THB 3.9B (US$120M), Lazada about THB 1.1B (US$34M). Nearly half of TikTok Shop skincare sales came from non-official stores. — [Cube, skincare strategy in Thailand](https://cube.asia/why-the-same-skincare-brand-strategy-wont-work-across-shopee-lazada-and-tiktok-shop-in-thailand/)
- **[OPINION / low-quality]** Claims that BHPC (beauty, health and personal care) was "over half" of TikTok Shop Thailand GMV in Q1 2025 come from AI-generated summary pages and are directional at best. — [Accio](https://www.accio.com/business/tiktok-shop-thailand-best-selling-products-2025)

### Inferences
- For The Spiffy Patch and Linee, TikTok Shop is likely already the largest or fastest-growing channel in their categories in Thailand. A sales gap on TikTok should be decomposed separately into own-shop (LIVE, video, GMV Max ads) and affiliate/creator GMV, because about half of category sales flow outside official stores.
- Market growth is slowing in 2026 (Priceza expects about 7%). Category growth will therefore increasingly come from share shifts between platforms, not from the market rising. When diagnosing a gap, the seat should first ask whether the market moved or our share moved, using Cube- or Astro-type category data where it is available.

### Gaps
- Thailand-only platform shares for FY2025 from Momentum Works (in the paywalled report).
- Full-year 2025 Thailand beauty and personal care e-commerce size. The oral care and acne patch subcategory data was not found publicly.
- Cube's methodology (scraped sales estimates) versus Momentum Works' (interviews plus models) is not reconciled here.

---

## 4. Separating one-offs (stock-outs, account loss, promo end, floods, holidays) from trend

### Takeaway
No marketplace-specific playbook was found. The practitioner toolkit is standard. Compare against a seasonally appropriate baseline (YoY same-period, or same campaign-day last year, rather than MoM). Use rolling baselines with deviation thresholds. Correct history for stock-outs using out-of-stock flags. Annotate known events so they are explained rather than "detected".

### Cited Findings
- **[OPINION / vendor practice]** Compute week-over-week and YoY variance against rolling baselines and alert when thresholds are breached. — [Domo, POS monitoring agent](https://domo-webflow.domo.com/ai/agents/pos-monitoring-ai-agent)
- **[OPINION]** Seasonal series need season-aware comparisons such as YoY, not plain moving averages. — [Jeff Bullas forum, anomaly detection in sales data](https://www.jeffbullas.com/thread/can-i-detect-anomalies-in-time-series-sales-data-with-no-code-ai-tools/)
- **[PRIMARY, vendor documentation]** Oracle Retail demand forecasting corrects sales history for stock-outs using out-of-stock indicators, with manual overrides for exceptions. Preprocessing removes or adjusts promotion and out-of-stock periods before the baseline is estimated. — [Oracle Retail, preprocessing appendix](https://docs.oracle.com/cd/E75759_01/pdf/cloud/190/html/user_guide/output/apx_preproc.htm)
- **[OPINION / vendor]** A seller anomaly card for Amazon uses a trailing 30-day baseline and flags days beyond about ±2 standard deviations. It warns that genuine seasonal events look like anomalies, and lists stock-outs among the common causes of drops. — [Vortex IQ, sales volume anomalies](https://docs.vortexiq.ai/nerve-centre/kpi-cards/amazon-seller/sales-volume-anomalies)
- **[OPINION]** The WBR practice is to focus discussion on exceptions and trends in controllable input metrics, and to explain variances against a fixed format each week. — [Holistics, How Amazon uses input metrics](https://www.holistics.io/blog/how-amazon-uses-input-metrics/)

### Inferences (practical method for the seat)
1. **Like-for-like baseline.** Compare against the same campaign window last year (10.10 vs 10.10, with payday aligned) and against the trailing 8-week non-campaign daily average. MoM is only valid between months with the same campaign mix.
2. **Event log first.** Keep a dated log of stock-outs by SKU and channel, account or listing suspensions, ad-account outages, promo starts and ends, price changes, platform fee or commission changes, Thai holidays (Songkran, New Year, long weekends) and floods or logistics disruptions. Any gap day overlapping a logged event is a candidate one-off. Quantify it as lost days × baseline daily sales.
3. **Stock-out adjustment.** Lost sales ≈ days OOS × pre-OOS daily run-rate for that SKU-channel. Subtract this from the gap before calling a trend.
4. **Trend test.** A gap is "trend" if it persists for three or more consecutive non-event weeks, appears YoY and against the rolling baseline, and shows up in input metrics (traffic, CVR, AOV, share of voice), not only in output (GMV).
5. **Mix test.** Separate the price/mix effect (AOV) from the volume effect (orders), and the channel-shift effect (for example sales moving from Shopee to TikTok) from true demand loss. Brand-level totals can be flat while one channel collapses.

### Gaps
- No Thailand- or marketplace-specific published method for one-off versus trend separation was found.
- No published data on the typical sales impact of Thai holidays (Songkran) or the 2024 floods on e-commerce sellers.

---

## 5. Data integrity pitfalls in marketplace reporting (GMV vs net sales; placed vs paid vs completed; cancellations and returns)

### Takeaway
Marketplace dashboards report gross, payment-time GMV that includes orders later cancelled or refunded. Each platform defines "sales" differently, and the definitions have changed over time. Comparing Shopee "Sales" with TikTok "GMV" with Lazada "Revenue" without normalising to net completed sales, after seller-funded vouchers, overstates performance and misattributes gaps. The P&L should reconcile to settlement or finance reports, not to dashboard GMV.

### Cited Findings
- **[PRIMARY, TikTok Shop Seller University]** TikTok Shop Analytics defines GMV as "the total amount paid for orders during the selected period, including canceled and refunded orders", measured at payment time. The formula is list price × items sold + shipping − seller-funded discounts − platform-funded discounts − tax. "GMV with co-funding" also includes cancelled and refunded orders. Commission GMV uses a different scope and timing (order creation). The page is for the US seller centre; check the Thai seller centre wording. — [TikTok Shop Seller University, Shop analytics](https://seller-us.tiktok.com/university/essay?knowledge_id=813364865828654)
- **[SECONDARY]** Later TikTok refunds and cancellations appear as reverse transactions and do not restate the original period's GMV. Settlement reports carry revenue, refunds, fees and adjustments. — [Dashboardly, TikTok Shop GMV](https://www.dashboardly.io/post/what-is-gmv-on-tiktok-shop-and-why-its-not-your-revenue); [Sellico](https://sellico.com/what-is-tiktok-shop-gmv-and-why-doesnt-it-match-your-revenue/)
- **[PRIMARY, Shopee Seller Education]** Business Insights is the Seller Centre analytics module. Placed orders include both paid and unpaid orders submitted at checkout. Paid orders are those the buyer paid successfully. Non-COD orders are confirmed on payment; COD orders are confirmed when confirmed for shipping. — [Shopee SG Seller Education, What is Business Insights](https://seller.shopee.sg/edu/article/76); [Shopee MY](https://seller.shopee.com.my/edu/article/503/what-is-business-insights)
- **[SECONDARY]** In Shopee Business Insights, "Sales" = value of confirmed orders, including orders later cancelled or returned. Cancelled Orders = confirmed orders later cancelled. Returned/Refunded = fully returned or refunded orders. Shopee Malaysia changed the Sales calculation so that seller rebates (vouchers, coin rebates, item rebates) are now deducted. — [BigSeller, Shopee MY sales data update](https://www.bigseller.com/blog/articleDetails/shopee-sales-data.4268.htm); [BigSeller, Business Insights guide](https://www.bigseller.com/blog/articleDetails/3631/shopee-business-insights.htm)
- **[PRIMARY, Shopee Ads]** Shopee Ads introduced "Placed" versus "Confirmed" sales reporting. Confirmed Sales excludes unpaid and cancelled orders, so ROAS differs depending on which basis is used. — [Shopee Ads MY FAQ](https://ads.shopee.com.my/learn/faq/82/2127)
- **[OPINION]** Definitions differ by country and over time, so check the tooltip in your own market's Seller Centre. — same BigSeller sources.

### Inferences
- Standard reconciliation ladder the seat should insist on, per channel per month: Placed GMV → Paid/Confirmed GMV → minus cancellations → minus returns/refunds → minus seller-funded vouchers and co-funding → Net sales (ex-VAT) → minus platform commission, transaction and service fees, affiliate commission and ads → CM3. Report the ratio at each step (for example cancellation rate %, return rate %, voucher % of GMV). A "sales gap" often turns out to be a widening of one of these ratios.
- Timing basis mismatch matters: TikTok uses payment time, commission GMV uses creation time, and finance uses settlement or delivery. Month-end live sessions and 25th-to-month-end payday orders can land in different months in different reports.
- Ads ROAS on a "placed" basis flatters campaign days, when cancellations and unpaid COD orders tend to be higher. Use confirmed or net ROAS for Net Marketing Contribution.
- Thai-specific definitions (Shopee TH, Lazada TH Seller Center "Revenue") were not verified this session. Lazada's dashboard definition was not found.

### Gaps
- Lazada Seller Center (Business Advisor) metric definitions were not found.
- Shopee Thailand-specific tooltip wording, and whether the MY rebate-deduction change applies in TH, could not be confirmed.
- No benchmark cancellation or return rates for Thai beauty and personal care on each platform.

---

## 6. Weekly business review (WBR): input vs output metrics and how good operators run it

### Takeaway
The Amazon WBR, documented in *Working Backwards* by Colin Bryar and Bill Carr, is the reference model. Hold a fixed-format weekly deck of controllable input metrics and lagging output metrics. Spend the meeting on exceptions and trends in the inputs. Revise the input metrics when moving them stops moving the outputs.

### Cited Findings
- **[PRIMARY, book quotes via Holistics / Goodreads notes]** Output metrics (orders, revenue, profit) matter but are lagging and cannot be sustainably manipulated. Input metrics (selection, price, convenience) are controllable and drive outputs. Most WBR discussion centres on controllable inputs. The deck keeps the same metrics, format and order each week. — [Holistics, How Amazon uses input metrics](https://www.holistics.io/blog/how-amazon-uses-input-metrics/); [Goodreads notes on Working Backwards](https://www.goodreads.com/notes/55297149-working-backwards/45779-graham?page=3)
- **[SECONDARY]** Amazon built the WBR using the Six Sigma DMAIC (Define-Measure-Analyze-Improve-Control) method. Input metrics often need revision: if inputs move but outputs do not follow, the causal model is wrong. The executive WBR reportedly covers 400-500 metrics in 60-90 minutes; this is secondhand and unverified. — [NanoGlobals glossary, WBR](https://nanoglobals.com/glossary/wbr-weekly-business-review/); [Colin Bryar on the WBR, Commonplace Expertise podcast](https://el.player.fm/series/commonplace-expertise/colin-bryar-on-the-practice-of-amazons-weekly-business-review)
- **[OPINION, CTC]** An e-commerce operator variant: a daily scorecard against daily expectations for revenue, spend and contribution margin, plus new versus returning revenue and aMER. — [CTC, Execute every single day](https://commonthreadco.com/blogs/ecommerce-playbook/execute-every-single-day)

### Inferences (WBR template for this seat)
- **Output block (lagging):** net sales versus locked target (MTD, run-rate required versus actual); CM3 / Net Marketing Contribution versus target; contribution per order. Report each by brand × channel.
- **Input block (controllable), per channel:** sessions or product views; conversion rate; AOV; in-stock % on the top 20 SKUs; ad spend and confirmed ROAS; affiliate and creator GMV and active creator count (TikTok); LIVE hours and GMV per LIVE hour; voucher cost as a % of GMV; cancellation and return rates; search rank or share of voice on key terms; rating and review count.
- **Format rules:** fixed order every week; YoY and versus-plan columns; an event log column; only exceptions (beyond a threshold) get discussed; each exception gets one root cause, one owner and a due date, not a list of fixes. This matches the seat's investor lens: lock targets, find root causes, start from break-even.

### Gaps
- No Thai or SEA marketplace operator's published WBR example was found.
- The 400-500 metric figure and the DMAIC origin are not verified against the book itself.
