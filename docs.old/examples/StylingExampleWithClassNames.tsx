import { createStyles } from '@mantine/core';
import { IconCopy, IconDownload } from '@tabler/icons-react';
import { useContextMenu } from 'mantine-contextmenu';
import Picture from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/image';

// example-start
const useStyles = createStyles((theme) => ({
  contextMenuRoot: {
    border: `1px solid ${theme.colors.red[6]}`,
  },
  contextMenuItem: {
    background: theme.colorScheme === 'dark' ? theme.colors.red[9] : theme.colors.red[2],
    '&&': {
      '&:hover': {
        background: theme.colorScheme === 'dark' ? theme.colors.red[8] : theme.colors.red[3],
      },
    },
  },
}));

export default function StylingExampleWithClassNames() {
  const showContextMenu = useContextMenu();
  // example-skip
  const image = unsplashImages[3];
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
        {
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
