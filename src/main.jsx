import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../src/App/App";
import "../src/style/index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
