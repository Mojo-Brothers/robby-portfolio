import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Card } from '../components/common/Card';
import { SectionHeader } from '../components/common/SectionHeader';
import { EvidenceStatBar } from '../components/project/EvidenceStatBar';
import { RoleDetailBox } from '../components/project/RoleDetailBox';
import { WorkflowTimeline } from '../components/project/WorkflowTimeline';
import { MediaLightbox } from '../components/project/MediaLightbox';
import { DisclaimerBox } from '../components/project/DisclaimerBox';
import { MetaTags } from '../components/seo/MetaTags';
import { PROJECTS_DATA } from '../data/projects.data';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Lock,
  Sparkles,
  AlertTriangle,
  Compass,
  Mail,
  FileText,
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !PROJECTS_DATA[slug]) {
    return <Navigate to="/projects" replace />;
  }

  const project = PROJECTS_DATA[slug];

  return (
    <>
      <MetaTags
        title={`${project.title} | Studi Kasus — Robby Viory Fansya`}
        description={project.summary}
      />

      <div className="py-10 md:py-16 bg-slate-50/50">
        <Container size="wide">
          {/* Back link */}
          <div className="mb-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-teal-700 transition-colors focus-ring rounded p-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Katalog Proyek</span>
            </Link>
          </div>

          {/* 1. PROJECT HEADER */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-sm mb-12">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="teal" size="md">
                  {project.categoryLabel}
                </Badge>
                <span className="text-xs font-mono text-slate-500">
                  {project.timeframe}
                </span>
              </div>

              {project.isPrivateRepo ? (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono">
                  <Lock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Private Research Repository</span>
                </div>
              ) : (
                <Button
                  href={project.githubUrl}
                  variant="secondary"
                  size="sm"
                >
                  Buka Repositori GitHub
                </Button>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-sm sm:text-base font-mono text-teal-700 font-medium mt-2">
              {project.subtitle}
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
              {project.summary}
            </p>

            {/* Development Status Notice */}
            {project.developmentStatus && (
              <div className="mt-4 p-3.5 rounded-lg bg-teal-50/70 border border-teal-200/80 flex items-start gap-2.5 text-xs text-teal-950 font-mono">
                <Sparkles className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold text-teal-900">Status Pengembangan Saat Ini: </strong>
                  <span>{project.developmentStatus}</span>
                </div>
              </div>
            )}

            {/* Evidence Stat Bar */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <EvidenceStatBar evidence={project.evidence} />
            </div>
          </div>

          {/* 2. MY ROLE & SCOPE */}
          <section className="mb-14">
            <RoleDetailBox role={project.role} timeframe={project.timeframe} />
          </section>

          {/* 3. OPERATIONAL PROBLEM & SOLUTION APPROACH */}
          <section className="mb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 sm:p-8 border-slate-200/90">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-rose-700 mb-3">
                  <span className="w-2 h-2 rounded-full bg-rose-600" />
                  <span>Konteks & Hambatan Nyata</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Masalah Operasional di Lapangan
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.problemContext}
                </p>
              </Card>

              <Card className="p-6 sm:p-8 border-slate-200/90 bg-teal-50/20 border-teal-200/70">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-teal-800 mb-3">
                  <span className="w-2 h-2 rounded-full bg-teal-600" />
                  <span>Pendekatan Solusi Sistem</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Logika Rekayasa yang Diimplementasikan
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {project.solutionApproach}
                </p>
              </Card>
            </div>
          </section>

          {/* 4. WORKFLOW BLUEPRINT */}
          <section className="mb-14">
            <SectionHeader
              eyebrow="Workflow Blueprint"
              title="Alur Kerja End-to-End Pengguna Sistem"
              description="Tahapan nyata interaksi tenaga operasional/medis dengan validasi aturan keselamatan pada setiap langkah."
            />
            <WorkflowTimeline workflows={project.workflows} />
          </section>

          {/* 5. KEY TECHNICAL FEATURES */}
          <section className="mb-14">
            <SectionHeader
              eyebrow="Engineering Highlights"
              title="Fitur Kunci & Ketahanan Logika Bisnis"
              description="Fitur-fitur yang dirancang secara khusus untuk mencegah human-error dan memastikan konsistensi data."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.features.map((feat, idx) => (
                <Card key={idx} className="p-6 border-slate-200/90 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">
                      {feat.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="font-mono text-[11px]">
                      <strong className="text-slate-900">Bukti Implementasi: </strong>
                      {feat.technicalEvidence}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* 6. TECHNOLOGY STACK GROUPING */}
          <section className="mb-14">
            <SectionHeader
              eyebrow="Technology Architecture"
              title="Komposisi Teknologi & Dependensi Sistem"
              description="Pemisahan lapisan dependensi untuk menjamin skalabilitas, maintainability, dan performa tinggi."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.technologies.map((techGroup) => (
                <div
                  key={techGroup.layer}
                  className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-sm"
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono mb-3 pb-2 border-b border-slate-100">
                    {techGroup.layer}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {techGroup.tags.map((tag) => (
                      <Badge key={tag} variant="tech" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. LIMITATIONS & ROADMAP (HONEST ENGINEERING DISCLOSURE) */}
          <section className="mb-14">
            <SectionHeader
              eyebrow="Honest Scope Disclosure"
              title="Batasan Sistem & Rencana Pengembangan Lanjutan"
              description="Sebagai komitmen integritas profesional, berikut batasan fitur saat ini serta arah pengembangan arsitektur di masa depan."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Limitations */}
              <Card className="p-6 sm:p-8 border-slate-200/90 bg-amber-50/20 border-amber-200/60">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-800 mb-3">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Batasan Sistem Saat Ini</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-3">
                  Cakupan yang Belum Diimplementasikan
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {project.currentLimitations?.map((limitation, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Roadmap */}
              <Card className="p-6 sm:p-8 border-slate-200/90 bg-teal-50/20 border-teal-200/60">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-teal-800 mb-3">
                  <Compass className="w-4 h-4 text-teal-600" />
                  <span>Rencana Pengembangan Mendatang</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-3">
                  Fokus Peningkatan Arsitektur
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {project.plannedRoadmap?.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </section>

          {/* 8. STANDARDS REFERENCE & ALIGNMENT */}
          <section className="mb-14">
            <SectionHeader
              eyebrow="Standards & Regulations"
              title="Keselarasan dengan Standar & Regulasi Kesehatan"
              description="Prinsip panduan keselamatan pasien dan standarisasi tata kelola data yang dijadikan referensi perancangan sistem."
            />
            <div className="space-y-4">
              {project.standardsAlignment.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/90 p-5 sm:p-6 shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      {item.standard}
                    </h4>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200/60">
                      Reference Alignment
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium mb-1">
                    Prinsip yang Diterapkan: {item.conceptApplied}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600">
                    <strong className="text-slate-900">Realisasi dalam Kode: </strong>
                    {item.implementationDetail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 9. SCREENSHOTS & INTERACTIVE LIGHTBOX */}
          <section className="mb-16">
            <SectionHeader
              eyebrow="Visual Demonstration"
              title="Tangkapan Layar & Demonstrasi Antarmuka"
              description="Visualisasi antarmuka kerja pengguna dengan sanitasi data pasien sintetis murni. Klik pada gambar untuk memperbesar detail form."
            />
            <MediaLightbox screenshots={project.screenshots} />
          </section>

          {/* 10. PROMINENT INDEPENDENT PROJECT DISCLOSURE */}
          <section className="mb-14">
            <DisclaimerBox />
          </section>

          {/* 11. PROFESSIONAL DIALOGUE CTA BAR (NO 404 LINK) */}
          <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
            <div className="space-y-1.5 text-center sm:text-left max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-900/60 border border-teal-700/80 text-teal-300 text-xs font-mono mb-1">
                <Lock className="w-3 h-3 text-teal-400" />
                <span>Private Inisiatif Mandiri</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold">
                Tertarik Mendiskusikan Arsitektur atau Solusi Ini?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Source code proyek disimpan dalam repositori privat untuk proteksi karya mandiri. Saya siap mendemonstrasikan detail alur kerja, logika validasi, atau modul pengujian dalam sesi wawancara teknis.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon={<Mail className="w-4 h-4" />}
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Hubungi Pengembang
              </Button>
              <Button
                to="/resume"
                variant="secondary"
                size="md"
                icon={<FileText className="w-4 h-4" />}
              >
                Lihat Resume & CV
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
