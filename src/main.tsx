import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import "./index.scss";

// Create a client
const queryClient = new QueryClient();

async function bootstrap() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mocks/browser");
    worker.start();
  }

  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  );
}
bootstrap();
