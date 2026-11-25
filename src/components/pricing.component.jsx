import { Link } from "react-router-dom";
import { Check } from "./icons.component.jsx";
import { SectionHead } from "./custom.components.jsx";
import { plans, site } from "../utils/Site.config.js";
import { classNames } from "../utils/Helper.js";

const PlanBody = ({ plan, dark = false }) => (
  <>
    <div className="plan__head">
      <span className="mono plan__name">{plan.name}</span>
      <span className="plan__blurb">{plan.blurb}</span>
    </div>

    <div className="plan__price-row">
      <span className="plan__price">{plan.price}</span>
      {plan.period ? <span className="plan__period">{plan.period}</span> : null}
    </div>

    <Link
      to={`/book-demo?plan=${plan.name.toLowerCase()}`}
      className={classNames("btn", "plan__cta", dark ? "btn-primary" : "btn-ghost")}
    >
      {plan.cta}
    </Link>

    <ul className="plan__features">
      {plan.features.map((feature) => (
        <li key={feature} className="plan__feature">
          <Check size={18} className="plan__check" />
          {feature}
        </li>
      ))}
    </ul>
  </>
);

const FeaturedPlan = ({ plan }) => (
  <div className="plan-featured">
    <div className="deep plan plan--dark">
      <div className="plan__shine" />
      <span className="mono plan__badge">Most popular</span>
      <PlanBody plan={plan} dark />
    </div>
  </div>
);

const StandardPlan = ({ plan }) => (
  <div className="card plan">
    <PlanBody plan={plan} />
  </div>
);

/** Three packages, the middle one highlighted. */
export const Pricing = () => (
  <section id="pricing" className="sec soft-alt">
    <div className="glow pricing__glow" />
    <div className="wrap pricing">
      <SectionHead
        center
        eyebrow="Packages"
        title={
          <>
            Less than a part-time receptionist. <span className="grad-text">Working every hour of the week.</span>
          </>
        }
        lead={`Every package includes done-for-you setup for a one-time ${site.setupFee}.`}
      />

      <div className="pricing__grid">
        {plans.map((plan) =>
          plan.featured ? (
            <FeaturedPlan key={plan.name} plan={plan} />
          ) : (
            <StandardPlan key={plan.name} plan={plan} />
          ),
        )}
      </div>
    </div>
  </section>
);
