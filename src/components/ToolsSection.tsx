import React, { useState } from 'react';
import { TOOLS_DATA, ToolItem } from '../data/portfolioData';
import { Search, Wrench, Layers, BarChart2, Sparkles, Monitor } from 'lucide-react';

export const ToolsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTools = TOOLS_DATA.filter((tool) => {
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
    const matchesSearch = 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.practicalApplication.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tools" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Technical Stack & Ecosystem
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Tools, Software & Analytics Mastery
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            I hit the ground running with zero onboarding friction. Below is my verified toolkit across Seller Central operations, algorithmic keyword reverse-engineering, financial modeling, and rapid creative production.
          </p>
        </div>

        {/* Filter Controls & Search (Functional interactive buttons, not static pills) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Tools ({TOOLS_DATA.length})
            </button>
            <button
              onClick={() => setActiveCategory('platforms')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeCategory === 'platforms'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Platforms & Operations
            </button>
            <button
              onClick={() => setActiveCategory('analytics')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeCategory === 'analytics'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              SEO & Analytics
            </button>
            <button
              onClick={() => setActiveCategory('creative')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeCategory === 'creative'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Creative & Data
            </button>
            <button
              onClick={() => setActiveCategory('ai')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeCategory === 'ai'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              AI & Automation
            </button>
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search software or use case..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>

        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-white">
                    {tool.name}
                  </h3>
                  <span className="text-[11px] font-mono text-amber-400 shrink-0">
                    {tool.proficiency}
                  </span>
                </div>

                {/* Subtitle / Role */}
                <div className="text-xs text-slate-400 mb-3">
                  <span>{tool.categoryLabel}</span>
                  <span className="mx-1.5 text-slate-600" aria-hidden="true">·</span>
                  <span className="text-slate-300 font-medium">{tool.role}</span>
                </div>

                {/* Practical Application */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {tool.practicalApplication}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="p-8 text-center text-xs text-slate-400 bg-slate-900/50 border border-slate-800 rounded-xl">
            No tools found matching &quot;{searchQuery}&quot;. Clear search to view all.
          </div>
        )}

      </div>
    </section>
  );
};
