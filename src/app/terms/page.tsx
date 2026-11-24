import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Use", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="[DATE]">
      <h2>The service</h2>
      <p>BellReserve, a {site.company} product, provides AI calling agents that answer calls for businesses. Our team sets up each agent based on the information you provide.</p>
      <h2>Packages and fees</h2>
      <p>Packages are billed monthly. A one-time setup fee of {site.setupFee} covers the done-for-you build. [CONFIRM CONTRACT LENGTH, CANCELLATION AND OVERAGE TERMS]</p>
      <h2>Your responsibilities</h2>
      <ul>
        <li>Provide accurate business information, prices and policies for your agent.</li>
        <li>Comply with call-recording and consent laws where you operate.</li>
        <li>Review your agent&apos;s behaviour before go-live and tell us about changes.</li>
      </ul>
      <h2>Results</h2>
      <p>BellReserve is designed to answer calls you would otherwise miss. Revenue estimates on our website are illustrations based on your inputs and are not a guarantee of results.</p>
      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
