import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { guides, getGuide } from "@/data/guides";
import { getDestination, activeDestinations } from "@/data/destinations";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return guides.map((g) => ({ city: g.destinationSlug }));
}

type Props = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const destination = getDestination(city);
  if (!destination) return {};
  return {
    title: `${destination.name} Guide`,
    description: `A StayHaus-curated guide to ${destination.name}, Florida — restaurants, coffee, beaches, and neighborhoods worth knowing.`,
  };
}

function slugify(label: string) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function GuidePage({ params }: Props) {
  const { city } = await params;
  const guide = getGuide(city);
  const destination = getDestination(city);
  if (!guide || !destination) notFound();

  const issueNumber = String(
    activeDestinations.findIndex((d) => d.slug === destination.slug) + 1
  ).padStart(2, "0");

  return (
    <>
      {/* Cover */}
      <section className="relative flex h-[94vh] min-h-[680px] flex-col justify-between overflow-hidden">
        <Image
          src={guide.heroImage}
          alt={destination.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/10 to-ink/85" />

        <div className="container-page relative z-10 flex items-start justify-between pt-28 sm:pt-32">
          <p className="font-display italic text-lg sm:text-xl text-cream">StayHaus Explore</p>
          <p className="text-right text-[10px] sm:text-xs uppercase tracking-widest2 text-cream/70 font-medium">
            Issue No. {issueNumber}
            <br className="sm:hidden" /> &mdash; {destination.region}
          </p>
        </div>

        <div className="container-page relative z-10 pb-16 sm:pb-20">
          <p className="text-[11px] sm:text-xs uppercase tracking-widest2 text-cream/80 font-medium">
            The {destination.region} Issue
          </p>
          <h1 className="mt-4 font-display italic font-light leading-[0.92] text-cream text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] max-w-4xl">
            {destination.name}
          </h1>
          <p className="mt-6 max-w-xl text-cream/85 leading-relaxed">{guide.intro}</p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="container-page border-b border-ink/10 py-16 sm:py-20">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="dept-label">
              <span className="dept-number">&mdash;</span> Inside This Issue
            </p>
            <Button href={`/stays?location=${destination.slug}`} variant="secondary" className="shrink-0">
              View Stays in {destination.name}
            </Button>
          </div>
        </Reveal>
        <ol className="mt-10 grid grid-cols-1 gap-x-10 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
          {guide.categories.map((category, i) => (
            <li key={category.label}>
              <a
                href={`#${slugify(category.label)}`}
                className="group flex items-baseline gap-4 border-b border-ink/10 py-4"
              >
                <span className="font-display italic text-powder-deep text-lg shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg text-ink link-underline">{category.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      {/* Departments */}
      {guide.categories.map((category, i) => (
        <section
          id={slugify(category.label)}
          key={category.label}
          className={cn("relative scroll-mt-24 overflow-hidden", i % 2 === 1 ? "bg-sand-100" : "bg-cream")}
        >
          <p
            aria-hidden
            className={cn(
              "pointer-events-none absolute -top-10 font-display italic font-light text-[13rem] sm:text-[18rem] leading-none text-ink/[0.04] select-none",
              i % 2 === 1 ? "-right-4 sm:-right-8" : "-left-4 sm:-left-8"
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </p>
          <div className="container-page relative py-20 sm:py-28">
            <Reveal>
              <p className="dept-label">
                <span className="dept-number">{String(i + 1).padStart(2, "0")}</span> Department
              </p>
              <h2 className="mt-4 font-display italic font-light text-4xl sm:text-5xl leading-[1.05] text-ink">
                {category.label}
              </h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
              {category.items.map((item, j) => (
                <Reveal key={item.name} delay={j * 0.06}>
                  <div className="border-b border-ink/10 pb-6">
                    <p className="font-display text-2xl text-ink">{item.name}</p>
                    <p className="mt-2 text-ink-soft/70 leading-relaxed">{item.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Back cover */}
      <section className="bg-sand-100">
        <div className="container-page py-24 sm:py-32 text-center">
          <Reveal className="mx-auto max-w-xl">
            <p className="eyebrow mx-auto mb-4 justify-center">End of Issue</p>
            <h2 className="font-display italic font-light text-3xl sm:text-4xl text-ink">
              Ready to stay in {destination.name}?
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href={`/stays?location=${destination.slug}`}>View Stays</Button>
              <Button href="/explore" variant="secondary">
                More Issues
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
