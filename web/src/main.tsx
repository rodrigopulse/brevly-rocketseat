import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import { ThemeProvider } from 'styled-components'
import './styles/fonts.css'
import theme from './styles/theme'
import ResetStyles from './styles/resets'

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <ResetStyles />
        <App />
      </ThemeProvider>
    </StrictMode>,
  )
} else {
  console.error('Root element not found')
}
