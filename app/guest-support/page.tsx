import type { Metadata } from "next";
import Link from "next/link";
import { SimpleHeader } from "@/components/SimpleHeader";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guest Support",
  description: "Support for current and upcoming StayHaus guests.",
};

const topics = [
  {
    title: "Check-In & Check-Out",
    description:
      "Every StayHaus uses keyless entry. Your check-in instructions and door code are sent 24 hours before arrival. Standard check-in is 4:00 PM, check-out is 11:00 AM.",
  },
  {
    title: "During Your Stay",
    description:
      "Message our support team any time through your booking confirmation email for maintenance issues, local recommendations, or general questions.",
  },
  {
    title: "Wi-Fi & Essentials",
    description:
      "Network name and password are posted in the welcome guide inside each property, alongside appliance instructions and house information.",
  },
  {
    title: "Emergencies",
    description:
      "For after-hours emergencies at your property, call our 24/7 support line. For medical emergencies, please dial 911 first.",
  },
];

export default function GuestSupportPage() {
  return (
    <>
      <SimpleHeader
        eyebrow="Guest Support"
        title="Here to help, before and during your stay"
        description="Most questions are answered in your booking confirmation and in-home welcome guide. For anything else, our team is a message away."
      />
      <section className="container-page py-20 sm:py-28">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2">
          {topics.map((t) => (
            <div key={t.title} className="border-b border-ink/10 pb-8">
              <h2 className="font-display text-xl text-ink">{t.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft/70">{t.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border border-ink/10 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow mb-2">24/7 Guest Line</p>
            <a href={`tel:${siteConfig.phone}`} className="font-display text-2xl text-ink">
              {siteConfig.phone}
            </a>
          </div>
          <Link href="/faq" className="text-sm text-clay link-underline">
            Browse Frequently Asked Questions &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
