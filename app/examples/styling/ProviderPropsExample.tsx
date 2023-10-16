import { MantineProvider } from '@mantine/core';
import { ContextMenuProvider } from '__PACKAGE__';
import classes from './ProviderPropsExample.module.css';

export default function ProviderPropsExample({ children }: React.PropsWithChildren) {
  return (
    <MantineProvider>
      <ContextMenuProvider
        classNames={{
          root: classes.contextMenuRoot,
          item: classes.contextMenuItem,
        }}
      >
        {children}
      </ContextMenuProvider>
    </MantineProvider>
  );
}
