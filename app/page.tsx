import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PullQuote } from "@/components/PullQuote";
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

const pullQuote = testimonials[0];
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
      <section className="relative flex h-[100svh] min-h-[640px] items-end overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/10" />
        <div className="container-page relative z-10 pb-20 sm:pb-24">
          <p className="eyebrow eyebrow-light mb-6">Florida&rsquo;s West Coast &mdash; Vol. I</p>
          <h1 className="font-display leading-[0.98] tracking-tight text-cream max-w-3xl">
            <span className="block text-5xl sm:text-6xl md:text-7xl">Stay somewhere</span>
            <span className="block italic font-light text-5xl sm:text-6xl md:text-7xl text-powder mt-1">
              designed to feel like it&rsquo;s yours.
            </span>
          </h1>
          <p className="mt-8 max-w-lg font-display italic text-lg sm:text-xl text-cream/85 leading-snug">
            A field guide to easy, elevated living on the Gulf Coast — thoughtfully furnished
            homes in the neighborhoods worth waking up in.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex flex-wrap gap-4">
              <Button href="/stays">Browse Stays</Button>
              <Button href="/explore" variant="secondary" light>
                Explore Florida
              </Button>
            </div>
            <p className="text-[11px] uppercase tracking-widest2 text-cream/50">
              Curated by the StayHaus Team
            </p>
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
          <PullQuote quote={pullQuote.quote} attribution={`${pullQuote.author} — ${pullQuote.location.replace("Stayed in ", "")}`} />
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
            const content = (
              <div
                className={cn(
                  "flex flex-col gap-6 py-10 lg:flex-row lg:items-center lg:gap-10",
                  i % 2 === 1 && "lg:flex-row-reverse"
                )}
              >
                <p className="font-display italic font-light text-4xl sm:text-5xl text-powder-deep lg:w-1/12">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div className="relative aspect-[4/3] overflow-hidden lg:w-4/12 lg:shrink-0">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className={cn(
                      "object-cover transition-transform duration-[1400ms] ease-smooth",
                      !disabled && "group-hover:scale-[1.05]",
                      disabled && "grayscale-[35%] opacity-80"
                    )}
                  />
                </div>
                <div className={cn("lg:w-7/12", i % 2 === 1 && "lg:text-right")}>
                  <div className={cn("flex items-center gap-3", i % 2 === 1 && "lg:justify-end")}>
                    <h3 className="font-display text-2xl sm:text-3xl text-ink">{destination.name}</h3>
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
      <section className="bg-ink">
        <div className="container-page py-24 sm:py-32">
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
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {guides.slice(0, 2).map((guide, i) => {
            const destination = activeDestinations.find((d) => d.slug === guide.destinationSlug);
            if (!destination) return null;
            return (
              <Reveal
                key={guide.destinationSlug}
                delay={i * 0.1}
                className={cn("lg:col-span-7", i === 1 && "lg:col-span-6 lg:col-start-7 lg:mt-16")}
              >
                <Link href={`/explore/${guide.destinationSlug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={guide.heroImage}
                      alt={destination.name}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1400ms] ease-smooth group-hover:scale-[1.05]"
                    />
                  </div>
                  <p className="caption mt-5">{destination.region}</p>
                  <h3 className="mt-1 font-display text-2xl text-ink">{destination.name}</h3>
                  <p className="mt-2 max-w-md text-ink-soft/70 leading-relaxed">{guide.intro}</p>
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
