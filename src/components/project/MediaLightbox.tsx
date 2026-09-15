import React, { useState, useEffect, useCallback } from 'react';
import { MediaScreenshot } from '../../types/project.types';
import { Badge } from '../common/Badge';
import { X, ZoomIn, Info, Monitor, Smartphone, Tv } from 'lucide-react';

interface MediaLightboxProps {
  screenshots: MediaScreenshot[];
  className?: string;
}

export const MediaLightbox: React.FC<MediaLightboxProps> = ({
  screenshots,
  className = '',
}) => {
  const [activeScreenshot, setActiveScreenshot] = useState<MediaScreenshot | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveScreenshot(null);
      }
    },
    []
  );

  useEffect(() => {
    if (activeScreenshot) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeScreenshot, handleKeyDown]);

  const getDeviceIcon = (type: MediaScreenshot['deviceType']) => {
    switch (type) {
      case 'mobile':
        return <Smartphone className="w-3.5 h-3.5" />;
      case 'tv':
        return <Tv className="w-3.5 h-3.5" />;
      default:
        return <Monitor className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {screenshots.map((shot) => (
          <div
            key={shot.id}
            className="group bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-sm hover:border-slate-300 hover:shadow-md transition-all flex flex-col"
          >
            {/* Image Preview Container */}
            <div
              onClick={() => setActiveScreenshot(shot)}
              className="relative aspect-video bg-slate-100 cursor-pointer overflow-hidden flex items-center justify-center"
            >
              <img
                src={shot.imagePath}
                alt={shot.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                onError={(e) => {
                  // Fallback visual if physical webp screenshot is still being curated
                  (e.target as HTMLElement).style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('.img-fallback');
                  if (fallback) (fallback as HTMLElement).style.display = 'flex';
                }}
              />

              {/* Fallback Graphic Box */}
              <div className="img-fallback hidden absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 flex-col items-center justify-center p-4 text-center text-white">
                <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center mb-2">
                  {getDeviceIcon(shot.deviceType)}
                </div>
                <span className="font-semibold text-xs tracking-wide">{shot.title}</span>
                <span className="text-[10px] text-slate-400 font-mono mt-1">
                  Synthetic Demonstration Frame
                </span>
              </div>

              {/* Zoom overlay badge */}
              <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-slate-900 text-xs font-semibold shadow-md">
                  <ZoomIn className="w-3.5 h-3.5 text-teal-600" />
                  <span>Perbesar Antarmuka</span>
                </span>
              </div>

              {/* Device badge */}
              <div className="absolute top-2.5 left-2.5">
                <Badge variant="neutral" size="sm" className="bg-white/90 backdrop-blur-xs font-mono uppercase">
                  {getDeviceIcon(shot.deviceType)}
                  <span>{shot.deviceType}</span>
                </Badge>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
              <div>
                <h4 className="font-bold text-sm text-slate-900 leading-snug">
                  {shot.title}
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {shot.caption}
                </p>
              </div>

              {/* Highlights */}
              <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-[11px] text-slate-600">
                {shot.highlightPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Synthetic Data Note */}
              <div className="pt-2 text-[10px] text-slate-500 font-mono flex items-center gap-1">
                <Info className="w-3 h-3 text-teal-600 shrink-0" />
                <span>{shot.syntheticDataNote}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeScreenshot && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm p-4 sm:p-6 md:p-10 flex flex-col items-center justify-center animate-in fade-in duration-150"
          onClick={() => setActiveScreenshot(null)}
        >
          {/* Modal Card */}
          <div
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-4 bg-slate-50">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="teal" size="sm" className="font-mono uppercase">
                    {getDeviceIcon(activeScreenshot.deviceType)}
                    <span>{activeScreenshot.deviceType} view</span>
                  </Badge>
                  <span className="text-xs font-mono text-slate-500">
                    {activeScreenshot.syntheticDataNote}
                  </span>
                </div>
                <h3 id="lightbox-title" className="text-base sm:text-lg font-bold text-slate-900">
                  {activeScreenshot.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveScreenshot(null)}
                aria-label="Tutup pratinjau gambar"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/80 transition-colors focus-ring"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="flex-grow bg-slate-900 overflow-auto flex items-center justify-center p-4 sm:p-6 min-h-[360px]">
              <img
                src={activeScreenshot.imagePath}
                alt={activeScreenshot.title}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('.modal-fallback');
                  if (fallback) (fallback as HTMLElement).style.display = 'flex';
                }}
              />
              <div className="modal-fallback hidden flex-col items-center justify-center text-center p-8 text-white">
                <Monitor className="w-12 h-12 text-teal-400 mb-3" />
                <h4 className="text-base font-bold">{activeScreenshot.title}</h4>
                <p className="text-xs text-slate-400 mt-1 max-w-md">
                  {activeScreenshot.caption}
                </p>
                <span className="text-[11px] font-mono text-teal-300 bg-teal-950/60 px-3 py-1 rounded border border-teal-800/80 mt-4">
                  {activeScreenshot.syntheticDataNote}
                </span>
              </div>
            </div>

            {/* Modal Footer Description */}
            <div className="px-6 py-4 bg-white border-t border-slate-200">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900">Deskripsi Alur: </span>
                {activeScreenshot.caption}
              </p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                {activeScreenshot.highlightPoints.map((pt, idx) => (
                  <span key={idx} className="flex items-center gap-1 font-mono text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                    {pt}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
