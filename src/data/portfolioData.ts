export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
  impactMetric: string;
}

export interface ToolItem {
  name: string;
  category: 'platforms' | 'analytics' | 'creative' | 'ai';
  categoryLabel: string;
  role: string;
  proficiency: string;
  practicalApplication: string;
}

export interface TroubleshootingCase {
  id: string;
  code: string;
  title: string;
  symptom: string;
  rootCause: string;
  resolutionTime: string;
  steps: string[];
  flatFileNote: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'account-ops',
    number: '01',
    title: 'End-to-End Account Management',
    summary: 'Full-spectrum daily store oversight covering FBA/FBM fulfillment workflows, inventory replenishment velocity, and account health compliance.',
    deliverables: [
      'Proactive Account Health monitoring (ODR, LSR, VTR kept at 0%)',
      'FBA shipment creation, box labels, and inventory replenishment forecasting',
      'Stranded & unfulfillable inventory prevention and resolution',
      'Daily listing audit for unauthorized price changes or buy box suppression',
    ],
    impactMetric: '0% Account Health Defects · 99.8% Buy Box Retention',
  },
  {
    id: 'listing-seo',
    number: '02',
    title: 'Listing Optimization & SEO',
    summary: 'Data-driven algorithmic optimization designed for Amazon A10 indexing. Replacing guesswork with keyword frequency, relevancy, and organic velocity.',
    deliverables: [
      'Keyword discovery with Helium 10 Cerebro & Magnet',
      'A10-optimized title architecture balancing search volume and click-through',
      '5 benefit-driven bullet points formatted for customer objection handling',
      'Backend search terms packed to the exact 249-byte limit without duplication',
    ],
    impactMetric: '+185% Indexed High-Volume Keywords · 2.4x Organic Lift',
  },
  {
    id: 'aplus-content',
    number: '03',
    title: 'A+ Content, EBC & Product Visuals',
    summary: 'High-converting listing graphics and Brand Stores that do more than look pretty—they educate, build trust, answer buyer doubts, and boost CVR.',
    deliverables: [
      'Conversion-centered infographic modules and feature breakdown cards',
      'Cross-selling comparison charts to lift Average Order Value (AOV)',
      'Custom Brand Store design and multi-page seasonal navigation',
      'Mobile-optimized graphic formatting for the 70%+ smartphone shoppers',
    ],
    impactMetric: 'Average 14% to 22% CVR Jump · Reduced Customer Returns',
  },
  {
    id: 'catalog-troubleshooting',
    number: '04',
    title: 'Catalog Management & Troubleshooting',
    summary: 'Specialized diagnostic resolutions for suppressed listings, split variations, error 5461/8572 codes, and stranded inventory using Category Flat Files.',
    deliverables: [
      'Category flat file upload via inventory loader and partial updates',
      'Restoration of broken parent-child variation themes (color/size)',
      'Brand Registry gating appeal and brand name attribute corrections',
      'Reactivation of search-suppressed listings due to missing image/data',
    ],
    impactMetric: '< 24hr Average Resolution · Zero Lost Revenue Days',
  },
  {
    id: 'product-research',
    number: '05',
    title: 'Product Research & Performance Analysis',
    summary: 'Deep-dive competitive forensics examining pricing elasticity, Keepa sales rank history, SellerAMP margins, and Amazon Brand Analytics search query data.',
    deliverables: [
      'Keepa historical rank, BSR, and buy box stability audits',
      'SellerAMP net profit, ROI, FBA fee, and margin sensitivity models',
      'Search Query Performance (SQP) gap analysis on Brand Analytics',
      'Competitor listing vulnerability and review sentiment breakdown',
    ],
    impactMetric: 'Clear Data-Driven Decisions · Zero Guesswork Launches',
  },
  {
    id: 'ppc-advertising',
    number: '06',
    title: 'Amazon PPC & Advertising Support',
    summary: 'Connecting advertising efficiency directly to listing quality. Search term harvesting, negative keyword pruning, and structured budget allocation to drop ACoS.',
    deliverables: [
      'Campaign restructuring across Sponsored Products, Brands, and Display',
      'Search term isolation (harvesting from Auto/Broad into Exact campaigns)',
      'Negative keyword maintenance to stop ad spend bleed on irrelevant clicks',
      'Holistic TACOS management to drive profitable organic halo effects',
    ],
    impactMetric: 'Average 38% to 21% ACoS Reduction · Scaling Top-Line TACOS',
  },
];

