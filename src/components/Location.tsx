import React from 'react';
import { restaurantConfig } from '../data/restaurant';

export const Location: React.FC = () => {
  return (
    <section
      className="w-full py-20 lg:py-28 px-5 md:px-8 lg:px-16 bg-[#f9f2ee] text-[#1d1b19]"
      id="location"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Location Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-[#9f3c16]"></span>
              <span className="text-xs uppercase tracking-widest text-[#9f3c16] font-bold">
                Directions &amp; Hours
              </span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl text-[#1d1b19]">
              Finding Sanctuary in Vashi
            </h2>

            <p className="text-sm sm:text-base text-[#57423b] leading-relaxed">
              Conveniently located off the Palm Beach Galleria corridor, MAATI provides a calm,
              light-filled haven away from Mumbai traffic.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded bg-[#fff8f4] shadow-sm border border-[#dec0b7]/30">
                <span className="material-symbols-outlined text-[#9f3c16] text-2xl mt-0.5">
                  place
                </span>
                <div>
                  <p className="font-headline text-sm font-bold text-[#1d1b19]">
                    MAATI Flagship House
                  </p>
                  <p className="text-xs text-[#57423b] mt-0.5">
                    {restaurantConfig.address.fullText}
                  </p>
                  <a
                    className="inline-flex items-center gap-1 text-[#9f3c16] text-xs uppercase tracking-wider font-semibold mt-2 hover:underline"
                    href={restaurantConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Get Driving Directions</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded bg-[#fff8f4] shadow-sm border border-[#dec0b7]/30">
                <span className="material-symbols-outlined text-[#9f3c16] text-2xl mt-0.5">
                  schedule
                </span>
                <div>
                  <p className="font-headline text-sm font-bold text-[#1d1b19]">Operating Rhythm</p>
                  <p className="text-xs text-[#57423b]">
                    Coffee Bar: {restaurantConfig.operatingHours.coffeeBar}
                  </p>
                  <p className="text-xs text-[#57423b]">
                    Kitchen: {restaurantConfig.operatingHours.kitchenLunch} |{' '}
                    {restaurantConfig.operatingHours.kitchenDinner}
                  </p>
                  <p className="text-xs text-[#526048] font-semibold mt-1">
                    Open 7 Days a Week • No Holiday Closures
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded bg-[#fff8f4] shadow-sm border border-[#dec0b7]/30">
                <span className="material-symbols-outlined text-[#9f3c16] text-2xl mt-0.5">
                  directions_car
                </span>
                <div>
                  <p className="font-headline text-sm font-bold text-[#1d1b19]">
                    Arrival &amp; Parking
                  </p>
                  <p className="text-xs text-[#57423b]">
                    Complimentary Valet service available directly at the porch drop-off.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stylized Map View (7 cols) */}
          <div className="lg:col-span-7">
            <div
              className="w-full h-80 sm:h-96 lg:h-[480px] rounded-2xl shadow-xl overflow-hidden relative bg-cover bg-center border border-[#dec0b7]/40"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuADo1JVzXaao5x8e4Sswjix7FvepHpxPjhWW8dsaYKbpEbdJdRrOc8saRdZRmZN3HwfzmMiufQH3y6kE5g_ogzB_MJhdl_apjEyXDZG2kgu5BU1q57bYyMsy1lB8BifCcVw_u1dyiBvSUkSxve-JgrbmOxPdhwymXtqYHmeTjkIPvQj2oMhecRYj3X-AiwTena-vzNtnEhWBPOWnuz-mHsUDAG--sdsOqF5ljjvwk8FtbHmvudi88pF')",
              }}
            >
              {/* Map Marker Pin */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#9f3c16] text-white flex items-center justify-center shadow-2xl animate-bounce">
                  <span className="material-symbols-outlined text-xl">restaurant</span>
                </div>
                <span className="mt-1 px-2.5 py-1 rounded bg-[#1d1b19] text-white text-[10px] font-bold uppercase tracking-wider shadow">
                  MAATI Flagship
                </span>
              </div>

              {/* Map Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-5 sm:p-6 rounded-xl bg-[#fff8f4]/95 backdrop-blur-md shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#dec0b7]/40">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#9f3c16] font-bold">
                    Landmark Reference
                  </span>
                  <p className="font-headline text-base sm:text-lg font-bold text-[#1d1b19]">
                    5 Mins from Palm Beach Road Overpass
                  </p>
                  <p className="text-xs text-[#57423b]">
                    Direct access from Mumbai-Pune Expressway &amp; Thane-Belapur Highway
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#9f3c16] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#bf542c] whitespace-nowrap shadow-sm transition-colors active:scale-95"
                    href={`tel:${restaurantConfig.phone}`}
                  >
                    <span className="material-symbols-outlined text-base">call</span>
                    <span>Call Concierge</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
