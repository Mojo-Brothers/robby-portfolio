import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { SectionHeader } from '../components/common/SectionHeader';
import { ProjectCard } from '../components/project/ProjectCard';
import { MetaTags } from '../components/seo/MetaTags';
import { PROJECTS_DATA } from '../data/projects.data';
import { VALUE_PILLARS, TECHNICAL_EVIDENCE_LIST, SKILL_CATEGORIES } from '../data/evidence.data';
import { SOCIAL_LINKS } from '../data/navigation.data';
import { Github, Linkedin } from '../components/common/Icons';
import {
  ArrowRight,
  Activity,
  Wrench,
  Layers,
  ShieldCheck,
  CheckCircle2,
  GitBranch,
  Building2,
  Stethoscope,
  Terminal,
  ExternalLink,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const nurseflow = PROJECTS_DATA.nurseflow;
  const igd = PROJECTS_DATA['igd-operations'];

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Activity':
        return <Activity className="w-5 h-5 text-teal-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-teal-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-teal-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <>
      <MetaTags
        title="Robby Viory Fansya | Healthcare Operations & Digital Systems"
        description="Menerjemahkan Alur Kerja Rumah Sakit Menjadi Solusi Software yang Terstruktur. Portfolio profesional dan studi kasus teknologi kesehatan oleh Robby Viory Fansya."
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-slate-50">
        <Container size="wide">
          <div className="max-w-3xl space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
              <span>Healthcare Operations & Digital Systems</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-slate-900 tracking-tight leading-[1.18]">
              Menerjemahkan Alur Kerja Rumah Sakit Menjadi Solusi Software yang Terstruktur.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Menggabungkan pengalaman langsung di lingkungan operasional rumah sakit dengan kemampuan full-stack web development. Saya merancang dan membangun sistem informasi serta perangkat digital untuk membantu menyelesaikan kebutuhan workflow klinis dan operasional.
            </p>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <Button
                to="/projects"
                variant="primary"
                size="md"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Lihat Studi Kasus Proyek
              </Button>

              <Button
                href={SOCIAL_LINKS.linkedin}
                variant="secondary"
                size="md"
                icon={<Linkedin className="w-4 h-4 text-teal-700" />}
                iconRight={<ExternalLink className="w-3.5 h-3.5 text-slate-400" />}
              >
                Terhubung di LinkedIn
              </Button>

              <Button
                href={SOCIAL_LINKS.github}
                variant="ghost"
                size="md"
                icon={<Github className="w-4 h-4 text-slate-600" />}
              >
                GitHub
              </Button>
            </div>

            {/* Verified Focus Snapshot */}
            <div className="pt-6 border-t border-slate-200/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-600">
              <div>
                <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Domain Utama</span>
                <span className="font-semibold text-slate-900">Hospital Workflow</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Stack Teknis</span>
                <span className="font-semibold text-slate-900">React • TS • PostgreSQL</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Fokus Karir</span>
                <span className="font-semibold text-teal-700">Healthcare IT / SIMRS</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. THE BRIDGE (VALUE PILLARS & JOURNEY) */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
        <Container size="wide">
          <SectionHeader
            eyebrow="The Healthcare-Tech Bridge"
            title="Mengapa Pemahaman Operasional Rumah Sakit Krusial dalam Rekayasa Software?"
            description="Banyak inisiatif digitalisasi rumah sakit mengalami penolakan pengguna karena sistem dirancang tanpa memahami ritme kerja tenaga kesehatan di lapangan. Saya menjembatani dua kebutuhan tersebut secara berimbang."
          />

          {/* Visual Journey Progression */}
          <div className="mb-14 p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200/90">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-4">
              Alur Penalaran & Solusi:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
              <div className="bg-white p-4 rounded-lg border border-slate-200/80 flex items-start gap-3">
                <div className="p-2 rounded bg-slate-100 text-slate-700 font-mono text-xs font-bold shrink-0">
                  01
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Hospital Operations
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Mengamati langsung dinamika pelayanan, waktu tanggap darurat, dan hambatan logistik harian.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-slate-200/80 flex items-start gap-3">
                <div className="p-2 rounded bg-slate-100 text-slate-700 font-mono text-xs font-bold shrink-0">
                  02
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Workflow Understanding
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Menganalisis alur data: triase ESI, pergantian shift dokter, serta sirkulasi linen steril.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-slate-200/80 flex items-start gap-3">
                <div className="p-2 rounded bg-slate-100 text-slate-700 font-mono text-xs font-bold shrink-0">
                  03
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Software Development
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Membangun arsitektur data, logika validasi keselamatan, dan antarmuka responsif secara mandiri.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-slate-200/80 flex items-start gap-3 border-teal-200 bg-teal-50/30">
                <div className="p-2 rounded bg-teal-600 text-white font-mono text-xs font-bold shrink-0">
                  04
                </div>
                <div>
                  <h4 className="text-xs font-bold text-teal-900 uppercase tracking-wide">
                    Healthcare Technology
                  </h4>
                  <p className="text-xs text-teal-800 mt-1">
                    Menghasilkan platform digital yang praktis digunakan staf lapangan dan teruji secara teknis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PILLARS.map((pillar) => (
              <Card key={pillar.title} className="p-6 border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200/70 flex items-center justify-center mb-4">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. FEATURED PROJECTS */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-slate-50/60">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200/60 px-2.5 py-1 rounded-md mb-2 font-mono">
                Karya Proyek Unggulan
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Dua Dimensi Solusi Teknologi Kesehatan
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                Kedalaman arsitektur sistem informasi klinis berpadu dengan kepraktisan digitalisasi operasional lapangan.
              </p>
            </div>
            <Button
              to="/projects"
              variant="outline"
              size="sm"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Katalog Proyek
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProjectCard project={nurseflow} />
            <ProjectCard project={igd} />
          </div>
        </Container>
      </section>

      {/* 4. TECHNICAL EVIDENCE SECTION (EVIDENCE OVER ADJECTIVE) */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
        <Container size="wide">
          <SectionHeader
            eyebrow="Technical Evidence"
            title="Bukti Teknis Berbasis Repositori Aktual"
            description="Kredibilitas dibangun melalui kode, skema basis data, dan pengujian otomatis yang dapat diverifikasi langsung pada repositori GitHub."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECHNICAL_EVIDENCE_LIST.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl border border-slate-200/90 p-5 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500">
                      {item.domain}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                      {item.project}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {item.proof}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.significance}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-200/70 flex items-center gap-1.5 text-xs text-teal-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Terverifikasi di Repository</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. CAPABILITY AREAS (GROUPED SKILLS WITHOUT FAKE PERCENTAGES) */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-slate-50/50">
        <Container size="wide">
          <SectionHeader
            eyebrow="Competency Mapping"
            title="Matrik Kemampuan Domain & Rekayasa Sistem"
            description="Daftar keahlian disusun secara jujur berdasarkan teknologi dan domain yang benar-benar diimplementasikan dalam proyek mandiri."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <Card key={cat.categoryName} className="p-6 border-slate-200/90">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono pb-3 border-b border-slate-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-600" />
                  <span>{cat.categoryName}</span>
                </h3>
                <ul className="mt-4 space-y-3">
                  {cat.skills.map((s) => (
                    <li key={s.name} className="text-xs sm:text-sm">
                      <div className="font-semibold text-slate-900">{s.name}</div>
                      <div className="text-xs text-slate-500 font-mono mt-0.5">{s.context}</div>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CAREER TRANSITION NARRATIVE */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
        <Container size="wide">
          <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <span className="inline-block text-xs font-mono uppercase tracking-wider text-teal-400 bg-teal-950/60 border border-teal-800 px-2.5 py-1 rounded-md mb-4">
              Career Transition Narrative
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug">
              "Banyak software kesehatan dirancang dari balik meja tanpa memahami tekanan kerja di lantai rumah sakit."
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Kekuatan yang saya tawarkan adalah berangkat dari pemahaman operasional klinis tersebut, lalu menerjemahkannya ke dalam baris kode yang terstruktur, aman, dan berdaya guna.
              </p>
              <p>
                Transisi karir saya bukan sebuah lompatan acak, melainkan evolusi yang beralasan: berawal dari pengamatan langsung terhadap alur kerja pelayanan kesehatan, berkembang menjadi komitmen untuk membangun teknologi yang benar-benar mempermudah staf dan mendukung keakuratan data.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold font-mono text-sm border border-teal-500/40">
                  RVF
                </div>
                <div>
                  <span className="block text-sm font-bold text-white">Robby Viory Fansya</span>
                  <span className="block text-xs text-teal-300 font-mono">Healthcare Operations & Digital Systems</span>
                </div>
              </div>

              <Button
                to="/about"
                variant="outline"
                size="sm"
                className="border-slate-600 text-teal-300 hover:bg-slate-800 hover:border-teal-400"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Baca Profil Lengkap
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. CONTACT / CTA SECTION */}
      <section className="py-16 md:py-20 bg-slate-50">
        <Container size="default">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Siap Berkolaborasi di Ranah Healthcare IT
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              Terbuka untuk peluang karir di bidang Healthcare Technology, SIMRS/HIS, Digital Health, System Analysis, atau Digital Transformation.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Hubungi Saya
              </Button>
              <Button
                href={SOCIAL_LINKS.linkedin}
                variant="secondary"
                size="md"
                icon={<Linkedin className="w-4 h-4 text-teal-700" />}
              >
                Kirim Pesan di LinkedIn
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
