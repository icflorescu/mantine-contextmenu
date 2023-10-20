'use client';

import { IconCopy, IconDownload } from '@tabler/icons-react';
import { useContextMenu } from '__PACKAGE__';
import { Picture } from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/images';

// example-start
export function StylingWithStylesObjectExample() {
  const { showContextMenu } = useContextMenu();
  // example-skip
  const image = unsplashImages[2];
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
            root: { border: '1px solid #d30e0e' },
            divider: { background: 'transparent', borderTop: '1px dashed #116d09' },
            item: { color: '#d30e0e' },
          },
        }
      )}
    />
  );
}
// example-end
