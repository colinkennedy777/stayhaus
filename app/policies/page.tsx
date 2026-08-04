import type { Metadata } from "next";
import { SimpleHeader } from "@/components/SimpleHeader";

export const metadata: Metadata = {
  title: "Policies",
  description: "House policies for guests staying at StayHaus properties.",
};

const sections = [
  {
    title: "Check-In & Check-Out",
    body: "Standard check-in is 4:00 PM and check-out is 11:00 AM local time. Early check-in and late check-out may be available on request, subject to turnover schedules.",
  },
  {
    title: "Cancellations",
    body: "Stays cancelled 14 or more days before check-in receive a full refund. Cancellations within 14 days are refunded 50%, and stays cancelled within 48 hours of check-in are non-refundable. Exact terms are confirmed at booking.",
  },
  {
    title: "Occupancy",
    body: "Guest counts may not exceed the maximum occupancy listed on each property page. Events, parties, and gatherings beyond registered guests are not permitted.",
  },
  {
    title: "Smoking",
    body: "All StayHaus properties are strictly non-smoking, including vapes and e-cigarettes. A cleaning fee applies if evidence of smoking is found.",
  },
  {
    title: "Pets",
    body: "Pets are welcome only at properties marked \"Pet Friendly.\" Please disclose pets at the time of booking so we can prepare the home accordingly.",
  },
  {
    title: "Damage & Care",
    body: "Guests are responsible for the property during their stay. Please report any damage promptly so it can be addressed before the next arrival.",
  },
];

export default function PoliciesPage() {
  return (
    <>
      <SimpleHeader
        eyebrow="Policies"
        title="House policies"
        description="A general overview of our guest policies. Specific terms for your stay are confirmed at the time of booking."
      />
      <section className="container-page py-20 sm:py-28">
        <div className="max-w-2xl divide-y divide-ink/10 border-y border-ink/10">
          {sections.map((s) => (
            <div key={s.title} className="py-8">
              <h2 className="font-display text-xl text-ink">{s.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft/70">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
