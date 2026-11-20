import { useEffect, useState } from 'react';
import { Expand, X, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS, type GalleryItem, getWhatsAppUrl } from '../data/business';
import { ResilientImage } from './ResilientImage';

type GalleryFilter = 'all' | 'cctv' | 'gates' | 'barriers';

export function GallerySection() {
  const [filter, setFilter] = useState<GalleryFilter>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const visibleItems = GALLERY_ITEMS.filter((item) =>
    filter === 'all' ? true : item.category === filter
  );

  useEffect(() => {
    if (!selectedItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  return (
    <section id="gallery" className="bg-white text-slate-900 py-20 sm:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-700 tracking-wide mb-3">
              Project Gallery
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-[#071226] tracking-tight leading-tight mb-3"
              style={{ textWrap: 'balance' }}
            >
              CCTV, Gate Automation &amp; Boom Barrier Installations
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Explore our surveillance camera layouts, NVR control setups, motorized sliding gates,
              and commercial vehicle boom barrier solutions.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter project gallery"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 border border-slate-200 rounded-lg self-start lg:self-auto"
          >
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'cctv', label: 'CCTV Cameras' },
              { id: 'gates', label: 'Automatic Gates' },
              { id: 'barriers', label: 'Boom Barriers' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as GalleryFilter)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  filter === tab.id
                    ? 'bg-[#071226] text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedItem(item)}
              className="group text-left bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <ResilientImage
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  containerClassName="w-full h-full"
                  fallbackTitle={item.title}
                />
                <div
                  className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-[#071226]/80 text-white flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                >
                  <Expand className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span className="font-medium text-blue-700">{item.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.locationContext}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#071226] tracking-tight mb-2 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-[#071226]/85 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white text-slate-900 rounded-xl max-w-3xl w-full overflow-hidden border border-slate-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-slate-950">
              <ResilientImage
                src={selectedItem.image}
                alt={selectedItem.alt}
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
                fallbackTitle={selectedItem.title}
              />
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Close preview"
                className="absolute top-3 right-3 w-11 h-11 rounded-lg bg-[#071226]/90 text-white hover:bg-blue-600 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <span className="font-semibold text-blue-700">{selectedItem.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedItem.locationContext}</span>
              </div>

              <h3
                id="gallery-modal-title"
                className="font-display text-2xl font-bold text-[#071226] tracking-tight mb-3"
              >
                {selectedItem.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {selectedItem.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <a
                  href={getWhatsAppUrl(
                    '9025691764',
                    `Hello Krish Technology Solutions, I would like details about a setup like "${selectedItem.title}".`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#15803D] hover:bg-[#166534] rounded-lg transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Enquire on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-lg border border-slate-300 hover:border-slate-400 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
