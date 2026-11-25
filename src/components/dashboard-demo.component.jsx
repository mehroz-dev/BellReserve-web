import { useEffect, useRef, useState } from "react";
import { Bolt, CalendarCheck, Phone, Shield, Users } from "./icons.component.jsx";
import { SectionHead } from "./custom.components.jsx";
import { Wave } from "./vectors.component.jsx";
import { useCountUp } from "../hooks/useCountUp.hook.js";
import { useInView } from "../hooks/useInView.hook.js";
import { useReducedMotion } from "../hooks/useReducedMotion.hook.js";
import { classNames, delayStyle, formatNumber } from "../utils/Helper.js";
import brandIcon from "../assets/images/brand/bellreserve-icon.png";
import "../assets/styles/dashboard-demo.css";

const VIEWS = [
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "live",
    label: "Live calls",
  },
  {
    id: "bookings",
    label: "Bookings",
  },
];

/** How long each view stays on screen before the next one plays. */
const VIEW_DURATION = 7000;

const SIDEBAR_ITEMS = [
  {
    label: "Overview",
    icon: <Bolt size={17} />,
    view: "overview",
  },
  {
    label: "Live calls",
    icon: <Phone size={17} />,
    view: "live",
  },
  {
    label: "Bookings",
    icon: <CalendarCheck size={17} />,
    view: "bookings",
  },
  {
    label: "Contacts",
    icon: <Users size={17} />,
  },
  {
    label: "Settings",
    icon: <Shield size={17} />,
  },
];

const HOURLY_CALLS = [
  {
    height: 22,
    afterHours: true,
  },
  {
    height: 38,
    afterHours: true,
  },
  {
    height: 72,
    afterHours: false,
  },
  {
    height: 88,
    afterHours: false,
  },
  {
    height: 64,
    afterHours: false,
  },
  {
    height: 96,
    afterHours: false,
  },
  {
    height: 80,
    afterHours: false,
  },
  {
    height: 58,
    afterHours: false,
  },
  {
    height: 54,
    afterHours: true,
  },
  {
    height: 44,
    afterHours: true,
  },
  {
    height: 26,
    afterHours: true,
  },
  {
    height: 14,
    afterHours: true,
  },
];

const RECENT_CALLS = [
  {
    time: "11:48 PM",
    summary: "New patient · cleaning booked",
    tag: "Booked",
  },
  {
    time: "9:12 PM",
    summary: "Insurance question · answered",
    tag: "FAQ",
  },
  {
    time: "4:30 PM",
    summary: "Toothache · transferred to front desk",
    tag: "Handover",
  },
  {
    time: "2:05 PM",
    summary: "Rescheduled · Thu 10:00 AM",
    tag: "Booked",
  },
];

const LIVE_TRANSCRIPT = [
  {
    text: "Hi, do you have anything this Thursday for a cleaning?",
    agent: false,
  },
  {
    text: "Thursday at 10:30 AM is open. Can I get your name?",
    agent: true,
  },
  {
    text: "It's Sara Malik, I'm a new patient.",
    agent: false,
  },
  {
    text: "Welcome, Sara. You're booked for Thursday at 10:30. I'll text you the details.",
    agent: true,
  },
];

const CALL_QUEUE = [
  {
    number: "+1 (415) 555-0193",
    status: "On call · 01:12",
    live: true,
  },
  {
    number: "+1 (628) 555-0148",
    status: "Answered in 0.6s",
    live: false,
  },
  {
    number: "+1 (510) 555-0172",
    status: "Answered in 0.9s",
    live: false,
  },
];

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const TIME_SLOTS = ["9 AM", "11 AM", "1 PM", "3 PM", "5 PM"];

