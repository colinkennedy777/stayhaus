"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Property, Destination } from "@/data/types";
import { PropertyGrid } from "@/components/PropertyGrid";
import { cn } from "@/lib/utils";

export function StaysBrowser({
  properties,
  activeDestinations,
}: {
  properties: Property[];
  activeDestinations: Destination[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initial = searchParams.get("location") ?? "all";
  const [location, setLocation] = useState(initial);

  const filtered = useMemo(() => {
    if (location === "all") return properties;
    return properties.filter((p) => p.destinationSlug === location);
  }, [location, properties]);

  function selectLocation(slug: string) {
    setLocation(slug);
    const params = new URLSearchParams(searchParams.toString());
    if (slug === "all") {
      params.delete("location");
    } else {
      params.set("location", slug);
    }
    router.replace(`/stays${params.toString() ? `?${params.toString()}` : ""}`, { scroll: false });
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-3 border-b border-ink/10 pb-8">
        <FilterPill active={location === "all"} onClick={() => selectLocation("all")}>
          All Locations
        </FilterPill>
        {activeDestinations.map((d) => (
          <FilterPill key={d.slug} active={location === d.slug} onClick={() => selectLocation(d.slug)}>
            {d.name}
          </FilterPill>
        ))}
      </div>

      <p className="mt-6 mb-10 text-xs uppercase tracking-widest2 text-ink-soft/50">
        {filtered.length} {filtered.length === 1 ? "stay" : "stays"}
        {location !== "all" ? ` in ${activeDestinations.find((d) => d.slug === location)?.name}` : ""}
      </p>

      <PropertyGrid properties={filtered} />
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border px-5 py-2 text-[13px] uppercase tracking-widest2 transition-colors duration-300",
        active ? "border-ink bg-ink text-cream" : "border-ink/20 text-ink-soft/70 hover:border-ink/60"
      )}
    >
      {children}
    </button>
  );
}
