import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-cream hover:bg-powder hover:text-ink",
  secondary: "border border-ink/25 text-ink hover:border-ink",
  ghost: "text-ink hover:text-clay",
};

export function Button({
  href,
  children,
  variant = "primary",
  light = false,
  className,
  onClick,
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  /** For a secondary button placed over a dark or photographic background.
   * Uses a dedicated !important class rather than a utility className
   * override — same-layer utilities (e.g. border-ink/25 vs border-cream/40)
   * don't reliably lose to source order, so a plain override can silently
   * render invisible depending on which utility Tailwind emits second. */
  light?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const base = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[13px] uppercase tracking-widest2 font-medium transition-all duration-300 ease-smooth",
    variants[variant],
    variant === "secondary" && light && "btn-on-dark",
    className
  );

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
