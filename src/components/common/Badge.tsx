import React from 'react';

export type BadgeVariant = 'neutral' | 'teal' | 'amber' | 'rose' | 'tech';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = '',
  size = 'md',
}) => {
  const variantClasses: Record<BadgeVariant, string> = {
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
    teal: 'bg-teal-50 text-teal-800 border border-teal-200/80 font-medium',
    amber: 'bg-amber-50 text-amber-800 border border-amber-200 font-medium',
    rose: 'bg-rose-50 text-rose-800 border border-rose-200 font-medium',
    tech: 'bg-slate-100 text-slate-800 border border-slate-200/90 font-mono font-medium',
  };

  const sizeClasses = {
    sm: 'text-[11px] px-2 py-0.5 rounded',
    md: 'text-xs px-2.5 py-1 rounded-md',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 leading-none tracking-tight transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
