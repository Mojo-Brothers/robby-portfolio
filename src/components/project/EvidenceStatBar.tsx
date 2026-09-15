import React from 'react';
import { ProjectEvidence } from '../../types/project.types';
import { ShieldCheck, CheckCircle2, Database, Smartphone, Layers, FileSpreadsheet } from 'lucide-react';

interface EvidenceStatBarProps {
  evidence: ProjectEvidence;
  className?: string;
}

export const EvidenceStatBar: React.FC<EvidenceStatBarProps> = ({
  evidence,
  className = '',
}) => {
  const items: { label: string; value: string; icon: React.ReactNode }[] = [];

  if (evidence.testSuites) {
    items.push({
      label: 'Automated Test Suites',
      value: evidence.testSuites,
      icon: <ShieldCheck className="w-4 h-4 text-teal-600" />,
    });
  }

  if (evidence.testsCount) {
    items.push({
      label: 'Verified Tests',
      value: evidence.testsCount,
      icon: <CheckCircle2 className="w-4 h-4 text-teal-600" />,
    });
  }

  if (evidence.migrationsNote) {
    items.push({
      label: 'Data Layer',
      value: evidence.migrationsNote,
      icon: <Database className="w-4 h-4 text-teal-600" />,
    });
  }

  if (evidence.architectureTier) {
    items.push({
      label: 'System Structure',
      value: evidence.architectureTier,
      icon: <Layers className="w-4 h-4 text-teal-600" />,
    });
  }

  if (evidence.realtimeSync) {
    items.push({
      label: 'Data Synchronization',
      value: evidence.realtimeSync,
      icon: <CheckCircle2 className="w-4 h-4 text-teal-600" />,
    });
  }

  if (evidence.mobileCapability) {
    items.push({
      label: 'Mobile Packaging',
      value: evidence.mobileCapability,
      icon: <Smartphone className="w-4 h-4 text-teal-600" />,
    });
  }

  if (evidence.reportingEngines) {
    items.push({
      label: 'Reporting Engines',
      value: evidence.reportingEngines,
      icon: <FileSpreadsheet className="w-4 h-4 text-teal-600" />,
    });
  }

  if (evidence.accessControl) {
    items.push({
      label: 'Field Authentication',
      value: evidence.accessControl,
      icon: <ShieldCheck className="w-4 h-4 text-teal-600" />,
    });
  }

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-slate-50 border border-slate-200/90 rounded-xl p-4 ${className}`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-2.5 bg-white p-3 rounded-lg border border-slate-100 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
        >
          <div className="p-1 rounded bg-teal-50 shrink-0 mt-0.5">{item.icon}</div>
          <div>
            <span className="block text-[11px] font-medium uppercase tracking-wider text-slate-500 font-mono">
              {item.label}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
              {item.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
