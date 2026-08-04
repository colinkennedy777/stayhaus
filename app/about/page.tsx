import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
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
    title: "Design Standards",
    description:
      "Every property is furnished to a defined material and design palette — no mismatched decor, no leftover furniture from a previous life.",
  },
  {
    title: "Hospitality Standards",
    description:
      "The same check-in process, the same communication, the same attentiveness — whether it's your first stay or your fifth.",
  },
  {
    title: "Location Standards",
    description:
      "We pass on far more properties than we accept. If it isn't centrally located and genuinely desirable, it isn't a StayHaus.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/about/hero.svg"
        eyebrow="About StayHaus"
        title="A hospitality brand, built one home at a time."
        description="We started on Florida's West Coast with a simple belief: a short-term stay should feel as considered as a boutique hotel — never generic, never an afterthought."
      />

      {/* Story */}
      <section className="container-page py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src="/images/about/story-1.svg" alt="A StayHaus interior" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <p className="eyebrow mb-5">How We Started</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.15] text-ink">
              We couldn&rsquo;t find a stay that felt like it belonged to a brand.
            </h2>
            <p className="mt-7 text-ink-soft/75 leading-relaxed max-w-md">
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
              <Image src="/images/about/story-2.svg" alt="A StayHaus property exterior" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:order-1">
            <p className="eyebrow mb-5">Where We're Going</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.15] text-ink">
              A recognizable name in Florida hospitality — not just another host.
            </h2>
            <p className="mt-7 text-ink-soft/75 leading-relaxed max-w-md">
              We're expanding deliberately, market by market, across Florida. Every new
              destination is held to the same standard as the first — because the goal isn't
              more properties. It's a brand worth trusting, wherever you find it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink">
        <div className="container-page py-16 sm:py-20">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p className="font-display text-3xl sm:text-4xl text-cream">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-widest2 text-cream/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="container-page py-24 sm:py-32">
        <SectionHeading
          eyebrow="The StayHaus Standard"
          title="Consistency is the whole point"
          description="A guest should never be able to tell which market they're in by the quality of the stay — only by the view."
        />
        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-3">
          {standards.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <h3 className="font-display text-xl text-ink">{s.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft/70">{s.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-sand-100">
        <div className="container-page py-20 sm:py-28 text-center">
          <Reveal className="mx-auto max-w-xl">
            <p className="eyebrow mb-4">Ready to Stay?</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink">See where StayHaus can take you</h2>
            <div className="mt-9 flex justify-center gap-4">
              <Button href="/stays">Browse Stays</Button>
              <Button href="/partner" variant="secondary">Partner With Us</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
