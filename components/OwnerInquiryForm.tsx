"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/Button";

const initialState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  propertyType: "Condo",
  message: "",
};

export function OwnerInquiryForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function update<K extends keyof typeof initialState>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/partner-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-ink/15 bg-cream px-8 py-14 text-center">
        <p className="eyebrow mb-3">Thank you</p>
        <h3 className="font-display text-2xl text-ink">We received your inquiry.</h3>
        <p className="mt-3 text-ink-soft/70 max-w-sm mx-auto">
          A member of our partnerships team will follow up within two business days to discuss next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <Field label="Full Name" required>
        <input
          required
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          type="text"
          className="form-input"
        />
      </Field>
      <Field label="Email" required>
        <input
          required
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          type="email"
          className="form-input"
        />
      </Field>
      <Field label="Phone">
        <input
          value={values.phone}
          onChange={(e) => update("phone", e.target.value)}
          type="tel"
          className="form-input"
        />
      </Field>
      <Field label="Property City">
        <input
          value={values.city}
          onChange={(e) => update("city", e.target.value)}
          type="text"
          placeholder="e.g. Tampa, FL"
          className="form-input"
        />
      </Field>
      <Field label="Property Type" className="sm:col-span-2">
        <select
          value={values.propertyType}
          onChange={(e) => update("propertyType", e.target.value)}
          className="form-input"
        >
          <option>Condo</option>
          <option>Single-Family Home</option>
          <option>Townhome</option>
          <option>Multi-Unit</option>
          <option>Other</option>
        </select>
      </Field>
      <Field label="Tell us about your property" className="sm:col-span-2">
        <textarea
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          rows={4}
          className="form-input resize-none"
        />
      </Field>

      <div className="sm:col-span-2 mt-2 flex items-center gap-6">
        <Button type="submit">{status === "submitting" ? "Submitting…" : "Submit Inquiry"}</Button>
        {status === "error" && (
          <p className="text-sm text-clay-dark">Something went wrong — please try again.</p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  children,
  className,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="text-xs uppercase tracking-widest2 text-ink-soft/60">
        {label} {required && <span className="text-clay">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
