"use client";

import { useState } from "react";

type Props = {
  onClose: () => void;
};

export default function DownloadModal({ onClose }: Props) {
  const [form, setForm] = useState({ company: "", name: "", email: "", tel: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function set(key: keyof typeof form, val: string) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email) {
      setError("氏名とメールアドレスは必須です");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await fetch("/api/download-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      // ダウンロードを開始
      const a = document.createElement("a");
      a.href = "/documents/service-guide.pdf";
      a.download = "YYdev_サービス資料.pdf";
      a.click();
      setDone(true);
    } catch {
      setError("送信に失敗しました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-[#c05f10] to-[#f97316] px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-white/70 text-xs font-medium mb-0.5">Y.Ydev サービス資料</p>
            <h2 className="text-white font-bold text-lg">資料をダウンロード</h2>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors p-1">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {done ? (
          <div className="px-6 py-10 text-center">
            <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="font-bold text-gray-800 mb-2">ダウンロードを開始しました</p>
            <p className="text-sm text-gray-500 mb-6">ご登録ありがとうございます。<br />後ほど担当者よりご連絡することがございます。</p>
            <button
              onClick={onClose}
              className="text-sm font-semibold bg-[#f97316] text-white px-6 py-2.5 rounded-full hover:bg-[#ea6c05] transition-colors"
            >
              閉じる
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6 flex flex-col gap-4">
            <p className="text-sm text-gray-500 leading-relaxed">
              資料をダウンロードする前に、簡単なご情報をお聞かせください。
            </p>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-600">院名・会社名</label>
              <input
                type="text"
                placeholder="ABC整骨院"
                value={form.company}
                onChange={(e) => set("company", e.target.value)}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-600">
                氏名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="山田 太郎"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-600">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-600">電話番号</label>
              <input
                type="tel"
                placeholder="090-1234-5678"
                value={form.tel}
                onChange={(e) => set("tel", e.target.value)}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition"
              />
            </div>

            {error && <p className="text-xs text-red-500">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="mt-1 w-full bg-[#f97316] hover:bg-[#ea6c05] disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v8M5 7l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {loading ? "送信中..." : "資料をダウンロードする"}
            </button>

            <p className="text-xs text-gray-400 text-center">
              入力情報はサービスご案内の目的のみに使用します
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
