import { Link } from "react-router-dom";
import { Arrow, Check, Play } from "./icons.component.jsx";
import { Cube } from "./vectors.component.jsx";
import "../assets/styles/industry-panel.css";

const TranscriptLine = ({ line }) => (
  <div className={line.agent ? "transcript-line transcript-line--agent" : "transcript-line transcript-line--caller"}>
    <span className="mono transcript-line__speaker">{line.agent ? "BellReserve agent" : "Caller"}</span>
    <div className="transcript-line__bubble">{line.text}</div>
  </div>
);

/** White capability card and live-transcript card for one industry. */
export const IndustryPanel = ({ industry, showLink = true }) => (
  <div className="industry-panel">
    <div className="industry-panel__card">
      <Cube size={170} className="industry-panel__cube" />
      <span className="mono industry-panel__kicker">{industry.kicker}</span>
      <h3 className="industry-panel__headline">{industry.headline}</h3>
      <p className="industry-panel__body">{industry.body}</p>

      <div className="industry-panel__handles">
        {industry.handles.map((handle) => (
          <div key={handle} className="industry-panel__handle">
            <Check size={16} className="industry-panel__handle-icon" />
            {handle}
          </div>
        ))}
      </div>

      <div className="industry-panel__footer">
        <button
          type="button"
          className="btn btn-dark"
          aria-label={`Play ${industry.label} sample call (recording coming soon)`}
        >
          <Play size={14} />
          Play sample call
        </button>
        <span className="industry-panel__duration">{industry.duration}</span>
        {showLink ? (
          <Link to={`/industries/${industry.slug}`} className="industry-panel__link">
            {industry.label} page
            <Arrow size={16} />
          </Link>
        ) : null}
      </div>
    </div>

    <div className="deep-glass industry-transcript">
      <div className="industry-transcript__shine" />
      <div className="mono industry-transcript__head">
        <span>Live transcript</span>
        <span className="industry-transcript__time">
          <span className="live industry-transcript__dot" />
          {industry.callTime}
        </span>
      </div>

      {industry.lines.map((line) => (
        <TranscriptLine key={line.text} line={line} />
      ))}

      <div className="industry-transcript__outcome">
        <span className="industry-transcript__outcome-icon">
          <Check size={20} />
        </span>
        <div className="industry-transcript__outcome-text">
          <span className="industry-transcript__outcome-title">{industry.outcome}</span>
          <span className="industry-transcript__outcome-subtitle">{industry.outcomeSub}</span>
        </div>
      </div>
    </div>
  </div>
);
