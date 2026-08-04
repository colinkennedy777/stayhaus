"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/Button";

const initialState = { name: "", email: "", message: "" };

export function ContactForm() {
  const searchParams = useSearchParams();
  const stay = searchParams.get("stay");
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function update<K extends keyof typeof initialState>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, stay }),
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
      <div className="border border-ink/15 px-8 py-14 text-center">
        <p className="eyebrow mb-3">Message Sent</p>
        <h3 className="font-display text-2xl text-ink">Thank you for reaching out.</h3>
        <p className="mt-3 text-ink-soft/70 max-w-sm mx-auto">
          Our team typically responds within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {stay && (
        <p className="text-xs uppercase tracking-widest2 text-clay">Regarding: {stay.replace(/-/g, " ")}</p>
      )}
      <label className="block">
        <span className="text-xs uppercase tracking-widest2 text-ink-soft/60">Name</span>
        <input
          required
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          type="text"
          className="form-input mt-2"
        />
      </label>
      <label className="block">
        <span className="text-xs uppercase tracking-widest2 text-ink-soft/60">Email</span>
        <input
          required
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          type="email"
          className="form-input mt-2"
        />
      </label>
      <label className="block">
        <span className="text-xs uppercase tracking-widest2 text-ink-soft/60">Message</span>
        <textarea
          required
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          rows={5}
          className="form-input mt-2 resize-none"
        />
      </label>
      <div className="flex items-center gap-6 pt-2">
        <Button type="submit">{status === "submitting" ? "Sending…" : "Send Message"}</Button>
        {status === "error" && <p className="text-sm text-clay-dark">Something went wrong — please try again.</p>}
      </div>
    </form>
  );
}
