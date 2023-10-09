import { IconCopy, IconDownload } from '@tabler/icons-react';
import { useContextMenu } from 'mantine-contextmenu';
import Picture from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/image';

// example-start
export default function StylingExampleWithStylesObject() {
  const showContextMenu = useContextMenu();
  // example-skip
  const image = unsplashImages[4];
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
        {
          styles: {
            root: { border: '1px solid #d30e0e' },
            item: { color: '#d30e0e' },
          },
        }
      )}
    />
  );
}
// example-end
