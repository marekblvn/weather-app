import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./utils/theme.ts";
import "./main.css";
import { LsiProvider } from "./contexts/LsiContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <LsiProvider>
        <App />
      </LsiProvider>
    </ThemeProvider>
  </StrictMode>
);
