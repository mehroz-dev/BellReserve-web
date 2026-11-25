import { Play } from "./icons.component.jsx";
import { SectionHead } from "./custom.components.jsx";
import { Wave } from "./vectors.component.jsx";
import brandIcon from "../assets/images/brand/bellreserve-icon.png";

const AGENT_FACTS = [
  {
    label: "Greets as",
    value: "“Thanks for calling [Your Business]”",
  },
  {
    label: "Knows",
    value: "Your services, prices, hours and FAQs",
  },
  {
    label: "Speaks",
    value: "In the tone you choose",
  },
  {
    label: "Escalates",
    value: "By your rules, to your team",
  },
];

const TODAY_STATS = [
  {
    value: "48",
    label: "Calls answered",
  },
  {
    value: "19",
    label: "Booked",
  },
  {
    value: "0",
    label: "Missed",
  },
];

const AGENT_POINTS = [
  {
    title: "Confirms every detail",
    body: "Reads back names, dates, times and numbers before anything is booked.",
  },
  {
    title: "Never makes things up",
    body: "If it doesn’t know a price or policy, it says so and offers a callback.",
  },
  {
    title: "Follows up by text",
    body: "Every booking ends with an SMS confirmation, signed with your business name.",
  },
];

const AgentCard = () => (
  <div className="deep agent-card">
    <div className="agent-card__shine" />

    <div className="agent-card__head">
      <div className="agent-card__avatar" aria-hidden="true">
        <svg width="96" height="96" viewBox="0 0 96 96" className="agent-card__sphere">
          <circle cx="48" cy="48" r="44" fill="url(#g-sphere)" />
          <ellipse cx="34" cy="28" rx="14" ry="8" fill="#FFFFFF" opacity="0.4" transform="rotate(-30 34 28)" />
        </svg>
        <span className="agent-card__logo">
          <img src={brandIcon} alt="" width={32} height={32} />
        </span>
      </div>
      <div className="agent-card__heading">
        <span className="mono muted-d agent-card__label">Your agent</span>
        <span className="agent-card__name">
          Your name.
          <br />
          Your voice.
        </span>
      </div>
    </div>

    <div className="agent-card__facts">
      {AGENT_FACTS.map((fact) => (
        <div key={fact.label} className="deep-glass agent-fact">
          <span className="mono muted-d agent-fact__label">{fact.label}</span>
          <span className="agent-fact__value">{fact.value}</span>
        </div>
      ))}
    </div>

    <div className="deep-glass agent-today">
      <div className="mono muted-d agent-today__head">
        <span>Today on the line</span>
        <span className="agent-today__live">
          <span className="live-dot" />
          Live
        </span>
      </div>
      <div className="agent-today__stats">
        {TODAY_STATS.map((stat) => (
          <div key={stat.label} className="agent-today__stat">
            <span className="agent-today__value">{stat.value}</span>
            <span className="muted-d agent-today__label">{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="agent-today__chat">
        <div className="agent-today__message agent-today__message--caller">Do you have anything this Thursday?</div>
        <div className="agent-today__message agent-today__message--agent">Thursday at 10:30 is open. Shall I book it?</div>
      </div>
    </div>

    <div className="sample-call">
      <div className="sample-call__info">
        <span className="sample-call__title">Sample call</span>
        <span className="sample-call__meta">Dental · new-patient booking · 1:05</span>
      </div>
      <Wave count={4} height={24} />
      <button type="button" aria-label="Play sample call (recording coming soon)" className="btn-primary sample-call__play">
        <Play size={18} />
      </button>
    </div>
  </div>
);

/** "Meet your AI calling agent": the agent card (40%) and the three promises (60%). */
export const MeetAgent = () => (
  <section className="sec">
    <div className="wrap meet-agent">
      <div className="meet-agent__visual">
        <div className="glow meet-agent__glow" />
        <AgentCard />
      </div>

      <div className="meet-agent__copy">
        <SectionHead
          eyebrow="Meet your AI calling agent"
          title={
            <>
              A front desk that never puts a customer <span className="grad-text">on hold.</span>
            </>
          }
          lead="Not a generic chatbot reading one script for every business. Your agent is trained on how your business actually works, then answers like your best receptionist on their best day."
        />
        <div className="meet-agent__points">
          {AGENT_POINTS.map((point, index) => (
            <div key={point.title} className="agent-point">
              <span className="mono agent-point__number">0{index + 1}</span>
              <div className="agent-point__text">
                <span className="agent-point__title">{point.title}</span>
                <span className="body-text">{point.body}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
