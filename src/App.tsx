/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ProfileProvider } from './context/ProfileContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ListingOptimizerDemo } from './components/ListingOptimizerDemo';
import { PpcCalculator } from './components/PpcCalculator';
import { CatalogTroubleshooter } from './components/CatalogTroubleshooter';
import { ToolsSection } from './components/ToolsSection';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { AuditSection } from './components/AuditSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToAudit = () => {
    const el = document.getElementById('audit-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Focus on store link input after brief scroll
      setTimeout(() => {
        const input = document.getElementById('store-link-input');
        if (input) {
          input.focus();
        }
      }, 500);
    }
  };

  return (
    <ProfileProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/20 selection:text-amber-300">
        {/* Strict 3-zone Top Bar Contract */}
        <Navbar onOpenAudit={handleScrollToAudit} />

        <main id="main-content">
          {/* Hero Section with Zyrel's Profile Avatar */}
          <Hero onOpenAudit={handleScrollToAudit} />

          {/* 6 Core Operating Pillars */}
          <ServicesSection onOpenAudit={handleScrollToAudit} />

          {/* Interactive Before vs After Listing Optimizer */}
          <ListingOptimizerDemo />

          {/* Interactive PPC & Profit Recovery Calculator */}
          <PpcCalculator onOpenAudit={handleScrollToAudit} />

          {/* Interactive Catalog Troubleshooting Playbook */}
          <CatalogTroubleshooter onOpenAudit={handleScrollToAudit} />

          {/* Verified Tools & Software Stack */}
          <ToolsSection />

          {/* Operating Philosophy & Holistic Mindset with Zyrel's Portrait */}
          <WhyWorkWithMe onOpenAudit={handleScrollToAudit} />

          {/* 3-Step Audit Intake & Tailored Action Plan */}
          <AuditSection />
        </main>

        {/* Quiet Professional Footer */}
        <Footer />
      </div>
    </ProfileProvider>
  );
}
