import { Calculator } from "../components/calculator.component.jsx";
import { DashboardSection } from "../components/dashboard-demo.component.jsx";
import { Faq } from "../components/faq.component.jsx";
import { Features } from "../components/features.component.jsx";
import { FinalCta } from "../components/final-cta.component.jsx";
import { Hero } from "../components/hero.component.jsx";
import { Highlights } from "../components/highlights.component.jsx";
import { HowItWorks } from "../components/how-it-works.component.jsx";
import { IndustriesSection } from "../components/industry-carousel.component.jsx";
import { IndustryMarquee } from "../components/industry-marquee.component.jsx";
import { Integrations } from "../components/integrations.component.jsx";
import { MeetAgent } from "../components/meet-agent.component.jsx";
import { Pricing } from "../components/pricing.component.jsx";
import { Testimonials } from "../components/testimonials.component.jsx";
import { useDocumentMeta } from "../hooks/useDocumentMeta.hook.js";
import { faqs } from "../utils/Site.config.js";
import "../assets/styles/Home.css";

const Home = () => {
  useDocumentMeta({
    path: "/",
  });

  return (
    <>
      <Hero />
      <IndustryMarquee />
      <Highlights />
      <MeetAgent />
      <IndustriesSection />
      <Calculator />
      <HowItWorks />
      <Features />
      <DashboardSection />
      <Integrations />
      <Testimonials />
      <Pricing />
      <Faq items={faqs} />
      <FinalCta />
    </>
  );
};

export default Home;
