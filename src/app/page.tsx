import { Calculator } from "@/components/sections/Calculator";
import { Hero } from "@/components/sections/Hero";
import {
  DashboardPreview,
  Faq,
  Features,
  FinalCta,
  Highlights,
  HowItWorks,
  IndustriesSection,
  Integrations,
  Marquee,
  MeetAgent,
  Pricing,
  Testimonials,
  Trust,
} from "@/components/sections/Home";
import { faqs } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Highlights />
      <MeetAgent />
      <IndustriesSection />
      <Calculator />
      <HowItWorks />
      <Features />
      <DashboardPreview />
      <Integrations />
      <Testimonials />
      <Pricing />
      <Trust />
      <Faq items={faqs} />
      <FinalCta />
    </>
  );
}
