export interface Destination {
  slug: string;
  name: string;
  region: string;
  state: "active" | "coming-soon";
  tagline: string;
  description: string;
  image: string;
  propertyCount: number;
}

export interface Property {
  slug: string;
  name: string;
  destinationSlug: string;
  neighborhood: string;
  tagline: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  priceFrom: number;
  tags: string[];
  heroImage: string;
  gallery: string[];
  amenities: string[];
  neighborhoodNotes: string;
  availability: string;
}

export interface GuideItem {
  name: string;
  note: string;
}

export interface GuideCategory {
  label: string;
  items: GuideItem[];
}

export interface Guide {
  destinationSlug: string;
  intro: string;
  heroImage: string;
  categories: GuideCategory[];
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}
