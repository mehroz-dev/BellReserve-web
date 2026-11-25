/**
 * Everything shown on the industry carousel and the industry pages.
 *
 * Each industry has: slug, labels, a card photo (Unsplash) with tags,
 * the sample call transcript, and the content of its own page.
 */
export const industries = [
  {
    slug: "restaurants",
    label: "Restaurants",
    photo: "https://images.unsplash.com/photo-1779591211593-0d43f83540d6",
    tags: [
      "Reservations",
      "Orders",
      "Customer Support",
    ],
    navLabel: "Restaurants",
    kicker: "Restaurants · Cloud kitchens",
    headline: "Full tables and full order tickets, even mid-rush.",
    body: "Your agent takes reservations and pickup or delivery orders while your staff stays with the guests in front of them.",
    handles: [
      "Reservations and party sizes",
      "Pickup and delivery orders",
      "Hours, menu and location",
      "Large-party handover",
    ],
    duration: "1:12 sample call",
    callTime: "7:42 PM",
    lines: [
      {
        text: "Hi, can I get a table for six tonight around eight?",
        agent: false,
      },
      {
        text: "We have eight o’clock for six. Can I take a name for the reservation?",
        agent: true,
      },
      {
        text: "It’s Daniel. And do you have a vegan menu?",
        agent: false,
      },
      {
        text: "Yes, there are five vegan mains. You’re booked for 8 PM, Daniel. I’ll text you a confirmation.",
        agent: true,
      }
    ],
    outcome: "Table for 6 booked · 8:00 PM",
    outcomeSub: "Added to reservations · SMS sent",
    page: {
      title: "The AI phone host for busy restaurants.",
      intro: "Friday at 7 PM, the phone rings while your host seats a party of eight. With BellReserve, that call is answered on the first ring, the table is booked and the order is in, without anyone leaving the floor.",
      pains: [
        {
          title: "Calls ring out during the rush",
          body: "The busiest hours for calls are the busiest hours on the floor. Every unanswered ring is a table or order that goes elsewhere.",
        },
        {
          title: "Staff pulled off the floor",
          body: "Hosts and servers stop serving guests to answer the same questions about hours, parking and the menu.",
        },
        {
          title: "After-hours calls go to voicemail",
          body: "Tomorrow’s reservations get made tonight. Most callers won’t leave a message; they call the next place.",
        }
      ],
      capabilities: [
        {
          title: "Reservations",
          body: "Books, changes and cancels tables in real time, with party size, time and special requests confirmed back to the guest.",
        },
        {
          title: "Pickup and delivery orders",
          body: "Takes the full order, reads it back and sends it to your team so it’s in the kitchen before the guest hangs up.",
        },
        {
          title: "Menu and FAQ answers",
          body: "Hours, location, parking, dietary options and specials, answered from the information you give us.",
        },
        {
          title: "Large parties and events",
          body: "Captures the details and hands private dining or large-party requests straight to a manager.",
        }
      ],
      faqs: [
        {
          q: "Can it handle multiple locations?",
          a: "Yes. Each location gets its own hours, menu and rules, and you see every location in one dashboard.",
        },
        {
          q: "Where do orders go?",
          a: "To your team by text, email or dashboard, depending on how you work. Deeper POS connections are scoped during setup.",
        }
      ],
    }
  },
  {
    slug: "hvac",
    label: "HVAC",
    photo: "https://images.unsplash.com/photo-1792799888905-8696bd32a11a",
    tags: [
      "Scheduling",
      "Emergency Calls",
      "Dispatch",
    ],
    navLabel: "HVAC & home services",
    kicker: "HVAC · Home services",
    headline: "Every emergency call answered. Every job booked.",
    body: "When the AC dies at midnight, the first company that answers wins the job. Make sure it’s you.",
    handles: [
      "Service and repair bookings",
      "Emergency triage to on-call tech",
      "Quote and estimate requests",
      "Maintenance plan renewals",
    ],
    duration: "1:34 sample call",
    callTime: "11:52 PM",
    lines: [
      {
        text: "My AC stopped working and it’s really hot in here.",
        agent: false,
      },
      {
        text: "I’m sorry about that. Is anyone at home elderly, very young or unwell?",
        agent: true,
      },
      {
        text: "Yes, my mother is 82.",
        agent: false,
      },
      {
        text: "I’m connecting you to our on-call technician right now. Please stay on the line.",
        agent: true,
      }
    ],
    outcome: "Emergency escalated to on-call tech",
    outcomeSub: "Job created · Address captured",
    page: {
      title: "The AI dispatcher that never misses a job.",
      intro: "Homeowners with a broken AC or furnace call until someone answers. BellReserve answers first, every time, triages the urgency and books the job, day or night.",
      pains: [
        {
          title: "Techs can’t answer from a job site",
          body: "Your team is on ladders and in crawl spaces. Calls go unanswered and the job goes to a competitor.",
        },
        {
          title: "Emergencies come at night",
          body: "The highest-value calls arrive after hours, when nobody is at the desk to take them.",
        },
        {
          title: "Seasonal spikes overwhelm the office",
          body: "The first heatwave or cold snap brings more calls than any office can handle.",
        }
      ],
      capabilities: [
        {
          title: "Service bookings",
          body: "Captures the issue, address and access details, and books a visit into your schedule.",
        },
        {
          title: "Emergency triage",
          body: "Asks the questions you set, then transfers true emergencies to your on-call tech immediately.",
        },
        {
          title: "Quotes and estimates",
          body: "Collects the job details your estimator needs and books the visit or callback.",
        },
        {
          title: "Maintenance plans",
          body: "Handles renewals and seasonal tune-up bookings without tying up your office.",
        }
      ],
      faqs: [
        {
          q: "Who decides what counts as an emergency?",
          a: "You do. During setup we write your triage rules, and the agent follows them on every call.",
        },
        {
          q: "Can it book into my scheduling software?",
          a: "We connect calendars during setup. Field-service software connections are scoped case by case.",
        }
      ],
    }
  },
  {
    slug: "dental",
    label: "Dental",
    photo: "https://images.unsplash.com/photo-1588776814546-daab30f310ce",
    tags: [
      "Appointments",
      "New Patients",
      "Reminders",
    ],
    navLabel: "Dental clinics",
    kicker: "Dental clinics",
    headline: "New patients booked before they call the next clinic.",
    body: "Your agent books cleanings and consultations, answers common questions and sends reminders, so your front desk can focus on patients in the chair.",
    handles: [
      "New-patient bookings",
      "Reschedules and cancellations",
      "Insurance and pricing questions",
      "Reminders by text",
    ],
    duration: "1:05 sample call",
    callTime: "8:15 AM",
    lines: [
      {
        text: "Hi, I’m new to the area and need a cleaning.",
        agent: false,
      },
      {
        text: "Welcome! I have Tuesday at 9 AM or Thursday at 3 PM. Which works better?",
        agent: true,
      },
      {
        text: "Thursday, please. Is my insurance accepted?",
        agent: false,
      },
      {
        text: "I’ve noted your plan for the team to verify. You’re booked for Thursday at 3 PM, and I’ve texted you the new-patient form.",
        agent: true,
      }
    ],
    outcome: "New patient booked · Thu 3:00 PM",
    outcomeSub: "Intake form sent by SMS",
    page: {
      title: "The AI front desk for growing dental practices.",
      intro: "A new patient who reaches voicemail books with the next clinic on their list. BellReserve answers every call, books the visit and sends the intake form, while your team looks after the patients in the chair.",
      pains: [
        {
          title: "Front desk juggling phones and patients",
          body: "Check-ins, payments and calls all land on the same people at the same time.",
        },
        {
          title: "New patients don’t leave voicemails",
          body: "They’re calling around. The first clinic to answer gets the booking.",
        },
        {
          title: "No-shows and reschedules eat the day",
          body: "Rescheduling calls pile up and empty chairs cost money.",
        }
      ],
      capabilities: [
        {
          title: "New-patient bookings",
          body: "Finds a slot, books it and texts the intake form before the call ends.",
        },
        {
          title: "Reschedules and cancellations",
          body: "Moves appointments and fills the gap without staff time.",
        },
        {
          title: "Common questions",
          body: "Hours, location, services and what to bring, answered from your information. Insurance is noted for your team to verify.",
        },
        {
          title: "Reminders",
          body: "Text reminders that cut no-shows and confirm the visit.",
        }
      ],
      faqs: [
        {
          q: "Does it give medical advice?",
          a: "No. It never gives clinical advice. Pain or urgent symptoms are routed to your team by the rules you set.",
        },
        {
          q: "How is patient information handled?",
          a: "Patient details are used only to serve your callers. [CONFIRM HIPAA / DATA-HANDLING TERMS BEFORE LAUNCH]",
        }
      ],
    }
  },
  {
    slug: "real-estate",
    label: "Real Estate",
    photo: "https://images.unsplash.com/photo-1772987438485-ac832640c8a5",
    tags: [
      "Lead Capture",
      "Property Viewings",
      "Follow-ups",
    ],
    navLabel: "Real estate",
    kicker: "Agents · Brokerages",
    headline: "Every buyer lead captured while it’s still hot.",
    body: "Your agent answers listing calls, qualifies buyers and books viewings, even when you’re showing another property.",
    handles: [
      "Buyer and seller leads",
      "Viewing bookings",
      "Listing details",
      "Handoff to the right agent",
    ],
    duration: "1:21 sample call",
    callTime: "6:30 PM",
    lines: [
      {
        text: "I saw the three-bedroom on Oak Street. Is it still available?",
        agent: false,
      },
      {
        text: "It is. Are you looking to buy soon, and are you pre-approved?",
        agent: true,
      },
      {
        text: "Yes, within two months. Pre-approved.",
        agent: false,
      },
      {
        text: "Great. I can book a viewing Saturday at 11 AM with Sarah, the listing agent.",
        agent: true,
      }
    ],
    outcome: "Qualified lead · Viewing Sat 11:00 AM",
    outcomeSub: "Sent to listing agent and CRM",
    page: {
      title: "The AI assistant that never lets a lead go cold.",
      intro: "Buyers call about a listing while you’re at a showing, driving or asleep. BellReserve answers every one, qualifies the lead and books the viewing, so you only talk to people ready to move.",
      pains: [
        {
          title: "You can’t answer during showings",
          body: "The call you miss at 2 PM is the buyer who signs with someone else at 3.",
        },
        {
          title: "Leads go cold in minutes",
          body: "Speed to lead decides who wins the client. Voicemail is too slow.",
        },
        {
          title: "Time wasted on unqualified calls",
          body: "Not every caller is ready to buy. Sorting them eats your day.",
        }
      ],
      capabilities: [
        {
          title: "Lead capture",
          body: "Takes name, contact, budget, timeline and pre-approval status on every call.",
        },
        {
          title: "Viewing bookings",
          body: "Books showings into the right agent’s calendar and confirms by text.",
        },
        {
          title: "Listing questions",
          body: "Answers price, size and availability from the listing details you provide.",
        },
        {
          title: "Routing",
          body: "Sends each lead to the right agent and your CRM, with the full call summary.",
        }
      ],
      faqs: [
        {
          q: "Can it handle many listings?",
          a: "Yes. We load your active listings during setup and keep them updated with you.",
        },
        {
          q: "Does it work for teams?",
          a: "Yes. Leads are routed to the right agent by listing, area or your own rules.",
        }
      ],
    }
  },
  {
    slug: "front-desks",
    label: "Front Desks",
    photo: "https://images.unsplash.com/photo-1660557989695-14fac79c086d",
    tags: [
      "Call Routing",
      "Messages",
      "FAQs",
    ],
    navLabel: "Front desks",
    kicker: "Clinics · Salons · Offices",
    headline: "A front desk that answers, routes and schedules.",
    body: "For any business that lives on the phone: your agent greets callers, answers common questions and gets each call to the right place.",
    handles: [
      "Answering and routing",
      "Appointment scheduling",
      "Messages for the right person",
      "Hours and service FAQs",
    ],
    duration: "0:58 sample call",
    callTime: "12:20 PM",
    lines: [
      {
        text: "Hi, I need to speak to someone in billing.",
        agent: false,
      },
      {
        text: "Of course. May I have your name and what it’s about?",
        agent: true,
      },
      {
        text: "Priya Shah, a question on my last invoice.",
        agent: false,
      },
      {
        text: "Thanks, Priya. Transferring you to billing now.",
        agent: true,
      }
    ],
    outcome: "Routed to billing with context",
    outcomeSub: "Caller details logged",
    page: {
      title: "A receptionist for every business that runs on the phone.",
      intro: "Salons, clinics, agencies and offices all lose customers the same way: a call nobody answers. BellReserve greets every caller, handles the routine and routes the rest.",
      pains: [
        {
          title: "One person, too many calls",
          body: "Your receptionist can’t greet a visitor and answer three lines at once.",
        },
        {
          title: "Calls land with the wrong person",
          body: "Callers get bounced around, repeat themselves and hang up.",
        },
        {
          title: "Lunch breaks and after hours",
          body: "The phone doesn’t stop when your team does.",
        }
      ],
      capabilities: [
        {
          title: "Answering",
          body: "Greets every caller in your business’s name and tone.",
        },
        {
          title: "Routing",
          body: "Transfers calls to the right person or department, with context.",
        },
        {
          title: "Scheduling",
          body: "Books, moves and confirms appointments in your calendar.",
        },
        {
          title: "Messages",
          body: "Takes detailed messages and sends them to the right inbox.",
        }
      ],
      faqs: [
        {
          q: "Can I set different rules by time of day?",
          a: "Yes. Routing, hours and escalation can change by time of day and day of week.",
        },
        {
          q: "Does it replace my receptionist?",
          a: "It supports them. It handles the overflow and the routine so your team can focus on the people in front of them.",
        }
      ],
    }
  }
];

export const getIndustry = (slug) => {
  return industries.find((industry) => industry.slug === slug);
};

export const industrySlugs = industries.map((industry) => industry.slug);
