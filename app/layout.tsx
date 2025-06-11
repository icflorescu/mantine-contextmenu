import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ContextMenuProvider } from '__PACKAGE__';
import type { Metadata, Viewport } from 'next';
import type { PropsWithChildren } from 'react';
import { AppWrapper } from '~/components/AppWrapper';
import { ShikiCodeHighlightProvider } from '~/components/ShikiCodeHighlightProvider';
import { AUTHOR_LINK, AUTHOR_NAME, WEB_ROOT, WEBSITE_LINK } from './config';
import './layout.css';
import classes from './layout.module.css';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#1a1b1e' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.GITHUB_PAGES === 'TRUE' ? WEB_ROOT : 'http://localhost:3000'),
  manifest: `${process.env.GITHUB_PAGES === 'TRUE' ? WEBSITE_LINK : ''}/manifest.webmanifest`,
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_LINK }],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider
          defaultColorScheme="auto"
          theme={{
            components: {
              Button: { classNames: { label: classes.buttonLabel } },
              Code: { classNames: { root: classes.codeRoot } },
              CodeHighlight: { classNames: { root: classes.codeBlockBox } },
              CodeHighlightTabs: { classNames: { root: classes.codeBlockBox } },
            },
          }}
        >
          <ShikiCodeHighlightProvider>
            <Notifications />
            <ContextMenuProvider>
              <AppWrapper>{children}</AppWrapper>
            </ContextMenuProvider>
          </ShikiCodeHighlightProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
