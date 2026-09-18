import { DiningRitual } from '../types';

export const diningRituals: DiningRitual[] = [
  {
    id: 'ritual-morning',
    title: 'Morning Chai & Roasts',
    timeSlot: '08:00 – 11:30 AM',
    description:
      'Quiet morning light through arched fluted glass. Fresh sourdough pao, warm saffron bun maska, and freshly roasted Chikmagalur brews.',
    idealFor: 'Ideal for: Slow Mornings & Reading',
    icon: 'wb_twilight',
    colorClass: 'bg-[#ffe088]/50 text-[#735c00]',
  },
  {
    id: 'ritual-lunch',
    title: 'Long Afternoon Lunches',
    timeSlot: '12:00 – 04:00 PM',
    description:
      'Family-style sharing platters, earthen degchis, and steaming biryani pots built for prolonged conversations and lingering.',
    idealFor: 'Ideal for: Family Gatherings & Teams',
    icon: 'wb_sunny',
    colorClass: 'bg-[#ffdbcf]/60 text-[#9f3c16]',
  },
  {
    id: 'ritual-coffee',
    title: 'Coffee & Conversations',
    timeSlot: '04:00 – 07:00 PM',
    description:
      'Manual pour-overs, single-origin Aeropress flights, cold brews, and savoury artisanal chaat to accompany creative meetings.',
    idealFor: 'Ideal for: Remote Work & Catch-ups',
    icon: 'local_cafe',
    colorClass: 'bg-[#d7e8c9]/60 text-[#526048]',
  },
  {
    id: 'ritual-night',
    title: 'Candlelight & Tandoor',
    timeSlot: '07:00 – 11:30 PM',
    description:
      'Warm amber candlelight, acoustic jazz & sitar undertones, charcoal smoked delicacies, and botanical zero-proof aperitifs.',
    idealFor: 'Ideal for: Dates & Celebrations',
    icon: 'mode_night',
    colorClass: 'bg-[#32302e] text-[#ffe088]',
  },
];
