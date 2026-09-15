import React from 'react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { MetaTags } from '../components/seo/MetaTags';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Halaman Tidak Ditemukan (404) | Robby Viory Fansya"
        description="Halaman yang Anda tuju tidak ditemukan."
      />

      <div className="py-20 md:py-32 flex items-center justify-center min-h-[calc(100vh-160px)]">
        <Container size="sm">
          <div className="text-center space-y-5 bg-white p-8 sm:p-12 rounded-2xl border border-slate-200/90 shadow-sm">
            <span className="font-mono text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-200/70">
              Error 404
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Halaman Tidak Ditemukan
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              Tautan yang Anda tuju mungkin telah berpindah, diubah jalurnya, atau belum tersedia. Silakan kembali ke beranda untuk menjelajahi studi kasus proyek.
            </p>
            <div className="pt-2 flex items-center justify-center gap-3">
              <Button
                to="/"
                variant="primary"
                size="md"
                icon={<Home className="w-4 h-4" />}
              >
                Kembali ke Beranda
              </Button>
              <Button
                to="/projects"
                variant="secondary"
                size="md"
                icon={<ArrowLeft className="w-4 h-4" />}
              >
                Lihat Proyek
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
