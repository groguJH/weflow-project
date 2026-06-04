import Link from 'next/link';
import { ArrowRight, MessageSquare, LayoutTemplate, Palette, Code2, Search, Megaphone } from 'lucide-react';
import { PROCESS } from '@/data/homeText';

const STEP_ICONS = {
  message: MessageSquare,
  layout: LayoutTemplate,
  palette: Palette,
  code: Code2,
  search: Search,
  megaphone: Megaphone,
};

export default function ProcessSection() {
  const { sixSteps } = PROCESS;

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="mb-2 text-2xl font-black text-white sm:text-3xl lg:text-4xl">{sixSteps.title}</h2>
          <p className="text-sm leading-relaxed text-slate-400 sm:text-base">{sixSteps.sub}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {sixSteps.steps.map((step, idx) => {
            const Icon = STEP_ICONS[step.icon];
            const isLast = idx === sixSteps.steps.length - 1;

            return (
              <article
                key={step.number}
                className={`relative flex min-h-[10.75rem] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-slate-900/60 px-4 py-6 text-center transition duration-300 hover:-translate-y-1 hover:bg-slate-900/80 ${!isLast ? 'lg:after:absolute lg:after:left-full lg:after:top-1/2 lg:after:z-10 lg:after:h-[0.0625rem] lg:after:w-4 lg:after:-translate-y-1/2 lg:after:bg-blue-400/25' : ''}`}
              >
                <span className="absolute right-3 top-2 text-5xl font-black leading-none text-white/[0.035]">
                  {step.number}
                </span>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/25 bg-blue-500/10">
                  <Icon size="1em" className="text-[1.375rem] text-cyan-400" />
                </div>
                <p className="mb-2 text-xs font-black tracking-widest text-blue-400">{step.number}</p>
                <h3 className="text-base font-bold leading-snug text-white">{step.label}</h3>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-slate-900/70 px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-slate-800"
          >
            서비스 더 알아보기
            <ArrowRight size="1em" className="text-[1rem]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
