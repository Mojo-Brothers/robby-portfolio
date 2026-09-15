export interface ValuePillar {
  title: string;
  description: string;
  iconName: string;
}

export const VALUE_PILLARS: ValuePillar[] = [
  {
    title: 'Pemahaman Alur Kerja Rumah Sakit',
    description:
      'Memahami dinamika riil pelayanan kesehatan: triase gawat darurat, serah terima shift, sirkulasi linen steril, hingga verifikasi resep obat. Mampu menerjemahkan kebutuhan operasional lapangan menjadi spesifikasi sistem yang presisi.',
    iconName: 'Activity',
  },
  {
    title: 'Penyelesaian Masalah Praktis',
    description:
      'Berfokus mengurai friksi birokrasi manual yang memperlambat alur pelayanan: pencatatan ambulans berbasis PIN cepat, monitoring stok linen visual, dan layar jadwal dokter otomatis tanpa beban operasional baru.',
    iconName: 'Wrench',
  },
  {
    title: 'Pengembangan Full-Stack Mandiri',
    description:
      'Mengeksekusi solusi menyeluruh mulai dari arsitektur frontend responsif (React, TypeScript), sinkronisasi real-time (Firestore), hingga perancangan basis data relasional terstruktur (PostgreSQL, Prisma ORM).',
    iconName: 'Layers',
  },
  {
    title: 'Integritas Data & Keselamatan Pasien',
    description:
      'Memiliki kesadaran bahwa akurasi data medis berhubungan langsung dengan keselamatan pasien. Mengimplementasikan validasi ketat, hard-blocker alergi obat, dan pemantauan batas suhu penyimpanan darah.',
    iconName: 'ShieldCheck',
  },
];

export interface TechnicalEvidenceItem {
  domain: string;
  proof: string;
  significance: string;
  project: string;
}

export const TECHNICAL_EVIDENCE_LIST: TechnicalEvidenceItem[] = [
  {
    domain: 'Clinical Workflow Modeling',
    proof: 'Triase ESI v4, Survei Primer ABCDE, CPPT/SOAP & CPOE',
    significance: 'Menunjukkan kemampuan memodelkan alur klinis kompleks ke dalam logika sistem interaktif.',
    project: 'NurseFlow HIS',
  },
  {
    domain: 'Disiplin Software Testing',
    proof: '44 Test Suites (185 Automated Tests Passing)',
    significance: 'Membuktikan kepatuhan terhadap verifikasi kode, negative-path testing, dan stabilitas algoritma.',
    project: 'NurseFlow HIS',
  },
  {
    domain: 'Database & Data Integrity',
    proof: 'PostgreSQL Relational Schema & Structured SQL Migrations',
    significance: 'Membuktikan pemodelan entitas pasien (EMPI), encounter, farmasi FEFO, dan audit logging yang konsisten.',
    project: 'NurseFlow HIS',
  },
  {
    domain: 'Mobile Field Operations',
    proof: 'PIN Gate 6-Digit & Capacitor Android Hybrid Packaging',
    significance: 'Menghadirkan akses cepat bagi staf lapangan (driver & perawat) tanpa friksi autentikasi email rumit.',
    project: 'IGD Operations',
  },
  {
    domain: 'Real-Time Synchronization',
    proof: 'Firebase Firestore onSnapshot Event Listeners',
    significance: 'Memastikan TV Display monitor IGD dan dashboard admin selalu tersinkronisasi seketika tanpa refresh.',
    project: 'IGD Operations',
  },
  {
    domain: 'Otomatisasi Pelaporan Resmi',
    proof: 'Generator Dokumen PDF (A4 Landscape) & Excel (13 Kolom)',
    significance: 'Menjawab kebutuhan administratif koordinasi IGD dan manajemen rumah sakit secara instan.',
    project: 'IGD Operations',
  },
];

export interface SkillCategory {
  categoryName: string;
  skills: { name: string; context: string }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    categoryName: 'Healthcare Domain & Workflow',
    skills: [
      { name: 'Alur Operasional Rumah Sakit', context: 'Logistik ambulans rujukan dan sirkulasi linen IGD' },
      { name: 'Triase Instalasi Gawat Darurat', context: 'Emergency Severity Index (ESI v4) & ABCDE survey' },
      { name: 'Dokumentasi CPPT / SOAP', context: 'Struktur rekam medis elektronik terstandarisasi' },
      { name: 'Keselamatan Penggunaan Obat', context: 'Pencegahan kontraindikasi & alergi pada resep' },
      { name: 'Manajemen Jadwal Jaga Dokter', context: 'Jadwal bulanan dan penanganan override darurat' },
    ],
  },
  {
    categoryName: 'Frontend Development',
    skills: [
      { name: 'React (v18 & v19)', context: 'Component-driven, hooks kustom, dan optimasi render' },
      { name: 'TypeScript', context: 'Strict typing, domain contract interfaces, dan type safety' },
      { name: 'Tailwind CSS (v3 & v4)', context: 'Design system enterprise, responsif, dan aksesibel' },
      { name: 'Vite', context: 'Build tooling modern, modul HMR, dan bundling efisien' },
      { name: 'Zustand & Context API', context: 'Manajemen state reaktif untuk form medis multi-langkah' },
    ],
  },
  {
    categoryName: 'Backend, Data & Cloud',
    skills: [
      { name: 'PostgreSQL & SQL Migrations', context: 'Skema relasional, index parsial, dan data constraint' },
      { name: 'Prisma ORM', context: 'Type-safe database querying and schema modeling' },
      { name: 'Firebase Firestore & Auth', context: 'NoSQL real-time synchronization dan security rules' },
      { name: 'Node.js & Express API', context: 'Modular routing dan clinical validation pipeline' },
    ],
  },
  {
    categoryName: 'Mobile, Tooling & Standards',
    skills: [
      { name: 'Capacitor Android', context: 'Build dan packaging aplikasi mobile APK mandiri' },
      { name: 'Vitest & Playwright', context: 'Unit, integration, dan headless validation testing' },
      { name: 'Automated Reporting (PDF & XLSX)', context: 'jsPDF, jspdf-autotable, dan SheetJS' },
      { name: 'Konsep Standar Regulasi', context: 'Referensi prinsip JCI IPSG 1-6, Permenkes 24/2022, & HL7 FHIR' },
    ],
  },
];
