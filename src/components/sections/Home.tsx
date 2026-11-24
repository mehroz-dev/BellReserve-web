import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  Calendar,
  Check,
  Link2,
  Mail,
  Message,
  Phone,
  Play,
  Plus,
  User,
  UserPlus,
  Users,
} from "@/components/icons";
import { Cube, Pin, Sphere, Wave } from "@/components/vectors";
import { plans, site, testimonials } from "@/lib/site";
import { IndustryCarousel } from "./IndustryCarousel";
import { DashboardDemo } from "./DashboardDemo";

/* ---------------- shared ---------------- */

export function SectionHead({ eyebrow, title, lead, center = false }: { eyebrow: string; title: React.ReactNode; lead?: string; center?: boolean }) {
  return (
    <div className={`flex flex-col gap-5 ${center ? "items-center text-center" : ""}`}>
      <span className={`eyebrow ${center ? "center" : ""}`}>{eyebrow}</span>
      <h2 className={`h2 ${center ? "max-w-[860px]" : "max-w-[760px]"}`}>{title}</h2>
      {lead ? <p className={`lead ${center ? "max-w-[640px]" : "max-w-[560px]"}`}>{lead}</p> : null}
    </div>
  );
}

/* ---------------- marquee ---------------- */

export function Marquee() {
  const items = ["Restaurants", "HVAC", "Dental clinics", "Real estate", "Front desks", "Home services", "Cloud kitchens", "Salons"];
  return (
    <section aria-label="Industries we serve" className="relative overflow-x-clip pb-2 pt-3">
      <div style={{ WebkitMaskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)", maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)" }}>
        <div className="marquee" aria-hidden="true">
          {[...items, ...items].map((m, i) => (
            <span key={i} className="flex items-center gap-3.5 whitespace-nowrap font-serif text-[26px] font-semibold">
              <span className="block h-2.5 w-2.5 rotate-45 rounded-[3px] bg-brand" />
              {m}
            </span>
          ))}
        </div>
        <p className="sr-only">BellReserve serves {items.join(", ")}.</p>
      </div>
    </section>
  );
}

/* ---------------- highlights ---------------- */

