import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/styles/__mixStyle.css";
import { BrowserRouter } from "react-router-dom";
import MesRoutes from "./config/MesRoutes";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MesRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
