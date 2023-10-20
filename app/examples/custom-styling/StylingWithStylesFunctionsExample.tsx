'use client';

import { IconCopy, IconDownload } from '@tabler/icons-react';
import { useContextMenu } from '__PACKAGE__';
import { Picture } from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/images';

// example-start
export function StylingWithStylesFunctionsExample() {
  const showContextMenu = useContextMenu();
  // example-skip
  const image = unsplashImages[3];
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
          { key: 'divider' },
          {
            key: 'download',
            icon: <IconDownload size={16} />,
            onClick: () => downloadImage(src),
          },
          // example-resume
        ],
        {
          styles: {
            root: (theme) => ({ border: `1px solid ${theme.colors.indigo[6]}` }),
            item: (theme) => ({ color: theme.colors.orange[6] }),
          },
        }
      )}
    />
  );
}
// example-end
