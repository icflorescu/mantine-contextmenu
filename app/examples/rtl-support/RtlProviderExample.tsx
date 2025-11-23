'use client';

import { DirectionProvider, Group, Paper, Switch, Text } from '@mantine/core';
import { ContextMenuProvider } from '__PACKAGE__';
import { useState } from 'react';

export function RtlProviderExample({ children }: { children: React.ReactNode }) {
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr');

  return (
    <>
      <Paper p="md" mb="md" withBorder>
        <Group justify="space-between" align="center">
          <div>
            <Text fw={500} size="sm">
              Direction: {direction.toUpperCase()}
            </Text>
            <Text size="xs" c="dimmed">
              Toggle to test RTL support
            </Text>
          </div>
          <Switch
            checked={direction === 'rtl'}
            onChange={(event) => setDirection(event.currentTarget.checked ? 'rtl' : 'ltr')}
            label="RTL Mode"
            size="md"
          />
        </Group>
      </Paper>

      <DirectionProvider key={direction} initialDirection={direction}>
        <ContextMenuProvider repositionOnRepeat>
          <div style={{ direction }}>{children}</div>
        </ContextMenuProvider>
      </DirectionProvider>
    </>
  );
}
