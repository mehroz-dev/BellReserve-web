import { Route, Routes } from "react-router-dom";
import LandingLayout from "../layouts/Landing.layout.jsx";
import BookDemo from "../pages/BookDemo.jsx";
import Home from "../pages/Home.jsx";
import Industries from "../pages/Industries.jsx";
import IndustryDetail from "../pages/IndustryDetail.jsx";
import NotFound from "../pages/NotFound.jsx";
import Privacy from "../pages/Privacy.jsx";
import Terms from "../pages/Terms.jsx";

/**
 * All routes are public: this is a marketing site with no login, so there are no protected routes.
 * Unknown URLs fall back to the 404 page.
 */
const AppRoutes = () => (
  <Routes>
    <Route element={<LandingLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/industries/:slug" element={<IndustryDetail />} />
      <Route path="/book-demo" element={<BookDemo />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default AppRoutes;