export function Highlights() {
  const items = [
    { icon: <Phone size={24} />, ink: true, title: "Answers every call", body: "First ring, every time. Nights, weekends and rush hours included." },
    { icon: <CalendarCheck size={24} />, ink: false, title: "Books while they’re on the line", body: "Appointments, reservations and orders go straight into your calendar." },
    { icon: <Users size={24} />, ink: true, title: "Hands over when it matters", body: "Emergencies and “can I speak to someone?” go to your team instantly." },
  ];
  return (
    <section className="sec !pb-8 !pt-24">
      <div className="wrap grid gap-5 md:grid-cols-3">
        {items.map((it, i) => (
          <div key={it.title} className="card relative flex flex-col gap-4 overflow-hidden p-8">
            <div className="glow" style={{ width: 220, height: 220, right: -80, top: -80, filter: "blur(60px)", background: i === 1 ? "var(--glow)" : "var(--glow-2)" }} />
            <span className={`icon-tile ${it.ink ? "ink" : ""}`}>{it.icon}</span>
            <h3 className="h3">{it.title}</h3>
            <p className="body-text">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- meet your agent ---------------- */

export function MeetAgent() {
  const facts = [
    ["Greets as", "“Thanks for calling [Your Business]”"],
    ["Knows", "Your services, prices, hours and FAQs"],
    ["Speaks", "In the tone you choose"],
    ["Escalates", "By your rules, to your team"],
  ];
  const points = [
    ["Confirms every detail", "Reads back names, dates, times and numbers before anything is booked."],
    ["Never makes things up", "If it doesn’t know a price or policy, it says so and offers a callback."],
    ["Follows up by text", "Every booking ends with an SMS confirmation, signed with your business name."],
  ];
  return (
    <section className="sec">
      <div className="wrap grid items-stretch gap-16 lg:grid-cols-[2fr_3fr]">
        <div className="relative flex flex-col">
          <div className="glow" style={{ width: 460, height: 460, left: "10%", top: 0, background: "var(--glow)" }} />
          <div className="deep relative flex flex-1 flex-col gap-5 overflow-hidden rounded-[36px] border border-white/[0.08] p-8 max-sm:p-6" style={{ boxShadow: "0 34px 70px -36px rgba(10,30,120,0.35)" }}>
            <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(90% 60% at 100% 0%, rgba(37,99,255,0.45) 0%, rgba(37,99,255,0) 60%)" }} />
            <div className="relative flex items-center gap-[18px]">
              <div className="relative h-24 w-24 flex-none" aria-hidden="true">
                <svg width="96" height="96" viewBox="0 0 96 96" className="absolute inset-0">
                  <circle cx="48" cy="48" r="44" fill="url(#g-sphere)" />
                  <ellipse cx="34" cy="28" rx="14" ry="8" fill="#FFFFFF" opacity="0.4" transform="rotate(-30 34 28)" />
                </svg>
                <span className="absolute inset-[22px] flex items-center justify-center rounded-full bg-white shadow-[0_8px_18px_-6px_rgba(0,0,40,0.3)]">
                  <Image src="/brand/bellreserve-icon.png" alt="" width={32} height={32} />
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="mono muted-d text-xs uppercase tracking-[0.1em]">Your agent</span>
                <span className="font-serif text-[30px] font-medium leading-[1.1]">
                  Your name.
                  <br />
                  Your voice.
                </span>
              </div>
            </div>
            <div className="relative grid grid-cols-2 gap-2.5 max-sm:grid-cols-1">
              {facts.map(([k, v]) => (
                <div key={k} className="deep-glass flex flex-col gap-1 rounded-[18px] p-4">
                  <span className="mono muted-d text-[11.5px] uppercase tracking-[0.08em]">{k}</span>
                  <span className="text-[15.5px] font-medium">{v}</span>
                </div>
              ))}
            </div>
            <div className="deep-glass relative flex flex-1 flex-col gap-3 rounded-[22px] p-4">
              <div className="mono muted-d flex items-center justify-between text-[11.5px] uppercase tracking-[0.08em]">
                <span>Today on the line</span>
                <span className="flex items-center gap-2 text-white/80">
                  <span className="live-dot block h-1.5 w-1.5 rounded-full bg-[#ff4d4d]" />
                  Live
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  ["48", "Calls answered"],
                  ["19", "Booked"],
                  ["0", "Missed"],
                ].map(([n, l]) => (
                  <div key={l} className="flex flex-col gap-0.5 rounded-[14px] border border-white/[0.07] bg-white/[0.03] px-3.5 py-3">
                    <span className="font-serif text-[26px] font-medium leading-8">{n}</span>
                    <span className="muted-d text-[12.5px]">{l}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-2 text-[14px]">
                <div className="max-w-[85%] self-start rounded-[14px] rounded-bl-[4px] bg-white/[0.07] px-3.5 py-2.5">Do you have anything this Thursday?</div>
                <div className="max-w-[85%] self-end rounded-[14px] rounded-br-[4px] bg-brand px-3.5 py-2.5 text-white">Thursday at 10:30 is open. Shall I book it?</div>
              </div>
            </div>
            <div className="relative flex items-center gap-3.5 rounded-full bg-white py-2 pl-5 pr-2 text-black">
              <div className="flex flex-1 flex-col">
                <span className="text-[14.5px] font-semibold">Sample call</span>
                <span className="text-[12.5px] text-black/60">Dental · new-patient booking · 1:05</span>
              </div>
              <Wave count={4} height={24} />
              <button type="button" aria-label="Play sample call (recording coming soon)" className="btn-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-full">
                <Play size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <SectionHead
            eyebrow="Meet your AI calling agent"
            title={
              <>
                A front desk that never puts a customer <span className="grad-text">on hold.</span>
              </>
            }
            lead="Not a generic chatbot reading one script for every business. Your agent is trained on how your business actually works, then answers like your best receptionist on their best day."
          />
          <div className="flex flex-1 flex-col gap-3">
            {points.map(([t, b], i) => (
              <div key={t} className="flex flex-1 items-center gap-4 rounded-[20px] border border-[var(--border)] bg-[var(--glass)] px-5 py-[18px]">
                <span className="mono pt-0.5 text-[13px] font-medium text-[var(--accent-text)]">0{i + 1}</span>
                <div className="flex flex-col gap-1">
                  <span className="text-[17px] font-semibold">{t}</span>
                  <span className="body-text">{b}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- industries ---------------- */

export function IndustriesSection() {
  return (
    <section id="industries" data-theme="dark" className="sec dark-band">
      <IndustryCarousel
        heading={
          <>
            One receptionist.
            <br />
            Every kind of <span className="grad-text italic">call.</span>
          </>
        }
      />
    </section>
  );
}

/* ---------------- how it works ---------------- */

export function HowItWorks() {
  const steps = [
    ["We learn your business", "A short call and an intake form: your services, prices, hours, FAQs, booking rules and the tone you want callers to hear.", "Services · Prices · FAQs · Tone"],
    ["We train your agent", "Built on our niche pack for your industry, then tested on real call scenarios before it ever speaks to a customer.", "Built for your niche · QA tested"],
    ["We connect your tools", "Forward your existing number, link your calendar and CRM, and you’re live. Your team sees every call in one dashboard.", "Phone · Calendar · CRM"],
  ];
  return (
    <section id="how" className="sec soft-alt">
      <div className="glow" style={{ width: 600, height: 400, right: -200, bottom: 80, background: "var(--glow-2)" }} />
      <div className="wrap flex flex-col gap-[60px]">
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
        <ol className="relative grid gap-5 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-[74px] hidden h-0.5 opacity-50 md:block" style={{ background: "linear-gradient(90deg, transparent, #2563FF 20%, #2563FF 80%, transparent)" }} />
          {steps.map(([t, b, tag], i) => (
            <li key={t} className="card relative flex flex-col items-start gap-[18px] p-9">
              <Cube size={92} label={String(i + 1)} />
              <h3 className="h3 text-[26px] leading-8">{t}</h3>
              <p className="body-text">{b}</p>
              <span className="mono mt-auto text-[11.5px] uppercase tracking-[0.08em] text-[var(--faint)]">{tag}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- features (bento) ---------------- */

function Visual({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div aria-hidden="true" className={`mb-1.5 flex h-[120px] items-center justify-center rounded-[18px] border border-[var(--border)] bg-[var(--surface-2)] ${className}`}>
      {children}
    </div>
  );
}

export function Features() {
  const cards = [
    {
      title: "Picks up on the first ring",
      body: "No voicemail, no “please hold”. Callers get an answer the moment they dial.",
      visual: (
        <Visual className="gap-3.5">
          <span className="live flex h-[58px] w-[58px] items-center justify-center rounded-full bg-gradient-to-b from-[#4a80ff] to-brand text-white">
            <Phone size={24} />
          </span>
          <span className="mono text-[13px] text-[var(--muted)]">Ring 1 · Answered</span>
        </Visual>
      ),
    },
    {
      title: "Sounds natural",
      body: "A warm, human-like voice that lets callers interrupt and change their mind.",
      visual: (
        <Visual>
          <Wave count={11} height={64} />
        </Visual>
      ),
    },
    {
      title: "Handles calls at once",
      body: "Rush hour, promo day or emergency season: no caller ever hears a busy tone.",
      visual: (
        <Visual className="relative">
          {["Call 1 · Booking", "Call 2 · Order", "Call 3 · FAQ"].map((c, i) => (
            <div
              key={c}
              className="glass absolute flex h-[34px] w-[62%] items-center gap-2 rounded-xl px-3 !shadow-none"
              style={{ top: 18 + i * 25, transform: `translateX(${(i - 1) * 14}px)`, borderColor: "var(--border)" }}
            >
              <span className="block h-2 w-2 rounded-full bg-brand" />
              <span className="mono text-[11.5px] text-[var(--muted)]">{c}</span>
            </div>
          ))}
        </Visual>
      ),
    },
    {
      title: "Smooth handover to your team",
      body: "Transfers live calls by your rules, or takes a detailed message when no one’s free.",
      visual: (
        <Visual className="gap-2.5">
          <span className="icon-tile h-[46px] w-[46px]">
            <Image src="/brand/bellreserve-icon.png" alt="" width={24} height={24} style={{ filter: "brightness(0) invert(1)" }} />
          </span>
          <svg width="70" height="16" viewBox="0 0 70 16" aria-hidden="true">
            <path d="M2 8h60" stroke="#2563FF" strokeWidth="2" strokeDasharray="4 5" />
            <path d="M58 3l6 5-6 5" fill="none" stroke="#2563FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="icon-tile ink h-[46px] w-[46px]">
            <User size={22} />
          </span>
        </Visual>
      ),
    },
    {
      title: "Transcripts and summaries",
      body: "Every call recorded, transcribed and summarised in your dashboard and inbox.",
      visual: (
        <Visual className="flex-col !items-start gap-[9px] p-[18px]">
          {[82, 64, 90, 52, 72].map((w, i) => (
            <span key={i} className="block h-[9px] rounded-[5px]" style={{ width: `${w}%`, background: i === 2 ? "#2563FF" : "var(--border-strong)", opacity: i === 2 ? 0.85 : 1 }} />
          ))}
        </Visual>
      ),
    },
    {
      title: "Ready for every location",
      body: "One agent per location, each with its own hours and rules, all in one view.",
      visual: (
        <Visual className="!items-end gap-[18px] pb-3.5">
          <Pin size={60} />
          <Pin size={48} fill="url(#g-sphere-ink)" />
          <Pin size={40} fill="url(#g-top)" />
        </Visual>
      ),
    },
  ];
  return (
    <section id="features" className="sec">
      <div className="wrap flex flex-col gap-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Features"
            title={
              <>
                Everything a great receptionist does. <span className="grad-text">Without the hold music.</span>
              </>
            }
          />
          <p className="lead max-w-[400px]">Every call answered, handled and logged, so your team only picks up the ones that need a person.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="card relative flex flex-col gap-3.5 overflow-hidden p-8">
              {c.visual}
              <h3 className="h3">{c.title}</h3>
              <p className="body-text">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- dashboard preview ---------------- */

export function DashboardPreview() {
  return (
    <section data-theme="dark" className="sec dark-band">
      <div className="glow" style={{ width: 1000, height: 600, left: "50%", marginLeft: -500, top: 240, background: "var(--glow)" }} />
      <div className="wrap flex flex-col gap-[60px]">
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
        <p className="text-center text-[13px] text-[var(--faint)]">Illustrative sample data.</p>
      </div>
    </section>
  );
}

/* ---------------- integrations ---------------- */

export function Integrations() {
  const chips = [
    { label: "Your existing number", icon: <Phone size={16} />, pos: "left-[21.6%] top-[21.3%]", cls: "fl" },
    { label: "Google Calendar", icon: <Calendar size={16} />, pos: "left-[78.4%] top-[21.3%]", cls: "fl2" },
    { label: "Outlook", icon: <Calendar size={16} />, pos: "left-[90.2%] top-[50%]", cls: "fl [animation-delay:-2s]" },
    { label: "Webhooks & Zapier", icon: <Link2 size={16} />, pos: "left-[78.4%] top-[78.7%]", cls: "fl2" },
    { label: "Your CRM", icon: <UserPlus size={16} />, pos: "left-[21.6%] top-[78.7%]", cls: "fl [animation-delay:-4s]" },
    { label: "SMS", icon: <Message size={16} />, pos: "left-[9.8%] top-[50%]", cls: "fl2 [animation-delay:-3s]" },
  ];
  return (
    <section className="sec !py-24">
      <div className="wrap grid items-center gap-14 lg:grid-cols-2">
        <SectionHead
          eyebrow="Works with your tools"
          title={
            <>
              Keep your number. Keep your calendar. <span className="grad-text">We plug into both.</span>
            </>
          }
          lead="Bookings land where your team already looks. Need something else connected? We handle it during setup."
        />
        <div className="relative h-[480px] max-sm:hidden">
          <div className="glow" style={{ width: 400, height: 400, left: "50%", top: "50%", margin: "-200px 0 0 -200px", background: "var(--glow)" }} />
          <svg width="100%" height="100%" viewBox="0 0 560 480" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0">
            <ellipse cx="280" cy="240" rx="225" ry="195" fill="none" stroke="var(--border-strong)" strokeDasharray="4 7" vectorEffect="non-scaling-stroke" />
            <ellipse cx="280" cy="240" rx="145" ry="126" fill="none" stroke="var(--border-strong)" strokeDasharray="4 7" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="absolute left-1/2 top-1/2 -ml-[76px] -mt-[76px] flex h-[152px] w-[152px] items-center justify-center rounded-[42px] bg-white shadow-[0_30px_60px_-20px_rgba(37,99,255,0.35),0_0_0_1px_rgba(37,99,255,0.1)]">
            <Image src="/brand/bellreserve-icon.png" alt="BellReserve" width={88} height={88} />
          </div>
          {chips.map((c) => (
            <span key={c.label} className={`glass absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full px-4 py-[11px] text-[14.5px] font-medium ${c.pos} ${c.cls}`}>
              <span className="text-brand">{c.icon}</span>
              {c.label}
            </span>
          ))}
        </div>
        <ul className="flex flex-wrap gap-2.5 sm:hidden">
          {chips.map((c) => (
            <li key={c.label} className="chip">
              <span className="text-brand">{c.icon}</span>
              {c.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- testimonials ---------------- */

export function Testimonials() {
  // Four copies of the list: the track moves left by half its width (two copies), so the loop is seamless
  // and the row is always wider than the screen.
  const copies = 4;
  return (
    <section className="sec">
      <div className="wrap flex flex-col gap-14">
        <SectionHead
          eyebrow="Customer stories"
          title={
            <>
              Owners who stopped <span className="grad-text">worrying about the phone.</span>
            </>
          }
        />
      </div>
      <div
        className="-mx-6 mt-14 overflow-hidden py-6 max-md:-mx-5"
        style={{ WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)", maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}
      >
        <div className="marquee !gap-0 ![animation-duration:60s] hover:![animation-play-state:paused]">
          {Array.from({ length: copies }, (_, k) =>
            testimonials.map((t, i) => (
              <div key={`${k}-${t.name}`} className="flex flex-none pr-5" aria-hidden={k > 0 ? true : undefined}>
                <figure
                  className={`relative m-0 flex w-[420px] flex-col gap-[26px] overflow-hidden p-9 max-sm:w-[300px] max-sm:p-7 ${
                    i === 0 ? "deep rounded-[30px] border border-white/[0.08]" : "card"
                  }`}
                  style={i === 0 ? { boxShadow: "0 40px 80px -40px rgba(10,30,120,0.3)" } : undefined}
                >
                  {i === 0 ? <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(80% 60% at 100% 0%, rgba(37,99,255,0.45), transparent 65%)" }} /> : null}
                  <svg width="40" height="30" viewBox="0 0 36 28" fill={i === 0 ? "#8DADFF" : "#2563FF"} aria-hidden="true" className="relative">
                    <path d="M0 28V16C0 7 5 1 14 0l1 5c-5 1-8 4-8 9h7v14zm21 0V16c0-9 5-15 14-16l1 5c-5 1-8 4-8 9h7v14z" />
                  </svg>
                  <blockquote className="relative m-0 font-serif text-[22px] font-medium leading-8 max-sm:text-[19px] max-sm:leading-7">{t.quote}</blockquote>
                  <figcaption className="relative mt-auto flex items-center gap-3">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-full font-semibold ${i === 1 ? "bg-[var(--text)] text-[var(--bg)]" : "bg-gradient-to-br from-[#5b8bff] to-[#163fb8] text-white"}`}>
                      {t.initials}
                    </span>
                    <span className="flex flex-col">
                      <span className="text-base font-semibold">{t.name}</span>
                      <span className={`text-sm ${i === 0 ? "text-white/70" : "text-[var(--faint)]"}`}>{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- pricing ---------------- */

export function Pricing() {
  return (
    <section id="pricing" className="sec soft-alt">
      <div className="glow" style={{ width: 700, height: 500, left: "50%", marginLeft: -350, top: 300, background: "var(--glow-2)" }} />
      <div className="wrap flex flex-col gap-14">
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
        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((p) =>
            p.featured ? (
              <div key={p.name} className="relative rounded-[30px] p-[1.5px] shadow-[0_34px_70px_-36px_rgba(37,99,255,0.42)]" style={{ background: "linear-gradient(150deg,#8DADFF,#2563FF 40%,rgba(37,99,255,0.2) 70%,#2563FF)" }}>
                <div className="deep relative flex h-full flex-col gap-6 overflow-hidden rounded-[29px] p-9">
                  <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(90% 55% at 50% 0%, rgba(37,99,255,0.5), transparent 70%)" }} />
                  <span className="mono absolute right-[26px] top-[26px] rounded-full bg-gradient-to-b from-[#4a80ff] to-brand px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em]">Most popular</span>
                  <PlanBody plan={p} dark />
                </div>
              </div>
            ) : (
              <div key={p.name} className="card flex flex-col gap-6 p-9">
                <PlanBody plan={p} />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function PlanBody({ plan, dark = false }: { plan: (typeof plans)[number]; dark?: boolean }) {
  return (
    <>
      <div className="relative flex flex-col gap-2">
        <span className="mono text-[13.5px] font-medium uppercase tracking-[0.1em]">{plan.name}</span>
        <span className={`text-[15px] ${dark ? "text-white/75" : "text-[var(--muted)]"}`}>{plan.blurb}</span>
      </div>
      <div className="relative flex items-baseline gap-1.5">
        <span className="font-serif text-[58px] font-medium leading-none tracking-[-0.02em]">{plan.price}</span>
        {plan.period ? <span className={dark ? "text-white/75" : "text-[var(--muted)]"}>{plan.period}</span> : null}
      </div>
      <Link href={`/book-demo?plan=${plan.name.toLowerCase()}`} className={`btn relative ${dark ? "btn-primary" : "btn-ghost"}`}>
        {plan.cta}
      </Link>
      <ul className={`relative flex flex-col gap-3 border-t pt-6 text-[15px] ${dark ? "border-white/15" : "border-[var(--border)]"}`}>
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <Check size={18} className={`flex-none ${dark ? "text-brand-tint" : "text-brand"}`} />
            {f}
          </li>
        ))}
      </ul>
    </>
  );
}

/* ---------------- FAQ ---------------- */

export function Faq({ items, title }: { items: { q: string; a: string }[]; title?: React.ReactNode }) {
  return (
    <section id="faq" className="sec">
      <div className="wrap grid items-start gap-16 lg:grid-cols-[1fr_1.3fr]">
        <div className="flex flex-col gap-5 lg:sticky lg:top-28">
          <span className="eyebrow">FAQ</span>
          <h2 className="h2">
            {title ?? (
              <>
                Questions owners <span className="grad-text">ask us first.</span>
              </>
            )}
          </h2>
          <p className="lead">
            Still curious? Email{" "}
            <a href={`mailto:${site.email}`} className="text-[var(--accent-text)] underline-offset-4 hover:underline">
              {site.email}
            </a>{" "}
            or book a 20-minute demo.
          </p>
          <FaqHelpCard />
        </div>
        <div className="flex flex-col gap-2.5">
          {items.map((f, i) => (
            <details key={f.q} className="faq-item" open={i === 0}>
              <summary className="flex min-h-11 items-center justify-between gap-5 px-6 py-[22px] text-lg font-semibold">
                {f.q}
                <span className="faq-icon flex h-9 w-9 flex-none items-center justify-center rounded-full">
                  <Plus size={16} />
                </span>
              </summary>
              <p className="pb-6 pl-6 pr-[72px] text-[16.5px] leading-[27px] text-[var(--muted)] max-sm:pr-6">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqHelpCard() {
  return (
    <div className="mt-4 overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)]">
      <div aria-hidden="true" className="relative h-[230px] overflow-hidden border-b border-[var(--border)] bg-[var(--surface-2)]">
        <div className="floor h-[60%]" />
        <Sphere size={92} className="fl absolute -right-3 top-5" />
        <Cube size={64} className="fl2 absolute bottom-3 left-4" />
        <div className="relative flex h-full flex-col justify-center gap-3 px-7 max-sm:px-5">
          <div className="max-w-[78%] self-end rounded-[18px] rounded-br-md bg-brand px-4 py-2.5 text-[14.5px] text-white shadow-lg max-sm:max-w-[88%]">
            Can it take my booking at 11 PM?
          </div>
          <div className="glass flex max-w-[82%] items-center gap-3 self-start rounded-[18px] rounded-bl-md border border-[var(--glass-border)] px-4 py-2.5 text-[14.5px] shadow-lg backdrop-blur-md max-sm:max-w-[92%]">
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[var(--chip-bg)] text-[var(--accent-text)]">
              <Phone size={15} />
            </span>
            <span>Of course. What time works for you?</span>
            <Wave count={5} height={18} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 p-3">
        <a href={`mailto:${site.email}`} className="flex items-center gap-3.5 rounded-[16px] px-3 py-3 transition-colors hover:bg-[var(--chip-bg)]">
          <span className="icon-tile h-10 w-10 rounded-[12px]">
            <Mail size={18} />
          </span>
          <span className="flex flex-col">
            <span className="text-[13px] text-[var(--muted)]">Email us, we reply within a day</span>
            <span className="font-semibold">{site.email}</span>
          </span>
        </a>
        <a href={site.demoPhone.href} className="flex items-center gap-3.5 rounded-[16px] px-3 py-3 transition-colors hover:bg-[var(--chip-bg)]">
          <span className="icon-tile ink h-10 w-10 rounded-[12px]">
            <Phone size={18} />
          </span>
          <span className="flex flex-col">
            <span className="text-[13px] text-[var(--muted)]">Ask our demo agent yourself</span>
            <span className="font-semibold">{site.demoPhone.display}</span>
          </span>
        </a>
        <Link href="/book-demo" className="btn btn-primary mx-3 mb-2 mt-2">
          Book a 20-minute demo
        </Link>
      </div>
    </div>
  );
}

/* ---------------- final CTA ---------------- */

export function FinalCta({ title = "Your phone will ring today. Make sure someone answers." }: { title?: string }) {
  return (
    <section className="relative pt-6">
      <div
        className="relative flex w-full flex-col items-center gap-5 overflow-hidden px-6 py-16 text-center text-white max-md:py-14"
        style={{ background: "radial-gradient(80% 120% at 50% 0%, #3E77FF 0%, #2563FF 35%, #123A9E 75%, #071A52 100%)" }}
      >
        <div className="floor h-[45%]" style={{ ["--grid-line" as string]: "rgba(255,255,255,0.16)" }} />
        <Sphere size={110} className="fl absolute left-[5%] top-[14%] max-md:hidden" />
        <svg className="fl2 absolute bottom-[14%] right-[6%] max-md:hidden" width="100" height="107" viewBox="0 0 150 160" aria-hidden="true">
          <polygon points="75,10 135,44 75,78 15,44" fill="#FFFFFF" fillOpacity="0.9" />
          <polygon points="15,44 75,78 75,140 15,106" fill="#C9D8FF" />
          <polygon points="135,44 75,78 75,140 135,106" fill="#8DADFF" />
        </svg>
        <svg className="fl2 absolute right-[13%] top-[12%] max-md:hidden" width="90" height="90" viewBox="0 0 120 120" aria-hidden="true">
          <ellipse cx="60" cy="60" rx="50" ry="20" fill="none" stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="10" transform="rotate(-25 60 60)" />
        </svg>
        <span className="mono relative rounded-full border border-white/30 bg-white/15 px-3.5 py-[7px] text-[13px] font-medium uppercase tracking-[0.1em]">Never miss another call</span>
        <h2 className="relative max-w-[820px] font-serif text-[clamp(34px,4.2vw,56px)] font-medium leading-[1.05] tracking-[-0.025em]">{title}</h2>
        <p className="relative max-w-[580px] text-[17.5px] leading-[27px] text-white/85">
          Book a 20-minute demo. We&apos;ll show you your agent handling real calls for your industry, and get you live in days.
        </p>
        <div className="relative mt-1 flex flex-wrap justify-center gap-3">
          <Link href="/book-demo" className="btn btn-light">
            Book a demo
          </Link>
          <a href={site.demoPhone.href} className="btn btn-dark">
            Call our agent now
          </a>
        </div>
      </div>
    </section>
  );
}
