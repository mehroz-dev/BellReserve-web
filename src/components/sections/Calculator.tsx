"use client";

import Link from "next/link";
import { useId, useState } from "react";

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
const CIRC = 2 * Math.PI * 118;

export function Calculator() {
  const [missed, setMissed] = useState(20);
  const [value, setValue] = useState(150);
  const [rate, setRate] = useState(40);
  const id = useId();

  const lostCustomers = missed * 4.33 * (rate / 100);
  const monthly = lostCustomers * value;
  const pct = Math.max(0.04, Math.min(1, monthly / 40000));

  return (
    <section id="calculator" className="sec">
      <div className="wrap grid items-center gap-16 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="eyebrow">What missed calls cost you</span>
          <h2 className="h2">
            Every unanswered call is a customer <span className="grad-text">calling someone else.</span>
          </h2>
          <p className="lead">Move the sliders to match your business. This is the revenue walking out the door today, and what BellReserve is built to recover.</p>
          <div className="card flex flex-col gap-6 p-7 hover:translate-y-0">
            <Slider id={`${id}-m`} label="Missed calls per week" display={String(missed)} min={1} max={100} step={1} value={missed} onChange={setMissed} />
            <Slider id={`${id}-v`} label="Average value of a new customer" display={`$${fmt(value)}`} min={20} max={2000} step={10} value={value} onChange={setValue} />
            <Slider id={`${id}-r`} label="Callers who would have booked" display={`${rate}%`} min={5} max={90} step={5} value={rate} onChange={setRate} />
          </div>
        </div>

        <div className="relative">
          <div className="glow" style={{ width: 520, height: 520, left: 0, top: 0, background: "var(--glow)" }} />
          <div
            className="deep relative flex flex-col items-center gap-6 overflow-hidden rounded-[36px] border border-white/10 px-10 py-11 max-sm:px-6"
            style={{ boxShadow: "0 34px 70px -36px rgba(10,30,120,0.35)" }}
            aria-live="polite"
          >
            <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(80% 60% at 50% 0%, rgba(37,99,255,0.45), transparent 65%)" }} />
            <span className="mono relative text-[12.5px] uppercase tracking-[0.1em] text-white/75">Estimated revenue lost every month</span>
            <div className="relative h-[280px] w-[280px]">
              <svg width="280" height="280" viewBox="0 0 280 280" aria-hidden="true" className="absolute inset-0 -rotate-90">
                <circle cx="140" cy="140" r="118" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="18" />
                <circle
                  cx="140"
                  cy="140"
                  r="118"
                  fill="none"
                  stroke="url(#g-gauge)"
                  strokeWidth="18"
                  strokeLinecap="round"
                  strokeDasharray={`${(pct * CIRC).toFixed(1)} ${CIRC.toFixed(1)}`}
                  style={{ transition: "stroke-dasharray .35s ease" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                <span className="font-serif text-[52px] font-medium leading-none tracking-[-0.02em]">${fmt(monthly)}</span>
                <span className="text-[15px] text-white/70">per month</span>
              </div>
            </div>
            <div className="relative grid w-full grid-cols-2 gap-2.5">
              <Stat label="Per year" value={`$${fmt(monthly * 12)}`} />
              <Stat label="Lost customers / mo" value={fmt(lostCustomers)} />
            </div>
            <Link href="/book-demo" className="btn btn-primary btn-lg relative w-full">
              Stop losing these calls
            </Link>
            <span className="relative text-[13px] text-white/70">An estimate from your inputs, not a guarantee of results.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider(props: { id: string; label: string; display: string; min: number; max: number; step: number; value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={props.id} className="text-base font-medium">
          {props.label}
        </label>
        <span className="mono rounded-[10px] bg-[var(--chip-bg)] px-2.5 py-1 text-lg font-medium text-[var(--accent-text)]">{props.display}</span>
      </div>
      <input
        id={props.id}
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
      />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="deep-glass flex flex-col gap-1 rounded-[18px] p-4">
      <span className="mono text-[11.5px] uppercase tracking-[0.08em] text-white/70">{label}</span>
      <span className="font-serif text-[28px] font-semibold">{value}</span>
    </div>
  );
}
