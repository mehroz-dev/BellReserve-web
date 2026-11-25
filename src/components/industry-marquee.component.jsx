const MARQUEE_ITEMS = [
  "Restaurants",
  "HVAC",
  "Dental clinics",
  "Real estate",
  "Front desks",
  "Home services",
  "Cloud kitchens",
  "Salons",
];

/** Endless scrolling strip of the industries we serve, under the hero. */
export const IndustryMarquee = () => {
  const loopedItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section aria-label="Industries we serve" className="industry-marquee">
      <div className="industry-marquee__mask">
        <div className="marquee" aria-hidden="true">
          {loopedItems.map((item, index) => (
            <span key={`${item}-${index}`} className="industry-marquee__item">
              <span className="industry-marquee__dot" />
              {item}
            </span>
          ))}
        </div>
        <p className="sr-only">BellReserve serves {MARQUEE_ITEMS.join(", ")}.</p>
      </div>
    </section>
  );
};
