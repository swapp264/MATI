import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { SignatureDishes } from './components/SignatureDishes';
import { DigitalMenu } from './components/DigitalMenu';
import { OurStoryPhilosophy } from './components/OurStoryPhilosophy';
import { Experience } from './components/Experience';
import { Gallery } from './components/Gallery';
import { Reservation } from './components/Reservation';
import { Location } from './components/Location';
import { Reviews } from './components/Reviews';
import { InstagramMosaic } from './components/InstagramMosaic';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ToastNotification } from './components/ToastNotification';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAddToOrder = (itemName: string) => {
    setToastMessage(`Added "${itemName}" to table bill`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleOpenReservation = () => {
    const el = document.getElementById('reservations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f4] text-[#1d1b19] font-body">
      {/* Top Fixed Navbar */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full pb-16 lg:pb-0">
        {/* 1. Cinematic Hero */}
        <Hero />

        {/* 2. Brand Story / Ethos */}
        <BrandStory />

        {/* 3. Signature Dishes Curation */}
        <SignatureDishes onSelectItem={handleAddToOrder} />

        {/* 4. Interactive Digital Menu */}
        <DigitalMenu onAddToOrder={handleAddToOrder} />

        {/* 5. Spatial Philosophy & Origin */}
        <OurStoryPhilosophy />

        {/* 6. Four Daily Rituals Experience */}
        <Experience />

        {/* 7. Ambience & Architecture Gallery */}
        <Gallery />

        {/* 8. Table Reservation Concierge */}
        <Reservation />

        {/* 9. Location & Operating Rhythm */}
        <Location />

        {/* 10. Verified Guest Reflections */}
        <Reviews />

        {/* 11. Instagram Lifestyle Mosaic & TRINETRA AI Showcase */}
        <InstagramMosaic />

        {/* 12. Final CTA Invitation */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed Bottom Action Bar */}
      <MobileBottomBar />

      {/* Dynamic Toast Feedback Notification */}
      <ToastNotification
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
