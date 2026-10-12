import React from 'react';
import { Mail, MessageSquare, ArrowUp, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-amber-500" aria-hidden="true" />
              <span>Zyrel Jan Pizarro</span>
            </div>
            <div className="mt-1 text-slate-400">
              Amazon Seller Central Specialist · PPC, SEO & Listing Optimization
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 font-medium text-slate-300">
            <a href="#services" className="hover:text-amber-400 transition-colors">
              Core Expertise
            </a>
            <a href="#optimizer-demo" className="hover:text-amber-400 transition-colors">
              Listing Audit Demo
            </a>
            <a href="#ppc-calculator" className="hover:text-amber-400 transition-colors">
              PPC Calculator
            </a>
            <a href="#troubleshooting" className="hover:text-amber-400 transition-colors">
              Catalog Playbook
            </a>
            <a href="#tools" className="hover:text-amber-400 transition-colors">
              Tools & Software
            </a>
          </nav>

          {/* Direct Email Link & Scroll to Top */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:zyreljanpizarro@gmail.com"
              className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>zyreljanpizarro@gmail.com</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Sub-row */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Zyrel Jan Pizarro. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Specializing in Amazon US, UK, CA, DE & Global Marketplaces</span>
            <span aria-hidden="true">·</span>
            <span>FBA & FBM Operations Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
