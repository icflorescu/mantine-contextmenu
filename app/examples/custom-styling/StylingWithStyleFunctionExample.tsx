'use client';

import { IconCopy, IconDownload } from '@tabler/icons-react';
import { useContextMenu } from '__PACKAGE__';
import { Picture } from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/images';

// example-start
export function StylingWithStyleFunctionExample() {
  const showContextMenu = useContextMenu();
  // example-skip
  const image = unsplashImages[0];
  const { src } = image.file;
  // example-resume

  return (
    <Picture
      // example-skip component props
      image={image}
      // example-resume
      onContextMenu={showContextMenu(
        [
          // example-skip context menu items
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
          // example-resume
        ],
        { style: (theme) => ({ border: `1px dashed ${theme.colors.grape[6]}` }) }
      )}
    />
  );
}
// example-end
