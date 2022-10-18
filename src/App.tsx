/* eslint-disable import/no-unresolved */
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Main } from "./components/Main/Main";
import { Nav } from "./components/Nav/Nav";

export const App = () => {
  const queryClient = new QueryClient();

  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <QueryClientProvider client={queryClient}>
      <div className={theme}>
        <Nav setTheme={setTheme} theme={theme} />
        <Main />
      </div>
    </QueryClientProvider>
  );
};
