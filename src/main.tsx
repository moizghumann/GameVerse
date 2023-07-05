import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './theme'
// QueryClient is a core object for managing and caching remote data in react query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import './index.css'
import ms from 'ms'
import { RouterProvider } from 'react-router'
import router from './routing/routes'


// new instance of QueryClient object
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,  //default -> try to refetch data from server 3 time if the first fetch fails
      cacheTime: 300_000,  // determines how long the data should be cached before it's considered expired and needs to be refetched (300_000 -> 5mins)
      staleTime: ms('4s'), //how long the data is considered fresh and will not trigger a refresh
      refetchOnWindowFocus: true, //controls whether the query should automatically refetch when the application window gains focus, false means it will not
      refetchOnReconnect: false,  //specifies whether the query should trigger a refetch when the app reconnects to the network
      refetchOnMount: false //option determines whether the query should be refetched automatically when component is initially mounted.
    }
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* go to webpage command line application -> local storage -> delete the chakra-ui-color-mode */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
)
