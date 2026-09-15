import React from 'react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { SectionHeader } from '../components/common/SectionHeader';
import { MetaTags } from '../components/seo/MetaTags';
import { useClipboard } from '../hooks/useClipboard';
import { SOCIAL_LINKS } from '../data/navigation.data';
import { Github, Linkedin } from '../components/common/Icons';
import {
  Mail,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Clock,
  Sparkles,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { hasCopied, copy } = useClipboard();

  const handleCopyEmail = () => {
    copy(SOCIAL_LINKS.email);
  };

  return (
    <>
      <MetaTags
        title="Kontak | Robby Viory Fansya — Healthcare Technology"
        description="Hubungi Robby Viory Fansya untuk peluang karir, diskusi seputar Healthcare IT, SIMRS, atau kolaborasi sistem informasi kesehatan."
      />

      <div className="py-12 md:py-20 bg-slate-50/50 min-h-[calc(100vh-140px)]">
        <Container size="default">
          <SectionHeader
            eyebrow="Saluran Komunikasi"
            title="Mari Terhubung & Mendiskusikan Peluang"
            description="Terbuka untuk diskusi mengenai rekayasa sistem informasi rumah sakit, analisis alur kerja klinis, dan peluang karir di sektor Healthcare Technology."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Email Card */}
            <Card className="p-6 sm:p-8 border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Komunikasi via Email
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Saluran utama untuk undangan wawancara kerja formal, pertanyaan teknis portofolio, atau permohonan resume resmi.
                </p>
                <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200/80 font-mono text-xs sm:text-sm text-slate-900 font-semibold break-all">
                  {SOCIAL_LINKS.email}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center gap-2.5">
                <Button
                  href={`mailto:${SOCIAL_LINKS.email}?subject=Healthcare%20IT%20Inquiry%20-%20Robby%20Viory%20Fansya`}
                  variant="primary"
                  size="sm"
                  icon={<Mail className="w-4 h-4" />}
                >
                  Kirim Email
                </Button>

                <Button
                  onClick={handleCopyEmail}
                  variant="secondary"
                  size="sm"
                  icon={
                    hasCopied ? (
                      <Check className="w-4 h-4 text-teal-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-600" />
                    )
                  }
                >
                  {hasCopied ? 'Tersalin ke Clipboard!' : 'Salin Email'}
                </Button>
              </div>
            </Card>

            {/* LinkedIn Card */}
            <Card className="p-6 sm:p-8 border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  <Linkedin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Profil Profesional LinkedIn
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Terhubung untuk melihat riwayat aktivitas profesional, validasi pengalaman, dan mengirimkan direct message (InMail).
                </p>
                <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200/80 font-mono text-xs text-slate-700 truncate">
                  {SOCIAL_LINKS.linkedin}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <Button
                  href={SOCIAL_LINKS.linkedin}
                  variant="secondary"
                  size="sm"
                  icon={<Linkedin className="w-4 h-4 text-teal-700" />}
                  iconRight={<ExternalLink className="w-3.5 h-3.5 text-slate-400" />}
                >
                  Buka LinkedIn
                </Button>
              </div>
            </Card>
          </div>

          {/* GitHub Card & Ethics Note */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-600 bg-white p-5 rounded-xl border border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Respon Email: 1 x 24 Jam Kerja</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Domisili: Indonesia (WIB)</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Status: Terbuka untuk Tawaran Karir</span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
