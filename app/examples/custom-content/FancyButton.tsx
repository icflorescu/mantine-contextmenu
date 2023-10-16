import { Box, Text } from '@mantine/core';
import classes from './FancyButton.module.css';

export type FancyButtonProps = {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
};

export function FancyButton({ icon, text, onClick }: FancyButtonProps) {
  return (
    <Box className={classes.root} component="button" onClick={onClick}>
      {icon}
      <Text size="xs">{text}</Text>
    </Box>
  );
}
