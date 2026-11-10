import React from 'react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { SectionHeader } from '../components/common/SectionHeader';
import { MetaTags } from '../components/seo/MetaTags';
import { useClipboard } from '../hooks/useClipboard';
import { SOCIAL_LINKS } from '../data/navigation.data';
import { Github, Linkedin, WhatsApp } from '../components/common/Icons';
import {
  Mail,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Clock,
  Sparkles,
  Download,
  FileText,
  PhoneCall,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const emailClipboard = useClipboard();
  const waClipboard = useClipboard();

  const handleCopyEmail = () => {
    emailClipboard.copy(SOCIAL_LINKS.email);
  };

  const handleCopyWa = () => {
    waClipboard.copy(SOCIAL_LINKS.whatsappRaw);
  };

  return (
    <>
      <MetaTags
        title="Kontak | Robby Viory Fansya — Healthcare Operations & Digital Systems"
        description="Hubungi Robby Viory Fansya via WhatsApp 0895372115913, Email, atau LinkedIn untuk peluang karir, diskusi seputar Healthcare IT, Technical Support, atau SIMRS."
      />

      <div className="py-12 md:py-20 bg-slate-50/50 min-h-[calc(100vh-140px)]">
        <Container size="default">
          <SectionHeader
            eyebrow="Saluran Komunikasi Langsung"
            title="Mari Terhubung & Mendiskusikan Peluang Kolaborasi"
            description="Terbuka untuk diskusi mengenai rekayasa sistem informasi rumah sakit, analisis alur kerja klinis, technical support, dan peluang karir di sektor Healthcare Technology."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* 1. WhatsApp Card (Primary Highlight) */}
            <Card className="p-6 sm:p-8 border-emerald-300/80 bg-emerald-50/30 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-sm">
                  <WhatsApp className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    WhatsApp (Respon Cepat)
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
                    Direkomendasikan
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Saluran komunikasi langsung untuk diskusi peluang karir, penjadwalan wawancara, atau respon cepat terkait portofolio.
                </p>
                <div className="mt-4 p-3 bg-white rounded-lg border border-emerald-200/90 font-mono text-xs sm:text-sm text-emerald-950 font-bold flex items-center justify-between">
                  <span>{SOCIAL_LINKS.whatsappNumber}</span>
                  <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Online (WIB)
                  </span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-emerald-100 flex flex-wrap items-center gap-2.5">
                <Button
                  href={SOCIAL_LINKS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600"
                  icon={<WhatsApp className="w-4 h-4 text-white" />}
                  iconRight={<ExternalLink className="w-3.5 h-3.5 text-white/80" />}
                >
                  Kirim Pesan WhatsApp
                </Button>

                <Button
                  onClick={handleCopyWa}
                  variant="secondary"
                  size="sm"
                  icon={
                    waClipboard.hasCopied ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-600" />
                    )
                  }
                >
                  {waClipboard.hasCopied ? 'Nomor Tersalin!' : 'Salin Nomor'}
                </Button>
              </div>
            </Card>

            {/* 2. Email Card */}
            <Card className="p-6 sm:p-8 border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Komunikasi via Email
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Saluran resmi untuk undangan rekrutmen formal, surat penawaran kerja, atau permohonan dokumen portofolio.
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
                    emailClipboard.hasCopied ? (
                      <Check className="w-4 h-4 text-teal-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-600" />
                    )
                  }
                >
                  {emailClipboard.hasCopied ? 'Email Tersalin!' : 'Salin Email'}
                </Button>
              </div>
            </Card>

            {/* 3. LinkedIn Card */}
            <Card className="p-6 sm:p-8 border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
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
                  Buka Profil LinkedIn
                </Button>
              </div>
            </Card>

            {/* 4. CV Download Card */}
            <Card className="p-6 sm:p-8 border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Unduh Berkas CV Resmi
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Dapatkan resume resmi dalam format PDF standar untuk keperluan review HRD dan proses seleksi kerja.
                </p>
                <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200/80 font-mono text-xs text-teal-800 font-medium">
                  CV_Robby_Viory_Fansya.pdf
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <Button
                  href={SOCIAL_LINKS.cvPdf}
                  download="CV_Robby_Viory_Fansya.pdf"
                  variant="primary"
                  size="sm"
                  icon={<Download className="w-4 h-4" />}
                >
                  Unduh CV (PDF)
                </Button>
              </div>
            </Card>
          </div>

          {/* Ethics & Availability Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-600 bg-white p-5 rounded-xl border border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Respon WhatsApp: Cepat / Siaga</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Domisili: Indonesia (WIB)</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Status: Terbuka untuk Peluang Karir</span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
