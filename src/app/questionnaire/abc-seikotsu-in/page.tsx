import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "デモ | ABC整骨院 問診票システム",
  description: "ABC整骨院向けWebアプリケーション問診票システムのデモページ",
};

export default function AbcSeikotsuInPage() {
  return (
    <div className="flex flex-col h-screen bg-[#0a0a0a]">
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-800 shrink-0">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            戻る
          </Link>
          <span className="text-gray-700 text-sm">|</span>
          <span className="text-sm text-white font-semibold">ABC整骨院 問診票システム</span>
          <span className="text-xs font-bold tracking-widest text-[#f97316] border border-orange-800 bg-orange-950 px-2 py-0.5 rounded">
            DEMO
          </span>
        </div>
      </div>
      <iframe
        src="/questionnaire/abc-seikotsu-in.html"
        className="flex-1 w-full border-none"
        title="ABC整骨院 問診票システム デモ"
      />
    </div>
  );
}
