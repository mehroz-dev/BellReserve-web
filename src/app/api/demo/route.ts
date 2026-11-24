import { industries } from "@/lib/industries";

/**
 * Demo-request endpoint.
 * Validates the form and, if DEMO_WEBHOOK_URL is set, forwards the lead as JSON
 * (e.g. to Zapier, Make, n8n, a CRM or a Slack incoming webhook).
 */

type DemoRequest = {
  name: string;
  email: string;
  phone: string;
  business: string;
  industry: string;
  callsPerWeek?: string;
  plan?: string;
  message?: string;
  company_website?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: unknown, max = 500) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Partial<DemoRequest>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Silently accept bot submissions caught by the honeypot field.
  if (clean(body.company_website)) return Response.json({ ok: true });

  const data: DemoRequest = {
    name: clean(body.name, 120),
    email: clean(body.email, 200),
    phone: clean(body.phone, 40),
    business: clean(body.business, 160),
    industry: clean(body.industry, 40),
    callsPerWeek: clean(body.callsPerWeek, 40),
    plan: clean(body.plan, 40),
    message: clean(body.message, 2000),
  };

  const errors: Record<string, string> = {};
  if (!data.name) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email.";
  if (data.phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number.";
  if (!data.business) errors.business = "Please enter your business name.";
  if (!industries.some((i) => i.slug === data.industry) && data.industry !== "other") errors.industry = "Please choose your industry.";

  if (Object.keys(errors).length) {
    return Response.json({ ok: false, errors }, { status: 422 });
  }

  const webhook = process.env.DEMO_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "bellreserve.com", receivedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error("[demo] webhook delivery failed", err);
      return Response.json({ ok: false, error: "We couldn't send your request. Please email us instead." }, { status: 502 });
    }
  } else {
    console.info("[demo] new request (set DEMO_WEBHOOK_URL to forward leads)", data);
  }

  return Response.json({ ok: true });
}
