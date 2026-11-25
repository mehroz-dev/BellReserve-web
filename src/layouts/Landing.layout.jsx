import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer.components.jsx";
import { Header } from "../components/header.components.jsx";
import { VectorDefs } from "../components/vectors.component.jsx";
import { useScrollToHash } from "../hooks/useScrollToHash.hook.js";

/** Shared shell for every public page: skip link, header, page content and footer. */
const LandingLayout = () => {
  useScrollToHash();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <VectorDefs />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LandingLayout;
