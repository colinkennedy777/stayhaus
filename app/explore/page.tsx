import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { guides } from "@/data/guides";
import { activeDestinations, comingSoonDestinations } from "@/data/destinations";
import { cn } from "@/lib/utils";

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

      {/* No. 01 — The Guides */}
      <section className="container-page py-24 sm:py-32">
        <Reveal>
          <p className="dept-label">
            <span className="dept-number">01</span> The Guides
          </p>
          <p className="drop-cap mt-8 max-w-2xl font-display text-xl sm:text-2xl leading-[1.6] text-ink">
            Every StayHaus market gets its own guide, written by the team that actually spends
            time there — not pulled from a listicle. Restaurants worth a reservation, coffee
            worth the detour, and the neighborhoods that make each city worth staying in.
          </p>
        </Reveal>

        <div className="mt-20 divide-y divide-ink/10 border-t border-ink/10 sm:mt-24">
          {guides.map((guide, i) => {
            const destination = activeDestinations.find((d) => d.slug === guide.destinationSlug);
            if (!destination) return null;
            const reversed = i % 2 === 1;
            return (
              <Reveal key={guide.destinationSlug} delay={i * 0.06}>
                <Link
                  href={`/explore/${guide.destinationSlug}`}
                  className="group relative block overflow-hidden py-14 sm:py-20"
                >
                  <p
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute -top-4 font-display italic font-light text-[10rem] sm:text-[14rem] leading-none text-ink/[0.04] select-none",
                      reversed ? "-right-2 sm:-right-4" : "-left-2 sm:-left-4"
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div
                    className={cn(
                      "relative flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14",
                      reversed && "lg:flex-row-reverse"
                    )}
                  >
                    <div className="lg:w-7/12 lg:shrink-0">
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
                    <div className="lg:w-5/12">
                      <p className="text-[10px] uppercase tracking-widest2 text-powder-deep font-medium">
                        {destination.region}
                      </p>
                      <h2 className="mt-3 font-display italic font-light text-4xl sm:text-5xl leading-[1.05] text-ink">
                        <span className="bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] transition-[background-size] duration-500 ease-smooth group-hover:bg-[length:100%_1px]">
                          {destination.name}
                        </span>
                      </h2>
                      <p className="mt-6 max-w-md text-ink-soft/75 leading-relaxed">{guide.intro}</p>
                      <span className="mt-7 inline-block text-sm text-clay link-underline">
                        Read the guide &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* No. 02 — On the Horizon */}
      {comingSoonDestinations.length > 0 && (
        <section className="bg-sand-100">
          <div className="container-page py-20 sm:py-28">
            <Reveal>
              <p className="dept-label">
                <span className="dept-number">02</span> On the Horizon
              </p>
              <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] tracking-tight text-ink max-w-xl">
                More Florida guides, coming soon
              </h2>
              <p className="mt-5 max-w-lg text-ink-soft/75 leading-relaxed">
                As StayHaus expands statewide, we&rsquo;re building new city guides alongside
                every new market.
              </p>
            </Reveal>
            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {comingSoonDestinations.map((d, i) => (
                <Reveal key={d.slug} delay={i * 0.06}>
                  <div className="group relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={d.image}
                      alt={d.name}
                      fill
                      sizes="(min-width: 640px) 33vw, 50vw"
                      className="object-cover grayscale-[35%] opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-cream/50 bg-ink/40 px-3 py-1 text-[9px] uppercase tracking-widest2 text-cream backdrop-blur-sm">
                      Coming Soon
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="font-display italic text-2xl text-cream">{d.name}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-widest2 text-cream/60">{d.region}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
