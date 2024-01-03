import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPages from "../pages/mainPages/MainPages";
import TestPage from "../pages/test/TestPage";
import PagesNotFound from "../pages/notFoundPage/PagesNotFound";
import PageInterdis from "../pages/unauthorizedPage/PageInterdis";
import DeppanagePage from "../pages/deppanagePage/DeppanagePage";
const MesRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path="/notFound" element={<PagesNotFound />} />
        <Route path="/interdis" element={<PageInterdis />} />
        <Route path="/deppanage" element={<DeppanagePage />} />
        <Route path="/" element={<MainPages />} />
        <Route path="/*" element={<PagesNotFound />} />
      </Routes>
    </>
  );
};

export default MesRoutes;
