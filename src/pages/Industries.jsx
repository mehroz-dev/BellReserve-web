import { Link } from "react-router-dom";
import { Arrow } from "../components/icons.component.jsx";
import { SectionHead } from "../components/custom.components.jsx";
import { FinalCta } from "../components/final-cta.component.jsx";
import { useDocumentMeta } from "../hooks/useDocumentMeta.hook.js";
import { industries } from "../utils/Industries.config.js";
import "../assets/styles/Industries.css";

const Industries = () => {
  useDocumentMeta({
    title: "Industries",
    description: "AI calling agents trained for restaurants, HVAC, dental clinics, real estate and front desks.",
    path: "/industries",
  });

  return (
    <>
      <section className="sec">
        <div className="glow industries-page__glow" />
        <div className="wrap industries-page">
          <SectionHead
            eyebrow="Industries"
            title={
              <>
                One platform. <span className="grad-text">An agent trained for your niche.</span>
              </>
            }
            lead="Pick your industry to see what your agent handles and hear how it sounds on a real call."
          />

          <div className="industries-page__grid">
            {industries.map((industry) => (
              <Link key={industry.slug} to={`/industries/${industry.slug}`} className="card industry-link">
                <span className="mono industry-link__kicker">{industry.kicker}</span>
                <h2 className="h3">{industry.navLabel}</h2>
                <p className="body-text">{industry.headline}</p>
                <span className="industry-link__more">
                  Explore
                  <Arrow size={16} className="industry-link__arrow" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
};

export default Industries;
