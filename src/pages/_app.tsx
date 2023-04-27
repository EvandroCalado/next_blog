import { theme } from '../styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
