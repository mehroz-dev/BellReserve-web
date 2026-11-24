"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Arrow } from "@/components/icons";
import { industries } from "@/lib/industries";

const pad = (n: number) => String(n).padStart(2, "0");

/** Horizontal, draggable carousel of industry photo cards. */
export function IndustryCarousel({ heading }: { heading: React.ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false });
  const [index, setIndex] = useState(1);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const total = industries.length;

  const step = () => {
    const el = track.current;
    const card = el?.querySelector<HTMLElement>("[data-card]");
    if (!el || !card) return 0;
    return card.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0");
  };

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const s = step();
    const end = el.scrollLeft >= max - 4;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(end);
    setIndex(end ? total : Math.min(total, Math.round(el.scrollLeft / (s || 1)) + 1));
  }, [total]);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const go = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * step(), behavior: "smooth" });

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || !track.current) return;
    drag.current = { active: true, startX: e.clientX, startLeft: track.current.scrollLeft, moved: false };
  }
  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const d = drag.current;
    const el = track.current;
    if (!d.active || !el) return;
    const dx = e.clientX - d.startX;
    if (!d.moved && Math.abs(dx) > 5) {
      d.moved = true;
      el.setPointerCapture(e.pointerId);
      el.dataset.dragging = "true";
    }
    if (d.moved) el.scrollLeft = d.startLeft - dx;
  }
  function endDrag() {
    const el = track.current;
    drag.current.active = false;
    if (el?.dataset.dragging) {
      delete el.dataset.dragging;
      // Settle on the nearest card once snapping is back on.
      const s = step();
      if (s) el.scrollTo({ left: Math.round(el.scrollLeft / s) * s, behavior: "smooth" });
    }
  }

  return (
    <div className="flex flex-col gap-12 max-md:gap-9">
      <div className="wrap flex w-full flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-5">
          <span className="eyebrow">Use cases</span>
          <h2 className="h2 max-w-[760px]">{heading}</h2>
        </div>
        <div className="flex gap-2.5 max-sm:hidden">
          {([-1, 1] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={() => go(dir)}
              disabled={dir === -1 ? atStart : atEnd}
              aria-label={dir === -1 ? "Previous industry" : "Next industry"}
              aria-controls="industry-track"
              className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--glass)] transition-colors hover:border-[var(--chip-border)] hover:text-[var(--accent-text)] disabled:cursor-default disabled:opacity-35 disabled:hover:border-[var(--border-strong)] disabled:hover:text-inherit"
            >
              <Arrow size={18} className={dir === -1 ? "rotate-180" : ""} />
            </button>
          ))}
        </div>
      </div>

      <div
        id="industry-track"
        ref={track}
        role="region"
        aria-roledescription="carousel"
        aria-label="Industries"
        onScroll={update}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={(e) => {
          if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
            drag.current.moved = false;
          }
        }}
        className="industry-track -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 max-md:-mx-5 max-md:gap-4"
      >
        {industries.map((ind, i) => (
          <Link
            key={ind.slug}
            href={`/industries/${ind.slug}`}
            data-card
            draggable={false}
            aria-label={`${ind.label}: ${ind.tags.join(", ")}`}
            className="group relative h-[500px] w-[356px] flex-none snap-start overflow-hidden rounded-[24px] border border-white/10 bg-[#141a29] text-white max-sm:h-[440px] max-sm:w-[80vw]"
          >
            <Image
              src={`${ind.photo}?w=720&h=1000&fit=crop&auto=format&q=70`}
              alt=""
              fill
              sizes="(max-width: 640px) 80vw, 356px"
              draggable={false}
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,11,20,0.7)_0%,rgba(8,11,20,0.05)_28%,rgba(8,11,20,0.25)_55%,rgba(8,11,20,0.92)_100%)]" />

            <div className="mono absolute inset-x-5 top-5 flex items-center justify-between text-[12px] uppercase tracking-[0.12em]">
              <span className="text-white/75">
                {pad(i + 1)} / {pad(total)}
              </span>
              <span className="flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 backdrop-blur-md">
                <span className="live-dot block h-1.5 w-1.5 rounded-full bg-[#ff4d4d]" />
                Live call
              </span>
            </div>

            <div className="absolute inset-x-5 bottom-5 flex flex-col gap-4">
              <h3 className="text-[27px] font-semibold text-white leading-tight tracking-[-0.01em]">{ind.label}</h3>
              <ul className="flex flex-wrap gap-1.5">
                {ind.tags.map((t, ti) => (
                  <li
                    key={t}
                    className={`whitespace-nowrap rounded-full border px-2.5 py-1.5 text-[12px] font-medium backdrop-blur-md ${
                      ti === 0 ? "border-[#5e8bff]/70 bg-brand/35 text-white" : "border-white/20 bg-black/35 text-white/85"
                    }`}
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>

      <div className="wrap flex w-full items-center gap-6 max-sm:gap-4">
        <span className="mono flex-none text-[12px] uppercase tracking-[0.14em] text-[var(--faint)] max-sm:hidden">Drag or use arrows</span>
        <div className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-[var(--border-strong)]" aria-hidden="true">
          <div className="absolute inset-y-0 left-0 rounded-full bg-brand transition-[width] duration-300" style={{ width: `${(index / total) * 100}%` }} />
        </div>
        <span className="mono flex-none text-[12px] tracking-[0.14em] text-[var(--muted)]" aria-live="polite">
          {pad(index)} / {pad(total)}
        </span>
      </div>
    </div>
  );
}
