import { Destination } from "./types";

export const destinations: Destination[] = [
  {
    slug: "st-petersburg",
    name: "St. Petersburg",
    region: "Florida's West Coast",
    state: "active",
    tagline: "Downtown energy, waterfront ease",
    description:
      "A walkable downtown of galleries, rooftop bars, and Tampa Bay sunsets, minutes from the Gulf beaches.",
    image: "/images/destinations/st-petersburg.jpg",
    propertyCount: 2,
  },
  {
    slug: "clearwater-beach",
    name: "Clearwater Beach",
    region: "Florida's West Coast",
    state: "active",
    tagline: "Powder sand, unhurried mornings",
    description:
      "White-sand beach town living with sherbet sunsets and an easy, barefoot pace of life.",
    image: "/images/destinations/clearwater-beach.jpg",
    propertyCount: 2,
  },
  {
    slug: "sarasota",
    name: "Sarasota",
    region: "Florida's West Coast",
    state: "active",
    tagline: "Arts, bayfront calm, quiet luxury",
    description:
      "Cultural institutions, barrier-island beaches, and a slower, design-forward way of living on the water.",
    image: "/images/destinations/sarasota.svg",
    propertyCount: 2,
  },
  {
    slug: "tampa",
    name: "Tampa",
    region: "Florida's West Coast",
    state: "active",
    tagline: "Historic streets, modern skyline",
    description:
      "Riverwalk views, historic Hyde Park charm, and a growing culinary scene in Florida's most dynamic city.",
    image: "/images/destinations/tampa.jpg",
    propertyCount: 2,
  },
  {
    slug: "naples",
    name: "Naples",
    region: "Southwest Florida",
    state: "coming-soon",
    tagline: "Coming soon",
    description: "Refined coastal living on Florida's Gulf Coast, arriving to the StayHaus portfolio soon.",
    image: "/images/destinations/naples.svg",
    propertyCount: 0,
  },
  {
    slug: "miami",
    name: "Miami",
    region: "South Florida",
    state: "coming-soon",
    tagline: "Coming soon",
    description: "Design-forward stays across Miami's most storied neighborhoods, arriving soon.",
    image: "/images/destinations/miami.svg",
    propertyCount: 0,
  },
  {
    slug: "orlando",
    name: "Orlando",
    region: "Central Florida",
    state: "coming-soon",
    tagline: "Coming soon",
    description: "Central Florida living for the modern traveler, arriving to the StayHaus portfolio soon.",
    image: "/images/destinations/orlando.svg",
    propertyCount: 0,
  },
];

export const activeDestinations = destinations.filter((d) => d.state === "active");
export const comingSoonDestinations = destinations.filter((d) => d.state === "coming-soon");

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