const CALENDAR_BOOKINGS = [
  {
    day: 0,
    slot: 0,
    label: "Cleaning · J. Wu",
    byAgent: true,
  },
  {
    day: 0,
    slot: 3,
    label: "Check-up · A. Khan",
    byAgent: false,
  },
  {
    day: 1,
    slot: 1,
    label: "New patient · R. Diaz",
    byAgent: true,
  },
  {
    day: 1,
    slot: 4,
    label: "Whitening · M. Lee",
    byAgent: true,
  },
  {
    day: 2,
    slot: 2,
    label: "Filling · T. Brown",
    byAgent: false,
  },
  {
    day: 3,
    slot: 0,
    label: "Cleaning · Sara M.",
    byAgent: true,
  },
  {
    day: 3,
    slot: 3,
    label: "Consult · P. Shah",
    byAgent: true,
  },
  {
    day: 4,
    slot: 1,
    label: "Check-up · L. Chen",
    byAgent: true,
  },
  {
    day: 4,
    slot: 2,
    label: "Emergency · D. Ross",
    byAgent: true,
  },
];

const BOOKING_SOURCES = [
  {
    label: "Phone calls",
    percent: 72,
  },
  {
    label: "After-hours calls",
    percent: 55,
  },
  {
    label: "Reschedules",
    percent: 28,
  },
];

/* ---------------- small pieces ---------------- */

const CallTag = ({ kind }) => (
  <span className={`mono dash-tag dash-tag--${kind.toLowerCase()}`}>{kind}</span>
);

const KpiCard = ({ label, value, subtitle, run, prefix = "", delay, primary = false }) => {
  const animatedValue = useCountUp(value, run);

  return (
    <div className={classNames("dash-in", "dash-kpi", primary && "dash-kpi--primary")} style={delayStyle(delay)}>
      <span className="mono dash-kpi__label">{label}</span>
      <span className="dash-kpi__value">
        {prefix}
        {formatNumber(animatedValue)}
      </span>
      <span className="dash-kpi__subtitle">{subtitle}</span>
    </div>
  );
};

/* ---------------- views ---------------- */

