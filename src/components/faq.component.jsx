import { Link } from "react-router-dom";
import { Mail, Phone, Plus } from "./icons.component.jsx";
import { Cube, Sphere, Wave } from "./vectors.component.jsx";
import { site } from "../utils/Site.config.js";
import "../assets/styles/faq.css";

const DEFAULT_TITLE = (
  <>
    Questions owners <span className="grad-text">ask us first.</span>
  </>
);

/** Card under the FAQ heading: a small chat illustration plus email, phone and demo links. */
const FaqHelpCard = () => (
  <div className="faq-help">
    <div aria-hidden="true" className="faq-help__visual">
      <div className="floor" />
      <Sphere size={92} className="fl faq-help__sphere" />
      <Cube size={64} className="fl2 faq-help__cube" />
      <div className="faq-help__chat">
        <div className="faq-help__question">Can it take my booking at 11 PM?</div>
        <div className="glass faq-help__answer">
          <span className="faq-help__answer-icon">
            <Phone size={15} />
          </span>
          <span>Of course. What time works for you?</span>
          <Wave count={5} height={18} />
        </div>
      </div>
    </div>

    <div className="faq-help__links">
      <a href={`mailto:${site.email}`} className="faq-help__link">
        <span className="icon-tile">
          <Mail size={18} />
        </span>
        <span className="faq-help__link-text">
          <span className="faq-help__link-label">Email us, we reply within a day</span>
          <span className="faq-help__link-value">{site.email}</span>
        </span>
      </a>
      <a href={site.demoPhone.href} className="faq-help__link">
        <span className="icon-tile icon-tile--ink">
          <Phone size={18} />
        </span>
        <span className="faq-help__link-text">
          <span className="faq-help__link-label">Ask our demo agent yourself</span>
          <span className="faq-help__link-value">{site.demoPhone.display}</span>
        </span>
      </a>
      <Link to="/book-demo" className="btn btn-primary faq-help__cta">
        Book a 20-minute demo
      </Link>
    </div>
  </div>
);

/** FAQ section: sticky heading and help card on the left, collapsible questions on the right. */
export const Faq = ({ items, title = DEFAULT_TITLE }) => (
  <section id="faq" className="sec">
    <div className="wrap faq">
      <div className="faq__intro">
        <span className="eyebrow">FAQ</span>
        <h2 className="h2">{title}</h2>
        <p className="lead">
          Still curious? Email{" "}
          <a href={`mailto:${site.email}`} className="faq__email">
            {site.email}
          </a>{" "}
          or book a 20-minute demo.
        </p>
        <FaqHelpCard />
      </div>

      <div className="faq__list">
        {items.map((item, index) => (
          <details key={item.q} className="faq-item" open={index === 0}>
            <summary className="faq-item__question">
              {item.q}
              <span className="faq-item__icon">
                <Plus size={16} />
              </span>
            </summary>
            <p className="faq-item__answer">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
