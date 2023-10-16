import { MantineProvider } from '@mantine/core';
import { ContextMenuProvider } from '__PACKAGE__';

import '@mantine/core/styles.layer.css';
import '__PACKAGE__/styles.layer.css';
import './layout.css';

export default function ProviderPropsExample({ children }: { children: React.ReactNode }) {
  // example-start
  return (
    <MantineProvider>
      <ContextMenuProvider zIndex={1000} shadow="md" borderRadius="md">
        {children}
      </ContextMenuProvider>
    </MantineProvider>
  );
  // example-end
}
