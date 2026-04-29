import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { company, name, email, tel } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: "必須項目が不足しています" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Y.Ydev <onboarding@resend.dev>",
      to: "yo4da2003@gmail.com",
      subject: `【資料DL】${company || "（院名未入力）"} / ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px;background:#fff;">
          <h2 style="color:#e07b2a;font-size:18px;margin-bottom:16px;">📄 サービス資料がダウンロードされました</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 12px;background:#fef3e8;color:#9a7a5a;width:120px;">院名・会社名</td><td style="padding:8px 12px;border-bottom:1px solid #f0d4b0;">${company || "－"}</td></tr>
            <tr><td style="padding:8px 12px;background:#fef3e8;color:#9a7a5a;">氏名</td><td style="padding:8px 12px;border-bottom:1px solid #f0d4b0;">${name}</td></tr>
            <tr><td style="padding:8px 12px;background:#fef3e8;color:#9a7a5a;">メール</td><td style="padding:8px 12px;border-bottom:1px solid #f0d4b0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 12px;background:#fef3e8;color:#9a7a5a;">電話番号</td><td style="padding:8px 12px;">${tel || "－"}</td></tr>
          </table>
          <p style="margin-top:20px;font-size:12px;color:#9a7a5a;">Y.Ydev LP より自動送信</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 500 });
  }
}
