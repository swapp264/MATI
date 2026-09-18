import React from 'react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#32302e] text-[#f6efec]">
      {/* Cinematic Background with Warm Tone Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.08] scale-105 transition-transform duration-1000 ease-out"
          alt="Warm atmospheric terracotta dining room with vaulted archways, ribbed glass arched windows, low brass pendant lights, round brass counter reading MAATI, tables set with earthen clay bowls and cane back wooden chairs in gentle amber light"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPvO_JJVElCo48ofF4OvwPh-YzmKwQE6JhR-QRExHVANPJ1Ywk3KyA4CcfFqzsz2XTmqd0sJiWOBQlNWN-CUBw6NExyke3qf3i7zjZG1UWsclpzQZgkKDkbMEjSndcPJ-D_kpraZwVzuqU8Ss-kOLIB69xUqqdOmw4-05QSxBlXk7ffPd5Heus78tExO9yBdWyVqWTQg1jUXFWRcyfVu9o2KiwF5uogjdSviV9jxdu8bZoozUNkOrZ"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#32302e] via-[#32302e]/40 to-[#32302e]/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#bf542c]/20 via-transparent to-transparent"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full min-h-[920px] flex flex-col justify-between pt-36 pb-12 px-5 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Top Badges / Overline */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#ffe088] animate-pulse"></span>
            <span className="text-[11px] uppercase tracking-widest text-[#ffe088] font-semibold">
              Hand-Poured Roasts • Clay Degchi Cooking
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs uppercase tracking-widest text-[#dec0b7]">
            <span>Table Bookings Live</span>
            <span className="text-[#ffdbcf]">•</span>
            <span>Navi Mumbai Flagship</span>
          </div>
        </div>

        {/* Main Central Visual Staging */}
        <div className="max-w-4xl my-auto py-10">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-[0.28em] text-[#ffdbcf] font-semibold">
              Flagship Sanctuary • Vashi
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-[72px] lg:leading-[80px] text-[#f6efec] tracking-tight mb-6">
            Old soul. <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#ffe088]">New table.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#dec0b7] max-w-2xl leading-relaxed mb-10 font-light">
            Indian flavours, familiar rituals, and a table made for staying a little longer.
            Artisanal single-origin Chikmagalur roasts meet slow-simmered regional heritage in a
            vaulted earthen sanctuary.
          </p>

          {/* CTA Cluster */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#digital-menu"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('digital-menu');
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded bg-[#9f3c16] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#bf542c] transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-95"
            >
              <span>View Digital Menu</span>
              <span className="material-symbols-outlined text-sm">restaurant_menu</span>
            </a>
            <a
              href="#reservations"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('reservations');
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded bg-white/15 backdrop-blur-md text-[#f6efec] text-xs uppercase tracking-widest font-semibold hover:bg-white/25 transition-all duration-200 border border-white/20 active:scale-95"
            >
              <span>Reserve A Table</span>
              <span className="material-symbols-outlined text-sm">event_seat</span>
            </a>
            <div className="hidden lg:flex items-center gap-2.5 pl-4 text-[#dec0b7]">
              <span className="material-symbols-outlined text-[#ffdbcf] text-lg">verified</span>
              <span className="text-xs uppercase tracking-wider font-medium">
                Michelin-Trained Kitchen • Estate Coffee
              </span>
            </div>
          </div>
        </div>

        {/* Editorial Information Strip */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#dec0b7]">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#ffe088] text-2xl">coffee_maker</span>
            <div>
              <p className="text-[#f6efec] font-semibold uppercase tracking-wider text-[11px]">
                Artisan Roastery &amp; Kitchen
              </p>
              <p className="text-xs text-[#dec0b7]">Monsoon Malabar &amp; Clay-Pot Cooking</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#ffe088] text-2xl">location_on</span>
            <div>
              <p className="text-[#f6efec] font-semibold uppercase tracking-wider text-[11px]">
                Palm Beach Road, Sector 19A
              </p>
              <p className="text-xs text-[#dec0b7]">Vashi, Navi Mumbai • Valet Available</p>
            </div>
          </div>
          <div className="flex items-center justify-between md:justify-end gap-4">
            <div className="text-left md:text-right">
              <p className="text-[#f6efec] font-semibold uppercase tracking-wider text-[11px]">
                Daily Hours
              </p>
              <p className="text-xs text-[#ffe088] font-medium">08:00 AM – 11:30 PM</p>
            </div>
            <a
              aria-label="Scroll to our story"
              href="#story"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('story');
              }}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#f6efec] hover:bg-[#9f3c16] transition-colors"
            >
              <span className="material-symbols-outlined animate-bounce text-lg">arrow_downward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
