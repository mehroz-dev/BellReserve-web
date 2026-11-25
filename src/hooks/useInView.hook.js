import { useEffect, useState } from "react";

/** True while the element behind `ref` is at least `threshold` visible on screen. */
export const useInView = (ref, threshold = 0.35) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return inView;
};
