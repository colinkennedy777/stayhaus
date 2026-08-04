import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function TestimonialsSection() {
  return (
    <section className="bg-sand-100">
      <div className="container-page py-24 sm:py-32">
        <SectionHeading eyebrow="Guest Notes" title="What staying with us feels like" align="center" className="mx-auto" />
        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={(i % 2) * 0.1}>
              <blockquote className="border-l-2 border-clay-light pl-6">
                <p className="font-display text-xl sm:text-2xl leading-snug text-ink">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-5 text-xs uppercase tracking-widest2 text-ink-soft/60">
                  {t.author} &middot; {t.location}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
