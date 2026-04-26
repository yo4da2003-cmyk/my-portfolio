import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

const skills = [
  {
    icon: "📱",
    title: "QRコード注文 / セルフオーダー",
    desc: "飲食店・カフェ向けのQRコードを使ったセルフオーダーシステムを構築します。スタッフの注文受け業務をゼロにし、人件費削減と回転率向上を同時に実現します。",
  },
  {
    icon: "📋",
    title: "デジタルフォーム / 受付システム",
    desc: "紙の問診票・申込書・アンケートをWeb化します。受付スタッフの入力作業を削減し、データ管理もラクになります。",
  },
  {
    icon: "⚙️",
    title: "業務管理ツール",
    desc: "予約管理・在庫管理・顧客管理など、Excelや紙で行っている作業をWebアプリに置き換えます。現場に合わせたオーダーメイドで開発します。",
  },
  {
    icon: "🌐",
    title: "LP / コーポレートサイト",
    desc: "集客・採用・ブランディングを目的としたサイトを制作します。シンプルで伝わるデザインと、運用しやすい構成を心がけています。",
  },
];

const works = [
  {
    tag: "DEMO",
    title: "整骨院向け 問診票システム",
    desc: "紙の問診票をWeb化したデモです。受付スタッフの記入・転記作業をゼロに。部位タップ選択・痛みスケールなど、患者が直感的に操作できるUIを実装しています。",
    href: "/questionnaire/seikotsu-in",
    screenshot: "/screenshots/questionnaire.png",
  },
  {
    tag: "DEMO",
    title: "予約システム",
    desc: "整骨院・美容院などに対応したオンライン予約デモです。メニュー選択・カレンダー日時選択・スタッフ向け管理画面（ステータス更新）まで一通り体験できます。",
    href: "/booking/seikotsu-in",
    screenshot: "/screenshots/booking.png",
  },
  {
    tag: "DEMO",
    title: "来院記録 管理ツール",
    desc: "整骨院向けスタッフ管理システムのデモです。患者カルテの管理・来院記録のタイムライン表示・施術部位の人体図タップ選択など、現場で使える機能を実装しています。",
    href: "/management/naginaine",
    screenshot: "/screenshots/management.png",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-60 translate-x-1/2" />

          <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
            <p className="text-sm font-semibold tracking-[0.25em] text-[#f97316] uppercase mb-6">
              Web Developer
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-[#0a0a0a] mb-6">
              Yoshida
              <br />
              <span className="text-gray-400">Yusei</span>
              <span className="text-[#f97316]">.</span>
            </h1>
            <p className="max-w-xl text-lg text-gray-500 leading-relaxed mb-10">
              Webアプリ・システム開発で、あなたのビジネスの
              <br className="hidden md:block" />
              <span className="text-[#0a0a0a] font-medium">「人手のかかる作業」を仕組みに変えます。</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#works"
                className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-gray-800 transition-colors"
              >
                Works を見る
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full hover:border-[#f97316] hover:text-[#f97316] transition-colors"
              >
                お問い合わせ
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-gray-400 tracking-widest">
            <span>SCROLL</span>
            <span className="w-px h-10 bg-gradient-to-b from-gray-300 to-transparent" />
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="bg-[#0a0a0a] text-white py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">About</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                  人の手を減らして、
                  <br />
                  仕組みで回す。
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  QRコード注文・デジタル問診票・予約管理など、「人がやらなくていい作業」をWebシステムに置き換えることで、業務効率化と人件費削減をサポートします。
                </p>
                <p className="text-gray-400 leading-relaxed">
                  飲食・医療・サービス業など、現場で本当に使える仕組みを、設計から実装まで一人でまるごと対応します。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-px bg-gray-800 rounded-2xl overflow-hidden">
                {[
                  { num: "3+", label: "Years Exp." },
                  { num: "10+", label: "Projects" },
                  { num: "React", label: "Main Stack" },
                  { num: "Next.js", label: "Framework" },
                ].map((item) => (
                  <div key={item.label} className="bg-[#0a0a0a] p-8 flex flex-col gap-1">
                    <span className="text-2xl font-bold text-white">{item.num}</span>
                    <span className="text-xs text-gray-500 tracking-wider uppercase">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="bg-white py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">Skills</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-14 text-[#0a0a0a]">
              制作できるもの
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((s) => (
                <div
                  key={s.title}
                  className="group bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:border-[#f97316] hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-3xl mb-4 block">{s.icon}</span>
                  <h3 className="text-base font-bold text-[#0a0a0a] mb-3 group-hover:text-[#f97316] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WORKS ── */}
        <section id="works" className="bg-gray-50 py-24 md:py-32 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">Works</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-14 text-[#0a0a0a]">
              制作実績 / デモ
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {works.map((w) => (
                <div
                  key={w.title}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="h-48 relative overflow-hidden bg-gray-100">
                    <Image
                      src={w.screenshot}
                      alt={w.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#0a0a0a] opacity-0 group-hover:opacity-10 transition-opacity" />
                  </div>
                  <div className="p-7">
                    <span className="inline-block text-xs font-bold tracking-widest text-[#f97316] uppercase mb-3 border border-orange-200 bg-orange-50 px-2 py-0.5 rounded">
                      {w.tag}
                    </span>
                    <h3 className="text-lg font-bold text-[#0a0a0a] mb-3">{w.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">{w.desc}</p>
                    <Link
                      href={w.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a0a0a] border border-[#0a0a0a] px-5 py-2.5 rounded-full hover:bg-[#f97316] hover:border-[#f97316] hover:text-white transition-all"
                    >
                      デモを見る
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}

              <div className="bg-white border border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-12 text-center">
                <span className="text-4xl mb-4 opacity-30">＋</span>
                <p className="text-sm text-gray-400">More coming soon...</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" className="bg-white py-24 md:py-32 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0a0a0a]">料金について</h2>
            <p className="text-gray-500 mb-14 text-sm">すべて要件をお聞きしてからお見積もりします。まずはお気軽にご相談ください。</p>

            {/* 初期費用 */}
            <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-6">初期費用（システム構築）</h3>
            <div className="grid sm:grid-cols-3 gap-6 mb-16">
              {[
                {
                  title: "LP / コーポレートサイト",
                  price: "3万〜10万円",
                  items: ["デザイン・コーディング", "レスポンシブ対応", "お問い合わせフォーム", "SEO基本設定"],
                },
                {
                  title: "デジタルフォーム\n受付システム",
                  price: "3万〜8万円",
                  items: ["問診票・申込書のWeb化", "入力データの管理・出力", "スマホ対応UI", "スタッフ向け管理画面"],
                  highlight: true,
                },
                {
                  title: "QRコード注文\nセルフオーダー",
                  price: "5万〜15万円",
                  items: ["テーブル別QRコード発行", "リアルタイム注文通知", "注文管理画面", "メニュー編集機能"],
                },
              ].map((plan) => (
                <div
                  key={plan.title}
                  className={`rounded-2xl border p-8 flex flex-col gap-6 ${
                    plan.highlight
                      ? "border-[#f97316] bg-orange-50"
                      : "border-gray-100 bg-gray-50"
                  }`}
                >
                  {plan.highlight && (
                    <span className="text-xs font-bold tracking-widest text-[#f97316] uppercase">Popular</span>
                  )}
                  <div>
                    <h4 className="text-base font-bold text-[#0a0a0a] mb-3 whitespace-pre-line">{plan.title}</h4>
                    <p className="text-2xl font-bold text-[#0a0a0a]">
                      {plan.price}
                      <span className="text-sm font-normal text-gray-400 ml-1">（税別・目安）</span>
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* ランニングコスト */}
            <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-6">月額ランニングコスト（お客様負担）</h3>
            <div className="bg-[#0a0a0a] rounded-2xl p-8 text-white">
              <p className="text-sm text-gray-400 mb-6">
                サーバー・ホスティング費用はお客様が各サービスと直接契約する形をとります。小規模であれば<span className="text-white font-semibold">ほぼ無料〜月3,000円前後</span>で運用可能です。
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { name: "データベース（Supabase）", cost: "無料〜$25/月", note: "小規模なら無料枠で十分" },
                  { name: "ホスティング（Vercel）", cost: "無料〜$20/月", note: "個人・小規模は無料枠あり" },
                  { name: "独自ドメイン", cost: "約1,500円/年", note: "任意。なくても動作します" },
                ].map((row) => (
                  <div key={row.name} className="bg-white/5 rounded-xl p-5">
                    <p className="text-xs text-gray-500 mb-1">{row.name}</p>
                    <p className="text-lg font-bold text-white mb-1">{row.cost}</p>
                    <p className="text-xs text-gray-500">{row.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="bg-[#0a0a0a] text-white py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              お気軽にご相談ください
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto leading-relaxed mb-10">
              「こんな作業、自動化できないかな」と思ったらまず相談してください。
              要件整理から対応します。お見積もりは無料です。
            </p>
            <a
              href="mailto:yo4da2003@gmail.com"
              className="inline-flex items-center gap-2 bg-[#f97316] text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-[#ea580c] transition-colors"
            >
              メールで問い合わせる
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4h12v9H2V4zm0 0l6 5 6-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#0a0a0a] border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-sm font-bold text-white tracking-wider">
            YY<span className="text-[#f97316]">.</span>dev
          </span>
          <p className="text-xs text-gray-600">
            © 2025 Yoshida Yusei. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
