/**
 * Line icons used across the site. Each icon takes `size` (default 20) plus any SVG props
 * such as `className`. They inherit their colour from the surrounding text.
 */

const iconProps = ({ size = 20, strokeWidth = 2, ...rest }) => {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    ...rest,
  };
};

export const Phone = (props) => (
  <svg {...iconProps(props)}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const Calendar = (props) => (
  <svg {...iconProps(props)}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export const CalendarCheck = (props) => (
  <svg {...iconProps(props)}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
  </svg>
);

export const Users = (props) => (
  <svg {...iconProps(props)}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
  </svg>
);

export const User = (props) => (
  <svg {...iconProps(props)}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
  </svg>
);

export const UserPlus = (props) => (
  <svg {...iconProps(props)}>
    <circle cx="9" cy="7" r="4" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M16 11h6M19 8v6" />
  </svg>
);

export const Message = (props) => (
  <svg {...iconProps(props)}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const Check = (props) => (
  <svg
    {...iconProps({
      strokeWidth: 2.4,
      ...props,
    })}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Arrow = (props) => (
  <svg {...iconProps(props)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Play = ({ size = 16, ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...rest}
  >
    <path d="M7 4v16l13-8z" />
  </svg>
);

export const Mic = (props) => (
  <svg {...iconProps(props)}>
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3" />
  </svg>
);

export const Transfer = (props) => (
  <svg {...iconProps(props)}>
    <path d="M17 8l4 4-4 4M21 12H9" />
    <path d="M13 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8" />
  </svg>
);

export const Sun = (props) => (
  <svg {...iconProps(props)}>
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const Moon = (props) => (
  <svg {...iconProps(props)}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

export const Menu = (props) => (
  <svg {...iconProps(props)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = (props) => (
  <svg {...iconProps(props)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Plus = (props) => (
  <svg
    {...iconProps({
      strokeWidth: 2.4,
      ...props,
    })}
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Bolt = (props) => (
  <svg {...iconProps(props)}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
  </svg>
);

export const Shield = (props) => (
  <svg {...iconProps(props)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const Link2 = (props) => (
  <svg {...iconProps(props)}>
    <path d="M18 8h1a4 4 0 0 1 0 8h-1M6 16H5a4 4 0 0 1 0-8h1M8 12h8" />
  </svg>
);

export const Mail = (props) => (
  <svg {...iconProps(props)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);
