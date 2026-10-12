import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ProfileAvatar } from './ProfileAvatar';

interface NavbarProps {
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single Brand Wordmark with Headshot (Strict Top Bar Contract) */}
        <a 
          href="#home" 
          className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
        >
          <ProfileAvatar size="sm" showUploadOverlay={false} />
          <span>Zyrel Jan Pizarro</span>
        </a>

        {/* Zone 2: 4-5 Concise Single-Line Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs lg:text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Core Expertise
          </a>
          <a href="#optimizer-demo" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Listing Audit Demo
          </a>
          <a href="#ppc-calculator" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            PPC Profit Calculator
          </a>
          <a href="#troubleshooting" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Catalog Playbook
          </a>
          <a href="#tools" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Tool Stack
          </a>
        </nav>

        {/* Zone 3: 1 Primary CTA Button */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenAudit}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <span>Request Store Audit</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Core Expertise
            </a>
            <a 
              href="#optimizer-demo" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Listing Audit Demo
            </a>
            <a 
              href="#ppc-calculator" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-amber-400 transition-colors"
            >
              PPC Profit Calculator
            </a>
            <a 
              href="#troubleshooting" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Catalog Playbook
            </a>
            <a 
              href="#tools" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Tool Stack
            </a>
          </div>
          <div className="pt-2 border-t border-slate-900">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 rounded-md text-center block cursor-pointer"
            >
              Request Store Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