export const TOOLS_DATA: ToolItem[] = [
  {
    name: 'Amazon Seller Central',
    category: 'platforms',
    categoryLabel: 'Platforms & Operations',
    role: 'Primary Operating Hub',
    proficiency: 'Expert / Daily Driver',
    practicalApplication: 'FBA/FBM workflows, managing inventory, orders, customer service, performance metrics, and compliance.',
  },
  {
    name: 'Brand Registry & Stores',
    category: 'platforms',
    categoryLabel: 'Platforms & Operations',
    role: 'Brand Equity Management',
    proficiency: 'Advanced',
    practicalApplication: 'Building Brand Stores, managing brand protection, IP complaints, and unlocking premium A+ content assets.',
  },
  {
    name: 'Bulk Flat Files (.xlsm/tsv)',
    category: 'platforms',
    categoryLabel: 'Platforms & Operations',
    role: 'Catalog Feeds & Overrides',
    proficiency: 'Expert',
    practicalApplication: 'Using Category Flat Files to build complex variations, perform partial-update bulk edits, and resolve listing suppression.',
  },
  {
    name: 'A+ Content / EBC Manager',
    category: 'platforms',
    categoryLabel: 'Platforms & Operations',
    role: 'Listing Merchandising',
    proficiency: 'Expert',
    practicalApplication: 'Assembling high-converting comparison tables, lifestyle modules, and responsive graphic carousels.',
  },
  {
    name: 'Helium 10',
    category: 'analytics',
    categoryLabel: 'SEO, Research & Analytics',
    role: 'Cerebro, Magnet, Frankenstein, Scribbles',
    proficiency: 'Mastery',
    practicalApplication: 'Reverse ASIN competitor audits, high-intent keyword harvesting, search volume ranking, and index checking.',
  },
  {
    name: 'Jungle Scout',
    category: 'analytics',
    categoryLabel: 'SEO, Research & Analytics',
    role: 'Opportunity Finder & Sales Estimator',
    proficiency: 'Advanced',
    practicalApplication: 'Validating niche demand, estimating competitor unit sales velocity, and verifying seasonal trends.',
  },
  {
    name: 'Keepa',
    category: 'analytics',
    categoryLabel: 'SEO, Research & Analytics',
    role: 'Price & Sales Rank Tracking',
    proficiency: 'Mastery',
    practicalApplication: 'Analyzing historical BSR trends, price fluctuations, out-of-stock frequency, and Buy Box distribution over 365 days.',
  },
  {
    name: 'SellerAMP SAS',
    category: 'analytics',
    categoryLabel: 'SEO, Research & Analytics',
    role: 'Margin & Profitability Modeling',
    proficiency: 'Advanced',
    practicalApplication: 'Instant calculations of FBA referral fees, storage fees, break-even sell price, and return on investment (ROI).',
  },
  {
    name: 'Amazon Brand Analytics',
    category: 'analytics',
    categoryLabel: 'SEO, Research & Analytics',
    role: 'First-Party Shopper Insights',
    proficiency: 'Advanced',
    practicalApplication: 'Analyzing Search Query Performance (SQP), Search Frequency Rank (SFR), and top-3 clicked ASIN market share.',
  },
  {
    name: 'Amazon Advertising Console',
    category: 'analytics',
    categoryLabel: 'SEO, Research & Analytics',
    role: 'PPC Campaign Management',
    proficiency: 'Advanced',
    practicalApplication: 'Monitoring Sponsored Products, Sponsored Brands, Sponsored Display, placement bid adjustments, and daily pacing.',
  },
  {
    name: 'Google Analytics & Search Console',
    category: 'analytics',
    categoryLabel: 'SEO, Research & Analytics',
    role: 'External Traffic Tracking',
    proficiency: 'Proficient',
    practicalApplication: 'Measuring external attribution tags (Amazon Attribution) and brand search interest outside the marketplace.',
  },
  {
    name: 'Adobe Photoshop & Illustrator',
    category: 'creative',
    categoryLabel: 'Creative & Reporting',
    role: 'Graphic Production & Vector Assets',
    proficiency: 'Advanced',
    practicalApplication: 'Designing crisp infographic callouts, dimension overlays, badge icons, and high-retention A+ content panels.',
  },
  {
    name: 'Canva Pro',
    category: 'creative',
    categoryLabel: 'Creative & Reporting',
    role: 'Rapid Creative Iteration',
    proficiency: 'Advanced',
    practicalApplication: 'Fast turnaround on secondary image decks, brand guideline alignment, and social/Amazon post graphics.',
  },
  {
    name: 'Microsoft Excel & Google Sheets',
    category: 'creative',
    categoryLabel: 'Creative & Reporting',
    role: 'Data Wrangling & VLOOKUP',
    proficiency: 'Expert',
    practicalApplication: 'Building custom weekly executive scorecards, flat-file macro preparations, pivot tables, and search term audit sheets.',
  },
  {
    name: 'Gemini & ChatGPT',
    category: 'ai',
    categoryLabel: 'AI & Automation Acceleration',
    role: 'Copy Ideation & Regex Scripts',
    proficiency: 'Advanced',
    practicalApplication: 'Synthesizing competitor customer reviews for buyer objections, drafting benefit bullet variants, and speeding bulk title drafts.',
  },
  {
    name: 'Slack & Zoom',
    category: 'creative',
    categoryLabel: 'Communication & Operations',
    role: 'Client Sync & Transparent Comms',
    proficiency: 'Daily Driver',
    practicalApplication: 'Asynchronous updates, video walkthroughs of audit findings, and rapid responses to store emergencies.',
  },
];

