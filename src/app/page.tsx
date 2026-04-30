import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import FadeIn from "@/components/FadeIn";
import HeroDownloadButton from "@/components/HeroDownloadButton";
import {
  FileText,
  Users,
  Globe,
  Wallet,
  ClipboardList,
  CalendarDays,
  QrCode,
  LayoutDashboard,
  Monitor,
  Target,
  Link2,
  MessageCircle,
  Check,
  type LucideIcon,
} from "lucide-react";

const painPoints: { icon: LucideIcon; text: string }[] = [
  {
    icon: FileText,
    text: "紙の問診票や予約台帳の入力・転記に毎日時間を取られている",
  },
  {
    icon: Users,
    text: "スタッフが注文取りや受付に追われて、本来の仕事に集中できない",
  },
  {
    icon: Globe,
    text: "ホームページが古い、またはそもそも持っていなくて新規客が来ない",
  },
  {
    icon: Wallet,
    text: "システム化したいけど大手は高すぎて、何から始めればいいかわからない",
  },
];

const servicePillars = [
  {
    icon: Monitor,
    category: "ホームページ制作",
    tagline: "まず、見つけてもらう。",
    desc: "集客・採用・ブランディングを目的としたサイトを制作。シンプルで伝わるデザインと、更新しやすい構成を心がけています。",
    items: [
      { icon: Monitor, label: "LP・ランディングページ" },
      { icon: Globe, label: "コーポレートサイト" },
      { icon: FileText, label: "採用・ブログページ連携" },
    ],
    dark: true,
  },
  {
    icon: LayoutDashboard,
    category: "業務デジタル化",
    tagline: "現場の手間を、ゼロへ。",
    desc: "紙・口頭・Excelで回している業務をWebに置き換えます。スタッフの作業時間を削減し、本来の仕事に集中できる環境をつくります。",
    items: [
      { icon: ClipboardList, label: "デジタル問診票 / 申込フォーム" },
      { icon: CalendarDays, label: "オンライン予約システム" },
      { icon: QrCode, label: "QRコード注文 / セルフオーダー" },
      { icon: LayoutDashboard, label: "顧客・スタッフ管理ツール" },
    ],
    dark: false,
  },
];

const orderTypes: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Target,
    title: "単品でOK",
    desc: "「問診票だけ欲しい」「HPだけ作りたい」といった単品依頼ももちろん対応します。",
  },
  {
    icon: Link2,
    title: "組み合わせもOK",
    desc: "「HPと予約システムをセットで」など、複数サービスのまとめ依頼も歓迎です。",
  },
  {
    icon: MessageCircle,
    title: "相談からでもOK",
    desc: "「何が必要かわからない」という段階でも大丈夫。要件整理から一緒に考えます。",
  },
];

const reasons = [
  {
    num: "01",
    title: "企画から制作まで一気通貫",
    desc: "要件ヒアリング・設計・デザイン・実装まで一人で対応。担当者が変わらないので、意図が正確に伝わります。",
  },
  {
    num: "02",
    title: "大手にはできない融通の利かせ方",
    desc: "「ここだけ変えたい」「この機能を追加したい」といった細かい要望にも柔軟に対応します。",
  },
  {
    num: "03",
    title: "低コストで運用できる設計",
    desc: "ホスティング・データベースは無料〜月3,000円前後で運用可能な構成を提案。導入後のコストを抑えられます。",
  },
];

