import { Box, createStyles, type Sx } from '@mantine/core';
import type { CSSProperties } from 'react';

const useStyles = createStyles((theme) => ({
  root: {
    height: 1,
    background: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
  },
}));

type ContextMenuDividerProps = {
  className: string;
  sx: Sx | (Sx | undefined)[] | undefined;
  style: CSSProperties;
};

export default function ContextMenuDivider({ className, sx, style }: ContextMenuDividerProps) {
  const { cx, classes } = useStyles();
  return <Box className={cx(classes.root, className)} sx={sx} style={style} />;
}
