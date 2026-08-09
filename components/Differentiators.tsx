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
    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-7">
      {items.map((item, i) => (
        <Reveal key={item.index} delay={i * 0.06}>
          <div className="group h-64 cursor-default transition-transform duration-500 ease-smooth hover:-translate-y-1 sm:h-80 [perspective:1200px]">
            <div className="relative h-full w-full transition-transform duration-700 ease-smooth [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 flex flex-col justify-between border border-cream/20 bg-ink-soft/30 p-6 shadow-lg shadow-black/20 [backface-visibility:hidden] sm:p-7">
                <p className="font-display italic font-light text-4xl leading-none text-powder-light sm:text-5xl">
                  {item.index}
                </p>
                <div>
                  <span className="block h-px w-8 bg-powder/50" />
                  <h3 className="mt-4 font-display text-xl text-cream sm:text-2xl">{item.title}</h3>
                  <p className="mt-3 text-[11px] uppercase tracking-widest2 text-cream/40">Hover to read more</p>
                </div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center border border-powder/60 bg-ink-soft p-6 shadow-lg shadow-black/20 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-7">
                <p className="font-display italic text-lg text-powder-light sm:text-xl">{item.index}</p>
                <h3 className="mt-2 font-display text-lg text-cream sm:text-xl">{item.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-cream/85 sm:text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
