import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Close, Menu, Phone } from "./icons.component.jsx";
import { Logo, ThemeToggle } from "./custom.components.jsx";
import { useScrolled } from "../hooks/useScrolled.hook.js";
import { classNames } from "../utils/Helper.js";
import { nav, site } from "../utils/Site.config.js";
import "../assets/styles/header.css";

/** Full-width sticky top bar with a divider line. A soft shadow appears once the page scrolls. */
export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(8);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={classNames("site-header", scrolled && "site-header--scrolled")}>
      <nav aria-label="Main" className="site-header__nav">
        <Logo size="sm" />

        <ul className="site-header__links">
          {nav.map((item) => (
            <li key={item.href}>
              <Link to={item.href} className="nav-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="site-header__actions">
          <a href={site.demoPhone.href} className="site-header__phone">
            <Phone size={15} className="site-header__phone-icon" />
            {site.demoPhone.display}
          </a>
          <span className="site-header__divider" aria-hidden="true" />
          <ThemeToggle />
          <Link to="/book-demo" className="btn btn-primary btn-sm site-header__demo">
            Book a demo
          </Link>
          <button
            type="button"
            className="site-header__menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            {menuOpen ? <Close size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div id="mobile-menu" className="mobile-menu">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} onClick={closeMenu} className="mobile-menu__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={site.demoPhone.href} className="mobile-menu__phone">
            <Phone size={16} className="site-header__phone-icon" />
            Call our demo agent: {site.demoPhone.display}
          </a>
          <Link to="/book-demo" onClick={closeMenu} className="btn btn-primary btn-block mobile-menu__cta">
            Book a demo
          </Link>
        </div>
      ) : null}
    </header>
  );
};
