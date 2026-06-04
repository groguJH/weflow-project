'use client';

import Link from 'next/link';
import {
  ArrowUp,
  CheckCircle2,
  FileStack,
  MessageCircle,
  Phone,
  UserCircle,
} from 'lucide-react';
import { FLOATING_QUICK_MENU } from '@/data/commonText';

const ICONS = {
  top: ArrowUp,
  message: MessageCircle,
  phone: Phone,
  user: UserCircle,
  check: CheckCircle2,
  pages: FileStack,
};

const VARIANTS = {
  default:
    'border-white/[0.08] bg-slate-950/90 text-slate-200 hover:bg-slate-900 hover:text-white',
  kakao:
    'border-yellow-300/80 bg-yellow-300 text-slate-950 hover:bg-yellow-200',
  primary:
    'border-blue-500/70 bg-blue-600 text-white hover:bg-blue-500',
  muted:
    'border-slate-600/50 bg-slate-700 text-white hover:bg-slate-600',
};

function QuickMenuContent({ item }) {
  const Icon = ICONS[item.icon] ?? MessageCircle;

  return (
    <>
      <Icon size="1em" className={item.compactIcon ? 'text-[1rem]' : 'text-[1.375rem]'} />
      <span
        className="block w-full whitespace-nowrap text-center text-[0.75rem] font-black leading-none"
      >
        {item.label}
      </span>
    </>
  );
}

function quickMenuClass(item) {
  const variant = VARIANTS[item.variant ?? 'default'] ?? VARIANTS.default;

  return `flex min-h-[5rem] w-[5.5rem] cursor-pointer flex-col items-center justify-center gap-2 border px-2 py-3 text-center transition-colors duration-200 ${variant}`;
}

export default function FloatingQuickMenu() {
  function openDiagnosisModal() {
    window.dispatchEvent(new Event('open-diagnosis-modal'));
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleAction(item) {
    if (item.modal) {
      openDiagnosisModal();
      return;
    }

    if (item.action === 'scrollTop') {
      scrollToTop();
    }
  }

  return (
    <nav
      aria-label="빠른 상담 메뉴"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 border border-white/[0.08] bg-slate-950/50 lg:flex lg:flex-col"
    >
      {FLOATING_QUICK_MENU.map((item) =>
        item.modal || item.action ? (
          <button
            key={item.label}
            type="button"
            onClick={() => handleAction(item)}
            className={quickMenuClass(item)}
          >
            <QuickMenuContent item={item} />
          </button>
        ) : (
          <Link key={item.label} href={item.href} className={quickMenuClass(item)}>
            <QuickMenuContent item={item} />
          </Link>
        )
      )}
    </nav>
  );
}
