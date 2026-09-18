import React from 'react';
import { diningRituals } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section
      className="w-full py-20 lg:py-28 px-5 md:px-8 lg:px-16 bg-[#fff8f4] text-[#1d1b19]"
      id="experience"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#9f3c16] font-bold mb-2">
            Paced By The Sun
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl text-[#1d1b19]">
            Four Daily Rituals
          </h2>
          <p className="text-sm sm:text-base text-[#57423b] mt-2">
            From early dawn pour-overs to evening jazz candlelight, experience how MAATI
            transitions through the hours.
          </p>
        </div>

        {/* 4 Ritual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diningRituals.map((ritual) => (
            <div
              key={ritual.id}
              className="p-6 rounded bg-[#f9f2ee] hover:bg-[#f3ede9] transition-all duration-300 flex flex-col justify-between group border border-[#dec0b7]/30 shadow-sm hover:shadow-md"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${ritual.colorClass}`}
                >
                  <span className="material-symbols-outlined text-2xl">{ritual.icon}</span>
                </div>
                <span className="text-xs uppercase tracking-widest text-[#9f3c16] font-bold">
                  {ritual.timeSlot}
                </span>
                <h3 className="font-headline text-lg sm:text-xl font-bold text-[#1d1b19] mt-1 mb-2">
                  {ritual.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#57423b] leading-relaxed">
                  {ritual.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ede7e3] text-[#8a726a] text-[11px] uppercase tracking-wider font-medium">
                <span>{ritual.idealFor}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
