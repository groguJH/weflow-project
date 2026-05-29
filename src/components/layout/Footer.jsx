import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { FOOTER } from '@/data/commonText';

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0f1e] border-t border-slate-800 pt-12 pb-6 mt-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="w-full px-8 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* 1번: 로고 + 정보 + legal */}
          <div className="flex flex-col">
            <Link href="/">
              <Image src="/logo_icon.png" alt="WEFLOW" width={40} height={40} className="object-contain" />
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed whitespace-pre-line">
              {FOOTER.tagline}
            </p>
            <div className="mt-5 space-y-1.5 text-xs text-slate-500">
              <p>{FOOTER.info.ceo}</p>
              <p>{FOOTER.info.bizNo}</p>
              <p>{FOOTER.info.email}</p>
              <p>{FOOTER.info.hours}</p>
            </div>
            <div className="mt-6 pt-5 border-t border-white/[0.06]">
              <div className="flex items-center gap-3 mb-2">
                {FOOTER.legal.map((item, i) => (
                  <span key={item} className="flex items-center gap-3">
                    <Link href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">{item}</Link>
                    {i < FOOTER.legal.length - 1 && <span className="text-slate-700">|</span>}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-600">{FOOTER.copyright}</p>
            </div>
          </div>

          {/* 2·3·4번 */}
          <div className="md:col-span-3 flex gap-10 md:pt-16 md:pl-32">

            {/* 서비스 */}
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-white mb-4">{FOOTER.links.service.title}</h4>
              <ul className="space-y-2.5">
                {FOOTER.links.service.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* WEFLOW 케어플랜 */}
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-white mb-4">{FOOTER.links.carePlan.title}</h4>
              <ul className="space-y-2.5">
                {FOOTER.links.carePlan.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 상담문의 */}
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-white mb-4">{FOOTER.links.contact.title}</h4>
              <ul className="space-y-2.5">
                {FOOTER.links.contact.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors">
                      {item.label}
                      <ExternalLink size={11} className="text-slate-600" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}
