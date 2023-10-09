import { Box, ScrollArea } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import clsx from 'clsx';
import { PAGES } from '~/config';
import classes from './AppNavbar.module.css';
import AppNavbarButton from './AppNavbarButton';
import AppNavbarLink from './AppNavbarLink';
import AppNavbarLinkList from './AppNavbarLinkList';
import Logo from './Logo';

export default function AppNavbar({ visible, onHideClick }: { visible: boolean; onHideClick: () => void }) {
  return (
    <>
      <div className={clsx(classes.backdrop, { [classes.backdropVisible]: visible })} onClick={onHideClick} />
      <div className={clsx(classes.root, { [classes.rootVisible]: visible })} onClick={onHideClick}>
        <Box className={classes.header} px="sm">
          <Logo />
          <IconX className={classes.closeIcon} strokeWidth={1} />
        </Box>
        <Box component={ScrollArea}>
          <Box my="xs">
            {PAGES.map(({ icon, title, description, color, path, external, items }) => {
              if (external) {
                return (
                  <AppNavbarButton
                    key={path}
                    icon={icon!}
                    title={title}
                    description={description}
                    color={color}
                    href={path}
                    externalLink
                  />
                );
              }
              const to = `/${path || ''}`;
              return items ? (
                <AppNavbarLinkList
                  key={to}
                  title={title}
                  color={color}
                  items={items.map(({ title: itemTitle, description: itemDescription, path: itemPath }) => ({
                    title: itemTitle,
                    description: itemDescription,
                    to: `${to}/${itemPath}`,
                  }))}
                />
              ) : (
                <AppNavbarLink key={to} icon={icon} title={title} description={description} color={color} to={to} />
              );
            })}
          </Box>
        </Box>
      </div>
    </>
  );
}
