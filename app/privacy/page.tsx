import type { Metadata } from "next";
import { SimpleHeader } from "@/components/SimpleHeader";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How StayHaus collects, uses, and protects your information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly, such as your name, email, phone number, and payment details when booking a stay or submitting an inquiry, along with basic usage data when you browse our website.",
  },
  {
    title: "2. How We Use Information",
    body: "We use your information to process bookings, communicate with you about your stay, respond to inquiries, and improve our properties and services.",
  },
  {
    title: "3. Sharing of Information",
    body: "We do not sell your personal information. We may share information with trusted service providers who help us operate our business, such as payment processors and booking software.",
  },
  {
    title: "4. Cookies",
    body: "Our website may use cookies and similar technologies to understand site usage and improve your browsing experience.",
  },
  {
    title: "5. Data Security",
    body: "We take reasonable technical and organizational measures to protect your information, though no method of transmission or storage is completely secure.",
  },
  {
    title: "6. Your Choices",
    body: "You may request access to, correction of, or deletion of your personal information at any time by contacting us.",
  },
  {
    title: "7. Contact",
    body: `Questions about this policy can be sent to ${siteConfig.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <SimpleHeader eyebrow="Legal" title="Privacy Policy" description="Last updated: January 2026" />
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
