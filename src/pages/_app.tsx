import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { ThemeProvider as MaterialUIThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "styles/theme";
import { createGlobalStyle } from "styled-components";
import * as colorCodes from "constants/colorCodes";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${colorCodes.BLACK};
    font-family: "Pathway Gothic One", Helvetica Neue, Helvetica, Arial,
      sans-serif;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const jssStyles: Element | null =
      document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <StylesProvider injectFirst>
      <MaterialUIThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          <Component {...pageProps} />
        </StyledComponentsThemeProvider>
      </MaterialUIThemeProvider>
    </StylesProvider>
  );
};

export default MyApp;
