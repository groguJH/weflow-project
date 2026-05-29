'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HERO } from '@/data/homeText';

export default function HeroSection() {
  function openModal() {
    window.dispatchEvent(new Event('open-diagnosis-modal'));
  }

  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 앰비언트 글로우 블롭 */}
      <div className="absolute -top-40 right-0 w-[800px] h-[800px] bg-cyan-400/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-600/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-blue-700/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 via-transparent to-blue-950/15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-24">

          {/* ── 좌측: 텍스트 콘텐츠 ── */}
          <div className="flex-1 py-8 lg:py-16">
            <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight mb-6 bg-gradient-to-br from-white via-blue-100 to-violet-300 bg-clip-text text-transparent">
              {HERO.headline[0]}
              <br />
              {HERO.headline[1]}
              <br />
              {HERO.headline[2]}
            </h1>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              {HERO.sub[0]}
              <br />
              {HERO.sub[1]}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {/* 1번 버튼: 모달 트리거 */}
              <button
                onClick={openModal}
                className="inline-flex items-center px-7 py-3.5 rounded-xl font-bold text-white text-sm gradient-blue"
              >
                {HERO.buttons[0].label}
              </button>

              {/* 나머지 버튼: 링크 */}
              {HERO.buttons.slice(1).map((btn) => (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className="inline-flex items-center px-6 py-3.5 rounded-xl font-semibold text-slate-300 text-sm bg-slate-900/60 backdrop-blur-sm border border-white/[0.08] hover:border-blue-500/40 hover:text-white transition-all duration-300"
                >
                  {btn.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {HERO.tags.map((tag) => (
                <div
                  key={tag.title}
                  className="px-4 py-2.5 bg-slate-900/50 backdrop-blur-sm border border-white/[0.07] rounded-lg hover:border-blue-500/30 transition-all duration-300"
                >
                  <p className="text-white text-xs font-bold">{tag.title}</p>
                  <p className="text-slate-400 text-xs">{tag.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── 우측: 글로우 비주얼 (lg 이상) ── */}
          <div className="hidden lg:flex flex-1 items-center justify-center relative min-h-[480px]">
            {/* 배경 글로우 오브 */}
            <div className="absolute w-80 h-80 bg-blue-600/18 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute w-56 h-72 bg-violet-600/12 rounded-full blur-3xl translate-x-20 pointer-events-none" />

            {/* 동심원 링 */}
            <div className="absolute w-[400px] h-[400px] rounded-full border border-blue-500/[0.08]" />
            <div className="absolute w-[300px] h-[300px] rounded-full border border-violet-500/[0.08]" />
            <div className="absolute w-[210px] h-[210px] rounded-full border border-blue-400/[0.06]" />

            {/* 메인 이미지 */}
            <div className="relative z-10 mt-20">
              <Image src="/main_icon.png" alt="WEFLOW" width={880} height={880} className="object-contain drop-shadow-2xl" />
            </div>

            {/* 플로팅 배지 — 빠른 납품 */}
            <div className="absolute top-14 right-4 z-10 px-3.5 py-2.5 bg-slate-900/80 backdrop-blur-md border border-white/[0.08] rounded-xl shadow-lg">
              <div className="text-white font-bold text-sm">3~7일</div>
              <div className="text-slate-400 text-xs">빠른 납품</div>
            </div>

            {/* 플로팅 배지 — 24시간 */}
            <div className="absolute bottom-20 left-4 z-10 px-3.5 py-2.5 bg-slate-900/80 backdrop-blur-md border border-white/[0.08] rounded-xl shadow-lg">
              <div className="text-white font-bold text-sm">24시간</div>
              <div className="text-slate-400 text-xs">상담 가능</div>
            </div>

            {/* 플로팅 배지 — 실시간 상담 */}
            <div className="absolute bottom-8 right-10 z-10 flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-900/80 backdrop-blur-md border border-emerald-500/20 rounded-xl shadow-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-semibold">실시간 상담중</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

