import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Copy, 
  ExternalLink, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  RefreshCw,
  Mail,
  FileCheck
} from 'lucide-react';

export const AuditSection: React.FC = () => {
  const [storeLink, setStoreLink] = useState('');
  const [selectedChallenge, setSelectedChallenge] = useState('High ACoS & Wasted PPC Spend');
  const [customChallengeNote, setCustomChallengeNote] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [marketplace, setMarketplace] = useState('Amazon US (.com)');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedPlan, setCopiedPlan] = useState(false);

  const challengesList = [
    {
      id: 'ppc-acos',
      label: 'High ACoS & Wasted PPC Spend',
      sub: 'Need search term isolation, negative pruning & campaign restructuring',
    },
    {
      id: 'listing-seo',
      label: 'Low Organic Visibility & Ranking',
      sub: 'Need A10 title revamp, keyword index audit & 249-byte backend terms',
    },
    {
      id: 'catalog-glitch',
      label: 'Suppressed Listings / Broken Variations',
      sub: 'Need flat file upload, Error 5461/8541 resolution & stranded FBA fixes',
    },
    {
      id: 'conversion-aplus',
      label: 'Low Conversion Rate / Weak A+ Content',
      sub: 'Need infographic revamp, comparison charts & Brand Store design',
    },
    {
      id: 'end-to-end',
      label: 'Full Store Management & Scaling',
      sub: 'Need proactive day-to-day operations, FBA monitoring & growth roadmap',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storeLink || !clientEmail) return;
    setIsSubmitted(true);
  };

  const handleCopyPlan = () => {
    const textToCopy = `Amazon Store Audit Request for ${clientName || 'Seller'}:
Store/ASIN: ${storeLink}
Marketplace: ${marketplace}
Primary Challenge: ${selectedChallenge}
Specific Notes: ${customChallengeNote || 'Standard audit'}
Contact Email: ${clientEmail}
Assigned Specialist: Zyrel Jan Pizarro`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedPlan(true);
    setTimeout(() => setCopiedPlan(false), 2000);
  };

  return (
    <section id="audit-section" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Next Steps · Zero-Risk Discovery
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Let’s Improve Your Listings, Streamline Operations & Boost Your Sales
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Follow the 3 quick steps below to share your Amazon store details. I’ll review your listing indexing, PPC structure, and catalog health to deliver actionable recommendations.
          </p>
        </div>

        {/* Audit Form / Result Container */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-10 space-y-8">
              
              {/* Step 1: Store Link */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center font-mono">1</span>
                  <span>Send Your Amazon Store or Product Link</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label htmlFor="store-link-input" className="block text-xs font-medium text-slate-300 mb-1">
                      Store URL or ASIN (e.g., https://amazon.com/dp/B08X... or Brand Name)
                    </label>
                    <input
                      id="store-link-input"
                      type="text"
                      required
                      placeholder="e.g., amazon.com/shops/mybrand or B09X87K2L1"
                      value={storeLink}
                      onChange={(e) => setStoreLink(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="marketplace-select" className="block text-xs font-medium text-slate-300 mb-1">
                      Target Marketplace
                    </label>
                    <select
                      id="marketplace-select"
                      value={marketplace}
                      onChange={(e) => setMarketplace(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-amber-400"
                    >
                      <option>Amazon US (.com)</option>
                      <option>Amazon UK (.co.uk)</option>
                      <option>Amazon Canada (.ca)</option>
                      <option>Amazon Germany (.de)</option>
                      <option>Amazon Australia (.com.au)</option>
                      <option>Other / Multi-Marketplace</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Biggest Challenge */}
              <div className="space-y-3 pt-6 border-t border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center font-mono">2</span>
                  <span>Tell Me Your Biggest Current Amazon Challenge</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {challengesList.map((c) => {
                    const isSelected = selectedChallenge === c.label;
                    return (
                      <button
                        type="button"
                        key={c.id}
                        onClick={() => setSelectedChallenge(c.label)}
                        className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-400/10 border-amber-400 text-white shadow-sm'
                            : 'bg-slate-950 border-slate-800/80 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="text-xs font-semibold mb-1 flex items-center justify-between">
                          <span>{c.label}</span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />}
                        </div>
                        <div className="text-[11px] text-slate-400 leading-relaxed">
                          {c.sub}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div>
                  <label htmlFor="challenge-notes-input" className="block text-xs font-medium text-slate-300 mb-1 mt-2">
                    Additional Context or Specific ASINs (Optional)
                  </label>
                  <textarea
                    id="challenge-notes-input"
                    rows={2}
                    placeholder="e.g., We launched last month, ACoS is stuck at 48% on Broad keywords, and one of our color variations got split..."
                    value={customChallengeNote}
                    onChange={(e) => setCustomChallengeNote(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>
              </div>

              {/* Step 3: Contact & Submission */}
              <div className="space-y-3 pt-6 border-t border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center font-mono">3</span>
                  <span>Let’s Discuss How I Can Help You Scale</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="client-name-input" className="block text-xs font-medium text-slate-300 mb-1">
                      Your Name / Brand Contact
                    </label>
                    <input
                      id="client-name-input"
                      type="text"
                      required
                      placeholder="e.g., Sarah Davis"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="client-email-input" className="block text-xs font-medium text-slate-300 mb-1">
                      Work Email (where to send audit findings)
                    </label>
                    <input
                      id="client-email-input"
                      type="email"
                      required
                      placeholder="e.g., sarah@ecommercebrand.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Confidential review. Strict NDA compliance. No unsolicited sales pitches.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer shrink-0"
                  >
                    <span>Submit & Generate Action Plan</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </form>
          ) : (
            /* Submission Confirmation & Tailored Action Plan View */
            <div className="p-6 sm:p-8 lg:p-10 space-y-6">
              
              <div className="p-4 bg-emerald-950/20 border border-emerald-900/40 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">
                    Audit Request Received! Zyrel will review your store within 24 hours.
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    A copy has been recorded for <strong className="text-white">{clientEmail}</strong> ({storeLink}). Below is your immediate preliminary action plan based on your selected bottleneck.
                  </p>
                </div>
              </div>

              {/* Preliminary Diagnostic Summary */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <span className="font-semibold text-white">Tailored Diagnostic Blueprint</span>
                  <span className="font-mono text-amber-400">Target: {selectedChallenge}</span>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="font-semibold text-amber-400">1. Immediate Rapid Scan:</span>
                    <p className="mt-1 text-slate-300">
                      Zyrel will conduct a reverse-ASIN competitor scrape using Helium 10 Cerebro to isolate keyword index gaps and evaluate whether your listing is missing critical backend search terms or attributes.
                    </p>
                  </div>

                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="font-semibold text-amber-400">2. PPC Bleed Audit:</span>
                    <p className="mt-1 text-slate-300">
                      We will examine your 60-day Search Term Report to identify search queries with $\ge 10$ clicks and zero conversions, adding them immediately to negative exact match lists to halt wasted capital.
                    </p>
                  </div>

                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="font-semibold text-amber-400">3. Catalog & Buy Box Integrity:</span>
                    <p className="mt-1 text-slate-300">
                      Full verification of FBA stock levels, stranded inventory status, and variation theme compliance via Seller Central partial flat file feeds.
                    </p>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={handleCopyPlan}
                    className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5 text-amber-400" />
                    <span>{copiedPlan ? 'Copied to Clipboard!' : 'Copy Audit Details'}</span>
                  </button>

                  <a
                    href={`mailto:zyreljanpizarro@gmail.com?subject=Amazon%20Audit%20Request%20-%20${encodeURIComponent(clientName || 'Store Owner')}&body=Hi%20Zyrel,%0D%0A%0D%0AHere%20are%20my%20store%20details:%0D%0AStore/ASIN:%20${encodeURIComponent(storeLink)}%0D%0AMarketplace:%20${encodeURIComponent(marketplace)}%0D%0APrimary%20Challenge:%20${encodeURIComponent(selectedChallenge)}%0D%0ANotes:%20${encodeURIComponent(customChallengeNote)}%0D%0A%0D%0ATalk%20soon!`}
                    className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send Directly via Email</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setStoreLink('');
                      setCustomChallengeNote('');
                    }}
                    className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer ml-auto"
                  >
                    Submit Another Store
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
