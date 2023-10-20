'use client';

import { IconCopy, IconDownload, IconFlipHorizontal, IconFlipVertical } from '@tabler/icons-react';
import { useContextMenu } from '__PACKAGE__';
import { useState } from 'react';
import { Picture } from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/images';
import classes from './IndividualActionStylingExample.module.css';

export default function IndividualActionStylingExample() {
  const { showContextMenu } = useContextMenu();
  // example-skip
  const [flipVertical, setFlipVertical] = useState(false);
  const [flipHorizontal, setFlipHorizontal] = useState(false);
  const image = unsplashImages[6];
  const { src } = image.file;
  // example-resume
  return (
    <Picture
      // example-skip component props
      flipVertical={flipVertical}
      flipHorizontal={flipHorizontal}
      image={image}
      // example-resume
      onContextMenu={showContextMenu(
        [
          {
            key: 'copy',
            icon: <IconCopy size={16} />,
            onClick: () => copyImageToClipboard(src),
            className: classes.copyAction, // 👈 action styled with className
          },
          {
            key: 'download',
            icon: <IconDownload size={16} />,
            onClick: () => downloadImage(src),
            // 👇 action styled with a style object
            style: {
              fontStyle: 'italic',
              color: '#0d8527',
            },
          },
          {
            key: 'div-1',
            // 👇 divider styled with a style function
            style: (theme) => ({ background: theme.colors.orange[6] }),
          },
          {
            key: 'flipVertical',
            icon: <IconFlipVertical size={16} />,
            onClick: () => setFlipVertical((v) => !v),
          },
          {
            key: 'flipHorizontal',
            icon: <IconFlipHorizontal size={16} />,
            onClick: () => setFlipHorizontal((v) => !v),
          },
        ],
        {
          // 👇 menu styled with class names
          classNames: {
            root: classes.contextMenuRoot,
            item: classes.contextMenuItem,
          },
        }
      )}
    />
  );
}
