import { Link, useParams } from "react-router-dom";
import { Arrow, Check } from "../components/icons.component.jsx";
import { SectionHead } from "../components/custom.components.jsx";
import { Calculator } from "../components/calculator.component.jsx";
import { Faq } from "../components/faq.component.jsx";
import { FinalCta } from "../components/final-cta.component.jsx";
import { HowItWorks } from "../components/how-it-works.component.jsx";
import { IndustryPanel } from "../components/industry-panel.component.jsx";
import { Cube, Sphere } from "../components/vectors.component.jsx";
import { useDocumentMeta } from "../hooks/useDocumentMeta.hook.js";
import { getIndustry, industries } from "../utils/Industries.config.js";
import { faqs, site } from "../utils/Site.config.js";
import NotFound from "./NotFound.jsx";
import "../assets/styles/IndustryDetail.css";

const IndustryHero = ({ industry }) => (
  <section className="industry-hero">
    <div className="glow industry-hero__glow industry-hero__glow--right" />
    <div className="glow industry-hero__glow industry-hero__glow--left" />
    <div className="floor" />

    <div className="wrap industry-hero__grid">
      <div className="industry-hero__copy">
        <nav aria-label="Breadcrumb" className="mono industry-hero__breadcrumb">
          <Link to="/">Home</Link>
          {" / "}
          <Link to="/#industries">Industries</Link>
          {" / "}
          <span className="industry-hero__breadcrumb-current">{industry.label}</span>
        </nav>
        <span className="eyebrow">{industry.kicker}</span>
        <h1 className="h1 industry-hero__title">{industry.page.title}</h1>
        <p className="lead industry-hero__intro">{industry.page.intro}</p>
        <div className="industry-hero__actions">
          <Link to={`/book-demo?industry=${industry.slug}`} className="btn btn-primary btn-lg">
            Book a demo
            <Arrow size={18} />
          </Link>
          <a href={site.demoPhone.href} className="btn btn-ghost btn-lg">
            Call our agent
          </a>
        </div>
      </div>

      <div className="industry-hero__visual" aria-hidden="true">
        <Sphere size={210} className="fl industry-hero__sphere" />
        <Cube size={190} className="fl2 industry-hero__cube" />
        <div className="glass fl industry-hero__outcome">
          <span className="icon-tile">
            <Check size={20} />
          </span>
          <div className="industry-hero__outcome-text">
            <span className="industry-hero__outcome-title">{industry.outcome}</span>
            <span className="mono industry-hero__outcome-subtitle">{industry.outcomeSub}</span>
          </div>
        </div>
      </div>
    </div>

    <div className="fade-b" />
  </section>
);

const IndustryPains = ({ industry }) => (
  <section className="sec industry-pains">
    <div className="wrap industry-pains__inner">
      <SectionHead
        eyebrow="The problem"
        title={
          <>
            Where {industry.label.toLowerCase()} lose calls <span className="grad-text">and revenue.</span>
          </>
        }
      />
      <div className="industry-pains__grid">
        {industry.page.pains.map((pain, index) => (
          <div key={pain.title} className="card industry-pain">
            <span className="mono industry-pain__number">0{index + 1}</span>
            <h3 className="h3">{pain.title}</h3>
            <p className="body-text">{pain.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const IndustryExample = ({ industry }) => (
  <section className="sec industry-example">
    <div className="deep industry-example__band">
      <div className="glow industry-example__glow" />
      <div className="wrap industry-example__inner">
        <div className="industry-example__head">
          <span className="eyebrow eyebrow--center">Hear it on a real call</span>
          <h2 className="h2 industry-example__title">{industry.headline}</h2>
        </div>
        <IndustryPanel industry={industry} showLink={false} />
      </div>
    </div>
  </section>
);

const IndustryCapabilities = ({ industry }) => (
  <section className="sec soft-alt">
    <div className="wrap industry-capabilities">
      <SectionHead
        center
        eyebrow="What your agent handles"
        title={
          <>
            Trained for {industry.label.toLowerCase()}, <span className="grad-text">not a generic script.</span>
          </>
        }
      />
      <div className="industry-capabilities__grid">
        {industry.page.capabilities.map((capability) => (
          <div key={capability.title} className="card industry-capability">
            <span className="icon-tile">
              <Check size={22} />
            </span>
            <div className="industry-capability__text">
              <h3 className="h3">{capability.title}</h3>
              <p className="body-text">{capability.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const OtherIndustries = ({ currentSlug }) => {
  const others = industries.filter((industry) => industry.slug !== currentSlug);

  return (
    <section className="sec other-industries">
      <div className="wrap other-industries__inner">
        <span className="mono other-industries__label">Other industries</span>
        <div className="other-industries__links">
          {others.map((industry) => (
            <Link key={industry.slug} to={`/industries/${industry.slug}`} className="btn btn-ghost btn-sm">
              {industry.navLabel}
              <Arrow size={14} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustryContent = ({ industry }) => {
  useDocumentMeta({
    title: `AI calling agent for ${industry.navLabel.toLowerCase()}`,
    description: industry.page.intro,
    path: `/industries/${industry.slug}`,
  });

  return (
    <>
      <IndustryHero industry={industry} />
      <IndustryPains industry={industry} />
      <IndustryExample industry={industry} />
      <IndustryCapabilities industry={industry} />
      <Calculator />
      <HowItWorks />
      <Faq items={[...industry.page.faqs, ...faqs.slice(0, 4)]} />
      <OtherIndustries currentSlug={industry.slug} />
      <FinalCta />
    </>
  );
};

/** /industries/:slug — one page per industry. Unknown slugs show the 404 page. */
const IndustryDetail = () => {
  const { slug } = useParams();
  const industry = getIndustry(slug);

  if (!industry) {
    return <NotFound />;
  }

  return <IndustryContent key={industry.slug} industry={industry} />;
};

export default IndustryDetail;
