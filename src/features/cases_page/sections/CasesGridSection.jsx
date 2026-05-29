import Link from 'next/link';
import Image from 'next/image';
import { CASES_PAGE } from '@/data/casesText';

function CaseCard({ item }) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-white/[0.06] rounded-xl overflow-hidden card-glow transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-0.5">
      <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-slate-800/60 to-slate-900/80">
        {item.img ? (
          <Image src={item.img} alt={item.title} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <span className="text-slate-500 text-xs">이미지 준비 중</span>
          </div>
        )}
        <span className="absolute top-2 left-2 text-xs text-blue-400 font-semibold px-2 py-0.5 bg-blue-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm">
          {item.category}
        </span>
      </div>
      <div className="p-4 flex items-center justify-between">
        <h3 className="text-sm font-bold text-white">{item.title}</h3>
        <Link
          href={item.blogHref}
          className="text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors whitespace-nowrap ml-2"
        >
          자세히보기
        </Link>
      </div>
    </div>
  );
}

export default function CasesGridSection() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-cyan-400/7 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex flex-col items-center text-center mb-12">
        <span className="px-4 py-1 rounded-full border border-blue-800/50 bg-blue-900/30 text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
          S U C C E S S
        </span>
        <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-br from-white via-blue-100 to-violet-300 bg-clip-text text-transparent">
          {CASES_PAGE.title}
        </h1>
      </div>

      <div className="relative grid grid-cols-4 gap-4 max-w-7xl mx-auto">
        {CASES_PAGE.cases.map((item) => (
          <CaseCard key={item.title} item={item} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href={CASES_PAGE.moreHref}
          className="inline-flex items-center px-8 py-3.5 rounded-xl font-bold text-white gradient-blue"
        >
          {CASES_PAGE.moreButton}
        </Link>
      </div>
    </section>
  );
}
