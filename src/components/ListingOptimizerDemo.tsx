import React, { useState } from 'react';
import { LISTING_DEMO_BEFORE_AFTER } from '../data/portfolioData';
import { 
  Check, 
  AlertTriangle, 
  Sparkles, 
  Search, 
  ArrowRight, 
  Maximize2,
  TrendingUp,
  FileText,
  KeyRound,
  Image as ImageIcon
} from 'lucide-react';

export const ListingOptimizerDemo: React.FC = () => {
  const [viewState, setViewState] = useState<'after' | 'before'>('after');
  const [activeTab, setActiveTab] = useState<'title' | 'bullets' | 'backend' | 'performance'>('title');
  const [keywordQuery, setKeywordQuery] = useState('');

  const data = LISTING_DEMO_BEFORE_AFTER;
  const current = viewState === 'after' ? data.after : data.before;

  // Keyword tester simulation
  const testKeywords = [
    { term: 'manual coffee grinder', indexedBefore: true, indexedAfter: true, rankBefore: '#48', rankAfter: '#3' },
    { term: 'conical ceramic burr', indexedBefore: true, indexedAfter: true, rankBefore: '#56', rankAfter: '#5' },
    { term: 'espresso hand grinder', indexedBefore: false, indexedAfter: true, rankBefore: 'Unindexed', rankAfter: '#7' },
    { term: 'molinillo de cafe manual', indexedBefore: false, indexedAfter: true, rankBefore: 'Unindexed', rankAfter: '#4' },
    { term: 'aeropress coffee mill', indexedBefore: false, indexedAfter: true, rankBefore: 'Unindexed', rankAfter: '#6' },
    { term: 'travel camping bean grinder', indexedBefore: false, indexedAfter: true, rankBefore: 'Unindexed', rankAfter: '#8' },
  ];

  const filteredKeywords = testKeywords.filter(k => 
    k.term.toLowerCase().includes(keywordQuery.toLowerCase())
  );

  return (
    <section id="optimizer-demo" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Interactive Diagnostic Showcase
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Before vs. After: Listing SEO & Conversion Engineering
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Poor visibility and weak copy bleed ad spend. Toggle below to inspect how I reconstruct Amazon listing architecture—from A10 keyword indexation to objection-crushing bullet points and backend search terms.
          </p>
        </div>

        {/* Main Interactive Demo Container */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Top Control Bar: Product Context & State Toggle */}
          <div className="p-4 sm:p-6 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-950/60">
            <div>
              <div className="text-xs text-slate-400">
                <span>{data.product.category}</span>
                <span className="mx-2 text-slate-600">·</span>
                <span className="font-mono text-slate-300">ASIN: {data.product.asin}</span>
              </div>
              <div className="text-base font-semibold text-white mt-0.5">
                {data.product.brand} · Flagship SKU
              </div>
            </div>

            {/* Interactive State Toggle (Segmented control button, not static pills) */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start md:self-auto">
              <button
                type="button"
                onClick={() => setViewState('before')}
                className={`px-4 py-2 text-xs font-medium rounded-md transition-all cursor-pointer ${
                  viewState === 'before'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Before Optimization
              </button>
              <button
                type="button"
                onClick={() => setViewState('after')}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  viewState === 'after'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                After Zyrel’s Optimization
              </button>
            </div>
          </div>

          {/* Key Metric Highlights Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 bg-slate-900/40 border-b border-slate-800/80">
            <div>
              <div className="text-xs text-slate-400 mb-1">Title Character Usage</div>
              <div className="text-xl font-bold font-mono tabular-nums text-white flex items-center gap-1.5">
                <span>{current.titleCharCount} / 200</span>
                {viewState === 'after' ? (
                  <span className="text-xs text-emerald-400 font-sans font-medium">(97% utilized)</span>
                ) : (
                  <span className="text-xs text-rose-400 font-sans font-medium">(wasted space)</span>
                )}
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-400 mb-1">Indexed Keyword Count</div>
              <div className="text-xl font-bold font-mono tabular-nums text-white">
                {current.indexedKeywords}
                <span className="text-xs text-slate-400 font-sans font-normal ml-1">keywords</span>
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-400 mb-1">Average Organic Rank</div>
              <div className={`text-xl font-bold font-mono tabular-nums ${viewState === 'after' ? 'text-emerald-400' : 'text-slate-400'}`}>
                {current.organicRankAvg}
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-400 mb-1">Unit Session Percentage (CVR)</div>
              <div className={`text-xl font-bold font-mono tabular-nums ${viewState === 'after' ? 'text-amber-400' : 'text-rose-400'}`}>
                {current.cvr}
              </div>
            </div>
          </div>

          {/* Tab Navigation for Listing Breakdown */}
          <div className="flex border-b border-slate-800 bg-slate-950/40 px-4 sm:px-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('title')}
              className={`py-3.5 px-4 text-xs font-semibold whitespace-nowrap border-b-2 cursor-pointer transition-colors ${
                activeTab === 'title' 
                  ? 'border-amber-400 text-white' 
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              1. Title Architecture
            </button>
            <button
              onClick={() => setActiveTab('bullets')}
              className={`py-3.5 px-4 text-xs font-semibold whitespace-nowrap border-b-2 cursor-pointer transition-colors ${
                activeTab === 'bullets' 
                  ? 'border-amber-400 text-white' 
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              2. 5 Benefit-Led Bullets
            </button>
            <button
              onClick={() => setActiveTab('backend')}
              className={`py-3.5 px-4 text-xs font-semibold whitespace-nowrap border-b-2 cursor-pointer transition-colors ${
                activeTab === 'backend' 
                  ? 'border-amber-400 text-white' 
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              3. Backend Search Terms (249 Bytes)
            </button>
            <button
              onClick={() => setActiveTab('performance')}
              className={`py-3.5 px-4 text-xs font-semibold whitespace-nowrap border-b-2 cursor-pointer transition-colors ${
                activeTab === 'performance' 
                  ? 'border-amber-400 text-white' 
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              4. Keyword Indexing Tester
            </button>
          </div>

          {/* Tab Contents */}
          <div className="p-4 sm:p-6 lg:p-8">
            
            {/* TAB 1: TITLE */}
            {activeTab === 'title' && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-slate-200">
                      Product Title ({current.titleCharCount} Characters)
                    </span>
                    <span className="font-mono text-slate-400">
                      Amazon Mobile Display Cutoff ~80 chars
                    </span>
                  </div>
                  <div className={`p-4 rounded-xl border text-sm sm:text-base leading-relaxed ${
                    viewState === 'after'
                      ? 'bg-amber-950/10 border-amber-500/30 text-slate-100 font-medium'
                      : 'bg-rose-950/10 border-rose-900/30 text-slate-300'
                  }`}>
                    {current.title}
                  </div>
                </div>

                {/* Analysis Notes */}
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
                  <div className="text-xs font-semibold text-slate-200 mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span>Zyrel’s Strategic Analysis</span>
                  </div>

                  {viewState === 'after' ? (
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>Front-Loaded Intent:</strong> &quot;Manual Coffee Grinder with Dual Ceramic Conical Burrs&quot; captures the primary search cluster before mobile truncate points.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>Use-Case Integration:</strong> Targets high-intent brew methods (Espresso, Pour Over, French Press, Aeropress) which directly triggers organic ranking on modifier keywords.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>Zero Keyword Stuffing:</strong> Maintains grammatical fluency, building consumer trust while hitting maximum search index density.</span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 text-xs text-slate-400">
                      <div className="flex items-start gap-2 text-rose-300">
                        <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span><strong>124 Unused Characters:</strong> Leaves over 60% of Amazon’s highest-weight indexing field empty.</span>
                      </div>
                      <div className="flex items-start gap-2 text-slate-400">
                        <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span><strong>Missed Buyer Modifiers:</strong> Omits key customer search triggers like &quot;Espresso&quot;, &quot;French Press&quot;, and &quot;Stainless Steel&quot;.</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 2: BULLETS */}
            {activeTab === 'bullets' && (
              <div className="space-y-4">
                <div className="text-xs font-semibold text-slate-300 mb-2">
                  Key Product Feature Bullets (5 Modules)
                </div>

                <div className="space-y-3">
                  {current.bullets.map((bullet, idx) => (
                    <div 
                      key={idx} 
                      className={`p-3.5 rounded-lg border text-xs sm:text-sm leading-relaxed ${
                        viewState === 'after'
                          ? 'bg-slate-950 border-slate-800 text-slate-200'
                          : 'bg-rose-950/10 border-rose-900/30 text-slate-400'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <span className={`w-5 h-5 rounded flex items-center justify-center text-[11px] font-mono shrink-0 mt-0.5 ${
                          viewState === 'after' ? 'bg-amber-400/20 text-amber-300' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {idx + 1}
                        </span>
                        <p className="flex-1">
                          {bullet}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300">
                  <span className="font-semibold text-amber-400">Zyrel’s Copy Formula:</span> Benefit Headline (in caps) + Tangible Sensory/Technical Detail + Customer Transformation + Objection Elimination.
                </div>
              </div>
            )}

            {/* TAB 3: BACKEND SEARCH TERMS */}
            {activeTab === 'backend' && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-slate-200">
                      Generic Keywords Field (Byte Counter)
                    </span>
                    <span className="font-mono text-slate-300">
                      {viewState === 'after' ? '246 / 249 bytes (Optimized)' : '54 / 249 bytes (Underutilized)'}
                    </span>
                  </div>

                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs sm:text-sm text-amber-300 break-words leading-relaxed">
                    {current.backendTerms}
                  </div>
                </div>

                {/* Rules breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-lg">
                    <div className="font-semibold text-white mb-1">No Duplication Waste</div>
                    <p className="text-slate-400">
                      Amazon ignores terms already in Title/Bullets. Zero duplicate words entered into backend fields.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-lg">
                    <div className="font-semibold text-white mb-1">Spanish & Synonyms</div>
                    <p className="text-slate-400">
                      Includes &quot;molino&quot;, &quot;molinillo&quot;, and &quot;cafe&quot; capturing the high-converting Hispanic buyer demographic.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-lg">
                    <div className="font-semibold text-white mb-1">Strict Byte Safety</div>
                    <p className="text-slate-400">
                      Kept strictly under 249 bytes. Exceeding 250 bytes causes Amazon to discard the entire field.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: KEYWORD INDEXING TESTER */}
            {activeTab === 'performance' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-white">Live Search Index & Ranking Simulator</h3>
                    <p className="text-xs text-slate-400">Filter keywords to compare organic indexing status Before vs After.</p>
                  </div>
                  
                  <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Filter test keywords..."
                      value={keywordQuery}
                      onChange={(e) => setKeywordQuery(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto border border-slate-800 rounded-xl">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950 border-b border-slate-800 text-slate-400 font-medium">
                      <tr>
                        <th className="py-3 px-4">Search Term</th>
                        <th className="py-3 px-4">Before Zyrel</th>
                        <th className="py-3 px-4">After Zyrel</th>
                        <th className="py-3 px-4">Organic Lift</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 bg-slate-900/60 font-mono">
                      {filteredKeywords.map((item, i) => (
                        <tr key={i} className="hover:bg-slate-800/40 transition-colors">
                          <td className="py-3 px-4 font-sans font-medium text-slate-200">
                            {item.term}
                          </td>
                          <td className="py-3 px-4">
                            <span className={item.indexedBefore ? 'text-slate-300' : 'text-rose-400'}>
                              {item.rankBefore}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              {item.rankAfter}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-emerald-400 font-semibold">
                            {item.indexedBefore ? 'Jumped 40+ positions' : 'Indexed + Page 1 Entry'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>Data verified through Helium 10 Index Checker & Amazon Search Frequency Rank analytics.</span>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
