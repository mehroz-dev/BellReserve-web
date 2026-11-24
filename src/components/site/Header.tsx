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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 px-4 pt-3 max-sm:px-3">
      <nav
        aria-label="Main"
        className={`nav-bar mx-auto flex max-w-[calc(var(--wrap)+24px)] items-center justify-between gap-6 rounded-full border py-2 pl-6 pr-2 transition-[background-color,box-shadow,border-color] duration-300 max-sm:pl-4 ${
          scrolled || open ? "is-scrolled backdrop-blur-xl backdrop-saturate-150" : ""
        }`}
      >
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
        <div id="mobile-menu" className="nav-bar is-scrolled mx-auto mt-2 backdrop-blur-xl backdrop-saturate-150 max-w-[calc(var(--wrap)+24px)] rounded-[28px] border p-3 lg:hidden">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-[16px] px-4 py-3.5 text-[17px] font-medium transition-colors hover:bg-[var(--chip-bg)] hover:text-[var(--accent-text)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-col gap-2 border-t border-[var(--border)] px-1 pt-3">
            <a href={site.demoPhone.href} className="flex items-center gap-2.5 px-3 py-2.5 text-[15px] font-medium text-[var(--muted)]">
              <Phone size={16} className="text-[var(--accent-text)]" />
              Call our demo agent: {site.demoPhone.display}
            </a>
            <Link href="/book-demo" onClick={() => setOpen(false)} className="btn btn-primary w-full">
              Book a demo
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
