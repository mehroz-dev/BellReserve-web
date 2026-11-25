import { Link } from "react-router-dom";
import { Sphere } from "./vectors.component.jsx";
import { site } from "../utils/Site.config.js";
import "../assets/styles/final-cta.css";

const DEFAULT_TITLE = "Your phone will ring today. Make sure someone answers.";

/** Full-width blue call-to-action band at the end of every page, just above the footer. */
export const FinalCta = ({ title = DEFAULT_TITLE }) => (
  <section className="final-cta">
    <div className="final-cta__band">
      <div className="floor final-cta__floor" />
      <Sphere size={110} className="fl final-cta__sphere" />
      <svg className="fl2 final-cta__cube" width="100" height="107" viewBox="0 0 150 160" aria-hidden="true">
        <polygon points="75,10 135,44 75,78 15,44" fill="#FFFFFF" fillOpacity="0.9" />
        <polygon points="15,44 75,78 75,140 15,106" fill="#C9D8FF" />
        <polygon points="135,44 75,78 75,140 135,106" fill="#8DADFF" />
      </svg>
      <svg className="fl2 final-cta__ring" width="90" height="90" viewBox="0 0 120 120" aria-hidden="true">
        <ellipse
          cx="60"
          cy="60"
          rx="50"
          ry="20"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.55"
          strokeWidth="10"
          transform="rotate(-25 60 60)"
        />
      </svg>

      <span className="mono final-cta__label">Never miss another call</span>
      <h2 className="final-cta__title">{title}</h2>
      <p className="final-cta__text">
        Book a 20-minute demo. We&apos;ll show you your agent handling real calls for your industry, and get you live in days.
      </p>
      <div className="final-cta__actions">
        <Link to="/book-demo" className="btn btn-light">
          Book a demo
        </Link>
        <a href={site.demoPhone.href} className="btn btn-dark">
          Call our agent now
        </a>
      </div>
    </div>
  </section>
);
