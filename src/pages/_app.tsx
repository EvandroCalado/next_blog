import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/globalStyles';
import NextNProgress from 'nextjs-progressbar';
import BlogThemeProvider from '../context/BlogTheme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BlogThemeProvider>
      <NextNProgress color="#f2f0d8" />
      <Component {...pageProps} />
      <GlobalStyles />
    </BlogThemeProvider>
  );
}
