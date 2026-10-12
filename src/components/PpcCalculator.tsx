import React, { useState } from 'react';
import { 
  Calculator, 
  DollarSign, 
  Percent, 
  TrendingDown, 
  TrendingUp, 
  Sparkles, 
  ArrowRight,
  ShieldAlert,
  Coins
} from 'lucide-react';

interface PpcCalculatorProps {
  onOpenAudit: () => void;
}

export const PpcCalculator: React.FC<PpcCalculatorProps> = ({ onOpenAudit }) => {
  const [adSpend, setAdSpend] = useState<number>(12000);
  const [currentAcos, setCurrentAcos] = useState<number>(38);
  const [targetAcos, setTargetAcos] = useState<number>(22);
  const [wastedBleedPct, setWastedBleedPct] = useState<number>(25);

  // Calculations
  const currentAdRevenue = currentAcos > 0 ? (adSpend / (currentAcos / 100)) : 0;
  
  // Wasted ad spend estimate (broad matches with zero orders, non-converting high-bid terms)
  const monthlyWastedSpend = adSpend * (wastedBleedPct / 100);
  const annualWastedSpend = monthlyWastedSpend * 12;

  // Optimized ad revenue at target ACoS with reallocated budget & negative keyword pruning
  const optimizedAdSpend = adSpend - (monthlyWastedSpend * 0.6); // Cut 60% of bleed, reinvest 40% into high-intent exact matches
  const projectedRevenueAtTarget = targetAcos > 0 ? (optimizedAdSpend / (targetAcos / 100)) : 0;
  const monthlyNetProfitGain = (projectedRevenueAtTarget - currentAdRevenue) * 0.28 + (adSpend - optimizedAdSpend);
  const annualNetProfitGain = monthlyNetProfitGain * 12;

  // Presets
  const applyPreset = (spend: number, acos: number, target: number) => {
    setAdSpend(spend);
    setCurrentAcos(acos);
    setTargetAcos(target);
  };

  return (
    <section id="ppc-calculator" className="py-20 bg-slate-900/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Amazon PPC & Profit Recovery Model
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Calculate Your Untapped Amazon Profit & Wasted Ad Spend
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Advertising efficiency is bound to listing quality and search term hygiene. Most accounts bleed 20% to 35% of their monthly ad spend on non-converting customer search terms. See how much profit Zyrel can unlock.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            
            {/* Quick Presets */}
            <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-slate-800 text-xs">
              <span className="text-slate-400 font-medium">Quick Scenarios:</span>
              <button
                type="button"
                onClick={() => applyPreset(6000, 42, 24)}
                className="px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
              >
                Launch Brand ($6k/mo)
              </button>
              <button
                type="button"
                onClick={() => applyPreset(15000, 36, 20)}
                className="px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
              >
                Mid-Tier Brand ($15k/mo)
              </button>
              <button
                type="button"
                onClick={() => applyPreset(45000, 34, 19)}
                className="px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
              >
                Catalog Aggregator ($45k/mo)
              </button>
            </div>

            {/* Input 1: Monthly Ad Spend */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor="ad-spend-slider" className="font-semibold text-slate-200">
                  Monthly Amazon PPC Ad Spend
                </label>
                <span className="font-mono text-sm font-bold text-amber-400 tabular-nums">
                  ${adSpend.toLocaleString()} / mo
                </span>
              </div>
              <input
                id="ad-spend-slider"
                type="range"
                min="2000"
                max="100000"
                step="1000"
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-950 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>$2,000</span>
                <span>$50,000</span>
                <span>$100,000+</span>
              </div>
            </div>

            {/* Input 2: Current ACoS */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor="current-acos-slider" className="font-semibold text-slate-200">
                  Current Campaign ACoS (Advertising Cost of Sales)
                </label>
                <span className="font-mono text-sm font-bold text-rose-400 tabular-nums">
                  {currentAcos}%
                </span>
              </div>
              <input
                id="current-acos-slider"
                type="range"
                min="15"
                max="70"
                step="1"
                value={currentAcos}
                onChange={(e) => setCurrentAcos(Number(e.target.value))}
                className="w-full accent-rose-400 bg-slate-950 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>15% (Healthy)</span>
                <span>35% (Straining Margins)</span>
                <span>70% (Bleeding)</span>
              </div>
            </div>

            {/* Input 3: Target Optimized ACoS */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor="target-acos-slider" className="font-semibold text-slate-200">
                  Target Optimized ACoS with Zyrel
                </label>
                <span className="font-mono text-sm font-bold text-emerald-400 tabular-nums">
                  {targetAcos}%
                </span>
              </div>
              <input
                id="target-acos-slider"
                type="range"
                min="12"
                max="30"
                step="1"
                value={targetAcos}
                onChange={(e) => setTargetAcos(Number(e.target.value))}
                className="w-full accent-emerald-400 bg-slate-950 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>12% (Aggressive Profit)</span>
                <span>20% (Golden Standard)</span>
                <span>30% (Growth Mode)</span>
              </div>
            </div>

            {/* How Zyrel Fixes It Callout */}
            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1.5">
              <div className="font-semibold text-slate-300">How Zyrel achieves this:</div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Search term isolation (moving high-converting queries to Exact Match)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Aggressive negative keyword harvesting to stop bleed on irrelevant clicks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Placement bid adjustments (Top-of-Search vs Rest-of-Search multiplier tuning)</span>
              </div>
            </div>

          </div>

          {/* Results Summary Column (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Projected ROI & Value Recovery
            </div>

            {/* Result 1: Wasted Spend Bleed */}
            <div className="p-4 bg-slate-950 border border-rose-900/30 rounded-xl space-y-1">
              <div className="text-xs text-rose-300 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                  Estimated Bleed On Wasteful Clicks
                </span>
                <span className="font-mono text-[11px]">~{wastedBleedPct}% of Spend</span>
              </div>
              <div className="text-2xl font-bold font-mono text-white tabular-nums">
                ${Math.round(monthlyWastedSpend).toLocaleString()}
                <span className="text-xs text-slate-400 font-sans font-normal ml-1">/ month</span>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                (${Math.round(annualWastedSpend).toLocaleString()} lost every year without negative keyword pruning)
              </div>
            </div>

            {/* Result 2: Annual Net Profit Unlock */}
            <div className="p-4 bg-slate-950 border border-emerald-900/30 rounded-xl space-y-1">
              <div className="text-xs text-emerald-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Coins className="w-3.5 h-3.5 text-emerald-400" />
                  Projected Annual Profit Gain
                </span>
                <span className="font-mono text-[11px]">Direct Bottom Line</span>
              </div>
              <div className="text-3xl font-extrabold font-mono text-emerald-400 tabular-nums">
                +${Math.round(annualNetProfitGain).toLocaleString()}
              </div>
              <div className="text-xs text-slate-400">
                Generated from recaptured wasted ad spend + higher conversion rate sales velocity.
              </div>
            </div>

            {/* Metric Comparison Table */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400">Current Monthly PPC Revenue</span>
                <span className="font-mono text-slate-200 tabular-nums">
                  ${Math.round(currentAdRevenue).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                <span className="text-slate-400">Target Monthly PPC Revenue</span>
                <span className="font-mono text-amber-400 font-semibold tabular-nums">
                  ${Math.round(projectedRevenueAtTarget).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-400">ACoS Efficiency Shift</span>
                <span className="font-mono text-emerald-400 font-semibold tabular-nums">
                  {currentAcos}% → {targetAcos}% (-{currentAcos - targetAcos}%)
                </span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onOpenAudit}
              className="w-full py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Your Custom Store PPC Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