export const TROUBLESHOOTING_CASES: TroubleshootingCase[] = [
  {
    id: 'case-suppressed',
    code: 'ERR-8001',
    title: 'Search Suppressed Product Listing',
    symptom: 'ASIN suddenly vanishes from Amazon search results. Revenue drops to zero overnight while inventory remains active.',
    rootCause: 'Missing required mandatory catalog attribute (e.g., department, material, color, or main image non-compliant with pure white RGB 255/255/255 background).',
    resolutionTime: 'Resolved in 2–4 hours',
    steps: [
      'Download Category Specific Inventory Report (CSIR) to pinpoint the exact missing schema field.',
      'Check Seller Central Fix Your Products tool for specific attribute flags.',
      'Prepare Category Flat File with partial_update command for that ASIN.',
      'Upload feed via Inventory > Add Products via Upload and verify feed batch processing ID.',
    ],
    flatFileNote: 'Use Feed Type: POST_FLAT_FILE_INVLOADER or specific category XSD with update_delete = PartialUpdate to avoid wiping existing listing attributes.',
  },
  {
    id: 'case-broken-variation',
    code: 'ERR-8541',
    title: 'Broken Variation Theme & Split Parent/Child',
    symptom: 'Children ASINs detached into standalone listings; reviews split across individual pages; customer variation selector dropdowns disappear.',
    rootCause: 'Variation theme mismatch (e.g. SizeName vs Size-Color) or parent SKU deleted during inventory feed error.',
    resolutionTime: 'Resolved in 4–8 hours',
    steps: [
      'Audit existing parent and child ASIN attributes and review counts.',
      'Create a brand new clean Parent SKU in the proper category flat file template.',
      'Assign relationship_type = Variation and parent_sku correctly for each child.',
      'Define parent_child = Parent for the wrapper, and parent_child = Child for all variants with identical variation_theme.',
      'Submit upload. If error 8541 triggers due to Amazon cached catalog values, open brand registry case referencing feed submission ID.',
    ],
    flatFileNote: 'Never delete children SKUs. Only rebuild or re-link the Parent SKU to preserve sales velocity and pooled customer reviews.',
  },
  {
    id: 'case-stranded-fba',
    code: 'ERR-FBA-02',
    title: 'Stranded FBA Inventory (Listing Error / Inactive)',
    symptom: 'Hundreds of units sitting in fulfillment centers marked as "Stranded Inventory", accruing storage fees while unavailable for purchase.',
    rootCause: 'Fulfillable SKU disconnected from ASIN catalog page, price set below minimum threshold, or fulfillment channel set to FBM instead of FBA.',
    resolutionTime: 'Resolved in 1–3 hours',
    steps: [
      'Navigate to Fix Stranded Inventory in Seller Central.',
      'Identify stranded reason (e.g., Listing Error, Deleted SKU, Qualification Required).',
      'Re-create exact matching MSKU with identical barcode and condition.',
      'Switch fulfillment channel to "Fulfilled by Amazon" via bulk file or item edit.',
      'Verify stranded state clears and inventory shows active in Buy Box.',
    ],
    flatFileNote: 'Matching the exact MSKU (Merchant SKU) is critical to link the physical FNSKU barcode in fulfillment centers back to the digital offer.',
  },
  {
    id: 'case-brand-gating',
    code: 'ERR-5461',
    title: 'Catalog Authorization & Error 5461/8572',
    symptom: 'Seller Central blocks listing creation: "You may not create new ASINs for this brand name without prior authorization (Error 5461)".',
    rootCause: 'Brand Registry brand name attribute mismatch or UPC/GTIN not matching GS1 company database records.',
    resolutionTime: 'Resolved in 24–48 hours',
    steps: [
      'Confirm GS1 certificate matches the legal manufacturer entity name.',
      'Capture real-world product packaging photos showing brand name permanently affixed (front, back, barcode).',
      'Submit Brand Qualification application through Seller Central Catalog team.',
      'Track case with Seller Support using exact catalog exemption documentation.',
    ],
    flatFileNote: 'Providing GS1 certificate alongside high-resolution unboxing photos resolves 95% of Error 5461 rejections on the first review cycle.',
  },
];

