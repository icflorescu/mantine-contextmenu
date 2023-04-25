import { createStyles } from '@mantine/core';
import { IconCopy, IconDownload } from '@tabler/icons-react';
import { useContextMenu } from 'mantine-contextmenu';
import Picture from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/image';

// example-start
const useStyles = createStyles((theme) => ({
  contextMenu: {
    border: `1px solid ${theme.colors.red[6]}`,
  },
}));

export default function StylingExampleMenuWithClassName() {
  const showContextMenu = useContextMenu();
  // example-skip
  const image = unsplashImages[8];
  const { src } = image.file;
  // example-resume
  const { classes } = useStyles();

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
        { className: classes.contextMenu }
      )}
    />
  );
}
// example-end
