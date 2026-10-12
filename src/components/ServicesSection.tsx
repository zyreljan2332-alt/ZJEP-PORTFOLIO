import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/portfolioData';
import { 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ArrowUpRight,
  Sparkles,
  BarChart,
  ShieldCheck,
  Search,
  Palette,
  Wrench,
  TrendingUp
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenAudit: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAudit }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'account-ops':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 'listing-seo':
        return <Search className="w-5 h-5 text-amber-400" />;
      case 'aplus-content':
        return <Palette className="w-5 h-5 text-amber-400" />;
      case 'catalog-troubleshooting':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'product-research':
        return <BarChart className="w-5 h-5 text-amber-400" />;
      case 'ppc-advertising':
        return <TrendingUp className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-900/30 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Amazon Seller Central & Store Operations
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Complete Operations, SEO, Creative & Advertising Ecosystem
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            I don’t just tweak isolated knobs. I harmonize inventory flow, catalog compliance, high-retention visuals, and disciplined PPC search-term isolation to drive compounding sales growth.
          </p>
        </div>

        {/* 6 Services Grid (Editorial Numbering, No Code Comments) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service: ServiceItem) => {
            const isExpanded = expandedId === service.id;
            return (
              <div
                key={service.id}
                className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-sm"
              >
                <div>
                  {/* Top Editorial Row */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                    <span className="font-mono text-xs font-bold text-slate-500">
                      {service.number}.
                    </span>
                    <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
                      {getServiceIcon(service.id)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {service.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {service.summary}
                  </p>

                  {/* Unboxed Metadata Impact Metric (Zero-Pill Discipline) */}
                  <div className="text-xs font-mono text-amber-400 mb-4 pt-2 border-t border-slate-800/50">
                    {service.impactMetric}
                  </div>

                  {/* Expandable Deliverables List */}
                  {isExpanded && (
                    <div className="space-y-2 pt-2 pb-4 text-xs text-slate-300 border-t border-slate-800/60">
                      <div className="font-semibold text-slate-200 mb-1">
                        Specific Scope & Deliverables:
                      </div>
                      {service.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Interactive Trigger */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => toggleExpand(service.id)}
                    className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Hide Deliverables' : 'View Deliverables'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={onOpenAudit}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Audit Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
