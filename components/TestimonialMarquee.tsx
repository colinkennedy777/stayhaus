import { Testimonial } from "@/data/types";

export function TestimonialMarquee({ testimonials }: { testimonials: Testimonial[] }) {
  const track = [...testimonials, ...testimonials];

  return (
    <div className="group relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-cream to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-cream to-transparent sm:w-32" />
      <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused] sm:gap-14">
        {track.map((t, i) => (
          <div key={`${t.author}-${i}`} className="w-[300px] shrink-0 sm:w-[400px]">
            <span aria-hidden className="block font-display text-6xl leading-none text-powder/50">
              &rdquo;
            </span>
            <p className="-mt-5 font-display italic font-light text-xl leading-[1.4] text-ink sm:text-2xl line-clamp-4">
              {t.quote}
            </p>
            <p className="mt-5 dept-label">
              {t.author} &mdash; {t.location.replace("Stayed in ", "")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
