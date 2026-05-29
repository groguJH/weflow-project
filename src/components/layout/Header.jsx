'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV } from '@/data/commonText';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1e]/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo_icon.png" alt="WEFLOW" width={48} height={48} className="object-contain" />
            <span className="text-2xl font-black tracking-tight">
              <span className="text-white">WE</span>
              <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">FLOW</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 ml-auto mr-6">
            {NAV.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.dispatchEvent(new Event('open-diagnosis-modal'))}
              className="hidden sm:flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white gradient-blue shadow-lg shadow-blue-500/25 hover:opacity-90 transition-opacity"
            >
              {NAV.cta}
            </button>
            <button
              className="lg:hidden p-2 text-slate-300"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="메뉴 열기"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 flex flex-col gap-3">
          {NAV.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 hover:text-white py-2 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => { setMenuOpen(false); window.dispatchEvent(new Event('open-diagnosis-modal')); }}
            className="mt-2 px-4 py-2 rounded-lg text-sm font-semibold text-white text-center gradient-blue"
          >
            {NAV.cta}
          </button>
        </div>
      )}
    </header>
  );
}
