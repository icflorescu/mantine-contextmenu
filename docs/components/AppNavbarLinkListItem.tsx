import { Box, darken, lighten, MantineColor, rgba, Text, UnstyledButton, useMantineTheme } from '@mantine/core';
import clsx from 'clsx';
import Link from 'next/link';
import classes from './AppNavbarLinkListItem.module.css';

type AppNavbarLinkListItemProps = {
  title: string;
  description?: string;
  to: string;
  color?: MantineColor;
  active: boolean;
};

export default function AppNavbarLinkListItem({
  title,
  description,
  to,
  color = 'blue',
  active,
}: AppNavbarLinkListItemProps) {
  const { colors } = useMantineTheme();

  return (
    <UnstyledButton
      pl={19}
      py={8}
      style={{
        '--component-active-bg-color-light': rgba(colors[color][6], 0.1),
        '--component-active-bg-color-dark': rgba(colors[color][6], 0.2),
        '--component-active-hover-bg-color-light': rgba(darken(colors[color][6], 0.1), 0.15),
        '--component-active-hover-bg-color-dark': rgba(lighten(colors[color][6], 0.1), 0.2),
        '--component-active-pressed-bg-color-light': rgba(darken(colors[color][6], 0.3), 0.15),
        '--component-active-pressed-bg-color-dark': rgba(lighten(colors[color][6], 0.3), 0.2),
        '--component-bullet-color': colors[color][6],
      }}
      className={clsx(classes.root, { [classes.active]: active })}
      component={Link}
      href={to}
      aria-label={description}
    >
      <div className={classes.content}>
        <Box className={classes.bullet} />
        <Text className={classes.text} size="sm" fw={500}>
          {title}
        </Text>
      </div>
    </UnstyledButton>
  );
}
