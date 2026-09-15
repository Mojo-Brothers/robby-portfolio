import React from 'react';
import { WorkflowItem } from '../../types/project.types';
import { Badge } from '../common/Badge';
import { CheckCircle2, ShieldAlert } from 'lucide-react';

interface WorkflowTimelineProps {
  workflows: WorkflowItem[];
  className?: string;
}

export const WorkflowTimeline: React.FC<WorkflowTimelineProps> = ({
  workflows,
  className = '',
}) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {workflows.map((item, index) => (
        <div
          key={item.order}
          className="relative pl-8 sm:pl-10 pb-6 last:pb-0 border-l-2 border-teal-600/30 last:border-transparent group"
        >
          {/* Timeline node */}
          <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-900 text-teal-400 font-mono text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm">
            0{item.order}
          </div>

          <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-sm transition-all hover:border-slate-300">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                {item.title}
              </h4>
              <Badge variant="teal" size="sm">
                Aktor: {item.actor}
              </Badge>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {item.summary}
            </p>

            {item.verificationRule && (
              <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-700 bg-slate-50/70 p-2.5 rounded-lg">
                <ShieldAlert className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span className="font-mono text-[11px] leading-normal">
                  <span className="font-semibold text-slate-900">Aturan Validasi: </span>
                  {item.verificationRule}
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
