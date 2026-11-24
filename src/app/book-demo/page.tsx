import type { Metadata } from "next";
import { Suspense } from "react";
import { DemoForm } from "@/components/DemoForm";
import { CalendarCheck, Check, Phone } from "@/components/icons";
import { Sphere } from "@/components/vectors";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a demo",
  description: "See your AI calling agent handle real calls for your industry. Book a 20-minute demo with the BellReserve team.",
  alternates: { canonical: "/book-demo" },
};

export default function BookDemoPage() {
  return (
    <section className="sec relative !pt-20">
      <div className="glow" style={{ width: 760, height: 620, left: -260, top: -120, background: "var(--glow)" }} />
      <div className="dots opacity-70" />
      <div className="wrap grid items-start gap-14 lg:grid-cols-[1fr_1.15fr]">
        <div className="relative flex flex-col gap-7 lg:sticky lg:top-28">
          <span className="eyebrow">Book a demo</span>
          <h1 className="h1 !text-[clamp(40px,5vw,68px)]">
            See your agent answer <span className="grad-text">real calls.</span>
          </h1>
          <p className="lead">In 20 minutes we&apos;ll show you an agent handling calls for your industry, answer your questions and map out your setup.</p>
          <ul className="flex flex-col gap-3.5">
            {[
              "A live call with an agent for your industry",
              "What your agent will handle, and when it hands over",
              "Your setup plan and package, done for you",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-[16.5px]">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--chip-bg)] text-[var(--accent-text)]">
                  <Check size={14} />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <div className="glass flex items-center gap-4 rounded-[22px] p-5">
            <span className="icon-tile">
              <Phone size={22} />
            </span>
            <div className="flex flex-col">
              <span className="font-semibold">Can&apos;t wait? Call our demo agent now.</span>
              <a href={site.demoPhone.href} className="mono text-[15px] text-[var(--accent-text)]">
                {site.demoPhone.display}
              </a>
            </div>
          </div>
          <Sphere size={120} className="fl pointer-events-none absolute -right-6 -top-10 hidden lg:block" />
        </div>
        <div className="card relative p-9 hover:translate-y-0 max-sm:p-6">
          <div className="mb-6 flex items-center gap-3">
            <span className="icon-tile ink h-11 w-11 rounded-[13px]">
              <CalendarCheck size={20} />
            </span>
            <div className="flex flex-col">
              <span className="text-lg font-semibold">Tell us about your business</span>
              <span className="text-sm text-[var(--faint)]">Takes under a minute</span>
            </div>
          </div>
          <Suspense fallback={<div className="h-[520px]" />}>
            <DemoForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
