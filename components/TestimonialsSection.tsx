import { Testimonial } from "@/data/types";
import { Reveal } from "@/components/Reveal";

const layouts = [
  { span: "sm:col-span-7", text: "text-2xl sm:text-3xl" },
  { span: "sm:col-span-5 sm:mt-20", text: "text-xl" },
  { span: "sm:col-span-5", text: "text-xl" },
  { span: "sm:col-span-7 sm:mt-10", text: "text-xl sm:text-2xl" },
];

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="bg-sand-100">
      <div className="container-page py-24 sm:py-32">
        <p className="dept-label">
          <span className="dept-number">05</span> Field Notes
        </p>
        <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] tracking-tight text-ink max-w-xl">
          What staying with us feels like
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-12">
          {testimonials.map((t, i) => {
            const layout = layouts[i % layouts.length];
            return (
              <Reveal key={t.author} delay={(i % 2) * 0.1} className={layout.span}>
                <blockquote className="border-l-2 border-clay-light pl-6">
                  <p className={`font-display leading-snug text-ink ${layout.text}`}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-5 text-xs uppercase tracking-widest2 text-ink-soft/60">
                    {t.author} &middot; {t.location}
                  </footer>
                </blockquote>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
