import Link from 'next/link';
import { AD_PLANS, PRICING_NOTICE } from '@/data/pricingText';

export default function LandingAdPlansSection() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">{AD_PLANS.sectionTitle}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
        {AD_PLANS.plans.map((plan) => (
          <div
            key={plan.name}
            className="flex flex-col bg-slate-900/50 backdrop-blur-sm border border-white/[0.07] rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 card-glow"
          >
            <h3 className="text-lg font-black text-white mb-1">{plan.name}</h3>
            <div className="mb-5">
              <span className="text-2xl font-black text-blue-400">{plan.price}</span>
            </div>

            <ul className="space-y-2.5 flex-1 mb-6">
              {plan.tags.map((tag) => (
                <li key={tag} className="flex items-start gap-2.5">
                  <span className="mt-0.5 font-bold text-sm text-blue-400">✓</span>
                  <span className="text-sm text-slate-300">{tag}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/reservation"
              className="block text-center py-3 rounded-xl font-bold text-sm bg-slate-800/60 border border-white/[0.08] text-white hover:border-blue-500/40 transition-colors"
            >
              신청하기
            </Link>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-slate-500">{PRICING_NOTICE}</p>
    </section>
  );
}
