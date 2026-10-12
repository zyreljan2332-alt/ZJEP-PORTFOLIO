import React from 'react';
import { 
  Zap, 
  Workflow, 
  LineChart, 
  LifeBuoy, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { ProfileAvatar } from './ProfileAvatar';

interface WhyWorkWithMeProps {
  onOpenAudit: () => void;
}

export const WhyWorkWithMe: React.FC<WhyWorkWithMeProps> = ({ onOpenAudit }) => {
  const principles = [
    {
      title: 'Hit the Ground Running',
      description: 'Zero hand-holding required. Tech-savvy, adaptable, and immediately autonomous in your Seller Central console, slack channels, and project boards.',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'The Holistic Amazon Flywheel',
      description: 'Advertising never operates in a vacuum. I connect PPC bid efficiency directly to listing CVR, backend indexation, and FBA stock velocity for compounding organic rank.',
      icon: <Workflow className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'Data-Driven, Never Guesswork',
      description: 'Every recommendation is anchored in hard numbers: Helium 10 Cerebro competitor gaps, Keepa 365-day price stability, and Search Query Performance telemetry.',
      icon: <LineChart className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'Proactive Bottleneck Elimination',
      description: 'Fixing catalog warnings, stranded inventory, and variation glitches before they trigger revenue loss or Buy Box suppression.',
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    },
  ];

  return (
    <section className="py-20 bg-slate-900/20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Statement & Direct Quote */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Operating Philosophy & Value
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight text-balance">
              Your search for a reliable, proactive Amazon specialist ends here.
            </h2>

            <blockquote className="p-5 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 text-sm leading-relaxed relative">
              <p className="italic">
                &ldquo;Great Amazon support goes beyond checking off daily tasks. It means understanding how catalog health, inventory, advertising, and product presentation all work together. When a product isn’t performing, I look at the bigger picture to identify exactly what is holding it back and how we can fix it.&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-3 not-italic">
                <ProfileAvatar size="md" />
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Zyrel Jan Pizarro</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-[11px] text-amber-400 font-medium">
                    Amazon Seller Central Specialist
                  </div>
                  <div className="text-[10px] text-slate-400">
                    PPC, SEO & Listing Optimization
                  </div>
                </div>
              </div>
            </blockquote>

            <div className="pt-2">
              <button
                onClick={onOpenAudit}
                className="px-5 py-3 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Partner With Zyrel</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: 4 Core Competency Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {principles.map((item, index) => (
              <div 
                key={index} 
                className="p-5 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2.5 hover:border-slate-700 transition-colors"
              >
                <div className="p-2.5 bg-slate-950 rounded-lg w-fit border border-slate-800">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
