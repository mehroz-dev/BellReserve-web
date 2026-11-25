import { industrySlugs } from "./Industries.config.js";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Trims a form value and caps its length. Non-strings become an empty string. */
const cleanValue = (value, maxLength = 500) => {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
};

/** True when the hidden honeypot field was filled in, which only bots do. */
export const isBotSubmission = (body) => {
  return Boolean(cleanValue(body.company_website));
};

/** Cleans the raw demo-request body into the fields we keep. */
export const cleanDemoRequest = (body) => {
  return {
    name: cleanValue(body.name, 120),
    email: cleanValue(body.email, 200),
    phone: cleanValue(body.phone, 40),
    business: cleanValue(body.business, 160),
    industry: cleanValue(body.industry, 40),
    callsPerWeek: cleanValue(body.callsPerWeek, 40),
    plan: cleanValue(body.plan, 40),
    message: cleanValue(body.message, 2000),
  };
};

/** Returns a map of field name to error message. Empty when the request is valid. */
export const validateDemoRequest = (data) => {
  const errors = {};

  if (!data.name) {
    errors.name = "Please enter your name.";
  }

  if (!EMAIL_PATTERN.test(data.email)) {
    errors.email = "Please enter a valid email.";
  }

  if (data.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!data.business) {
    errors.business = "Please enter your business name.";
  }

  const knownIndustry = industrySlugs.includes(data.industry) || data.industry === "other";

  if (!knownIndustry) {
    errors.industry = "Please choose your industry.";
  }

  return errors;
};
