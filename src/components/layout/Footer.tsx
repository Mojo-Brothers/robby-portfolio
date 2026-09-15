import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ExternalLink, ShieldCheck } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import { Container } from '../common/Container';
import { NAV_LINKS, SOCIAL_LINKS } from '../../data/navigation.data';
import { DISCLOSURE_TEXT } from '../../data/projects.data';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-slate-200/90 bg-white pt-12 pb-8 text-slate-600">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-100">
          {/* Col 1: Bio & Positioning */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-teal-400 font-mono font-bold text-xs">
                RVF
              </div>
              <span className="text-base font-bold text-slate-900 tracking-tight">
                Robby Viory Fansya
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
              Praktisi operasional rumah sakit yang berfokus menerjemahkan kebutuhan alur kerja klinis dan logistik fasilitas kesehatan menjadi arsitektur perangkat lunak yang aman, terstruktur, dan teruji secara mandiri.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 pt-1">
              <span>Healthcare Operations</span>
              <span>•</span>
              <span>Hospital Workflow</span>
              <span>•</span>
              <span>Full-Stack Development</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider font-mono">
              Navigasi Halaman
            </h3>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-600 hover:text-teal-700 transition-colors focus-ring rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/projects/nurseflow"
                  className="text-slate-500 hover:text-teal-700 text-xs transition-colors"
                >
                  ↳ NurseFlow HIS Case Study
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/igd-operations"
                  className="text-slate-500 hover:text-teal-700 text-xs transition-colors"
                >
                  ↳ IGD Operations Case Study
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Repositories & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider font-mono">
              Repositori & Kontak
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={SOCIAL_LINKS.nurseflowRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-700 hover:text-teal-700 font-medium transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-500" />
                  <span>NurseFlow WebApp</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.igdRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-700 hover:text-teal-700 font-medium transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-500" />
                  <span>IGD Manajemen Sistem</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-700 hover:text-teal-700 font-medium transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-slate-500" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="inline-flex items-center gap-1.5 text-slate-700 hover:text-teal-700 font-medium transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>{SOCIAL_LINKS.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Independent Project Notice */}
        <div className="py-6 border-b border-slate-100 flex items-start gap-3 text-xs text-slate-500 leading-relaxed bg-slate-50/80 p-4 rounded-lg my-6">
          <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-700 mr-1">Transparansi Proyek Independen:</span>
            {DISCLOSURE_TEXT}
          </div>
        </div>

        {/* Bottom copyright & tech note */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 pt-2 font-mono">
          <p>© {new Date().getFullYear()} Robby Viory Fansya. All rights reserved.</p>
          <p className="text-slate-400">
            Static-First Architecture • React 19 • TypeScript • Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
};
