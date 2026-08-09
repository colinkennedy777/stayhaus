import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "StayHaus is building a statewide hospitality brand around thoughtfully designed, fully furnished stays across Florida.",
};

const stats = [
  { value: "3", label: "Florida Markets" },
  { value: "6", label: "Properties & Growing" },
  { value: "100%", label: "Design-Reviewed Homes" },
  { value: "2026", label: "Founded" },
];

const standards = [
  {
    index: "01",
    title: "Design Standards",
    description:
      "Every property is furnished to a defined material and design palette — no mismatched decor, no leftover furniture from a previous life.",
  },
  {
    index: "02",
    title: "Hospitality Standards",
    description:
      "The same check-in process, the same communication, the same attentiveness — whether it's your first stay or your fifth.",
  },
  {
    index: "03",
    title: "Location Standards",
    description:
      "We pass on far more properties than we accept. If it isn't centrally located and genuinely desirable, it isn't a StayHaus.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/destinations/gulf-beaches.jpg"
        eyebrow="About StayHaus"
        title="A hospitality brand, built one home at a time."
        description="We started on Florida's West Coast with a simple belief: a short-term stay should feel as considered as a boutique hotel — never generic, never an afterthought."
      />

      {/* No. 01 — How We Started */}
      <section className="container-page py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/home/philosophy.jpg"
                alt="Colin James Kennedy, CEO and Founder of StayHaus FL"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <p className="dept-label">
              <span className="dept-number">01</span> How We Started
            </p>
            <h2 className="mt-6 font-display italic font-light text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-ink">
              We couldn&rsquo;t find a stay that felt like it belonged to a brand.
            </h2>
            <p className="mt-7 text-lg leading-[1.75] text-ink-soft/75 max-w-md">
              Every short-term rental we booked felt like someone else&rsquo;s spare property —
              inconsistent, impersonal, and rarely in the neighborhoods we actually wanted to be
              in. StayHaus began with a single home in St. Petersburg, designed and run the way
              we wished every stay could be.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10 items-center sm:mt-28">
          <Reveal className="lg:col-span-6 lg:order-2" delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/destinations/tampa.jpg"
                alt="Tampa skyline, a future StayHaus market"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:order-1">
            <p className="dept-label">
              <span className="dept-number">02</span> Where We&rsquo;re Going
            </p>
            <h2 className="mt-6 font-display italic font-light text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-ink">
              A recognizable name in Florida hospitality — not just another host.
            </h2>
            <p className="mt-7 text-lg leading-[1.75] text-ink-soft/75 max-w-md">
              We&rsquo;re expanding deliberately, market by market, across Florida. Every new
              destination is held to the same standard as the first — because the goal isn&rsquo;t
              more properties. It&rsquo;s a brand worth trusting, wherever you find it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* No. 03 — By the Numbers */}
      <section className="bg-ink">
        <div className="container-page py-20 sm:py-24">
          <Reveal>
            <p className="dept-label">
              <span className="dept-number text-cream">03</span>
              <span className="text-cream/60">By the Numbers</span>
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-cream/15 bg-cream/15 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="h-full bg-ink px-6 py-10 sm:px-8">
                  <p className="font-display italic font-light text-4xl sm:text-5xl text-powder-light">{s.value}</p>
                  <p className="mt-3 text-[11px] uppercase tracking-widest2 text-cream/60">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* No. 04 — The Standard */}
      <section className="container-page py-24 sm:py-32">
        <Reveal>
          <p className="dept-label">
            <span className="dept-number">04</span> The Standard
          </p>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] tracking-tight text-ink max-w-xl">
            Consistency is the whole point
          </h2>
          <p className="mt-5 max-w-lg text-ink-soft/75 leading-relaxed">
            A guest should never be able to tell which market they&rsquo;re in by the quality of
            the stay — only by the view.
          </p>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 divide-y divide-ink/10 border-t border-ink/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {standards.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="h-full py-10 sm:px-8 sm:py-0 first:sm:pl-0">
                <p className="font-display italic font-light text-3xl leading-none text-powder-deep">{s.index}</p>
                <h3 className="mt-5 font-display text-xl text-ink">{s.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft/70">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-sand-100">
        <div className="container-page py-20 sm:py-28 text-center">
          <Reveal className="mx-auto max-w-xl">
            <p className="eyebrow mx-auto mb-4 justify-center">Ready to Stay?</p>
            <h2 className="font-display italic font-light text-3xl sm:text-4xl text-ink">
              See where StayHaus can take you
            </h2>
            <div className="mt-9 flex justify-center gap-4">
              <Button href="/stays">Browse Stays</Button>
              <Button href="/partner" variant="secondary">
                Partner With Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
