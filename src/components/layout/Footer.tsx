import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ExternalLink, ShieldCheck, Download, Lock } from 'lucide-react';
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
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-teal-400 font-mono font-bold text-xs">
                RVF
              </div>
              <span className="text-base font-bold text-slate-900 tracking-tight">
                Robby Viory Fansya
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
              Praktisi operasional rumah sakit dan technical support yang menerjemahkan alur kerja klinis dan logistik darurat menjadi arsitektur perangkat lunak yang aman, terstruktur, dan teruji secara mandiri.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 pt-1">
              <span>Healthcare Operations</span>
              <span>•</span>
              <span>Technical Support</span>
              <span>•</span>
              <span>Independent Software Projects</span>
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
                <a
                  href={SOCIAL_LINKS.cvPdf}
                  download="CV_Robby_Viory_Fansya.pdf"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-900 transition-colors pt-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh CV Resmi (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Repositories & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider font-mono">
              Studi Kasus & Saluran Kontak
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/projects/nurseflow"
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-teal-700 font-medium transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                  <span>NurseFlow HIS (Studi Kasus Teknis)</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/igd-operations"
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-teal-700 font-medium transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                  <span>IGD Operations Platform (Studi Kasus)</span>
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-100 flex items-center gap-3">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-700 hover:text-teal-700 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-500" />
                  <span>GitHub Profile</span>
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-700 hover:text-teal-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-teal-600" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-700 hover:text-teal-700 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>{SOCIAL_LINKS.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Independent Disclosure */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-[11px] leading-relaxed max-w-2xl text-center md:text-left">
            {DISCLOSURE_TEXT}
          </p>
          <div className="text-center md:text-right shrink-0 font-mono text-[11px]">
            © {new Date().getFullYear()} Robby Viory Fansya. Hak Cipta Dilindungi.
          </div>
        </div>
      </Container>
    </footer>
  );
};
