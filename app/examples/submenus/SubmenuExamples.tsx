'use client';

import {
  IconArrowRight,
  IconChevronRight,
  IconCopy,
  IconDownload,
  IconFlipHorizontal,
  IconFlipVertical,
  IconUser,
  IconView360,
} from '@tabler/icons-react';
import { useContextMenu } from '__PACKAGE__';
import { useState } from 'react';
import { Picture } from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/images';

export function SubmenuExample() {
  // example-start submenu
  const { showContextMenu } = useContextMenu();

  const [flipVertical, setFlipVertical] = useState(false);
  const [flipHorizontal, setFlipHorizontal] = useState(false);
  // example-skip
  const image = unsplashImages[1];
  const { src } = image.file;
  // example-resume
  return (
    <Picture
      image={image}
      flipVertical={flipVertical}
      flipHorizontal={flipHorizontal}
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
        {
          key: 'flip',
          icon: <IconView360 size={16} />,
          items: [
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
        },
      ])}
    />
  );
  // example-end
}

export function NestedSubmenuExample() {
  // example-start nested-submenu
  const { showContextMenu } = useContextMenu();
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
            {
              key: 'more-nested-items',
              items: [
                {
                  key: 'nested-item-1',
                  onClick: () => console.log('nested item 1 clicked'),
                },
                {
                  key: 'nested-item-2',
                  onClick: () => console.log('nested item 2 clicked'),
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

export function SubmenuExampleCustomArrowIcon() {
  // example-start submenu-custom-arrow-icon
  const { showContextMenu } = useContextMenu();

  const [flipVertical, setFlipVertical] = useState(false);
  const [flipHorizontal, setFlipHorizontal] = useState(false);
  // example-skip
  const image = unsplashImages[1];
  const { src } = image.file;
  // example-resume
  return (
    <Picture
      image={image}
      flipVertical={flipVertical}
      flipHorizontal={flipHorizontal}
      onContextMenu={showContextMenu([
        // example-skip some items
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
        // example-resume
        {
          key: 'author',
          icon: <IconUser size={16} />,
          // 👇 custom arrow icon
          iconRight: <IconChevronRight size={16} />,
          items: [
            // example-skip some nested items
            {
              key: 'open-in-new-tab',
              onClick: () => window.open(`http://unsplash.com/@${image.author.profile}`, '_blank'),
            },
            {
              key: 'another-item',
              onClick: () => console.log('another item clicked'),
            },
            // example-resume
          ],
        },
        {
          key: 'flip',
          icon: <IconView360 size={16} />,
          // 👇 custom arrow icon
          iconRight: <IconArrowRight size={16} />,
          items: [
            // example-skip more nested items
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
            // example-resume
          ],
        },
      ])}
    />
  );
  // example-end
}
