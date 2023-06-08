import { createStyles } from '@mantine/core';
import { IconEyeglass, IconSunglasses, IconX } from '@tabler/icons-react';
import { useContextMenu } from 'mantine-contextmenu';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  root: {
    overflow: 'hidden',
    borderRadius: theme.radius.sm,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    position: 'relative',
    transition: 'filter .5s ease',
    filter: 'sepia(0) grayscale(0)',
    cursor: 'context-menu',
  },
  sepia: {
    filter: 'sepia(1) grayscale(0)',
  },
  grayscale: {
    filter: 'sepia(0) grayscale(1)',
  },
  rightShadow: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 10,
    background: `linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent)`,
  },
}));

export default function HomePageHeroImage() {
  const [filter, setFilter] = useState<'none' | 'sepia' | 'grayscale'>('none');

  const showContextMenu = useContextMenu();

  const { cx, classes } = useStyles();
  return (
    <div
      className={cx(classes.root, { [classes.sepia]: filter === 'sepia', [classes.grayscale]: filter === 'grayscale' })}
      onContextMenu={showContextMenu([
        {
          key: 'sepia',
          icon: <IconSunglasses size={16} />,
          title: 'Set filter to sepia',
          disabled: filter === 'sepia',
          onClick: () => setFilter('sepia'),
        },
        {
          key: 'grayscale',
          icon: <IconEyeglass size={16} />,
          title: 'Set filter to grayscale',
          disabled: filter === 'grayscale',
          onClick: () => setFilter('grayscale'),
        },
        { key: 'divider' },
        {
          key: 'clear',
          icon: <IconX size={16} />,
          title: 'Clear filter',
          disabled: filter === 'none',
          onClick: () => setFilter('none'),
        },
      ])}
    >
      <img src={`${process.env.BASE_PATH}/mantine-contextmenu.png`} alt="Mantine ContextMenu" />
      <div className={classes.rightShadow} />
    </div>
  );
}
