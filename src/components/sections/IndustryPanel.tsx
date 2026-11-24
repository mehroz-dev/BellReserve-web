import Link from "next/link";
import { Arrow, Check, Play } from "@/components/icons";
import { Cube } from "@/components/vectors";
import type { Industry } from "@/lib/industries";

/** White capability card + live-transcript card. Used by the landing-page tabs and each industry page. */
export function IndustryPanel({ industry, showLink = true }: { industry: Industry; showLink?: boolean }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="relative flex flex-col gap-5 overflow-hidden rounded-[32px] bg-white p-10 text-black max-sm:p-7" style={{ boxShadow: "0 40px 80px -40px rgba(37,99,255,0.3)" }}>
        <Cube size={170} className="pointer-events-none absolute -right-5 -top-4 opacity-95" />
        <span className="mono text-[12.5px] uppercase tracking-[0.1em] text-brand">{industry.kicker}</span>
        <h3 className="max-w-[380px] font-serif text-[34px] font-medium leading-10 max-sm:text-[28px] max-sm:leading-9">{industry.headline}</h3>
        <p className="text-[17px] leading-[27px] text-black/70">{industry.body}</p>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {industry.handles.map((h) => (
            <div key={h} className="flex items-center gap-2.5 rounded-[14px] border border-brand/15 bg-brand/[0.06] px-3.5 py-3 text-[15px] font-medium">
              <Check size={16} className="flex-none text-brand" />
              {h}
            </div>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-3.5 pt-1.5">
          <button type="button" className="btn btn-dark min-h-[50px] text-[13.5px]" aria-label={`Play ${industry.label} sample call (recording coming soon)`}>
            <Play size={14} />
            Play sample call
          </button>
          <span className="text-sm text-black/60">{industry.duration}</span>
          {showLink ? (
            <Link href={`/industries/${industry.slug}`} className="ml-auto inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand hover:underline">
              {industry.label} page <Arrow size={16} />
            </Link>
          ) : null}
        </div>
      </div>

      <div className="deep-glass relative flex flex-col gap-3.5 overflow-hidden rounded-[32px] p-7 text-white">
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(70% 50% at 0% 100%, rgba(37,99,255,0.35), transparent 70%)" }} />
        <div className="mono relative flex items-center justify-between text-xs uppercase tracking-[0.08em] text-white/70">
          <span>Live transcript</span>
          <span className="flex items-center gap-2">
            <span className="live block h-2 w-2 rounded-full bg-brand" />
            {industry.callTime}
          </span>
        </div>
        {industry.lines.map((l, i) => (
          <div key={i} className={`relative flex flex-col gap-1.5 ${l.agent ? "items-start" : "items-end"}`}>
            <span className="mono text-[11px] uppercase tracking-[0.08em] text-white/60">{l.agent ? "BellReserve agent" : "Caller"}</span>
            <div
              className={
                l.agent
                  ? "max-w-[88%] rounded-[18px_18px_18px_4px] bg-gradient-to-b from-[#3e77ff] to-brand px-4 py-3 text-[15px] leading-[22px] shadow-[0_10px_24px_-12px_rgba(37,99,255,0.45)]"
                  : "max-w-[88%] rounded-[18px_18px_4px_18px] border border-white/10 bg-white/[0.09] px-4 py-3 text-[15px] leading-[22px]"
              }
            >
              {l.text}
            </div>
          </div>
        ))}
        <div className="relative mt-auto flex items-center gap-3.5 rounded-[18px] bg-gradient-to-br from-[#3e77ff] to-[#1d55e6] px-[18px] py-4 shadow-[0_18px_40px_-16px_rgba(37,99,255,0.45),inset_0_1px_0_rgba(255,255,255,0.35)]">
          <span className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-xl bg-white/20">
            <Check size={20} />
          </span>
          <div className="flex flex-col">
            <span className="text-base font-semibold">{industry.outcome}</span>
            <span className="text-[13.5px] opacity-90">{industry.outcomeSub}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
