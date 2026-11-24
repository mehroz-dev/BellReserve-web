import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { FinalCta, SectionHead } from "@/components/sections/Home";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries",
  description: "AI calling agents trained for restaurants, HVAC, dental clinics, real estate and front desks.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesIndex() {
  return (
    <>
      <section className="sec relative">
        <div className="glow" style={{ width: 760, height: 560, right: -200, top: -160, background: "var(--glow)" }} />
        <div className="dots opacity-70" />
        <div className="wrap flex flex-col gap-12">
          <SectionHead
            eyebrow="Industries"
            title={
              <>
                One platform. <span className="grad-text">An agent trained for your niche.</span>
              </>
            }
            lead="Pick your industry to see what your agent handles and hear how it sounds on a real call."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`} className="card group flex flex-col gap-4 p-8">
                <span className="mono text-[12.5px] uppercase tracking-[0.1em] text-[var(--accent-text)]">{i.kicker}</span>
                <h2 className="h3 text-[26px] leading-8">{i.navLabel}</h2>
                <p className="body-text">{i.headline}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-semibold text-[var(--accent-text)]">
                  Explore <Arrow size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
