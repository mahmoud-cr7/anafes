import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function Main() {
  const queryClient = new QueryClient(); 
  return (
      <QueryClientProvider client={queryClient }>
        <App />
      </QueryClientProvider>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<Main />);
}
