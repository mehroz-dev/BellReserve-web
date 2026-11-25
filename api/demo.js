import { cleanDemoRequest, isBotSubmission, validateDemoRequest } from "../src/utils/DemoRequest.Helper.js";

/**
 * Demo-request endpoint (Vercel function at /api/demo).
 * Validates the form and, if DEMO_WEBHOOK_URL is set, forwards the lead as JSON
 * (e.g. to Zapier, Make, n8n, a CRM or a Slack incoming webhook).
 */

const jsonResponse = (body, status = 200) => {
  return Response.json(body, {
    status,
  });
};

const forwardToWebhook = async (webhookUrl, data) => {
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      source: "bellreserve.com",
      receivedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error(`Webhook responded ${response.status}`);
  }
};

export const POST = async (request) => {
  let body;

  try {
    body = await request.json();
  } catch {
    return jsonResponse(
      {
        ok: false,
        error: "Invalid request.",
      },
      400,
    );
  }

  // Silently accept bot submissions caught by the honeypot field.
  if (isBotSubmission(body)) {
    return jsonResponse({
      ok: true,
    });
  }

  const data = cleanDemoRequest(body);
  const errors = validateDemoRequest(data);

  if (Object.keys(errors).length > 0) {
    return jsonResponse(
      {
        ok: false,
        errors,
      },
      422,
    );
  }

  const webhookUrl = process.env.DEMO_WEBHOOK_URL;

  if (!webhookUrl) {
    console.info("[demo] new request (set DEMO_WEBHOOK_URL to forward leads)", data);

    return jsonResponse({
      ok: true,
    });
  }

  try {
    await forwardToWebhook(webhookUrl, data);
  } catch (error) {
    console.error("[demo] webhook delivery failed", error);

    return jsonResponse(
      {
        ok: false,
        error: "We couldn't send your request. Please email us instead.",
      },
      502,
    );
  }

  return jsonResponse({
    ok: true,
  });
};
