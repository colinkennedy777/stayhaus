import Image from "next/image";
import Link from "next/link";
import { Property } from "@/data/types";
import { getDestination } from "@/data/destinations";

export function PropertyCard({ property, priority = false }: { property: Property; priority?: boolean }) {
  const destination = getDestination(property.destinationSlug);

  return (
    <Link href={`/stays/${property.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand-100">
        <Image
          src={property.heroImage}
          alt={property.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1400ms] ease-smooth group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[11px] uppercase tracking-widest2 text-ink">
          {destination?.name}
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl text-ink">{property.name}</h3>
          <p className="mt-1 text-sm text-ink-soft/70">{property.neighborhood}</p>
        </div>
        <p className="whitespace-nowrap text-sm text-ink-soft/70">
          from <span className="text-ink font-medium">${property.priceFrom}</span>/night
        </p>
      </div>
      <p className="mt-3 text-xs uppercase tracking-widest2 text-ink-soft/50">
        {property.bedrooms} BD &middot; {property.bathrooms} BA &middot; {property.maxGuests} Guests
      </p>
    </Link>
  );
}
