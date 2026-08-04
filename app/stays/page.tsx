import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { StaysBrowser } from "@/components/StaysBrowser";
import { properties } from "@/data/properties";
import { activeDestinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Stays",
  description:
    "Browse the full StayHaus portfolio of thoughtfully designed, fully furnished homes across Florida's West Coast.",
};

export default function StaysPage() {
  return (
    <>
      <PageHero
        image="/images/home/hero.svg"
        eyebrow="The Portfolio"
        title="Every StayHaus, in one place."
        description="Browse the full collection and filter by location. Every home is furnished and managed to the same standard, wherever it is in Florida."
      />
      <div className="container-page py-20 sm:py-28">
        <Suspense fallback={<div className="h-96" />}>
          <StaysBrowser properties={properties} activeDestinations={activeDestinations} />
        </Suspense>
      </div>
    </>
  );
}
