"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Arrow, Check } from "@/components/icons";
import { industries } from "@/lib/industries";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "done" | "error";

export function DemoForm() {
  const params = useSearchParams();
  const initialIndustry = industries.some((i) => i.slug === params.get("industry")) ? params.get("industry")! : "";
  const plan = params.get("plan") ?? "";

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrors({});
    setFormError("");
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, plan }),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("done");
        return;
      }
      setErrors(json.errors ?? {});
      setFormError(json.error ?? "Please check the highlighted fields.");
      setStatus("error");
    } catch {
      setFormError(`Something went wrong. Please email ${site.email}.`);
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-start gap-5 p-2" role="status">
        <span className="icon-tile h-14 w-14 rounded-2xl">
          <Check size={26} />
        </span>
        <h2 className="h3 text-[30px] leading-9">Thanks, we&apos;ve got your request.</h2>
        <p className="body-text">Our team will reach out within one business day to book your demo. Want to hear the agent right now?</p>
        <div className="flex flex-wrap gap-3">
          <a href={site.demoPhone.href} className="btn btn-primary">
            Call our agent
          </a>
          <Link href="/" className="btn btn-ghost">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" autoComplete="name" error={errors.name} />
        <Field label="Business name" name="business" autoComplete="organization" error={errors.business} />
        <Field label="Work email" name="email" type="email" autoComplete="email" error={errors.email} />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" error={errors.phone} />
        <div className="flex flex-col gap-2">
          <label htmlFor="industry" className="text-[15px] font-medium">
            Industry
          </label>
          <select id="industry" name="industry" defaultValue={initialIndustry} className="field" aria-invalid={!!errors.industry} aria-describedby={errors.industry ? "industry-err" : undefined}>
            <option value="" disabled>
              Choose one
            </option>
            {industries.map((i) => (
              <option key={i.slug} value={i.slug}>
                {i.navLabel}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
          {errors.industry ? (
            <span id="industry-err" className="text-sm text-[#d93025]">
              {errors.industry}
            </span>
          ) : null}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="callsPerWeek" className="text-[15px] font-medium">
            Calls per week
          </label>
          <select id="callsPerWeek" name="callsPerWeek" defaultValue="" className="field">
            <option value="">Not sure</option>
            <option value="<50">Under 50</option>
            <option value="50-200">50–200</option>
            <option value="200-500">200–500</option>
            <option value="500+">500+</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[15px] font-medium">
          Anything we should know? <span className="text-[var(--faint)]">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={4} className="field resize-y" placeholder="Locations, hours, tools you use, what calls you miss most…" />
      </div>
      {/* honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company_website">Website</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      {plan ? (
        <p className="text-sm text-[var(--muted)]">
          Interested in: <strong className="capitalize">{plan}</strong>
        </p>
      ) : null}
      {formError ? (
        <p role="alert" className="rounded-xl border border-[#d93025]/30 bg-[#d93025]/10 px-4 py-3 text-sm">
          {formError}
        </p>
      ) : null}
      <button type="submit" disabled={status === "sending"} className="btn btn-primary btn-lg w-full disabled:cursor-wait disabled:opacity-70">
        {status === "sending" ? "Sending…" : "Book my demo"}
        {status === "sending" ? null : <Arrow size={18} />}
      </button>
      <p className="text-[13px] text-[var(--faint)]">
        By submitting, you agree to our{" "}
        <Link href="/privacy" className="underline underline-offset-2">
          Privacy Policy
        </Link>
        . We&apos;ll only use your details to set up your demo.
      </p>
    </form>
  );
}

function Field({ label, name, type = "text", autoComplete, error }: { label: string; name: string; type?: string; autoComplete?: string; error?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[15px] font-medium">
        {label}
      </label>
      <input id={name} name={name} type={type} autoComplete={autoComplete} required className="field" aria-invalid={!!error} aria-describedby={error ? `${name}-err` : undefined} />
      {error ? (
        <span id={`${name}-err`} className="text-sm text-[#d93025]">
          {error}
        </span>
      ) : null}
    </div>
  );
}
