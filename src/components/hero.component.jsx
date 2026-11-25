import { Link } from "react-router-dom";
import { Arrow, CalendarCheck, Check, Message, Mic, Play, Transfer } from "./icons.component.jsx";
import { Cube, Ring, Sphere, Wave } from "./vectors.component.jsx";
import { site } from "../utils/Site.config.js";
import brandIcon from "../assets/images/brand/bellreserve-icon.png";

const HERO_CHIPS = [
  "Keeps your number",
  "We do the setup",
  "Live in days",
];

const ChatBubble = ({ children, agent = false }) => (
  <div className={agent ? "phone-bubble phone-bubble--agent" : "phone-bubble phone-bubble--caller"}>
    {children}
  </div>
);

const FloatCard = ({ className, icon, title, subtitle, ink = false }) => (
  <div className={`glass float-card ${className}`}>
    <span className={ink ? "icon-tile icon-tile--ink" : "icon-tile"}>
      {icon}
    </span>
    <div className="float-card__text">
      <span className="float-card__title">{title}</span>
      <span className="mono float-card__subtitle">{subtitle}</span>
    </div>
  </div>
);

const PhoneMockup = () => (
  <div className="phone">
    <div className="phone__frame">
      <div className="phone__screen">
        <div className="phone__notch" />

        <div className="phone__header">
          <span className="phone__avatar">
            <img src={brandIcon} alt="" width={30} height={30} />
          </span>
          <div className="phone__caller">
            <span className="phone__caller-name">Front desk agent</span>
            <span className="mono phone__caller-line">Incoming · Your business</span>
          </div>
          <span className="mono phone__timer">01:24</span>
        </div>

        <div className="phone__wave">
          <Wave color="#8DADFF" height={32} />
        </div>

        <div className="phone__chat">
          <ChatBubble>Hi, is Friday at 2 PM free?</ChatBubble>
          <ChatBubble agent>Yes, Friday at 2 PM is open. Can I get your name and number?</ChatBubble>
          <ChatBubble>Sara Malik, 555-0142.</ChatBubble>
          <ChatBubble agent>You&apos;re booked, Sara. Confirmation is on its way by text.</ChatBubble>
        </div>

        <div className="phone__controls">
          <span className="phone__control">
            <Mic size={22} />
          </span>
          <span className="phone__control phone__control--primary">
            <Transfer size={22} />
          </span>
        </div>

        <div className="phone__shine" />
      </div>
    </div>
  </div>
);

/** Landing-page hero: headline and calls to action on the left, the animated phone scene on the right. */
export const Hero = () => (
  <section id="top" className="hero">
    <div className="glow hero__glow hero__glow--left" />
    <div className="glow hero__glow hero__glow--right" />
    <div className="floor" />

    <div className="wrap hero__grid">
      <div className="hero__copy">
        <span className="eyebrow">AI calling agent · Answering 24/7</span>

        <h1 className="h1 hero__title">
          <span className="hero__title-line">Your phone rang.</span>
          <span className="hero__title-line">
            We <em className="grad-text hero__title-accent">answered.</em>
          </span>
        </h1>

        <p className="lead hero__lead">
          BellReserve is an AI calling agent trained for your business. It answers every call, books appointments and captures leads around the
          clock, so a missed call never turns into lost revenue.
        </p>

        <div className="hero__actions">
          <Link to="/book-demo" className="btn btn-primary btn-lg">
            Book a demo
            <Arrow size={18} />
          </Link>
          <a href={site.demoPhone.href} className="btn btn-ghost btn-lg">
            <span className="hero__play-icon">
              <Play size={12} />
            </span>
            Hear a live call
          </a>
        </div>

        <div className="hero__chips">
          {HERO_CHIPS.map((chip) => (
            <span key={chip} className="chip">
              <Check size={16} className="chip__icon" />
              {chip}
            </span>
          ))}
        </div>

        <span className="mono hero__demo-line">Call our demo agent: {site.demoPhone.display}</span>
      </div>

      {/* Everything is placed around the phone, so the ring sticks out equally on both sides. */}
      <div className="hero-scene" aria-hidden="true">
        <div className="hero-scene__group">
          <Ring className="fl2 hero-scene__ring" />
          <Sphere className="fl hero-scene__sphere" />
          <Sphere ink size={70} className="fl2 hero-scene__ink-sphere" />
          <Cube className="fl hero-scene__cube" />

          <PhoneMockup />

          {/* Two cards on the left, one on the right, each sitting about 20% over the phone. */}
          <FloatCard
            className="fl float-card--booked"
            icon={<CalendarCheck size={20} />}
            title="Appointment booked"
            subtitle="Fri · 2:00 PM · Calendar synced"
          />
          <div className="glass fl2 revenue-card">
            <span className="mono revenue-card__label">Revenue saved tonight</span>
            <span className="revenue-card__value">+ $1,240</span>
            <span className="revenue-card__note">
              <span className="revenue-card__dot" />
              8 after-hours calls answered
            </span>
          </div>
          <FloatCard
            ink
            className="fl float-card--confirmed"
            icon={<Message size={20} />}
            title="Customer confirmed"
            subtitle="SMS sent automatically"
          />
        </div>
      </div>
    </div>

    <div className="fade-b" />
  </section>
);
