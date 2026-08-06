import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function PartnerCTA() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-24">
      <Image
        src="/images/destinations/gulf-beaches.jpg"
        alt="Aerial view of Florida's Gulf Coast"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/35 to-ink/55" />
      <div className="container-page relative z-10 flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <p className="text-[11px] sm:text-xs uppercase tracking-widest2 text-cream/80 font-medium">
            For Property Owners
          </p>
          <h2 className="mt-6 font-display italic font-light leading-[1.1] text-cream text-4xl sm:text-5xl md:text-6xl max-w-2xl">
            Partner with StayHaus.
          </h2>
          <p className="mt-6 max-w-md text-cream/80 leading-relaxed">
            We design, furnish, and manage every home to a single hospitality standard —
            so your property performs like part of a growing brand.
          </p>
          <Button href="/partner" variant="secondary" light className="mt-9">
            Learn About Partnership
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
