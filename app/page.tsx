import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PullQuoteCarousel } from "@/components/PullQuoteCarousel";
import { Differentiators } from "@/components/Differentiators";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PartnerCTA } from "@/components/PartnerCTA";
import { JsonLd } from "@/components/JsonLd";
import { getProperty } from "@/data/properties";
import { destinations, activeDestinations } from "@/data/destinations";
import { guides } from "@/data/guides";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const featuredSlugs = ["the-kenwood-loft", "the-sandbar-house", "hyde-park-flat"] as const;
const featuredProperties = featuredSlugs.map((slug) => getProperty(slug)!);
const [heroProperty, ...restFeatured] = featuredProperties;

const destinationCategories: Record<string, string> = {
  "st-petersburg": "Downtown & Waterfront",
  "gulf-beaches": "Coastal",
  tampa: "Historic & Modern",
  sarasota: "Arts District",
  naples: "Refined Coastal",
  miami: "Design-Forward",
};

const fieldNotes = testimonials.slice(1);

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          areaServed: "Florida, USA",
          sameAs: siteConfig.social.map((s) => s.href),
        }}
      />

      {/* Cover / Hero */}
      <section className="relative flex h-[100svh] min-h-[680px] items-end overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/destinations/st-petersburg.jpg"
          className="hero-video absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/home-hero.mp4" type="video/mp4" />
        </video>
        <Image
          src="/images/destinations/st-petersburg.jpg"
          alt="Sunset over the Sunshine Skyway Bridge, Tampa Bay"
          fill
          priority
          sizes="100vw"
          className="hero-video-fallback object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/35 to-ink/10" />
        <div className="container-page relative z-10 pb-16 sm:pb-20">
          <p className="text-[11px] sm:text-xs uppercase tracking-widest2 text-cream/80 font-medium">
            Florida&rsquo;s West Coast
          </p>
          <h1 className="mt-6 font-display italic font-light leading-[1.02] text-cream text-6xl sm:text-7xl md:text-8xl lg:text-9xl max-w-4xl">
            Stay somewhere that feels like yours.
          </h1>
          <p className="mt-8 text-[11px] sm:text-xs uppercase tracking-widest2 text-cream/70 font-medium">
            Thoughtfully Furnished Stays, Designed In-House
          </p>
          <p className="mt-4 font-display italic text-cream/60 text-sm sm:text-base">
            Now welcoming guests to St. Petersburg, Gulf Beaches &amp; Tampa
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/stays">Browse Stays</Button>
            <Button href="/explore" variant="secondary" light>
              Explore Florida
            </Button>
          </div>
        </div>
      </section>

      {/* No. 01 — The Philosophy */}
      <section className="container-page py-28 sm:py-36">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-8">
          <Reveal className="lg:col-span-7">
            <p className="dept-label">
              <span className="dept-number">01</span> The Philosophy
            </p>
            <p className="drop-cap mt-8 font-display text-xl sm:text-2xl leading-relaxed text-ink max-w-2xl">
              There&rsquo;s a particular kind of quiet that settles over St. Petersburg by six in
              the evening — the light easing into the color of the inside of a shell, the day&rsquo;s
              heat finally breaking over the bay. It&rsquo;s the kind of hour that makes you want to
              stay a little longer. That instinct, more than anything, is what StayHaus was built
              around.
            </p>
            <p className="mt-6 text-ink-soft/75 leading-relaxed max-w-xl">
              We design, furnish, and operate every property to a single hospitality standard —
              so wherever you land in Florida, the stay feels considered, consistent, and
              unmistakably StayHaus. Not a spare room. Not a hotel room. Somewhere that was
              actually meant for you.
            </p>
            <Button href="/about" variant="ghost" className="mt-8 px-0">
              Read Our Philosophy &rarr;
            </Button>
          </Reveal>

          <Reveal className="lg:col-span-4 lg:col-start-9 relative lg:mt-16" delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/home/intro.svg"
                alt="Interior of a StayHaus property"
                fill
                sizes="(min-width: 1024px) 32vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative -mt-4 ml-4 max-w-[240px] border border-ink/10 bg-cream p-5 sm:absolute sm:-bottom-10 sm:-left-10 sm:mt-0 sm:ml-0 sm:shadow-xl">
              <p className="caption text-ink">Historic Kenwood, St. Petersburg</p>
              <p className="mt-1 text-xs text-ink-soft/50">
                One of six interiors, each designed in-house.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* No. 02 — The Portfolio */}
      <section className="bg-sand-100">
        <div className="container-page py-24 sm:py-32">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <p className="dept-label">
                <span className="dept-number">02</span> The Portfolio
              </p>
              <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] tracking-tight text-ink max-w-xl">
                Three stays worth knowing
              </h2>
              <p className="mt-5 max-w-lg text-ink-soft/75 leading-relaxed">
                A restored 1925 bungalow loft in St. Petersburg. A beach house two blocks from the
                Gulf. A century-old flat in Tampa&rsquo;s oldest neighborhood — three ways to see
                how StayHaus works, market by market.
              </p>
            </Reveal>
            <Button href="/stays" variant="secondary" className="shrink-0">
              View All Stays
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-7">
              <FeatureStayTile property={heroProperty} large />
            </Reveal>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-5 lg:flex lg:flex-col">
              {restFeatured.map((property, i) => (
                <Reveal key={property.slug} delay={0.1 + i * 0.1} className={i === 1 ? "lg:mt-10" : undefined}>
                  <FeatureStayTile property={property} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote, breaking the page */}
      <section className="container-page py-28 sm:py-36">
        <div className="lg:pl-[16.6667%]">
          <PullQuoteCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* No. 03 — Where We Cover */}
      <section className="container-page py-24 sm:py-32">
        <Reveal>
          <p className="dept-label">
            <span className="dept-number">03</span> Where We Cover
          </p>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] tracking-tight text-ink max-w-xl">
            Three markets, and counting
          </h2>
          <p className="mt-5 max-w-lg text-ink-soft/75 leading-relaxed">
            StayHaus is currently based across St. Petersburg, the Gulf Beaches, and Tampa —
            with Sarasota, Naples, and Miami next on the list.
          </p>
        </Reveal>

        <div className="mt-16 divide-y divide-ink/10 border-t border-ink/10">
          {destinations.map((destination, i) => {
            const disabled = destination.state === "coming-soon";
            const category = destinationCategories[destination.slug];
            const content = (
              <div className={cn("relative overflow-hidden py-12", i % 2 === 1 && "lg:text-right")}>
                <p
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute -top-6 font-display italic font-light text-[9rem] sm:text-[13rem] leading-none text-ink/[0.04] select-none",
                    i % 2 === 1 ? "-right-2 sm:-right-4" : "-left-2 sm:-left-4"
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div
                  className={cn(
                    "relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10",
                    i % 2 === 1 && "lg:flex-row-reverse"
                  )}
                >
                  <div className="relative aspect-[4/3] overflow-hidden lg:w-5/12 lg:shrink-0">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className={cn(
                        "object-cover transition-transform duration-[1400ms] ease-smooth",
                        !disabled && "group-hover:scale-[1.06]",
                        disabled && "grayscale-[35%] opacity-80"
                      )}
                    />
                  </div>
                  <div className={cn("lg:w-6/12", i % 2 === 1 && "lg:ml-auto")}>
                    {category && (
                      <p
                        className={cn(
                          "text-[10px] uppercase tracking-widest2 text-powder-deep font-medium",
                          i % 2 === 1 && "lg:text-right"
                        )}
                      >
                        {category}
                      </p>
                    )}
                    <div className={cn("mt-3 flex items-center gap-3", i % 2 === 1 && "lg:justify-end")}>
                      <h3 className="font-display text-3xl sm:text-4xl text-ink">
                        <span
                          className={cn(
                            !disabled &&
                              "bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] transition-[background-size] duration-500 ease-smooth group-hover:bg-[length:100%_1px]"
                          )}
                        >
                          {destination.name}
                        </span>
                      </h3>
                      {disabled && (
                        <span className="rounded-full border border-ink/20 px-3 py-1 text-[10px] uppercase tracking-widest2 text-ink-soft/60">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <p className={cn("mt-3 max-w-md text-ink-soft/70 leading-relaxed", i % 2 === 1 && "lg:ml-auto")}>
                      {destination.tagline} — {destination.description}
                    </p>
                  </div>
                </div>
              </div>
            );

            return (
              <Reveal key={destination.slug} delay={(i % 3) * 0.06}>
                {disabled ? (
                  content
                ) : (
                  <Link href={`/stays?location=${destination.slug}`} className="group block">
                    {content}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* No. 04 — The Standard */}
      <section className="relative overflow-hidden bg-powder-deep">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-powder/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-1/3 h-[24rem] w-[24rem] rounded-full bg-clay-light/10 blur-3xl"
        />
        <div className="container-page relative py-24 sm:py-32">
          <Reveal>
            <p className="dept-label">
              <span className="dept-number text-cream">04</span>
              <span className="text-cream/60">The Standard</span>
            </p>
            <h2 className="mt-6 mb-16 font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] tracking-tight text-cream max-w-xl">
              What makes a stay a StayHaus
            </h2>
          </Reveal>
          <Differentiators />
        </div>
      </section>

      <TestimonialsSection testimonials={fieldNotes} />

      {/* No. 06 — Explore Florida */}
      <section className="container-page py-24 sm:py-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="dept-label">
              <span className="dept-number">06</span> Explore Florida
            </p>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] tracking-tight text-ink max-w-xl">
              Guides made by people who live here
            </h2>
            <p className="mt-5 max-w-lg text-ink-soft/75 leading-relaxed">
              Restaurants, coffee, beaches, and neighborhoods worth knowing — written by our
              team, market by market.
            </p>
          </Reveal>
          <Button href="/explore" variant="secondary" className="shrink-0">
            Visit Explore
          </Button>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {guides.map((guide, i) => {
            const destination = activeDestinations.find((d) => d.slug === guide.destinationSlug);
            if (!destination) return null;
            return (
              <Reveal key={guide.destinationSlug} delay={i * 0.08} className={i === 1 ? "sm:mt-10" : undefined}>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/5 to-ink/40" />
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] uppercase tracking-widest2 text-cream/80 font-medium">
                        StayHaus Explore
                      </p>
                      <p className="font-display italic text-cream/70 text-sm">
                        No. {String(i + 1).padStart(2, "0")}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest2 text-powder-light font-medium">
                        {destination.region}
                      </p>
                      <h3 className="mt-2 font-display text-3xl sm:text-4xl leading-[1.05] text-cream">
                        {destination.name}
                      </h3>
                      <p className="mt-3 text-cream/75 text-sm leading-relaxed line-clamp-2">{guide.intro}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <PartnerCTA />
    </>
  );
}

function FeatureStayTile({ property, large = false }: { property: NonNullable<ReturnType<typeof getProperty>>; large?: boolean }) {
  return (
    <Link href={`/stays/${property.slug}`} className="group block">
      <div className={cn("relative overflow-hidden", large ? "aspect-[4/5]" : "aspect-[4/3]")}>
        <Image
          src={property.heroImage}
          alt={property.name}
          fill
          sizes={large ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 25vw, 100vw"}
          className="object-cover transition-transform duration-[1400ms] ease-smooth group-hover:scale-[1.06]"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <p className={cn("font-display text-ink", large ? "text-2xl sm:text-3xl" : "text-xl")}>
            {property.name}
          </p>
          <p className="caption mt-1">{property.neighborhood}</p>
        </div>
        <p className="whitespace-nowrap text-sm text-ink-soft/60">from ${property.priceFrom}/night</p>
      </div>
    </Link>
  );
}
