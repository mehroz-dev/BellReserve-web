import { useSyncExternalStore } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const subscribe = (onChange) => {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);

  mediaQuery.addEventListener("change", onChange);

  return () => {
    mediaQuery.removeEventListener("change", onChange);
  };
};

const getSnapshot = () => {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
};

/** True when the visitor asked their system for reduced motion. */
export const useReducedMotion = () => {
  return useSyncExternalStore(subscribe, getSnapshot);
};
