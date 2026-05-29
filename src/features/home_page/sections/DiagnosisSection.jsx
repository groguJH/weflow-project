import Link from 'next/link';
import { CheckCircle2, Search } from 'lucide-react';
import { DIAGNOSIS } from '@/data/homeText';

export default function DiagnosisSection() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-cyan-400/7 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-blue-950/10 pointer-events-none" />

      <div className="relative max-w-xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 leading-tight">
            {DIAGNOSIS.title}
          </h2>
          <p className="text-slate-400 text-sm">{DIAGNOSIS.subtitle}</p>
        </div>

        {/* 메인 카드 */}
        <div className="bg-[#080d1a] border border-slate-800 rounded-2xl overflow-hidden shadow-xl shadow-black/40">
          {/* 리스트 */}
          <div className="px-6 pt-6">
            {DIAGNOSIS.items.map((item, idx) => (
              <div
                key={item.main}
                className={`flex items-start gap-4 py-5 ${
                  idx < DIAGNOSIS.items.length - 1 ? 'border-b border-slate-800' : ''
                }`}
              >
                <CheckCircle2 size={20} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-200 leading-relaxed">
                  <span className="font-semibold text-white">{item.main}</span>
                  {' '}
                  <span className="text-slate-400">({item.detail})</span>
                </p>
              </div>
            ))}
          </div>

          {/* CTA 버튼 */}
          <div className="px-6 pb-6 pt-5">
            <Link
              href="/reservation"
              className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl font-bold text-white text-sm bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 transition-all shadow-lg shadow-blue-500/30"
            >
              <Search size={16} />
              {DIAGNOSIS.ctaButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
