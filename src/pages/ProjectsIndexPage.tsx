import React from 'react';
import { Container } from '../components/common/Container';
import { SectionHeader } from '../components/common/SectionHeader';
import { ProjectCard } from '../components/project/ProjectCard';
import { DisclaimerBox } from '../components/project/DisclaimerBox';
import { MetaTags } from '../components/seo/MetaTags';
import { PROJECTS_DATA } from '../data/projects.data';

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

          {/* Prominent Disclosure Notice */}
          <DisclaimerBox className="max-w-4xl mx-auto" />
        </Container>
      </div>
    </>
  );
};
