import {
  Group,
  MantineColor,
  Text,
  ThemeIcon,
  UnstyledButton,
  darken,
  lighten,
  rgba,
  useMantineTheme,
} from '@mantine/core';
import clsx from 'clsx';
import { FC, ForwardedRef, MouseEventHandler, forwardRef } from 'react';
import classes from './AppNavbarButton.module.css';

export type AppNavbarButtonDisplayProps = {
  color?: MantineColor;
  icon: FC<{ size?: string | number }>;
  title: string;
  description?: string;
};

type AppNavbarButtonProps = AppNavbarButtonDisplayProps & {
  rotateIcon?: boolean;
  active?: boolean;
  href?: string;
  externalLink?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default forwardRef(function AppNavbarButton(
  {
    color = 'blue',
    icon: Icon,
    title,
    description,
    href,
    externalLink,
    onClick,
    active,
    rotateIcon,
  }: AppNavbarButtonProps,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) {
  const { colors } = useMantineTheme();

  return (
    <UnstyledButton
      style={{
        '--active-bg-color-light': rgba(colors[color][6], 0.1),
        '--active-bg-color-dark': rgba(colors[color][6], 0.2),
        '--active-bg-hover-color-light': rgba(darken(colors[color][6], 0.1), 0.15),
        '--active-bg-hover-color-dark': rgba(lighten(colors[color][6], 0.1), 0.2),
        '--active-bg-pressed-color-light': rgba(darken(colors[color][6], 0.3), 0.15),
        '--active-bg-pressed-color-dark': rgba(lighten(colors[color][6], 0.3), 0.2),
      }}
      className={clsx(classes.root, { [classes.active]: active })}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={ref}
      component={href ? 'a' : 'button'}
      href={href}
      aria-label={description}
      target={externalLink ? '_blank' : undefined}
      onClick={onClick}
    >
      <Group px="sm" py="xs" gap="xs">
        <ThemeIcon className={clsx(classes.icon, { [classes.rotate]: rotateIcon })} size="md" radius="lg" color={color}>
          <Icon size={16} />
        </ThemeIcon>
        <Text size="sm" fw={500}>
          {title}
        </Text>
      </Group>
    </UnstyledButton>
  );
});
