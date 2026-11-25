import { site } from "../utils/Site.config.js";

/**
 * Sends a demo request to /api/demo.
 * Resolves to { ok: true } on success, or { ok: false, errors, error } with field errors or a message.
 */
export const submitDemoRequest = async (payload) => {
  try {
    const response = await fetch("/api/demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.ok && result.ok) {
      return {
        ok: true,
      };
    }

    return {
      ok: false,
      errors: result.errors || {},
      error: result.error || "Please check the highlighted fields.",
    };
  } catch {
    return {
      ok: false,
      errors: {},
      error: `Something went wrong. Please email ${site.email}.`,
    };
  }
};
