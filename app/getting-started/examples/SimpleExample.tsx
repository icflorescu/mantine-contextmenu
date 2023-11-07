'use client';
// 👆 Since 'useContextMenu' is a hook, don't forget to add the 'use client' directive
//    at the top of your file if you're using it in a RSC context

import { useContextMenu } from '__PACKAGE__';
// example-skip other imports
import { IconCopy, IconDownload } from '@tabler/icons-react';
import { Picture } from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/images';
// example-resume

export function SimpleExample() {
  const { showContextMenu } = useContextMenu();
  // example-skip
  const image = unsplashImages[0];
  const { src } = image.file;
  // example-resume
  return (
    <Picture
      image={image}
      onContextMenu={showContextMenu([
        {
          key: 'copy',
          icon: <IconCopy size={16} />,
          title: 'Copy to clipboard',
          onClick: () => copyImageToClipboard(src),
        },
        {
          key: 'download',
          icon: <IconDownload size={16} />,
          title: 'Download to your device',
          onClick: () => downloadImage(src),
        },
      ])}
    />
  );
}
