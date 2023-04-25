import { createStyles } from '@mantine/core';
import { IconCopy, IconDownload, IconFlipHorizontal, IconFlipVertical } from '@tabler/icons-react';
import { useContextMenu } from 'mantine-contextmenu';
import { useState } from 'react';
import Picture from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/image';

// example-start
const useStyles = createStyles((theme) => ({
  contextMenuRoot: {
    border: `1px solid ${theme.colors.orange[6]}`,
  },
  contextMenuItem: {
    color: theme.colors.grape[6],
  },
  copyAction: {
    color: theme.colors.red[6],
  },
}));

export default function StylingExampleWithIndividualActionStyling() {
  const showContextMenu = useContextMenu();
  // example-skip
  const [flipVertical, setFlipVertical] = useState(false);
  const [flipHorizontal, setFlipHorizontal] = useState(false);
  const image = unsplashImages[6];
  const { src } = image.file;
  // example-resume
  const { classes } = useStyles();

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
              fontWeight: 'bold',
              color: '#0d8527',
            },
          },
          {
            key: 'div-1',
            // 👇 divider styled with sx
            sx: (theme) => ({ background: theme.colors.orange[6] }),
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
// example-end
