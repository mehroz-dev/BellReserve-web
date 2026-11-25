import { useEffect, useState } from "react";

/**
 * Counts from 0 up to `target` with an ease-out curve while `run` is true.
 * Returns the final value when not running.
 */
export const useCountUp = (target, run, duration = 1400) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) {
      return undefined;
    }

    let frameId = 0;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [target, run, duration]);

  return run ? value : target;
};
