import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../utils/Helper.js";
import "../assets/styles/calculator.css";

const GAUGE_RADIUS = 118;
const GAUGE_CIRCUMFERENCE = 2 * Math.PI * GAUGE_RADIUS;
const WEEKS_PER_MONTH = 4.33;
const GAUGE_FULL_AT = 40000;

const Slider = ({ id, label, display, min, max, step, value, onChange }) => {
  const handleChange = (event) => {
    onChange(Number(event.target.value));
  };

  return (
    <div className="calculator-slider">
      <div className="calculator-slider__row">
        <label htmlFor={id} className="calculator-slider__label">
          {label}
        </label>
        <span className="mono calculator-slider__value">{display}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

const ResultStat = ({ label, value }) => (
  <div className="deep-glass calculator-stat">
    <span className="mono calculator-stat__label">{label}</span>
    <span className="calculator-stat__value">{value}</span>
  </div>
);

/** "What missed calls cost you": three sliders on the left (60%) and the revenue gauge on the right (40%). */
export const Calculator = () => {
  const [missedCalls, setMissedCalls] = useState(20);
  const [customerValue, setCustomerValue] = useState(150);
  const [bookingRate, setBookingRate] = useState(40);
  const id = useId();

  const lostCustomers = missedCalls * WEEKS_PER_MONTH * (bookingRate / 100);
  const monthlyLoss = lostCustomers * customerValue;
  const gaugeShare = Math.max(0.04, Math.min(1, monthlyLoss / GAUGE_FULL_AT));
  const gaugeDash = `${(gaugeShare * GAUGE_CIRCUMFERENCE).toFixed(1)} ${GAUGE_CIRCUMFERENCE.toFixed(1)}`;

  return (
    <section id="calculator" className="sec">
      <div className="wrap calculator">
        <div className="calculator__copy">
          <span className="eyebrow">What missed calls cost you</span>
          <h2 className="h2">
            Every unanswered call is a customer <span className="grad-text">calling someone else.</span>
          </h2>
          <p className="lead">
            Move the sliders to match your business. This is the revenue walking out the door today, and what BellReserve is built to recover.
          </p>
          <div className="card card--static calculator__controls">
            <Slider
              id={`${id}-missed`}
              label="Missed calls per week"
              display={String(missedCalls)}
              min={1}
              max={100}
              step={1}
              value={missedCalls}
              onChange={setMissedCalls}
            />
            <Slider
              id={`${id}-value`}
              label="Average value of a new customer"
              display={`$${formatNumber(customerValue)}`}
              min={20}
              max={2000}
              step={10}
              value={customerValue}
              onChange={setCustomerValue}
            />
            <Slider
              id={`${id}-rate`}
              label="Callers who would have booked"
              display={`${bookingRate}%`}
              min={5}
              max={90}
              step={5}
              value={bookingRate}
              onChange={setBookingRate}
            />
          </div>
        </div>

        <div className="calculator__result-wrap">
          <div className="glow calculator__glow" />
          <div className="deep calculator__result" aria-live="polite">
            <div className="calculator__shine" />
            <span className="mono calculator__result-label">Estimated revenue lost every month</span>

            <div className="calculator__gauge">
              <svg width="280" height="280" viewBox="0 0 280 280" aria-hidden="true" className="calculator__gauge-ring">
                <circle cx="140" cy="140" r={GAUGE_RADIUS} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="18" />
                <circle
                  cx="140"
                  cy="140"
                  r={GAUGE_RADIUS}
                  fill="none"
                  stroke="url(#g-gauge)"
                  strokeWidth="18"
                  strokeLinecap="round"
                  strokeDasharray={gaugeDash}
                  className="calculator__gauge-fill"
                />
              </svg>
              <div className="calculator__gauge-center">
                <span className="calculator__amount">${formatNumber(monthlyLoss)}</span>
                <span className="calculator__per">per month</span>
              </div>
            </div>

            <div className="calculator__stats">
              <ResultStat label="Per year" value={`$${formatNumber(monthlyLoss * 12)}`} />
              <ResultStat label="Lost customers / mo" value={formatNumber(lostCustomers)} />
            </div>

            <Link to="/book-demo" className="btn btn-primary btn-lg btn-block calculator__cta">
              Stop losing these calls
            </Link>
            <span className="calculator__note">An estimate from your inputs, not a guarantee of results.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
