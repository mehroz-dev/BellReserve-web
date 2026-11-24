"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Close, Menu, Phone } from "@/components/icons";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Full-width bar, always solid with a divider line, stuck to the top. A soft shadow appears once the page scrolls.
    <header
      className={`sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--nav)] backdrop-blur-xl backdrop-saturate-150 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)]" : ""
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex max-w-[calc(var(--wrap)+48px)] items-center justify-between gap-6 px-6 py-3 max-sm:px-4">
        <Logo height={30} />

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="nav-link rounded-full px-4 py-2.5 text-[15.5px] font-normal">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.demoPhone.href}
            className="hidden items-center gap-2 rounded-full px-3 py-2.5 text-[14.5px] font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)] xl:flex"
          >
            <Phone size={15} className="text-[var(--accent-text)]" />
            {site.demoPhone.display}
          </a>
          <span className="hidden h-6 w-px bg-[var(--border-strong)] xl:block" aria-hidden="true" />
          <ThemeToggle />
          <Link href="/book-demo" className="btn btn-primary btn-sm hidden sm:inline-flex">
            Book a demo
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--glass)] lg:hidden"
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
        <div id="mobile-menu" className="border-t border-[var(--border)] px-6 pb-6 pt-2 max-sm:px-4 lg:hidden">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-[var(--border)] py-4 text-[17px] font-medium transition-colors hover:text-[var(--accent-text)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={site.demoPhone.href} className="mt-4 flex items-center gap-2.5 py-2 text-[15px] font-medium text-[var(--muted)]">
            <Phone size={16} className="text-[var(--accent-text)]" />
            Call our demo agent: {site.demoPhone.display}
          </a>
          <Link href="/book-demo" onClick={() => setOpen(false)} className="btn btn-primary mt-3 w-full">
            Book a demo
          </Link>
        </div>
      ) : null}
    </header>
  );
}