const OverviewView = ({ run }) => (
  <div className="dash-overview">
    <div className="dash-overview__kpis">
      <KpiCard primary label="Revenue recovered" prefix="$" value={18420} subtitle="After-hours and overflow" run={run} delay={0} />
      <KpiCard label="Calls answered" value={1284} subtitle="0 sent to voicemail" run={run} delay={90} />
      <KpiCard label="Bookings made" value={312} subtitle="96 new patients" run={run} delay={180} />
      <KpiCard label="After-hours calls" value={417} subtitle="32% of all calls" run={run} delay={270} />
    </div>

    <div className="dash-overview__panels">
      <div className="dash-in dash-panel" style={delayStyle(300)}>
        <div className="dash-panel__head">
          <span className="dash-panel__title">Calls by hour</span>
          <span className="dash-legend">
            <span className="dash-legend__item">
              <span className="dash-legend__swatch dash-legend__swatch--open" />
              Open hours
            </span>
            <span className="dash-legend__item">
              <span className="dash-legend__swatch dash-legend__swatch--after" />
              After hours
            </span>
          </span>
        </div>
        <div aria-hidden="true" className="dash-bars">
          {HOURLY_CALLS.map((hour, index) => (
            <span
              key={index}
              className={classNames("dash-grow", "dash-bars__bar", hour.afterHours && "dash-bars__bar--after")}
              style={{
                height: `${hour.height}%`,
                ...delayStyle(450 + index * 55),
              }}
            />
          ))}
        </div>
        <div className="mono dash-bars__axis">
          <span>6 AM</span>
          <span>12 PM</span>
          <span>6 PM</span>
          <span>12 AM</span>
        </div>
      </div>

      <div className="dash-in dash-panel dash-panel--list" style={delayStyle(380)}>
        <span className="dash-panel__title dash-panel__title--list">Recent calls</span>
        {RECENT_CALLS.map((call, index) => (
          <div key={call.time} className="dash-in dash-row" style={delayStyle(700 + index * 160)}>
            <span className="mono dash-row__time">{call.time}</span>
            <span className="dash-row__summary">{call.summary}</span>
            <CallTag kind={call.tag} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LiveView = () => (
  <div className="dash-live">
    <div className="dash-in dash-panel dash-call" style={delayStyle(0)}>
      <div className="dash-call__head">
        <span className="icon-tile">
          <Phone size={18} />
        </span>
        <div className="dash-call__caller">
          <span className="dash-panel__title">Incoming · New patient</span>
          <span className="mono dash-call__number">+1 (415) 555-0193 · Harbor Dental line</span>
        </div>
        <span className="mono dash-call__badge">
          <span className="dash-pulse dash-pulse--red" />
          Live
        </span>
      </div>

      <div className="dash-call__wave">
        <Wave count={12} height={26} />
      </div>

      <div className="dash-call__transcript">
        {LIVE_TRANSCRIPT.map((line, index) => (
          <div
            key={line.text}
            className={classNames("dash-in", "dash-bubble", line.agent ? "dash-bubble--agent" : "dash-bubble--caller")}
            style={delayStyle(500 + index * 1000)}
          >
            {line.text}
          </div>
        ))}
      </div>

      <div className="dash-pop dash-call__booked" style={delayStyle(4600)}>
        <CalendarCheck size={17} className="dash-call__booked-icon" />
        <span className="dash-call__booked-text">
          <strong>Booking created</strong> · Thu 10:30 AM · SMS sent
        </span>
        <CallTag kind="Booked" />
      </div>
    </div>

    <div className="dash-live__side">
      <div className="dash-in dash-live__stats" style={delayStyle(150)}>
        <div className="dash-panel">
          <span className="mono dash-kpi__label">Avg. answer</span>
          <span className="dash-stat__value">0.8s</span>
        </div>
        <div className="dash-panel">
          <span className="mono dash-kpi__label">Missed today</span>
          <span className="dash-stat__value">0</span>
        </div>
      </div>

      <div className="dash-in dash-panel dash-panel--list dash-panel--grow" style={delayStyle(250)}>
        <span className="dash-panel__title dash-panel__title--list">Call queue</span>
        {CALL_QUEUE.map((call, index) => (
          <div key={call.number} className="dash-in dash-row" style={delayStyle(450 + index * 160)}>
            <span className={classNames("dash-pulse", call.live ? "dash-pulse--red" : "dash-pulse--green dash-pulse--still")} />
            <span className="mono dash-row__number">{call.number}</span>
            <span className="dash-row__status">{call.status}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CalendarCell = ({ day, slot }) => {
  const booking = CALENDAR_BOOKINGS.find((item) => item.day === day && item.slot === slot);

  if (!booking) {
    return <div className="dash-calendar__cell" />;
  }

  const order = CALENDAR_BOOKINGS.indexOf(booking);

  return (
    <div className="dash-calendar__cell">
      <div
        className={classNames("dash-pop", "dash-booking", booking.byAgent && "dash-booking--agent")}
        style={delayStyle(300 + order * 170)}
      >
        <span className="dash-booking__label">{booking.label}</span>
        {booking.byAgent ? <span className="mono dash-booking__badge">AI booked</span> : null}
      </div>
    </div>
  );
};

const BookingsView = ({ run }) => {
  const bookedByAgent = useCountUp(38, run, 1600);

  return (
    <div className="dash-bookings">
      <div className="dash-in dash-panel dash-calendar" style={delayStyle(0)}>
        <div className="dash-calendar__grid">
          <span />
          {WEEK_DAYS.map((day) => (
            <span key={day} className="mono dash-calendar__day">
              {day}
            </span>
          ))}

          {TIME_SLOTS.map((time, slot) => (
            <div key={time} className="dash-calendar__row">
              <span className="mono dash-calendar__time">{time}</span>
              {WEEK_DAYS.map((day, dayIndex) => (
                <CalendarCell key={day} day={dayIndex} slot={slot} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="dash-bookings__side">
        <div className="dash-in dash-kpi dash-kpi--primary" style={delayStyle(150)}>
          <span className="mono dash-kpi__label">Booked by your agent</span>
          <span className="dash-kpi__value dash-kpi__value--large">{bookedByAgent}</span>
          <span className="dash-kpi__subtitle">this week, 21 of them after hours</span>
        </div>

        <div className="dash-in dash-panel dash-panel--grow dash-sources" style={delayStyle(300)}>
          <span className="dash-panel__title">Where bookings came from</span>
          {BOOKING_SOURCES.map((source, index) => (
            <div key={source.label} className="dash-source">
              <span className="dash-source__row">
                <span>{source.label}</span>
                <span className="dash-source__percent">{source.percent}%</span>
              </span>
              <span className="dash-source__track">
                <span
                  className="dash-fill dash-source__fill"
                  style={{
                    width: `${source.percent}%`,
                    ...delayStyle(600 + index * 150),
                  }}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- app window ---------------- */

/**
 * Animated product mock: an app window with a sidebar and three views
 * (overview, live call, bookings) that play in turn while the section is on screen.
 */
const DashboardDemo = () => {
  const rootRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cycle, setCycle] = useState(0);
  const inView = useInView(rootRef, 0.35);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || reducedMotion) {
      return undefined;
    }

    const timerId = window.setTimeout(() => {
      setActiveIndex((index) => (index + 1) % VIEWS.length);
      setCycle((count) => count + 1);
    }, VIEW_DURATION);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [activeIndex, cycle, inView, reducedMotion]);

  const selectView = (index) => {
    setActiveIndex(index);
    setCycle((count) => count + 1);
  };

  // static: reduced motion. wait: off screen, ready to play. run: playing.
  let animationState = "run";

  if (reducedMotion) {
    animationState = "static";
  } else if (!inView) {
    animationState = "wait";
  }

  const running = animationState === "run";
  const activeView = VIEWS[activeIndex];

  return (
    <div
      ref={rootRef}
      className="dash"
      data-state={animationState}
      style={{
        "--view-duration": `${VIEW_DURATION}ms`,
      }}
    >
      <div className="glass dash__frame">
        <div className="dash__window">
          <div className="dash__bar">
            <span className="dash__dots" aria-hidden="true">
              <span className="dash__dot" />
              <span className="dash__dot" />
              <span className="dash__dot" />
            </span>
            <span className="mono dash__address">app.bellreserve.com/harbor-dental</span>
            <span className="dash__bar-spacer" aria-hidden="true" />
          </div>

          <div className="dash__body">
            <aside className="dash__sidebar" aria-hidden="true">
              <div className="dash__brand">
                <span className="dash__brand-icon">
                  <img src={brandIcon} alt="" width={20} height={20} />
                </span>
                <span className="dash__brand-name">BellReserve</span>
              </div>
              {SIDEBAR_ITEMS.map((item) => (
                <span
                  key={item.label}
                  className={classNames("dash__nav-item", item.view === activeView.id && "dash__nav-item--active")}
                >
                  {item.icon}
                  {item.label}
                </span>
              ))}
              <div className="dash__status">
                <span className="dash-pulse dash-pulse--green" />
                <span className="dash__status-text">
                  <span className="dash__status-title">Agent online</span>
                  <span className="dash__status-subtitle">Answering 24/7</span>
                </span>
              </div>
            </aside>

            <div className="dash__main">
              <div className="dash__topbar">
                <div className="dash__account">
                  <span className="dash__account-name">Harbor Dental</span>
                  <span className="dash__account-view">{activeView.label} · This month</span>
                </div>
                <div role="tablist" aria-label="Dashboard views" className="dash__tabs">
                  {VIEWS.map((view, index) => {
                    const selected = index === activeIndex;

                    return (
                      <button
                        key={view.id}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        onClick={() => selectView(index)}
                        className={classNames("dash__tab", selected && "dash__tab--active")}
                      >
                        {view.label}
                        {selected && running ? <span key={cycle} className="dash-progress" /> : null}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div key={`${activeView.id}-${cycle}`} className="dash__view">
                {activeView.id === "overview" ? <OverviewView run={running} /> : null}
                {activeView.id === "live" ? <LiveView /> : null}
                {activeView.id === "bookings" ? <BookingsView run={running} /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/** Dashboard section: a dark band with the animated product mock. */
export const DashboardSection = () => (
  <section data-theme="dark" className="sec dark-band dashboard-section">
    <div className="glow dashboard-section__glow" />
    <div className="wrap dashboard-section__inner">
      <SectionHead
        center
        eyebrow="Your dashboard"
        title={
          <>
            See exactly what your agent <span className="grad-text">recovered.</span>
          </>
        }
        lead="Calls answered, bookings made and revenue saved, in one place your whole team can check in seconds."
      />
      <DashboardDemo />
      <p className="dashboard-section__note">Illustrative sample data.</p>
    </div>
  </section>
);
