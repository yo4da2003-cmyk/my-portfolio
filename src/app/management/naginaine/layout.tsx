import type { Metadata } from "next";
import Link from "next/link";
import "./kanri.css";

export const metadata: Metadata = {
  title: "デモ | なぎナイン整骨院 管理ツール",
  description: "整骨院向け来院記録管理システムのデモページ",
};

export default function KanriLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="kanri-root">
      <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "10px 20px", backgroundColor: "#0a0a0a", borderBottom: "1px solid #1f1f1f" }}>
        <Link
          href="/"
          style={{ color: "#9ca3af", fontSize: "13px", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          戻る
        </Link>
        <span style={{ color: "#333", fontSize: "13px" }}>|</span>
        <span style={{ color: "white", fontSize: "13px", fontWeight: 600 }}>なぎナイン整骨院 管理ツール</span>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#f97316", border: "1px solid #9a3412", backgroundColor: "#431407", padding: "2px 8px", borderRadius: "4px" }}>
          DEMO
        </span>
      </div>
      {children}
    </div>
  );
}
