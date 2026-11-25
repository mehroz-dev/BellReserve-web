import { CalendarCheck, Phone, Users } from "./icons.component.jsx";

const HIGHLIGHTS = [
  {
    icon: <Phone size={24} />,
    ink: true,
    title: "Answers every call",
    body: "First ring, every time. Nights, weekends and rush hours included.",
  },
  {
    icon: <CalendarCheck size={24} />,
    ink: false,
    title: "Books while they’re on the line",
    body: "Appointments, reservations and orders go straight into your calendar.",
  },
  {
    icon: <Users size={24} />,
    ink: true,
    title: "Hands over when it matters",
    body: "Emergencies and “can I speak to someone?” go to your team instantly.",
  },
];

/** Three short promise cards under the industry marquee. */
export const Highlights = () => (
  <section className="sec highlights">
    <div className="wrap highlights__grid">
      {HIGHLIGHTS.map((highlight, index) => (
        <div key={highlight.title} className="card highlight-card">
          <div className={index === 1 ? "glow highlight-card__glow highlight-card__glow--strong" : "glow highlight-card__glow"} />
          <span className={highlight.ink ? "icon-tile icon-tile--ink" : "icon-tile"}>{highlight.icon}</span>
          <h3 className="h3">{highlight.title}</h3>
          <p className="body-text">{highlight.body}</p>
        </div>
      ))}
    </div>
  </section>
);
