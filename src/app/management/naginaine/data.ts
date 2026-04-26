export type Patient = {
  id: string;
  name: string;
  kana: string;
  birthday: string;
  gender: string;
  tel: string;
  address: string;
  job: string;
  initialPainParts: string;
  initialPainLevel: string;
  cause: string;
  duration: string;
  referral: string;
  registeredAt: string;
  initialStaff: string;
};

export type VisitRecord = {
  id: string;
  visitDate: string;
  staff: string;
  treatmentParts: string[];
  conversationNote: string;
  treatmentContent: string;
  painLevel: string;
  painChange: "改善" | "変わらない" | "悪化" | "";
  nextAppointment: string;
  notes: string;
  createdAt: string;
};

export const BODY_PARTS_GROUPS = [
  { label: "頭・首", parts: ["頭部", "首・頸部", "後頭部", "首の後ろ"] },
  { label: "肩・腕", parts: ["左肩", "右肩", "左上腕", "右上腕", "左肘・前腕", "右肘・前腕", "左手首・手", "右手首・手"] },
  { label: "体幹", parts: ["左胸部", "右胸部", "左腹部", "右腹部", "左背中（上部）", "右背中（上部）", "左腰", "右腰"] },
  { label: "骨盤・下半身", parts: ["骨盤・股関節", "お尻・仙骨", "左太もも", "右太もも", "左ひざ", "右ひざ", "左ふくらはぎ", "右ふくらはぎ", "左すね・足首", "右すね・足首"] },
];

export const STAFF_LIST = ["山本健二", "八木祐介", "佐藤良介", "加藤雅子", "篠崎涼允"];

const patients: Patient[] = [
  {
    id: "p-001",
    name: "田中太郎",
    kana: "タナカタロウ",
    birthday: "1985-03-15",
    gender: "男性",
    tel: "090-1234-5678",
    address: "大阪府大阪市中央区本町1-1-1",
    job: "会社員",
    initialPainParts: "左腰・左ふくらはぎ",
    initialPainLevel: "6",
    cause: "日常生活でのケガ",
    duration: "1〜2週間",
    referral: "ネット検索",
    registeredAt: "2025-01-10",
    initialStaff: "山本健二",
  },
  {
    id: "p-002",
    name: "山田太郎",
    kana: "ヤマダタロウ",
    birthday: "1992-07-22",
    gender: "男性",
    tel: "080-9876-5432",
    address: "大阪府堺市北区新金岡2-3-4",
    job: "自営業",
    initialPainParts: "右肩・首・頸部",
    initialPainLevel: "4",
    cause: "スポーツ中のケガ",
    duration: "数日前",
    referral: "ご紹介",
    registeredAt: "2025-02-05",
    initialStaff: "八木祐介",
  },
];

const visits: Record<string, VisitRecord[]> = {
  "p-001": [
    {
      id: "v-003",
      visitDate: "2025-02-01",
      staff: "山本健二",
      treatmentParts: ["左腰", "左ふくらはぎ"],
      conversationNote: "痛みがかなり落ち着いてきた。日常生活に支障がなくなってきた。",
      treatmentContent: "腰部マッサージ・ストレッチ指導・電気治療",
      painLevel: "3",
      painChange: "改善",
      nextAppointment: "2025-02-15",
      notes: "もう1〜2回で終了できそう",
      createdAt: "2025-02-01T10:00:00Z",
    },
    {
      id: "v-002",
      visitDate: "2025-01-24",
      staff: "山本健二",
      treatmentParts: ["左腰", "左ふくらはぎ"],
      conversationNote: "腰の痛みは少し楽になってきたとのこと。長時間座っていると辛い。",
      treatmentContent: "腰部マッサージ・ストレッチ指導",
      painLevel: "4",
      painChange: "改善",
      nextAppointment: "2025-02-01",
      notes: "次回も同様の施術を予定",
      createdAt: "2025-01-24T10:30:00Z",
    },
    {
      id: "v-001",
      visitDate: "2025-01-17",
      staff: "佐藤良介",
      treatmentParts: ["左腰"],
      conversationNote: "痛みが強い。立ち上がりが特につらい。",
      treatmentContent: "腰部温熱療法・電気治療",
      painLevel: "5",
      painChange: "変わらない",
      nextAppointment: "2025-01-24",
      notes: "",
      createdAt: "2025-01-17T14:00:00Z",
    },
  ],
  "p-002": [
    {
      id: "v-005",
      visitDate: "2025-02-19",
      staff: "加藤雅子",
      treatmentParts: ["右肩", "首・頸部"],
      conversationNote: "肩の可動域が広がってきた。痛みも大幅に減っている。",
      treatmentContent: "肩関節モビリゼーション・テーピング・ストレッチ",
      painLevel: "2",
      painChange: "改善",
      nextAppointment: "2025-02-26",
      notes: "",
      createdAt: "2025-02-19T11:00:00Z",
    },
    {
      id: "v-004",
      visitDate: "2025-02-12",
      staff: "加藤雅子",
      treatmentParts: ["右肩"],
      conversationNote: "スポーツ後に悪化する。腕を上げると引っかかる感じがある。",
      treatmentContent: "肩関節アプローチ・電気治療",
      painLevel: "3",
      painChange: "改善",
      nextAppointment: "2025-02-19",
      notes: "継続施術で改善傾向",
      createdAt: "2025-02-12T13:00:00Z",
    },
  ],
};

export async function loadPatients(): Promise<Patient[]> {
  return [...patients];
}

export async function loadPatient(id: string): Promise<Patient | null> {
  return patients.find(p => p.id === id) ?? null;
}

export async function savePatient(patient: Patient): Promise<void> {
  patients.unshift(patient);
}

export async function updatePatient(patient: Patient): Promise<void> {
  const idx = patients.findIndex(p => p.id === patient.id);
  if (idx !== -1) patients[idx] = patient;
}

export async function loadVisits(patientId: string): Promise<VisitRecord[]> {
  return [...(visits[patientId] ?? [])];
}

export async function saveVisit(patientId: string, record: VisitRecord): Promise<void> {
  if (!visits[patientId]) visits[patientId] = [];
  visits[patientId].unshift(record);
}

export function calcAge(birthday: string): number {
  const today = new Date();
  const birth = new Date(birthday);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}
