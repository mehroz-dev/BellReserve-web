import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="[DATE]">
      <h2>What we collect</h2>
      <p>When you request a demo we collect your name, business name, email, phone number and the details you choose to share. When our agent answers calls for a client, call audio, transcripts and the details callers provide are processed on that client&apos;s behalf.</p>
      <h2>How we use it</h2>
      <ul>
        <li>To set up and run your AI calling agent.</li>
        <li>To contact you about your demo or account.</li>
        <li>To improve the quality and reliability of our service.</li>
      </ul>
      <h2>Sharing</h2>
      <p>We do not sell personal information. We share it only with service providers that help us run BellReserve (for example telephony and voice providers) and only as needed to provide the service. [LIST SUB-PROCESSORS]</p>
      <h2>Retention</h2>
      <p>[DEFINE RETENTION PERIODS FOR CALL RECORDINGS, TRANSCRIPTS AND LEADS]</p>
      <h2>Your choices</h2>
      <p>To access, correct or delete your information, email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </LegalPage>
  );
}
