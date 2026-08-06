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
    <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
      {items.map((item, i) => (
        <Reveal key={item.index} delay={i * 0.06}>
          <div className="group h-56 cursor-default sm:h-64 [perspective:1200px]">
            <div className="relative h-full w-full transition-transform duration-700 ease-smooth [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 flex flex-col justify-between border border-cream/20 bg-ink-soft/30 p-5 [backface-visibility:hidden] sm:p-6">
                <p className="font-display italic font-light text-3xl leading-none text-powder-light sm:text-4xl">
                  {item.index}
                </p>
                <h3 className="font-display text-lg text-cream sm:text-xl">{item.title}</h3>
              </div>
              <div className="absolute inset-0 flex items-center border border-powder/50 bg-ink-soft p-5 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-6">
                <p className="text-[13px] leading-relaxed text-cream/85 sm:text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
