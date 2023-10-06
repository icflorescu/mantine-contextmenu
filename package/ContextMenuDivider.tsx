import { Box } from '@mantine/core';
import clsx from 'clsx';
import classes from './ContextMenuDivider.module.css';

export type ContextMenuDividerProps = {
  className: string;
  style: React.CSSProperties;
};

export function ContextMenuDivider({ className, style }: ContextMenuDividerProps) {
  return <Box className={clsx(classes.root, className)} style={style} />;
}
