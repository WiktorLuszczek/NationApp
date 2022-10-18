import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line import/no-unresolved
import { App } from "./App";
import "./index.css";

// eslint-disable-next-line no-undef
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
