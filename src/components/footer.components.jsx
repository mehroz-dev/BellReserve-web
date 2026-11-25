import { Link } from "react-router-dom";
import { Logo } from "./custom.components.jsx";
import { industries } from "../utils/Industries.config.js";
import { site } from "../utils/Site.config.js";
import "../assets/styles/footer.css";

const COPYRIGHT_YEAR = 2026;

const FooterColumn = ({ title, children }) => (
  <div className="footer-column">
    <span className="footer-column__title">{title}</span>
    {children}
  </div>
);

/** Site footer. It always uses the dark theme, and runs full width in light mode. */
export const Footer = () => (
  <footer data-theme="dark" className="site-footer dark-band">
    <div className="wrap site-footer__inner">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <Logo size="md" />
          <p className="body-text site-footer__about">
            The AI calling agent that answers every call for restaurants, HVAC, dental, real estate and front-desk teams.
          </p>
        </div>

        <FooterColumn title="Product">
          <Link to="/#features">Features</Link>
          <Link to="/#how">How it works</Link>
          <Link to="/#pricing">Pricing</Link>
          <Link to="/#faq">FAQ</Link>
        </FooterColumn>

        <FooterColumn title="Industries">
          {industries.map((industry) => (
            <Link key={industry.slug} to={`/industries/${industry.slug}`}>
              {industry.navLabel}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.contactPhone.href}>{site.contactPhone.display}</a>
          <Link to="/book-demo" className="footer-column__cta">
            Book a demo
          </Link>
        </FooterColumn>
      </div>

      <div className="site-footer__bottom">
        <span>© {COPYRIGHT_YEAR} BellReserve. All rights reserved.</span>
        <div className="site-footer__legal">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
        </div>
      </div>
    </div>
  </footer>
);
