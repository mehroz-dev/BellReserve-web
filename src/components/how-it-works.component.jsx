import { SectionHead } from "./custom.components.jsx";
import { Cube } from "./vectors.component.jsx";
import "../assets/styles/how-it-works.css";

const STEPS = [
  {
    title: "We learn your business",
    body: "A short call and an intake form: your services, prices, hours, FAQs, booking rules and the tone you want callers to hear.",
    tag: "Services · Prices · FAQs · Tone",
  },
  {
    title: "We train your agent",
    body: "Built on our niche pack for your industry, then tested on real call scenarios before it ever speaks to a customer.",
    tag: "Built for your niche · QA tested",
  },
  {
    title: "We connect your tools",
    body: "Forward your existing number, link your calendar and CRM, and you’re live. Your team sees every call in one dashboard.",
    tag: "Phone · Calendar · CRM",
  },
];

/** "How it works": three numbered steps joined by a line (home and industry pages). */
export const HowItWorks = () => (
  <section id="how" className="sec soft-alt">
    <div className="glow how-it-works__glow" />
    <div className="wrap how-it-works">
      <SectionHead
        center
        eyebrow="How it works · Done for you"
        title={
          <>
            Live in 3 steps. You don&apos;t touch <span className="grad-text">a single setting.</span>
          </>
        }
        lead="Our team builds, trains and connects your agent. You approve it, and your phone starts getting answered."
      />

      <ol className="how-it-works__steps">
        <li className="how-it-works__connector" aria-hidden="true" />
        {STEPS.map((step, index) => (
          <li key={step.title} className="card how-step">
            <Cube size={92} label={String(index + 1)} />
            <h3 className="h3">{step.title}</h3>
            <p className="body-text">{step.body}</p>
            <span className="mono how-step__tag">{step.tag}</span>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
