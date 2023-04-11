import { Box, Text, createStyles } from '@mantine/core';
import Image from 'next/image';
import type { MouseEventHandler } from 'react';
import type { UnsplashImage } from '~/lib/image';
import ExternalLink from './ExternalLink';

const useStyles = createStyles((theme) => ({
  root: {
    aspectRatio: '16 / 9',
    width: '100%',
    position: 'relative',
    borderRadius: theme.radius.md,
    overflow: 'hidden',
  },
  image: {
    objectFit: 'cover',
  },
  flipVertical: {
    transform: 'scaleX(-1)',
  },
  flipHorizontal: {
    transform: 'scaleY(-1)',
  },
  attribution: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  attributionText: {
    padding: `0 ${theme.spacing.sm}`,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.white,
    fontSize: theme.fontSizes.xs,
    lineHeight: 2,
    borderRadius: theme.radius.sm,
    a: {
      color: theme.colors.blue[3],
    },
  },
}));

export default function Picture({
  image: {
    file: { src },
    author: { name, profile },
  },
  flipVertical,
  flipHorizontal,
  onContextMenu,
}: {
  image: UnsplashImage;
  flipVertical?: boolean;
  flipHorizontal?: boolean;
  onContextMenu?: MouseEventHandler<HTMLDivElement>;
}) {
  const { cx, classes } = useStyles();
  return (
    <Box
      className={cx(classes.root, { [classes.flipHorizontal]: flipHorizontal, [classes.flipVertical]: flipVertical })}
      onContextMenu={onContextMenu}
    >
      <Image className={classes.image} src={src} alt={`Picture by ${name} | Mantine ContextMenu`} fill priority />
      <div className={classes.attribution}>
        <Text className={classes.attributionText}>
          Picture by <ExternalLink to={`https://unsplash.com/@${profile}`}>{name}</ExternalLink>
        </Text>
      </div>
    </Box>
  );
}
