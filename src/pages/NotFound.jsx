import { Link } from "react-router-dom";
import { Cube } from "../components/vectors.component.jsx";
import { useDocumentMeta } from "../hooks/useDocumentMeta.hook.js";
import "../assets/styles/NotFound.css";

const NotFound = () => {
  useDocumentMeta({
    title: "Page not found",
  });

  return (
    <section className="sec not-found">
      <div className="glow not-found__glow" />
      <div className="wrap not-found__inner">
        <Cube size={130} className="fl" />
        <span className="eyebrow eyebrow--center">404</span>
        <h1 className="h2">This line isn&apos;t connected.</h1>
        <p className="lead not-found__text">The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to a number that answers.</p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn-primary">
            Go home
          </Link>
          <Link to="/book-demo" className="btn btn-ghost">
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
