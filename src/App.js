import React from 'react';

import { ThemeProvider, createGlobalStyle } from 'styled-components'


import AppRouter from './config/router'
import theme from './config/theme'

function App() {
  return(
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AppRouter></AppRouter>
  </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
* {
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
    font-family: Roboto, sans-serif;
  }
`

export default App;
