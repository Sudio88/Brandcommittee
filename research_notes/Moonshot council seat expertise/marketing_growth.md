# Head of Marketing & Growth: Thai consumer brands (beauty/personal care, oral care, licensed character goods), 2024-2026

Method note: researched 2026-10-16 using web search. WebFetch could not resolve any host in this session (DNS errors on marketingoops.com, daat.in.th and relevantaudience.com), so these findings come from search-result extracts, not full-page reads. Figures marked "verify" should be checked against the primary PDF or page before anyone presents them as hard numbers. Classic frameworks are dated where they appear.

## 1. Measurement: break-even ROAS, MER/aMER, contribution-margin planning, incrementality, MMM-lite, marketplace attribution limits

### Takeaway
Plan and judge media on contribution after marketing, not on platform ROAS. Break-even ROAS = 1 / contribution margin % before marketing. Platform-reported ROAS is an optimistic upper bound. Calibrate it with lift tests (Meta and TikTok conversion lift, geo or on/off holdouts), then use an open-source MMM (Meridian or Robyn) when there is enough history.

### Cited Findings
**Break-even ROAS and contribution margin**
- Formula: break-even ROAS = 1 / contribution margin, where contribution margin is measured before marketing. Worked examples: a 40% CM gives 2.5x; 35% gives about 2.86x; 25% gives 4.0x — [eightx](https://eightx.co/blog/roas-vs-contribution-margin); [eightx: blended ROAS vs break-even MER](https://eightx.co/blog/blended-roas-vs-breakeven-mer)
- Contribution margin for this formula = revenue minus COGS, shipping, payment fees, returns and discounts, before fixed overhead and before ad spend. If ad spend is already subtracted, 1/CM double-counts it. A common mistake is using gross margin instead of contribution margin. Sources define it slightly differently, so fix the definition internally — [eightx](https://eightx.co/blog/roas-vs-contribution-margin); [Relevant Audience](https://www.relevantaudience.com/google-ads-en/what-is-roas-formula-break-even-roas-target-roas/); [playad.ai](https://playad.ai/docs/learn/contribution-margin)
- The same logic applies blended. Each baht of marketing that returns R baht of revenue yields R x CM% of contribution, so break-even blended ROAS (MER) = 1/CM — [eightx](https://eightx.co/blog/blended-roas-vs-breakeven-mer)
- MER = total revenue (or GMV) / total marketing spend for a period. It is also called blended ROAS — [racklify](https://racklify.com/encyclopedia/query/mer-marketing-efficiency-ratio/); [thebigmarketing](https://thebigmarketing.com/what-is-mer-in-marketing/)
- aMER (acquisition MER) appears in DTC metric lists alongside "blended aMER" and "marginal aMER". The rationale is to separate new-customer revenue from returning-customer revenue. New customer revenue is defined by Triple Whale as "Total Order Revenue from New Customers" — [clickup (VI)](https://clickup.com/vi/blog/138574/marketing-efficiency-ratio/); [Triple Whale docs](https://triplewhale.readme.io/docs/new-customer-revenue)
- Common Thread Collective's growth formula, as summarised by a third party: (Visitors x Conversion Rate x LTV) - Variable Costs = Profit — [casestudies.com / CTC profile](https://www.casestudies.com/customer/common-thread-collective)

**Incrementality and lift tests**
- TikTok Conversion Lift Study: splits the audience into a test group that sees the ads and a control group that does not, then compares conversions. Data can come from the TikTok Pixel, Events API or an MMP. The help article was updated April 2025 — [TikTok Ads Help](https://ads.tiktok.com/help/article/about-conversion-lift-study)
- TikTok cites a 2024 TransUnion meta-analysis: "52% of TikTok-led incremental conversions are exclusive to TikTok reach". Mercado Libre reported a 2.5x ROAS increase (Q4 2022 vs Q4 2023) after recalibrating attribution with lift studies. Both are vendor claims — [TikTok for Business blog](https://ads.tiktok.com/business/en-US/blog/conversion-lift-study)
- Meta's "incremental attribution" setting in Ads Manager optimises delivery for incremental conversions, using models that predict whether an ad caused a conversion. Standard attribution, by contrast, optimises for fixed windows. It needs a Sales or Leads objective with a maximise conversions or value goal. Launch timing is reported inconsistently (2024 rollout vs April 2025) — [Social Media Today](https://www.socialmediatoday.com/news/meta-updates-information-incremental-attribution-conversion-tracking/759205/); [WorkMagic](https://www.workmagic.io/blog/incremental-attribution-meta); [Logical Position](https://www.logicalposition.com/?p=7672)
- Claimed uplift from incremental attribution: "46% lift over business-as-usual" in one source, and "average improvement of 20% in incremental conversions" (Sept 2024) in another. Neither has been verified against Meta's primary documentation — [WorkMagic](https://www.workmagic.io/blog/incremental-attribution-meta); [adsuploader](https://adsuploader.com/blog/meta-incremental-attribution)

**MMM-lite**
- Google released Meridian as an open-source MMM on 29 Jan 2025. It uses Bayesian causal inference that blends prior knowledge (for example lift-test results) with observed data. It can model KPIs including sales and profit and is customisable. Google launched it with a partner programme of more than 20 certified measurement partners — [Google blog](https://blog.google/products/ads-commerce/meridian-marketing-mix-model-open-to-everyone/); [AdNews](https://www.adnews.com.au/news/google-launches-open-source-mmm-meridian)
- A practitioner review rates Meridian's documentation among the most thorough of any open-source MMM but warns of a steep learning curve. Google's earlier LightweightMMM launched around the same time as Meta's Robyn — [Jaywing](https://www.jaywing.com/views/news/first-impressions-meridian-google-s-mmm-software-is-finally-released/)

### Inferences
- For Moonshot's SKU-level break-even ROAS, the CM input should net out marketplace commission, payment and transaction fees, vouchers co-funded by the brand, free shipping subsidies, affiliate commission and returns. Use the same formula across D2C, Shopee, Lazada and TikTok Shop so channels compare on a like-for-like basis. Each channel then has a different break-even because its fees differ.
- Use a three-layer measurement stack: (1) platform ROAS as an upper bound for daily optimisation; (2) quarterly calibration with lift or holdout tests (Meta and TikTok conversion lift; geo or on/off tests on marketplace ads); (3) MMM (Meridian or Robyn) once there are roughly 2 years of weekly data per SBU, with lift results used as priors. Judge SBUs on Net Marketing Contribution = revenue x CM% minus marketing spend.
- Track aMER (new-customer revenue / spend) separately from blended MER. Repeat-heavy lines such as Linee oral care could otherwise hide weak acquisition behind returning-customer revenue.

### Gaps
- I could not confirm Common Thread Collective's exact primary-source definitions of aMER and of their contribution-margin "Growth Map". Search did not surface CTC's own pages, so the definitions above are third-party.
- No source covered the attribution limits of marketplace ads (Shopee Ads, Lazada Sponsored Solutions): window lengths, view-through crediting, and inclusion of organic buyers. Treat marketplace ROAS as non-incremental by default, and verify with on/off tests.
- No public data on Meridian or Robyn minimum data requirements for small brands, or on Thai MMM case studies.

## 2. Brand growth science: Ehrenberg-Bass, Binet & Field, critiques and updates

### Takeaway
Grow penetration through mental availability (category entry points and distinctive assets) and physical availability. The Binet & Field 60/40 brand/activation split is a context-dependent default, not a law: the 2018 IPA update varies it by category, and secondary sources put online-led categories around 62/38.

### Cited Findings
- Mental availability = the probability that a buyer notices, recognises or thinks of a brand in buying situations. It works together with physical availability; without physical availability, spend on mental availability is "largely wasted" (How Brands Grow, Sharp 2010; Part 2, Romaniuk & Sharp 2016) — [Red C Research](https://redcresearch.com/?p=4477); [Alex Murrell summary](https://www.alexmurrell.co.uk/summaries/jenni-romaniuk-and-byron-sharp-how-brands-grow-part-2)
- Category entry points (CEPs) are the cues buyers use to access their memories in a buying situation. CEPs can be internal (motives, emotions) or external (place, time). A practical way to map them is to ask why, when, where, with whom and with what the category is bought — [Red C Research](https://redcresearch.com/product/building-mental-availability-category-entry-points-and-distictive-brand-assets/); [Emma Sharley summary of HBG2](https://sharley.substack.com/p/summary-how-brands-grow-part-2-by)
- Distinctive brand assets (Romaniuk, Building Distinctive Brand Assets, 2018) are judged on fame (most category buyers link the asset to the brand) and uniqueness (it evokes this brand, not competitors) — [Marketing Architects](https://www.marketingarchitects.com/blog/v41-n3-your-brand-assets-may-be-working-against-you); [Red C](https://redcresearch.com/?p=4477)
- How Brands Grow Part 2 re-states the law-like patterns from Part 1, including Double Jeopardy (smaller brands have fewer buyers who are also slightly less loyal) — [Emma Sharley summary](https://medium.com/@emsharley/summary-how-brands-grow-part-2-by-jenni-romaniuk-and-byron-sharp-acc69a66bc2c)
- Binet & Field's The Long and the Short of It (IPA, 2013) recommends roughly 60% brand-building and 40% activation, based on the IPA Databank — [the7stars](https://www.the7stars.co.uk/effs-sake-looking-latest-report-binet-field/); [WARC](https://www.warc.com/newsandopinion/news/binet_highlights_importance_of_brand_building/42010)
- Effectiveness in Context (IPA, 2018) breaks the ratio down by category, brand type and life stage. Binet says the ratio is "not an absolute". Reported examples: financial services near 80/20 and telco about 58/42. High-innovation categories make activation easier, which justifies a split nearer 70/30 — [WARC: Beyond 60:40](https://www.warc.com/content/article/event-reports/beyond_6040_putting_effectiveness_in_context/124156); [AdNews](https://adnews.com.au/opinion/not-seeing-the-forest-though-the-trees-is-the-industry-getting-its-tools-and-theory-mixed-up)
- Secondary figures conflict. One source reports an optimum of about 62/38 after the update, and others cite 55:45 (1998-2010 data) or 76:24 for for-profit brands (2004-16). A low-authority page lists online brands at 62/38, FMCG 60/40 and B2B 54/46. None of these could be verified against the IPA original — [aliyar substack](https://aliyar.substack.com/p/how-to-spend-your-marketing-budget); [skills.sh page](https://www.skills.sh/iclaudioo/marketing-science-skills/marketing-budget)
- Critique: practitioners argue that the industry confuses tools (channels) with theory (brand vs activation) and misapplies 60:40 as a channel split — [AdNews opinion](https://adnews.com.au/opinion/not-seeing-the-forest-though-the-trees-is-the-industry-getting-its-tools-and-theory-mixed-up); [Alex Murrell: Advertising's master model](https://www.alexmurrell.co.uk/articles/advertisings-master-model)

### Inferences
- The Spiffy Patch: build CEPs around specific moments, such as the "pimple before a date or photo", "under a mask or helmet", or "overnight". The cat-mood character and colours can serve as distinctive assets, but test them for fame and uniqueness before spending behind them.
- Linee: oral care is a high-penetration, low-involvement category where Double Jeopardy applies directly. Growth comes from reach and shelf presence (7-Eleven and modern trade) more than from loyalty programmes.
- Loom by Linee (premium, quiet): lean more toward brand-building. A small brand in a crowded category needs fame before activation works efficiently.
- Most Moonshot spend is marketplace and TikTok Shop activation. The council should explicitly ring-fence a reach and brand line in each SBU budget and judge it on longer windows, not on 7-day ROAS.

### Gaps
- I did not reach primary Ehrenberg-Bass or IPA sources; findings come from secondary summaries.
- No source verified a Binet & Field split specific to e-commerce-dominant or social-commerce categories in Asia.
- No published Ehrenberg-Bass data specific to Thailand was found.

## 3. Thai media landscape 2025-2026

### Takeaway
Thai digital ad spend is flat to shrinking: the DAAT early-2026 forecast was -0.3%, the first decline in 14 years, revised in October 2026 to +0.3% at about THB 32.3bn. TikTok (about 24%) has nearly caught Meta (about 25%). Display, YouTube and LINE are declining; social and e-commerce/retail media are growing. GMV Max became the only TikTok Shop Ads campaign type from July 2025.

### Cited Findings
**Total and digital ad spend**
- MAAT forecast total 2025 Thai ad spend at THB 122,885m (+3.9% vs 2024), with media inflation of 7%. It forecast TV down about 4.5% (THB 53,049m to 50,661m), newspapers down 20% and cinema up 10% — [Marketeer (TH)](https://marketeeronline.co/archives/404322)
- Actual 2025: the Thai advertising industry contracted 1.63%, but digital "outperformed expectations" (Nation Thailand, Nov 2025) — [Nation Thailand](https://www.nationthailand.com/business/corporate/40058492)
- DAAT: 2024 digital ad spend grew 8% to THB 34.5bn. The March 2025 forecast was +10% to about THB 35bn — [Bangkok Post](https://www.bangkokpost.com/business/general/2989101/digital-ad-spending-in-thailand-to-rise-10-); [The Investor](https://theinvestor.vn/thailands-digital-ad-spending-predicted-to-grow-10-in-2025-d15060.html)
- DAAT/Kantar mid-year 2025 (33 agencies) cut the 2025 forecast to +5%, "lowest on record outside Covid", reported as THB 33.105bn. Kantar cited negative inflation and low consumer confidence. Projected shares: Meta 26% (down from 28% in 2024), TikTok 16% overtaking YouTube 15%. Skincare was the top industry at THB 5.249bn. Verify: THB 33.1bn at +5% does not reconcile with a THB 34.5bn 2024 base, which suggests the base was restated — [Nation Thailand](https://www.nationthailand.com/business/economy/40054053); [DAAT Mid-Year 2025 PDF](https://daat.in.th/wp-content/uploads/2025/09/DAAT-Mid-Year-2025-Press-Report-Final.pdf); [DAAT industry data](https://daat.in.th/industry-data/)
- DAAT 2026 forecast (early 2026): -0.3%, the first decline in the survey's 14 years. Cited pressures include the economy, war, politics and AI disruption — [Marketing Oops (TH)](https://www.marketingoops.com/reports/daat-thailand-digital-advertising-spend-2025-2026/)
- DAAT/Kantar revised 2026 forecast (Oct 2026): +0.3% to about THB 32,339m. Meta 25% (THB 8,157m, -4%); TikTok 24% (THB 7,779m, +16%). Display, online video, YouTube and LINE are forecast to fall, while social and e-commerce grow fastest. Verify against the DAAT PDF — [Relevant Audience](https://www.relevantaudience.com/digital-marketing-en/daat-kantar-thailand-digital-ad-spend-2026-revised-forecast/)

**Platform reach and usage**
- January 2025: 51.0m social media user identities, 71.1% of the population (DataReportal Digital 2025 Thailand). Average daily social media time is 2h32m — [DataReportal](https://datareportal.com/reports/digital-2025-thailand); [Meltwater](https://www.meltwater.com/en/blog/social-media-statistics-thailand)
- Platform figures, all secondary: LINE about 56m MAU; YouTube 47.6m users (72.8% of internet users); TikTok 56.6m ad-reachable accounts (DataReportal 2024 gave 44.3m). Thai TikTok usage ranks first in Asia and second globally — [ThaiPR](https://www.thaipr.net/?p=3673916); [Asia News Network](https://asianews.network/thai-users-top-asia-rank-2nd-globally-for-tiktok-use-southeast-asia-platforms-largest-ad-viewer-base-report/)
- YouGov weekly use: LINE 86%, Facebook 84%, YouTube 78% — [YouGov](https://yougov.com/articles/23169-thais-spend-over-quarter-their-day-social-media)

**E-commerce and retail media**
- SEA platform e-commerce GMV was US$128.4bn in 2024 (+12%). Thailand was among the fastest-growing markets at +21.7%. Shopee had about 52% of regional GMV (53% in another source); Lazada stabilised and reached positive EBITDA — [Momentum Works](https://thelowdown.momentum.asia/press-release-southeast-asias-platform-ecommerce-gmv-reaches-us128-4b-top-3-platforms-increase-market-share-to-84-momentum-works/)
- SEA 2025: e-commerce GMV of US$157.6bn (headline) and about US$185.5bn including non-platform channels. TikTok Shop plus Tokopedia more than doubled GMV, reaching 65.7% of Shopee's. Shopee, Lazada and TikTok Shop held more than 98.8% of platform GMV — [DealStreetAsia](https://www.dealstreetasia.com/stories/momentum-works-report-2025-479044)
- Thailand ranking: Shopee first, TikTok Shop second, Lazada third. No reliable share percentages were found, and the ECDB category pages contradict each other. Lazada Thailand is described as pursuing a premium, higher-AOV strategy — [ECDB](https://ecdb.com/resources/sample-data/market/th/all); [Momentum Works via DealStreetAsia](https://www.dealstreetasia.com/stories/momentum-works-report-2025-479044)
- TikTok: from July 2025, GMV Max is the default and only supported campaign type for TikTok Shop Ads, in Thai as well as English help pages. Legacy LIVE, Product and Video Shopping Ads can no longer be created; existing ones run until sunset. Product Shopping Ads are available in Thailand — [TikTok Ads Help](https://ads.tiktok.com/help/article/faqs-for-product-shopping-ads?lang=en); [TikTok Help (TH)](https://ads.tiktok.com/resources/help/article/set-up-tiktok-shopping?lang=th); [TikTok GMV Max PDF](https://ads.tiktok.com/business/library/TikTok_GMV_Max.pdf); [Influencer Marketing Hub](https://influencermarketinghub.com/?p=223252)

### Inferences
- The market is shrinking and fragmenting, so efficiency gains must come from mix and creative, not from rising budgets. TikTok's share gain and LINE and YouTube's decline (as forecasts) suggest default allocation toward Meta plus TikTok, with LINE OA kept for CRM rather than paid reach.
- Skincare being Thailand's largest digital ad category means The Spiffy Patch competes in the most cluttered auction. This argues for distinctive assets and creator-led content over generic product ads.
- GMV Max automates bidding and creative selection, so TikTok-reported ROAS will blend organic and affiliate sales. Run periodic on/off or budget-step tests to estimate its true increment.

### Gaps
- No reliable Thailand CPM ranges for Meta, TikTok, YouTube or LINE from a 2025-2026 primary source. Do not quote CPMs without the account's own data or a dated agency rate card.
- No Thailand-specific platform GMV shares from Momentum Works; that breakdown is in a paid report.
- No 2025 Nielsen Thailand channel breakdown was found. The Nation article's digital growth rate could not be read.
- No public data on Shopee or Lazada retail-media ad revenue in Thailand.

## 4. Creative strategy: volume, testing cadence, UGC/AI creative, hook rates, fatigue

### Takeaway
Since Meta's Andromeda retrieval update in 2025, creative diversity across concept, persona and format drives delivery. Text-overlay variants count as near-duplicates. No authoritative hook-rate or fatigue benchmark exists publicly, so build internal baselines.

### Cited Findings
- Andromeda is Meta's first-stage retrieval system. Single-hook strategies with minor variations reportedly stopped performing in 2025 — [academia.edu guide](https://www.academia.edu/144136338/Metas_Andromeda_Algorithm_and_Creative_Diversification_Best_Practice_Guide); [1800DTC](https://1800dtc.com/reads/agency-insights-what-metas-andromeda-update-actually-changed-and-how-were-adapting-our-ads)
- Meta's visual recognition reportedly treats creatives that differ only in text overlays as essentially the same ad — [superads.ai](https://superads.ai/blog/creative-diversity-in-ads)
- Agency practice: track performance by concept, persona and format, looking at CTR, hook rate and hold rate across concepts rather than per ad — [1800DTC](https://1800dtc.com/resources/reads/agency-insights-what-metas-andromeda-update-actually-changed-and-how-were-adapting-our-ads)
- An "about 45% conversion drop after four exposures" fatigue figure circulates, but its origin is unverified. Meta's "11% higher CTR / 7.6% higher CVR" figure relates to generative-AI features, not to creative diversity — [superads.ai](https://superads.ai/blog/creative-diversity-in-ads); [novoads.ai](https://novoads.ai/blog/creative-diversity-meta-ads); [Motion](https://motionapp.com/blog/andromeda-impact-on-bfcm)

### Inferences
- For The Spiffy Patch, physical demos (before/after overnight, patch "pulling" gunk, invisible-on-skin tests) are structurally different concepts. Cat-mood skits, creator UGC and AI-assisted variants count as further concept and persona axes. Aim for genuinely different concepts each test cycle rather than variants of one hook.
- Under FDA Thailand cosmetic claim rules, before/after demos need claim substantiation. Coordinate with the regulatory seat.

### Gaps
- No credible public hook-rate (3-second view / impressions) benchmarks for Thailand or for beauty.
- No sourced case studies of top SEA DTC beauty brands' creative cadence (for example Skintific, Focallure, Thai indie brands). Not found in this session.
- No source on TikTok Thailand creative best practice for 2025-2026.

## 5. Offline and events: Thai beauty retail, sampling and measuring offline lift

### Takeaway
Watsons (Central Watson JV) is the dominant Thai health and beauty chain. Current 2025-2026 store counts and the status of Boots Thailand could not be verified. Offline lift should be measured with matched-store or geo holdouts plus marketplace search and brand-term lift.

### Cited Findings
- Central Watson is a joint venture between Central Group and A.S. Watson. Historical reports describe Watsons outnumbering Boots (an undated report cites 381 planned Watsons stores vs 230 Boots) — [Inside Retail Asia](https://insideretail.asia/?p=11761); [Marketeer (TH)](https://marketeeronline.co/archives/106963)
- Eveandboy is a Thai beauty multi-brand chain known for its broad assortment and frequent promotions; the store count in that source is dated — [Cosmenet (TH)](https://www.cosmenet.in.th/cosme-intrend/20228); [Dcard](https://www.dcard.tw/f/tailand_travel/p/260565352)
- The 2025 Boots closure news found concerns about 200 UK stores, not Thailand — [Brand Inside (TH)](https://brandinside.asia/?p=55888)

### Inferences
- Every event or pop-up should pre-register an attribution plan: (a) unique codes or QR to LINE OA or D2C; (b) Shopee and TikTok Shop brand-search and store-visit uplift in the event's geography and time window vs a control period; (c) matched-store sell-out comparison for retail activations; (d) cost per sample vs CAC benchmark.

### Gaps
- Could not verify whether Boots Thailand is exiting or shrinking in 2025-2026. The brief's "Boots-exit" premise is unconfirmed by this search; check Thai business press.
- No 2025-2026 store counts for Watsons, Eveandboy, Beautrium or Konvy.
- No sourced Thai sampling-ROI or 7-Eleven in-store media benchmarks.

## 6. Character licensing marketing (Monchhichi, art toys, collabs)

### Takeaway
Monchhichi is riding the Labubu-led bag-charm and nostalgia wave: licensor Sekiguchi reported sales doubling to about US$31m in the year to Feb 2025. Pop Mart's playbook of collabs, drops and blind boxes is the reference model. No Thai-specific licensing data was found.

### Cited Findings
- Monchhichi (created by Sekiguchi in 1974) is being remarketed as a retro, Gen Z accessory. Sales doubled to about US$31m in the year ending Feb 2025, international sales were about 40% of revenue, and the president aims to "flood the world" with Monchhichi. These figures come via a Greek news source; verify against Sekiguchi — [Parapolitika](https://www.parapolitika.gr/stories/article/1607467/xehaste-ta-labubu-ta-monchhichi-erhodai-gia-revans-ta-iaponika-kouklakia-pou-klevoun-ti-skini/)
- Monchhichi is framed as the "ancestor" of Labubu; both are treated as status symbols and nostalgia triggers — [Fashion Tingz](https://fashiontingz.substack.com/p/labubu-monchhichi-and-the-cult-of); [Wunderweib](https://www.wunderweib.de/monchichi-revival-die-vorfahren-der-labubus-jetzt-zu-prime-deal-days-preisen-sichern-129531.html)
- Pop Mart collab cadence: Monsters x One Piece (28 Feb 2025) and a Disney Mickey & Friends keychain series in the same month. Pop Mart operates stores in Thailand — [Blind Box Daily](https://blindboxdaily.substack.com/p/upcoming-pop-mart-releases-in-2025); [ARY News](https://arynews.tv/labubu-doll-viral-phenomenon-2025)
- Commentary in 2026 describes the Labubu hype as "over", with a race for a successor — [nss magazine](https://www.nssmag.com/de/fashion/43899/wer-wird-labubus-2026-ersetzen)

### Inferences
- Treat Monchhichi as a time-sensitive trend asset. Use drops, limited runs and Thai-exclusive designs, and gate them within licence scope (approved SKUs, territories, channels, artwork approvals, minimum guarantees). Since the art-toy hype is cooling into 2026, avoid deep inventory commitments.
- Licence guardrails, such as approval lead times, may limit fast-reacting UGC and AI creative. Pre-approve a creative template bank with the licensor.

### Gaps
- No sourced Thai market data on Sanrio, Line Friends or Monchhichi collabs, licensing royalty norms, or drop sell-through.
- No primary Sekiguchi financial disclosure was retrieved.

## 7. Chinese tourist and Chinese-speaking consumer marketing in Thailand

### Takeaway
Chinese arrivals to Thailand fell about 30% in 2025: total foreign arrivals were 32.97m, down 7.2%. RED (Xiaohongshu) remains the key discovery and search platform for Chinese travellers, so Chinese-consumer marketing should be smaller, search-led and measured, not a growth pillar.

### Cited Findings
- 2025 foreign arrivals fell 7.2% to 32.97m, the first decline in four years. Chinese arrivals were down about 30%. Reasons cited: the January 2025 Chinese actor kidnapping incident (the main one), the strong baht, the Thailand-Cambodia border clash and floods. Thai tourism remains 20% below its 2019 peak — [Skift (Jan 2026)](https://dlr.skift.com/2026/01/20/thai-tourism-is-20-below-its-2019-peak/)
- East Asian arrivals were down 24.81% through early July 2025. ForwardKeys projected Chinese seat capacity to Thailand down 25% YoY in 3Q25 — [Vietnam News](https://vietnamnews.vn/world/1722763/thailand-struggles-to-revive-tourism-amid-sharp-drop-in-chinese-visitors.html); [AGB / asgam](https://asgam.com/2025/09/01/chinese-visitation-air-capacity-to-thailand-are-continuing-to-fall-in-3q25/)
- Chinese arrivals hit a record low since the visa waiver, prompting recovery proposals — [Pattaya Mail](https://www.pattayamail.com/latestnews/news/chinese-tourist-arrivals-in-thailand-hit-record-low-since-visa-waiver-prompting-urgent-recovery-proposals-499580)
- Xiaohongshu works as a go-to search platform for Chinese consumers' travel, restaurant and shopping discovery. A Chulalongkorn thesis found that RED UGC mainly lifts purchase and travel intention (behavioural) rather than cognition or emotion — [SDA](https://www.sda.edu.sg/?p=16819); [Chula ETD](https://digital.car.chula.ac.th/chulaetd/11244)
- Thai creator agency The Lemon Shot partnered with Xiaohongshu to help Thai brands reach Chinese consumers. TAT partnered with Tencent, WeTV and Sichuan TV in January 2026 — [Marketing Oops (TH)](https://www.marketingoops.com/?p=349266); [Skift](https://dlr.skift.com/2026/01/20/thai-tourism-is-20-below-its-2019-peak/)
- International brands that repost Western content on Xiaohongshu typically see low engagement — [VnEconomy](https://vneconomy.vn/thuong-hieu-quoc-te-dung-mang-xa-hoi-de-thu-hut-nguoi-tieu-dung-trung-quoc.htm)

### Inferences
- With fewer Chinese visitors, the better-value target may be Chinese-speaking residents, expats and repeat FIT travellers, plus seeded RED "Bangkok must-buy" notes tied to the retail locations where stock is held (Watsons, Eveandboy, airport stores). Measure by store-level sell-out in tourist zones, not by RED engagement.
- Tmall Global or Douyin cross-border is a separate export decision. It needs FDA/NMPA-related regulatory and logistics investment, so do not frame it as a marketing test.

### Gaps
- No 2025-2026 data on Thai beauty brands' Xiaohongshu ROI, Douyin cross-border, or Tmall Global performance.
- No 2026 year-to-date Chinese arrival figures were found.
