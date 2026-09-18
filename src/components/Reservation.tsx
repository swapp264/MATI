import React, { useState, useEffect } from 'react';
import { restaurantConfig } from '../data/restaurant';
import { ReservationData } from '../types';

export const Reservation: React.FC = () => {
  // Form state
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('lunch');
  const [guests, setGuests] = useState(2);
  const [seating, setSeating] = useState('courtyard');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  // UI state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('MT-9482');
  const [lastBooking, setLastBooking] = useState<ReservationData | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  const adjustGuests = (delta: number) => {
    setGuests((prev) => Math.max(1, Math.min(16, prev + delta)));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMessage('Please provide a valid contact number.');
      return;
    }

    const ref = `MT-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);

    const booking: ReservationData = {
      id: ref,
      date,
      slot,
      guests,
      seating,
      name: name.trim(),
      phone: phone.trim(),
      notes: notes.trim(),
      createdAt: new Date().toISOString(),
    };

    // Store in localStorage for demo persistence
    try {
      const existing = localStorage.getItem('maati_reservations');
      const list = existing ? JSON.parse(existing) : [];
      list.unshift(booking);
      localStorage.setItem('maati_reservations', JSON.stringify(list));
    } catch {
      // ignore storage errors
    }

    setLastBooking(booking);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setNotes('');
    setGuests(2);
    setIsSubmitted(false);
    setErrorMessage('');
  };

  const slotLabels: Record<string, string> = {
    breakfast: 'Morning Chai & Roasts (08:00 - 11:30 AM)',
    lunch: 'Long Lunch (12:00 - 03:30 PM)',
    coffee: 'High Tea & Coffee (04:00 - 06:30 PM)',
    dinner: 'Candlelight Dinner (07:00 - 11:30 PM)',
  };

  const seatingLabels: Record<string, string> = {
    courtyard: 'Main Earthen Courtyard',
    archway: 'Archway Booth (Intimate)',
    coffeebar: 'High Counter Bar • Coffee Tasting',
    outdoor: 'Bespoke Verandah',
  };

  return (
    <section
      className="w-full py-20 lg:py-28 px-5 md:px-8 lg:px-16 bg-[#fff8f4] text-[#1d1b19]"
      id="reservations"
    >
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl bg-[#32302e] text-[#f6efec] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-white/10">
          {/* Background Ambient Glow */}
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#bf542c]/15 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-[#735c00]/15 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Reservation Info & Concierge Assurance */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 w-fit border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#ffe088] animate-pulse"></span>
                <span className="text-[11px] uppercase tracking-widest text-[#ffe088] font-semibold">
                  Real-Time Table Allocation
                </span>
              </div>

              <h2 className="font-headline text-3xl sm:text-4xl text-[#f6efec] leading-tight">
                Your table is waiting.
              </h2>

              <p className="text-sm sm:text-base text-[#dec0b7] leading-relaxed">
                Whether you are planning an intimate anniversary, a lively family feast, or a
                tranquil solo morning with pour-over coffee, our team prepares every table with
                personal care.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffe088] text-xl mt-0.5">
                    timer
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#f6efec]">Grace Period</p>
                    <p className="text-xs text-[#dec0b7]">
                      Tables held for 15 minutes past reservation time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffe088] text-xl mt-0.5">
                    local_parking
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#f6efec]">Complimentary Valet</p>
                    <p className="text-xs text-[#dec0b7]">
                      Dedicated valet parking right at the entrance of MAATI House.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffe088] text-xl mt-0.5">
                    support_agent
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#f6efec]">
                      VIP &amp; Large Party Bookings (8+ Guests)
                    </p>
                    <p className="text-xs text-[#dec0b7]">
                      Speak directly to our hospitality curator at {restaurantConfig.displayPhone}.
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Direct Concierge Button */}
              <div className="pt-2">
                <a
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#526048] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#6a795f] transition-colors shadow-md active:scale-95"
                  href={`https://wa.me/${restaurantConfig.whatsappNumber}?text=${encodeURIComponent(
                    restaurantConfig.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-lg">chat</span>
                  <span>Instant WhatsApp Concierge</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Booking Form */}
            <div className="lg:col-span-7 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/10">
              {!isSubmitted ? (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {errorMessage && (
                    <div className="p-3 rounded bg-red-900/50 border border-red-500 text-red-200 text-xs flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">error</span>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Date & Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs uppercase tracking-wider text-[#dec0b7] mb-2 font-semibold"
                        htmlFor="resDate"
                      >
                        Select Date
                      </label>
                      <input
                        type="date"
                        id="resDate"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded bg-white/10 text-[#f6efec] text-sm focus:outline-none focus:ring-2 focus:ring-[#9f3c16] border border-white/10"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs uppercase tracking-wider text-[#dec0b7] mb-2 font-semibold"
                        htmlFor="resSlot"
                      >
                        Dining Ritual / Time
                      </label>
                      <select
                        id="resSlot"
                        value={slot}
                        onChange={(e) => setSlot(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded bg-[#32302e] text-[#f6efec] text-sm focus:outline-none focus:ring-2 focus:ring-[#9f3c16] border border-white/10"
                      >
                        <option value="breakfast">Morning Chai &amp; Roasts (08:00 - 11:30 AM)</option>
                        <option value="lunch">Long Lunch (12:00 - 03:30 PM)</option>
                        <option value="coffee">High Tea &amp; Coffee (04:00 - 06:30 PM)</option>
                        <option value="dinner">Candlelight Dinner (07:00 - 11:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Guests & Seating Preference */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs uppercase tracking-wider text-[#dec0b7] mb-2 font-semibold"
                        htmlFor="resGuests"
                      >
                        Number of Guests
                      </label>
                      <div className="flex items-center rounded bg-white/10 px-2 py-1.5 border border-white/10">
                        <button
                          type="button"
                          onClick={() => adjustGuests(-1)}
                          className="w-8 h-8 rounded text-[#f6efec] hover:bg-white/20 flex items-center justify-center font-bold text-lg"
                          aria-label="Decrease guests"
                        >
                          -
                        </button>
                        <span className="w-full text-center text-[#f6efec] font-semibold text-sm">
                          {guests} {guests === 1 ? 'Guest' : 'Guests'}
                        </span>
                        <button
                          type="button"
                          onClick={() => adjustGuests(1)}
                          className="w-8 h-8 rounded text-[#f6efec] hover:bg-white/20 flex items-center justify-center font-bold text-lg"
                          aria-label="Increase guests"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-xs uppercase tracking-wider text-[#dec0b7] mb-2 font-semibold"
                        htmlFor="resSeating"
                      >
                        Seating Preference
                      </label>
                      <select
                        id="resSeating"
                        value={seating}
                        onChange={(e) => setSeating(e.target.value)}
                        className="w-full px-4 py-3 rounded bg-[#32302e] text-[#f6efec] text-sm focus:outline-none focus:ring-2 focus:ring-[#9f3c16] border border-white/10"
                      >
                        <option value="courtyard">Main Earthen Courtyard</option>
                        <option value="archway">Archway Booth (Intimate)</option>
                        <option value="coffeebar">High Counter Bar • Coffee Tasting</option>
                        <option value="outdoor">Bespoke Verandah</option>
                      </select>
                    </div>
                  </div>

                  {/* Guest Personal Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs uppercase tracking-wider text-[#dec0b7] mb-2 font-semibold"
                        htmlFor="resName"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="resName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Radhika Sen"
                        required
                        className="w-full px-4 py-3 rounded bg-white/10 text-[#f6efec] placeholder:text-[#8a726a] text-sm focus:outline-none focus:ring-2 focus:ring-[#9f3c16] border border-white/10"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs uppercase tracking-wider text-[#dec0b7] mb-2 font-semibold"
                        htmlFor="resPhone"
                      >
                        WhatsApp Phone
                      </label>
                      <input
                        type="tel"
                        id="resPhone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        required
                        className="w-full px-4 py-3 rounded bg-white/10 text-[#f6efec] placeholder:text-[#8a726a] text-sm focus:outline-none focus:ring-2 focus:ring-[#9f3c16] border border-white/10"
                      />
                    </div>
                  </div>

                  {/* Special Notes / Dietary Requests */}
                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider text-[#dec0b7] mb-2 font-semibold"
                      htmlFor="resNotes"
                    >
                      Special Celebrations / Dietary Notes (Optional)
                    </label>
                    <textarea
                      id="resNotes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Birthday, anniversary, Jain food preference, celebratory flowers..."
                      rows={2}
                      className="w-full px-4 py-2.5 rounded bg-white/10 text-[#f6efec] placeholder:text-[#8a726a] text-sm focus:outline-none focus:ring-2 focus:ring-[#9f3c16] border border-white/10"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded bg-[#9f3c16] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#bf542c] transition-colors shadow-lg flex items-center justify-center gap-2 active:scale-95"
                  >
                    <span>Confirm &amp; Reserve Table</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>

                  <p className="text-[11px] text-center text-[#dec0b7]">
                    Instant confirmation generated • WhatsApp notification dispatched to your phone.
                  </p>
                </form>
              ) : (
                /* Success Confirmation State */
                <div className="flex flex-col items-center text-center p-6 sm:p-8 space-y-4 bg-white/10 rounded-lg animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#526048] flex items-center justify-center text-white shadow-lg">
                    <span className="material-symbols-outlined text-3xl">done_all</span>
                  </div>

                  <h3 className="font-headline text-2xl font-bold text-[#f6efec]">
                    Reservation Confirmed
                  </h3>

                  <p className="text-sm text-[#dec0b7] max-w-md">
                    Thank you,{' '}
                    <span className="text-[#ffe088] font-semibold">{lastBooking?.name}</span>. We
                    have allocated your table for{' '}
                    <span className="font-semibold text-[#f6efec]">
                      {lastBooking?.guests} {lastBooking?.guests === 1 ? 'guest' : 'guests'}
                    </span>{' '}
                    on <span className="font-semibold text-[#f6efec]">{lastBooking?.date}</span>.
                  </p>

                  <div className="p-4 rounded bg-[#32302e] w-full max-w-sm text-left space-y-2 border border-white/10">
                    <div className="flex justify-between text-xs text-[#dec0b7]">
                      <span>Booking Reference:</span>
                      <span className="font-mono text-[#ffe088] font-bold">#{bookingRef}</span>
                    </div>
                    <div className="flex justify-between text-xs text-[#dec0b7]">
                      <span>Service Slot:</span>
                      <span className="text-[#f6efec] font-medium">
                        {slotLabels[lastBooking?.slot || 'lunch']}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-[#dec0b7]">
                      <span>Seating:</span>
                      <span className="text-[#f6efec] font-medium">
                        {seatingLabels[lastBooking?.seating || 'courtyard']}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-[#dec0b7]">
                      <span>Sanctuary:</span>
                      <span className="text-[#f6efec]">Palm Beach Road, Vashi</span>
                    </div>
                    <div className="flex justify-between text-xs text-[#dec0b7]">
                      <span>Confirmation:</span>
                      <span className="text-[#ffe088]">Sent to {lastBooking?.phone}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={`https://wa.me/${restaurantConfig.whatsappNumber}?text=${encodeURIComponent(
                        `Hi MAATI, my reservation ref is #${bookingRef} under ${lastBooking?.name}. Looking forward to dining!`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded bg-[#526048] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#6a795f] transition-colors flex items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-sm">chat</span>
                      <span>Verify on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="text-xs uppercase tracking-widest text-[#ffdbcf] underline hover:text-white py-1"
                    >
                      Make Another Reservation
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
