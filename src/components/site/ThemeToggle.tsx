"use client";

import { Moon, Sun } from "@/components/icons";

export const THEME_KEY = "br-theme";

/** Runs before first paint (see layout.tsx) so the right theme is applied with no flash. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="light"}})();`;

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* storage unavailable: theme still switches for this visit */
    }
  }
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--glass)] text-[var(--text)] transition-colors hover:border-brand"
    >
      <span className="show-light">
        <Moon size={18} />
      </span>
      <span className="show-dark">
        <Sun size={18} />
      </span>
    </button>
  );
}
