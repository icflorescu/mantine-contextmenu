import { IconEyeglass, IconSunglasses, IconX } from '@tabler/icons-react';
import clsx from 'clsx';
import { useContextMenu } from 'mantine-contextmenu';
import { useState } from 'react';
import classes from './HomePageHeroImage.module.css';

export default function HomePageHeroImage() {
  const [filter, setFilter] = useState<'none' | 'sepia' | 'grayscale'>('none');

  const showContextMenu = useContextMenu();
  return (
    <div
      className={clsx(classes.root, {
        [classes.sepia]: filter === 'sepia',
        [classes.grayscale]: filter === 'grayscale',
      })}
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
