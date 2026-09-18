import React from 'react';
import { reviewsData } from '../data/reviews';

export const Reviews: React.FC = () => {
  return (
    <section className="w-full py-20 lg:py-28 px-5 md:px-8 lg:px-16 bg-[#fff8f4] text-[#1d1b19]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[#9f3c16] font-bold mb-2">
            Guest Reflections
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl text-[#1d1b19]">
            Loved By Discerning Palates
          </h2>
          <div className="flex items-center gap-1 mt-3 text-[#735c00]">
            <span className="material-symbols-outlined text-lg">star</span>
            <span className="material-symbols-outlined text-lg">star</span>
            <span className="material-symbols-outlined text-lg">star</span>
            <span className="material-symbols-outlined text-lg">star</span>
            <span className="material-symbols-outlined text-lg">star</span>
            <span className="text-xs sm:text-sm text-[#1d1b19] font-semibold ml-2">
              4.9 / 5.0 (820+ Dining Reviews)
            </span>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-xl bg-[#f9f2ee] flex flex-col justify-between border border-[#dec0b7]/30 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex text-[#735c00] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-base">
                      star
                    </span>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-[#1d1b19] italic leading-relaxed font-light">
                  {review.comment}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ede7e3] flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${review.avatarBg}`}
                >
                  {review.avatarText}
                </div>
                <div>
                  <p className="font-headline text-sm font-bold text-[#1d1b19]">{review.name}</p>
                  <p className="text-[11px] text-[#8a726a] font-medium">{review.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
