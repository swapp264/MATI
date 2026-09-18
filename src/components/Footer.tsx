import React from 'react';
import { restaurantConfig } from '../data/restaurant';

export const Footer: React.FC = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#1d1b19] text-[#f6efec] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-5">
            <div className="flex items-center gap-3">
              <img
                alt="MAATI Brand Emblem"
                className="h-8 w-auto object-contain brightness-0 invert"
                src={restaurantConfig.logoUrl}
              />
              <span className="font-headline text-2xl uppercase tracking-widest text-[#f6efec] font-bold">
                MAATI
              </span>
            </div>

            <p className="text-sm text-[#dec0b7] max-w-sm leading-relaxed font-light">
              Slow-crafted Indian heritage meets artisanal third-wave coffee culture. Rooted in
              terroir, quiet luxury, and mindful hospitality.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#9f3c16] transition-colors text-white"
                href={restaurantConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              </a>
              <a
                aria-label="Reservations Call"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#9f3c16] transition-colors text-white"
                href={`tel:${restaurantConfig.phone}`}
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
              </a>
              <a
                aria-label="Email Concierge"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#9f3c16] transition-colors text-white"
                href={`mailto:${restaurantConfig.email}`}
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </a>
            </div>
          </div>

          {/* Hours of Service (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-[#ffe088] font-bold">
              Hours of Service
            </span>
            <div className="space-y-3 text-xs text-[#dec0b7]">
              <div>
                <p className="text-[#f6efec] font-semibold">The Coffee Bar</p>
                <p>Monday – Sunday: {restaurantConfig.operatingHours.coffeeBar}</p>
              </div>
              <div>
                <p className="text-[#f6efec] font-semibold">Kitchen &amp; Dining</p>
                <p>Lunch: {restaurantConfig.operatingHours.kitchenLunch}</p>
                <p>Dinner: {restaurantConfig.operatingHours.kitchenDinner}</p>
              </div>
            </div>
          </div>

          {/* Sanctuary & Origin (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-[#ffe088] font-bold">
              Sanctuary &amp; Origin
            </span>
            <address className="not-italic text-xs text-[#dec0b7] space-y-1">
              <p className="text-[#f6efec] font-semibold">MAATI Vashi</p>
              <p>{restaurantConfig.address.street}</p>
              <p>{restaurantConfig.address.locality}</p>
              <p>Vashi, Navi Mumbai, Maharashtra 400703</p>
              <p className="pt-2 text-[#f6efec] font-medium">{restaurantConfig.email}</p>
              <p className="text-[#ffe088]">{restaurantConfig.displayPhone}</p>
            </address>
          </div>

          {/* Navigation (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-[#ffe088] font-bold">
              Navigation
            </span>
            <nav className="flex flex-col space-y-2 text-xs text-[#dec0b7]">
              <a
                href="#"
                onClick={(e) => scrollTo(e, '#')}
                className="hover:text-[#ffe088] transition-colors"
              >
                Home
              </a>
              <a
                href="#digital-menu"
                onClick={(e) => scrollTo(e, '#digital-menu')}
                className="hover:text-[#ffe088] transition-colors"
              >
                Tasting &amp; Menu
              </a>
              <a
                href="#story"
                onClick={(e) => scrollTo(e, '#story')}
                className="hover:text-[#ffe088] transition-colors"
              >
                Terroir &amp; Story
              </a>
              <a
                href="#experience"
                onClick={(e) => scrollTo(e, '#experience')}
                className="hover:text-[#ffe088] transition-colors"
              >
                The Experience
              </a>
              <a
                href="#gallery"
                onClick={(e) => scrollTo(e, '#gallery')}
                className="hover:text-[#ffe088] transition-colors"
              >
                Atmosphere
              </a>
              <a
                href="#location"
                onClick={(e) => scrollTo(e, '#location')}
                className="hover:text-[#ffe088] transition-colors"
              >
                Find Us
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#dec0b7]">
          <p>© {new Date().getFullYear()} MAATI Indian Kitchen &amp; Coffee. All rights reserved.</p>
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffe088]"></span>
            <span className="text-[11px] text-[#dec0b7]">
              Experience preview curated with TRINETRA AI
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
