import React from 'react';
import { restaurantConfig } from '../data/restaurant';

export const MobileBottomBar: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#fff8f4]/95 backdrop-blur-xl px-4 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] border-t border-[#dec0b7]/30 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
      aria-label="Mobile Quick Actions"
    >
      <div className="flex items-center justify-around gap-2 max-w-md mx-auto">
        {/* Menu Button */}
        <button
          type="button"
          onClick={() => scrollTo('digital-menu')}
          className="flex-1 flex flex-col items-center justify-center py-1.5 rounded bg-[#f3ede9] text-[#57423b] hover:bg-[#ede7e3] hover:text-[#1d1b19] transition-colors active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">restaurant_menu</span>
          <span className="text-[10px] uppercase tracking-wider font-semibold mt-0.5">Menu</span>
        </button>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${restaurantConfig.whatsappNumber}?text=${encodeURIComponent(
            restaurantConfig.whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 rounded bg-[#f3ede9] text-[#526048] hover:bg-[#ede7e3] transition-colors active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">chat</span>
          <span className="text-[10px] uppercase tracking-wider font-semibold mt-0.5">WhatsApp</span>
        </a>

        {/* Book Table Primary Button */}
        <button
          type="button"
          onClick={() => scrollTo('reservations')}
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded bg-[#9f3c16] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#bf542c] transition-colors shadow-sm active:scale-95"
        >
          <span className="material-symbols-outlined text-[18px]">calendar_today</span>
          <span>Book Table</span>
        </button>
      </div>
    </aside>
  );
};
