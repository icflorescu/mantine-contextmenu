'use client';

import { Text, Title } from '@mantine/core';
import { IconBrandGithub, IconHeartFilled, IconPackage, IconTable, IconUser } from '@tabler/icons-react';
import { useContextMenu } from '__PACKAGE__';
import clsx from 'clsx';
import {
  AUTHOR_LINK,
  MANTINE_DATATABLE_LINK,
  MANTINE_DATATABLE_PRODUCT_NAME,
  NPM_LINK,
  REPO_LINK,
  SPONSORS_LINK,
} from '~/app/config';
import classes from './HomePageTitle.module.css';

export function HomePageTitle() {
  const { showContextMenu } = useContextMenu();

  return (
    <Title className={classes.root} order={2}>
      The{' '}
      <Text
        className={clsx(classes.gradientText, 'nowrap')}
        span
        inherit
        variant="gradient"
        gradient={{ from: 'blue', to: 'cyan', deg: 30 }}
        onContextMenu={showContextMenu([
          {
            key: 'sponsor',
            color: 'red',
            icon: <IconHeartFilled size={16} />,
            title: 'Sponsor the author',
            onClick: () => window.open(SPONSORS_LINK, '_blank'),
          },
          {
            key: 'repo',
            icon: <IconBrandGithub size={16} />,
            title: 'Go to project repository',
            onClick: () => window.open(REPO_LINK, '_blank'),
          },
          {
            key: 'npm',
            icon: <IconPackage size={16} />,
            title: 'Go to npm package',
            onClick: () => window.open(NPM_LINK, '_blank'),
          },
          {
            key: 'mantine-datatable',
            icon: <IconTable className={classes.mantineDataTableIcon} size={14} />,
            title: `Go to ${MANTINE_DATATABLE_PRODUCT_NAME}`,
            onClick: () => window.open(MANTINE_DATATABLE_LINK, '_blank'),
          },
          { key: 'divider' },
          {
            key: 'author',
            icon: <IconUser size={16} />,
            title: 'View author’s GitHub profile',
            onClick: () => window.open(AUTHOR_LINK, '_blank'),
          },
        ])}
      >
        context menu
      </Text>
      <br />
      for your Mantine
      <br />
      applications
    </Title>
  );
}
