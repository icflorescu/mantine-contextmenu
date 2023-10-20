import { Box } from '@mantine/core';
import clsx from 'clsx';
import type { ContextMenuItemOptions } from './types';

export type ContextMenuDividerProps = Pick<ContextMenuItemOptions, 'className' | 'style'>;

export function ContextMenuDivider({ className, style }: ContextMenuDividerProps) {
  return <Box className={clsx('mantine-contextmenu-divider', className)} style={style} />;
}
