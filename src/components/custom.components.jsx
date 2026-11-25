import { Link } from "react-router-dom";
import { Moon, Sun } from "./icons.component.jsx";
import { classNames } from "../utils/Helper.js";
import { toggleTheme } from "../utils/Theme.Helper.js";
import logoDark from "../assets/images/brand/bellreserve-logo.png";
import logoWhite from "../assets/images/brand/bellreserve-logo-white.png";
import "../assets/styles/custom-components.css";

/**
 * Horizontal logo lockup linking home. Switches to the white version in dark theme via CSS,
 * so there is no flash. `size` is "sm" (30px) or "md" (36px).
 */
export const Logo = ({ size = "sm" }) => (
  <Link to="/" aria-label="BellReserve home" className={`logo logo--${size}`}>
    <img src={logoDark} alt="BellReserve" className="logo__image show-light" />
    <img src={logoWhite} alt="BellReserve" className="logo__image show-dark" />
  </Link>
);

/** Round button that switches between the light and dark theme. */
export const ThemeToggle = () => (
  <button
    type="button"
    onClick={toggleTheme}
    aria-label="Toggle light and dark theme"
    className="theme-toggle"
  >
    <span className="show-light">
      <Moon size={18} />
    </span>
    <span className="show-dark">
      <Sun size={18} />
    </span>
  </button>
);

/** Eyebrow label, serif heading and optional lead paragraph used at the top of most sections. */
export const SectionHead = ({ eyebrow, title, lead, center = false }) => (
  <div className={classNames("section-head", center && "section-head--center")}>
    <span className={classNames("eyebrow", center && "eyebrow--center")}>{eyebrow}</span>
    <h2 className="h2 section-head__title">{title}</h2>
    {lead ? <p className="lead section-head__lead">{lead}</p> : null}
  </div>
);
