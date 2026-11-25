import { SectionHead } from "./custom.components.jsx";
import { testimonials } from "../utils/Site.config.js";
import { classNames } from "../utils/Helper.js";

/**
 * Four copies of the list: the track moves left by half its width (two copies),
 * so the loop is seamless and the row is always wider than the screen.
 */
const COPIES = 4;

const QuoteMark = ({ featured }) => (
  <svg
    width="40"
    height="30"
    viewBox="0 0 36 28"
    fill={featured ? "#8DADFF" : "#2563FF"}
    aria-hidden="true"
    className="testimonial__quote-mark"
  >
    <path d="M0 28V16C0 7 5 1 14 0l1 5c-5 1-8 4-8 9h7v14zm21 0V16c0-9 5-15 14-16l1 5c-5 1-8 4-8 9h7v14z" />
  </svg>
);

const Testimonial = ({ testimonial, index }) => {
  const featured = index === 0;
  const avatarVariant = index === 1 ? "testimonial__avatar--contrast" : "testimonial__avatar--brand";

  return (
    <figure className={classNames("testimonial", featured ? "deep testimonial--featured" : "card")}>
      {featured ? <div className="testimonial__shine" /> : null}
      <QuoteMark featured={featured} />
      <blockquote className="testimonial__quote">{testimonial.quote}</blockquote>
      <figcaption className="testimonial__author">
        <span className={`testimonial__avatar ${avatarVariant}`}>{testimonial.initials}</span>
        <span className="testimonial__person">
          <span className="testimonial__name">{testimonial.name}</span>
          <span className="testimonial__role">{testimonial.role}</span>
        </span>
      </figcaption>
    </figure>
  );
};

/** "Customer stories": testimonials scrolling right to left. Hovering pauses the motion. */
export const Testimonials = () => {
  const copies = Array.from({ length: COPIES }, (_, copy) => copy);

  return (
    <section className="sec">
      <div className="wrap">
        <SectionHead
          eyebrow="Customer stories"
          title={
            <>
              Owners who stopped <span className="grad-text">worrying about the phone.</span>
            </>
          }
        />
      </div>

      <div className="testimonials__viewport">
        <div className="marquee testimonials__track">
          {copies.map((copy) =>
            testimonials.map((testimonial, index) => (
              <div key={`${copy}-${testimonial.name}`} className="testimonials__item" aria-hidden={copy > 0 ? true : undefined}>
                <Testimonial testimonial={testimonial} index={index} />
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
};
