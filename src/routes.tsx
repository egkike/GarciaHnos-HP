import { Route, Routes } from "react-router-dom";
import GarciaHnosHomePage from "./pages/GarciaHnosHomePage.tsx";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<GarciaHnosHomePage />} />
  </Routes>
);

export default AppRoutes;
