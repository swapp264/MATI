import React from 'react';

export const BrandStory: React.FC = () => {
  return (
    <section
      className="w-full py-20 lg:py-28 px-5 md:px-8 lg:px-16 bg-[#fff8f4] text-[#1d1b19]"
      id="story"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual Column (7 Cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded overflow-hidden shadow-2xl">
              <img
                className="w-full h-[420px] sm:h-[520px] object-cover"
                alt="Traditional Indian copper degchi pot simmering with fragrant butter chicken curry over low glowing charcoal embers, garnished with fresh cilantro and heavy cultured cream, captured in moody warm food photography style"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDUMUdA6A9thh1rYc_KZ9zexBygzuLSSiEze5hSyjZOJkOgA5eNqOo7geIL96EUQCXcN-BWMMhV38J5isogSIKBA9GKGpaPcb1juY3ufNSFTY0sc_pfSHdMJsgTq00OUcij9UhkIGsG3luALRzQNU7ev4KH8ihl1766WCHmZHqI0fXYiaA2r9AdWCR3k2zJrvlGw2RqnXza4lYbd4Bgf9ZuC8DcXFKYh9OMVunCWfMWz96XBGDdpVT"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-5 sm:p-6 rounded bg-[#32302e]/85 backdrop-blur-md text-[#f6efec] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-white/10">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-[#ffe088] font-semibold">
                    Living Terroir
                  </p>
                  <p className="font-headline text-lg sm:text-xl font-bold">
                    Hand-Churned White Butter &amp; Clay-Pot Degchi
                  </p>
                </div>
                <span className="text-xs uppercase tracking-wider text-[#ffdbcf] whitespace-nowrap font-medium">
                  Est. 2024 • Vashi
                </span>
              </div>
            </div>

            {/* Decorative Stamp */}
            <div className="absolute -top-5 -right-5 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#ede7e3] p-3 shadow-xl hidden md:flex flex-col items-center justify-center text-center border border-[#dec0b7]">
              <span className="material-symbols-outlined text-[#9f3c16] text-2xl">
                local_fire_department
              </span>
              <span className="text-[9px] uppercase tracking-wider font-bold text-[#57423b] leading-tight mt-1">
                Slow Earthen Embers
              </span>
            </div>
          </div>

          {/* Narrative Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-[#9f3c16]"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#9f3c16] font-bold">
                The MAATI Ethos
              </span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl text-[#1d1b19] leading-tight">
              A taste of India, gathered around one table.
            </h2>

            <p className="text-base text-[#57423b] leading-relaxed">
              MAATI is born from the fragrance of rain meeting parched earth — the universal
              emotion of <em className="italic font-serif text-[#1d1b19]">mitti ki khushboo</em>. We reject
              rushed dining in favour of unhurried mornings, slow-drip single-origin roasts, and
              earthen vessels that hold the memory of centuries-old recipes.
            </p>

            <p className="text-base text-[#57423b] leading-relaxed">
              From the bustling tea stalls of Old Delhi to the misty coffee plantations of
              Chikmagalur, every dish honors provenance. No artificial thickeners. No rushed broths.
              Just heirloom spices, unrefined sugars, and genuine warmth.
            </p>

            {/* Heritage Stat Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="p-4 rounded bg-[#f9f2ee] border border-[#dec0b7]/40 flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-semibold text-[#9f3c16]">
                  14
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#57423b] mt-1 font-medium">
                  Regional Spices
                </span>
              </div>
              <div className="p-4 rounded bg-[#f9f2ee] border border-[#dec0b7]/40 flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-semibold text-[#9f3c16]">
                  36h
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#57423b] mt-1 font-medium">
                  Slow-Brew Cook
                </span>
              </div>
              <div className="p-4 rounded bg-[#f9f2ee] border border-[#dec0b7]/40 flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-semibold text-[#9f3c16]">
                  100%
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#57423b] mt-1 font-medium">
                  Clay Vessels
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
