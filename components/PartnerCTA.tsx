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
      <div className="container-page relative z-10 py-28 sm:py-40">
        <Reveal className="max-w-2xl">
          <p className="dept-label">
            <span className="dept-number text-cream">07</span>
            <span className="text-cream/60">The Invitation</span>
          </p>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-cream">
            Own a property in Florida?
            <br />
            <span className="italic font-light text-powder">Partner with StayHaus.</span>
          </h2>
          <p className="mt-7 text-cream/75 leading-relaxed max-w-lg">
            We design, furnish, and manage every home to a single hospitality standard —
            so your property performs like part of a growing brand, not a standalone listing.
          </p>
          <Button href="/partner" variant="secondary" light className="mt-9">
            Learn About Partnership
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
