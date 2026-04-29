"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import DownloadModal from "./DownloadModal";

const navLinks = [
  { label: "トップ", href: "/" },
  { label: "サービス", href: "#services" },
  { label: "実績", href: "#works" },
  { label: "料金", href: "#pricing" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-base font-bold tracking-wider text-foreground hover:text-accent transition-colors"
        >
          YY<span className="text-accent">.</span>dev
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-[#f97316] transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setDownloadOpen(true)}
            className="text-sm font-medium text-gray-600 hover:text-[#f97316] transition-colors tracking-wide flex items-center gap-1"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v8M5 7l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            資料
          </button>
          <a
            href="#contact"
            className="text-sm font-semibold bg-[#f97316] text-white px-4 py-2 rounded-full hover:bg-[#ea6c05] transition-colors"
          >
            無料相談
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {downloadOpen && <DownloadModal onClose={() => setDownloadOpen(false)} />}

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-[#f97316] transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); setDownloadOpen(true); }}
            className="text-sm font-medium text-gray-700 hover:text-[#f97316] transition-colors py-1 flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v8M5 7l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            資料をダウンロード
          </button>
          <a
            href="#contact"
            className="text-sm font-semibold bg-[#f97316] text-white px-4 py-2.5 rounded-full text-center hover:bg-[#ea6c05] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            無料相談
          </a>
        </div>
      )}
    </header>
  );
}
