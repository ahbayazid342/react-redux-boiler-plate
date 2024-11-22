import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import { PATHS } from "./path";

const Router = () => {
  return (
    <Routes>
      <Route path={PATHS.home} element={<HomePage />} />
      <Route path={PATHS.about} element={<AboutPage />} />
      <Route path={PATHS.contact} element={<ContactPage />} />
    </Routes>
  );
};

export default Router;
