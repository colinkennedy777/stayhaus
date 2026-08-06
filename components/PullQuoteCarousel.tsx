"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Testimonial } from "@/data/types";
import { cn } from "@/lib/utils";

export function PullQuoteCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [reduceMotion, paused, testimonials.length]);

  const current = testimonials[index];

  return (
    <div
      className="relative max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span aria-hidden className="pointer-events-none block font-display text-8xl sm:text-9xl leading-none text-powder/50">
        &rdquo;
      </span>

      <div className="-mt-10 sm:-mt-14 min-h-[9rem] sm:min-h-[8rem] overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, x: -32 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display italic font-light text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.25] text-ink">
              {current.quote}
            </p>
            <p className="mt-6 dept-label">
              {current.author} &mdash; {current.location.replace("Stayed in ", "")}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {testimonials.length > 1 && (
        <div className="mt-10 flex gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.author}
              onClick={() => setIndex(i)}
              aria-label={`Show review from ${t.author}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                i === index ? "w-8 bg-powder" : "w-1.5 bg-ink/15 hover:bg-ink/30"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
