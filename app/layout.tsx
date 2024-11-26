import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ContextMenuProvider } from '__PACKAGE__';
import type { Metadata, Viewport } from 'next';
import { AppWrapper } from '~/components/AppWrapper';
import { AUTHOR_LINK, AUTHOR_NAME, WEBSITE_LINK } from './config';
import './layout.css';
import classes from './layout.module.css';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#1a1b1e' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.GITHUB_PAGES === 'TRUE' ? 'https://icflorescu.github.io' : 'http://localhost:3000'),
  manifest: `${process.env.GITHUB_PAGES === 'TRUE' ? WEBSITE_LINK : ''}/manifest.webmanifest`,
  authors: [{ name: AUTHOR_NAME, url: AUTHOR_LINK }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
          <Notifications />
          <ContextMenuProvider>
            <AppWrapper>{children}</AppWrapper>
          </ContextMenuProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
