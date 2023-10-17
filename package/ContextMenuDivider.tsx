'use client';

import { Box, useMantineTheme } from '@mantine/core';
import clsx from 'clsx';
import type { ContextMenuItemOptions } from './types';

export type ContextMenuDividerProps = Pick<ContextMenuItemOptions, 'className' | 'style'>;

export function ContextMenuDivider({ className, style }: ContextMenuDividerProps) {
  const theme = useMantineTheme();
  return (
    <Box
      className={clsx('mantine-contextmenu-divider', className)}
      style={typeof style === 'function' ? style(theme) : style}
    />
  );
}
