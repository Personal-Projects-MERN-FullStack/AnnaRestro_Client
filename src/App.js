import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// Instantiate QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    // Provide QueryClient instance to QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppRoutes />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
