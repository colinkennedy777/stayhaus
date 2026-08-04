import Image from "next/image";

export function PageHero({
  image,
  eyebrow,
  title,
  description,
  height = "medium",
}: {
  image: string;
  eyebrow: string;
  title: string;
  description?: string;
  height?: "medium" | "tall";
}) {
  return (
    <section
      className={`relative flex items-end overflow-hidden ${
        height === "tall" ? "h-[86vh] min-h-[600px]" : "h-[62vh] min-h-[440px]"
      }`}
    >
      <Image src={image} alt={title} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/10" />
      <div className="container-page relative z-10 pb-16 sm:pb-20">
        <p className="eyebrow text-sand-200 mb-4">{eyebrow}</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-cream max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-xl text-cream/80 text-[15px] sm:text-base leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
