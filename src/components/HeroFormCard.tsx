"use client";

import { useState } from "react";

export default function HeroFormCard() {
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
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-sm">
      {/* カードヘッダー */}
      <div className="bg-gradient-to-r from-[#c05f10] to-[#f97316] px-6 py-4">
        <p className="text-white/80 text-xs font-medium mb-0.5">サービス内容・料金を一冊に</p>
        <p className="text-white font-bold text-base">無料で資料をダウンロード</p>
      </div>

      {done ? (
        <div className="px-6 py-8 text-center">
          <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="#f97316" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="font-bold text-gray-800 mb-1 text-sm">ダウンロードを開始しました</p>
          <p className="text-xs text-gray-400 leading-relaxed">ご登録ありがとうございます。<br />後ほどご連絡することがございます。</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="px-5 py-5 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500">院名・会社名</label>
            <input
              type="text"
              placeholder="ABC整骨院"
              value={form.company}
              onChange={(e) => set("company", e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/15 transition"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500">
              お名前 <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder="山田 太郎"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/15 transition"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500">
              メールアドレス <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/15 transition"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500">電話番号</label>
            <input
              type="tel"
              placeholder="090-1234-5678"
              value={form.tel}
              onChange={(e) => set("tel", e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/15 transition"
            />
          </div>

          {error && <p className="text-xs text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-1 w-full bg-[#f97316] hover:bg-[#ea6c05] disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v8M5 7l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {loading ? "送信中..." : "資料をダウンロードする"}
          </button>
          <p className="text-xs text-gray-400 text-center">無料・営業目的のみに使用します</p>
        </form>
      )}
    </div>
  );
}
