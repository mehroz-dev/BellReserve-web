import Image from "next/image";
import Link from "next/link";
import { Arrow, CalendarCheck, Check, Message, Mic, Play, Transfer } from "@/components/icons";
import { Cube, Ring, Sphere, Wave } from "@/components/vectors";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-x-clip px-6 pb-[140px] pt-24 max-md:px-5 max-md:pt-16">
      <div className="glow" style={{ width: 720, height: 720, left: -260, top: -280, background: "var(--glow-2)" }} />
      <div className="glow" style={{ width: 760, height: 760, right: -200, top: 40, background: "var(--glow)" }} />
      <div className="floor" />
      <div className="dots opacity-80" />

      <div className="wrap grid items-center gap-14 lg:grid-cols-2">
        <div className="relative z-[2] flex flex-col gap-7">
          <span className="eyebrow">AI calling agent · Answering 24/7</span>
          <h1 className="h1">
            Your phone rang.
            <br />
            <span className="grad-text">We answered.</span>
          </h1>
          <p className="lead max-w-[540px] text-[20px] leading-[31px]">
            BellReserve is an AI calling agent trained for your business. It answers every call, books appointments and captures leads around the
            clock, so a missed call never turns into lost revenue.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/book-demo" className="btn btn-primary btn-lg">
              Book a demo
              <Arrow size={18} />
            </Link>
            <a href={site.demoPhone.href} className="btn btn-ghost btn-lg">
              <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-brand text-white">
                <Play size={12} />
              </span>
              Hear a live call
            </a>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {["Keeps your number", "We do the setup", "Live in days"].map((t) => (
              <span key={t} className="chip">
                <Check size={16} className="text-brand" />
                {t}
              </span>
            ))}
          </div>
          <span className="mono text-[13px] text-[var(--faint)]">Call our demo agent: {site.demoPhone.display}</span>
        </div>

        {/* 3D scene */}
        <div className="relative flex min-h-[680px] items-center justify-center max-sm:min-h-[600px]" aria-hidden="true">
          <Ring className="fl2 absolute left-1/2 top-1/2 -ml-[260px] -mt-[260px] max-sm:hidden" />
          <Sphere className="fl absolute left-[2%] top-[4%]" />
          <Sphere ink size={70} className="fl2 absolute right-[6%] top-[2%]" />
          <Cube className="fl absolute bottom-[8%] right-0 [animation-delay:-2s]" />

          <div className="tilt-phone relative z-[2] lg:ml-40">
            <div
              className="h-[640px] w-[318px] rounded-[52px] p-[11px]"
              style={{
                background: "linear-gradient(145deg,#3A3A3A,#000000 40%,#1A1A1A)",
                boxShadow: "0 40px 80px -36px rgba(10,30,120,0.35), 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 0 2px rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="relative flex h-full w-full flex-col gap-3.5 overflow-hidden rounded-[42px] px-4 pb-[18px] pt-[46px] text-white"
                style={{ background: "radial-gradient(120% 70% at 50% 0%, #11265F 0%, #050914 55%, #000000 100%)" }}
              >
                <div className="absolute left-1/2 top-3 -ml-12 h-[26px] w-24 rounded-full bg-black" />
                <div className="flex items-center gap-3">
                  <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-white">
                    <Image src="/brand/bellreserve-icon.png" alt="" width={30} height={30} />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-semibold">Front desk agent</span>
                    <span className="mono text-[11.5px] text-white/70">Incoming · Your business</span>
                  </div>
                  <span className="mono ml-auto rounded-full border border-[#8dadff]/50 bg-brand/35 px-2 py-1 text-[11px]">01:24</span>
                </div>
                <div className="flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Wave color="#8DADFF" height={32} />
                </div>
                <div className="flex flex-col gap-2 text-[13.5px] leading-[19px]">
                  <Bubble>Hi, is Friday at 2 PM free?</Bubble>
                  <Bubble agent>Yes, Friday at 2 PM is open. Can I get your name and number?</Bubble>
                  <Bubble>Sara Malik, 555-0142.</Bubble>
                  <Bubble agent>You&apos;re booked, Sara. Confirmation is on its way by text.</Bubble>
                </div>
                <div className="mt-auto flex justify-center gap-5">
                  <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white/10">
                    <Mic size={22} />
                  </span>
                  <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-gradient-to-b from-[#4a80ff] to-brand">
                    <Transfer size={22} />
                  </span>
                </div>
                <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(115deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 32%)" }} />
              </div>
            </div>
          </div>

          <FloatCard className="fl left-[-24px] top-[70px] [animation-delay:-1s]" icon={<CalendarCheck size={20} />} title="Appointment booked" sub="Fri · 2:00 PM · Calendar synced" />
          <FloatCard ink className="fl bottom-[-18px] right-[-60px] [animation-delay:-3s]" icon={<Message size={20} />} title="Customer confirmed" sub="SMS sent automatically" />
          <div className="glass fl2 absolute bottom-[150px] left-[-12px] z-[3] flex max-sm:hidden min-w-[210px] flex-col gap-1.5 rounded-[18px] px-4 py-3">
            <span className="mono text-[11px] uppercase tracking-[0.08em] text-[var(--faint)]">Revenue saved tonight</span>
            <span className="font-serif text-[28px] font-bold leading-none">+ $1,240</span>
            <span className="flex items-center gap-1.5 text-[12.5px] text-[var(--muted)]">
              <span className="block h-1.5 w-1.5 rounded-full bg-brand" />8 after-hours calls answered
            </span>
          </div>
        </div>
      </div>
      <div className="fade-b" />
    </section>
  );
}

function Bubble({ children, agent = false }: { children: React.ReactNode; agent?: boolean }) {
  return agent ? (
    <div className="max-w-[88%] self-start rounded-[18px_18px_18px_4px] bg-gradient-to-b from-[#3e77ff] to-brand px-3.5 py-2.5">{children}</div>
  ) : (
    <div className="max-w-[82%] self-end rounded-[18px_18px_4px_18px] border border-white/10 bg-white/10 px-3.5 py-2.5">{children}</div>
  );
}

function FloatCard({ className, icon, title, sub, ink = false }: { className: string; icon: React.ReactNode; title: string; sub: string; ink?: boolean }) {
  return (
    <div className={`glass absolute z-[3] flex items-center gap-3 rounded-[20px] px-4 py-3.5 max-sm:hidden ${className}`}>
      <span className={`icon-tile h-[42px] w-[42px] rounded-[13px] ${ink ? "ink" : ""}`}>{icon}</span>
      <div className="flex flex-col">
        <span className="text-[15px] font-semibold">{title}</span>
        <span className="mono text-xs text-[var(--faint)]">{sub}</span>
      </div>
    </div>
  );
}
