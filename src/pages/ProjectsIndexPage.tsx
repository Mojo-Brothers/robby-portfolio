import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { SectionHeader } from '../components/common/SectionHeader';
import { ProjectCard } from '../components/project/ProjectCard';
import { DisclaimerBox } from '../components/project/DisclaimerBox';
import { Button } from '../components/common/Button';
import { MetaTags } from '../components/seo/MetaTags';
import { PROJECTS_DATA } from '../data/projects.data';
import { ArrowRight, Video, FileText } from 'lucide-react';

export const ProjectsIndexPage: React.FC = () => {
  const nurseflow = PROJECTS_DATA.nurseflow;
  const igd = PROJECTS_DATA['igd-operations'];

  return (
    <>
      <MetaTags
        title="Katalog Proyek | Robby Viory Fansya — Healthcare Technology"
        description="Daftar studi kasus proyek independen teknologi kesehatan: NurseFlow Clinical HIS Reference Platform dan Emergency Department Operations Platform."
      />

      <div className="py-12 md:py-20 bg-slate-50/60 min-h-[calc(100vh-140px)]">
        <Container size="wide">
          <SectionHeader
            eyebrow="Portfolio Showcase"
            title="Katalog Proyek Sistem Informasi Kesehatan Mandiri"
            description="Koleksi proyek perangkat lunak yang dirancang dan dibangun secara independen untuk mengeksplorasi arsitektur klinis berstandar tinggi serta menyelesaikan friksi operasional gawat darurat di lapangan."
          />

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <ProjectCard project={nurseflow} />
            <ProjectCard project={igd} />
          </div>

          {/* Cross Link to Creative Works */}
          <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200/60">
                Bidang Keahlian Kreatif
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">
                Jelajahi Karya Pemasaran Digital, Video Sinematik & Branding
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Lihat portofolio produksi video alur klinis, strategi kampanye digital, dan desain infografis pasien.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button
                to="/creative"
                variant="primary"
                size="sm"
                icon={<Video className="w-4 h-4" />}
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Lihat Karya Kreatif
              </Button>
              <Button
                to="/resume"
                variant="secondary"
                size="sm"
                icon={<FileText className="w-4 h-4" />}
              >
                Lihat CV & Kualifikasi
              </Button>
            </div>
          </div>

          {/* Prominent Disclosure Notice */}
          <DisclaimerBox className="max-w-4xl mx-auto" />
        </Container>
      </div>
    </>
  );
};
