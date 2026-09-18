import React from 'react';

export const FinalCTA: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-20 lg:py-28 px-5 md:px-8 lg:px-16 bg-[#32302e] text-[#f6efec] relative overflow-hidden text-center border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#bf542c]/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[#ffe088] font-bold mb-4">
          Reserve Your Experience
        </span>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#f6efec] tracking-tight mb-6">
          Come hungry.<br />
          <span className="italic font-normal text-[#ffe088]">Leave with a story.</span>
        </h2>
        <p className="text-base sm:text-lg text-[#dec0b7] max-w-xl leading-relaxed mb-10 font-light">
          Warm hospitality, slow earthen embers, and single-origin brews waiting at your table in
          Vashi, Navi Mumbai.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('reservations')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded bg-[#9f3c16] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#bf542c] transition-all duration-200 shadow-xl active:scale-95"
          >
            <span>Book A Table</span>
            <span className="material-symbols-outlined text-sm">event_seat</span>
          </button>
          <button
            onClick={() => scrollTo('digital-menu')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded bg-white/10 backdrop-blur-md text-[#f6efec] text-xs uppercase tracking-widest font-semibold hover:bg-white/20 transition-all duration-200 border border-white/20 active:scale-95"
          >
            <span>View Menu</span>
            <span className="material-symbols-outlined text-sm">restaurant_menu</span>
          </button>
        </div>
      </div>
    </section>
  );
};
