import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateCV() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 in points
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Brand Colors
  const primaryColor = rgb(0.06, 0.09, 0.16); // Slate 900 (#0f172a)
  const tealColor = rgb(0.05, 0.58, 0.53);    // Teal 600 (#0d9488)
  const darkTeal = rgb(0.07, 0.44, 0.41);     // Teal 700
  const textColor = rgb(0.2, 0.25, 0.33);     // Slate 700 (#334155)
  const mutedColor = rgb(0.4, 0.47, 0.56);    // Slate 500 (#64748b)
  const lineColor = rgb(0.88, 0.91, 0.94);    // Slate 200 (#e2e8f0)
  const cardBg = rgb(0.97, 0.98, 0.99);       // Slate 50 (#f8fafc)

  let y = height - 42;
  const marginX = 42;
  const contentWidth = width - marginX * 2;

  // Header Bar (Teal Accent Line)
  page.drawRectangle({
    x: marginX,
    y: y + 16,
    width: contentWidth,
    height: 4,
    color: tealColor,
  });

  // Name
  page.drawText('ROBBY VIORY FANSYA', {
    x: marginX,
    y: y - 8,
    size: 20,
    font: fontBold,
    color: primaryColor,
  });

  // Headline
  page.drawText('Healthcare Operations & Digital Systems | Technical Support | Independent Software Projects', {
    x: marginX,
    y: y - 24,
    size: 9.5,
    font: fontBold,
    color: darkTeal,
  });

  // Contact Info Row
  const contactText = 'Email: obbyvior@gmail.com   |   LinkedIn: linkedin.com/in/roby-viori-fansya-2b0423437/   |   GitHub: github.com/Mojo-Brothers';
  page.drawText(contactText, {
    x: marginX,
    y: y - 38,
    size: 8,
    font: fontRegular,
    color: mutedColor,
  });

  y -= 52;
  page.drawLine({
    start: { x: marginX, y },
    end: { x: width - marginX, y },
    thickness: 1,
    color: lineColor,
  });

  y -= 14;

  // Helper Section Title
  function drawSectionTitle(title) {
    page.drawText(title.toUpperCase(), {
      x: marginX,
      y,
      size: 10,
      font: fontBold,
      color: darkTeal,
    });
    y -= 4;
    page.drawLine({
      start: { x: marginX, y },
      end: { x: width - marginX, y },
      thickness: 0.8,
      color: lineColor,
    });
    y -= 12;
  }

  // 1. PROFESSIONAL SUMMARY
  drawSectionTitle('Ringkasan Profil Profesional');
  const summaryLines = [
    'Praktisi operasional fasilitas kesehatan yang memiliki pemahaman mendalam tentang dinamika kerja klinis lapangan,',
    'berpadu dengan keahlian praktis dalam Technical Support, analisis alur kerja medis, dan rekayasa perangkat lunak mandiri.',
    'Berpengalaman mengurai friksi pencatatan manual rumah sakit menjadi arsitektur digital teruji (NurseFlow HIS & IGD Operations).',
    'Mahir menerapkan AI-assisted development untuk akselerasi riset arsitektur dan automated testing yang disiplin.',
  ];
  for (const line of summaryLines) {
    page.drawText(line, { x: marginX, y, size: 8.2, font: fontRegular, color: textColor });
    y -= 11.5;
  }
  y -= 6;

  // 2. CORE COMPETENCIES
  drawSectionTitle('Matriks Kompetensi Utama');
  const compBoxHeight = 56;
  const colW = (contentWidth - 10) / 2;

  // Box 1: Healthcare & IT Support
  page.drawRectangle({
    x: marginX,
    y: y - compBoxHeight + 10,
    width: colW,
    height: compBoxHeight,
    color: cardBg,
    borderColor: lineColor,
    borderWidth: 0.8,
  });
  page.drawText('Healthcare IT & Technical Support', { x: marginX + 8, y: y + 1, size: 8.5, font: fontBold, color: primaryColor });
  page.drawText('• Alur IGD, Triase ESI v4, CPPT/SOAP & Standar Permenkes 24/2022', { x: marginX + 8, y: y - 11, size: 7.5, font: fontRegular, color: textColor });
  page.drawText('• Troubleshooting Workstation, OS Windows/Android, Printer Barcode & LAN', { x: marginX + 8, y: y - 22, size: 7.5, font: fontRegular, color: textColor });
  page.drawText('• Pendampingan teknis pengguna akhir (Dokter, Perawat, Staf Lapangan)', { x: marginX + 8, y: y - 33, size: 7.5, font: fontRegular, color: textColor });

  // Box 2: Software Dev & AI
  page.drawRectangle({
    x: marginX + colW + 10,
    y: y - compBoxHeight + 10,
    width: colW,
    height: compBoxHeight,
    color: cardBg,
    borderColor: lineColor,
    borderWidth: 0.8,
  });
  page.drawText('Software Engineering & AI-Assisted Dev', { x: marginX + colW + 18, y: y + 1, size: 8.5, font: fontBold, color: primaryColor });
  page.drawText('• React 19, TypeScript, Tailwind CSS, Vite & Responsive Mobile-First', { x: marginX + colW + 18, y: y - 11, size: 7.5, font: fontRegular, color: textColor });
  page.drawText('• PostgreSQL, Prisma ORM, SQL Migrations, Firebase Real-Time Firestore', { x: marginX + colW + 18, y: y - 22, size: 7.5, font: fontRegular, color: textColor });
  page.drawText('• Disiplin Automated Testing (44 Test Suites Vitest), Git & AI Scaffolding', { x: marginX + colW + 18, y: y - 33, size: 7.5, font: fontRegular, color: textColor });

  y -= compBoxHeight + 8;

  // 3. WORK EXPERIENCE & PROJECTS
  drawSectionTitle('Pengalaman Kerja & Rekayasa Sistem');

  // Role 1
  page.drawText('Hospital Operations, Administration & Technical Support', { x: marginX, y, size: 9, font: fontBold, color: primaryColor });
  page.drawText('2023 – Sekarang', { x: width - marginX - 70, y, size: 8, font: fontBold, color: darkTeal });
  y -= 10;
  page.drawText('Lingkungan Fasilitas Pelayanan Kesehatan   |   Dukungan Operasional & Troubleshooting Sistem', { x: marginX, y, size: 7.8, font: fontOblique, color: mutedColor });
  y -= 11;
  const exp1Bullets = [
    '• Mengelola administrasi alur pelayanan, logistik ambulans darurat, dan pemantauan distribusi linen steril IGD.',
    '• Memberikan technical support harian untuk workstation PC, printer label pasien, jaringan internal, dan aplikasi EMR.',
    '• Memberikan pelatihan antarmuka dan onboarding sistem registrasi bagi staf administrasi dan tenaga kesehatan baru.',
    '• Menginisiasi perancangan sistem prototipe digital untuk mengeliminasi ketergantungan pencatatan buku fisik lapangan.',
  ];
  for (const b of exp1Bullets) {
    page.drawText(b, { x: marginX + 4, y, size: 7.6, font: fontRegular, color: textColor });
    y -= 10;
  }
  y -= 4;

  // Role 2
  page.drawText('Independent Software Developer & Systems Modeler', { x: marginX, y, size: 9, font: fontBold, color: primaryColor });
  page.drawText('2024 – 2026', { x: width - marginX - 58, y, size: 8, font: fontBold, color: darkTeal });
  y -= 10;
  page.drawText('Mojo Brothers (Proyek Inisiatif Mandiri)   |   Arsitektur Sistem Informasi Kesehatan', { x: marginX, y, size: 7.8, font: fontOblique, color: mutedColor });
  y -= 11;
  const exp2Bullets = [
    '• NurseFlow HIS: Membangun sistem referensi klinis dengan 44 test suites (185 automated tests passing), validasi ESI v4,',
    '  survei primer ABCDE, CPPT/SOAP EMR, hard-blocker alergi obat aktif, dan skema database PostgreSQL Prisma terstruktur.',
    '• IGD Operations Platform: Membangun workstation ambulans mobile-first dengan proteksi PIN 6-digit, Leaflet KM tracking,',
    '  monitoring inventaris LinenFlow visual, layar TV display on-call sinkronisasi real-time Firestore, dan ekspor laporan PDF/Excel.',
    '• Mengintegrasikan pendekatan AI-assisted engineering (Claude & Gemini) untuk penulisan automated test & validasi logika.',
  ];
  for (const b of exp2Bullets) {
    page.drawText(b, { x: marginX + 4, y, size: 7.6, font: fontRegular, color: textColor });
    y -= 10;
  }
  y -= 4;

  // Role 3
  page.drawText('Digital Media, Videographer & Visual Communication Lead', { x: marginX, y, size: 9, font: fontBold, color: primaryColor });
  page.drawText('2023 – 2025', { x: width - marginX - 58, y, size: 8, font: fontBold, color: darkTeal });
  y -= 10;
  page.drawText('Inisiatif Komunikasi Visual & Media Digital   |   Produksi Sinematik & Pertumbuhan Digital', { x: marginX, y, size: 7.8, font: fontOblique, color: mutedColor });
  y -= 11;
  const exp3Bullets = [
    '• Menyutradarai dan memproduksi video sinematik institusional alur pelayanan medis dengan DaVinci Resolve & Premiere.',
    '• Merancang infografis langkah pendaftaran & triase pasien yang mempermudah navigasi pasien baru di fasilitas kesehatan.',
    '• Merumuskan strategi konten edukasi kesehatan terstruktur yang meningkatkan keterlibatan audiens organik hingga +180%.',
  ];
  for (const b of exp3Bullets) {
    page.drawText(b, { x: marginX + 4, y, size: 7.6, font: fontRegular, color: textColor });
    y -= 10;
  }
  y -= 6;

  // 4. EDUCATION & CERTIFIED LEARNING
  drawSectionTitle('Pendidikan & Studi Mandiri Berkelanjutan');
  page.drawText('Studi Mandiri Berkelanjutan: Full-Stack Engineering & Healthcare Systems', { x: marginX, y, size: 8.5, font: fontBold, color: primaryColor });
  page.drawText('Pendidikan Berkelanjutan', { x: width - marginX - 100, y, size: 7.8, font: fontRegular, color: mutedColor });
  y -= 10;
  page.drawText('Kurikulum Industri Terbuka & Riset Mandiri   |   Web Technologies, PostgreSQL, Permenkes 24/2022, AI Engineering', { x: marginX, y, size: 7.5, font: fontOblique, color: mutedColor });
  y -= 14;

  // Footer Note
  page.drawLine({
    start: { x: marginX, y },
    end: { x: width - marginX, y },
    thickness: 0.8,
    color: lineColor,
  });
  y -= 10;
  page.drawText('Dokumen CV resmi Robby Viory Fansya  •  Portofolio online: https://robby-portfolio.pages.dev  •  Kontak: obbyvior@gmail.com', {
    x: marginX,
    y,
    size: 7,
    font: fontRegular,
    color: mutedColor,
  });

  const pdfBytes = await pdfDoc.save();

  const outDir = path.resolve('public', 'cv');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outPath = path.join(outDir, 'Robby-Viory-Fansya-CV.pdf');
  fs.writeFileSync(outPath, pdfBytes);
  console.log(`CV PDF successfully generated at: ${outPath} (${pdfBytes.length} bytes)`);
}

generateCV().catch((err) => {
  console.error('Error generating CV PDF:', err);
  process.exit(1);
});
