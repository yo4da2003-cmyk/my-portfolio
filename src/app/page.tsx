import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import FadeIn from "@/components/FadeIn";
import HeroDownloadButton from "@/components/HeroDownloadButton";
import {
  FileText,
  Users,
  Wallet,
  ClipboardList,
  CalendarDays,
  Smartphone,
  Sliders,
  Target,
  Link2,
  MessageCircle,
  Check,
  type LucideIcon,
} from "lucide-react";

const painPoints: string[] = [
  "紙の問診票の記入・転記・保管に、毎日時間を取られている",
  "待合室で問診票を書く時間が、患者さんのストレスになっている",
  "自院に合わせて問診項目を変えたいが、既製SaaSはカスタマイズ料金が高い",
  "大手SaaSは月15,000円〜と高すぎて、小規模院では手が出ない",
];

type MeritVisual = { icon: LucideIcon; label: string; sub: string };
const merits: { num: string; title: string; desc: string; before: MeritVisual; after: MeritVisual }[] = [
  {
    num: "メリット1",
    title: "受付スタッフの転記作業が、ゼロに。",
    desc: "紙の問診票は、記入後に受付スタッフがカルテへ手書きで転記し、ファイリング・保管する必要があります。Web問診票なら入力データがそのまま管理画面に反映され、転記・保管の作業がゼロに。空いた時間で患者さんとの会話や施術準備に集中できます。",
    before: { icon: FileText, label: "紙の問診票", sub: "手書き転記が必要" },
    after: { icon: ClipboardList, label: "Web入力", sub: "データが自動連携" },
  },
  {
    num: "メリット2",
    title: "待合室の混雑とストレスを、解消。",
    desc: "来院後に問診票を書く運用だと、混雑時に患者さんを長く待たせ、満足度が下がります。事前にスマホで入力できるWeb問診票なら、来院後すぐ施術へ。患者さんも院もスムーズに動けます。",
    before: { icon: Users, label: "待合室で記入", sub: "混雑・待ち時間" },
    after: { icon: Smartphone, label: "来院前に入力", sub: "すぐ施術へ" },
  },
  {
    num: "メリット3",
    title: "自院仕様に、項目を自由設計。",
    desc: "既製SaaSは項目変更が有料 or 制限ありが一般的。Y.Ydevは「カスタマイズ・改修は月額に込み」なので、運用しながら自院の施術内容や患者層に合わせて、問診項目を自由に変えられます。",
    before: { icon: FileText, label: "既製テンプレ", sub: "カスタマイズ有料" },
    after: { icon: Sliders, label: "自院専用フォーム", sub: "改修費は月額込み" },
  },
  {
    num: "メリット4",
    title: "大手SaaSの1/3価格で、導入。",
    desc: "大手SaaSは月額1.5万円〜が相場。Y.Ydevは月5,000円・初期7万円から。電子カルテ未導入の小規模院でも、無理なく導入できる価格設計です。",
    before: { icon: Wallet, label: "月15,000円〜", sub: "大手SaaS" },
    after: { icon: Wallet, label: "月5,000円", sub: "Y.Ydev" },
  },
];

const servicePillars = [
  {
    icon: ClipboardList,
    eyebrow: "Digital Questionnaire",
    category: "デジタル問診票",
    tagline: "受付の手間を、ゼロへ。",
    desc: "整骨院・自費治療院向けに、紙の問診票をスマホ・タブレットで完結するWeb問診票に置き換えます。受付スタッフの記入・転記作業を削減し、患者さんの待ち時間も短縮します。電子カルテ未導入の院でも単独導入できる軽量設計です。",
    items: [
      { icon: ClipboardList, label: "スマホ・タブレットで記入完了" },
      { icon: FileText, label: "項目・帳票は自院仕様にカスタマイズ" },
      { icon: Users, label: "スタッフ向け管理画面・一覧出力" },
      { icon: CalendarDays, label: "予約・カルテ管理との連携も対応可" },
    ],
    dark: false,
  },
];

