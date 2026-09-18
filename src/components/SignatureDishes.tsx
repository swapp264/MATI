import React from 'react';
import { signatureDishes } from '../data/menu';

interface SignatureDishesProps {
  onSelectItem?: (dishName: string) => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ onSelectItem }) => {
  const scrollToMenu = () => {
    const el = document.getElementById('digital-menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-20 lg:py-28 px-5 md:px-8 lg:px-16 bg-[#f9f2ee] text-[#1d1b19]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#9f3c16]"></span>
              <span className="text-xs uppercase tracking-widest text-[#9f3c16] font-bold">
                Culinary Curation
              </span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-[40px] text-[#1d1b19]">
              From our kitchen &amp; roastery
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#57423b] max-w-md leading-relaxed">
            Six signature plates and pours that define our slow-food philosophy. Every ingredient
            sourced directly from estate growers.
          </p>
        </div>

        {/* 6 Signature Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureDishes.map((dish) => {
            const isVeg = dish.dietaryType === 'veg';
            return (
              <div
                key={dish.id}
                className="group rounded bg-[#fff8f4] p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#dec0b7]/30"
              >
                <div>
                  <div className="relative overflow-hidden rounded mb-4 aspect-[4/3]">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={dish.name}
                      src={dish.image}
                      loading="lazy"
                    />
                    {dish.isChefsPick && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded bg-[#32302e]/85 backdrop-blur-sm text-[#f6efec] text-[10px] uppercase tracking-wider font-semibold">
                        {dish.category === 'dessert'
                          ? 'Dessert Craft'
                          : dish.category === 'coffee'
                          ? 'Artisan Cold Pour'
                          : dish.id === 'sig-3'
                          ? 'Heritage Breakfast'
                          : isVeg
                          ? 'Vegetarian Signature'
                          : "Chef's Special"}
                      </span>
                    )}
                    <span
                      className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#fff8f4] flex items-center justify-center shadow"
                      title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    >
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          isVeg ? 'bg-[#526048]' : 'bg-[#9f3c16]'
                        }`}
                      ></span>
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-headline text-lg sm:text-xl font-bold text-[#1d1b19]">
                      {dish.name}
                    </h3>
                    <span className="text-base font-bold text-[#9f3c16] whitespace-nowrap">
                      ₹{dish.price}
                    </span>
                  </div>

                  {dish.subtitle && (
                    <p className="text-[11px] text-[#8a726a] tracking-wider uppercase mb-2 font-medium">
                      {dish.subtitle}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-[#57423b] line-clamp-3 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#ede7e3] flex items-center justify-between text-[#8a726a]">
                  <span className="text-xs italic text-[#57423b]">{dish.pairingNote}</span>
                  <button
                    onClick={() => {
                      if (onSelectItem) {
                        onSelectItem(dish.name);
                      } else {
                        scrollToMenu();
                      }
                    }}
                    className="text-[#9f3c16] hover:text-[#bf542c] p-1 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    aria-label={`View ${dish.name} on menu`}
                  >
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button Centered */}
        <div className="mt-12 text-center">
          <button
            onClick={scrollToMenu}
            className="inline-flex items-center gap-3 px-8 py-4 rounded bg-[#1d1b19] text-[#fff8f4] text-xs uppercase tracking-widest font-semibold hover:bg-[#9f3c16] transition-colors shadow-md hover:shadow-lg"
          >
            <span>Explore Full Digital Menu</span>
            <span className="material-symbols-outlined text-sm">menu_book</span>
          </button>
        </div>
      </div>
    </section>
  );
};
