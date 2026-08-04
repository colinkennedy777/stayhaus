import type { Metadata } from "next";
import { SimpleHeader } from "@/components/SimpleHeader";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for booking and using StayHaus properties and services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By booking a stay or using this website, you agree to these Terms & Conditions. If you do not agree, please do not use our services.",
  },
  {
    title: "2. Bookings",
    body: "All bookings are subject to availability and confirmation by StayHaus. Rates, minimum stay requirements, and fees are disclosed prior to booking confirmation.",
  },
  {
    title: "3. Guest Responsibilities",
    body: "Guests agree to use each property respectfully, comply with our house policies, and are financially responsible for any damage caused during their stay beyond normal wear and use.",
  },
  {
    title: "4. Payments",
    body: "Full or partial payment is required to confirm a booking, as disclosed at the time of reservation. Accepted payment methods are provided during checkout.",
  },
  {
    title: "5. Limitation of Liability",
    body: "StayHaus is not liable for indirect, incidental, or consequential damages arising from your stay, to the fullest extent permitted by law.",
  },
  {
    title: "6. Changes to Terms",
    body: "We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the updated terms.",
  },
  {
    title: "7. Contact",
    body: "Questions about these terms can be directed to our team through the Contact page.",
  },
];

export default function TermsPage() {
  return (
    <>
      <SimpleHeader eyebrow="Legal" title="Terms & Conditions" description="Last updated: January 2026" />
      <section className="container-page py-20 sm:py-28">
        <div className="max-w-2xl space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-lg text-ink">{s.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft/70">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
