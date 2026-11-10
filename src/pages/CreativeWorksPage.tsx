import React, { useState } from 'react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Card } from '../components/common/Card';
import { SectionHeader } from '../components/common/SectionHeader';
import { MetaTags } from '../components/seo/MetaTags';
import { CREATIVE_WORKS_DATA } from '../data/creative.data';
import { CreativeCategory } from '../types/creative.types';
import {
  Video,
  TrendingUp,
  Palette,
  FileCheck2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Layers,
  Clapperboard,
} from 'lucide-react';

export const CreativeWorksPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CreativeCategory | 'all'>('all');

  const categories: { id: CreativeCategory | 'all'; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'Semua Bidang Kreatif', icon: <Layers className="w-4 h-4" /> },
    { id: 'video-production', label: 'Video Sinematik & Editing', icon: <Video className="w-4 h-4" /> },
    { id: 'digital-marketing', label: 'Digital Marketing & Growth', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'content-creation', label: 'Edukasi Alur Medis & Infografis', icon: <FileCheck2 className="w-4 h-4" /> },
    { id: 'branding-visual', label: 'Brand Identity & Collateral', icon: <Palette className="w-4 h-4" /> },
  ];

  const filteredWorks =
    selectedCategory === 'all'
      ? CREATIVE_WORKS_DATA
      : CREATIVE_WORKS_DATA.filter((w) => w.category === selectedCategory);

  return (
    <>
      <MetaTags
        title="Karya Digital & Kreatif | Robby Viory Fansya — Video, Marketing & Storytelling"
        description="Showcase keahlian digital marketing, produksi video sinematik, pembuatan konten edukasi alur medis, dan komunikasi visual oleh Robby Viory Fansya."
      />

      <div className="py-12 md:py-20 bg-slate-50/60 min-h-[calc(100vh-140px)]">
        <Container size="wide">
          {/* Header */}
          <SectionHeader
            eyebrow="Digital & Creative Works"
            title="Seni Storytelling Sinematik, Pemasaran Digital, & Komunikasi Visual"
            description="Di samping rekayasa perangkat lunak dan operasional rumah sakit, saya memiliki kemampuan teruji dalam memproduksi video sinematik, merumuskan strategi pemasaran digital berbasis data, serta merancang komunikasi visual yang komunikatif dan berdampak nyata."
          />

          {/* Quick Capability Banner */}
          <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-teal-50 text-teal-700">
                <Clapperboard className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Cinematic Video</h4>
                <p className="text-xs text-slate-600 mt-0.5">Directing, storytelling visual, editing presisi & natural color grading.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-teal-50 text-teal-700">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Digital Marketing</h4>
                <p className="text-xs text-slate-600 mt-0.5">Strategi pertumbuhan organik, editorial pillars, dan analisis metrik engagement.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-teal-50 text-teal-700">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Medical Content</h4>
                <p className="text-xs text-slate-600 mt-0.5">Menyederhanakan alur birokrasi & medis rumit menjadi infografis yang mudah dicerna.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-teal-50 text-teal-700">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Brand Identity</h4>
                <p className="text-xs text-slate-600 mt-0.5">Standarisasi visual, konsistensi tipografi, dan perancangan corporate collateral.</p>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-200/70">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all focus-ring ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-teal-300 shadow-xs font-semibold'
                    : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Creative Works Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {filteredWorks.map((work) => (
              <Card
                key={work.id}
                className="p-6 sm:p-8 border-slate-200/90 hover:border-teal-500/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Badge variant="teal" size="sm">
                      {work.categoryLabel}
                    </Badge>
                    <span className="text-xs font-mono text-slate-500">{work.year}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                      {work.title}
                    </h3>
                    <p className="text-xs font-mono text-teal-800 mt-1">
                      Konteks: {work.clientOrContext}
                    </p>
                  </div>

                  {/* Role */}
                  <div className="text-xs text-slate-700 bg-slate-50 border border-slate-100 p-2.5 rounded-lg flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>
                      <strong className="text-slate-900 font-semibold">Tanggung Jawab: </strong>
                      {work.role}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {work.summary}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                      Sorotan Eksekusi Teknis & Artistik:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {work.keyHighlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  {work.impactOrOutcome && (
                    <div className="p-3 rounded-lg bg-teal-50/50 border border-teal-200/60 text-xs text-teal-950 font-mono">
                      <strong className="font-semibold text-teal-900">Dampak Nyata: </strong>
                      <span>{work.impactOrOutcome}</span>
                    </div>
                  )}

                  {/* Stack & Deliverables */}
                  <div className="pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-1.5">
                      Tools & Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {work.toolsAndStack.map((tool) => (
                        <Badge key={tool} variant="tech" size="sm">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-500">
                  <span>Output: {work.deliverables.join(' • ')}</span>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl text-center sm:text-left">
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-mono bg-teal-900/80 text-teal-300 border border-teal-700/80">
                Kolaborasi Media & Branding
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Mencari Perpaduan Keahlian Teknis dan Kreatif?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Saya siap membantu institusi atau proyek Anda memproduksi video sinematik, mengelola kampanye digital, atau merancang sistem informasi dengan estetika dan aksesibilitas berkelas.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Diskusikan Kebutuhan Media
              </Button>
              <Button
                to="/resume"
                variant="outline"
                size="md"
                className="border-slate-600 text-teal-300 hover:bg-slate-800"
              >
                Lihat Kualifikasi Lengkap
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
