import { MantineProvider } from '@mantine/core';
import { ContextMenuProvider } from 'mantine-contextmenu';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // example-start
    <MantineProvider>
      <ContextMenuProvider zIndex={1000} shadow="md" borderRadius="md">
        <Component {...pageProps} />
      </ContextMenuProvider>
    </MantineProvider>
    // example-end
  );
}
