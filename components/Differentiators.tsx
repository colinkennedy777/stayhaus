"use client";

import { motion } from "framer-motion";
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
    <div className="grid grid-cols-2 border-l border-t border-cream/15 lg:grid-cols-4">
      {items.map((item, i) => (
        <Reveal key={item.index} delay={i * 0.06} className="border-b border-r border-cream/15">
          <motion.div
            className="group h-full cursor-default px-5 py-8 sm:px-6 sm:py-10"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.p
              variants={{ rest: { color: "#7DD6EA" }, hover: { color: "#F7F3EA" } }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-display italic font-light text-2xl leading-none"
            >
              {item.index}
            </motion.p>
            <h3 className="mt-4 inline-block font-display text-lg sm:text-xl text-cream">
              {item.title}
              <motion.span
                variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left" }}
                className="mt-1 block h-px bg-powder"
              />
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-cream/65">{item.description}</p>
          </motion.div>
        </Reveal>
      ))}
    </div>
  );
}
