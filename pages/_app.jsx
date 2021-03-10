import { createGlobalStyle } from "styled-components";
import GlobalStyle from "../theme/GlobalStyles";
import { ThemeModeProvider } from "next-theme-mode";
import { Theme } from "../theme/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeModeProvider customThemes={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeModeProvider>
    </>
  );
}

export default MyApp;