const works = [
  {
    tag: "DEMO",
    title: "問診票システム",
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
    title: "スタッフ管理システム",
    desc: "患者カルテの管理・来院記録のタイムライン表示・施術部位の人体図タップ選択など、現場で使える機能を実装したデモです。",
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
        <section className="relative min-h-screen flex flex-col justify-end bg-[#0a0a0a] overflow-hidden">
          <Image
            src="/images/hero2-sm.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover md:hidden"
            fetchPriority="high"
            loading="eager"
          />
          <Image
            src="/images/hero2.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover hidden md:block"
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a]/30 md:via-[#0a0a0a]/10 md:to-transparent" />

          <div className="absolute top-6 left-6 md:top-10 md:left-12 text-white text-sm md:text-base font-semibold tracking-[0.15em] z-10">
            Y.Ydev
          </div>

          <div
            className="absolute top-[26%] md:top-1/3 left-0 right-0 z-10"
            style={{ animation: "fadeUp 0.6s ease 0.3s both" }}
          >
            <div className="max-w-6xl mx-auto px-6">
              <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                <span className="block md:inline">時間を、</span>
                <span className="block md:inline">好きなことへ。</span>
              </h1>
              <p className="mt-4 md:mt-6 text-white/90 text-sm md:text-lg leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
                事務作業はWebに任せて、<br className="md:hidden" />あなたは本業に集中してください。
              </p>
            </div>
          </div>

          {/* 右下：資料ダウンロードボタン */}
          <div className="absolute bottom-24 right-6 md:right-12 z-10" style={{ animation: "fadeUp 0.6s ease 0.6s both" }}>
            <HeroDownloadButton />
          </div>

          <div
            className="relative max-w-6xl mx-auto px-6 pb-24 w-full z-10"
            style={{ animation: "fadeUp 0.6s ease 0.3s both" }}
          >
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white text-[#0a0a0a] font-semibold px-7 py-3.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                サービスを見る
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/60 text-white font-semibold px-7 py-3.5 rounded-full hover:border-[#f97316] hover:text-[#f97316] transition-colors"
              >
                無料相談はこちら
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-white/60 tracking-widest">
            <span>SCROLL</span>
            <span className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </section>

        {/* ── PAIN POINTS ── */}
        <section className="bg-gray-50 py-24 md:py-32 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">Problem</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-14 text-[#0a0a0a]">
                こんなことで<br />困っていませんか？
              </h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-6">
              {painPoints.map((p, i) => (
                <FadeIn key={p.text} delay={i * 100}>
                  <div className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#f97316] hover:shadow-md transition-all duration-300">
                    <p.icon className="w-6 h-6 text-[#f97316] shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed">{p.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="bg-white py-24 md:py-32 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">Services</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0a0a0a]">
                解決できること
              </h2>
              <p className="text-gray-500 mb-14 text-sm">2つの柱で、お店の課題をまるごと解決します。</p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              {servicePillars.map((p, i) => (
                <FadeIn key={p.category} delay={i * 120}>
                  <div className={`h-full rounded-2xl overflow-hidden flex flex-col border transition-all duration-300 hover:shadow-2xl ${p.dark ? "bg-[#0a0a0a] border-[#1f1f1f] hover:border-[#f97316]/40" : "bg-white border-gray-100 hover:border-[#f97316]"}`}>
                    {/* カードヘッダー */}
                    <div className={`px-8 pt-8 pb-6 ${p.dark ? "" : "border-b border-gray-100"}`}>
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${p.dark ? "bg-[#f97316]/15" : "bg-orange-50"}`}>
                        <p.icon className="w-6 h-6 text-[#f97316]" />
                      </div>
                      <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${p.dark ? "text-[#f97316]" : "text-[#f97316]"}`}>
                        {i === 0 ? "Website" : "Digital Tools"}
                      </p>
                      <h3 className={`text-2xl font-bold mb-2 ${p.dark ? "text-white" : "text-[#0a0a0a]"}`}>
                        {p.category}
                      </h3>
                      <p className={`text-base font-medium ${p.dark ? "text-[#f97316]" : "text-[#f97316]"}`}>
                        {p.tagline}
                      </p>
                    </div>

                    {/* カードボディ */}
                    <div className="px-8 py-6 flex flex-col gap-6 flex-1">
                      <p className={`text-sm leading-relaxed ${p.dark ? "text-gray-400" : "text-gray-500"}`}>
                        {p.desc}
                      </p>
                      <ul className="flex flex-col gap-3">
                        {p.items.map((item) => (
                          <li key={item.label} className="flex items-center gap-3">
                            <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${p.dark ? "bg-[#f97316]/20" : "bg-orange-50"}`}>
                              <Check className="w-3 h-3 text-[#f97316]" />
                            </span>
                            <span className={`text-sm font-medium ${p.dark ? "text-gray-200" : "text-gray-700"}`}>
                              {item.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-2">
                        <a
                          href="#pricing"
                          className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${p.dark ? "text-[#f97316] hover:text-orange-300" : "text-[#0a0a0a] hover:text-[#f97316]"}`}
                        >
                          料金を見る
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── ORDER TYPES ── */}
        <section className="relative bg-[#0a0a0a] text-white py-24 md:py-32 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ background: "radial-gradient(circle, #f97316, transparent)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-10"
            style={{ background: "radial-gradient(circle, #fb923c, transparent)" }}
          />
          <div className="relative max-w-6xl mx-auto px-6">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">How to order</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-14">
                頼み方は自由です
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {orderTypes.map((o, i) => (
                <FadeIn key={o.title} delay={i * 100}>
                  <div
                    className="h-full rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:border-[#f97316]/50"
                    style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)" }}
                  >
                    <o.icon className="w-8 h-8 text-[#f97316] mb-4" />
                    <h3 className="text-lg font-bold text-white mb-3">{o.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{o.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── REASONS ── */}
        <section className="bg-white py-24 md:py-32 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">Why Y.Ydev</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-14 text-[#0a0a0a]">
                選ばれる理由
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-8">
              {reasons.map((r, i) => (
                <FadeIn key={r.num} delay={i * 120}>
                  <div className="flex flex-col gap-4 p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#f97316] hover:shadow-lg transition-all duration-300">
                    <span
                      className="text-5xl font-bold bg-clip-text text-transparent"
                      style={{ backgroundImage: "linear-gradient(135deg, #f97316, #fed7aa)" }}
                    >
                      {r.num}
                    </span>
                    <h3 className="text-lg font-bold text-[#0a0a0a]">{r.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── WORKS ── */}
        <section id="works" className="bg-orange-50 py-24 md:py-32 border-t border-orange-100">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">Works</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-14 text-[#0a0a0a]">
                制作事例
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-8">
              {works.map((w, i) => (
                <FadeIn key={w.title} delay={i * 100}>
                  <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="p-7">
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
                </FadeIn>
              ))}

              <FadeIn delay={300}>
                <div className="bg-white border border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-12 text-center">
                  <span className="text-4xl mb-4 opacity-30">＋</span>
                  <p className="text-sm text-gray-400">More coming soon...</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" className="bg-white py-24 md:py-32 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0a0a0a]">料金</h2>
              <p className="text-gray-500 mb-6 text-sm">すべて固定価格・縛りなし・解約金なし。</p>
            </FadeIn>

            <FadeIn delay={50}>
              <div className="rounded-2xl bg-[#0a0a0a] text-white px-8 py-5 mb-12 flex items-center gap-4">
                <span className="text-2xl shrink-0">💡</span>
                <p className="text-sm leading-relaxed text-gray-300">
                  大手制作会社は営業・ディレクター・デザイナー・エンジニアと人件費がかかる分、費用が高くなります。Y.Ydevは企画から実装まで<span className="text-white font-semibold">一人で完結</span>するため、その分をそのまま価格に還元しています。
                </p>
              </div>
            </FadeIn>

            {/* ホームページ制作 */}
            <FadeIn delay={80}>
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-5">ホームページ制作</p>
            </FadeIn>
            <div className="grid sm:grid-cols-3 gap-5 mb-12">
              {[
                {
                  name: "ライト",
                  init: "¥9,800",
                  monthly: "¥9,800",
                  desc: "LP型（1ページ完結）",
                  items: ["デザイン・コーディング", "レスポンシブ対応", "お問い合わせフォーム", "SEO基本設定"],
                },
                {
                  name: "スタンダード",
                  init: "¥19,800",
                  monthly: "¥13,800",
                  desc: "LP + サブページ 2〜3枚",
                  items: ["デザイン・コーディング", "レスポンシブ対応", "お問い合わせフォーム", "SEO基本設定", "サブページ制作"],
                },
                {
                  name: "プレミアム",
                  init: "¥29,800",
                  monthly: "¥19,800",
                  desc: "複数ページ + ブログ・予約連携",
                  items: ["デザイン・コーディング", "レスポンシブ対応", "お問い合わせフォーム", "SEO基本設定", "サブページ制作", "ブログ・予約連携"],
                },
              ].map((plan, i) => (
                <FadeIn key={plan.name} delay={i * 80 + 100}>
                  <div className="h-full rounded-2xl border border-gray-100 bg-gray-50 p-7 flex flex-col gap-5">
                    <div>
                      <p className="text-base font-bold text-[#0a0a0a] mb-1">{plan.name}</p>
                      <p className="text-xs text-gray-400">{plan.desc}</p>
                    </div>
                    <div>
                      <div className="flex items-end gap-1.5 mb-1">
                        <span className="text-xl font-bold text-[#0a0a0a]">{plan.init}</span>
                        <span className="text-xs text-gray-400 mb-0.5">初期（税別）</span>
                      </div>
                      <div className="flex items-end gap-1.5">
                        <span className="text-2xl font-bold text-[#f97316]">{plan.monthly}</span>
                        <span className="text-xs text-gray-400 mb-0.5">/ 月（税別）</span>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {plan.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* 自動化ツール */}
            <FadeIn delay={80}>
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-5">自動化ツール（問診票 / 予約 / QRオーダー）</p>
            </FadeIn>
            <FadeIn delay={120}>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 mb-12 flex flex-col sm:flex-row sm:items-center gap-8">
                <div className="shrink-0">
                  <div className="flex items-end gap-1.5 mb-1">
                    <span className="text-2xl font-bold text-[#0a0a0a]">¥20,000</span>
                    <span className="text-sm text-gray-400 mb-0.5">初期（税別）</span>
                  </div>
                  <div className="flex items-end gap-1.5">
                    <span className="text-3xl font-bold text-[#f97316]">¥5,000</span>
                    <span className="text-sm text-gray-400 mb-0.5">/ 月（税別）</span>
                  </div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-2 flex-1">
                  {["システム設計・実装", "スマホ対応UI", "スタッフ向け管理画面", "機能の小改善・調整（月1〜2回）", "不具合・バグ対応", "操作サポート"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="border border-gray-100 rounded-2xl p-8">
                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">ランニングコスト（お客様負担）</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  サーバー費用は<span className="text-[#0a0a0a] font-semibold">ほぼ無料で運用できます。</span>小規模な整骨院・店舗であれば、追加費用がかかるケースはほとんどありません。独自ドメインを取得する場合のみ、約1,500円/年の費用が発生します。
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="bg-gray-900 text-white py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">Message</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">想い</h2>
            </FadeIn>
            <div className="grid lg:grid-cols-5 gap-16 items-center">
              <FadeIn delay={100} className="lg:col-span-3">
                <div className="flex flex-col gap-6 text-gray-300 leading-relaxed text-base">
                  <p>
                    私はもともと営業職として働いていました。毎日の書類作業・入力・転記――本来の仕事以外のことに、思いのほか多くの時間を取られていました。やるべきことはわかっているのに、目の前の作業に追われて前に進めない、そんなもどかしさを感じていました。
                  </p>
                  <p>
                    「どうすれば本来取り組みたい仕事に時間を使えるか」を常に考えながら働く中で、Webの力で作業を自動化することに可能性を感じ、Y.Ydevを立ち上げました。
                  </p>
                  <p>
                    整骨院・店舗を経営されている方は、施術・接客・経営と、やるべきことが山積みです。そこに書類仕事や手作業が重なれば、好きな仕事をする時間はどんどん削られていきます。「もっと患者さんと向き合いたい」「本業に集中したい」そう思いながらも、毎日の作業に追われている方がたくさんいると感じています。
                  </p>
                  <p>
                    そんな方々の「やらなきゃいけない作業」を少しでも減らして、本当にやりたいことに時間を使ってもらいたい。それがY.Ydevの想いです。
                  </p>
                  <div className="pt-2">
                    <p className="text-white font-bold text-lg">Yoshida Yusei</p>
                    <p className="text-sm text-gray-400">Y.Ydev / Web Developer</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={200} className="lg:col-span-2">
                <div className="flex justify-center">
                  <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-2xl ring-4 ring-[#f97316]/30">
                    <Image
                      src="/images/profile.png"
                      alt="Yoshida Yusei"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="relative bg-[#0a0a0a] text-white py-24 md:py-32 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle at 30% 50%, #f97316 0%, transparent 50%), radial-gradient(circle at 70% 50%, #ea580c 0%, transparent 50%)",
            }}
          />
          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">Contact</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                無料相談はこちら
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto leading-relaxed mb-10">
                「こんな作業、自動化できないかな」と思ったらまず相談してください。
                要件整理から対応します。お見積もりは無料です。
              </p>
              <a
                href="mailto:yo4da2003@gmail.com"
                className="inline-flex items-center gap-2 bg-[#f97316] text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-[#ea580c] transition-colors shadow-lg shadow-orange-500/25"
              >
                メールで問い合わせる
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4h12v9H2V4zm0 0l6 5 6-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </FadeIn>
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
