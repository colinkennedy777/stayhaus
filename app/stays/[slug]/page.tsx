import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PropertyGrid } from "@/components/PropertyGrid";
import { JsonLd } from "@/components/JsonLd";
import { properties, getProperty, getPropertiesByDestination } from "@/data/properties";
import { getDestination } from "@/data/destinations";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) return {};
  return {
    title: `${property.name} — ${property.neighborhood}`,
    description: property.tagline,
    openGraph: {
      images: [{ url: property.heroImage }],
    },
  };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  const destination = getDestination(property.destinationSlug);
  const moreStays = getPropertiesByDestination(property.destinationSlug)
    .filter((p) => p.slug !== property.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: property.name,
          description: property.tagline,
          image: `${siteConfig.url}${property.heroImage}`,
          address: {
            "@type": "PostalAddress",
            addressLocality: destination?.name,
            addressRegion: "FL",
            addressCountry: "US",
          },
          amenityFeature: property.amenities.map((a) => ({
            "@type": "LocationFeatureSpecification",
            name: a,
          })),
          numberOfRooms: property.bedrooms,
          priceRange: `From $${property.priceFrom}/night`,
        }}
      />
      <section className="relative flex h-[78vh] min-h-[520px] items-end overflow-hidden">
        <Image
          src={property.heroImage}
          alt={property.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-ink/5" />
        <div className="container-page relative z-10 pb-16 sm:pb-20">
          <Link href={`/stays?location=${property.destinationSlug}`} className="eyebrow text-sand-200 mb-4 inline-block link-underline">
            {destination?.name}
          </Link>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-cream max-w-2xl">
            {property.name}
          </h1>
          <p className="mt-4 text-cream/80 max-w-lg">{property.neighborhood}</p>
        </div>
      </section>

      <section className="container-page py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap gap-3">
              {property.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-ink/15 px-4 py-1.5 text-xs uppercase tracking-widest2 text-ink-soft/70">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 border-y border-ink/10 py-6">
              <Stat label="Bedrooms" value={property.bedrooms} />
              <Stat label="Bathrooms" value={property.bathrooms} />
              <Stat label="Guests" value={property.maxGuests} />
            </div>

            <Reveal className="mt-10">
              <h2 className="eyebrow mb-4">The Space</h2>
              <p className="text-ink-soft/80 leading-relaxed max-w-2xl">{property.description}</p>
            </Reveal>

            <Reveal className="mt-16">
              <h2 className="eyebrow mb-6">Gallery</h2>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {property.gallery.map((img, i) => (
                  <div
                    key={img}
                    className={`relative overflow-hidden ${i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[4/3]"}`}
                  >
                    <Image
                      src={img}
                      alt={`${property.name} photo ${i + 1}`}
                      fill
                      sizes={i === 0 ? "100vw" : "(min-width: 640px) 50vw, 100vw"}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-16">
              <h2 className="eyebrow mb-6">Amenities</h2>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
                {property.amenities.map((a) => (
                  <li key={a} className="text-[15px] text-ink-soft/80 border-b border-ink/10 pb-3">
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-16">
              <h2 className="eyebrow mb-4">The Neighborhood</h2>
              <p className="text-ink-soft/80 leading-relaxed max-w-2xl">{property.neighborhoodNotes}</p>
              {destination && (
                <Link href={`/explore/${destination.slug}`} className="mt-4 inline-block text-sm text-clay link-underline">
                  Read the {destination.name} guide &rarr;
                </Link>
              )}
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28 border border-ink/10 p-8">
              <p className="text-sm text-ink-soft/60">Starting from</p>
              <p className="mt-1 font-display text-3xl text-ink">
                ${property.priceFrom} <span className="text-base font-sans text-ink-soft/60">/ night</span>
              </p>
              <p className="mt-5 text-sm text-ink-soft/70 leading-relaxed">{property.availability}</p>
              <Button href={`/contact?stay=${property.slug}`} className="mt-7 w-full">
                Check Availability
              </Button>
              <p className="mt-4 text-xs text-ink-soft/50 text-center">
                Or email {siteConfig.email} referencing this stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {moreStays.length > 0 && (
        <section className="bg-sand-100">
          <div className="container-page py-20 sm:py-28">
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-12">
              More stays in {destination?.name}
            </h2>
            <PropertyGrid properties={moreStays} />
          </div>
        </section>
      )}
    </>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <p className="font-display text-2xl text-ink">{value}</p>
      <p className="text-xs uppercase tracking-widest2 text-ink-soft/50">{label}</p>
    </div>
  );
}
