// The styles are imported in the following order:
// 1. Core Mantine styles
import '@mantine/core/styles.layer.css';
// 2. Code-highlighting styles
import '@mantine/code-highlight/styles.layer.css';
// 3. Notifications styles
import '@mantine/notifications/styles.layer.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ContextMenuProvider } from 'mantine-contextmenu';
import { Metadata } from 'next';
import { AppWrapper } from '~/components/AppWrapper';
import classes from './layout.module.css';

export const metadata: Metadata = {
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
              CodeHighlight: { classNames: { root: classes.codeHighlightRoot, copy: classes.codeHighlightCopy } },
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
