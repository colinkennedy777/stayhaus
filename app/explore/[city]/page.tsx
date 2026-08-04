import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { GuideCategoryList } from "@/components/GuideCategoryList";
import { guides, getGuide } from "@/data/guides";
import { getDestination, activeDestinations } from "@/data/destinations";

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

export default async function GuidePage({ params }: Props) {
  const { city } = await params;
  const guide = getGuide(city);
  const destination = getDestination(city);
  if (!guide || !destination) notFound();

  return (
    <>
      <PageHero
        image={guide.heroImage}
        eyebrow={destination.region}
        title={`The ${destination.name} Guide`}
        description={guide.intro}
      />

      <section className="container-page py-20 sm:py-28">
        <Reveal className="mb-16 flex flex-col gap-4 border-b border-ink/10 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-ink-soft/70 max-w-md">
            Staying in {destination.name}? Browse StayHaus properties in this market.
          </p>
          <Button href={`/stays?location=${destination.slug}`} variant="secondary" className="shrink-0">
            View Stays in {destination.name}
          </Button>
        </Reveal>

        <GuideCategoryList categories={guide.categories} />
      </section>
    </>
  );
}
