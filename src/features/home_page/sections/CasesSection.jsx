import Link from 'next/link';
import Image from 'next/image';
import { CASES_SECTION } from '@/data/homeText';
import { CASES_PAGE } from '@/data/casesText';

export default function CasesSection() {
  const cards = CASES_PAGE.cases.slice(0, 4);

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute -top-20 left-0 w-80 h-80 bg-cyan-400/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/6 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-8 items-stretch">

        {/* 좌측: 텍스트 영역 */}
        <div className="lg:w-56 flex-shrink-0 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-4">
              {CASES_SECTION.heading.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              {CASES_SECTION.sub}
            </p>
          </div>
          <Link
            href="/reservation"
            className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20 self-start"
          >
            {CASES_SECTION.moreButton}
          </Link>
        </div>

        {/* 우측: 4개 카드 고정 */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {cards.map((item) => {
            const badge = item.title.charAt(0);
            return (
              <div
                key={item.title}
                className="flex flex-col bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300"
              >
                {/* 이미지 영역 */}
                <div className="relative flex-1 min-h-36 bg-gradient-to-br from-slate-800/80 to-slate-900 overflow-hidden">
                  {item.img ? (
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-blue-500/15 border border-blue-500/25 flex items-center justify-center">
                        <span className="text-xl font-black text-blue-300">{badge}</span>
                      </div>
                    </div>
                  )}
                </div>
                {/* 하단 텍스트 */}
                <div className="px-4 py-3">
                  <p className="text-sm font-bold text-white leading-snug">{item.title}</p>
                  <p className="text-xs text-slate-500 mt-1">{item.category}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
