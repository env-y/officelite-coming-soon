import React from "react"
import { ThemeProvider } from "styled-components"

import theme from '../style/theme';
import GlobalStyle from '../style/global';

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </React.Fragment>
  )
}
