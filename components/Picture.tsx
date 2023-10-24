import { Text } from '@mantine/core';
import clsx from 'clsx';
import Image from 'next/image';
import { PRODUCT_NAME } from '~/app/config';
import type { UnsplashImage } from '~/lib/images';
import { ExternalLink } from './ExternalLink';
import classes from './Picture.module.css';

export type PictureProps = {
  image: UnsplashImage;
  flipVertical?: boolean;
  flipHorizontal?: boolean;
  onContextMenu?: React.MouseEventHandler<HTMLDivElement>;
};

export function Picture({
  image: {
    file: { src },
    author: { name, profile },
  },
  flipVertical,
  flipHorizontal,
  onContextMenu,
}: PictureProps) {
  return (
    <div className={classes.root}>
      <div className={classes.container} onContextMenu={onContextMenu}>
        <Image
          onContextMenu={onContextMenu}
          className={clsx(classes.image, {
            [classes.flipHorizontal]: flipHorizontal,
            [classes.flipVertical]: flipVertical,
          })}
          src={src}
          alt={`Picture by ${name} | ${PRODUCT_NAME}`}
          fill
          priority
        />
        <div className={classes.attribution}>
          <Text className={classes.attributionText}>
            Picture by{' '}
            <ExternalLink className="nowrap" to={`https://unsplash.com/@${profile}`}>
              {name}
            </ExternalLink>
          </Text>
        </div>
      </div>
      <svg className={classes.background}>
        <pattern
          id="diagonalHatch"
          width="5"
          height="5"
          patternTransform="rotate(45 0 0)"
          patternUnits="userSpaceOnUse"
        >
          <line className={classes.backgroundLine} x1="0" y1="0" x2="0" y2="5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
      </svg>
    </div>
  );
}
