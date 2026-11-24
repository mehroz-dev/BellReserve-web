import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, Check } from "@/components/icons";
import { Calculator } from "@/components/sections/Calculator";
import { Faq, FinalCta, HowItWorks, SectionHead } from "@/components/sections/Home";
import { IndustryPanel } from "@/components/sections/IndustryPanel";
import { Cube, Sphere } from "@/components/vectors";
import { getIndustry, industries } from "@/lib/industries";
import { faqs, site } from "@/lib/site";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: `AI calling agent for ${industry.navLabel.toLowerCase()}`,
    description: industry.page.intro,
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const others = industries.filter((i) => i.slug !== industry.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-x-clip px-6 pb-24 pt-20 max-md:px-5">
        <div className="glow" style={{ width: 760, height: 620, right: -220, top: -120, background: "var(--glow)" }} />
        <div className="glow" style={{ width: 600, height: 600, left: -260, top: 120, background: "var(--glow-2)" }} />
        <div className="floor" />
        <div className="dots opacity-70" />
        <div className="wrap relative grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="relative z-[2] flex flex-col gap-7">
            <nav aria-label="Breadcrumb" className="mono text-[12.5px] uppercase tracking-[0.08em] text-[var(--faint)]">
              <Link href="/" className="hover:text-[var(--accent-text)]">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/#industries" className="hover:text-[var(--accent-text)]">
                Industries
              </Link>{" "}
              / <span className="text-[var(--accent-text)]">{industry.label}</span>
            </nav>
            <span className="eyebrow">{industry.kicker}</span>
            <h1 className="h1 !text-[clamp(42px,5.4vw,76px)]">{industry.page.title}</h1>
            <p className="lead max-w-[600px] text-[19px] leading-[30px]">{industry.page.intro}</p>
            <div className="flex flex-wrap gap-3">
              <Link href={`/book-demo?industry=${industry.slug}`} className="btn btn-primary btn-lg">
                Book a demo <Arrow size={18} />
              </Link>
              <a href={site.demoPhone.href} className="btn btn-ghost btn-lg">
                Call our agent
              </a>
            </div>
          </div>
          <div className="relative hidden h-[420px] lg:block" aria-hidden="true">
            <Sphere size={210} className="fl absolute left-[8%] top-[6%]" />
            <Cube size={190} className="fl2 absolute bottom-[4%] right-[6%]" />
            <div className="glass fl absolute bottom-[18%] left-[2%] z-[2] flex items-center gap-3 rounded-[20px] px-4 py-3.5 [animation-delay:-2s]">
              <span className="icon-tile h-[42px] w-[42px] rounded-[13px]">
                <Check size={20} />
              </span>
              <div className="flex flex-col">
                <span className="text-[15px] font-semibold">{industry.outcome}</span>
                <span className="mono text-xs text-[var(--faint)]">{industry.outcomeSub}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="fade-b" />
      </section>

      {/* Pains */}
      <section className="sec !pt-8">
        <div className="wrap flex flex-col gap-12">
          <SectionHead
            eyebrow="The problem"
            title={
              <>
                Where {industry.label.toLowerCase() === "front desks" ? "front desks" : industry.label.toLowerCase()} lose calls <span className="grad-text">and revenue.</span>
              </>
            }
          />
          <div className="grid gap-5 md:grid-cols-3">
            {industry.page.pains.map((p, i) => (
              <div key={p.title} className="card flex flex-col gap-3 p-8">
                <span className="mono text-[13px] font-medium text-[var(--accent-text)]">0{i + 1}</span>
                <h3 className="h3">{p.title}</h3>
                <p className="body-text">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live example */}
      <section className="sec !py-12 max-md:!px-3">
        <div className="deep relative mx-auto max-w-[1392px] overflow-hidden rounded-[48px] border border-[var(--deep-border)] px-8 py-24 max-md:rounded-[32px] max-md:px-5 max-md:py-16">
          <div className="glow" style={{ width: 900, height: 600, left: "50%", marginLeft: -450, top: -320, background: "rgba(37,99,255,0.45)" }} />
          <div className="wrap flex flex-col gap-11">
            <div className="flex flex-col items-center gap-5 text-center">
              <span className="eyebrow center">Hear it on a real call</span>
              <h2 className="h2 max-w-[860px]">{industry.headline}</h2>
            </div>
            <IndustryPanel industry={industry} showLink={false} />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="sec soft-alt">
        <div className="wrap flex flex-col gap-12">
          <SectionHead
            center
            eyebrow="What your agent handles"
            title={
              <>
                Trained for {industry.label.toLowerCase()}, <span className="grad-text">not a generic script.</span>
              </>
            }
          />
          <div className="grid gap-5 md:grid-cols-2">
            {industry.page.capabilities.map((c) => (
              <div key={c.title} className="card flex gap-5 p-8">
                <span className="icon-tile">
                  <Check size={22} />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="h3">{c.title}</h3>
                  <p className="body-text">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Calculator />
      <HowItWorks />
      <Faq items={[...industry.page.faqs, ...faqs.slice(0, 4)]} />

      {/* Other industries */}
      <section className="sec !pb-16 !pt-0">
        <div className="wrap flex flex-col gap-6">
          <span className="mono text-xs uppercase tracking-[0.1em] text-[var(--faint)]">Other industries</span>
          <div className="flex flex-wrap gap-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/industries/${o.slug}`} className="btn btn-ghost btn-sm">
                {o.navLabel} <Arrow size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
