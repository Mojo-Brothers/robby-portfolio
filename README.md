# 🏥 Robby Viory Fansya — Professional Portfolio

[![Vite](https://img.shields.io/badge/Vite-6.x-blueviolet.svg)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-teal.svg)](https://tailwindcss.com/)
[![Lighthouse: 100/100](https://img.shields.io/badge/Lighthouse-100%2F100-emerald.svg)](https://pages.cloudflare.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)

Personal professional portfolio website for **Robby Viory Fansya** showcasing hospital operational experience, technical support & IT troubleshooting, independent healthcare software engineering, and digital marketing/video production.

---

## 🎯 Positioning & Professional Narrative

* **Primary Professional Positioning:** **Healthcare Operations & Digital Systems | Technical Support | Independent Software Projects**
* **Core Value:** Menerjemahkan pengalaman langsung di lingkungan operasional rumah sakit dan penanganan kendala teknis harian menjadi solusi perangkat lunak yang aman, terstruktur, dan teruji secara mandiri.
* **Target Roles:** Healthcare IT Specialist, SIMRS / HIS Engineer, IT Support & Technical Troubleshooting, System Analyst Healthcare, Junior Full-Stack Developer, Digital Media Specialist.

---

## 🧭 Struktur Halaman Website

1. **Beranda (`/`):** Ringkasan profil profesional, value pillars, bukti teknis repositori, matriks keahlian 7 kategori dengan tingkat penguasaan jujur, highlight proyek terbaik, karya kreatif, dan tombol unduh CV PDF.
2. **Katalog Proyek (`/projects`):** Showcase proyek perangkat lunak sistem informasi kesehatan mandiri.
   * `projects/nurseflow`: Studi kasus mendalam NurseFlow HIS (44 test suites, triase ESI v4, CPPT/SOAP, CPOE hard-blocker alergi obat, dan arsitektur data).
   * `projects/igd-operations`: Platform operasional gawat darurat (workstation ambulans mobile-first dengan proteksi PIN 6-digit, pelacakan rute KM Leaflet, LinenFlow, layar TV dokter on-call real-time Firestore, dan laporan resmi PDF/Excel).
3. **Karya Digital & Kreatif (`/creative`):** Portofolio produksi video sinematik (DaVinci Resolve / Premiere), strategi pertumbuhan pemasaran digital, infografis alur medis pasien, dan standarisasi identitas visual (brand identity).
4. **Resume & CV (`/resume`):** Curriculum Vitae interaktif terstruktur, rekap riwayat pengalaman kerja operasional rumah sakit, kualifikasi teknis, dan tombol unduh berkas PDF resmi (`/cv/Robby-Viory-Fansya-CV.pdf`).
5. **Tentang Saya (`/about`):** Latar belakang pengalaman administrasi & operasional rumah sakit, ketertarikan pada teknologi sistem informasi, kemampuan menerjemahkan kebutuhan medis, serta metodologi belajar mandiri berbantuan AI (*AI-assisted development*).
6. **Kontak (`/contact`):** Saluran komunikasi resmi via email (`obbyvior@gmail.com`), profil LinkedIn, repositori GitHub, dan unduh CV.

---

## 🛠️ Arsitektur & Spesifikasi Teknis

* **Frontend Framework:** React 19, TypeScript (Strict Mode), Vite 6, Tailwind CSS v4, Lucide React.
* **Routing & Code-Splitting:** React Router v7 dengan lazy loading per rute (`React.lazy` & `Suspense`) dan eager-loading untuk `HomePage` guna meminimalisir Cumulative Layout Shift (CLS < 0.02).
* **Automated CV Generator:** Integrasi `pdf-lib` yang menghasilkan berkas CV PDF berbasis vektor saat build dijalankan (`npm run build`).
* **Image Optimization:** Aset gambar dikonversi menjadi format WebP asli dengan kompresi berkualitas tinggi (~65% bandwidth saved).
* **Web Performance & Caching:** Konfigurasi HTTP headers Cloudflare Pages (`public/_headers`) untuk caching 1 tahun aset hash (`/assets/*`), security headers, dan `/* /index.html 200` (`public/_redirects`).
* **SEO & Discoverability:** MetaTags dinamis, Canonical URL, OpenGraph, JSON-LD Schema.org `Person` & `WebSite`, `robots.txt`, dan `sitemap.xml`.

---

## 📊 Hasil Pengujian Lighthouse (100 / 100)

Pengujian aktual dilakukan secara lokal pada build production via Chrome Headless:

| Kategori Pengujian | Mobile Score | Desktop Score | Target Standar |
|---|:---:|:---:|:---:|
| **Performance** | **100** | **100** | Min. 90 |
| **Accessibility** | **100** | **100** | Min. 90 |
| **Best Practices** | **100** | **100** | Min. 90 |
| **SEO** | **100** | **100** | Min. 90 |

**Core Web Vitals Aktual:**
* **Mobile:** FCP = 1.4s, LCP = 1.4s, TBT = 60ms, CLS = 0.012, Speed Index = 1.4s.
* **Desktop:** FCP = 0.4s, LCP = 0.4s, TBT = 0ms, CLS = 0.001, Speed Index = 0.4s.

---

## 💻 Panduan Pengembangan Lokal

### Prasyarat
* Node.js `>= 20.x`
* npm `>= 10.x`

### Menjalankan Development Server
```bash
# 1. Masuk ke direktori proyek
cd robby-portfolio

# 2. Pasang dependensi
npm install

# 3. Jalankan development server
npm run dev
```
Akses melalui browser di [http://localhost:3000](http://localhost:3000).

### Build & Typecheck Production
```bash
# Otomatis menghasilkan CV PDF, memeriksa TypeScript, dan mem-build bundle dist/
npm run build

# Menjalankan preview lokal hasil build production
npm run preview
```

---

## 📝 Panduan Pengelolaan Konten

Seluruh data konten dipisahkan secara bersih dari komponen tampilan di direktori `src/data/`:

### 1. Menambahkan atau Mengubah Proyek
Buka file `src/data/projects.data.ts`:
* Tambahkan objek proyek baru mengikuti interface `ProjectData` (`src/types/project.types.ts`).
* Masukkan slug, judul, peran, alur kerja (`workflows`), fitur kunci (`features`), status pengembangan, batasan sistem, dan screenshot yang telah disanitasi.

### 2. Mengubah Data Resume atau Pengalaman Kerja
Buka file `src/data/resume.data.ts`:
* Perbarui `experiences`, `coreCompetencies`, atau ringkasan profil.
* Jika ingin mengubah tampilan berkas CV PDF, sesuaikan script di `scripts/generate-cv.js`, lalu jalankan `npm run build`.

### 3. Menambahkan Karya Digital & Kreatif
Buka file `src/data/creative.data.ts`:
* Tambahkan entri baru dengan kategori `video-production`, `digital-marketing`, `content-creation`, atau `branding-visual`.

### 4. Menambahkan Keahlian Teknis
Buka file `src/data/evidence.data.ts`:
* Sesuaikan kategori dan level penguasaan (`Praktik`, `Pemahaman Dasar`, `Sedang Dipelajari`).

---

## 🚀 Panduan Deployment Cloudflare Pages

### 1. Prasyarat Privasi (Wajib)
* Repositori GitHub `Mojo-Brothers/robby-portfolio` **tetap PRIVATE**.
* Cloudflare Pages Free mendukung deployment dari private GitHub repository tanpa mengubah status repositori menjadi public.

### 2. Langkah Konfigurasi di Cloudflare Dashboard
1. Buka [Cloudflare Dashboard](https://dash.cloudflare.com/) dan pilih menu **Workers & Pages**.
2. Klik **Create application** > pilih tab **Pages** > klik **Connect to Git**.
3. Hubungkan akun GitHub Anda dan pilih repositori privat: `Mojo-Brothers/robby-portfolio`.
4. Isi konfigurasi build:
   * **Project name:** `robby-portfolio` (atau nama pilihan Anda).
   * **Production branch:** `main`.
   * **Framework preset:** `Vite`.
   * **Build command:** `npm run build`.
   * **Build output directory:** `dist`.
   * **Root directory:** `/`.
   * **Environment Variables:** Tambahkan `NODE_VERSION` dengan nilai `20`.
5. Klik **Save and Deploy**.
6. Cloudflare Pages akan mem-build aplikasi dan menerbitkannya pada subdomain bawaan: `https://robby-portfolio.pages.dev`.

### 3. Memasang Custom Domain (Contoh: `robbyviory.com`) di Masa Depan
1. Pada proyek Cloudflare Pages yang sudah aktif, buka tab **Custom domains**.
2. Klik tombol **Set up a custom domain**.
3. Masukkan domain yang Anda miliki (misalnya: `robbyviory.com` atau `portfolio.robbyviory.com`).
4. Ikuti instruksi verifikasi DNS:
   * Jika domain menggunakan Cloudflare DNS: otomatis terkonfigurasi dengan 1-klik CNAME proxy.
   * Jika menggunakan DNS eksternal: tambahkan record `CNAME` yang mengarah ke `robby-portfolio.pages.dev`.
5. Sertifikat SSL/HTTPS akan diterbitkan secara otomatis dan gratis oleh Cloudflare.

---

## 🛡️ Pernyataan Keterbukaan & Privasi (Disclosure)

Proyek yang ditampilkan dalam portofolio ini merupakan inisiatif pengembangan perangkat lunak independen oleh Robby Viory Fansya untuk tujuan eksplorasi teknologi kesehatan dan portofolio profesional. Sistem ini terinspirasi dari alur kerja operasional fasilitas kesehatan riil, namun tidak berafiliasi secara resmi, tidak mewakili, dan tidak disponsori oleh instansi rumah sakit mana pun. Seluruh data pasien, nomor rekam medis, dan identitas yang ditampilkan merupakan data simulasi (sintetis) untuk tujuan demonstrasi teknis.

---

## 📬 Saluran Kontak Resmi

* **Email:** [obbyvior@gmail.com](mailto:obbyvior@gmail.com)
* **GitHub:** [https://github.com/Mojo-Brothers](https://github.com/Mojo-Brothers)
* **LinkedIn:** [https://www.linkedin.com/in/roby-viori-fansya-2b0423437/](https://www.linkedin.com/in/roby-viori-fansya-2b0423437/)

---

## 📄 Lisensi
Dilisensikan di bawah [MIT License](LICENSE).
