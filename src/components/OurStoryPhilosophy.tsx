import React from 'react';

export const OurStoryPhilosophy: React.FC = () => {
  return (
    <section className="w-full py-20 lg:py-28 px-5 md:px-8 lg:px-16 bg-[#32302e] text-[#f6efec] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Story Text (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-[#ffe088]"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#ffe088] font-semibold">
                Origin &amp; Design Philosophy
              </span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#f6efec]">
              More than a meal.<br />
              <span className="italic font-normal text-[#ffe088]">A slower state of mind.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#dec0b7] leading-relaxed">
              The architecture of MAATI was envisioned by TRINETRA AI as an earthen sanctuary inside
              the bustling pulse of Navi Mumbai. Taking inspiration from the vaulted arches of
              ancient caravanserai and the tranquil rhythm of heritage Indian verandahs, we built a
              dining room devoid of rush.
            </p>

            <div className="p-6 rounded bg-white/5 border border-white/10 space-y-3">
              <p className="font-headline text-base sm:text-lg italic text-[#ffe088] font-light leading-relaxed">
                “Hospitality is not merely what is plated; it is the feeling of warmth that lingers
                long after you leave the table.”
              </p>
              <p className="text-[11px] uppercase tracking-widest text-[#dec0b7] font-semibold">
                — TRINETRA Spatial &amp; Brand Studio
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <p className="font-headline text-base font-bold text-[#f6efec]">
                  Palm Beach Sanctuary
                </p>
                <p className="text-xs text-[#dec0b7] mt-1 leading-relaxed">
                  Earthen clay plaster walls, fluted acoustic arches, and aged brass counters.
                </p>
              </div>
              <div>
                <p className="font-headline text-base font-bold text-[#f6efec]">
                  Community Tables
                </p>
                <p className="text-xs text-[#dec0b7] mt-1 leading-relaxed">
                  Hand-turned teakwood and hand-woven cane chairs made by regional artisans.
                </p>
              </div>
            </div>
          </div>

          {/* Story Visual Mosaic (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded overflow-hidden shadow-lg border border-white/10">
                <img
                  className="w-full h-56 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  alt="Close up shot of barista pouring warm foamed milk into an earthenware cup containing artisanal Indian filter coffee latte"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7eGlRE4iOlLK-5p_TYhEWEgakADiwQKezx4jvkzMld5MvOC4tnyFgNwFWpByTVtPZj7Qtn2TwD3SWuJ8Hmrr7MAG7OMnXYxATTob5WpP-7n3ASIdQ4-91199Nsxq0k6K1kQS7qerntJf_Uo58sKR5pDCPGQ_Jwlcukvgj_GBF72MnZL5x5KPjA49leUwSG-HLWFx0t9oMkxGSdJZvAfwjWGk_Op2EEVOFtJP0Fwlna5tJ9HIGURTC"
                  loading="lazy"
                />
              </div>
              <div className="rounded overflow-hidden shadow-lg border border-white/10">
                <img
                  className="w-full h-40 sm:h-44 object-cover hover:scale-105 transition-transform duration-500"
                  alt="Chef in clean linen apron carefully plating fragrant biryani inside a sealed dough clay pot with fresh mint leaves and saffron water"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ0czkJeXFlmhfWIx9YYj9LByk0xuIH4WDDjMbenpjl8w_1Ud1-FOnW2XwcfmnDvkeEUALEzYt6ykqaUugkBUA2OtM0eV1RHAvtfw3Z0l-FKAaTIm8FhVlGAtfHR3SFWAtA0In1uDu3tJvJZKPCXSzuABwrb4ZvwAilv5cd4kn6Noq_JA-1Cpvr0W2cIlyMS7mrpH5f3OrpvfuUGAEdzvpVhNjrFC2aPMqu67UHwcC7g-VlbH0C6ex"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="space-y-4 pt-6 sm:pt-8">
              <div className="rounded overflow-hidden shadow-lg border border-white/10">
                <img
                  className="w-full h-40 sm:h-44 object-cover hover:scale-105 transition-transform duration-500"
                  alt="Architectural details of MAATI interior showing curved ochre plastered archway, vintage globe lamps, and ribbed glass windows"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBAvqXISR10zf9era_h99jHh_rRxzgYmvFqGoKt5PtqOtd3Ib9y3GQU68Mt7jYwIKvuUVL3IzRLDVbjaNWp8dVtqMOOHo1vJGnn8DMOpBF77BtFePaGwXkmvSapSQKa4Yu8AXUItrHRAnUL8ftiidkRnVQuuXg4O4PTgqpodCqXQhpltrHnbi8iYGmzqT2lZRGrHV49D4Pdc4b_BZxJVL8FWkMzplRlD_PXEqnvsDpcnY1PoJn4YFH"
                  loading="lazy"
                />
              </div>
              <div className="rounded overflow-hidden shadow-lg border border-white/10">
                <img
                  className="w-full h-56 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  alt="Traditional Indian spice drawer with whole green cardamom pods, cinnamon quills, star anise, and dried red chilies in rustic wooden compartments"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6IdbPzaOWOQpVK2SqxrjCmhC9MCI4kk6Fwppl0Zo0fkrvGc_3-fzGZU_mBejp95uZLQOBy5w19XDZdcLiIaDuy4PrG-PUIhL1VaBY-oRYQEkXJLyiSL1CTGpWbb6Mk1gjBBKjDkCov0Pv2WG7cpFdP9vM3M31_RPzt_UzTaEKxp3oqNUExC7v4uMxKS98SDlahuNyWImG6bMrH_mxZGULf54-IZZMHLvRdYmy5F2tSvOYQQbDIXM8"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
