import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * On every navigation: scrolls to the #section in the URL if there is one,
 * otherwise back to the top of the new page.
 */
export const useScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);

      return undefined;
    }

    // Wait one frame so the new page has rendered before looking for the section.
    const frameId = requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));

      if (target) {
        target.scrollIntoView();
      }
    });

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [pathname, hash]);
};
