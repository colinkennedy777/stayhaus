import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-4", light && "eyebrow-light")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] tracking-tight",
          light ? "text-cream" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-[15px] sm:text-base leading-relaxed", light ? "text-cream/75" : "text-ink-soft/80")}>
          {description}
        </p>
      )}
    </div>
  );
}
