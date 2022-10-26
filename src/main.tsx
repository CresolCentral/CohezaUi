import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ToastProvider } from "./context/Toast/ToastContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastProvider position="top-center" duration={10000}>
      <App />
    </ToastProvider>
  </React.StrictMode>
);
