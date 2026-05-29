'use client';

import { useRef, useState } from 'react';
import { MessageSquare, Rocket, Coins, Phone, TrendingUp, Target } from 'lucide-react';
import { LANDING_FEATURES, LANDING_QUOTE } from '@/data/landingText';
import { BENEFITS } from '@/data/homeText';

const ICONS = [MessageSquare, Rocket, Coins, Phone, TrendingUp, Target];

export default function LandingFeaturesSection() {
  "use no memo";
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  function handleScroll(e) {
    const el = e.currentTarget;
    const max = el.scrollWidth - el.clientWidth;
    if (max > 0) setScrollProgress(el.scrollLeft / max);
  }

  return (
    <section className="relative py-16">

      {/* Desktop: 메인페이지 BenefitsSection 동일 레이아웃 */}
      <div className="hidden md:block px-4 sm:px-6 lg:px-8 mb-12">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white">{BENEFITS.sectionTitle}</h2>
        </div>
        <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl overflow-hidden">
          <div className="flex divide-x divide-slate-800/60">
            {BENEFITS.cards.map((card, idx) => {
              const Icon = ICONS[idx];
              const num = String(idx + 1).padStart(2, '0');
              return (
                <div
                  key={card.title}
                  className="flex-1 flex items-center gap-3 px-4 py-5 hover:bg-slate-800/30 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-900/40 border border-blue-500/20 flex items-center justify-center">
                    <Icon size={16} className="text-cyan-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold text-blue-400 leading-none mb-1">{num}</p>
                    <p className="text-xs font-bold text-white leading-tight">{card.title}</p>
                    <p className="text-[11px] text-slate-400 leading-tight mt-0.5 truncate">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: 메인페이지 BenefitsSection 동일 레이아웃 */}
      <div className="md:hidden mb-12">
        <div className="mb-8 text-center px-4">
          <h2 className="text-2xl font-black text-white">{BENEFITS.sectionTitle}</h2>
        </div>
        <div className="px-4">
          <div className="overflow-x-auto mobile-scrollbar rounded-2xl border border-slate-800/60 bg-slate-900/40" style={{ paddingBottom: '6px' }}>
            <div className="flex divide-x divide-slate-800/60">
              {BENEFITS.cards.map((card, idx) => {
                const Icon = ICONS[idx];
                const num = String(idx + 1).padStart(2, '0');
                return (
                  <div
                    key={card.title}
                    className="flex-none w-[160px] flex items-center gap-3 px-4 py-5"
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
      </div>

      {/* 인용 섹션 */}
      <div className="py-16 flex flex-col items-center text-center px-4">
        {/* 따옴표 아이콘 */}
        <div className="w-14 h-14 rounded-full bg-blue-900/50 border border-blue-700/30 flex items-center justify-center mb-8">
          <span className="text-blue-400 text-2xl font-black leading-none select-none">"</span>
        </div>

        {/* 메인 헤드라인 */}
        <div className="mb-8 space-y-1">
          {LANDING_QUOTE.headline.map((line, i) => (
            <p key={i} className="text-lg sm:text-xl font-bold text-white leading-relaxed">
              {line}
            </p>
          ))}
        </div>

        {/* 서브 텍스트 */}
        <div className="space-y-1">
          {LANDING_QUOTE.sub.map((line, i) => (
            <p key={i} className="text-sm sm:text-base text-slate-400 leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
