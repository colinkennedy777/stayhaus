import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

export function PullQuote({
  quote,
  attribution,
  align = "left",
  light = false,
}: {
  quote: string;
  attribution?: string;
  align?: "left" | "right";
  light?: boolean;
}) {
  return (
    <Reveal
      className={cn(
        "relative max-w-3xl",
        align === "right" ? "ml-auto text-right" : ""
      )}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none block font-display text-8xl sm:text-9xl leading-none",
          light ? "text-cream/15" : "text-powder/50",
          align === "right" ? "text-right" : ""
        )}
      >
        &rdquo;
      </span>
      <p
        className={cn(
          "-mt-10 sm:-mt-14 font-display italic font-light text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.25]",
          light ? "text-cream" : "text-ink"
        )}
      >
        {quote}
      </p>
      {attribution && (
        <p className={cn("mt-6 dept-label", align === "right" && "justify-end")}>
          <span className={light ? "text-cream/50" : undefined}>{attribution}</span>
        </p>
      )}
    </Reveal>
  );
}
