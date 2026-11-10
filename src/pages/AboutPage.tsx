import React from 'react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { SectionHeader } from '../components/common/SectionHeader';
import { DisclaimerBox } from '../components/project/DisclaimerBox';
import { MetaTags } from '../components/seo/MetaTags';
import { SOCIAL_LINKS } from '../data/navigation.data';
import { Github, Linkedin } from '../components/common/Icons';
import {
  ArrowRight,
  Mail,
  Building2,
  Code2,
  HeartHandshake,
  CheckCircle2,
  ExternalLink,
  Download,
  Wrench,
  Bot,
  Sparkles,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Tentang Saya | Robby Viory Fansya — Healthcare Operations & Digital Systems"
        description="Profil profesional, pengalaman administrasi dan operasional rumah sakit, technical support, serta perjalanan belajar software mandiri berbantuan AI oleh Robby Viory Fansya."
      />

      <div className="py-12 md:py-20 bg-slate-50/50">
        <Container size="default">
          <SectionHeader
            eyebrow="Profil Profesional"
            title="Berawal dari Realitas Operasional Rumah Sakit, Menuju Rekayasa Sistem Kesehatan Digital"
            description="Mengenal latar belakang, motivasi, metodologi belajar mandiri, dan filosofi rekayasa perangkat lunak di balik portofolio teknologi kesehatan ini."
          />

          {/* Main Story Narrative */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed mb-12">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              1. Perspektif dari Lantai Operasional Fasilitas Kesehatan
            </h3>

            <p>
              Bekerja di lingkungan administrasi dan operasional rumah sakit memberikan saya sudut pandang unik yang jarang dimiliki oleh developer perangkat lunak murni: <strong>saya berinteraksi langsung dengan ritme kerja tenaga kesehatan, tekanan waktu gawat darurat, dan hambatan administratif harian.</strong>
            </p>

            <p className="p-4 bg-slate-50 border-l-4 border-teal-600 rounded-r-lg text-slate-800 italic">
              "Keberhasilan sebuah sistem informasi kesehatan tidak semata-mata diukur dari kecanggihan teknologinya, melainkan seberapa mulus sistem tersebut beradaptasi dengan ritme kerja staf lapangan tanpa menambah beban administratif baru."
            </p>

            <p>
              Di lapangan, saya menangani proses administrasi pasien, koordinasi armada ambulans rujukan, serta perputaran sarana pendukung seperti linen steril IGD. Selain itu, saya rutin memberikan <strong>dukungan teknis (Technical Support & IT Helpdesk)</strong>: memperbaiki workstation komputer staf, menangani printer thermal cetak label barcode pasien, memastikan stabilitas jaringan lokal, dan membimbing staf baru menggunakan sistem rekam medis.
            </p>

            <h3 className="text-lg font-bold text-slate-900 tracking-tight pt-4 border-t border-slate-100">
              2. Ketertarikan Teknologi & Inisiatif Rekayasa Software Mandiri
            </h3>

            <p>
              Melihat berbagai inefisiensi pencatatan fisik yang berisiko memperlambat alur pelayanan, saya terdorong untuk mendalami rekayasa perangkat lunak modern. Pembelajaran saya langsung difokuskan pada problem nyata yang saya jumpai setiap hari:
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm pl-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Arsitektur Frontend Modern:</strong> Memanfaatkan React 19, TypeScript, dan Tailwind CSS untuk menciptakan antarmuka yang cepat diakses oleh staf lapangan tanpa beban kognitif berlebih.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Pemodelan Data Relasional Terstruktur:</strong> Merancang skema PostgreSQL dengan Prisma ORM dan SQL migrations berurutan guna menjamin konsistensi data entitas pasien, riwayat alergi, dan stok farmasi.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Sinkronisasi Real-Time & Operasional Lapangan:</strong> Mengimplementasikan Firebase Firestore untuk monitor TV display ruang tunggu IGD dan Capacitor Android untuk aplikasi smartphone driver ambulans.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Disiplin Pengujian & Regulasi Medis:</strong> Menulis 44 automated test suites (185 tests) menggunakan Vitest untuk memverifikasi logika triase ESI v4 serta mengadopsi standar Permenkes No. 24/2022.
                </span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 tracking-tight pt-4 border-t border-slate-100">
              3. Metodologi Pembelajaran Mandiri & AI-Assisted Engineering
            </h3>

            <p>
              Proses pembelajaran teknologi saya dikembangkan secara terstruktur dan mandiri dengan mengadopsi <strong>AI-assisted development</strong> sebagai katalis produktivitas:
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 font-bold text-slate-900 font-mono">
                <Bot className="w-4 h-4 text-teal-600" />
                <span>Prinsip Penerapan AI-Assisted Development:</span>
              </div>
              <p className="text-slate-600">
                • <strong>Eksplorasi & Brainstorming Arsitektur:</strong> Menggunakan LLM (Claude & Gemini) untuk membandingkan pola arsitektur, trade-off state management, dan pemodelan resource FHIR.
              </p>
              <p className="text-slate-600">
                • <strong>Perumusan Edge Cases & Negative Tests:</strong> Memanfaatkan prompt terstruktur untuk mengidentifikasi kemungkinan kegagalan input form medis dan menghasilkan skenario automated unit testing.
              </p>
              <p className="text-slate-600">
                • <strong>Verifikasi Ketat & Kendali Penuh:</strong> Setiap baris kode yang dihasilkan melalui scaffolding AI diuji, di-refactor, dan diverifikasi secara manual guna memastikan kepatuhan terhadap logika bisnis dan keamanan data.
              </p>
            </div>

            <h3 className="text-lg font-bold text-slate-900 tracking-tight pt-4 border-t border-slate-100">
              4. Nilai Strategis yang Saya Tawarkan untuk Tim Anda
            </h3>

            <p>
              Saya tidak memposisikan diri sebagai Senior Software Engineer dengan pengalaman korporasi puluhan tahun. Nilai strategis utama saya adalah <strong>kemampuan menjadi jembatan (translator) yang efektif</strong>: memahami apa yang dirasakan oleh staf medis di lapangan, mengidentifikasi akar friksi logistik, dan mengeksekusinya menjadi antarmuka digital serta sistem pendukung yang andal.
            </p>

            <p>
              Saya sangat siap dan antusias untuk berkontribusi dalam posisi:
            </p>
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
              <span className="px-2.5 py-1 rounded-md bg-teal-50 text-teal-900 border border-teal-200 font-semibold">
                Healthcare IT Specialist
              </span>
              <span className="px-2.5 py-1 rounded-md bg-teal-50 text-teal-900 border border-teal-200 font-semibold">
                IT Support & Systems Administrator
              </span>
              <span className="px-2.5 py-1 rounded-md bg-teal-50 text-teal-900 border border-teal-200 font-semibold">
                SIMRS / HIS Support Engineer
              </span>
              <span className="px-2.5 py-1 rounded-md bg-teal-50 text-teal-900 border border-teal-200 font-semibold">
                Junior Full-Stack Web Developer
              </span>
              <span className="px-2.5 py-1 rounded-md bg-teal-50 text-teal-900 border border-teal-200 font-semibold">
                Digital Media & Content Specialist
              </span>
            </div>
          </div>

          {/* Quick Stats / Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center border-slate-200">
              <Building2 className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-slate-900">Hospital Operations</div>
              <p className="text-xs text-slate-500 font-mono mt-1">Latar Belakang Lapangan</p>
            </Card>
            <Card className="p-6 text-center border-slate-200">
              <Wrench className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-slate-900">Technical Support</div>
              <p className="text-xs text-slate-500 font-mono mt-1">Troubleshooting & Perangkat</p>
            </Card>
            <Card className="p-6 text-center border-slate-200">
              <Code2 className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-slate-900">Software Projects</div>
              <p className="text-xs text-slate-500 font-mono mt-1">React, TS, PostgreSQL & AI</p>
            </Card>
          </div>

          {/* Independent Disclosure */}
          <div className="mb-12">
            <DisclaimerBox />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Button
              to="/contact"
              variant="primary"
              size="md"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Mulai Percakapan
            </Button>
            <Button
              href={SOCIAL_LINKS.cvPdf}
              download="CV_Robby_Viory_Fansya.pdf"
              variant="secondary"
              size="md"
              icon={<Download className="w-4 h-4 text-teal-700" />}
            >
              Unduh CV Resmi (PDF)
            </Button>
            <Button
              to="/resume"
              variant="secondary"
              size="md"
            >
              Lihat Resume Lengkap
            </Button>
            <Button
              href={SOCIAL_LINKS.linkedin}
              variant="ghost"
              size="md"
              icon={<Linkedin className="w-4 h-4 text-teal-700" />}
            >
              LinkedIn
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};
