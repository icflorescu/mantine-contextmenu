'use client';

import { IconCopy, IconDownload, IconFlipHorizontal, IconFlipVertical } from '@tabler/icons-react';
import { useContextMenu } from '__PACKAGE__';
import { useState } from 'react';
import { Picture } from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/images';

export function ActionDividersExample() {
  // example-start
  const { showContextMenu } = useContextMenu();

  const [flipVertical, setFlipVertical] = useState(false);
  const [flipHorizontal, setFlipHorizontal] = useState(false);
  // example-skip
  const image = unsplashImages[6];
  const { src } = image.file;
  // example-resume
  return (
    <Picture
      image={image}
      flipVertical={flipVertical}
      flipHorizontal={flipHorizontal}
      onContextMenu={showContextMenu([
        {
          key: 'copy',
          icon: <IconCopy size={16} />,
          onClick: () => copyImageToClipboard(src),
        },
        {
          key: 'download',
          icon: <IconDownload size={16} />,
          onClick: () => downloadImage(src),
        },
        // 👇 render a divider
        //    (the key can be anything, it's just used to identify the item)
        { key: 'divider' },
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
      ])}
    />
  );
  // example-end
}
