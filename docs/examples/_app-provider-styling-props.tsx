import { MantineProvider, createStyles } from '@mantine/core';
import { ContextMenuProvider } from 'mantine-contextmenu';
import { AppProps } from 'next/app';

const useStyles = createStyles((theme) => ({
  contextMenuRoot: {
    border: `1px solid ${theme.colors.red[6]}`,
  },
  contextMenuItem: {
    background: theme.colorScheme === 'dark' ? theme.colors.red[9] : theme.colors.red[2],
    '&&': {
      '&:hover': {
        background: theme.colorScheme === 'dark' ? theme.colors.red[8] : theme.colors.red[3],
      },
    },
  },
}));

export default function App({ Component, pageProps }: AppProps) {
  const { classes } = useStyles();
  return (
    <MantineProvider>
      <ContextMenuProvider
        classNames={{
          root: classes.contextMenuRoot,
          item: classes.contextMenuItem,
        }}
      >
        <Component {...pageProps} />
      </ContextMenuProvider>
    </MantineProvider>
  );
}
