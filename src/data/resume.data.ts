export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skillsUsed: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  field: string;
  notes: string;
}

export interface ResumeData {
  personalInfo: {
    fullName: string;
    headline: string;
    email: string;
    phoneLocation: string;
    linkedIn: string;
    github: string;
    cvPdfPath: string;
  };
  summary: string;
  experiences: ExperienceItem[];
  education: EducationItem[];
  coreCompetencies: {
    category: string;
    items: string[];
  }[];
}

export const RESUME_DATA: ResumeData = {
  personalInfo: {
    fullName: 'Robby Viory Fansya',
    headline: 'Healthcare Operations & Digital Systems | Technical Support | Independent Software Projects',
    email: 'obbyvior@gmail.com',
    phoneLocation: 'Indonesia (WIB) • Terbuka untuk Kerja On-Site / Hybrid / Remote',
    linkedIn: 'https://www.linkedin.com/in/roby-viori-fansya-2b0423437/',
    github: 'https://github.com/Mojo-Brothers',
    cvPdfPath: '/cv/Robby-Viory-Fansya-CV.pdf',
  },
  summary:
    'Praktisi operasional fasilitas kesehatan yang memiliki pemahaman mendalam tentang dinamika kerja klinis di lapangan, dikombinasikan dengan keahlian teknis dalam Technical Support, analisis sistem, dan pengembangan perangkat lunak mandiri. Memiliki rekam jejak dalam mengidentifikasi hambatan alur birokrasi rumah sakit dan menerjemahkannya menjadi solusi digital yang terstruktur, aman, dan mudah digunakan staf medis. Mahir memanfaatkan AI-assisted development untuk mempercepat riset arsitektur dan siklus pengujian kode secara disiplin.',
  experiences: [
    {
      period: '2023 - Sekarang',
      role: 'Hospital Operations, Administration & Technical Support',
      organization: 'Lingkungan Pelayanan Fasilitas Kesehatan',
      location: 'Indonesia',
      type: 'Operasional & Dukungan Teknis',
      description:
        'Mengelola administrasi dan koordinasi alur operasional pelayanan pasien, pemantauan logistik gawat darurat, serta memberikan dukungan teknis (IT & technical support) harian bagi perangkat kerja dan sistem workstation staf.',
      achievements: [
        'Mengidentifikasi dan memetakan inefisiensi pencatatan manual pada armada ambulans dan sirkulasi linen steril yang kerap menghambat waktu respon pelayanan.',
        'Memberikan troubleshooting teknis langsung untuk perangkat workstation medis, printer cetak barcode label pasien, dan kendala konektivitas jaringan internal.',
        'Mendampingi tenaga kesehatan dan staf administrasi baru dalam pengoperasian antarmuka sistem rekam medis elektronik dan pencatatan registrasi darurat.',
        'Memprakarsai prototipe sistem mandiri (IGD Operations Platform) untuk mempermudah pencatatan jarak tempuh armada dan jadwal dokter jaga real-time.',
      ],
      skillsUsed: [
        'Hospital Administration',
        'Technical Troubleshooting',
        'Emergency Logistics',
        'Hardware & Network Support',
        'Staff Training & Onboarding',
      ],
    },
    {
      period: '2024 - 2026',
      role: 'Independent Software Developer & Healthcare Systems Modeler',
      organization: 'Mojo Brothers (Proyek Independen)',
      location: 'Indonesia',
      type: 'Pengembangan Perangkat Lunak Mandiri',
      description:
        'Merancang dan membangun arsitektur perangkat lunak sistem informasi kesehatan mandiri berbasis web dan mobile untuk mengeksplorasi integrasi alur klinis dan pemodelan data medis berstandar tinggi.',
      achievements: [
        'Merancang dan membangun NurseFlow HIS: mengimplementasikan 44 test suites (185 automated tests), triase ESI v4, survei primer ABCDE, CPPT/SOAP, dan hard-blocker alergi obat terintegrasi.',
        'Membangun IGD Operations Platform: workstation lapangan ambulans mobile-first berproteksi PIN 6-digit, pelacakan rute KM via Leaflet, dan monitor TV 1080p dengan sinkronisasi real-time Firebase.',
        'Menerapkan skema relasional PostgreSQL dengan Prisma ORM, SQL migrations terstruktur, dan validasi data berbasis aturan aktif (active-rule validation).',
        'Menerapkan metodologi AI-assisted development (Claude, Gemini) sebagai asisten riset arsitektur, pembuat skenario pengujian otomatis, dan verifikasi keamanan kode.',
      ],
      skillsUsed: [
        'React 19 & TypeScript',
        'PostgreSQL & Prisma ORM',
        'Firebase Firestore Real-time',
        'Automated Testing (Vitest)',
        'Clinical Workflow Modeling (ESI v4 & CPPT)',
        'Capacitor Android Packaging',
      ],
    },
    {
      period: '2023 - 2025',
      role: 'Digital Media, Videographer & Visual Communication Lead',
      organization: 'Proyek Kreatif & Komunikasi Visual Independen',
      location: 'Indonesia',
      type: 'Kreatif & Pemasaran Digital',
      description:
        'Memimpin produksi konten video sinematik, perancangan materi komunikasi visual, dan strategi distribusi media sosial untuk kampanye edukasi dan branding institusional.',
      achievements: [
        'Menyutradarai dan memproduksi video sinematik alur pelayanan kesehatan dengan teknik sinematografi berkelas, pacing audio dinamis, dan grading warna natural.',
        'Menyusun kalender konten digital multi-kanal yang menghasilkan peningkatan metrik engagement organik hingga +180%.',
        'Merancang infografis langkah-langkah alur rujukan rumah sakit yang mempermudah pemahaman pasien umum dan mengurangi beban pertanyaan berulang pada meja informasi.',
      ],
      skillsUsed: [
        'Video Editing & Color Grading (DaVinci Resolve / Premiere)',
        'Cinematic Storytelling & Directing',
        'Digital Marketing Strategy',
        'Visual Design & Typography (Figma / Illustrator)',
      ],
    },
  ],
  education: [
    {
      period: 'Pendidikan Berkelanjutan & Mandiri',
      degree: 'Full-Stack Software Engineering & Healthcare Information Systems',
      institution: 'Studi Mandiri Berkelanjutan & Kurikulum Industri Terbuka',
      field: 'Teknologi Informasi & Rekayasa Perangkat Lunak',
      notes:
        'Fokus pada arsitektur web modern (React, TypeScript, Node.js), pemodelan basis data relasional (PostgreSQL), standar regulasi rekam medis (Permenkes 24/2022, JCI IPSG), dan AI-assisted engineering.',
    },
  ],
  coreCompetencies: [
    {
      category: 'Healthcare & Hospital Systems',
      items: [
        'Alur Operasional & Logistik Rumah Sakit',
        'Triase Gawat Darurat (ESI v4 & ABCDE)',
        'Dokumentasi CPPT / SOAP & Standarisasi EMR',
        'Konsep Keselamatan Pasien & Verifikasi Resep Farmasi',
        'Pemahaman Regulasi Permenkes No. 24/2022',
      ],
    },
    {
      category: 'Technical Support & Troubleshooting',
      items: [
        'Hardware Diagnostics & Maintenance',
        'Sistem Operasi (Windows, Android)',
        'Troubleshooting Workstation & Peripheral Medis',
        'Dasar Jaringan Komputer (LAN, IP Addressing, DNS)',
        'Bantuan Teknis Pengguna Akhir (User Support & Training)',
      ],
    },
    {
      category: 'Software Engineering & Database',
      items: [
        'Frontend: React 18/19, TypeScript, Tailwind CSS, Vite',
        'Backend & Data: Node.js, Express, PostgreSQL, Prisma ORM',
        'Cloud & Real-time: Firebase Firestore & Authentication',
        'Testing & Automation: Vitest, Automated Regression Testing',
        'Version Control: Git, GitHub Workflow, CI/CD Pipeline Basics',
      ],
    },
    {
      category: 'Digital Media & AI Engineering',
      items: [
        'AI-Assisted Development (Prompt Engineering, Code Validation, Test Generation)',
        'Cinematic Video Production & DaVinci Resolve / Premiere',
        'Digital Marketing Strategy & Content Architecture',
        'Graphic Design & Brand Collateral (Figma, Adobe Suite)',
      ],
    },
  ],
};
