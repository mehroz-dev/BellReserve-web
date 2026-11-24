"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Close, Menu } from "@/components/icons";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="relative flex flex-wrap items-center justify-center gap-3 bg-black px-6 py-2.5 text-center text-sm text-white">
        <span className="mono rounded-full bg-gradient-to-b from-[#4a80ff] to-brand px-2.5 py-1 text-[11.5px] uppercase tracking-[0.08em]">New</span>
        <span>BellReserve now answers calls for HVAC, dental and real estate teams, not just restaurants.</span>
        <Link href="/#industries" className="underline underline-offset-4">
          See industries
        </Link>
      </div>

      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--nav)] backdrop-blur-xl backdrop-saturate-150">
        <nav aria-label="Main" className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-3">
          <Logo />

          <div className="hidden items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--glass)] p-1 text-[15px] font-medium lg:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-4 py-2.5 transition-colors hover:bg-[var(--chip-bg)] hover:text-[var(--accent-text)]">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a href={site.demoPhone.href} className="hidden px-2 py-3 text-[15px] font-medium xl:block">
              {site.demoPhone.display}
            </a>
            <Link href="/book-demo" className="btn btn-primary btn-sm hidden sm:inline-flex">
              Book a demo
            </Link>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--glass)] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <Close size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {open ? (
          <div id="mobile-menu" className="border-t border-[var(--border)] px-6 pb-6 pt-2 lg:hidden">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setOpen(false)} className="block border-b border-[var(--border)] py-4 text-lg font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/book-demo" onClick={() => setOpen(false)} className="btn btn-primary mt-5 w-full">
              Book a demo
            </Link>
          </div>
        ) : null}
      </header>
    </>
  );
}
