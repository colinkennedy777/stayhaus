import { Property } from "@/data/types";
import { PropertyCard } from "@/components/PropertyCard";
import { Reveal } from "@/components/Reveal";

export function PropertyGrid({ properties }: { properties: Property[] }) {
  if (properties.length === 0) {
    return (
      <p className="py-16 text-center text-ink-soft/60">
        No stays match this location yet — check back soon as we expand.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property, i) => (
        <Reveal key={property.slug} delay={(i % 3) * 0.08}>
          <PropertyCard property={property} priority={i < 3} />
        </Reveal>
      ))}
    </div>
  );
}
