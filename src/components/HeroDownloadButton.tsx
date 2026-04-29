"use client";

import { useState } from "react";
import DownloadModal from "./DownloadModal";

export default function HeroDownloadButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/60 text-white font-semibold text-sm px-5 py-3 rounded-full transition-all duration-200"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M8 2v8M5 7l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        無料で資料をダウンロード
      </button>
      {open && <DownloadModal onClose={() => setOpen(false)} />}
    </>
  );
}
