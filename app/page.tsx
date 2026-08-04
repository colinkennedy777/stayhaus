import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PropertyGrid } from "@/components/PropertyGrid";
import { DestinationCard } from "@/components/DestinationCard";
import { Differentiators } from "@/components/Differentiators";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PartnerCTA } from "@/components/PartnerCTA";
import { JsonLd } from "@/components/JsonLd";
import { properties } from "@/data/properties";
import { activeDestinations, destinations } from "@/data/destinations";
import { guides } from "@/data/guides";
import { siteConfig } from "@/lib/site";

const featuredProperties = properties.slice(0, 3);

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
      {/* Hero */}
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
          <p className="eyebrow eyebrow-light mb-6">Florida&rsquo;s West Coast &middot; Expanding Statewide</p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight text-cream max-w-3xl">
            Stay somewhere designed to feel like it&rsquo;s yours.
          </h1>
          <p className="mt-7 max-w-lg text-cream/80 text-[15px] sm:text-base leading-relaxed">
            StayHaus is a collection of thoughtfully designed, fully furnished homes in Florida&rsquo;s
            most desirable neighborhoods — built for the way people actually want to travel.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/stays">Browse Stays</Button>
            <Button href="/explore" variant="secondary" className="border-cream/40 text-cream hover:border-cream">
              Explore Florida
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container-page py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10 items-center">
          <Reveal className="lg:col-span-5 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/home/intro.svg"
                alt="Interior of a StayHaus property"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:order-1" delay={0.1}>
            <p className="eyebrow mb-5">The StayHaus Standard</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.12] tracking-tight text-ink">
              Not a rental. Not a hotel.
              <br />A new kind of stay.
            </h2>
            <p className="mt-7 text-ink-soft/75 leading-relaxed max-w-md">
              We design, furnish, and operate every StayHaus property to a single hospitality
              standard — so wherever you stay, the experience feels consistent, considered, and
              distinctly StayHaus.
            </p>
            <Button href="/about" variant="ghost" className="mt-8 px-0">
              Our Philosophy &rarr;
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="bg-sand-100">
        <div className="container-page py-24 sm:py-32">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <SectionHeading eyebrow="Featured Stays" title="A closer look at the portfolio" />
            <Button href="/stays" variant="secondary" className="shrink-0">
              View All Stays
            </Button>
          </div>
          <PropertyGrid properties={featuredProperties} />
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="container-page py-24 sm:py-32">
        <SectionHeading
          eyebrow="Where We Stay"
          title="Florida's West Coast, and beyond"
          description="StayHaus is currently based across four West Coast markets, with new Florida destinations joining the portfolio throughout the year."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {destinations.map((destination, i) => (
            <Reveal key={destination.slug} delay={(i % 4) * 0.06}>
              <DestinationCard
                destination={destination}
                href={destination.state === "active" ? `/stays?location=${destination.slug}` : "#"}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-ink">
        <div className="container-page py-24 sm:py-32">
          <SectionHeading
            eyebrow="Guest Experience"
            title="What makes a stay a StayHaus"
            light
            className="mb-16"
          />
          <Differentiators />
        </div>
      </section>

      <TestimonialsSection />

      {/* Explore Florida */}
      <section className="container-page py-24 sm:py-32">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Explore Florida"
            title="Guides made by people who live here"
            description="Restaurants, coffee, beaches, and neighborhoods worth knowing in every StayHaus market."
          />
          <Button href="/explore" variant="secondary" className="shrink-0">
            Visit Explore
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {guides.slice(0, 2).map((guide, i) => {
            const destination = activeDestinations.find((d) => d.slug === guide.destinationSlug);
            if (!destination) return null;
            return (
              <Reveal key={guide.destinationSlug} delay={i * 0.1}>
                <Link href={`/explore/${guide.destinationSlug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={guide.heroImage}
                      alt={destination.name}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1400ms] ease-smooth group-hover:scale-[1.05]"
                    />
                  </div>
                  <p className="eyebrow mt-5">{destination.name}</p>
                  <h3 className="mt-2 font-display text-xl text-ink">{guide.intro.split(" — ")[0]}</h3>
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
