import { Title } from '@mantine/core';
import { IconBrandGithub, IconPackage, IconTable, IconUser } from '@tabler/icons-react';
import clsx from 'clsx';
import { useContextMenu } from 'mantine-contextmenu';
import { AUTHOR_LINK, MANTINE_DATATABLE_LINK, NPM_LINK, REPO_LINK } from '~/config';
import classes from './HomePageTitle.module.css';

export default function HomePageTitle() {
  const showContextMenu = useContextMenu();
  return (
    <Title className={classes.root} order={2}>
      The{' '}
      <span
        className={classes.gradientText}
        onContextMenu={showContextMenu([
          {
            key: 'repo',
            icon: <IconBrandGithub className={classes.contextMenuIcon} size={16} />,
            title: 'Go to project repository',
            onClick: () => window.open(REPO_LINK, '_blank'),
          },
          {
            key: 'npm',
            icon: <IconPackage className={classes.contextMenuIcon} size={16} />,
            title: 'Go to npm package',
            onClick: () => window.open(NPM_LINK, '_blank'),
          },
          {
            key: 'mantine-datatable',
            icon: (
              <IconTable className={clsx(classes.contextMenuIcon, classes.mantineDataTableContextMenuIcon)} size={14} />
            ),
            title: 'Go to Mantine DataTable',
            onClick: () => window.open(MANTINE_DATATABLE_LINK, '_blank'),
          },
          { key: 'divider' },
          {
            key: 'author',
            icon: <IconUser className={classes.contextMenuIcon} size={16} />,
            title: 'View author’s GitHub profile',
            onClick: () => window.open(AUTHOR_LINK, '_blank'),
          },
        ])}
      >
        context menu
      </span>
      <br />
      for your Mantine
      <br />
      applications
    </Title>
  );
}
