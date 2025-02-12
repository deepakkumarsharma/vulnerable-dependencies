import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import DependencyContextProvider from "./context/DependencyContext/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DependencyContextProvider>
      <App />
    </DependencyContextProvider>
  </StrictMode>
);
