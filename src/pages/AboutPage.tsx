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
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Tentang Saya | Robby Viory Fansya — Healthcare Operations & Digital Systems"
        description="Profil profesional, latar belakang pengalaman operasional rumah sakit, dan komitmen pengembangan perangkat lunak mandiri untuk teknologi kesehatan."
      />

      <div className="py-12 md:py-20 bg-slate-50/50">
        <Container size="default">
          <SectionHeader
            eyebrow="Profil Profesional"
            title="Berawal dari Dinamika Operasional Rumah Sakit, Menuju Rekayasa Sistem Kesehatan Digital"
            description="Mengenal latar belakang, motivasi, dan filosofi pengembangan perangkat lunak di balik portofolio teknologi kesehatan ini."
          />

          {/* Main Story Narrative */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed mb-12">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Perspektif dari Lantai Operasional Fasilitas Kesehatan
            </h3>

            <p>
              Bekerja di lingkungan operasional rumah sakit memberikan saya sudut pandang unik yang jarang dimiliki oleh developer perangkat lunak murni: <strong>saya berinteraksi langsung dengan realitas alur kerja pelayanan kesehatan dalam situasi yang menuntut kecepatan dan ketepatan tinggi.</strong>
            </p>

            <p className="p-4 bg-slate-50 border-l-4 border-teal-600 rounded-r-lg text-slate-800 italic">
              "Pengalaman bekerja di lingkungan rumah sakit membuat saya semakin memahami bahwa keberhasilan sebuah sistem digital tidak hanya bergantung pada kecanggihan teknologinya, tetapi terutama pada kesesuaiannya dengan alur kerja pengguna di lapangan."
            </p>

            <p>
              Saya menyaksikan bagaimana koordinasi pelayanan darurat dapat terhambat oleh proses pencatatan fisik yang tercecer, ketiadaan pemantauan stok sarana pendukung (seperti kesiapan linen steril dan armada ambulans), hingga ketidakpastian informasi jadwal dokter jaga bagi pasien dan keluarga di ruang tunggu.
            </p>

            <h3 className="text-lg font-bold text-slate-900 tracking-tight pt-4 border-t border-slate-100">
              Inisiatif Belajar & Rekayasa Software Mandiri
            </h3>

            <p>
              Didorong oleh keinginan nyata untuk menyelesaikan masalah-masalah tersebut, saya mulai mendalami rekayasa perangkat lunak modern secara mandiri. Alih-alih hanya mempelajari sintaks pemrograman dasar, fokus saya langsung diarahkan pada bagaimana memodelkan sistem kesehatan yang tangguh:
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm pl-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Arsitektur Frontend Modern:</strong> Memanfaatkan React 18/19, TypeScript, dan Tailwind CSS untuk menciptakan antarmuka yang cepat diakses oleh staf lapangan tanpa beban kognitif berlebih.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Pemodelan Data Terstruktur:</strong> Merancang skema relasional PostgreSQL dengan Prisma ORM dan SQL migrations berurutan untuk menjamin integritas data rekam medis.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Sinkronisasi Real-Time & Operasional Lapangan:</strong> Mengimplementasikan Firebase Firestore untuk layar TV monitor publik dan Capacitor Android untuk aplikasi mobile driver ambulans.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Disiplin Pengujian & Regulasi:</strong> Menguji logika triase dan peringatan alergi obat dengan 44 test suites Vitest serta mengadopsi prinsip keselamatan pasien JCI dan Permenkes 24/2022.
                </span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-slate-900 tracking-tight pt-4 border-t border-slate-100">
              Nilai yang Saya Tawarkan untuk Tim Anda
            </h3>

            <p>
              Saya tidak memposisikan diri sebagai praktisi klinis ataupun insinyur dengan jam terbang korporat puluhan tahun. Nilai strategis yang saya tawarkan adalah <strong>kemampuan menjadi jembatan (translator) yang efektif</strong>: memahami apa yang dibutuhkan oleh operasional rumah sakit dan tenaga medis, lalu mengeksekusinya menjadi spesifikasi fungsional dan arsitektur kode yang teruji.
            </p>

            <p>
              Saya sangat antusias untuk bergabung dan bertumbuh bersama tim dalam peran <strong>Healthcare IT, SIMRS / HIS Engineer, System Analyst Healthcare, Business Analyst Healthcare, atau Digital Health Transformation</strong>.
            </p>
          </div>

          {/* Quick Stats / Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center border-slate-200">
              <Building2 className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-slate-900">Hospital Operations</div>
              <p className="text-xs text-slate-500 font-mono mt-1">Latar Belakang Lapangan</p>
            </Card>
            <Card className="p-6 text-center border-slate-200">
              <Code2 className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-slate-900">Full-Stack Dev</div>
              <p className="text-xs text-slate-500 font-mono mt-1">React, TS, PostgreSQL</p>
            </Card>
            <Card className="p-6 text-center border-slate-200">
              <HeartHandshake className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <div className="text-xl font-bold text-slate-900">Healthcare IT</div>
              <p className="text-xs text-slate-500 font-mono mt-1">Arah Transisi Karir</p>
            </Card>
          </div>

          {/* Independent Disclosure */}
          <div className="mb-12">
            <DisclaimerBox />
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              to="/contact"
              variant="primary"
              size="md"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Mulai Percakapan
            </Button>
            <Button
              href={SOCIAL_LINKS.linkedin}
              variant="secondary"
              size="md"
              icon={<Linkedin className="w-4 h-4 text-teal-700" />}
              iconRight={<ExternalLink className="w-3.5 h-3.5 text-slate-400" />}
            >
              Kunjungi Profil LinkedIn
            </Button>
            <Button
              href={SOCIAL_LINKS.github}
              variant="ghost"
              size="md"
              icon={<Github className="w-4 h-4 text-slate-600" />}
            >
              Lihat Repositori GitHub
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};
