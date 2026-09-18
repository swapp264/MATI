import React, { useState } from 'react';
import { galleryItems } from '../data/gallery';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'interior' | 'plates' | 'roastery'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filters: { id: 'all' | 'interior' | 'plates' | 'roastery'; label: string }[] = [
    { id: 'all', label: 'All Views' },
    { id: 'interior', label: 'Architecture' },
    { id: 'plates', label: 'Culinary' },
    { id: 'roastery', label: 'Coffee Bar' },
  ];

  const displayedItems = galleryItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <section
      className="w-full py-20 lg:py-28 px-5 md:px-8 lg:px-16 bg-[#f9f2ee] text-[#1d1b19]"
      id="gallery"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#9f3c16] font-bold">
              Spatial Atmosphere
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-[#1d1b19]">
              The MAATI Experience
            </h2>
          </div>

          {/* Gallery Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {filters.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors whitespace-nowrap active:scale-95 ${
                    isActive
                      ? 'bg-[#1d1b19] text-[#fff8f4] shadow-sm'
                      : 'bg-[#fff8f4] text-[#57423b] hover:bg-[#ede7e3] border border-[#dec0b7]/30'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`gallery-item relative group overflow-hidden rounded shadow-sm cursor-pointer border border-[#dec0b7]/20 ${
                activeFilter === 'all' && item.aspectClass ? item.aspectClass : 'h-80 md:h-96'
              }`}
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt={item.altText}
                src={item.imageUrl}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d1b19]/85 via-[#1d1b19]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-[#fff8f4]">
                <span className="text-xs uppercase tracking-wider text-[#ffe088] font-semibold">
                  {item.title}
                </span>
                <p className="font-headline text-base sm:text-lg font-medium text-white">
                  {item.subtitle}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[11px] text-[#dec0b7] uppercase tracking-wider">
                  <span>Click to expand</span>
                  <span className="material-symbols-outlined text-xs">zoom_in</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-[#1d1b19]/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#fff8f4] rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-[#1d1b19]">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.altText}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1d1b19]/80 text-white flex items-center justify-center hover:bg-[#9f3c16] transition-colors"
                aria-label="Close image modal"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
            <div className="p-6 bg-[#fff8f4]">
              <span className="text-xs uppercase tracking-widest text-[#9f3c16] font-bold">
                {selectedItem.title}
              </span>
              <p className="font-headline text-xl text-[#1d1b19] font-semibold mt-1">
                {selectedItem.subtitle}
              </p>
              <p className="text-xs text-[#57423b] mt-2">{selectedItem.altText}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
