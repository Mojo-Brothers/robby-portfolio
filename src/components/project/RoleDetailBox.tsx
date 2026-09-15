import React from 'react';
import { ProjectRole } from '../../types/project.types';
import { UserCheck, Check } from 'lucide-react';

interface RoleDetailBoxProps {
  role: ProjectRole;
  timeframe: string;
  className?: string;
}

export const RoleDetailBox: React.FC<RoleDetailBoxProps> = ({
  role,
  timeframe,
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-xl border border-slate-200 p-6 shadow-sm ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-teal-50 text-teal-700">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wider block">
              Peran & Lingkup Tanggung Jawab
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {role.title}
            </h3>
          </div>
        </div>
        <div className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 text-slate-600 self-start sm:self-auto">
          Periode Pengembangan: {timeframe}
        </div>
      </div>

      <div className="pt-4">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono mb-3">
          Tanggung Jawab End-to-End yang Dikerjakan:
        </h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-600">
          {role.responsibilities.map((resp, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
