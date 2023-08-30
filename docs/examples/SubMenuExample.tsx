import {IconCopy, IconDownload, IconFolderOpen, IconLink, IconWindow} from '@tabler/icons-react';
import {useContextMenu} from 'mantine-contextmenu';
import Picture from '~/components/Picture';
import {copyImageToClipboard, downloadImage, unsplashImages} from '~/lib/image';

export default function ActionIconsExample() {
  // example-start
  const showContextMenu = useContextMenu();

  const image = unsplashImages[3];

  return (
    <Picture
      image={image}
      onContextMenu={showContextMenu([
        {
          key: 'copy',
          icon: <IconCopy size={16}/>,
          onClick: () => copyImageToClipboard(image.file.src),
        },
        {
          key: 'download',
          icon: <IconDownload size={16}/>,
          onClick: () => downloadImage(image.file.src),
        },
        {
          key: "open",
          icon: <IconFolderOpen size={16} />,
          title: `Open ${image.author.name}’s profile in`,
          submenu: [
            {
              key: 'new tab',
              icon: <IconLink size={16}/>,
              title: `New Tab`,
              onClick: () => window.open(`https://unsplash.com/@${image.author.profile}`, '_blank'),
            },
            {
              key: 'new window',
              icon: <IconWindow size={16}/>,
              title: `New Window`,
              onClick: () => window.open(`https://unsplash.com/@${image.author.profile}`, '_blank', 'width=500,height=500'),
            },
          ]
        },
      ])}
    />
  );
  // example-end
}
