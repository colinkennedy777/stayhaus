import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function PartnerCTA() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 opacity-35">
        <Image src="/images/partner/portfolio.svg" alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div className="container-page relative z-10 py-24 sm:py-32">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-sand-300 mb-4">Property Owners</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-cream">
            Own a property in Florida? Partner with StayHaus.
          </h2>
          <p className="mt-6 text-cream/75 leading-relaxed">
            We design, furnish, and manage every home to a single hospitality standard —
            so your property performs like part of a growing brand, not a standalone listing.
          </p>
          <Button href="/partner" variant="secondary" className="mt-9 border-cream/40 text-cream hover:border-cream">
            Learn About Partnership
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
