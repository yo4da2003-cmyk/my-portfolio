"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loadPatients, loadVisits, calcAge, type Patient } from "./data";

export default function AdminPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [patients, setPatients] = useState<Patient[]>([]);
  const [visitCounts, setVisitCounts] = useState<Record<string, number>>({});
  const [lastVisits, setLastVisits] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const ps = await loadPatients();
      setPatients(ps);
      const counts: Record<string, number> = {};
      const lasts: Record<string, string> = {};
      await Promise.all(
        ps.map(async (p) => {
          const records = await loadVisits(p.id);
          counts[p.id] = records.length;
          if (records.length > 0) {
            lasts[p.id] = records[0].visitDate;
          }
        })
      );
      setVisitCounts(counts);
      setLastVisits(lasts);
      setLoading(false);
    })();
  }, []);

  const q = search.replace(/[\s　]/g, "");
  const filtered = patients.filter(p =>
    p.name.replace(/[\s　]/g, "").includes(q) ||
    p.kana.replace(/[\s　]/g, "").includes(q) ||
    p.tel.replace(/-/g, "").includes(q.replace(/-/g, ""))
  );

  return (
    <>
      <div className="admin-header">
        <div className="admin-header-logo">🌿 NAGINAINE SEIKOTSUIN</div>
        <h1 className="admin-header-title">スタッフ管理画面</h1>
        <p className="admin-header-sub">来院記録 管理システム</p>
      </div>

      <div className="admin-wrap">
        <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
          <div className="admin-search-wrap" style={{ flex: 1 }}>
            <span className="admin-search-icon">🔍</span>
            <input
              type="text"
              className="admin-search-input"
              placeholder="患者名・フリガナ・電話番号で検索..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <button className="admin-search-clear" onClick={() => setSearch("")}>×</button>
            )}
          </div>
          <button
            className="add-record-btn"
            onClick={() => router.push("/management/naginaine/new-patient")}
          >
            ＋ 新患登録
          </button>
        </div>

        {loading ? (
          <div className="admin-empty">読み込み中...</div>
        ) : (
          <>
            <div className="admin-list-meta">患者一覧 — {filtered.length}名</div>
            <div className="patient-list">
              {filtered.map(p => {
                const visitCount = visitCounts[p.id] ?? 0;
                const lastVisit = lastVisits[p.id];
                return (
                  <div key={p.id} className="patient-card" onClick={() => router.push(`/management/naginaine/${p.id}`)}>
                    <div className="patient-avatar">{p.name[0]}</div>
                    <div className="patient-card-body">
                      <div className="patient-name-row">
                        <span className="patient-name">{p.name}</span>
                        <span className="patient-kana">{p.kana}</span>
                      </div>
                      <div className="patient-meta">
                        {p.gender} · {calcAge(p.birthday)}歳 · {p.tel}
                      </div>
                      <div className="patient-meta-sub">
                        初診: {p.registeredAt} · 初診痛み Lv.{p.initialPainLevel}
                        {lastVisit && <> · 最終来院: {lastVisit}</>}
                      </div>
                    </div>
                    <div className="patient-card-right">
                      <div className="visit-badge">{visitCount + 1}回</div>
                      <div className="chevron-icon">›</div>
                    </div>
                  </div>
                );
              })}
            </div>
            {filtered.length === 0 && !loading && (
              <div className="admin-empty">
                {search ? `「${search}」に一致する患者が見つかりません` : "患者が登録されていません。「＋ 新患登録」から追加してください。"}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
