import type { Metadata } from "next";
import { Suspense } from "react";
import { SimpleHeader } from "@/components/SimpleHeader";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the StayHaus team.",
};

export default function ContactPage() {
  return (
    <>
      <SimpleHeader
        eyebrow="Contact"
        title="We'd love to hear from you"
        description="For guest support during an active stay, visit our Guest Support page for the fastest response."
      />
      <section className="container-page py-20 sm:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="space-y-8">
              <div>
                <p className="eyebrow mb-2">General Inquiries</p>
                <a href={`mailto:${siteConfig.email}`} className="text-ink link-underline">
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="eyebrow mb-2">Phone</p>
                <a href={`tel:${siteConfig.phone}`} className="text-ink link-underline">
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <p className="eyebrow mb-2">Based In</p>
                <p className="text-ink-soft/70">{siteConfig.region}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Suspense fallback={<div className="h-96" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
