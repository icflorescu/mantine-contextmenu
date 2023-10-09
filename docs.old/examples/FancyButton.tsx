import { Box, Text, createStyles } from '@mantine/core';
import type { ReactNode } from 'react';

const useStyles = createStyles((theme) => {
  const border = `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]}`;
  return {
    root: {
      width: '50%',
      height: 60,
      padding: 0,
      borderRadius: 0,
      cursor: 'pointer',
      background: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      transition: 'background 0.25s ease',
      border: 0,
      '&:nth-child(2n)': { borderLeft: border },
      '&:nth-child(n+3)': { borderTop: border },
      '&:hover': {
        background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.fn.rgba(theme.black, 0.1),
      },
    },
  };
});

export type FancyButtonProps = {
  icon: ReactNode;
  text: string;
  onClick: () => void;
};

export default function FancyButton({ icon, text, onClick }: FancyButtonProps) {
  const { classes } = useStyles();
  return (
    <Box className={classes.root} component="button" onClick={onClick}>
      {icon}
      <Text size="xs">{text}</Text>
    </Box>
  );
}
