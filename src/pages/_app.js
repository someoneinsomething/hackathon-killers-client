import App from 'next/app';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider as ReduxProvider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import '../utils/navigation';
import '../utils/i18n';

import '../assets/css/main.css';

import initStore from '../utils/redux';
import { routing } from '../routes';
import { colors } from '../theme';
import { Header, RouteHandler } from '../containers';

const isDev = process.env.NODE_ENV === 'development';

const themeUi = {
  ...createMuiTheme({
    palette: {
      primary: {
        main: colors.primary,
        light: '#E0EBFF',
        dark: '#3f19a5',
        contrastText: '#fff',
      },
      secondary: {
        main: '#FF782D',
        light: '#ff9357',
        dark: '#b2541f',
        contrastText: '#fff',
      },
      text: {
        primary: colors.textPrimary,
        secondary: colors.textGray,
      },
    },
    typography: {
      fontFamily: ['"Segoe UI"', 'sans-serif'].join(','),
    },
  }),
};

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
  }

  // Fetching serialized(JSON) store state
  static async getInitialProps({ Component, ctx }) {
    await routing({ ...ctx });
    const pageProps = Component.getInitialProps ? await Component.getInitialProps({ ...ctx }) : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <ReduxProvider store={store}>
        <ThemeProvider theme={themeUi}>
          <RouteHandler />
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </ReduxProvider>
    );
  }
}

export default withRedux(initStore, { debug: false })(MyApp);
