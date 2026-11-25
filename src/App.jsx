import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/App.routes.jsx";

/** Main composition point: the router and the route table. */
const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
