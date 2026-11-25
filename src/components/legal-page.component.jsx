import "../assets/styles/Legal.css";

/** Shared layout for the Privacy Policy and Terms of Use pages. */
export const LegalPage = ({ title, updated, children }) => (
  <section className="sec legal-page">
    <div className="glow legal-page__glow" />
    <div className="wrap legal-page__inner">
      <span className="eyebrow">Legal</span>
      <h1 className="h2 legal-page__title">{title}</h1>
      <p className="mono legal-page__updated">Last updated: {updated}</p>
      <div role="note" className="legal-page__notice">
        Draft placeholder. Replace with text reviewed by your legal counsel before launch.
      </div>
      <div className="legal-prose">{children}</div>
    </div>
  </section>
);
