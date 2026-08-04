import type { Metadata } from "next";
import { SimpleHeader } from "@/components/SimpleHeader";
import { Accordion } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about booking and staying with StayHaus.",
};

const faqs = [
  {
    question: "How do I book a StayHaus property?",
    answer:
      "Browse available stays on our Stays page and select \"Check Availability\" on any property. Our team will confirm dates and walk you through booking directly.",
  },
  {
    question: "What is included in a StayHaus stay?",
    answer:
      "Every property comes fully furnished with premium linens, a full kitchen, high-speed WiFi, and the amenities listed on each property page. Nothing to bring but yourself.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellation terms vary slightly by property and season and are confirmed at the time of booking. See our Policies page for general guidelines.",
  },
  {
    question: "Are StayHaus properties pet-friendly?",
    answer:
      "Select properties welcome pets — look for the \"Pet Friendly\" amenity on the property page, or ask our team when inquiring.",
  },
  {
    question: "Do you offer discounts for extended stays?",
    answer:
      "Yes. Stays of two weeks or longer receive adjusted pricing — reach out to our team for a custom quote.",
  },
  {
    question: "How do I partner with StayHaus as a property owner?",
    answer:
      "Visit our Partner With Us page to learn about our approach and submit an inquiry. Our partnerships team will follow up within two business days.",
  },
];

export default function FaqPage() {
  return (
    <>
      <SimpleHeader eyebrow="FAQ" title="Frequently asked questions" />
      <section className="container-page py-20 sm:py-28">
        <Accordion items={faqs} />
      </section>
    </>
  );
}
