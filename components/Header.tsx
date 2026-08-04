"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-smooth",
        solid ? "bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(34,31,27,0.08)]" : "bg-transparent"
      )}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          href="/"
          className={cn(
            "font-display text-xl tracking-tight transition-colors duration-500",
            solid ? "text-ink" : "text-cream"
          )}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[13px] uppercase tracking-widest2 font-medium link-underline transition-colors duration-500",
                solid ? "text-ink" : "text-cream"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[6px]"
        >
          <span
            className={cn(
              "block h-px w-6 transition-all duration-300",
              menuOpen ? "translate-y-[3.5px] rotate-45 bg-ink" : solid ? "bg-ink" : "bg-cream"
            )}
          />
          <span
            className={cn(
              "block h-px w-6 transition-all duration-300",
              menuOpen ? "-translate-y-[3.5px] -rotate-45 bg-ink" : solid ? "bg-ink" : "bg-cream"
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-20 z-40 h-[calc(100svh-5rem)] overflow-y-auto bg-cream md:hidden"
          >
            <nav className="container-page flex flex-col py-10 gap-6">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-display text-4xl text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
