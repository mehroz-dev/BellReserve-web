import { Phone, User } from "./icons.component.jsx";
import { SectionHead } from "./custom.components.jsx";
import { Pin, Wave } from "./vectors.component.jsx";
import brandIcon from "../assets/images/brand/bellreserve-icon.png";

const STACKED_CALLS = [
  "Call 1 · Booking",
  "Call 2 · Order",
  "Call 3 · FAQ",
];

const TRANSCRIPT_LINES = [1, 2, 3, 4, 5];

const FeatureVisual = ({ variant, children }) => (
  <div aria-hidden="true" className={`feature-visual feature-visual--${variant}`}>
    {children}
  </div>
);

const FEATURES = [
  {
    title: "Picks up on the first ring",
    body: "No voicemail, no “please hold”. Callers get an answer the moment they dial.",
    visual: (
      <FeatureVisual variant="ring">
        <span className="live feature-visual__ring">
          <Phone size={24} />
        </span>
        <span className="mono feature-visual__ring-label">Ring 1 · Answered</span>
      </FeatureVisual>
    ),
  },
  {
    title: "Sounds natural",
    body: "A warm, human-like voice that lets callers interrupt and change their mind.",
    visual: (
      <FeatureVisual variant="wave">
        <Wave count={11} height={64} />
      </FeatureVisual>
    ),
  },
  {
    title: "Handles calls at once",
    body: "Rush hour, promo day or emergency season: no caller ever hears a busy tone.",
    visual: (
      <FeatureVisual variant="stack">
        {STACKED_CALLS.map((call, index) => (
          <div key={call} className={`glass feature-visual__call feature-visual__call--${index + 1}`}>
            <span className="feature-visual__call-dot" />
            <span className="mono feature-visual__call-label">{call}</span>
          </div>
        ))}
      </FeatureVisual>
    ),
  },
  {
    title: "Smooth handover to your team",
    body: "Transfers live calls by your rules, or takes a detailed message when no one’s free.",
    visual: (
      <FeatureVisual variant="handover">
        <span className="icon-tile">
          <img src={brandIcon} alt="" width={24} height={24} className="feature-visual__brand" />
        </span>
        <svg width="70" height="16" viewBox="0 0 70 16" aria-hidden="true">
          <path d="M2 8h60" stroke="#2563FF" strokeWidth="2" strokeDasharray="4 5" />
          <path d="M58 3l6 5-6 5" fill="none" stroke="#2563FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="icon-tile icon-tile--ink">
          <User size={22} />
        </span>
      </FeatureVisual>
    ),
  },
  {
    title: "Transcripts and summaries",
    body: "Every call recorded, transcribed and summarised in your dashboard and inbox.",
    visual: (
      <FeatureVisual variant="lines">
        {TRANSCRIPT_LINES.map((line) => (
          <span key={line} className={`feature-visual__line feature-visual__line--${line}`} />
        ))}
      </FeatureVisual>
    ),
  },
  {
    title: "Ready for every location",
    body: "One agent per location, each with its own hours and rules, all in one view.",
    visual: (
      <FeatureVisual variant="pins">
        <Pin size={60} />
        <Pin size={48} fill="url(#g-sphere-ink)" />
        <Pin size={40} fill="url(#g-top)" />
      </FeatureVisual>
    ),
  },
];

/** Six feature cards, each with a small illustration on top. */
export const Features = () => (
  <section id="features" className="sec">
    <div className="wrap features">
      <div className="features__head">
        <SectionHead
          eyebrow="Features"
          title={
            <>
              Everything a great receptionist does. <span className="grad-text">Without the hold music.</span>
            </>
          }
        />
        <p className="lead features__lead">Every call answered, handled and logged, so your team only picks up the ones that need a person.</p>
      </div>

      <div className="features__grid">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="card feature-card">
            {feature.visual}
            <h3 className="h3">{feature.title}</h3>
            <p className="body-text">{feature.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
