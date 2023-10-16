import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ContextMenuProvider } from '__PACKAGE__';
import { Metadata } from 'next';
import { AppWrapper } from '~/components/AppWrapper';
import './layout.css';
import classes from './layout.module.css';

export const metadata: Metadata = {
  metadataBase: process.env.GITHUB_PAGES ? new URL('https://icflorescu.github.io') : undefined,
  title: 'Mantine ContextMenu: enhance your users’ experience',
  description:
    'Design your Mantine applications for productivity and meet your users’ expectations by enhancing your UIs with desktop-grade context menus',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider
          defaultColorScheme="auto"
          theme={{
            components: {
              Code: { classNames: { root: classes.codeFragment } },
              CodeHighlight: { classNames: { root: classes.codeBox } },
              CodeHighlightTabs: { classNames: { root: classes.codeBox } },
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
