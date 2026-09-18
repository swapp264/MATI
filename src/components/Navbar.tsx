import React, { useState, useEffect } from 'react';
import { restaurantConfig } from '../data/restaurant';

interface NavbarProps {
  onOpenReservation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Menu', href: '#digital-menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      e.preventDefault();
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#fff8f4]/95 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.06)] border-b border-[#dec0b7]/30'
            : 'bg-[#fff8f4]/90 backdrop-blur-md'
        }`}
      >
        <div className="h-20 w-full px-5 md:px-8 lg:px-16 flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, '#')}
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="MAATI Homepage"
            >
              <img
                alt="MAATI Brand Emblem"
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
                src={restaurantConfig.logoUrl}
              />
              <div className="flex flex-col">
                <span className="font-headline text-lg sm:text-xl tracking-wider uppercase text-[#1d1b19] group-hover:text-[#9f3c16] transition-colors font-bold">
                  MAATI
                </span>
                <span className="text-[10px] sm:text-xs tracking-widest uppercase text-[#57423b] font-medium">
                  Indian Kitchen &amp; Coffee
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs uppercase tracking-[0.14em] font-semibold transition-colors duration-200 ${
                  idx === 0
                    ? 'text-[#9f3c16]'
                    : 'text-[#57423b] hover:text-[#1d1b19]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="flex items-center gap-4">
            <a
              href="#reservations"
              onClick={(e) => {
                if (onOpenReservation) {
                  onOpenReservation();
                } else {
                  handleNavClick(e, '#reservations');
                }
              }}
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded bg-[#9f3c16] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#bf542c] transition-all duration-200 shadow-sm hover:shadow active:scale-95"
            >
              Book A Table
            </a>

            {/* Concierge Icon Button */}
            <a
              href="tel:+912227814000"
              title="Direct Telephone Reservation"
              className="w-9 h-9 rounded-full bg-[#ffdbcf] text-[#9f3c16] flex items-center justify-center hover:bg-[#9f3c16] hover:text-white transition-colors"
              aria-label="Call Restaurant Concierge"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
            </a>

            {/* Mobile Drawer Hamburger Button */}
            <button
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#57423b] hover:text-[#1d1b19] transition-colors flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#32302e]/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer Aside */}
        <aside
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-[#ffffff] shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#ede7e3]">
              <div className="flex items-center gap-2">
                <img
                  alt="MAATI Brand Emblem"
                  className="h-6 w-auto object-contain"
                  src={restaurantConfig.logoUrl}
                />
                <span className="font-headline text-lg uppercase font-bold text-[#1d1b19]">
                  MAATI
                </span>
              </div>
              <button
                aria-label="Close Menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 text-[#57423b] hover:text-[#1d1b19] transition-colors"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            <nav className="flex flex-col gap-4 py-6" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-headline text-xl text-[#1d1b19] hover:text-[#9f3c16] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#reservations"
                onClick={(e) => handleNavClick(e, '#reservations')}
                className="font-headline text-xl text-[#9f3c16] font-semibold py-1 flex items-center gap-2"
              >
                <span>Book A Table</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </nav>
          </div>

          <div className="pt-6 border-t border-[#ede7e3] flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-widest text-[#8a726a] font-bold">
              Reservations &amp; Enquiries
            </span>
            <a
              className="text-sm font-semibold text-[#1d1b19] hover:text-[#9f3c16] transition-colors flex items-center gap-2"
              href={`tel:${restaurantConfig.phone}`}
            >
              <span className="material-symbols-outlined text-base text-[#9f3c16]">call</span>
              <span>{restaurantConfig.displayPhone}</span>
            </a>
            <a
              className="text-sm font-semibold text-[#526048] hover:text-[#6a795f] transition-colors flex items-center gap-2"
              href={`https://wa.me/${restaurantConfig.whatsappNumber}?text=${encodeURIComponent(
                restaurantConfig.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>WhatsApp Concierge</span>
            </a>
            <span className="text-xs text-[#57423b]">
              Palm Beach Galleria Rd, Sector 17, Vashi
            </span>
          </div>
        </aside>
      </div>
    </>
  );
};
