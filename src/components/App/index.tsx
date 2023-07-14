import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from '../../pages/Router'

import { GlobalStyles } from '../../styles/global'
import { defaultTheme } from '../../styles/theme/default'
import { CyclesContextProvider } from '../../contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
