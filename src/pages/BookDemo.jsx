import { CalendarCheck, Check, Phone } from "../components/icons.component.jsx";
import { DemoForm } from "../components/demo-form.component.jsx";
import { Sphere } from "../components/vectors.component.jsx";
import { useDocumentMeta } from "../hooks/useDocumentMeta.hook.js";
import { site } from "../utils/Site.config.js";
import "../assets/styles/BookDemo.css";

const DEMO_POINTS = [
  "A live call with an agent for your industry",
  "What your agent will handle, and when it hands over",
  "Your setup plan and package, done for you",
];

const BookDemo = () => {
  useDocumentMeta({
    title: "Book a demo",
    description: "See your AI calling agent handle real calls for your industry. Book a 20-minute demo with the BellReserve team.",
    path: "/book-demo",
  });

  return (
    <section className="sec book-demo">
      <div className="glow book-demo__glow" />

      <div className="wrap book-demo__grid">
        <div className="book-demo__intro">
          <span className="eyebrow">Book a demo</span>
          <h1 className="h1 book-demo__title">
            See your agent answer <span className="grad-text">real calls.</span>
          </h1>
          <p className="lead">In 20 minutes we&apos;ll show you an agent handling calls for your industry, answer your questions and map out your setup.</p>

          <ul className="book-demo__points">
            {DEMO_POINTS.map((point) => (
              <li key={point} className="book-demo__point">
                <span className="book-demo__point-icon">
                  <Check size={14} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="glass book-demo__call">
            <span className="icon-tile">
              <Phone size={22} />
            </span>
            <div className="book-demo__call-text">
              <span className="book-demo__call-title">Can&apos;t wait? Call our demo agent now.</span>
              <a href={site.demoPhone.href} className="mono book-demo__call-number">
                {site.demoPhone.display}
              </a>
            </div>
          </div>

          <Sphere size={120} className="fl book-demo__sphere" />
        </div>

        <div className="card card--static book-demo__card">
          <div className="book-demo__card-head">
            <span className="icon-tile icon-tile--ink">
              <CalendarCheck size={20} />
            </span>
            <div className="book-demo__card-heading">
              <span className="book-demo__card-title">Tell us about your business</span>
              <span className="book-demo__card-subtitle">Takes under a minute</span>
            </div>
          </div>
          <DemoForm />
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
