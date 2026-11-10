import React from 'react';
import { WhatsApp } from './Icons';
import { SOCIAL_LINKS } from '../../data/navigation.data';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="Kontak Cepat WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center group print:hidden"
    >
      <a
        href={SOCIAL_LINKS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Kirim Pesan WhatsApp ke Robby Viory Fansya (+62 895-3721-15913)"
        className="flex items-center gap-2.5 px-3.5 py-3 rounded-full bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 hover:shadow-xl hover:scale-105 active:scale-95 transition-all focus-ring group"
      >
        <WhatsApp className="w-5 h-5 text-white shrink-0" />
        <span className="hidden sm:inline-block text-xs font-bold font-mono tracking-tight pr-1">
          Chat WhatsApp
        </span>
      </a>
    </aside>
  );
};
