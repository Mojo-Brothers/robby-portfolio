import React from 'react';
import { ProjectData } from '../../types/project.types';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { Github } from '../common/Icons';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectData;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className = '',
}) => {
  // Extract 4 primary technology tags for clean scannability
  const primaryTags = project.technologies[0]?.tags.slice(0, 4) || [];

  return (
    <Card
      interactive
      className={`p-6 sm:p-8 flex flex-col justify-between border-slate-200/90 hover:border-teal-500/40 ${className}`}
    >
      <div className="space-y-4">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Badge variant="teal" size="md">
            {project.categoryLabel}
          </Badge>
          <span className="text-xs font-mono text-slate-500">
            {project.timeframe}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-teal-700 mt-1 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Role Highlight */}
        <div className="text-xs text-slate-700 bg-slate-50 border border-slate-100 p-2.5 rounded-lg flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
          <span>
            <strong className="text-slate-900 font-semibold">Peran: </strong>
            {project.role.title}
          </span>
        </div>

        {/* Summary (2-3 sentences) */}
        <p className="text-sm text-slate-600 leading-relaxed">
          {project.summary}
        </p>

        {/* Verified Evidence Highlights */}
        <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
          {project.evidence.testSuites && (
            <div className="flex items-center gap-1.5 text-slate-700 font-mono text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>{project.evidence.testSuites} ({project.evidence.testsCount})</span>
            </div>
          )}
          {project.evidence.migrationsNote && (
            <div className="flex items-center gap-1.5 text-slate-700 font-mono text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>{project.evidence.migrationsNote}</span>
            </div>
          )}
          {project.evidence.realtimeSync && (
            <div className="flex items-center gap-1.5 text-slate-700 font-mono text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>{project.evidence.realtimeSync}</span>
            </div>
          )}
          {project.evidence.reportingEngines && (
            <div className="flex items-center gap-1.5 text-slate-700 font-mono text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>{project.evidence.reportingEngines}</span>
            </div>
          )}
        </div>

        {/* Technology Tags (3-4 focused tags) */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {primaryTags.map((tech) => (
            <Badge key={tech} variant="tech" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
        <Button
          to={`/projects/${project.slug}`}
          variant="primary"
          size="sm"
          iconRight={<ArrowRight className="w-4 h-4" />}
        >
          Lihat Studi Kasus
        </Button>

        <Button
          href={project.githubUrl}
          variant="secondary"
          size="sm"
          icon={<Github className="w-4 h-4 text-slate-700" />}
        >
          Repositori GitHub
        </Button>
      </div>
    </Card>
  );
};
