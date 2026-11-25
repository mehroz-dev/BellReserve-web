import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Arrow } from "./icons.component.jsx";
import { industries } from "../utils/Industries.config.js";
import { classNames, padNumber } from "../utils/Helper.js";

const TOTAL_INDUSTRIES = industries.length;
const DRAG_THRESHOLD = 5;

/** Distance in pixels from one card to the next (card width plus the gap). */
const getCardStep = (track) => {
  const card = track?.querySelector("[data-card]");

  if (!track || !card) {
    return 0;
  }

  return card.offsetWidth + parseFloat(getComputedStyle(track).columnGap || "0");
};

const IndustryCard = ({ industry, index }) => (
  <Link
    to={`/industries/${industry.slug}`}
    data-card
    draggable={false}
    aria-label={`${industry.label}: ${industry.tags.join(", ")}`}
    className="industry-card"
  >
    <img
      src={`${industry.photo}?w=720&h=1000&fit=crop&auto=format&q=70`}
      alt=""
      loading="lazy"
      draggable={false}
      className="industry-card__photo"
    />
    <div className="industry-card__overlay" />

    <div className="mono industry-card__top">
      <span className="industry-card__count">
        {padNumber(index + 1)} / {padNumber(TOTAL_INDUSTRIES)}
      </span>
      <span className="industry-card__badge">
        <span className="live-dot" />
        Live call
      </span>
    </div>

    <div className="industry-card__bottom">
      <h3 className="industry-card__title">{industry.label}</h3>
      <ul className="industry-card__tags">
        {industry.tags.map((tag, tagIndex) => (
          <li key={tag} className={classNames("industry-card__tag", tagIndex === 0 && "industry-card__tag--primary")}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  </Link>
);

/** Horizontal, draggable carousel of industry photo cards with arrows and a progress bar. */
const IndustryCarousel = ({ heading }) => {
  const trackRef = useRef(null);
  const dragRef = useRef({
    active: false,
    startX: 0,
    startLeft: 0,
    moved: false,
  });
  const [activeIndex, setActiveIndex] = useState(1);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updatePosition = useCallback(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const maxScroll = track.scrollWidth - track.clientWidth;
    const step = getCardStep(track) || 1;
    const reachedEnd = track.scrollLeft >= maxScroll - 4;

    setAtStart(track.scrollLeft <= 4);
    setAtEnd(reachedEnd);
    setActiveIndex(reachedEnd ? TOTAL_INDUSTRIES : Math.min(TOTAL_INDUSTRIES, Math.round(track.scrollLeft / step) + 1));
  }, []);

  useEffect(() => {
    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [updatePosition]);

  const scrollByCard = (direction) => {
    trackRef.current?.scrollBy({
      left: direction * getCardStep(trackRef.current),
      behavior: "smooth",
    });
  };

  const handlePointerDown = (event) => {
    if (event.pointerType !== "mouse" || !trackRef.current) {
      return;
    }

    dragRef.current = {
      active: true,
      startX: event.clientX,
      startLeft: trackRef.current.scrollLeft,
      moved: false,
    };
  };

  const handlePointerMove = (event) => {
    const drag = dragRef.current;
    const track = trackRef.current;

    if (!drag.active || !track) {
      return;
    }

    const distance = event.clientX - drag.startX;

    if (!drag.moved && Math.abs(distance) > DRAG_THRESHOLD) {
      drag.moved = true;
      track.setPointerCapture(event.pointerId);
      track.dataset.dragging = "true";
    }

    if (drag.moved) {
      track.scrollLeft = drag.startLeft - distance;
    }
  };

  const handlePointerEnd = () => {
    const track = trackRef.current;

    dragRef.current.active = false;

    if (!track?.dataset.dragging) {
      return;
    }

    delete track.dataset.dragging;

    // Settle on the nearest card once snapping is back on.
    const step = getCardStep(track);

    if (step) {
      track.scrollTo({
        left: Math.round(track.scrollLeft / step) * step,
        behavior: "smooth",
      });
    }
  };

  // A drag should not also count as a click on the card under the pointer.
  const handleClickCapture = (event) => {
    if (!dragRef.current.moved) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    dragRef.current.moved = false;
  };

  const progressWidth = `${(activeIndex / TOTAL_INDUSTRIES) * 100}%`;

  return (
    <div className="carousel">
      <div className="wrap carousel__head">
        <div className="carousel__title-group">
          <span className="eyebrow">Use cases</span>
          <h2 className="h2 carousel__title">{heading}</h2>
        </div>
        <div className="carousel__arrows">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            aria-label="Previous industry"
            aria-controls="industry-track"
            className="carousel__arrow"
          >
            <Arrow size={18} className="carousel__arrow-icon--previous" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            aria-label="Next industry"
            aria-controls="industry-track"
            className="carousel__arrow"
          >
            <Arrow size={18} />
          </button>
        </div>
      </div>

      <section
        id="industry-track"
        ref={trackRef}
        aria-roledescription="carousel"
        aria-label="Industries"
        onScroll={updatePosition}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onClickCapture={handleClickCapture}
        className="industry-track"
      >
        {industries.map((industry, index) => (
          <IndustryCard key={industry.slug} industry={industry} index={index} />
        ))}
      </section>

      <div className="wrap carousel__footer">
        <span className="mono carousel__hint">Drag or use arrows</span>
        <div className="carousel__progress" aria-hidden="true">
          <div
            className="carousel__progress-fill"
            style={{
              width: progressWidth,
            }}
          />
        </div>
        <span className="mono carousel__count" aria-live="polite">
          {padNumber(activeIndex)} / {padNumber(TOTAL_INDUSTRIES)}
        </span>
      </div>
    </div>
  );
};

/** Industries section: a dark band holding the carousel. */
export const IndustriesSection = () => (
  <section id="industries" data-theme="dark" className="sec dark-band">
    <IndustryCarousel
      heading={
        <>
          One receptionist.
          <br />
          Every kind of <span className="grad-text grad-text--italic">call.</span>
        </>
      }
    />
  </section>
);
