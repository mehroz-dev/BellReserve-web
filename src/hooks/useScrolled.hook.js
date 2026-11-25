import { useEffect, useState } from "react";

/** True once the page has scrolled past `offset` pixels. */
export const useScrolled = (offset = 8) => {
  const [scrolled, setScrolled] = useState(() => window.scrollY > offset);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > offset);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return scrolled;
};
