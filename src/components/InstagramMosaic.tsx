import React from 'react';
import { instagramPosts } from '../data/gallery';

export const InstagramMosaic: React.FC = () => {
  const scrollToReservations = () => {
    const el = document.getElementById('reservations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-16 lg:py-20 px-5 md:px-8 lg:px-16 bg-[#fff8f4] text-[#1d1b19]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#9f3c16] font-bold">
              Moments In Earth &amp; Amber
            </span>
            <h3 className="font-headline text-2xl font-bold text-[#1d1b19]">
              Follow Our Journey • @maatikitchen
            </h3>
          </div>
          <a
            className="inline-flex items-center gap-2 text-[#9f3c16] text-xs uppercase tracking-wider font-semibold hover:text-[#bf542c]"
            href="https://instagram.com/maatikitchen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Join On Instagram</span>
            <span className="material-symbols-outlined text-base">arrow_outward</span>
          </a>
        </div>

        {/* 6 Curated Instagram lifestyle blocks */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square rounded overflow-hidden shadow-sm border border-[#dec0b7]/30"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt={post.alt}
                src={post.imageUrl}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#32302e]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-2xl text-[#ffe088] animate-pulse">
                  favorite
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* TRINETRA AI Agency Showcase Callout Banner */}
        <div className="mt-12 p-6 rounded-xl bg-[#f3ede9] flex flex-col md:flex-row items-center justify-between gap-4 border border-[#dec0b7]/40 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#9f3c16] flex items-center justify-center text-white font-bold text-xs shadow-md">
              TR
            </div>
            <div>
              <p className="font-headline text-sm font-bold text-[#1d1b19]">
                Crafted as a Flagship Showcase for TRINETRA AI
              </p>
              <p className="text-xs text-[#57423b]">
                Editorial Layout • High-Conversion Booking Funnel • Future-Ready Dining Concierge
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fed65b]/50 text-[#745c00] text-xs font-bold border border-[#fed65b]">
              <span className="w-2 h-2 rounded-full bg-[#735c00]"></span>
              <span>Production Demo Ready</span>
            </span>
            <button
              onClick={scrollToReservations}
              className="px-4 py-2 rounded bg-[#1d1b19] text-[#fff8f4] text-xs uppercase tracking-wider font-semibold hover:bg-[#9f3c16] transition-colors shadow-sm active:scale-95"
            >
              Test Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
