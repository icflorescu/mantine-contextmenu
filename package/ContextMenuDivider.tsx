'use client';

import { Box, useMantineTheme } from '@mantine/core';
import { ContextMenuItemOptions } from './types';
import { cs } from './utils';

export type ContextMenuDividerProps = Pick<ContextMenuItemOptions, 'className' | 'style'>;

export function ContextMenuDivider({ className, style }: ContextMenuDividerProps) {
  const theme = useMantineTheme();
  return (
    <Box className={cs('mantine-cm-divider', className)} style={typeof style === 'function' ? style(theme) : style} />
  );
}
