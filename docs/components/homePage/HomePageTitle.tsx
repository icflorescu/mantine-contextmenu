import { Title, createStyles } from '@mantine/core';
import { IconBrandGithub, IconPackage, IconTable, IconUser } from '@tabler/icons-react';
import { useContextMenu } from 'mantine-contextmenu';
import { AUTHOR_LINK, MANTINE_DATATABLE_LINK, NPM_LINK, REPO_LINK } from '~/config';

const useStyles = createStyles((theme) => ({
  root: {
    textIndent: '-0.1em',
    marginBottom: '.5em',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[8],
    fontSize: 28,
    '@media (min-width: 300px)': {
      fontSize: 32,
    },
    '@media (min-width: 360px)': {
      fontSize: 38,
    },
    '@media (min-width: 420px)': {
      fontSize: 46,
    },
    [`@media (min-width: ${theme.breakpoints.xs})`]: {
      marginTop: '.5em',
      lineHeight: 1.15,
      fontSize: 52,
    },
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      fontSize: 64,
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      marginTop: '.66em',
    },
  },
  gradientText: {
    background: theme.fn.gradient({ from: theme.colors.blue[6], to: theme.colors.cyan[6] }),
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    cursor: 'context-menu',
  },
  contextMenuIcon: {
    marginTop: -2,
  },
  mantineDataTableContextMenuIcon: {
    marginLeft: 1,
    marginRight: 1,
  },
}));

export default function HomePageTitle() {
  const showContextMenu = useContextMenu();
  const { cx, classes } = useStyles();
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
              <IconTable className={cx(classes.contextMenuIcon, classes.mantineDataTableContextMenuIcon)} size={14} />
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