export const LISTING_DEMO_BEFORE_AFTER = {
  product: {
    category: 'Kitchen & Dining / Coffee Bar Accessories',
    brand: 'AromaCraft Co.',
    asin: 'B09X87K2L1',
  },
  before: {
    title: 'AromaCraft Manual Coffee Grinder with Ceramic Burr and Hand Crank Portable',
    titleCharCount: 76,
    indexedKeywords: 41,
    organicRankAvg: '#48 on main keywords',
    cvr: '7.8%',
    bullets: [
      'Good coffee grinder for home use and traveling.',
      'Has ceramic burrs that grind beans into powder.',
      'Stainless steel body with comfortable handle.',
      'Easy to adjust the grind size with the dial.',
      'Customer satisfaction guaranteed by our store.',
    ],
    backendTerms: 'coffee grinder manual burr portable travel hand crank',
    backendBytes: 54,
    defects: [
      'Wastes 124 characters of title real estate',
      'Zero search volume for Spanish or synonym terms (molinillo, espresso, french press)',
      'Bullets focus on specs instead of customer transformation and bean flavor preservation',
      'Backend search terms duplicate title words (Amazon ignores duplicate keywords)',
    ],
  },
  after: {
    title: 'Manual Coffee Grinder with Dual Ceramic Conical Burrs - Portable Stainless Steel Hand Crank Coffee Bean Mill for Espresso, Pour Over, French Press & Aeropress - Compact Travel Bag Included',
    titleCharCount: 194,
    indexedKeywords: 168,
    organicRankAvg: '#3 - #7 on top 12 keywords',
    cvr: '19.4%',
    bullets: [
      'PRECISE MULTI-STAGE GRIND CONSISTENCY: Equipped with dual 40mm conical ceramic burrs that prevent heat transfer, locking in the natural aromatic oils of your specialty beans without bitter scorching.',
      '6 PRE-CALIBRATED CLICK SETTINGS: Effortlessly switch from ultra-fine espresso and Moka pot to medium pour-over (V60, Chemex) and coarse French press or cold brew with audible micro-click dial tactile feedback.',
      'WHISPER-QUIET ERGONOMIC CRANK: Heavy-duty stainless steel handle with dual ball-bearing stabilizers eliminates shaft wobbling, delivering smooth 35-second grinding without waking family or colleagues.',
      'AIRTIGHT TRAVEL-READY DESIGN: Aircraft-grade brushed stainless steel canister holds up to 35g of whole beans (enough for 3 full mugs); compact silhouette slips into hiking packs, campers, or office drawers.',
      'COMPLETE COFFEE ENTHUSIAST BUNDLE: Includes padded velvet travel pouch, nylon cleaning brush, and illustrated grind-size brew recipe guide. Backed by our 3-year manufacturer guarantee.',
    ],
    backendTerms: 'molino molinillo grano cafe camping hiker gear v60 chemex aeropress barista gift coldbrew mini portable quiet conical burr mill small',
    backendBytes: 246,
    highlights: [
      'Expanded to 194 characters capturing 14 primary long-tail search intents',
      'Indexed 127 additional buyer keywords including Spanish terms & brew methods',
      'High-converting bullet structure: Benefit Hook + Proof + Technical Detail',
      'Deduplicated 246-byte backend search term field capturing untapped niche search queries',
      'Conversion Rate jumped from 7.8% to 19.4% (+148% organic velocity)',
    ],
  },
};
