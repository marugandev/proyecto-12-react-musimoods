import "./index.css";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { MoodProvider } from "./contexts/moodContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MoodProvider>
        <App />
      </MoodProvider>
    </BrowserRouter>
  </StrictMode>
);
