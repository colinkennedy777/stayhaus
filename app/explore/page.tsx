import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MagazineHero } from "@/components/MagazineHero";
import { Reveal } from "@/components/Reveal";
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
      <MagazineHero
        image="/images/explore/hero.jpg"
        alt="Reading the morning paper, StayHaus style"
        eyebrow="Explore Florida"
        title="Florida, as told by the people who stay here."
        description="Editorial guides to every StayHaus market — restaurants, coffee, beaches, and the neighborhoods worth knowing. Written by our team, updated as we grow."
        objectPosition="50% 15%"
      />

      {/* No. 01 — The Guides */}
      <section className="container-page py-24 sm:py-32">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="dept-label">
                <span className="dept-number">01</span> The Guides
              </p>
              <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] tracking-tight text-ink max-w-xl">
                Pick up an issue
              </h2>
            </div>
            <p className="max-w-sm text-ink-soft/75 leading-relaxed">
              Every StayHaus market gets its own issue, written by the team that actually spends
              time there — not pulled from a listicle. Click a cover to open it.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {guides.map((guide, i) => {
            const destination = activeDestinations.find((d) => d.slug === guide.destinationSlug);
            if (!destination) return null;
            return (
              <Reveal
                key={guide.destinationSlug}
                delay={i * 0.08}
                className={i === 1 ? "sm:mt-10" : undefined}
              >
                <Link
                  href={`/explore/${guide.destinationSlug}`}
                  className="group relative block aspect-[3/4] overflow-hidden shadow-lg shadow-ink/10 transition-all duration-500 ease-smooth hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/25"
                >
                  <Image
                    src={guide.heroImage}
                    alt={destination.name}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] ease-smooth group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/55 via-40% to-ink/10" />
                  <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7">
                    <div className="flex items-center justify-between">
                      <p className="font-display italic text-cream text-lg sm:text-xl">StayHaus Explore</p>
                      <p className="font-display italic text-cream/70 text-sm">
                        No. {String(i + 1).padStart(2, "0")}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest2 text-powder-light font-medium">
                        {destination.region}
                      </p>
                      <h3 className="mt-2 font-display text-4xl sm:text-5xl leading-[1.02] text-cream">
                        {destination.name}
                      </h3>
                      <p className="mt-4 text-cream/80 text-sm leading-relaxed line-clamp-2">{guide.intro}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-cream/90 font-medium">
                        Open Issue
                        <span aria-hidden className="transition-transform duration-500 ease-smooth group-hover:translate-x-1">
                          &rarr;
                        </span>
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
