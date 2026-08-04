import { Reveal } from "@/components/Reveal";

const items = [
  {
    index: "01",
    title: "Thoughtfully Designed",
    description: "Every home is designed and furnished to a consistent standard — never generic, never staged.",
  },
  {
    index: "02",
    title: "Prime Locations",
    description: "We select properties within walking distance of the neighborhoods worth being in.",
  },
  {
    index: "03",
    title: "Effortless Stays",
    description: "Keyless entry, responsive support, and premium essentials so nothing gets in the way of the trip.",
  },
  {
    index: "04",
    title: "Local, Curated",
    description: "Each stay comes with a StayHaus guide to the neighborhood — made by people who actually live there.",
  },
];

export function Differentiators() {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2">
      {items.map((item, i) => (
        <Reveal key={item.index} delay={(i % 2) * 0.1}>
          <p className="font-display text-2xl text-clay">{item.index}</p>
          <h3 className="mt-4 font-display text-xl text-ink">{item.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft/70 max-w-sm">{item.description}</p>
        </Reveal>
      ))}
    </div>
  );
}
