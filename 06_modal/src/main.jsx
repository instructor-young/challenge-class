import { ScrollLockProvider } from "@yoojinyoung/usescrolllock";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ModalProvider } from "./contexts/modal.context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScrollLockProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ScrollLockProvider>
  </React.StrictMode>
);
