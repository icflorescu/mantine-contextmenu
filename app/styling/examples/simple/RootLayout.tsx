import { ContextMenuProvider } from '__PACKAGE__';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

// 👇 Import the mantine-core layer CSS file;
//    this will automatically place it in a `mantine` layer
import '@mantine/core/styles.layer.css';

// 👇 Import the mantine-contextmenu layer CSS file;
//    this will automatically place it in a `mantine-contextmenu` layer
import '__PACKAGE__/styles.layer.css';

// 👇 Import your own CSS file;
//    make sure to specify the layers order with the `@layer` directive
//    inside that file
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
