import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/data/types";
import { cn } from "@/lib/utils";

export function DestinationCard({
  destination,
  href,
  size = "default",
}: {
  destination: Destination;
  href: string;
  size?: "default" | "large";
}) {
  const disabled = destination.state === "coming-soon";

  const content = (
    <>
      <div
        className={cn(
          "relative overflow-hidden bg-sand-100",
          size === "large" ? "aspect-[4/5] sm:aspect-[16/10]" : "aspect-[4/5]"
        )}
      >
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes={size === "large" ? "100vw" : "(min-width: 1024px) 25vw, 50vw"}
          className={cn(
            "object-cover transition-transform duration-[1400ms] ease-smooth",
            !disabled && "group-hover:scale-[1.06]",
            disabled && "grayscale-[35%] opacity-80"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent" />
        {disabled && (
          <span className="absolute right-4 top-4 rounded-full border border-cream/50 px-3 py-1 text-[10px] uppercase tracking-widest2 text-cream">
            Coming Soon
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="font-display text-2xl text-cream">{destination.name}</h3>
          <p className="mt-1 text-sm text-cream/75">{destination.tagline}</p>
        </div>
      </div>
    </>
  );

  if (disabled) {
    return <div className="block cursor-default">{content}</div>;
  }

  return (
    <Link href={href} className="group block">
      {content}
    </Link>
  );
}
