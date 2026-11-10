import React from 'react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Card } from '../components/common/Card';
import { SectionHeader } from '../components/common/SectionHeader';
import { MetaTags } from '../components/seo/MetaTags';
import { RESUME_DATA } from '../data/resume.data';
import { SOCIAL_LINKS } from '../data/navigation.data';
import { Github, Linkedin } from '../components/common/Icons';
import {
  Download,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  ExternalLink,
  Printer,
  FileText,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export const ResumePage: React.FC = () => {
  const { personalInfo, summary, experiences, education, coreCompetencies } = RESUME_DATA;

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <MetaTags
        title="Resume & CV | Robby Viory Fansya — Healthcare Operations & Digital Systems"
        description="Curriculum Vitae profesional Robby Viory Fansya. Menampilkan pengalaman operasional rumah sakit, technical support, proyek rekayasa software mandiri, dan unduh berkas CV resmi."
      />

      <div className="py-10 md:py-16 bg-slate-50/60 min-h-[calc(100vh-140px)]">
        <Container size="default">
          {/* Header Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200/80">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200/70 px-2.5 py-1 rounded-md">
                Dokumen Resmi Profesional
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2">
                Curriculum Vitae (CV) & Kualifikasi
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Tersedia untuk ditinjau secara langsung atau diunduh dalam format PDF.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button
                href={personalInfo.cvPdfPath}
                download="CV_Robby_Viory_Fansya.pdf"
                variant="primary"
                size="md"
                icon={<Download className="w-4 h-4" />}
              >
                Unduh CV (PDF)
              </Button>

              <Button
                onClick={handlePrint}
                variant="secondary"
                size="md"
                className="hidden sm:inline-flex"
                icon={<Printer className="w-4 h-4" />}
              >
                Cetak Halaman
              </Button>
            </div>
          </div>

          {/* MAIN CV SHEET (PAPER-LIKE CLEAN DESIGN) */}
          <article className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-12 space-y-10">
            {/* 1. Header Information */}
            <div className="border-b border-slate-200/80 pb-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {personalInfo.fullName}
                  </h2>
                  <p className="text-sm sm:text-base font-semibold text-teal-700 font-mono mt-1.5">
                    {personalInfo.headline}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mt-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{personalInfo.phoneLocation}</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-mono shrink-0">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-2 text-slate-700 hover:text-teal-700 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-teal-600" />
                    <span>{personalInfo.email}</span>
                  </a>
                  <a
                    href={personalInfo.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-700 hover:text-teal-700 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-teal-600" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-700 hover:text-teal-700 transition-colors"
                  >
                    <Github className="w-4 h-4 text-slate-600" />
                    <span>GitHub Organization</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Ringkasan Profil Profesional
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {summary}
                </p>
              </div>
            </div>

            {/* 2. Core Competencies Grid */}
            <div className="border-b border-slate-200/80 pb-8">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-teal-600" />
                <span>Matriks Kompetensi Utama</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreCompetencies.map((comp) => (
                  <div
                    key={comp.category}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80"
                  >
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide font-mono pb-2 border-b border-slate-200/60">
                      {comp.category}
                    </h4>
                    <ul className="mt-2.5 space-y-1.5 text-xs text-slate-700">
                      {comp.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Professional Experience */}
            <div className="border-b border-slate-200/80 pb-8">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-900 mb-6 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-teal-600" />
                <span>Pengalaman Kerja & Proyek Berdampak</span>
              </h3>

              <div className="space-y-8">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-slate-200">
                    <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-teal-600 border-2 border-white" />

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h4 className="text-base font-bold text-slate-900">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono font-semibold text-slate-500">
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-teal-700 font-medium mt-0.5">
                      {exp.organization} • {exp.type} ({exp.location})
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mt-3 space-y-1.5">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 block">
                        Pencapaian & Kontribusi Utama:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {exp.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-3 pt-2">
                      {exp.skillsUsed.map((sk) => (
                        <Badge key={sk} variant="tech" size="sm">
                          {sk}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Education & Continuous Learning */}
            <div>
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-teal-600" />
                <span>Pendidikan & Studi Mandiri Berkelanjutan</span>
              </h3>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h4 className="text-sm font-bold text-slate-900">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono text-slate-500">{edu.period}</span>
                    </div>
                    <div className="text-xs font-mono text-teal-700 mt-0.5">
                      {edu.institution} — {edu.field}
                    </div>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {edu.notes}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Quick PDF Viewer Card */}
          <div className="mt-8 p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-teal-50 text-teal-700">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Berkas Curriculum Vitae Format PDF
                </h4>
                <p className="text-xs text-slate-500">
                  CV_Robby_Viory_Fansya.pdf • Siap ditinjau oleh HRD dan User Recruiter
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                href={personalInfo.cvPdfPath}
                download="CV_Robby_Viory_Fansya.pdf"
                variant="primary"
                size="sm"
                icon={<Download className="w-4 h-4" />}
              >
                Unduh PDF
              </Button>
              <Button
                to="/contact"
                variant="secondary"
                size="sm"
                icon={<Mail className="w-4 h-4" />}
              >
                Jadwalkan Wawancara
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
