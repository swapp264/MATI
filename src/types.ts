export interface RestaurantConfig {
  name: string;
  tagline: string;
  subTagline: string;
  description: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  address: {
    street: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    fullText: string;
  };
  googleMapsUrl: string;
  operatingHours: {
    coffeeBar: string;
    kitchenLunch: string;
    kitchenDinner: string;
    summaryWeekdays: string;
    summaryWeekends: string;
  };
  socialLinks: {
    instagram: string;
    facebook?: string;
    twitter?: string;
  };
  logoUrl: string;
}

export type MenuCategory = 'all' | 'mains' | 'coffee' | 'small-plates' | 'breads' | 'dessert';
export type DietaryType = 'veg' | 'non-veg';

export interface MenuItem {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  price: number;
  category: MenuCategory;
  dietaryType: DietaryType;
  isChefsPick?: boolean;
  isSignature?: boolean;
  pairingNote?: string;
  availability?: string;
  image?: string;
  searchTerms: string;
}

export interface DiningRitual {
  id: string;
  title: string;
  timeSlot: string;
  description: string;
  idealFor: string;
  icon: string;
  colorClass: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'interior' | 'plates' | 'roastery';
  imageUrl: string;
  aspectClass?: string;
  altText: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  designation: string;
  comment: string;
  rating: number;
  avatarText: string;
  avatarBg: string;
}

export interface ReservationData {
  id?: string;
  date: string;
  slot: string;
  guests: number;
  seating: string;
  name: string;
  phone: string;
  email?: string;
  notes?: string;
  createdAt?: string;
}
