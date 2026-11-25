/** localStorage key for the visitor's chosen theme. index.html reads the same key before first paint. */
export const THEME_KEY = "br-theme";

/** Switches between the light and dark theme and remembers the choice. */
export const toggleTheme = () => {
  const root = document.documentElement;
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";

  root.dataset.theme = nextTheme;

  try {
    localStorage.setItem(THEME_KEY, nextTheme);
  } catch {
    // Storage unavailable: the theme still switches for this visit.
  }
};
