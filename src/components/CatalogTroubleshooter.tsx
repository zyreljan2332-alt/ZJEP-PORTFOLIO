import React, { useState } from 'react';
import { TROUBLESHOOTING_CASES, TroubleshootingCase } from '../data/portfolioData';
import { 
  Wrench, 
  Clock, 
  FileSpreadsheet, 
  CheckCircle, 
  AlertOctagon, 
  ChevronRight,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

interface CatalogTroubleshooterProps {
  onOpenAudit: () => void;
}

export const CatalogTroubleshooter: React.FC<CatalogTroubleshooterProps> = ({ onOpenAudit }) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(TROUBLESHOOTING_CASES[0].id);

  const activeCase: TroubleshootingCase = 
    TROUBLESHOOTING_CASES.find(c => c.id === selectedCaseId) || TROUBLESHOOTING_CASES[0];

  return (
    <section id="troubleshooting" className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Catalog Management & Incident Response
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Interactive Catalog Troubleshooting Playbook
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Suppressed listings, stranded FBA inventory, and detached variations cost thousands in unrecoverable daily revenue. Select an incident type below to see my exact flat file feed protocol and diagnostic workflow.
          </p>
        </div>

        {/* 2-Column Split: Case Selector on Left, Diagnostic Resolution on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Case Selector List (4 cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            <div className="text-xs font-medium text-slate-400 mb-3">
              Common Amazon Catalog Emergencies:
            </div>

            {TROUBLESHOOTING_CASES.map((item) => {
              const isSelected = item.id === selectedCaseId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedCaseId(item.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-amber-400/50 shadow-md'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span className="font-mono text-amber-400">{item.code}</span>
                    <span className="text-[11px] font-mono text-slate-500">{item.resolutionTime}</span>
                  </div>
                  <div className={`text-sm font-semibold mb-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {item.title}
                  </div>
                  <div className="text-xs text-slate-400 line-clamp-2">
                    {item.symptom}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Resolution Protocol (8 cols) */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
              <div>
                <div className="text-xs font-mono text-amber-400 mb-1">
                  CASE FILE: {activeCase.code}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {activeCase.title}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/30 border border-emerald-900/40 px-3 py-1.5 rounded-lg shrink-0">
                <Clock className="w-3.5 h-3.5" />
                <span>{activeCase.resolutionTime}</span>
              </div>
            </div>

            {/* Symptom & Root Cause Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-950 border border-slate-800/80 rounded-xl space-y-1.5">
                <div className="text-xs font-semibold text-rose-400 flex items-center gap-1.5">
                  <AlertOctagon className="w-3.5 h-3.5" />
                  <span>Observed Symptom</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeCase.symptom}
                </p>
              </div>

              <div className="p-4 bg-slate-950 border border-slate-800/80 rounded-xl space-y-1.5">
                <div className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Technical Root Cause</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeCase.rootCause}
                </p>
              </div>
            </div>

            {/* Step-by-Step Resolution Workflow */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Zyrel’s Step-by-Step Resolution Protocol
              </div>

              <div className="space-y-2.5">
                {activeCase.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-950/60 border border-slate-800/60 rounded-lg text-xs text-slate-200">
                    <span className="w-5 h-5 rounded bg-slate-800 text-slate-300 flex items-center justify-center font-mono text-[11px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Flat File Feed Protocol Box */}
            <div className="p-4 bg-amber-950/15 border border-amber-900/30 rounded-xl space-y-2">
              <div className="text-xs font-semibold text-amber-400 flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-amber-400" />
                <span>Bulk Flat File & Feed Syntax Directive</span>
              </div>
              <p className="text-xs font-mono text-slate-300 leading-relaxed break-words bg-slate-950/80 p-3 rounded-lg border border-slate-800/80">
                {activeCase.flatFileNote}
              </p>
            </div>

            {/* Bottom Action */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800 text-xs">
              <span className="text-slate-400">
                Experiencing a blocked listing or catalog glitch right now?
              </span>
              <button
                onClick={onOpenAudit}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
              >
                <span>Report Catalog Issue for Rapid Fix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
