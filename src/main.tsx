import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './theme'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* go to webpage command line application -> local storage -> delete the chakra-ui-color-mode */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
