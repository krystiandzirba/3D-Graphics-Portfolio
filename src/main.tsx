import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./components/Styles/VideoContainersStack.css";
import "./components/Styles/Carousel.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
