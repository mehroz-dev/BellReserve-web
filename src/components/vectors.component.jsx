/**
 * 3D-style decorative shapes (sphere, cube, ring, pin) and the animated sound wave.
 * The gradients they use are defined once in <VectorDefs />, rendered by the landing layout.
 */

const WAVE_HEIGHTS = [0.4, 0.75, 1, 0.55, 0.88, 0.5, 0.8, 0.35, 0.68, 0.45, 0.9, 0.6];

export const VectorDefs = () => (
  <svg width="0" height="0" className="vector-defs" aria-hidden="true" focusable="false">
    <defs>
      <radialGradient id="g-sphere" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stopColor="#E4ECFF" />
        <stop offset="22%" stopColor="#8DADFF" />
        <stop offset="55%" stopColor="#2563FF" />
        <stop offset="100%" stopColor="#0B2A8F" />
      </radialGradient>
      <radialGradient id="g-sphere-ink" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stopColor="#8A8A8A" />
        <stop offset="30%" stopColor="#2A2A2A" />
        <stop offset="100%" stopColor="#000000" />
      </radialGradient>
      <linearGradient id="g-ring" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#A9C1FF" />
        <stop offset="45%" stopColor="#2563FF" />
        <stop offset="100%" stopColor="#0B2A8F" />
      </linearGradient>
      <linearGradient id="g-top" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#9DB9FF" />
        <stop offset="100%" stopColor="#5E8BFF" />
      </linearGradient>
      <linearGradient id="g-left" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2F6BFF" />
        <stop offset="100%" stopColor="#1A4FD6" />
      </linearGradient>
      <linearGradient id="g-right" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1A4FD6" />
        <stop offset="100%" stopColor="#0B2A8F" />
      </linearGradient>
      <linearGradient id="g-gauge" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#9DB9FF" />
        <stop offset="100%" stopColor="#2563FF" />
      </linearGradient>
      <radialGradient id="g-shadow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#000000" stopOpacity="0.22" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

export const Sphere = ({ className, size = 150, ink = false }) => (
  <svg
    className={className}
    width={size}
    height={size * 1.13}
    viewBox="0 0 150 170"
    aria-hidden="true"
  >
    <ellipse cx="75" cy="160" rx="48" ry="8" fill="url(#g-shadow)" />
    <circle cx="75" cy="70" r="62" fill={ink ? "url(#g-sphere-ink)" : "url(#g-sphere)"} />
    <ellipse
      cx="54"
      cy="44"
      rx="20"
      ry="12"
      fill="#FFFFFF"
      opacity="0.45"
      transform="rotate(-30 54 44)"
    />
  </svg>
);

export const Cube = ({ className, size = 150, label }) => (
  <svg
    className={className}
    width={size}
    height={size * 1.07}
    viewBox="0 0 150 160"
    aria-hidden="true"
  >
    <ellipse cx="75" cy="150" rx="52" ry="8" fill="url(#g-shadow)" />
    <polygon points="75,10 135,44 75,78 15,44" fill="url(#g-top)" />
    <polygon points="15,44 75,78 75,140 15,106" fill="url(#g-left)" />
    <polygon points="135,44 75,78 75,140 135,106" fill="url(#g-right)" />

    {label ? (
      <text
        x="75"
        y="52"
        textAnchor="middle"
        fontFamily="IBM Plex Serif, Georgia, serif"
        fontWeight="600"
        fontSize="34"
        fill="#FFFFFF"
        transform="matrix(1 0 0 0.6 0 18)"
      >
        {label}
      </text>
    ) : null}
  </svg>
);

export const Ring = ({ className, size = 520 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 520 520"
    aria-hidden="true"
  >
    <ellipse
      cx="260"
      cy="260"
      rx="228"
      ry="84"
      fill="none"
      stroke="url(#g-ring)"
      strokeWidth="26"
      transform="rotate(-24 260 260)"
    />
    <ellipse
      cx="260"
      cy="260"
      rx="228"
      ry="84"
      fill="none"
      stroke="#FFFFFF"
      strokeOpacity="0.35"
      strokeWidth="3"
      transform="rotate(-24 260 252)"
    />
  </svg>
);

export const Pin = ({ size = 60, fill = "url(#g-left)" }) => (
  <svg width={size} height={size * 1.33} viewBox="0 0 60 80" aria-hidden="true">
    <ellipse cx="30" cy="74" rx="16" ry="4" fill="url(#g-shadow)" />
    <path d="M30 70S8 46 8 30a22 22 0 0 1 44 0c0 16-22 40-22 40z" fill={fill} />
    <circle cx="30" cy="30" r="9" fill="#FFFFFF" />
  </svg>
);

/** Animated sound-wave bars. Heights and colour are data, so they are passed as inline values. */
export const Wave = ({ count = 9, color = "#2563FF", height = 32 }) => {
  const bars = Array.from({ length: count }, (_, index) => index);

  return (
    <span
      className="wave"
      aria-hidden="true"
      style={{
        height,
      }}
    >
      {bars.map((index) => (
        <span
          key={index}
          className="wave__bar"
          style={{
            height: height * WAVE_HEIGHTS[index % WAVE_HEIGHTS.length],
            background: color,
            animationDelay: `${index * 0.1}s`,
          }}
        />
      ))}
    </span>
  );
};