const orderTypes: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Target,
    title: "問診票だけでもOK",
    desc: "「まず問診票だけ試したい」という単品依頼ももちろん対応。最小構成からスタートできます。",
  },
  {
    icon: Link2,
    title: "予約・カルテとセットもOK",
    desc: "「問診票と予約をセットで」「カルテ管理も追加で」など、機能の組み合わせも歓迎です。",
  },
  {
    icon: MessageCircle,
    title: "相談からでもOK",
    desc: "「何から始めればいいかわからない」という段階でも大丈夫。要件整理から一緒に考えます。",
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
    title: "カスタマイズ・改修は月額に込み",
    desc: "問診票の項目変更、帳票書式の調整、新機能追加。月額料金に改修対応が含まれているので、運用しながら自院仕様に育てていけます。",
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
    title: "デジタル問診票（整骨院向け）",
    desc: "紙の問診票をWebに置き換えたデモです。スマホ・タブレットで完結し、受付スタッフの記入・転記作業をゼロに。部位タップ選択・痛みスケールなど、整骨院の現場でそのまま使えるUIを実装しています。",
    href: "/questionnaire/seikotsu-in",
    screenshot: "/screenshots/questionnaire.png",
  },
  {
    tag: "DEMO",
    title: "予約システム（連携対応）",
    desc: "問診票とセット導入できるオンライン予約デモです。メニュー選択・カレンダー日時選択・スタッフ向け管理画面（ステータス更新）まで一通り体験できます。",
    href: "/booking/seikotsu-in",
    screenshot: "/screenshots/booking.png",
  },
  {
    tag: "DEMO",
    title: "カルテ・来院管理（問診票連携可）",
    desc: "Web問診票の内容をそのままカルテに引き継げる管理画面デモです。来院履歴のタイムライン表示・施術部位の人体図タップ選択など、紙運用からの移行を想定した機能を実装しています。",
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
                紙の問診票はWebに任せて、<br className="md:hidden" />あなたは患者さんと向き合う時間を増やしてください。
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
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-6">Problem</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-14 leading-tight text-[#f97316]">
                こんなことに、<br />困っていませんか？
              </h2>
            </FadeIn>
            <ul className="flex flex-col gap-5 text-left max-w-2xl mx-auto">
              {painPoints.map((text, i) => (
                <FadeIn key={text} delay={i * 80}>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-[#f97316] flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-[#f97316]" strokeWidth={3} />
                    </span>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed pt-0.5">{text}</p>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </section>

        {/* ── MERITS ── */}
        <section className="bg-white py-24 md:py-32 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#f97316] uppercase mb-4">Merit</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0a0a0a]">
                Y.Ydev問診票の<br className="md:hidden" />4つのメリット
              </h2>
              <p className="text-gray-500 mb-16 text-sm">紙運用から切り替えた院は、ここが変わります。</p>
            </FadeIn>

            <div className="flex flex-col gap-20">
              {merits.map((m, i) => (
                <FadeIn key={m.num} delay={i * 80}>
                  <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    {/* 左：テキスト */}
                    <div>
                      <p className="text-sm font-semibold text-[#f97316] mb-3 tracking-wide">— {m.num}</p>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5 leading-tight">
                        {m.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>

                    {/* 右：Before / After */}
                    <div className="flex items-center gap-3 md:gap-5">
                      <div className="flex-1 rounded-2xl bg-gray-50 border border-gray-200 p-5 md:p-6 flex flex-col items-center text-center min-h-[170px]">
                        <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">Before</p>
                        <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-3">
                          <m.before.icon className="w-6 h-6 text-gray-400" />
                        </div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">{m.before.label}</p>
                        <p className="text-xs text-gray-400">{m.before.sub}</p>
                      </div>

                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#f97316]">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>

                      <div className="flex-1 rounded-2xl bg-orange-50 border border-[#f97316]/40 p-5 md:p-6 flex flex-col items-center text-center min-h-[170px]">
                        <p className="text-[10px] font-bold tracking-widest text-[#f97316] uppercase mb-3">After</p>
                        <div className="w-12 h-12 rounded-full bg-white border border-[#f97316]/40 flex items-center justify-center mb-3">
                          <m.after.icon className="w-6 h-6 text-[#f97316]" />
                        </div>
                        <p className="text-sm font-semibold text-[#0a0a0a] mb-1">{m.after.label}</p>
                        <p className="text-xs text-gray-500">{m.after.sub}</p>
                      </div>
                    </div>
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
              <p className="text-gray-500 mb-14 text-sm">紙の問診票運用を、シンプルに置き換えます。</p>
            </FadeIn>

            <div className="max-w-2xl mx-auto">
              {servicePillars.map((p) => (
                <FadeIn key={p.category}>
                  <div className="h-full rounded-2xl overflow-hidden flex flex-col border bg-white border-gray-100 hover:border-[#f97316] transition-all duration-300 hover:shadow-2xl">
                    <div className="px-8 pt-8 pb-6 border-b border-gray-100">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 bg-orange-50">
                        <p.icon className="w-6 h-6 text-[#f97316]" />
                      </div>
                      <p className="text-xs font-semibold tracking-widest uppercase mb-2 text-[#f97316]">
                        {p.eyebrow}
                      </p>
                      <h3 className="text-2xl font-bold mb-2 text-[#0a0a0a]">
                        {p.category}
                      </h3>
                      <p className="text-base font-medium text-[#f97316]">
                        {p.tagline}
                      </p>
                    </div>

                    <div className="px-8 py-6 flex flex-col gap-6 flex-1">
                      <p className="text-sm leading-relaxed text-gray-500">
                        {p.desc}
                      </p>
                      <ul className="flex flex-col gap-3">
                        {p.items.map((item) => (
                          <li key={item.label} className="flex items-center gap-3">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-orange-50">
                              <Check className="w-3 h-3 text-[#f97316]" />
                            </span>
                            <span className="text-sm font-medium text-gray-700">
                              {item.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-2">
                        <a
                          href="#pricing"
                          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors text-[#0a0a0a] hover:text-[#f97316]"
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

            {/* デジタル問診票 */}
            <FadeIn delay={80}>
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-5">デジタル問診票</p>
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {[
                {
                  name: "ベーシック",
                  init: "¥70,000",
                  monthly: "¥5,000",
                  desc: "テンプレート＋自院ロゴ・色調整",
                  items: [
                    "問診票テンプレート（整骨院向け標準項目）",
                    "自院ロゴ・カラー反映",
                    "スマホ・タブレット対応UI",
                    "スタッフ向け管理画面",
                    "操作サポート",
                  ],
                  highlight: false,
                },
                {
                  name: "カスタム",
                  init: "¥100,000",
                  monthly: "¥5,000",
                  desc: "項目自由設計＋帳票カスタム",
                  items: [
                    "問診項目の自由設計",
                    "帳票・出力フォーマットのカスタム",
                    "予約・カルテ管理との連携対応",
                    "スマホ・タブレット対応UI",
                    "スタッフ向け管理画面",
                    "操作サポート",
                  ],
                  highlight: true,
                },
              ].map((plan, i) => (
                <FadeIn key={plan.name} delay={i * 80 + 100}>
                  <div className={`h-full rounded-2xl border p-7 flex flex-col gap-5 ${plan.highlight ? "border-[#f97316] bg-orange-50/40 shadow-lg shadow-orange-100" : "border-gray-100 bg-gray-50"}`}>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-base font-bold text-[#0a0a0a]">{plan.name}</p>
                        {plan.highlight && (
                          <span className="text-[10px] font-semibold tracking-widest uppercase text-white bg-[#f97316] px-2 py-0.5 rounded-full">
                            Recommend
                          </span>
                        )}
                      </div>
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
                        <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={140}>
              <div className="rounded-2xl border border-[#f97316]/30 bg-orange-50 px-6 py-5 mb-12 flex items-start gap-3">
                <Check className="w-5 h-5 text-[#f97316] shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#0a0a0a]">カスタマイズ・改修は月額に込み。</span>
                  項目の追加・帳票の調整・新機能の追加など、運用しながらの改修対応はすべて月額5,000円に含まれています。追加料金は発生しません。
                </p>
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
