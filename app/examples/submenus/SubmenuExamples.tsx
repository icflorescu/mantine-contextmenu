'use client';

import { IconCopy, IconDownload, IconUser } from '@tabler/icons-react';
import { useContextMenu } from '__PACKAGE__';
import { Picture } from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/images';

export function SubmenuExample() {
  // example-start submenu
  const showContextMenu = useContextMenu();
  // example-skip
  const image = unsplashImages[1];
  const { src } = image.file;
  // example-resume
  return (
    <Picture
      image={image}
      onContextMenu={showContextMenu([
        {
          icon: <IconCopy size={16} />,
          key: 'copy',
          onClick: () => copyImageToClipboard(src),
        },
        {
          icon: <IconDownload size={16} />,
          key: 'download',
          onClick: () => downloadImage(src),
        },
        {
          key: 'author',
          icon: <IconUser size={16} />,
          items: [
            {
              key: 'open-in-new-tab',
              onClick: () => window.open(`http://unsplash.com/@${image.author.profile}`, '_blank'),
            },
            {
              key: 'another-item',
              onClick: () => console.log('another item clicked'),
            },
          ],
        },
      ])}
    />
  );
  // example-end
}

export function NestedSubmenuExample() {
  // example-start nested-submenu
  const showContextMenu = useContextMenu();
  // example-skip
  const image = unsplashImages[2];
  const { src } = image.file;
  // example-resume
  return (
    <Picture
      image={image}
      onContextMenu={showContextMenu([
        {
          icon: <IconCopy size={16} />,
          key: 'copy',
          onClick: () => copyImageToClipboard(src),
        },
        {
          icon: <IconDownload size={16} />,
          key: 'download',
          onClick: () => downloadImage(src),
        },
        {
          key: 'author',
          icon: <IconUser size={16} />,
          items: [
            {
              key: 'open-in-new-tab',
              onClick: () => window.open(`http://unsplash.com/@${image.author.profile}`, '_blank'),
            },
            {
              key: 'nested-items',
              items: [
                {
                  key: 'nested-item-1',
                  onClick: () => console.log('nested item 1 clicked'),
                },
                {
                  key: 'nested-item-2',
                  onClick: () => console.log('nested item 2 clicked'),
                },
                {
                  key: 'deeply-nested-items',
                  items: [
                    {
                      key: 'deeply-nested-item-1',
                      onClick: () => console.log('deeply nested item 1 clicked'),
                    },
                    {
                      key: 'deeply-nested-item-2',
                      onClick: () => console.log('deeply nested item 2 clicked'),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ])}
    />
  );
  // example-end
}
