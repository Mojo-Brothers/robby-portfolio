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
    title: 'Penyelesaian Masalah Praktis & IT Support',
    description:
      'Berfokus mengurai friksi operasional dan kendala teknis perangkat kerja staf: pencatatan ambulans berbasis PIN cepat, monitoring stok linen visual, dan layar jadwal dokter otomatis tanpa membebani rutinitas pelayanan.',
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

export type CompetencyLevel = 'Praktik' | 'Pemahaman Dasar' | 'Sedang Dipelajari';

export interface SkillItem {
  name: string;
  context: string;
  level: CompetencyLevel;
}

export interface SkillCategory {
  categoryName: string;
  categoryDescription: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    categoryName: 'Frontend Development',
    categoryDescription: 'Pembangunan antarmuka web modern, responsif, dan terstruktur kuat.',
    skills: [
      { name: 'React (v18 & v19)', context: 'Component-driven, hooks kustom, route lazy loading, dan optimasi render', level: 'Praktik' },
      { name: 'TypeScript', context: 'Strict typing, domain contract interfaces, dan type safety sistematis', level: 'Praktik' },
      { name: 'Tailwind CSS (v3 & v4)', context: 'Utility-first styling, desain enterprise clinical precision, responsif mobile-first', level: 'Praktik' },
      { name: 'Vite', context: 'Modern build tooling, HMR, asset hashing, dan optimasi chunking', level: 'Praktik' },
      { name: 'State Management (Zustand & Context)', context: 'Penyimpanan state form multi-langkah dan reaktifitas data global', level: 'Praktik' },
      { name: 'HTML5 Semantic & WCAG AA Accessibility', context: 'Struktur semantik, focus ring, dan navigasi ramah keyboard', level: 'Praktik' },
    ],
  },
  {
    categoryName: 'Backend Development',
    categoryDescription: 'Pengembangan endpoint server, otentikasi peran, dan integrasi API.',
    skills: [
      { name: 'Node.js & Express API', context: 'Modular REST routing, interceptor validasi, dan middleware', level: 'Praktik' },
      { name: 'Firebase Firestore (Real-time NoSQL)', context: 'Sinkronisasi event listener onSnapshot, indexing, dan rules keamanan', level: 'Praktik' },
      { name: 'Firebase Authentication & PIN Gate', context: 'Autentikasi role-based staf dan verifikasi PIN cepat untuk gawai lapangan', level: 'Praktik' },
      { name: 'RESTful API Design', context: 'Format payload JSON terstandar, HTTP status codes, dan error handling terpusat', level: 'Praktik' },
      { name: 'Microservices & Event-Driven Architecture', context: 'Pemahaman konsep message bus dan arsitektur terdistribusi', level: 'Pemahaman Dasar' },
    ],
  },
  {
    categoryName: 'Database & SQL',
    categoryDescription: 'Pemodelan skema relasional, migrasi terstruktur, dan integritas data.',
    skills: [
      { name: 'PostgreSQL Relational Design', context: 'Pemodelan skema entitas EMPI, foreign keys, cascade safety, dan partial index', level: 'Praktik' },
      { name: 'Prisma ORM', context: 'Type-safe client generation, schema definitions, dan automated migrations', level: 'Praktik' },
      { name: 'Structured SQL Migrations', context: 'Versioning skema database berurutan untuk menjamin konsistensi data', level: 'Praktik' },
      { name: 'Query Optimization & Indexing', context: 'EXPLAIN ANALYZE, B-Tree index, dan pencegahan N+1 query problem', level: 'Pemahaman Dasar' },
      { name: 'Database Backup & Restore Protocols', context: 'Prosedur dump pg_dump, restorasi berkala, dan replikasi basis data', level: 'Pemahaman Dasar' },
    ],
  },
  {
    categoryName: 'Version Control',
    categoryDescription: 'Tata kelola kode sumber, kolaborasi tim, dan alur integrasi.',
    skills: [
      { name: 'Git Core & Branching Workflow', context: 'Commit konvensional, feature branching, merge, rebasing, dan conflict resolution', level: 'Praktik' },
      { name: 'GitHub Collaboration & PR Reviews', context: 'Pull request workflow, code reviews, issue tracking, dan branch protection', level: 'Praktik' },
      { name: 'CI/CD Automation Basics', context: 'GitHub Actions untuk automated test runner (Vitest) dan static build check', level: 'Praktik' },
      { name: 'Repository Hygiene & Secret Protection', context: 'Pengelolaan .gitignore, pemisahan env, dan pencegahan kebocoran kredensial', level: 'Praktik' },
    ],
  },
  {
    categoryName: 'Technical Troubleshooting',
    categoryDescription: 'Dukungan teknis perangkat keras, sistem operasi, jaringan, dan workstation.',
    skills: [
      { name: 'Hardware & Workstation Maintenance', context: 'Perakitan, diagnosa kerusakan komponen PC/laptop, penggantian periferal medis', level: 'Praktik' },
      { name: 'Operating Systems Support (Windows & Android)', context: 'Instalasi, konfigurasi registry dasar, device driver, dan deploy APK Android hybrid', level: 'Praktik' },
      { name: 'Network Fundamentals & Diagnostics', context: 'Konfigurasi LAN, IP static/DHCP, DNS, subnetting dasar, pengujian ping/traceroute', level: 'Praktik' },
      { name: 'Periferal Medis & Printer Troubleshooting', context: 'Konfigurasi printer thermal label barcode pasien, printer gelang, dan scanner 2D', level: 'Praktik' },
      { name: 'End-User Support & Technical Training', context: 'Panduan teknis langsung bagi dokter, perawat, dan staf administratif fasilitas kesehatan', level: 'Praktik' },
    ],
  },
  {
    categoryName: 'Healthcare Information Systems',
    categoryDescription: 'Pemahaman mendalam mengenai alur kerja rumah sakit, triase, dan rekam medis elektronik.',
    skills: [
      { name: 'Triase Gawat Darurat (ESI v4 & ABCDE)', context: 'Pemodelan algoritma penentuan prioritas kegawatan berdasarkan tanda vital', level: 'Praktik' },
      { name: 'Dokumentasi CPPT / SOAP', context: 'Perancangan alur pencatatan terintegrasi Subjective, Objective, Assessment, Plan', level: 'Praktik' },
      { name: 'Keselamatan Penggunaan Obat (CPOE Allergy Blocker)', context: 'Validasi pencegahan peresepan obat kontraindikasi alergi secara aktif', level: 'Praktik' },
      { name: 'Standar Permenkes No. 24/2022', context: 'Penerapan prinsip interoperabilitas, metadata EMR, dan kerahasiaan identitas pasien', level: 'Pemahaman Dasar' },
      { name: 'HL7 FHIR R4 & SATUSEHAT Integration', context: 'Struktur resource Patient, Encounter, Condition, dan pemetaan payload Kemenkes', level: 'Sedang Dipelajari' },
    ],
  },
  {
    categoryName: 'AI-Assisted Development',
    categoryDescription: 'Pemanfaatan kecerdasan buatan sebagai akselerator riset, validasi logika, dan pengujian kode.',
    skills: [
      { name: 'AI-Assisted Code Scaffolding & Refactoring', context: 'Penggunaan Claude & Gemini untuk eksplorasi arsitektur komponen dan penataan modul', level: 'Praktik' },
      { name: 'Automated Test Suite Generation', context: 'Perumusan skenario pengujian edge-case dan negative-path testing dengan bantuan prompt terstruktur', level: 'Praktik' },
      { name: 'Technical Documentation & Architecture Drafting', context: 'Penyusunan spesifikasi teknis, kamus data relasional, dan diagram alur sistematis', level: 'Praktik' },
      { name: 'Code Review & Security Vulnerability Scanning', context: 'Analisis sanitasi input, pencegahan kebocoran data sensitif, dan optimasi bundle', level: 'Praktik' },
      { name: 'Agentic Workflows & Multi-Agent Collaboration', context: 'Penerapan agent-driven programming untuk otomatisasi tugas pengembangan', level: 'Sedang Dipelajari' },
    ],
  },
];
