import { Box, Center, Text, rgba, useMantineTheme } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import clsx from 'clsx';
import { WithRequiredProperty } from 'mantine-contextmenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MouseEventHandler } from 'react';
import { RouteInfo } from '~/app/config';
import { WithOptionalProperty } from '~/lib/utils';
import classes from './NavbarButton.module.css';

export type NavbarButtonProps = WithRequiredProperty<WithOptionalProperty<RouteInfo, 'href'>, 'color'> & {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  expanded?: boolean;
};

export function NavbarButton({ color, icon, title, description, href, onClick, expanded }: NavbarButtonProps) {
  const isExternal = !!href?.startsWith('http');
  const Icon = onClick ? IconChevronRight : icon;
  const pathname = usePathname();
  const isCurrent = pathname === href;
  const { colors } = useMantineTheme();

  const content = (
    <Box
      style={{
        '--button-bg-color-light': isCurrent ? rgba(colors[color][6], 0.1) : 'transparent',
        '--button-bg-color-dark': isCurrent ? rgba(colors[color][6], 0.2) : 'transparent',
        '--button-hover-bg-color-light': isCurrent ? rgba(colors[color][6], 0.2) : rgba(colors.gray[6], 0.1),
        '--button-hover-bg-color-dark': isCurrent ? rgba(colors[color][6], 0.3) : rgba(colors.gray[6], 0.2),
      }}
      className={classes.root}
      component="a"
      aria-label={description}
      href={isExternal ? href : undefined}
      target={isExternal ? '_blank' : undefined}
      onClick={onClick}
    >
      {Icon ? (
        <Center className={classes.iconWrapper} c="white" bg={color}>
          <Icon size={16} className={clsx(classes.icon, { [classes.expanded]: expanded })} />
        </Center>
      ) : (
        <div className={classes.dotWrapper}>
          <Box className={classes.dot} bg={color} />
        </div>
      )}
      <Text className={classes.text}>{title}</Text>
    </Box>
  );

  return isExternal || onClick ? (
    content
  ) : (
    <Link href={href!} passHref legacyBehavior>
      {content}
    </Link>
  );
}
