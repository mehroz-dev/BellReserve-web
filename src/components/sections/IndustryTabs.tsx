"use client";

import { useState } from "react";
import { industries } from "@/lib/industries";
import { IndustryPanel } from "./IndustryPanel";

export function IndustryTabs() {
  const [active, setActive] = useState(industries[0].slug);
  const current = industries.find((i) => i.slug === active) ?? industries[0];

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const idx = industries.findIndex((i) => i.slug === active);
    const next = (idx + (e.key === "ArrowRight" ? 1 : -1) + industries.length) % industries.length;
    setActive(industries[next].slug);
    document.getElementById(`tab-${industries[next].slug}`)?.focus();
  }

  return (
    <div className="flex flex-col gap-11">
      <div
        role="tablist"
        aria-label="Industries"
        onKeyDown={onKeyDown}
        className="flex flex-wrap justify-center gap-1.5 self-center rounded-[28px] border border-white/10 bg-white/[0.06] p-1.5 backdrop-blur-md sm:rounded-full"
      >
        {industries.map((i) => {
          const selected = i.slug === active;
          return (
            <button
              key={i.slug}
              id={`tab-${i.slug}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="industry-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i.slug)}
              className={`min-h-[46px] cursor-pointer rounded-full px-[22px] py-3 text-[15.5px] font-semibold transition-all ${
                selected
                  ? "bg-gradient-to-b from-[#4a80ff] to-brand text-white shadow-[0_10px_24px_-10px_rgba(37,99,255,0.45),inset_0_1px_0_rgba(255,255,255,0.35)]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {i.label}
            </button>
          );
        })}
      </div>
      <div id="industry-panel" role="tabpanel" aria-labelledby={`tab-${current.slug}`}>
        <IndustryPanel industry={current} />
      </div>
    </div>
  );
}
