import { MessageSquare, Rocket, Coins, Phone, TrendingUp, Target } from 'lucide-react';
import { BENEFITS } from '@/data/homeText';

const ICONS = [MessageSquare, Rocket, Coins, Phone, TrendingUp, Target];

export default function BenefitsSection() {
  return (
    <section className="relative py-16">
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="mb-8 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-black text-white">{BENEFITS.sectionTitle}</h2>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto mobile-scrollbar rounded-2xl border border-slate-800/60 bg-slate-900/40">
          <div className="flex divide-x divide-slate-800/60 min-w-full">
            {BENEFITS.cards.map((card, idx) => {
              const Icon = ICONS[idx];
              const num = String(idx + 1).padStart(2, '0');
              return (
                <div
                  key={card.title}
                  className="flex-1 min-w-[200px] flex items-center gap-3 px-4 py-5 hover:bg-slate-800/30 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-900/40 border border-blue-500/20 flex items-center justify-center">
                    <Icon size={16} className="text-cyan-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold text-blue-400 leading-none mb-1">{num}</p>
                    <p className="text-xs font-bold text-white leading-tight">{card.title}</p>
                    <p className="text-[11px] text-slate-400 leading-tight mt-0.5">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
