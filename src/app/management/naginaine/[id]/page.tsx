"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import {
  STAFF_LIST,
  loadPatient,
  loadVisits,
  saveVisit,
  updatePatient,
  calcAge,
  type Patient,
  type VisitRecord,
} from "../data";
import { FrontSVG, BackSVG } from "../components/BodyMap";

const emptyForm = {
  visitDate: "",
  staff: "",
  treatmentParts: [] as string[],
  conversationNote: "",
  treatmentContent: "",
  painLevel: "",
  painChange: "" as VisitRecord["painChange"],
  nextAppointment: "",
  notes: "",
};

function painChangeClass(change: string) {
  if (change === "改善") return "change-good";
  if (change === "悪化") return "change-bad";
  return "change-neutral";
}

function painChangeLabel(change: string) {
  if (change === "改善") return "↑ 改善";
  if (change === "悪化") return "↓ 悪化";
  return "→ 変わらない";
}

export default function PatientDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [patient, setPatient] = useState<Patient | null>(null);
  const [records, setRecords] = useState<VisitRecord[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState<Patient | null>(null);
  const [editSaving, setEditSaving] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setForm(f => ({ ...f, visitDate: today }));
  }, []);

  useEffect(() => {
    (async () => {
      const [p, visits] = await Promise.all([loadPatient(id), loadVisits(id)]);
      setPatient(p);
      setRecords(visits);
      setLoading(false);
    })();
  }, [id]);

  async function refreshVisits() {
    const visits = await loadVisits(id);
    setRecords(visits);
  }

  if (loading) {
    return <div className="admin-wrap"><div className="admin-empty">読み込み中...</div></div>;
  }

  if (!patient) {
    return (
      <div className="admin-wrap">
        <p style={{ color: "var(--muted)", padding: "40px 0", textAlign: "center" }}>患者が見つかりません</p>
        <button className="back-btn" onClick={() => router.push("/management/naginaine")}>← 一覧に戻る</button>
      </div>
    );
  }

  function set<K extends keyof typeof form>(key: K, val: (typeof form)[K]) {
    setForm(f => ({ ...f, [key]: val }));
  }

  function togglePart(part: string) {
    setForm(f => ({
      ...f,
      treatmentParts: f.treatmentParts.includes(part)
        ? f.treatmentParts.filter(p => p !== part)
        : [...f.treatmentParts, part],
    }));
  }

  async function handleEditSave() {
    if (!editForm) return;
    setEditSaving(true);
    try {
      await updatePatient(editForm);
      setPatient(editForm);
      setShowEditModal(false);
    } catch (e) {
      alert("更新に失敗しました。もう一度お試しください。");
      console.error(e);
    } finally {
      setEditSaving(false);
    }
  }

  async function handleSave() {
    if (!form.visitDate || !form.staff || !form.painLevel) {
      alert("来院日・担当スタッフ・痛みレベルは必須です");
      return;
    }
    setSaving(true);
    try {
      const record: VisitRecord = {
        id: `v-${Date.now()}`,
        ...form,
        createdAt: new Date().toISOString(),
      };
      await saveVisit(id, record);
      await refreshVisits();
      const today = new Date().toISOString().split("T")[0];
      setForm({ ...emptyForm, visitDate: today });
      setShowModal(false);
    } catch (e) {
      alert("保存に失敗しました。もう一度お試しください。");
      console.error(e);
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      {showEditModal && editForm && (
        <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) setShowEditModal(false); }}>
          <div className="modal-box">
            <div className="modal-header">
              <h2 className="modal-title">患者情報を編集</h2>
              <button className="modal-close" onClick={() => setShowEditModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="field">
                <label>初診担当スタッフ</label>
                <select value={editForm.initialStaff} onChange={e => setEditForm({ ...editForm, initialStaff: e.target.value })}>
                  <option value="">未設定</option>
                  {STAFF_LIST.map(name => <option key={name} value={name}>{name}</option>)}
                </select>
              </div>
              <div className="field">
                <label>患者名</label>
                <input type="text" value={editForm.name} onChange={e => setEditForm({ ...editForm, name: e.target.value })} />
              </div>
              <div className="field">
                <label>フリガナ</label>
                <input type="text" value={editForm.kana} onChange={e => setEditForm({ ...editForm, kana: e.target.value })} />
              </div>
              <div className="field">
                <label>電話番号</label>
                <input type="tel" value={editForm.tel} onChange={e => setEditForm({ ...editForm, tel: e.target.value })} />
              </div>
              <div className="field">
                <label>住所</label>
                <input type="text" value={editForm.address} onChange={e => setEditForm({ ...editForm, address: e.target.value })} />
              </div>
              <div className="field">
                <label>職業</label>
                <input type="text" value={editForm.job} onChange={e => setEditForm({ ...editForm, job: e.target.value })} />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-cancel" onClick={() => setShowEditModal(false)}>キャンセル</button>
              <button className="btn-save" onClick={handleEditSave} disabled={editSaving}>
                {editSaving ? "保存中..." : "更新する"}
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) setShowModal(false); }}>
          <div className="modal-box">
            <div className="modal-header">
              <h2 className="modal-title">来院記録を追加</h2>
              <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="field">
                <label>来院日<span className="required">必須</span></label>
                <input type="date" value={form.visitDate} onChange={e => set("visitDate", e.target.value)} />
              </div>
              <div className="field">
                <label>担当スタッフ<span className="required">必須</span></label>
                <select value={form.staff} onChange={e => set("staff", e.target.value)}>
                  <option value="">選択してください</option>
                  {STAFF_LIST.map(name => <option key={name} value={name}>{name}</option>)}
                </select>
              </div>
              <div className="field">
                <label>施術部位</label>
                <div className="body-views">
                  <div className="body-view-col">
                    <div className="body-view-label">前面</div>
                    <div className="body-view-wrap">
                      <FrontSVG selected={new Set(form.treatmentParts)} onToggle={togglePart} />
                    </div>
                  </div>
                  <div className="body-view-col">
                    <div className="body-view-label">背面</div>
                    <div className="body-view-wrap">
                      <BackSVG selected={new Set(form.treatmentParts)} onToggle={togglePart} />
                    </div>
                  </div>
                </div>
                <div className="body-map-hint">タップで施術部位を選択</div>
                {form.treatmentParts.length > 0 && (
                  <div className="selected-tags" style={{ marginTop: "10px" }}>
                    {form.treatmentParts.map(p => (
                      <span className="part-tag" key={p}>
                        {p}<span className="rm" onClick={() => togglePart(p)}>×</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="field">
                <label>会話メモ（患者の訴え・状態）</label>
                <textarea placeholder="患者さんからの訴え、気になる点など" value={form.conversationNote} onChange={e => set("conversationNote", e.target.value)} />
              </div>
              <div className="field">
                <label>施術内容</label>
                <textarea placeholder="今日行った施術の内容" value={form.treatmentContent} onChange={e => set("treatmentContent", e.target.value)} />
              </div>
              <div className="field">
                <label>今日の痛みレベル（1〜10）<span className="required">必須</span></label>
                <div className="sub-label">1＝ほとんど気にならない　10＝我慢できないほど</div>
                <div className="pain-scale">
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <div className="pain-scale-item" key={n}>
                      <input type="radio" name="modal-pain" id={`mp${n}`} value={String(n)} checked={form.painLevel === String(n)} onChange={() => set("painLevel", String(n))} />
                      <label htmlFor={`mp${n}`}>{n}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="field">
                <label>症状の変化</label>
                <div className="radio-group">
                  {(["改善", "変わらない", "悪化"] as const).map(v => (
                    <div className="radio-btn" key={v}>
                      <input type="radio" name="modal-change" id={`mc-${v}`} value={v} checked={form.painChange === v} onChange={() => set("painChange", v)} />
                      <label htmlFor={`mc-${v}`}>{v}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="field">
                <label>次回予約日</label>
                <input type="date" value={form.nextAppointment} onChange={e => set("nextAppointment", e.target.value)} />
              </div>
              <div className="field">
                <label>備考・申し送り</label>
                <textarea placeholder="次回担当者への申し送りなど" value={form.notes} onChange={e => set("notes", e.target.value)} />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-cancel" onClick={() => setShowModal(false)}>キャンセル</button>
              <button className="btn-save" onClick={handleSave} disabled={saving}>
                {saving ? "保存中..." : "記録を保存する"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="admin-header">
        <div className="admin-header-logo">🌿 NAGINAINE SEIKOTSUIN</div>
        <h1 className="admin-header-title">スタッフ管理画面</h1>
      </div>

      <div className="admin-wrap">
        <button className="back-btn" onClick={() => router.push("/management/naginaine")}>← 患者一覧に戻る</button>

        <div className="patient-info-card">
          <div className="patient-info-top">
            <div className="patient-avatar large">{patient.name[0]}</div>
            <div style={{ flex: 1 }}>
              <div className="patient-detail-name">{patient.name}</div>
              <div className="patient-detail-kana">{patient.kana}</div>
            </div>
            <button className="btn-cancel" style={{ alignSelf: "flex-start" }} onClick={() => { setEditForm({ ...patient }); setShowEditModal(true); }}>
              編集
            </button>
          </div>
          <div className="info-grid">
            <div className="info-row"><span className="info-label">性別</span><span>{patient.gender}</span></div>
            <div className="info-row"><span className="info-label">年齢</span><span>{calcAge(patient.birthday)}歳（{patient.birthday}生）</span></div>
            <div className="info-row"><span className="info-label">電話番号</span><span>{patient.tel}</span></div>
            <div className="info-row"><span className="info-label">住所</span><span>{patient.address}</span></div>
            <div className="info-row"><span className="info-label">職業</span><span>{patient.job}</span></div>
          </div>
          <div className="intake-summary">
            <div className="intake-summary-title">初診情報（{patient.registeredAt}）</div>
            <div className="info-grid">
              <div className="info-row"><span className="info-label">担当スタッフ</span><span>{patient.initialStaff}</span></div>
              <div className="info-row"><span className="info-label">痛い部位</span><span>{patient.initialPainParts}</span></div>
              <div className="info-row">
                <span className="info-label">初診痛みLv.</span>
                <span className="pain-level-badge" data-lv={patient.initialPainLevel}>Lv.{patient.initialPainLevel}</span>
              </div>
              <div className="info-row"><span className="info-label">原因</span><span>{patient.cause}</span></div>
              <div className="info-row"><span className="info-label">症状の期間</span><span>{patient.duration}</span></div>
              <div className="info-row"><span className="info-label">来院のきっかけ</span><span>{patient.referral}</span></div>
            </div>
          </div>
        </div>

        <div className="visits-section">
          <div className="visits-header">
            <h2 className="visits-title">来院記録（計{records.length + 1}回）</h2>
            <button className="add-record-btn" onClick={() => setShowModal(true)}>＋ 記録を追加</button>
          </div>

          <div className="timeline">
            {(() => {
              const chronological = [...records].sort((a, b) => a.visitDate.localeCompare(b.visitDate));
              const visitNumbers = Object.fromEntries(chronological.map((r, i) => [r.id, i + 2]));
              return records.map(record => (
                <div key={record.id} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="visit-card">
                    <div className="visit-card-header">
                      <div className="visit-card-header-left">
                        <span className="visit-date">{record.visitDate}</span>
                        <span className="visit-num-badge">{visitNumbers[record.id]}回目</span>
                        <span className="visit-staff">担当: {record.staff}</span>
                      </div>
                      <div className="visit-card-header-right">
                        <span className="pain-level-badge" data-lv={record.painLevel}>Lv.{record.painLevel}</span>
                        {record.painChange && (
                          <span className={`change-badge ${painChangeClass(record.painChange)}`}>
                            {painChangeLabel(record.painChange)}
                          </span>
                        )}
                      </div>
                    </div>
                    {record.treatmentParts.length > 0 && (
                      <div className="visit-section">
                        <div className="visit-section-label">施術部位</div>
                        <div className="selected-tags">
                          {record.treatmentParts.map(p => <span className="part-tag-sm" key={p}>{p}</span>)}
                        </div>
                      </div>
                    )}
                    {record.conversationNote && (
                      <div className="visit-section">
                        <div className="visit-section-label">会話メモ</div>
                        <div className="visit-text">{record.conversationNote}</div>
                      </div>
                    )}
                    {record.treatmentContent && (
                      <div className="visit-section">
                        <div className="visit-section-label">施術内容</div>
                        <div className="visit-text">{record.treatmentContent}</div>
                      </div>
                    )}
                    {(record.nextAppointment || record.notes) && (
                      <div className="visit-footer">
                        {record.nextAppointment && <span className="next-appointment">📅 次回: {record.nextAppointment}</span>}
                        {record.notes && <span className="visit-notes">📝 {record.notes}</span>}
                      </div>
                    )}
                  </div>
                </div>
              ));
            })()}
            <div className="timeline-item">
              <div className="timeline-dot initial" />
              <div className="visit-card initial-card">
                <div className="visit-card-header">
                  <div className="visit-card-header-left">
                    <span className="visit-date">{patient.registeredAt}</span>
                    <span className="initial-label">初診</span>
                    <span className="visit-staff">担当: {patient.initialStaff}</span>
                  </div>
                  <span className="pain-level-badge" data-lv={patient.initialPainLevel}>Lv.{patient.initialPainLevel}</span>
                </div>
                <div className="visit-section">
                  <div className="visit-section-label">痛い部位</div>
                  <div className="visit-text">{patient.initialPainParts}</div>
                </div>
                <div className="visit-section">
                  <div className="visit-section-label">原因・期間</div>
                  <div className="visit-text">{patient.cause} · {patient.duration}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
