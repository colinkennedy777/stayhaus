import type { Metadata } from "next";
import { MagazineHero } from "@/components/MagazineHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { OwnerInquiryForm } from "@/components/OwnerInquiryForm";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Partner with StayHaus. We design, furnish, and manage furnished rental properties across Florida to a single hospitality standard.",
};

const pillars = [
  {
    title: "Design & Furnishing",
    description:
      "Our design team assesses, furnishes, and styles your property to the StayHaus standard — a one-time investment that elevates both guest experience and nightly rate.",
  },
  {
    title: "Marketing & Distribution",
    description:
      "Your property is listed under a single, recognizable brand with professional photography, direct booking, and distribution across major platforms.",
  },
  {
    title: "Guest Experience",
    description:
      "From inquiry to check-out, our team handles every guest touchpoint — messaging, check-in, local recommendations, and support — to a consistent standard.",
  },
  {
    title: "Operations & Care",
    description:
      "Professional cleaning, maintenance, and restocking between every stay, coordinated by a local team that treats your property like their own.",
  },
];

const advantages = [
  "Higher average nightly rates through brand positioning and design",
  "Full-service management — you're never fielding a 2am guest message",
  "Transparent, owner-facing performance reporting",
  "A growing statewide brand behind a single property",
  "Vetted guests and a consistent house-care standard",
  "Flexible terms, including partial owner use of the property",
];

export default function PartnerPage() {
  return (
    <>
      <MagazineHero
        image="/images/partner/hero.jpg"
        alt="A handshake sealing a partnership"
        eyebrow="Property Owners"
        title="Your property, elevated into a brand."
        description="StayHaus partners with Florida property owners to design, furnish, market, and manage homes to a single hospitality standard — so your investment performs like part of something larger."
        objectPosition="58% 50%"
      />

      {/* Pillars */}
      <section className="container-page py-24 sm:py-32">
        <SectionHeading
          eyebrow="The StayHaus Approach"
          title="What partnership includes"
          description="We handle everything between purchase and payout — design, marketing, guest experience, and day-to-day operations."
        />
        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.1}>
              <h3 className="font-display text-xl text-ink">{p.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft/70 max-w-md">{p.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-ink">
        <div className="container-page py-24 sm:py-32">
          <SectionHeading
            eyebrow="Why StayHaus"
            title="The advantage of joining the portfolio"
            light
          />
          <Reveal className="mt-14">
            <ul className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
              {advantages.map((a) => (
                <li key={a} className="flex gap-4 border-b border-cream/15 pb-5 text-cream/80 text-[15px] leading-relaxed">
                  <span className="text-clay-light">—</span>
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Property Standards */}
      <section className="container-page py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-5">Property Standards</p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.15] text-ink">
              We're selective about what joins the portfolio.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <p className="text-ink-soft/75 leading-relaxed max-w-md">
              Not every property is a fit for StayHaus — and that's intentional. We look for
              homes in centrally located, in-demand neighborhoods with the bones to support a
              considered design renovation. If your property qualifies, our team will walk you
              through design, timeline, and projected performance before you commit to anything.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-sand-100">
        <div className="container-page py-24 sm:py-32">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow mb-5">Get In Touch</p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.15] text-ink">
                Tell us about your property
              </h2>
              <p className="mt-6 text-ink-soft/70 leading-relaxed max-w-sm">
                Share a few details and our partnerships team will follow up to discuss fit,
                design scope, and projected performance.
              </p>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={0.1}>
              <OwnerInquiryForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
