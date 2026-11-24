"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Bolt, CalendarCheck, Phone, Shield, Users } from "@/components/icons";
import { Wave } from "@/components/vectors";
import "./dashboard-demo.css";

const VIEWS = [
  { id: "overview", label: "Overview" },
  { id: "live", label: "Live calls" },
  { id: "bookings", label: "Bookings" },
] as const;
type ViewId = (typeof VIEWS)[number]["id"];

/** How long each view stays on screen before the next one plays. */
const DURATION = 7000;

const NAV: { label: string; icon: React.ReactNode; view?: ViewId }[] = [
  { label: "Overview", icon: <Bolt size={17} />, view: "overview" },
  { label: "Live calls", icon: <Phone size={17} />, view: "live" },
  { label: "Bookings", icon: <CalendarCheck size={17} />, view: "bookings" },
  { label: "Contacts", icon: <Users size={17} /> },
  { label: "Settings", icon: <Shield size={17} /> },
];

const REDUCED = "(prefers-reduced-motion: reduce)";
const subscribeReduced = (cb: () => void) => {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const noopSubscribe = () => () => {};

/**
 * Animated product mock: an app window with a sidebar and three views
 * (overview, live call, bookings) that play in turn while the section is on screen.
 */
export function DashboardDemo() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [inView, setInView] = useState(false);
  const hydrated = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const reduced = useSyncExternalStore(subscribeReduced, () => window.matchMedia(REDUCED).matches, () => false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || reduced) return;
    const id = window.setTimeout(() => {
      setActive((a) => (a + 1) % VIEWS.length);
      setCycle((c) => c + 1);
    }, DURATION);
    return () => window.clearTimeout(id);
  }, [active, cycle, inView, reduced]);

  const select = (i: number) => {
    setActive(i);
    setCycle((c) => c + 1);
  };

  // static: server render / reduced motion. wait: hydrated but off screen. run: playing.
  const state = !hydrated || reduced ? "static" : inView ? "run" : "wait";
  const view = VIEWS[active].id;

  return (
    <div ref={root} className="dash" data-state={state} style={{ ["--dur" as string]: `${DURATION}ms` }}>
      <div className="glass rounded-[30px] p-2.5">
        <div className="overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--surface)]">
          {/* Window bar */}
          <div className="flex items-center gap-3 border-b border-[var(--border)] px-5 py-3">
            <span className="flex gap-1.5" aria-hidden="true">
              {[0, 1, 2].map((d) => (
                <span key={d} className="block h-2.5 w-2.5 rounded-full bg-[var(--border-strong)]" />
              ))}
            </span>
            <span className="mono mx-auto truncate rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-4 py-1.5 text-[11.5px] text-[var(--faint)]">
              app.bellreserve.com/harbor-dental
            </span>
            <span className="w-[42px]" aria-hidden="true" />
          </div>

          <div className="grid md:grid-cols-[208px_1fr]">
            {/* Sidebar */}
            <aside className="hidden flex-col gap-1 border-r border-[var(--border)] bg-[var(--surface-2)] p-4 md:flex" aria-hidden="true">
              <div className="mb-4 flex items-center gap-2.5 px-2 pt-1">
                <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-white">
                  <Image src="/brand/bellreserve-icon.png" alt="" width={20} height={20} />
                </span>
                <span className="text-[15px] font-semibold">BellReserve</span>
              </div>
              {NAV.map((n) => {
                const on = n.view === view;
                return (
                  <span
                    key={n.label}
                    className={`flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-[14px] transition-colors duration-300 ${
                      on ? "bg-[var(--chip-bg)] font-medium text-[var(--accent-text)]" : "text-[var(--muted)]"
                    }`}
                  >
                    {n.icon}
                    {n.label}
                  </span>
                );
              })}
              <div className="mt-auto flex items-center gap-2.5 rounded-[14px] border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-[13px]">
                <span className="dash-live block h-2 w-2 flex-none rounded-full bg-[#22c55e]" />
                <span className="flex flex-col leading-tight">
                  <span className="font-medium">Agent online</span>
                  <span className="text-[12px] text-[var(--faint)]">Answering 24/7</span>
                </span>
              </div>
            </aside>

            {/* Main */}
            <div className="flex min-w-0 flex-col">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] px-5 py-3.5">
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold">Harbor Dental</span>
                  <span className="text-[12.5px] text-[var(--faint)]">{VIEWS[active].label} · This month</span>
                </div>
                <div role="tablist" aria-label="Dashboard views" className="flex gap-1 rounded-full border border-[var(--border)] bg-[var(--surface-2)] p-1">
                  {VIEWS.map((v, i) => {
                    const on = i === active;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        role="tab"
                        aria-selected={on}
                        onClick={() => select(i)}
                        className={`relative cursor-pointer overflow-hidden rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-colors ${
                          on ? "bg-brand text-white" : "text-[var(--muted)] hover:text-[var(--text)]"
                        }`}
                      >
                        {v.label}
                        {on && state === "run" ? <span key={cycle} className="dash-progress absolute inset-x-0 bottom-0 h-[2px] bg-white/80" /> : null}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div key={`${view}-${cycle}`} className="min-h-[470px] p-5 max-sm:p-4">
                {view === "overview" ? <OverviewView run={state === "run"} /> : view === "live" ? <LiveView /> : <BookingsView run={state === "run"} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- helpers ---------------- */

function useCountUp(target: number, run: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return run ? value : target;
}

const fmt = (n: number) => n.toLocaleString("en-US");
const delay = (ms: number) => ({ ["--d" as string]: `${ms}ms` });

function Tag({ kind }: { kind: "Booked" | "FAQ" | "Handover" }) {
  const cls =
    kind === "Booked"
      ? "border border-[var(--chip-border)] bg-[var(--chip-bg)] text-[var(--accent-text)]"
      : kind === "Handover"
        ? "bg-[var(--text)] text-[var(--bg)]"
        : "border border-[var(--border-strong)] text-[var(--muted)]";
  return <span className={`mono rounded-full px-2.5 py-1 text-[10.5px] uppercase tracking-[0.05em] ${cls}`}>{kind}</span>;
}

/* ---------------- views ---------------- */

function Kpi({ label, value, sub, run, prefix = "", d, primary = false }: { label: string; value: number; sub: string; run: boolean; prefix?: string; d: number; primary?: boolean }) {
  const v = useCountUp(value, run);
  return (
    <div
      className={`dash-in relative flex flex-col gap-1.5 overflow-hidden rounded-[18px] p-4 ${
        primary ? "text-white shadow-[0_20px_40px_-20px_rgba(37,99,255,0.45)]" : "border border-[var(--border)] bg-[var(--surface-2)]"
      }`}
      style={{ ...delay(d), ...(primary ? { background: "linear-gradient(140deg,#4A80FF,#2563FF 50%,#163FB8)" } : {}) }}
    >
      <span className={`mono text-[10.5px] uppercase tracking-[0.08em] ${primary ? "text-white/80" : "text-[var(--faint)]"}`}>{label}</span>
      <span className="font-serif text-[30px] font-medium leading-none tabular-nums">
        {prefix}
        {fmt(v)}
      </span>
      <span className={`text-[12.5px] ${primary ? "text-white/85" : "text-[var(--faint)]"}`}>{sub}</span>
    </div>
  );
}

function OverviewView({ run }: { run: boolean }) {
  const bars = [22, 38, 72, 88, 64, 96, 80, 58, 54, 44, 26, 14];
  const after = [true, true, false, false, false, false, false, false, true, true, true, true];
  const calls: [string, string, "Booked" | "FAQ" | "Handover"][] = [
    ["11:48 PM", "New patient · cleaning booked", "Booked"],
    ["9:12 PM", "Insurance question · answered", "FAQ"],
    ["4:30 PM", "Toothache · transferred to front desk", "Handover"],
    ["2:05 PM", "Rescheduled · Thu 10:00 AM", "Booked"],
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Kpi primary label="Revenue recovered" prefix="$" value={18420} sub="After-hours and overflow" run={run} d={0} />
        <Kpi label="Calls answered" value={1284} sub="0 sent to voicemail" run={run} d={90} />
        <Kpi label="Bookings made" value={312} sub="96 new patients" run={run} d={180} />
        <Kpi label="After-hours calls" value={417} sub="32% of all calls" run={run} d={270} />
      </div>
      <div className="grid gap-3 lg:grid-cols-[1.1fr_1fr]">
        <div className="dash-in flex flex-col gap-3 rounded-[18px] border border-[var(--border)] bg-[var(--surface-2)] p-4" style={delay(300)}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[14.5px] font-semibold">Calls by hour</span>
            <span className="flex gap-3 text-[12px] text-[var(--muted)]">
              <span className="flex items-center gap-1.5">
                <span className="block h-2 w-2 rounded-[3px] bg-[var(--text)]" />
                Open hours
              </span>
              <span className="flex items-center gap-1.5">
                <span className="block h-2 w-2 rounded-[3px] bg-brand" />
                After hours
              </span>
            </span>
          </div>
          <div aria-hidden="true" className="flex h-[150px] items-end gap-1.5 border-b border-[var(--border-strong)]">
            {bars.map((h, i) => (
              <span
                key={i}
                className="dash-grow block flex-1 rounded-t-[6px]"
                style={{ height: `${h}%`, background: after[i] ? "linear-gradient(180deg,#6C93FF,#2563FF)" : "var(--text)", ...delay(450 + i * 55) }}
              />
            ))}
          </div>
          <div className="mono flex justify-between text-[11px] text-[var(--faint)]">
            <span>6 AM</span>
            <span>12 PM</span>
            <span>6 PM</span>
            <span>12 AM</span>
          </div>
        </div>
        <div className="dash-in flex flex-col rounded-[18px] border border-[var(--border)] bg-[var(--surface-2)] p-4" style={delay(380)}>
          <span className="pb-2 text-[14.5px] font-semibold">Recent calls</span>
          {calls.map(([t, d, tag], i) => (
            <div key={t} className="dash-in flex items-center gap-3 border-t border-[var(--border)] py-2.5" style={delay(700 + i * 160)}>
              <span className="mono w-[60px] flex-none text-[11px] text-[var(--faint)]">{t}</span>
              <span className="min-w-0 flex-1 truncate text-[13.5px]">{d}</span>
              <Tag kind={tag} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LiveView() {
  const lines: { text: string; agent: boolean }[] = [
    { text: "Hi, do you have anything this Thursday for a cleaning?", agent: false },
    { text: "Thursday at 10:30 AM is open. Can I get your name?", agent: true },
    { text: "It's Sara Malik, I'm a new patient.", agent: false },
    { text: "Welcome, Sara. You're booked for Thursday at 10:30. I'll text you the details.", agent: true },
  ];
  const queue = [
    ["+1 (415) 555-0193", "On call · 01:12", true],
    ["+1 (628) 555-0148", "Answered in 0.6s", false],
    ["+1 (510) 555-0172", "Answered in 0.9s", false],
  ] as const;
  return (
    <div className="grid gap-3 lg:grid-cols-[1.5fr_1fr]">
      <div className="dash-in flex flex-col gap-3 rounded-[18px] border border-[var(--border)] bg-[var(--surface-2)] p-4" style={delay(0)}>
        <div className="flex items-center gap-3">
          <span className="icon-tile h-10 w-10 rounded-[12px]">
            <Phone size={18} />
          </span>
          <div className="flex min-w-0 flex-1 flex-col">
            <span className="text-[14.5px] font-semibold">Incoming · New patient</span>
            <span className="mono truncate text-[11.5px] text-[var(--faint)]">+1 (415) 555-0193 · Harbor Dental line</span>
          </div>
          <span className="mono flex items-center gap-2 rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-2.5 py-1 text-[11px] text-[var(--accent-text)]">
            <span className="dash-live block h-1.5 w-1.5 rounded-full bg-[#ff4d4d]" />
            Live
          </span>
        </div>
        <div className="flex h-10 items-center justify-center rounded-[12px] border border-[var(--border)] bg-[var(--surface)]">
          <Wave count={12} height={26} />
        </div>
        <div className="flex flex-col gap-2 text-[13px] leading-[19px]">
          {lines.map((l, i) => (
            <div
              key={i}
              className={`dash-in max-w-[85%] rounded-[16px] px-3.5 py-2.5 ${
                l.agent ? "self-start rounded-bl-[4px] bg-brand text-white" : "self-end rounded-br-[4px] border border-[var(--border)] bg-[var(--surface)]"
              }`}
              style={delay(500 + i * 1000)}
            >
              {l.text}
            </div>
          ))}
        </div>
        <div className="dash-pop mt-auto flex items-center gap-3 rounded-[14px] border border-[var(--chip-border)] bg-[var(--chip-bg)] px-3.5 py-2.5 text-[13px]" style={delay(4600)}>
          <CalendarCheck size={17} className="flex-none text-[var(--accent-text)]" />
          <span className="flex-1">
            <span className="font-semibold">Booking created</span> · Thu 10:30 AM · SMS sent
          </span>
          <Tag kind="Booked" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="dash-in grid grid-cols-2 gap-3" style={delay(150)}>
          <div className="rounded-[18px] border border-[var(--border)] bg-[var(--surface-2)] p-4">
            <span className="mono text-[10.5px] uppercase tracking-[0.08em] text-[var(--faint)]">Avg. answer</span>
            <span className="mt-1.5 block font-serif text-[28px] font-medium leading-none">0.8s</span>
          </div>
          <div className="rounded-[18px] border border-[var(--border)] bg-[var(--surface-2)] p-4">
            <span className="mono text-[10.5px] uppercase tracking-[0.08em] text-[var(--faint)]">Missed today</span>
            <span className="mt-1.5 block font-serif text-[28px] font-medium leading-none">0</span>
          </div>
        </div>
        <div className="dash-in flex flex-1 flex-col rounded-[18px] border border-[var(--border)] bg-[var(--surface-2)] p-4" style={delay(250)}>
          <span className="pb-2 text-[14.5px] font-semibold">Call queue</span>
          {queue.map(([num, status, live], i) => (
            <div key={num} className="dash-in flex items-center gap-3 border-t border-[var(--border)] py-2.5" style={delay(450 + i * 160)}>
              <span className={`block h-2 w-2 flex-none rounded-full ${live ? "dash-live bg-[#ff4d4d]" : "bg-[#22c55e]"}`} />
              <span className="mono flex-1 truncate text-[12px]">{num}</span>
              <span className="text-[12px] text-[var(--faint)]">{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BookingsView({ run }: { run: boolean }) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const times = ["9 AM", "11 AM", "1 PM", "3 PM", "5 PM"];
  // [day, slot, label, booked by agent]
  const blocks: [number, number, string, boolean][] = [
    [0, 0, "Cleaning · J. Wu", true],
    [0, 3, "Check-up · A. Khan", false],
    [1, 1, "New patient · R. Diaz", true],
    [1, 4, "Whitening · M. Lee", true],
    [2, 2, "Filling · T. Brown", false],
    [3, 0, "Cleaning · Sara M.", true],
    [3, 3, "Consult · P. Shah", true],
    [4, 1, "Check-up · L. Chen", true],
    [4, 2, "Emergency · D. Ross", true],
  ];
  const byAgent = useCountUp(38, run, 1600);
  return (
    <div className="grid gap-3 lg:grid-cols-[1.6fr_1fr]">
      <div className="dash-in overflow-x-auto rounded-[18px] border border-[var(--border)] bg-[var(--surface-2)] p-4" style={delay(0)}>
        <div className="grid min-w-[440px] grid-cols-[48px_repeat(5,1fr)] gap-1.5">
          <span />
          {days.map((d) => (
            <span key={d} className="mono pb-1 text-center text-[11px] uppercase tracking-[0.06em] text-[var(--faint)]">
              {d}
            </span>
          ))}
          {times.map((t, row) => (
            <div key={t} className="contents">
              <span className="mono pt-2 text-[10.5px] text-[var(--faint)]">{t}</span>
              {days.map((_, col) => {
                const b = blocks.find(([d, s]) => d === col && s === row);
                const order = b ? blocks.indexOf(b) : 0;
                return (
                  <div key={col} className="relative h-[62px] rounded-[10px] border border-dashed border-[var(--border)]">
                    {b ? (
                      <div
                        className={`dash-pop absolute inset-[3px] flex flex-col justify-between rounded-[8px] px-2 py-1.5 text-[11px] leading-tight ${
                          b[3] ? "bg-brand text-white" : "border border-[var(--border-strong)] bg-[var(--surface)]"
                        }`}
                        style={delay(300 + order * 170)}
                      >
                        <span className="line-clamp-2 font-medium">{b[2]}</span>
                        {b[3] ? <span className="mono text-[9px] uppercase tracking-[0.06em] text-white/80">AI booked</span> : null}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="dash-in rounded-[18px] p-4 text-white shadow-[0_20px_40px_-20px_rgba(37,99,255,0.45)]" style={{ ...delay(150), background: "linear-gradient(140deg,#4A80FF,#2563FF 50%,#163FB8)" }}>
          <span className="mono text-[10.5px] uppercase tracking-[0.08em] text-white/80">Booked by your agent</span>
          <span className="mt-1.5 block font-serif text-[34px] font-medium leading-none tabular-nums">{byAgent}</span>
          <span className="mt-1 block text-[12.5px] text-white/85">this week, 21 of them after hours</span>
        </div>
        <div className="dash-in flex flex-1 flex-col gap-3 rounded-[18px] border border-[var(--border)] bg-[var(--surface-2)] p-4" style={delay(300)}>
          <span className="text-[14.5px] font-semibold">Where bookings came from</span>
          {[
            ["Phone calls", 72],
            ["After-hours calls", 55],
            ["Reschedules", 28],
          ].map(([label, pct], i) => (
            <div key={label} className="flex flex-col gap-1.5">
              <span className="flex justify-between text-[12.5px]">
                <span>{label}</span>
                <span className="text-[var(--faint)]">{pct}%</span>
              </span>
              <span className="block h-1.5 overflow-hidden rounded-full bg-[var(--border)]">
                <span className="dash-fill block h-full rounded-full bg-brand" style={{ width: `${pct}%`, ...delay(600 + (i as number) * 150) }} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
