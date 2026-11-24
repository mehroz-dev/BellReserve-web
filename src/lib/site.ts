export const site = {
  name: "BellReserve",
  url: "https://bellreserve.com",
  tagline: "Your AI Calling Agent. One solution for every call.",
  description:
    "BellReserve is an AI calling agent trained for your business. It answers every call 24/7, books appointments and captures leads, so a missed call never turns into lost revenue.",
  email: "hello@bellreserve.com",
  /** Live demo agent line (from the current site). */
  demoPhone: { display: "+1 (641) 466-4655", href: "tel:+16414664655" },
  /** Sales / contact line (from the current site footer). */
  contactPhone: { display: "+1 (415) 749-9364", href: "tel:+14157499364" },
  setupFee: "$199",
  company: "UnicodeTech",
};

export const nav = [
  { label: "Industries", href: "/#industries" },
  { label: "How it works", href: "/#how" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export const plans = [
  {
    name: "Starter",
    blurb: "For a single-location business",
    price: "$399",
    period: "/ month",
    cta: "Choose Starter",
    featured: false,
    features: [
      "1 location, 1 AI agent",
      "500 AI minutes / month",
      "Bookings, orders and FAQs",
      "Human handover and SMS confirmations",
      "Call logs, recordings and transcripts",
    ],
  },
  {
    name: "Growth",
    blurb: "For growing teams with 2–3 locations",
    price: "$699",
    period: "/ month",
    cta: "Choose Growth",
    featured: true,
    features: [
      "Everything in Starter",
      "2–3 locations",
      "900 AI minutes / month",
      "Location-specific rules and hours",
      "One dashboard across locations",
    ],
  },
  {
    name: "Enterprise",
    blurb: "For groups, franchises and high call volume",
    price: "Custom",
    period: "",
    cta: "Talk to sales",
    featured: false,
    features: [
      "Custom locations, agents and minutes",
      "Custom workflows and integrations",
      "Multi-location management",
      "Dedicated account manager",
    ],
  },
];

export const faqs = [
  {
    q: "Does it work with my existing phone number?",
    a: "Yes. You keep your number and forward calls to your BellReserve agent, all the time or only when your team can’t pick up. We set up the forwarding with you.",
  },
  {
    q: "What do I need to do to get started?",
    a: "Very little. Book a demo, fill in a short intake form and join one call. Our team builds, trains and tests your agent, connects your calendar, and you approve it before it goes live.",
  },
  {
    q: "How long until my agent is live?",
    a: "Most businesses are live within days of the intake call, once you’ve approved the test calls.",
  },
  {
    q: "What if a caller wants to speak to a person?",
    a: "The agent transfers them right away, or takes a detailed message if no one is free. Emergencies and complaints follow the escalation rules you set.",
  },
  {
    q: "Will it sound like a robot?",
    a: "No. It uses a natural, human-like voice, handles interruptions, and speaks in the tone you choose. If a caller asks, it confirms it’s an AI assistant for your business.",
  },
  {
    q: "Which businesses is it built for?",
    a: "Restaurants, HVAC and home services, dental clinics, real estate and general front desks today. If your business runs on the phone, book a demo and we’ll tell you honestly if it’s a fit.",
  },
  {
    q: "Is there a long-term contract?",
    a: "Packages are monthly, with a one-time setup fee that covers our done-for-you build. [CONFIRM CONTRACT TERMS]",
  },
];

export const testimonials = [
  {
    quote: "Our missed call rate went from 32% to nearly zero. It just picks up and handles it.",
    name: "Maria Santos",
    role: "Owner, Harbor Grille · Newport Beach",
    initials: "MS",
  },
  {
    quote: "BellReserve handles 94% of our 600+ weekly calls without anyone touching the phone.",
    name: "James Wu",
    role: "General Manager, Salt & Stone · Chicago",
    initials: "JW",
  },
  {
    quote: "More captured orders, fewer missed calls, and my team finally focuses on the guests in front of them.",
    name: "Alex Morgan",
    role: "Owner, The Oak Table · Austin",
    initials: "AM",
  },
];
