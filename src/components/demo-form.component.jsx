import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Arrow, Check } from "./icons.component.jsx";
import { submitDemoRequest } from "../services/Demo.services.js";
import { industries, industrySlugs } from "../utils/Industries.config.js";
import { site } from "../utils/Site.config.js";
import "../assets/styles/demo-form.css";

const CALLS_PER_WEEK_OPTIONS = [
  {
    value: "",
    label: "Not sure",
  },
  {
    value: "<50",
    label: "Under 50",
  },
  {
    value: "50-200",
    label: "50–200",
  },
  {
    value: "200-500",
    label: "200–500",
  },
  {
    value: "500+",
    label: "500+",
  },
];

const FieldError = ({ id, message }) => {
  if (!message) {
    return null;
  }

  return (
    <span id={id} className="demo-form__error">
      {message}
    </span>
  );
};

const TextField = ({ label, name, type = "text", autoComplete, error }) => (
  <div className="demo-form__field">
    <label htmlFor={name} className="demo-form__label">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      autoComplete={autoComplete}
      required
      className="field"
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${name}-error` : undefined}
    />
    <FieldError id={`${name}-error`} message={error} />
  </div>
);

const SuccessMessage = () => (
  <div className="demo-form__success" role="status">
    <span className="icon-tile">
      <Check size={26} />
    </span>
    <h2 className="h3">Thanks, we&apos;ve got your request.</h2>
    <p className="body-text">Our team will reach out within one business day to book your demo. Want to hear the agent right now?</p>
    <div className="demo-form__success-actions">
      <a href={site.demoPhone.href} className="btn btn-primary">
        Call our agent
      </a>
      <Link to="/" className="btn btn-ghost">
        Back to home
      </Link>
    </div>
  </div>
);

/** Demo request form. `?industry=` and `?plan=` in the URL pre-fill it. */
export const DemoForm = () => {
  const [searchParams] = useSearchParams();
  const requestedIndustry = searchParams.get("industry");
  const initialIndustry = industrySlugs.includes(requestedIndustry) ? requestedIndustry : "";
  const plan = searchParams.get("plan") || "";

  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");
    setErrors({});
    setFormError("");

    const formValues = Object.fromEntries(new FormData(event.currentTarget).entries());

    const result = await submitDemoRequest({
      ...formValues,
      plan,
    });

    if (result.ok) {
      setStatus("done");

      return;
    }

    setErrors(result.errors);
    setFormError(result.error);
    setStatus("error");
  };

  if (status === "done") {
    return <SuccessMessage />;
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} noValidate className="demo-form">
      <div className="demo-form__grid">
        <TextField label="Your name" name="name" autoComplete="name" error={errors.name} />
        <TextField label="Business name" name="business" autoComplete="organization" error={errors.business} />
        <TextField label="Work email" name="email" type="email" autoComplete="email" error={errors.email} />
        <TextField label="Phone" name="phone" type="tel" autoComplete="tel" error={errors.phone} />

        <div className="demo-form__field">
          <label htmlFor="industry" className="demo-form__label">
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            defaultValue={initialIndustry}
            className="field"
            aria-invalid={Boolean(errors.industry)}
            aria-describedby={errors.industry ? "industry-error" : undefined}
          >
            <option value="" disabled>
              Choose one
            </option>
            {industries.map((industry) => (
              <option key={industry.slug} value={industry.slug}>
                {industry.navLabel}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
          <FieldError id="industry-error" message={errors.industry} />
        </div>

        <div className="demo-form__field">
          <label htmlFor="callsPerWeek" className="demo-form__label">
            Calls per week
          </label>
          <select id="callsPerWeek" name="callsPerWeek" defaultValue="" className="field">
            {CALLS_PER_WEEK_OPTIONS.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="demo-form__field">
        <label htmlFor="message" className="demo-form__label">
          Anything we should know? <span className="demo-form__optional">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="field"
          placeholder="Locations, hours, tools you use, what calls you miss most…"
        />
      </div>

      {/* Honeypot: hidden from people, filled in by bots. */}
      <div aria-hidden="true" className="demo-form__honeypot">
        <label htmlFor="company_website">Website</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      {plan ? (
        <p className="demo-form__plan">
          Interested in: <strong className="demo-form__plan-name">{plan}</strong>
        </p>
      ) : null}

      {formError ? (
        <p role="alert" className="demo-form__alert">
          {formError}
        </p>
      ) : null}

      <button type="submit" disabled={sending} className="btn btn-primary btn-lg btn-block">
        {sending ? "Sending…" : "Book my demo"}
        {sending ? null : <Arrow size={18} />}
      </button>

      <p className="demo-form__consent">
        By submitting, you agree to our{" "}
        <Link to="/privacy" className="demo-form__consent-link">
          Privacy Policy
        </Link>
        . We&apos;ll only use your details to set up your demo.
      </p>
    </form>
  );
};
