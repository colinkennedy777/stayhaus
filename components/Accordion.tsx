"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg sm:text-xl text-ink">{item.question}</span>
              <span
                className={cn(
                  "shrink-0 text-2xl font-light text-clay transition-transform duration-300",
                  isOpen && "rotate-45"
                )}
              >
                +
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-400 ease-smooth",
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              )}
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl text-[15px] leading-relaxed text-ink-soft/70">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
