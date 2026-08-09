import Image from "next/image";

export function MagazineHero({
  image,
  alt,
  eyebrow,
  title,
  description,
  objectPosition = "50% 50%",
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description?: string;
  objectPosition?: string;
}) {
  return (
    <section className="relative h-[110vh] max-h-[1300px] min-h-[720px] w-full overflow-hidden sm:h-[120vh] lg:h-[130vh]">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-cream via-cream/70 to-transparent" />
      <div className="container-page relative z-10 pt-32 sm:pt-40">
        <p className="eyebrow eyebrow-light mb-5">{eyebrow}</p>
        <h1 className="font-display italic font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-cream max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-7 max-w-xl text-cream/85 text-[15px] sm:text-base leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
