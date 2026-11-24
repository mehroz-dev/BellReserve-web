import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  Calendar,
  Check,
  CheckSquare,
  File,
  Link2,
  Lock,
  Message,
  Phone,
  Play,
  Plus,
  Shield,
  User,
  UserPlus,
  Users,
} from "@/components/icons";
import { Cube, Pin, Sphere, Wave } from "@/components/vectors";
import { plans, site, testimonials } from "@/lib/site";
import { IndustryTabs } from "./IndustryTabs";

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
      <div className="wrap grid items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <div className="glow" style={{ width: 460, height: 460, left: "10%", top: 0, background: "var(--glow)" }} />
          <div className="deep relative flex flex-col gap-6 overflow-hidden rounded-[36px] border border-white/[0.08] p-10 max-sm:p-6" style={{ boxShadow: "0 34px 70px -36px rgba(10,30,120,0.35)" }}>
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
                <span className="font-serif text-[30px] font-bold leading-[1.1]">
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
          <div className="flex flex-col gap-3">
            {points.map(([t, b], i) => (
              <div key={t} className="flex items-start gap-4 rounded-[20px] border border-[var(--border)] bg-[var(--glass)] px-5 py-[18px]">
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
    <section id="industries" className="sec !py-12 max-md:!px-3">
      <div className="deep relative mx-auto max-w-[1392px] overflow-hidden rounded-[48px] border border-[var(--deep-border)] px-8 py-28 max-md:rounded-[32px] max-md:px-5 max-md:py-20">
        <div className="glow" style={{ width: 900, height: 600, left: "50%", marginLeft: -450, top: -320, background: "rgba(37,99,255,0.45)" }} />
        <div className="floor h-[40%] opacity-80" style={{ ["--grid-line" as string]: "rgba(110,150,255,0.18)" }} />
        <div className="wrap flex flex-col gap-11">
          <div className="flex flex-col items-center gap-5 text-center">
            <span className="eyebrow center">Trained for your niche</span>
            <h2 className="h2 max-w-[900px]">
              One agent can&apos;t fit every business.{" "}
              <span style={{ background: "linear-gradient(100deg,#8DADFF,#E1E9FF)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Yours is built for yours.</span>
            </h2>
          </div>
          <IndustryTabs />
        </div>
      </div>
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
  const bars = [
    [22, true], [38, true], [72, false], [88, false], [64, false], [96, false],
    [80, false], [58, false], [54, true], [44, true], [26, true], [14, true],
  ] as const;
  const calls = [
    ["11:48 PM", "New patient · cleaning booked", "Booked"],
    ["9:12 PM", "Insurance question · answered", "FAQ"],
    ["4:30 PM", "Toothache · transferred to front desk", "Handover"],
    ["2:05 PM", "Rescheduled · Thu 10:00 AM", "Booked"],
  ];
  return (
    <section className="sec soft-alt">
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
        <div className="tilt-board">
          <div className="glass rounded-[30px] p-2.5">
            <div className="overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--surface)]">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] px-[22px] py-3.5">
                <div className="flex items-center gap-3">
                  <span className="flex gap-1.5" aria-hidden="true">
                    {[0, 1, 2].map((d) => (
                      <span key={d} className="block h-2.5 w-2.5 rounded-full bg-[var(--border-strong)]" />
                    ))}
                  </span>
                  <span className="ml-2 text-[15px] font-semibold">Harbor Dental · Overview</span>
                </div>
                <div className="mono flex gap-1.5 text-[11.5px] uppercase tracking-[0.05em]">
                  <span className="rounded-full bg-brand px-3 py-2 text-white">This month</span>
                  <span className="rounded-full border border-[var(--border-strong)] px-3 py-2">Last month</span>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] p-[22px]">
                <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="relative flex flex-col gap-2 overflow-hidden rounded-[20px] p-[22px] text-white shadow-[0_20px_40px_-20px_rgba(37,99,255,0.4)]" style={{ background: "linear-gradient(140deg,#4A80FF,#2563FF 50%,#163FB8)" }}>
                    <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true" className="absolute -right-[30px] -top-[30px] opacity-35">
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#FFFFFF" strokeWidth="16" />
                    </svg>
                    <span className="mono text-[11.5px] uppercase tracking-[0.08em]">Revenue recovered</span>
                    <span className="font-serif text-[38px] font-bold leading-none">$18,420</span>
                    <span className="text-[13.5px]">From after-hours and overflow calls</span>
                  </div>
                  {[
                    ["Calls answered", "1,284", "0 sent to voicemail"],
                    ["Bookings made", "312", "96 new patients"],
                    ["After-hours calls", "417", "32% of all calls"],
                  ].map(([k, v, s]) => (
                    <div key={k} className="flex flex-col gap-2 rounded-[20px] border border-[var(--border)] bg-[var(--surface-2)] p-[22px]">
                      <span className="mono text-[11.5px] uppercase tracking-[0.08em] text-[var(--faint)]">{k}</span>
                      <span className="font-serif text-[38px] font-bold leading-none">{v}</span>
                      <span className="text-[13.5px] text-[var(--faint)]">{s}</span>
                    </div>
                  ))}
                </div>
                <div className="grid gap-3.5 lg:grid-cols-2">
                  <div className="flex flex-col gap-4 rounded-[20px] border border-[var(--border)] bg-[var(--surface-2)] p-[22px]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-base font-semibold">Calls by hour</span>
                      <span className="flex gap-3.5 text-[13px] text-[var(--muted)]">
                        <span className="flex items-center gap-1.5">
                          <span className="block h-2.5 w-2.5 rounded-[3px] bg-[var(--text)]" />
                          Open hours
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="block h-2.5 w-2.5 rounded-[3px] bg-brand" />
                          After hours
                        </span>
                      </span>
                    </div>
                    <div aria-hidden="true" className="flex h-[150px] items-end gap-2 border-b border-[var(--border-strong)]">
                      {bars.map(([h, after], i) => (
                        <span
                          key={i}
                          className="block flex-1 rounded-t-[7px]"
                          style={{ height: `${h}%`, background: after ? "linear-gradient(180deg,#6C93FF,#2563FF)" : "var(--text)" }}
                        />
                      ))}
                    </div>
                    <div className="mono flex justify-between text-[11.5px] text-[var(--faint)]">
                      <span>6 AM</span>
                      <span>12 PM</span>
                      <span>6 PM</span>
                      <span>12 AM</span>
                    </div>
                  </div>
                  <div className="flex flex-col rounded-[20px] border border-[var(--border)] bg-[var(--surface-2)] p-[22px]">
                    <span className="pb-2.5 text-base font-semibold">Recent calls</span>
                    {calls.map(([t, d, tag]) => (
                      <div key={t} className="flex items-center gap-3 border-t border-[var(--border)] py-3">
                        <span className="mono w-16 flex-none text-xs text-[var(--faint)]">{t}</span>
                        <span className="flex-1 text-[15px]">{d}</span>
                        <span
                          className={`mono rounded-full px-2.5 py-1 text-[10.5px] uppercase tracking-[0.05em] ${
                            tag === "Booked"
                              ? "border border-[var(--chip-border)] bg-[var(--chip-bg)] text-[var(--accent-text)]"
                              : tag === "Handover"
                                ? "bg-[var(--text)] text-[var(--bg)]"
                                : "border border-[var(--border-strong)]"
                          }`}
                        >
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-[13px] text-[var(--faint)]">Illustrative sample data.</p>
      </div>
    </section>
  );
}

/* ---------------- integrations ---------------- */

export function Integrations() {
  const chips = [
    { label: "Your existing number", icon: <Phone size={16} />, pos: "left-[4%] top-[12%]", cls: "fl" },
    { label: "Google Calendar", icon: <Calendar size={16} />, pos: "right-[2%] top-[6%]", cls: "fl2" },
    { label: "Outlook", icon: <Calendar size={16} />, pos: "right-[-2%] top-[46%]", cls: "fl [animation-delay:-2s]" },
    { label: "Webhooks & Zapier", icon: <Link2 size={16} />, pos: "right-[12%] bottom-[4%]", cls: "fl2" },
    { label: "Your CRM", icon: <UserPlus size={16} />, pos: "left-[6%] bottom-[8%]", cls: "fl [animation-delay:-4s]" },
    { label: "SMS", icon: <Message size={16} />, pos: "left-[-2%] top-[46%]", cls: "fl2 [animation-delay:-3s]" },
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
        <div className="relative h-[360px] max-sm:hidden">
          <div className="glow" style={{ width: 300, height: 300, left: "50%", top: "50%", margin: "-150px 0 0 -150px", background: "var(--glow)" }} />
          <svg width="100%" height="360" viewBox="0 0 560 360" preserveAspectRatio="xMidYMid meet" aria-hidden="true" className="absolute inset-0">
            <ellipse cx="280" cy="180" rx="230" ry="140" fill="none" stroke="var(--border-strong)" strokeDasharray="4 7" />
            <ellipse cx="280" cy="180" rx="140" ry="86" fill="none" stroke="var(--border-strong)" strokeDasharray="4 7" />
          </svg>
          <div className="absolute left-1/2 top-1/2 -ml-14 -mt-14 flex h-28 w-28 items-center justify-center rounded-[32px] bg-white shadow-[0_30px_60px_-20px_rgba(37,99,255,0.35),0_0_0_1px_rgba(37,99,255,0.1)]">
            <Image src="/brand/bellreserve-icon.png" alt="BellReserve" width={64} height={64} />
          </div>
          {chips.map((c) => (
            <span key={c.label} className={`glass absolute flex items-center gap-2 rounded-full px-4 py-[11px] text-[14.5px] font-medium ${c.pos} ${c.cls}`}>
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
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`relative m-0 flex flex-col gap-[26px] overflow-hidden p-9 ${i === 0 ? "deep rounded-[30px] border border-white/[0.08]" : "card"}`}
              style={i === 0 ? { boxShadow: "0 40px 80px -40px rgba(10,30,120,0.3)" } : undefined}
            >
              {i === 0 ? <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(80% 60% at 100% 0%, rgba(37,99,255,0.45), transparent 65%)" }} /> : null}
              <svg width="40" height="30" viewBox="0 0 36 28" fill={i === 0 ? "#8DADFF" : "#2563FF"} aria-hidden="true" className="relative">
                <path d="M0 28V16C0 7 5 1 14 0l1 5c-5 1-8 4-8 9h7v14zm21 0V16c0-9 5-15 14-16l1 5c-5 1-8 4-8 9h7v14z" />
              </svg>
              <blockquote className="relative m-0 font-serif text-[22px] font-medium leading-8">{t.quote}</blockquote>
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
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- pricing ---------------- */

export function Pricing() {
  return (
    <section id="pricing" className="sec soft-alt">
      <div className="dots opacity-80" />
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
        <span className="font-serif text-[58px] font-bold leading-none tracking-[-0.02em]">{plan.price}</span>
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

/* ---------------- trust ---------------- */

export function Trust() {
  const items = [
    { icon: <CheckSquare size={20} />, ink: false, t: "Tested before go-live", b: "Every agent passes a call-scenario test suite before it answers a real customer." },
    { icon: <Shield size={20} />, ink: true, t: "Sticks to what you told it", b: "No invented prices or promises. Anything outside its knowledge goes to your team." },
    { icon: <File size={20} />, ink: false, t: "Every call on record", b: "Recordings, transcripts and summaries for every conversation, ready for review." },
    { icon: <Lock size={20} />, ink: true, t: "Your data stays yours", b: "Customer details are used only to serve your callers, never sold or shared." },
  ];
  return (
    <section className="sec !py-[104px]">
      <div className="wrap flex flex-col gap-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="h2 max-w-[660px] !text-[clamp(32px,3.6vw,46px)]">
            Your customers talk to it. So we built it <span className="grad-text">to be trusted.</span>
          </h2>
          <span className="eyebrow">Trust &amp; reliability</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.t} className="card flex flex-col gap-3 p-[26px]">
              <span className={`icon-tile h-11 w-11 rounded-[13px] ${it.ink ? "ink" : ""}`}>{it.icon}</span>
              <h3 className="text-lg font-semibold">{it.t}</h3>
              <p className="body-text text-[15px]">{it.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

export function Faq({ items, title }: { items: { q: string; a: string }[]; title?: React.ReactNode }) {
  return (
    <section id="faq" className="sec">
      <div className="wrap grid items-start gap-16 lg:grid-cols-[1fr_1.3fr]">
        <div className="flex flex-col gap-5">
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

/* ---------------- final CTA ---------------- */

export function FinalCta({ title = "Your phone will ring today. Make sure someone answers." }: { title?: string }) {
  return (
    <section className="relative px-6 pb-[120px] pt-6 max-md:px-3">
      <div
        className="wrap flex flex-col items-center gap-7 overflow-hidden rounded-[44px] px-12 py-24 text-center text-white max-md:rounded-[32px] max-md:px-6 max-md:py-20"
        style={{ background: "radial-gradient(120% 120% at 50% 0%, #3E77FF 0%, #2563FF 35%, #123A9E 75%, #071A52 100%)", boxShadow: "0 40px 80px -40px rgba(37,99,255,0.45)" }}
      >
        <div className="floor h-[55%]" style={{ ["--grid-line" as string]: "rgba(255,255,255,0.16)" }} />
        <Sphere size={160} className="fl absolute left-[4%] top-[12%] max-md:hidden" />
        <svg className="fl2 absolute bottom-[12%] right-[5%] max-md:hidden" width="150" height="160" viewBox="0 0 150 160" aria-hidden="true">
          <polygon points="75,10 135,44 75,78 15,44" fill="#FFFFFF" fillOpacity="0.9" />
          <polygon points="15,44 75,78 75,140 15,106" fill="#C9D8FF" />
          <polygon points="135,44 75,78 75,140 135,106" fill="#8DADFF" />
        </svg>
        <svg className="fl2 absolute right-[12%] top-[8%] max-md:hidden" width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
          <ellipse cx="60" cy="60" rx="50" ry="20" fill="none" stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="10" transform="rotate(-25 60 60)" />
        </svg>
        <span className="mono relative rounded-full border border-white/30 bg-white/15 px-3.5 py-[7px] text-[13px] font-medium uppercase tracking-[0.1em]">Never miss another call</span>
        <h2 className="relative max-w-[920px] font-serif text-[clamp(40px,5.4vw,74px)] font-bold leading-[1.02] tracking-[-0.025em]">{title}</h2>
        <p className="relative max-w-[620px] text-[19px] leading-[29px]">
          Book a 20-minute demo. We&apos;ll show you your agent handling real calls for your industry, and get you live in days.
        </p>
        <div className="relative flex flex-wrap justify-center gap-3">
          <Link href="/book-demo" className="btn btn-light btn-lg">
            Book a demo
          </Link>
          <a href={site.demoPhone.href} className="btn btn-dark btn-lg">
            Call our agent now
          </a>
        </div>
      </div>
    </section>
  );
}
