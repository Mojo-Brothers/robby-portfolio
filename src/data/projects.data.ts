import { ProjectData } from '../types/project.types';

export const DISCLOSURE_TEXT =
  'Proyek ini merupakan inisiatif pengembangan perangkat lunak independen oleh Robby Viory Fansya untuk tujuan eksplorasi teknologi kesehatan dan portofolio profesional. Sistem ini terinspirasi dari alur kerja operasional fasilitas kesehatan riil, namun tidak berafiliasi secara resmi, tidak mewakili, dan tidak disponsori oleh instansi rumah sakit mana pun. Seluruh data pasien, nomor rekam medis, dan identitas yang ditampilkan merupakan data simulasi (sintetis) untuk tujuan demonstrasi teknis.';

export const PROJECTS_DATA: Record<string, ProjectData> = {
  nurseflow: {
    slug: 'nurseflow',
    title: 'NurseFlow — Hospital Information System (HIS)',
    subtitle: 'Independent Clinical / HIS Reference Architecture',
    category: 'clinical-his',
    categoryLabel: 'Clinical HIS Reference Architecture',
    githubUrl: 'https://github.com/Mojo-Brothers/NurseFlow-WebApp',
    isPrivateRepo: true,
    repoVisibilityNote:
      'Repositori Private — Akses repositori dibatasi untuk perlindungan hak cipta proyek independen. Seluruh arsitektur teknis, diagram alur, skema basis data, dan bukti pengujian otomatis didokumentasikan secara transparan pada studi kasus ini.',
    developmentStatus: 'Modul Inti Selesai (Core Clinical Architecture & Automated Tests Verified — 44 Suites / 185 Tests)',
    currentLimitations: [
      'Integrasi penuh SATUSEHAT / HL7 FHIR R4 eksternal masih dalam tahap pemodelan skema relasional sandbox dan pemetaan payload data, belum terhubung ke production gateway Kemenkes RI.',
      'Modul kasir dan billing rumah sakit belum terintegrasi dengan payment gateway eksternal, difokuskan pada agregasi biaya tindakan dan resep simulasi.',
      'Modul farmasi difokuskan pada pengamanan resep gawat darurat (hard-blocker alergi obat & alur stok FEFO), belum mencakup peracikan infus sitostatika khusus rawat inap.',
    ],
    plannedRoadmap: [
      'Eksplorasi pengujian integrasi REST API sandbox SATUSEHAT Kementerian Kesehatan RI.',
      'Pengembangan antarmuka mobile perawat (PWA) dengan kapabilitas pencatatan tanda vital offline-first.',
      'Penyusunan audit trail kepatuhan regulasi rekam medis digital komprehensif sesuai Permenkes 24/2022.',
    ],
    timeframe: '2025 - 2026',
    role: {
      title: 'Independent Full-Stack Developer & Clinical Workflow Modeler',
      responsibilities: [
        'Merancang arsitektur sistem multi-tier yang memisahkan presentation layer, state management, clinical decision logic, dan persistence barrier.',
        'Mengimplementasikan antarmuka pengguna berbasis React 19, TypeScript, Tailwind CSS, dan Radix UI primitives.',
        'Menyusun skema database relasional PostgreSQL terstruktur dengan Prisma ORM dan SQL migrations.',
        'Memodelkan logika klinis dan validasi keselamatan: triase ESI v4, survei primer ABCDE, medication allergy hard blocker, serta kalkulasi SOFA dan NEWS2.',
        'Menulis dan memelihara 44 automated test suites (185 automated tests) menggunakan Vitest untuk memverifikasi keandalan logika algoritma.',
        'Mendokumentasikan spesifikasi arsitektur data medis dan eksplorasi pemetaan resource HL7 FHIR R4.',
      ],
    },
    evidence: {
      testSuites: '44 Test Suites',
      testsCount: '185 Automated Tests Passing',
      migrationsNote: 'Structured SQL Database Migrations',
      architectureTier: 'Multi-Tier Clinical Architecture',
    },
    summary:
      'Arsitektur referensi sistem informasi rumah sakit mandiri yang mengeksplorasi penanganan alur klinis kompleks, kodifikasi medis terstruktur, dan validasi keselamatan data. Menekankan ketahanan logika bisnis melalui pengujian otomatis dan pemodelan relasional yang disiplin.',
    problemContext:
      'Di lingkungan pelayanan kesehatan, sistem rekam medis sering kali hanya berfungsi sebagai pencatat data statis yang pasif. Ketika terjadi kondisi kritis atau potensi kesalahan penulisan resep, sistem lambat merespons atau membiarkan kesalahan lolos ke tahap penyerahan obat. Selain itu, staf medis kerap dibebani form input yang tidak selaras dengan protokol darurat.',
    solutionApproach:
      'Membangun model referensi HIS berbasis aturan aktif (active-rule validation): triase yang secara deterministik menghitung skor keparahan berdasarkan tanda vital, dokumentasi CPPT/SOAP terintegrasi dengan pemesanan CPOE, serta mekanisme pemblokiran resep seketika saat terdeteksi riwayat alergi pada zat aktif obat.',
    workflows: [
      {
        order: 1,
        title: 'Master Patient Index (EMPI) & Registrasi Darurat',
        actor: 'Perawat',
        summary:
          'Pencatatan identitas pasien dengan algoritma deduplikasi berbasis NIK, nama, dan tanggal lahir. Mendukung registrasi darurat anonim (Mr./Mrs. X) yang dapat digabungkan kembali (merge identity) tanpa memutus riwayat rekam jejak medis awal.',
        verificationRule: 'Masking otomatis identitas warga negara untuk privasi data.',
      },
      {
        order: 2,
        title: 'Triase Instalasi Gawat Darurat (ESI v4 & ABCDE)',
        actor: 'Perawat',
        summary:
          'Evaluasi cepat Airway, Breathing, Circulation, Disability (GCS), dan Exposure. Parameter tanda vital kritis (misal: SpO2 < 90%, Tekanan Darah Sistolik <= 80 mmHg) secara otomatis menaikkan derajat triase ke ESI 1 atau ESI 2.',
        verificationRule: 'Auto-escalation deterministik saat tanda vital melampaui batas aman.',
      },
      {
        order: 3,
        title: 'Konsultasi Dokter & Dokumentasi CPPT/SOAP',
        actor: 'Dokter',
        summary:
          'Dokumentasi rekam medis rawat jalan dan gawat darurat terstruktur (Subjective, Objective, Assessment, Plan) dengan integrasi kodifikasi diagnosis ICD-10 dan tindakan ICD-9-CM.',
        verificationRule: 'Live auto-import tanda vital dari modul triase ke format SOAP.',
      },
      {
        order: 4,
        title: 'Universal Order Panel (CPOE) & Pengamanan Resep',
        actor: 'Dokter',
        summary:
          'Pemesanan elektronik terpadu mencakup farmasi, laboratorium, dan radiologi. Sistem secara aktif memverifikasi pesanan obat terhadap database riwayat alergi pasien.',
        verificationRule: 'Hard-blocker seketika mengunci order jika terdeteksi kontraindikasi alergi.',
      },
    ],
    features: [
      {
        title: 'Medication Allergy Hard Blocker',
        description:
          'Mekanisme validasi pada transaksi peresepan elektronik yang langsung membatalkan konfirmasi pesanan jika bahan aktif obat tercatat dalam riwayat alergi pasien.',
        technicalEvidence: 'Validasi interceptor pada CPOE order pipeline sebelum persistensi basis data.',
      },
      {
        title: 'Kalkulator Skor Keparahan Deterministik (SOFA & NEWS2)',
        description:
          'Implementasi kalkulasi SOFA dan NEWS2 secara deterministik berdasarkan parameter fisiologis pada encounter untuk mendeteksi penurunan kondisi klinis pasien secara dini.',
        technicalEvidence: 'Fungsi murni tanpa side-effect dengan snapshot kalkulasi tersimpan.',
      },
      {
        title: 'Validasi Rentang Suhu Rantai Dingin Darah (2-6°C)',
        description:
          'Pencatatan dan pemantauan suhu penyimpanan kantong darah di unit BDRS dengan penandaan karantina otomatis saat terjadi deviasi di luar batas aman 2°C - 6°C.',
        technicalEvidence: 'Pemeriksaan status kelayakan unit darah sebelum izin transfusi diterbitkan.',
      },
      {
        title: 'Gerbang 3-Tahap WHO Surgical Safety Checklist',
        description:
          'Verifikasi prosedural wajib pada alur bedah: Sign-In (sebelum induksi anestesi), Time-Out (sebelum insisi), dan Sign-Out (sebelum keluar kamar operasi).',
        technicalEvidence: 'Aturan state machine yang mencegah penutupan episode bedah tanpa verifikasi lengkap.',
      },
    ],
    technologies: [
      {
        layer: 'Frontend',
        tags: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Radix UI Primitives', 'Zustand', 'Lucide Icons'],
      },
      {
        layer: 'Backend & Data',
        tags: ['Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'SQL Migrations'],
      },
      {
        layer: 'Mobile & Integrasi',
        tags: ['RESTful API Architecture', 'HL7 FHIR R4 Concepts', 'Permenkes 24/2022 Schema Alignment'],
      },
      {
        layer: 'Quality & Testing',
        tags: ['Vitest', 'Playwright', 'Automated Regression Suites (44 Suites / 185 Tests)'],
      },
    ],
    standardsAlignment: [
      {
        standard: 'Prinsip JCI IPSG (International Patient Safety Goals)',
        conceptApplied: 'Ketepatan identifikasi pasien (IPSG 1) dan keamanan obat berkonsentrasi tinggi/alergi (IPSG 3).',
        implementationDetail:
          'Algoritma EMPI pencocokan multi-faktor dan pencegahan peresepan obat alergi aktif pada form CPOE.',
      },
      {
        standard: 'Permenkes No. 24/2022 (Rekam Medis Elektronik)',
        conceptApplied: 'Standarisasi metadata rekam medis, tata kelola riwayat klinis, dan privasi identitas.',
        implementationDetail:
          'Struktur data SOAP terstandar, pelacakan waktu kunjungan (encounter timestamp), dan masking NIK.',
      },
      {
        standard: 'HL7 FHIR R4 (Eksplorasi Interoperabilitas)',
        conceptApplied: 'Kesesuaian struktur resource data kesehatan untuk integrasi lintas platform.',
        implementationDetail:
          'Pemodelan entitas Patient, Encounter, Observation, dan Condition mengacu pada format standar FHIR.',
      },
    ],
    screenshots: [
      {
        id: 'nurseflow-triage',
        title: 'IGD Triage & Emergency Command Board',
        caption: 'Antarmuka Triase ESI v4 dengan Algoritma Evaluasi ABCDE',
        imagePath: '/images/nurseflow/triage-command.webp',
        deviceType: 'desktop',
        syntheticDataNote: 'Data simulasi: identitas pasien fiktif Tn. Pasien Simulasi (No. RM: 00-12-34)',
        highlightPoints: [
          'Kategori warna triase ESI 1 hingga 5 otomatis terhitung dari tanda vital.',
          'Form input terstruktur mencakup Airway, Breathing, Circulation, dan GCS.',
          'Penanda bahaya visual seketika saat tekanan darah atau saturasi oksigen anjlok.',
        ],
      },
      {
        id: 'nurseflow-cppt',
        title: 'Doctor Consultation & CPPT Workspace',
        caption: 'Lembar Dokumentasi Medis Terintegrasi SOAP dan Kodifikasi ICD-10',
        imagePath: '/images/nurseflow/cppt-workspace.webp',
        deviceType: 'desktop',
        syntheticDataNote: 'Data simulasi rekam medis sintetis untuk pengujian diagnostik.',
        highlightPoints: [
          'Pengisian Subjective, Objective, Assessment, dan Plan yang rapi.',
          'Pencarian diagnosis berbasis kode internasional ICD-10.',
          'Panel pemesanan universal terhubung langsung ke unit laboratorium dan farmasi.',
        ],
      },
      {
        id: 'nurseflow-pharmacy',
        title: 'Closed-Loop Medication & FEFO Inventory',
        caption: 'Pencegahan Kontraindikasi Alergi Obat dan Pengelolaan Stok FEFO',
        imagePath: '/images/nurseflow/pharmacy-fefo.webp',
        deviceType: 'desktop',
        syntheticDataNote: 'Data simulasi katalog obat formularium rumah sakit.',
        highlightPoints: [
          'Hard-blocker alergi obat memunculkan dialog peringatan kritis sebelum verifikasi.',
          'Prinsip First-Expired, First-Out (FEFO) pada pengeluaran batch obat farmasi.',
          'Audit trail terstruktur untuk mendukung traceability perubahan data.',
        ],
      },
    ],
    disclosure: DISCLOSURE_TEXT,
  },

  'igd-operations': {
    slug: 'igd-operations',
    title: 'Hospital Information System (HIS) – Emergency Department Operations Platform',
    subtitle: 'Independent Operational Workflow & Logistics Platform',
    category: 'operational-platform',
    categoryLabel: 'Emergency Department Operations Platform',
    githubUrl: 'https://github.com/Mojo-Brothers/igd-manajemen-sistem',
    isPrivateRepo: true,
    repoVisibilityNote:
      'Repositori Private — Dirancang untuk pemecahan masalah operasional internal lapangan. Seluruh modul, alur form driver ambulans, alur stok linen, dan display TV didokumentasikan di halaman ini.',
    developmentStatus: 'Sistem Operasional Lapangan Teruji (Workstation Ambulans, LinenFlow & Display On-Call)',
    currentLimitations: [
      'Fitur pelacakan rute Leaflet Maps memerlukan konektivitas internet aktif untuk resolusi titik koordinat geocoding.',
      'Modul LinenFlow difokuskan pada perputaran linen kotor/bersih IGD dan unit laundry sentral, belum mencakup seluruh bangsal rawat inap.',
      'Otentikasi driver ambulans menggunakan PIN gate 6-digit untuk kecepatan input di lapangan tanpa login email rumit, bukan autentikasi biometrik.',
    ],
    plannedRoadmap: [
      'Penyempurnaan cache offline peta Leaflet saat armada ambulans berada di daerah blank spot sinyal.',
      'Integrasi notifikasi WhatsApp Gateway otomatis ke koordinator IGD saat stok linen mendekati batas kritis.',
      'Dukungan ekspor pelaporan multi-periode per semester dan tahunan secara otomatis.',
    ],
    timeframe: '2025 - 2026',
    role: {
      title: 'Independent Full-Stack Developer & Operational Workflow Designer',
      responsibilities: [
        'Menganalisis inefisiensi pencatatan manual operasional gawat darurat (ambulans, linen, jadwal dokter jaga).',
        'Merancang antarmuka mobile-first untuk staf lapangan dan dashboard monitoring terpusat untuk koordinator IGD.',
        'Mengintegrasikan arsitektur database real-time menggunakan Firebase Firestore dan autentikasi peran.',
        'Membangun sistem pelaporan otomatis bulanan dalam format resmi Excel (.xlsx) dan PDF (A4 Landscape) siap audit.',
        'Mengonfigurasi packaging aplikasi mobile hybrid Android menggunakan Capacitor CLI.',
      ],
    },
    evidence: {
      realtimeSync: 'Firebase Firestore onSnapshot Sync',
      mobileCapability: 'Capacitor Android APK Packaging',
      reportingEngines: 'jsPDF + SheetJS (XLSX) Export',
      accessControl: '6-Digit Field PIN Gate Authentication',
    },
    summary:
      'Platform operasional gawat darurat independen yang mendigitalkan logistik lapangan: workstation ekspedisi ambulans berproteksi PIN dengan pelacakan jarak, sirkulasi distribusi linen medis, dan layar display jadwal dokter on-call real-time.',
    problemContext:
      'Di luar rekam medis pasien, operasional instalasi gawat darurat sangat bergantung pada logistik pendukung yang sering kali masih dikelola secara manual: pencatatan perjalanan ambulans di buku fisik yang menyulitkan klaim dan rekap bulanan, ketidakpastian stok linen steril siap pakai di lemari IGD, serta kebingungan pasien melihat papan pengumuman dokter jaga yang tidak diperbarui tepat waktu.',
    solutionApproach:
      'Membangun sistem terpadu yang memfasilitasi kebutuhan masing-masing peran lapangan: form cepat berbasis PIN untuk driver ambulans tanpa login akun email rumit, monitoring stok linen visual dengan indikator ambang batas kritis, layar TV 1080p yang sinkron seketika saat ada perubahan jadwal dokter, serta generator laporan resmi 1-klik.',
    workflows: [
      {
        order: 1,
        title: 'Akses Cepat Lapangan Berbasis PIN 6-Digit',
        actor: 'Petugas Ambulans',
        summary:
          'Driver ambulans dan perawat pendamping dapat membuka workstation lapangan melalui ponsel pintar dengan verifikasi PIN 6-digit instan tanpa memerlukan akun email admin.',
        verificationRule: 'Proteksi PIN gate mencegah perubahan data dari pihak luar tanpa membebani staf.',
      },
      {
        order: 2,
        title: 'Pencatatan Trip & Pemilihan Koordinat Rute',
        actor: 'Petugas Ambulans',
        summary:
          'Input cepat armada (unit mobil), nama driver, data pasien simulasi, jam berangkat/kembali, dan penentuan lokasi tujuan melalui Leaflet Map Picker untuk kalkulasi akumulasi jarak tempuh (KM).',
        verificationRule: 'Penghitungan otomatis durasi perjalanan dan validasi angka odometer.',
      },
      {
        order: 3,
        title: 'Sirkulasi Distribusi Linen Medis (LinenFlow)',
        actor: 'Admin IGD',
        summary:
          'Pemantauan stok linen di lemari IGD secara kuantitatif. Mencatat penyerahan linen kotor ke unit laundry dan penerimaan kembali linen steril dengan verifikasi PIN petugas laundry.',
        verificationRule: 'Indikator warna visual otomatis: AMAN (hijau), MENIPIS (kuning), KRITIS (merah).',
      },
      {
        order: 4,
        title: 'Sinkronisasi Layar TV Display Dokter Jaga 1080p',
        actor: 'Admin IGD',
        summary:
          'Layar publik monitor ruang tunggu IGD menampilkan jam digital presisi WIB, running text pengumuman, dan kartu dokter spesialis on-call yang aktif. Jika admin melakukan pergantian shift, layar TV langsung terbarui otomatis.',
        verificationRule: 'Sinkronisasi real-time instan melalui listener Firestore tanpa refresh halaman.',
      },
    ],
    features: [
      {
        title: 'Workstation Ekspedisi Ambulans Mobile-First',
        description:
          'Desain antarmuka fleksibel yang dapat beralih antara tampilan kartu tumpuk di smartphone driver atau tabel lengkap pada komputer desktop nurse station.',
        technicalEvidence: 'Komponen responsif dengan hook kustom pendeteksi jenis perangkat.',
      },
      {
        title: 'Ekspor Laporan Bulanan Resmi (PDF & Excel)',
        description:
          'Pembuatan rekapitulasi data perjalanan ambulans dan mutasi linen dalam format dokumen formal: PDF A4 Landscape lengkap dengan kop dokumen dan tanda tangan koordinator, serta lembar spreadsheet Excel 13-kolom.',
        technicalEvidence: 'Pustaka jsPDF dengan plugin AutoTable dan SheetJS (XLSX).',
      },
      {
        title: 'Manajemen Jadwal & Emergency Override',
        description:
          'Pengelolaan jadwal dokter jaga bulanan via impor template Excel, dilengkapi fitur override harian saat terjadi pergantian dokter darurat tanpa merusak jadwal induk.',
        technicalEvidence: 'Pemisahan state jadwal master bulanan dengan collection override harian di Firestore.',
      },
      {
        title: 'Distribusi Berkas APK Android Mandiri',
        description:
          'Aplikasi dikonfigurasi menggunakan Capacitor sehingga dapat di-build menjadi paket APK Android mandiri dan diunduh langsung melalui modal aplikasi untuk gawai petugas.',
        technicalEvidence: 'Konfigurasi Capacitor Android core dan modal unduh berkas APK.',
      },
    ],
    technologies: [
      {
        layer: 'Frontend',
        tags: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'React Router 6', 'Framer Motion', 'React Icons'],
      },
      {
        layer: 'Backend & Data',
        tags: ['Firebase Firestore (Real-time)', 'Firebase Authentication', 'Security Rules'],
      },
      {
        layer: 'Mobile & Integrasi',
        tags: ['Capacitor Android', 'Leaflet Interactive Maps', 'Geocoding & KM Calculator'],
      },
      {
        layer: 'Quality & Testing',
        tags: ['Automated Document Generation (jsPDF, SheetJS)', 'Component Smoke Testing'],
      },
    ],
    standardsAlignment: [
      {
        standard: 'Efisiensi Alur Logistik Pelayanan Darurat',
        conceptApplied: 'Pencegahan kelambatan penanganan medis akibat kendala ketersediaan armada dan sarana penunjang.',
        implementationDetail:
          'Monitoring status armada siap jalan secara real-time dan notifikasi dini saat stok linen periksa menipis.',
      },
      {
        standard: 'Akuntabilitas Administratif & Audit Biaya Operasional',
        conceptApplied: 'Pencatatan rincian perjalanan kendaraan medis yang dapat dipertanggungjawabkan ke manajemen.',
        implementationDetail:
          'Rekapitulasi odometer bulanan dengan filter periode interaktif dan cetak laporan resmi bertanda tangan.',
      },
    ],
    screenshots: [
      {
        id: 'igd-ambulance',
        title: 'Ambulance Field Dispatch Workstation',
        caption: 'Antarmuka Form Cepat Petugas Ambulans dengan Proteksi PIN 6-Digit',
        imagePath: '/images/igd-operations/ambulance-mobile.svg',
        deviceType: 'mobile',
        syntheticDataNote: 'Data simulasi: rute uji coba lapangan dengan data pasien sintetis.',
        highlightPoints: [
          'Form ringkas dirancang untuk kemudahan sentuhan pada smartphone driver.',
          'Kalkulasi jarak tempuh otomatis terhubung dengan pemilih koordinat peta.',
          'Rekapitulasi jarak tempuh bulanan dengan navigasi bulan interaktif.',
        ],
      },
      {
        id: 'igd-linen',
        title: 'LinenFlow Inventory & Distribution Control',
        caption: 'Monitoring Status Stok Lemari Linen dan Siklus Serah Terima Laundry',
        imagePath: '/images/igd-operations/linen-flow.svg',
        deviceType: 'desktop',
        syntheticDataNote: 'Data simulasi kuantitas inventaris linen medis.',
        highlightPoints: [
          'Indikator visual seketika saat jumlah linen bersih di bawah batas minimum.',
          'Verifikasi serah terima linen kotor menggunakan otentikasi PIN petugas laundry.',
          'Pencatatan kartu riwayat distribusi harian yang dapat diekspor ke Excel.',
        ],
      },
      {
        id: 'igd-tv-display',
        title: 'Smart TV Monitor Jadwal Dokter Jaga On-Call',
        caption: 'Tampilan Fullscreen 1080p Ruang Tunggu IGD dengan Sinkronisasi Real-Time',
        imagePath: '/images/igd-operations/tv-display-oncall.svg',
        deviceType: 'tv',
        syntheticDataNote: 'Data simulasi jadwal dokter spesialis jaga.',
        highlightPoints: [
          'Tampilan bersih tanpa scrollbar, tipografi kontras tinggi untuk kenyamanan baca dari kejauhan.',
          'Jam digital presisi WIB dan running text informasi layanan gawat darurat.',
          'Otomatis terbarui saat admin IGD melakukan override jadwal tanpa perlu refresh browser.',
        ],
      },
      {
        id: 'igd-pdf-report',
        title: 'Official Monthly Operational Reporting',
        caption: 'Format Dokumen Resmi Rekapitulasi Ekspedisi Ambulans Siap Cetak (A4 Landscape)',
        imagePath: '/images/igd-operations/pdf-report-sample.svg',
        deviceType: 'desktop',
        syntheticDataNote: 'Data rekapitulasi sintetis bertanda tangan simulasi koordinator.',
        highlightPoints: [
          'Format dokumen formal lengkap dengan kop resmi, nomor halaman, dan metadata cetak.',
          'Tabel 13-kolom merangkum tanggal, unit armada, driver, tujuan, dan jarak tempuh.',
          'Dua opsi ekspor instan: dokumen cetak PDF dan spreadsheet Excel (.xlsx).',
        ],
      },
    ],
    disclosure: DISCLOSURE_TEXT,
  },
};
