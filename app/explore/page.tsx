import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { guides } from "@/data/guides";
import { activeDestinations, comingSoonDestinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Explore Florida",
  description:
    "StayHaus-curated guides to restaurants, coffee, beaches, and neighborhoods across Florida's most desirable destinations.",
};

export default function ExplorePage() {
  return (
    <>
      <PageHero
        image="/images/explore/hero.svg"
        eyebrow="Explore Florida"
        title="Florida, as told by the people who stay here."
        description="Editorial guides to every StayHaus market — restaurants, coffee, beaches, and the neighborhoods worth knowing. Written by our team, updated as we grow."
      />

      <section className="container-page py-20 sm:py-28">
        <div className="space-y-20 sm:space-y-28">
          {guides.map((guide, i) => {
            const destination = activeDestinations.find((d) => d.slug === guide.destinationSlug);
            if (!destination) return null;
            const reversed = i % 2 === 1;
            return (
              <Reveal key={guide.destinationSlug}>
                <Link
                  href={`/explore/${guide.destinationSlug}`}
                  className="group grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14"
                >
                  <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={guide.heroImage}
                        alt={destination.name}
                        fill
                        sizes="(min-width: 1024px) 60vw, 100vw"
                        className="object-cover transition-transform duration-[1400ms] ease-smooth group-hover:scale-[1.05]"
                      />
                    </div>
                  </div>
                  <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
                    <p className="eyebrow mb-4">{destination.region}</p>
                    <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
                      {destination.name}
                    </h2>
                    <p className="mt-5 text-ink-soft/75 leading-relaxed max-w-md">{guide.intro}</p>
                    <span className="mt-6 inline-block text-sm text-clay link-underline">
                      Read the guide &rarr;
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {comingSoonDestinations.length > 0 && (
        <section className="bg-sand-100">
          <div className="container-page py-20 sm:py-28">
            <SectionHeading
              eyebrow="On the Horizon"
              title="More Florida guides, coming soon"
              description="As StayHaus expands statewide, we're building new city guides alongside every new market."
            />
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {comingSoonDestinations.map((d) => (
                <div key={d.slug} className="relative aspect-[4/5] overflow-hidden">
                  <Image src={d.image} alt={d.name} fill sizes="33vw" className="object-cover grayscale-[35%] opacity-80" />
                  <div className="absolute inset-0 bg-ink/40" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display text-lg text-cream">{d.name}</p>
                    <p className="text-xs uppercase tracking-widest2 text-cream/70 mt-1">Coming Soon</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
