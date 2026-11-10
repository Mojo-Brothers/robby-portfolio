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
import { CREATIVE_WORKS_DATA } from '../data/creative.data';
import { Github, Linkedin, WhatsApp } from '../components/common/Icons';
import {
  ArrowRight,
  Activity,
  Wrench,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Download,
  Mail,
  Video,
  ExternalLink,
  Sparkles,
  Clapperboard,
  Palette,
  TrendingUp,
  Cpu,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const nurseflow = PROJECTS_DATA.nurseflow;
  const igd = PROJECTS_DATA['igd-operations'];
  const featuredCreative = CREATIVE_WORKS_DATA.slice(0, 2);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Activity':
        return <Activity className="w-5 h-5 text-teal-700" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-teal-700" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-teal-700" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-teal-700" />;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Praktik':
        return 'bg-teal-50 text-teal-900 border-teal-300';
      case 'Pemahaman Dasar':
        return 'bg-blue-50 text-blue-900 border-blue-300';
      default:
        return 'bg-amber-50 text-amber-900 border-amber-300';
    }
  };

  return (
    <>
      <MetaTags
        title="Robby Viory Fansya | Healthcare Operations & Digital Systems"
        description="Healthcare Operations & Digital Systems | Technical Support | Independent Software Projects. Menggabungkan pengalaman langsung operasional rumah sakit dengan kemampuan rekayasa software mandiri."
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/50 to-slate-50">
        <Container size="wide">
          <div className="max-w-3xl space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 border border-teal-200/80 text-teal-900 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
              <span>Healthcare Operations & Digital Systems • Technical Support</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-slate-900 tracking-tight leading-[1.18]">
              Menerjemahkan Alur Kerja Rumah Sakit Menjadi Solusi Software yang Terstruktur.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
              Praktisi operasional fasilitas kesehatan dan technical support yang menggabungkan pengalaman kerja di lapangan dengan keahlian full-stack web development. Merancang dan membangun arsitektur sistem informasi mandiri serta perangkat digital untuk mengurai friksi klinis dan operasional.
            </p>

            {/* Action CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Button
                to="/projects"
                variant="primary"
                size="md"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Lihat Studi Kasus Proyek
              </Button>

              <Button
                href={SOCIAL_LINKS.cvPdf}
                download="CV_Robby_Viory_Fansya.pdf"
                variant="secondary"
                size="md"
                icon={<Download className="w-4 h-4 text-teal-700" />}
              >
                Unduh CV (PDF)
              </Button>

              <Button
                to="/contact"
                variant="ghost"
                size="md"
                icon={<Mail className="w-4 h-4 text-slate-700" />}
              >
                Hubungi Saya
              </Button>

              <Button
                href={SOCIAL_LINKS.linkedin}
                variant="ghost"
                size="md"
                icon={<Linkedin className="w-4 h-4 text-teal-700" />}
              >
                LinkedIn
              </Button>

              <Button
                href={SOCIAL_LINKS.github}
                variant="ghost"
                size="md"
                icon={<Github className="w-4 h-4 text-slate-700" />}
              >
                GitHub
              </Button>
            </div>

            {/* Verified Focus Snapshot */}
            <div className="pt-6 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-slate-700">
              <div>
                <span className="text-[11px] text-slate-600 uppercase tracking-wider block font-semibold">Domain Utama</span>
                <span className="font-bold text-slate-900">Hospital Workflow</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-600 uppercase tracking-wider block font-semibold">Dukungan Teknis</span>
                <span className="font-bold text-slate-900">Technical Support & Troubleshooting</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-600 uppercase tracking-wider block font-semibold">Stack Teknis</span>
                <span className="font-bold text-slate-900">React • TS • PostgreSQL</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-600 uppercase tracking-wider block font-semibold">Target Peran</span>
                <span className="font-bold text-teal-800">Healthcare IT / SIMRS</span>
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
            <span className="text-xs font-mono uppercase tracking-wider text-slate-600 font-bold block mb-4">
              Alur Penalaran & Siklus Solusi:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
              <div className="bg-white p-4 rounded-lg border border-slate-200/80 flex items-start gap-3">
                <div className="p-2 rounded bg-slate-200 text-slate-800 font-mono text-xs font-bold shrink-0">
                  01
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Hospital Operations
                  </h3>
                  <p className="text-xs text-slate-700 mt-1">
                    Mengamati langsung dinamika pelayanan, waktu tanggap darurat, dan hambatan logistik harian.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-slate-200/80 flex items-start gap-3">
                <div className="p-2 rounded bg-slate-200 text-slate-800 font-mono text-xs font-bold shrink-0">
                  02
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Workflow Understanding
                  </h3>
                  <p className="text-xs text-slate-700 mt-1">
                    Menganalisis alur data: triase ESI, pergantian shift dokter, serta sirkulasi linen steril.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-slate-200/80 flex items-start gap-3">
                <div className="p-2 rounded bg-slate-200 text-slate-800 font-mono text-xs font-bold shrink-0">
                  03
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Technical Troubleshooting
                  </h3>
                  <p className="text-xs text-slate-700 mt-1">
                    Menangani problem perangkat keras, workstation, printer barcode, dan jaringan di lapangan.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-slate-200/80 flex items-start gap-3 border-teal-300 bg-teal-50/40">
                <div className="p-2 rounded bg-teal-700 text-white font-mono text-xs font-bold shrink-0">
                  04
                </div>
                <div>
                  <h3 className="text-xs font-bold text-teal-950 uppercase tracking-wide">
                    Healthcare Technology
                  </h3>
                  <p className="text-xs text-teal-900 mt-1">
                    Membangun arsitektur data, logika validasi keselamatan, dan antarmuka responsif secara mandiri.
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
                  <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
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
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200/60 px-2.5 py-1 rounded-md mb-2 font-mono">
                Karya Proyek Unggulan
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Dua Dimensi Solusi Teknologi Kesehatan
              </h2>
              <p className="text-sm text-slate-700 mt-2 max-w-xl">
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
            description="Kredibilitas dibangun melalui kode, skema basis data, dan pengujian otomatis yang dapat diverifikasi langsung pada repositori proyek."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECHNICAL_EVIDENCE_LIST.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl border border-slate-200/90 p-5 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">
                      {item.domain}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-800 border border-slate-200 font-medium">
                      {item.project}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {item.proof}
                  </h3>
                  <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                    {item.significance}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-200/70 flex items-center gap-1.5 text-xs text-teal-800 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Terverifikasi di Proyek</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. 7 TECHNICAL SKILL CATEGORIES WITH HONEST COMPETENCY LEVELS */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-slate-50/50">
        <Container size="wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200/60 px-2.5 py-1 rounded-md mb-2 font-mono">
                Competency Mapping
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Matriks Keahlian Teknis & Level Penguasaan Jujur
              </h2>
              <p className="text-sm text-slate-700 mt-2 max-w-2xl">
                Setiap keahlian diklasifikasikan secara transparan berdasarkan kemampuan praktik nyata, pemahaman konsep dasar, atau teknologi yang sedang aktif dipelajari.
              </p>
            </div>

            {/* Level Legend */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs">
              <span className="text-slate-600 font-bold">Tingkat Penguasaan:</span>
              <span className="px-2 py-0.5 rounded bg-teal-50 text-teal-900 border border-teal-300 font-semibold">Praktik (Hands-on)</span>
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-300 font-semibold">Pemahaman Dasar</span>
              <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-300 font-semibold">Sedang Dipelajari</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <Card key={cat.categoryName} className="p-6 border-slate-200/90 flex flex-col justify-between">
                <div>
                  <div className="pb-3 border-b border-slate-100">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-600" />
                      <span>{cat.categoryName}</span>
                    </h3>
                    <p className="text-[11px] text-slate-600 mt-1 font-mono">
                      {cat.categoryDescription}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-3">
                    {cat.skills.map((s) => (
                      <li key={s.name} className="text-xs">
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-semibold text-slate-900">{s.name}</span>
                          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border shrink-0 ${getLevelBadgeClass(s.level)}`}>
                            {s.level}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-600 font-mono mt-0.5 leading-relaxed">
                          {s.context}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. DIGITAL & CREATIVE WORKS TEASER */}
      <section className="py-16 md:py-20 border-b border-slate-200/80 bg-white">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200/60 px-2.5 py-1 rounded-md mb-2 font-mono">
                Multidisiplin Kreatif
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Karya Pemasaran Digital, Video Sinematik & Branding
              </h2>
              <p className="text-sm text-slate-700 mt-2 max-w-xl">
                Keahlian memproduksi media visual berkualitas tinggi yang mendukung sosialisasi layanan dan citra institusi profesional.
              </p>
            </div>
            <Button
              to="/creative"
              variant="outline"
              size="sm"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Lihat Seluruh Karya Kreatif
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredCreative.map((item) => (
              <Card key={item.id} className="p-6 border-slate-200/90 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-medium text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200/60">
                      {item.categoryLabel}
                    </span>
                    <span className="text-xs font-mono text-slate-600 font-medium">{item.year}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-600">
                    Output: {item.deliverables.slice(0, 2).join(' • ')}
                  </span>
                  <Link
                    to="/creative"
                    className="text-xs font-semibold text-teal-800 hover:text-teal-950 inline-flex items-center gap-1"
                  >
                    <span>Detail</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. CAREER TRANSITION NARRATIVE & AI-ASSISTED DEVELOPMENT */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-slate-50/50">
        <Container size="wide">
          <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <span className="inline-block text-xs font-mono uppercase tracking-wider text-teal-400 bg-teal-950/60 border border-teal-800 px-2.5 py-1 rounded-md mb-4">
              Career Transition & AI-Assisted Engineering
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug">
              "Banyak software kesehatan dirancang dari balik meja tanpa memahami tekanan kerja di lantai rumah sakit."
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Kekuatan yang saya tawarkan adalah berangkat dari pemahaman operasional klinis dan penanganan kendala teknis harian, lalu mengeksekusinya ke dalam baris kode yang terstruktur, aman, dan berdaya guna.
              </p>
              <p>
                Saya memanfaatkan metodologi <strong>AI-assisted development</strong> secara disiplin: menggunakan model bahasa cerdas (Claude, Gemini) sebagai mitra riset arsitektur, pembuat skenario pengujian otomatis, dan validator sanitasi kode, namun selalu memegang kendali penuh atas keputusan desain dan logika bisnis sistem.
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

              <div className="flex items-center gap-2">
                <Button
                  to="/about"
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-teal-300 hover:bg-slate-800 hover:border-teal-400"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Baca Profil Lengkap
                </Button>
                <Button
                  to="/resume"
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-white hover:bg-slate-800"
                >
                  Lihat Resume
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. CONTACT / CTA SECTION */}
      <section className="py-16 md:py-20 bg-white">
        <Container size="default">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Siap Berkolaborasi di Ranah Healthcare IT & Technical Support
            </h2>
            <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto leading-relaxed">
              Terbuka untuk peluang karir di bidang Healthcare Technology, SIMRS/HIS, Technical Support, System Analysis, atau Transformasi Digital Fasilitas Kesehatan.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Button
                href={SOCIAL_LINKS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                className="bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600"
                icon={<WhatsApp className="w-4 h-4 text-white" />}
                iconRight={<ExternalLink className="w-3.5 h-3.5 text-white/80" />}
              >
                Chat WhatsApp
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="md"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Hubungi Saya
              </Button>
              <Button
                href={SOCIAL_LINKS.cvPdf}
                download="CV_Robby_Viory_Fansya.pdf"
                variant="secondary"
                size="md"
                icon={<Download className="w-4 h-4 text-teal-700" />}
              >
                Unduh CV (PDF)
              </Button>
              <Button
                href={SOCIAL_LINKS.linkedin}
                variant="secondary"
                size="md"
                icon={<Linkedin className="w-4 h-4 text-teal-700" />}
              >
                LinkedIn
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
