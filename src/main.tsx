import { StrictMode, type ComponentType } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.scss";
import ErrorBoundary from "./components/global/ErrorBoundary/index.tsx";
import AppFallback from "./components/global/ErrorBoundary/AppFallback/index.tsx";
import type { FallbackProps } from "react-error-boundary";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary
      fallback={AppFallback as ComponentType<FallbackProps>}
      onReset={location.reload}
    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </StrictMode>
);
