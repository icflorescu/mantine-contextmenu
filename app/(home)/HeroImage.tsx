'use client';

import { IconEyeglass, IconSunglasses, IconX } from '@tabler/icons-react';
import { useContextMenu } from '__PACKAGE__';
import clsx from 'clsx';
import { useState } from 'react';
import { PRODUCT_NAME } from '~/app/config';
import classes from './HeroImage.module.css';
import picture from './hero.png';

export function HeroImage() {
  const [filter, setFilter] = useState<'none' | 'sepia' | 'grayscale'>('none');

  const { showContextMenu } = useContextMenu();

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
          key: 'reset',
          icon: <IconX size={16} />,
          title: 'Reset filter',
          disabled: filter === 'none',
          onClick: () => setFilter('none'),
        },
      ])}
    >
      <img src={picture.src} alt={PRODUCT_NAME} />
      <div className={classes.rightShadow} />
    </div>
  );
}
