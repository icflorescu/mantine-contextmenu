import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { Notifications } from '@mantine/notifications';
import { ContextMenuProvider } from 'mantine-contextmenu';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import { useEffect } from 'react';
import AppWrapper from '~/components/AppWrapper';
import { SEO_DEFAULT_DESCRIPTION, SEO_DEFAULT_TITLE } from '~/config';
import { logPageView } from '~/lib/analytics';

export default function _App(props: AppProps) {
  const { Component, pageProps } = props;

  useEffect(() => {
    logPageView();

    Router.events.on('routeChangeComplete', logPageView);

    return () => {
      Router.events.off('routeChangeComplete', logPageView);
    };
  }, []);

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <>
      <Head>
        <title>{SEO_DEFAULT_TITLE}</title>
        <meta property="og:title" content={SEO_DEFAULT_TITLE} />
        <meta name="twitter:title" content={SEO_DEFAULT_TITLE} />
        <meta name="description" content={SEO_DEFAULT_DESCRIPTION} />
        <meta property="og:description" content={SEO_DEFAULT_DESCRIPTION} />
        <meta name="twitter:description" content={SEO_DEFAULT_DESCRIPTION} />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            components: {
              Code: {
                styles: (theme) => ({
                  root: {
                    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
                  },
                }),
              },
              Prism: {
                styles: (theme) => ({
                  root: {
                    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
                    '&&': { borderRadius: 0 },
                  },
                }),
              },
            },
          }}
        >
          <Notifications />
          <AppWrapper>
            <ContextMenuProvider>
              <Component {...pageProps} />
            </ContextMenuProvider>
          </AppWrapper>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
