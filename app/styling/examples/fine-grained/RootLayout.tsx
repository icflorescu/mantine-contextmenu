import { ContextMenuProvider } from '__PACKAGE__';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import './layout.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="auto">
          <ContextMenuProvider>{children}</ContextMenuProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
