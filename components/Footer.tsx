import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-page py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="font-display text-2xl tracking-tight">
              {siteConfig.name}
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              {siteConfig.description}
            </p>
            <p className="eyebrow eyebrow-light mt-8">Currently</p>
            <p className="mt-2 text-sm text-cream/70">{siteConfig.region} — expanding statewide.</p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow eyebrow-light">Company</p>
            <ul className="mt-5 space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-cream/75 link-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow eyebrow-light">Support</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {footerNav.support.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-cream/75 link-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-cream/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-cream/45">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {siteConfig.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-widest2 text-cream/60 link-underline"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
