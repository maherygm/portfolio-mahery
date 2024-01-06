import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/__mixStyle.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MesRoutes from "./config/MesRoutes";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="ba-ckground-element">
        <MesRoutes />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
