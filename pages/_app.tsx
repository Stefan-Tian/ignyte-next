import type { AppProps } from 'next/app';
import { Provider } from 'reakit';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import { wrapper } from 'app/store';
import { ToastGroup } from 'components/Toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
        <ToastGroup />
      </ThemeProvider>
    </Provider>
  );
}
export default wrapper.withRedux(MyApp);
