import { createTheme, MantineProvider } from '@mantine/core';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Home } from "./pages/Home";


export function App() {
  const queryClient = new QueryClient()

  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  return (
    <div>
       <QueryClientProvider client={queryClient}>
       <MantineProvider theme={theme}>
      <Home />
      </MantineProvider>
      </QueryClientProvider>
    </div>
  )
}