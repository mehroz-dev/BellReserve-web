import { Calendar, Link2, Message, Phone, UserPlus } from "./icons.component.jsx";
import { SectionHead } from "./custom.components.jsx";
import brandIcon from "../assets/images/brand/bellreserve-icon.png";

/** Each chip sits on a point of the outer ring; the position class places it there. */
const INTEGRATION_CHIPS = [
  {
    label: "Your existing number",
    icon: <Phone size={16} />,
    position: "top-left",
    motion: "fl",
  },
  {
    label: "Google Calendar",
    icon: <Calendar size={16} />,
    position: "top-right",
    motion: "fl2",
  },
  {
    label: "Outlook",
    icon: <Calendar size={16} />,
    position: "right",
    motion: "fl",
  },
  {
    label: "Webhooks & Zapier",
    icon: <Link2 size={16} />,
    position: "bottom-right",
    motion: "fl2",
  },
  {
    label: "Your CRM",
    icon: <UserPlus size={16} />,
    position: "bottom-left",
    motion: "fl",
  },
  {
    label: "SMS",
    icon: <Message size={16} />,
    position: "left",
    motion: "fl2",
  },
];

/** "Works with your tools": the BellReserve icon inside two rings, with integration chips on the outer ring. */
export const Integrations = () => (
  <section className="sec integrations">
    <div className="wrap integrations__grid">
      <SectionHead
        eyebrow="Works with your tools"
        title={
          <>
            Keep your number. Keep your calendar. <span className="grad-text">We plug into both.</span>
          </>
        }
        lead="Bookings land where your team already looks. Need something else connected? We handle it during setup."
      />

      <div className="integrations__orbit">
        <div className="glow integrations__glow" />
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 560 480"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="integrations__rings"
        >
          <ellipse cx="280" cy="240" rx="225" ry="195" fill="none" stroke="var(--border-strong)" strokeDasharray="4 7" vectorEffect="non-scaling-stroke" />
          <ellipse cx="280" cy="240" rx="145" ry="126" fill="none" stroke="var(--border-strong)" strokeDasharray="4 7" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="integrations__logo">
          <img src={brandIcon} alt="BellReserve" width={88} height={88} />
        </div>
        {INTEGRATION_CHIPS.map((chip) => (
          <span key={chip.label} className={`glass ${chip.motion} integration-chip integration-chip--${chip.position}`}>
            <span className="chip__icon">{chip.icon}</span>
            {chip.label}
          </span>
        ))}
      </div>

      <ul className="integrations__list">
        {INTEGRATION_CHIPS.map((chip) => (
          <li key={chip.label} className="chip">
            <span className="chip__icon">{chip.icon}</span>
            {chip.label}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
