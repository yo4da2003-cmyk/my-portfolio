"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { savePatient, STAFF_LIST, BODY_PARTS_GROUPS, type Patient } from "../data";

const emptyForm = {
  name: "", kana: "", birthday: "", gender: "", tel: "",
  address: "", job: "", initialPainParts: "", initialPainLevel: "",
  cause: "", duration: "", referral: "", initialStaff: "",
};

export default function NewPatientPage() {
  const router = useRouter();
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  function set<K extends keyof typeof emptyForm>(key: K, val: string) {
    setForm(f => ({ ...f, [key]: val }));
  }

  async function handleSave() {
    if (!form.name || !form.birthday || !form.gender || !form.initialStaff || !form.initialPainLevel) {
      alert("患者名・生年月日・性別・担当スタッフ・初診痛みレベルは必須です");
      return;
    }
    setSaving(true);
    try {
      const today = new Date().toISOString().split("T")[0];
      const patient: Patient = { id: `p-${Date.now()}`, ...form, registeredAt: today };
      await savePatient(patient);
      router.push("/management/naginaine");
    } catch (e) {
      alert("登録に失敗しました。もう一度お試しください。");
      console.error(e);
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <div className="admin-header">
        <div className="admin-header-logo">🌿 NAGINAINE SEIKOTSUIN</div>
        <h1 className="admin-header-title">新患登録</h1>
      </div>

      <div className="admin-wrap">
        <button className="back-btn" onClick={() => router.push("/management/naginaine")}>← 患者一覧に戻る</button>

        <div className="patient-info-card">
          <div className="intake-summary-title" style={{ marginBottom: "16px" }}>基本情報</div>

          <div className="field">
            <label>患者名<span className="required">必須</span></label>
            <input type="text" placeholder="山田 太郎" value={form.name} onChange={e => set("name", e.target.value)} />
          </div>
          <div className="field">
            <label>フリガナ</label>
            <input type="text" placeholder="ヤマダ タロウ" value={form.kana} onChange={e => set("kana", e.target.value)} />
          </div>
          <div className="field">
            <label>生年月日<span className="required">必須</span></label>
            <input type="date" value={form.birthday} onChange={e => set("birthday", e.target.value)} />
          </div>
          <div className="field">
            <label>性別<span className="required">必須</span></label>
            <div className="radio-group">
              {["男性", "女性", "その他"].map(v => (
                <div className="radio-btn" key={v}>
                  <input type="radio" name="gender" id={`g-${v}`} value={v} checked={form.gender === v} onChange={() => set("gender", v)} />
                  <label htmlFor={`g-${v}`}>{v}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="field">
            <label>電話番号</label>
            <input type="tel" placeholder="090-1234-5678" value={form.tel} onChange={e => set("tel", e.target.value)} />
          </div>
          <div className="field">
            <label>住所</label>
            <input type="text" placeholder="大阪府..." value={form.address} onChange={e => set("address", e.target.value)} />
          </div>
          <div className="field">
            <label>職業</label>
            <select value={form.job} onChange={e => set("job", e.target.value)}>
              <option value="">選択してください</option>
              {["会社員", "自営業", "パート・アルバイト", "主婦・主夫", "学生", "無職", "その他"].map(v => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="patient-info-card">
          <div className="intake-summary-title" style={{ marginBottom: "16px" }}>初診情報</div>

          <div className="field">
            <label>担当スタッフ<span className="required">必須</span></label>
            <select value={form.initialStaff} onChange={e => set("initialStaff", e.target.value)}>
              <option value="">選択してください</option>
              {STAFF_LIST.map(name => <option key={name} value={name}>{name}</option>)}
            </select>
          </div>
          <div className="field">
            <label>痛い部位</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
              {BODY_PARTS_GROUPS.flatMap(g => g.parts).map(part => {
                const selected = form.initialPainParts.split("・").filter(Boolean).includes(part);
                return (
                  <button
                    key={part} type="button"
                    className={selected ? "part-tag" : "part-tag-sm"}
                    style={{ cursor: "pointer", border: selected ? "none" : "1px solid var(--border)" }}
                    onClick={() => {
                      const parts = form.initialPainParts.split("・").filter(Boolean);
                      const next = selected ? parts.filter(p => p !== part) : [...parts, part];
                      set("initialPainParts", next.join("・"));
                    }}
                  >
                    {part}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="field">
            <label>初診痛みレベル（1〜10）<span className="required">必須</span></label>
            <div className="pain-scale">
              {[1,2,3,4,5,6,7,8,9,10].map(n => (
                <div className="pain-scale-item" key={n}>
                  <input type="radio" name="pain-level" id={`pl${n}`} value={String(n)} checked={form.initialPainLevel === String(n)} onChange={() => set("initialPainLevel", String(n))} />
                  <label htmlFor={`pl${n}`}>{n}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="field">
            <label>原因</label>
            <select value={form.cause} onChange={e => set("cause", e.target.value)}>
              <option value="">選択してください</option>
              {["スポーツ中のケガ", "日常生活でのケガ", "交通事故", "仕事中のケガ", "心当たりがない・慢性的", "その他"].map(v => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>症状の期間</label>
            <select value={form.duration} onChange={e => set("duration", e.target.value)}>
              <option value="">選択してください</option>
              {["今日", "数日前", "1〜2週間", "1ヶ月以上", "半年以上", "1年以上"].map(v => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>来院のきっかけ</label>
            <select value={form.referral} onChange={e => set("referral", e.target.value)}>
              <option value="">選択してください</option>
              {["ネット検索", "SNS", "ご紹介", "チラシ・看板", "以前来院したことがある", "その他"].map(v => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ display: "flex", gap: "12px", marginTop: "8px", marginBottom: "32px" }}>
          <button className="btn-cancel" onClick={() => router.push("/management/naginaine")}>キャンセル</button>
          <button className="btn-save" onClick={handleSave} disabled={saving}>
            {saving ? "登録中..." : "患者を登録する"}
          </button>
        </div>
      </div>
    </>
  );
}
