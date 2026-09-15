import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';
import { DISCLOSURE_TEXT } from '../../data/projects.data';

interface DisclaimerBoxProps {
  customText?: string;
  className?: string;
}

export const DisclaimerBox: React.FC<DisclaimerBoxProps> = ({
  customText,
  className = '',
}) => {
  return (
    <div
      className={`rounded-xl border border-slate-200/90 bg-slate-50/80 p-5 sm:p-6 text-slate-600 ${className}`}
    >
      <div className="flex items-start gap-3.5">
        <div className="p-2 rounded-lg bg-teal-100/70 text-teal-800 shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
          <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
            <span>Transparansi Proyek & Keterbukaan Independen</span>
            <span className="text-[11px] font-mono font-normal text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/60">
              Verified Independent Scope
            </span>
          </h4>
          <p className="text-slate-600">
            {customText || DISCLOSURE_TEXT}
          </p>
          <div className="pt-2 flex items-center gap-2 text-slate-500 font-mono text-[11px]">
            <Info className="w-3.5 h-3.5 text-teal-600" />
            <span>Kepatuhan Etika: Seluruh data medis yang dipublikasikan adalah data sintetis tanpa identitas pasien asli.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
