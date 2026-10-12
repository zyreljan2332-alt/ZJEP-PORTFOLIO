import React from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  SlidersHorizontal,
  PackageCheck,
  Camera
} from 'lucide-react';
import { ProfileAvatar } from './ProfileAvatar';

interface HeroProps {
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  return (
    <section id="home" className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      {/* Background radial gradient glow for depth */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split-screen Grid (Left: Copy & Profile, Right: Visual Amazon Ops Console) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Zyrel Profile Lockup Row */}
            <div className="flex items-center gap-4 mb-6 p-2.5 sm:p-3 bg-slate-900/60 border border-slate-800 rounded-2xl w-fit backdrop-blur-sm">
              <ProfileAvatar size="md" />
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Zyrel Jan Pizarro</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" title="Available for new client stores" />
                </div>
                <div className="text-xs text-amber-400 font-medium">
                  Amazon Seller Central PRO
                </div>
                <div className="text-[11px] text-slate-400">
                  Ready to Level Up Your E-commerce?
                </div>
              </div>
            </div>

            {/* Quiet Unboxed Metadata Kicker (Zero-Pill Discipline) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-4">
              <span>Amazon Seller Central Specialist</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-400">PPC, SEO & Listing Optimization</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 text-balance">
              Scaling Amazon Revenue Through Data-Driven Advertising & Content Strategy
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Hi, I’m <strong className="text-white font-semibold">Zyrel Jan Pizarro</strong>. I eliminate costly Amazon operational bottlenecks—transforming underperforming listings into high-converting revenue drivers through algorithmic SEO, targeted PPC search term harvesting, and rapid catalog error resolution.
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onOpenAudit}
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-lg shadow-amber-950/20 flex items-center gap-2 cursor-pointer"
              >
                <span>Request Free Store Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#optimizer-demo"
                className="px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors flex items-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4 text-amber-400" />
                <span>Explore Listing Demo</span>
              </a>
            </div>

            {/* Trust Markers (Unboxed Text with subtle separators) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 pt-4 border-t border-slate-900">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                FBA & FBM Workflow Specialist
              </span>
              <span className="text-slate-700" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Zero-Defect Account Health Focus
              </span>
              <span className="text-slate-700" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <BarChart3 className="w-4 h-4 text-amber-400" />
                Helium 10 & Keepa Certified Forensics
              </span>
            </div>
          </div>

          {/* Right Column (5 cols): High-Fidelity Amazon Seller Central Control Surface */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="font-semibold text-slate-200">Amazon Seller Central</span>
                  <span className="text-slate-500 font-mono text-[11px]">US Marketplace</span>
                </div>
                <div className="text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Account Health: 1000 / Healthy</span>
                </div>
              </div>

              {/* Console Body: Live Snapshot Cards */}
              <div className="space-y-3.5">
                
                {/* Metric Strip inside card */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-lg p-3">
                    <div className="text-[11px] text-slate-400 mb-1">Trailing 30-Day Sales</div>
                    <div className="text-lg font-bold text-white font-mono tabular-nums">$148,920.40</div>
                    <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-mono">
                      <TrendingUp className="w-3 h-3" />
                      <span>+34.2% YoY growth</span>
                    </div>
                  </div>

                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-lg p-3">
                    <div className="text-[11px] text-slate-400 mb-1">Blended ACoS (PPC)</div>
                    <div className="text-lg font-bold text-amber-400 font-mono tabular-nums">19.8%</div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-1 font-mono">
                      <span>Target: &lt;22% · TACOS 7.4%</span>
                    </div>
                  </div>
                </div>

                {/* Operations Checklist Item */}
                <div className="bg-slate-950/70 border border-slate-800/80 rounded-lg p-3.5 space-y-2.5">
                  <div className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                    <span>Active Catalog Health</span>
                    <span className="text-[11px] text-emerald-400 font-mono">0 Suppressed</span>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-400">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Buy Box Win Rate
                      </span>
                      <span className="text-slate-200 font-mono tabular-nums font-medium">99.4%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <PackageCheck className="w-3.5 h-3.5 text-emerald-400" />
                        FBA In-Stock Rate
                      </span>
                      <span className="text-slate-200 font-mono tabular-nums font-medium">98.9% (Optimal)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-emerald-400" />
                        Parent-Child Variation Status
                      </span>
                      <span className="text-slate-200 font-mono tabular-nums font-medium">All Linked</span>
                    </div>
                  </div>
                </div>

                {/* Zyrel's Active Playbook Callout */}
                <div className="bg-amber-950/20 border border-amber-900/40 rounded-lg p-3 text-xs">
                  <div className="text-amber-400 font-medium mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Zyrel’s Operational Rule
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[12px]">
                    &ldquo;When a product isn’t performing, I don’t just adjust bids—I look at the whole picture: title indexation, image conversion rate, FBA stock speed, and search intent alignment.&rdquo;
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Full-Width Key Metrics Strip Below the Hero Split (Design Constitution 2.B) */}
        <div className="mt-14 pt-8 border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mb-1">
              $4.2M+
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Managed Amazon Sales Volume
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums mb-1">
              38% → 21%
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Average ACoS Reduction Across Portfolios
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mb-1">
              +140%
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Organic Search Keyword Index Velocity
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums mb-1">
              &lt; 24h
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Average Listing Error Resolution Turnaround
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
