import React, { useState, useMemo } from 'react';
import { allMenuItems } from '../data/menu';
import { MenuCategory } from '../types';

interface DigitalMenuProps {
  onAddToOrder: (itemName: string) => void;
}

export const DigitalMenu: React.FC<DigitalMenuProps> = ({ onAddToOrder }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [activeDiet, setActiveDiet] = useState<'veg' | 'non-veg' | 'chef-pick' | null>(null);

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'all', label: 'All Creations' },
    { id: 'mains', label: 'Signature Mains' },
    { id: 'coffee', label: 'Artisan Coffee & Chai' },
    { id: 'small-plates', label: 'Small Plates & Chaat' },
    { id: 'breads', label: 'Tandoor & Breads' },
    { id: 'dessert', label: 'Sweet Finale' },
  ];

  const filteredItems = useMemo(() => {
    return allMenuItems.filter((item) => {
      // Category check
      const matchesCat = activeCategory === 'all' || item.category === activeCategory;

      // Dietary check
      let matchesDiet = true;
      if (activeDiet === 'veg') {
        matchesDiet = item.dietaryType === 'veg';
      } else if (activeDiet === 'non-veg') {
        matchesDiet = item.dietaryType === 'non-veg';
      } else if (activeDiet === 'chef-pick') {
        matchesDiet = !!item.isChefsPick;
      }

      // Search check
      let matchesSearch = true;
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase().trim();
        const haystack = (
          item.name +
          ' ' +
          (item.subtitle || '') +
          ' ' +
          item.description +
          ' ' +
          item.searchTerms
        ).toLowerCase();
        matchesSearch = haystack.includes(query);
      }

      return matchesCat && matchesDiet && matchesSearch;
    });
  }, [searchTerm, activeCategory, activeDiet]);

  const clearAllFilters = () => {
    setSearchTerm('');
    setActiveCategory('all');
    setActiveDiet(null);
  };

  return (
    <section
      className="w-full py-20 lg:py-28 px-5 md:px-8 lg:px-16 bg-[#fff8f4] text-[#1d1b19]"
      id="digital-menu"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-6 bg-[#9f3c16]"></span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#9f3c16] font-bold">
              Interactive Service Menu
            </span>
            <span className="h-px w-6 bg-[#9f3c16]"></span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl text-[#1d1b19]">
            Curated Digital Tasting &amp; Bar
          </h2>
          <p className="text-sm sm:text-base text-[#57423b] mt-2">
            Filter through regional classics, specialty coffees, tandoor bakes, and confectionery.
            Real-time updates from our kitchen pass.
          </p>
        </div>

        {/* Interactive Search & Filter Controls */}
        <div className="mb-10 flex flex-col gap-6">
          {/* Live Search Input */}
          <div className="relative w-full max-w-xl mx-auto">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#8a726a]">
              search
            </span>
            <input
              type="text"
              id="menuSearchInput"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search dishes, ingredients, cardamom, roast, biryani..."
              className="w-full pl-12 pr-10 py-3.5 rounded-full bg-[#f3ede9] text-[#1d1b19] placeholder:text-[#8a726a] text-sm focus:outline-none focus:ring-2 focus:ring-[#9f3c16]/30 shadow-sm transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8a726a] hover:text-[#9f3c16] transition-colors"
                aria-label="Clear Search"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all whitespace-nowrap active:scale-95 ${
                    isActive
                      ? 'bg-[#1d1b19] text-[#fff8f4] shadow-md'
                      : 'bg-[#f3ede9] text-[#57423b] hover:bg-[#ede7e3]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Dietary Tag Sub-filters */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <span className="text-[11px] uppercase tracking-wider text-[#8a726a] mr-1 font-semibold">
              Dietary:
            </span>

            <button
              type="button"
              onClick={() => setActiveDiet(activeDiet === 'veg' ? null : 'veg')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all ${
                activeDiet === 'veg'
                  ? 'bg-[#d7e8c9] text-[#121f0c] ring-2 ring-[#526048] font-bold'
                  : 'bg-[#f3ede9] text-[#57423b] hover:bg-[#ede7e3]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#526048]"></span>
              <span>Vegetarian</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveDiet(activeDiet === 'non-veg' ? null : 'non-veg')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all ${
                activeDiet === 'non-veg'
                  ? 'bg-[#ffdbcf] text-[#390c00] ring-2 ring-[#9f3c16] font-bold'
                  : 'bg-[#f3ede9] text-[#57423b] hover:bg-[#ede7e3]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#9f3c16]"></span>
              <span>Non-Veg</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveDiet(activeDiet === 'chef-pick' ? null : 'chef-pick')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all ${
                activeDiet === 'chef-pick'
                  ? 'bg-[#ffe088] text-[#241a00] ring-2 ring-[#735c00] font-bold'
                  : 'bg-[#f3ede9] text-[#57423b] hover:bg-[#ede7e3]'
              }`}
            >
              <span className="material-symbols-outlined text-[14px] text-[#735c00]">star</span>
              <span>Chef's Pick</span>
            </button>

            {(searchTerm || activeCategory !== 'all' || activeDiet) && (
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-xs text-[#9f3c16] hover:underline font-semibold ml-2"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Live Digital Menu Item Listing */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-[#f9f2ee] rounded-lg border border-[#dec0b7]/40 max-w-md mx-auto">
            <span className="material-symbols-outlined text-4xl text-[#8a726a] mb-2">
              search_off
            </span>
            <p className="font-headline text-lg text-[#1d1b19] font-bold">No dishes found</p>
            <p className="text-xs text-[#57423b] mt-1 mb-4">
              We couldn't find items matching "{searchTerm || activeDiet || activeCategory}".
            </p>
            <button
              onClick={clearAllFilters}
              className="px-4 py-2 rounded bg-[#9f3c16] text-white text-xs uppercase tracking-wider font-semibold"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => {
              const isVeg = item.dietaryType === 'veg';
              return (
                <div
                  key={item.id}
                  className="p-5 rounded bg-[#f9f2ee] hover:bg-[#f3ede9] transition-colors flex flex-col justify-between border border-[#dec0b7]/30 shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-3 h-3 rounded-full flex-shrink-0 ${
                            isVeg ? 'bg-[#526048]' : 'bg-[#9f3c16]'
                          }`}
                          title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                        ></span>
                        <h3 className="font-headline text-lg sm:text-xl font-bold text-[#1d1b19]">
                          {item.name}
                        </h3>
                      </div>
                      <span className="text-base font-bold text-[#9f3c16] whitespace-nowrap">
                        ₹{item.price}
                      </span>
                    </div>

                    {item.subtitle && (
                      <p className="text-[11px] text-[#8a726a] uppercase tracking-wider mt-1 font-medium">
                        {item.subtitle}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-[#57423b] mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#ede7e3] flex items-center justify-between">
                    <span className="text-[11px] px-2.5 py-0.5 rounded bg-[#fff8f4] text-[#57423b] font-medium border border-[#dec0b7]/40">
                      {item.pairingNote || (item.isChefsPick ? "Chef's Signature" : 'Slow Heritage')}
                    </span>
                    <button
                      type="button"
                      onClick={() => onAddToOrder(item.name)}
                      className="text-[#9f3c16] hover:text-[#bf542c] text-xs uppercase tracking-wider font-semibold flex items-center gap-1 active:scale-95 transition-transform"
                    >
                      <span>Order To Table</span>
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
