'use client';

// example-start
import { useHotkeys, useTimeout } from '@mantine/hooks';
import { useContextMenu } from '__PACKAGE__';
import { useEffect } from 'react';
import { Picture } from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/images';

export function ImperativeHidingExample() {
  const { showContextMenu, hideContextMenu, isContextMenuVisible } = useContextMenu();

  // 👇 hide the context menu after five seconds have elapsed
  const { start: startHiding, clear: cancelHiding } = useTimeout(hideContextMenu, 5000);
  useEffect(() => {
    if (isContextMenuVisible) {
      startHiding();
    } else {
      cancelHiding();
    }
  }, [cancelHiding, isContextMenuVisible, startHiding]);

  // 👇 hide the context menu when the user hits the `H` key
  useHotkeys([['H', hideContextMenu]]);

  // example-skip
  const image = unsplashImages[2];
  const { src } = image.file;
  // example-resume
  return (
    <Picture
      image={image}
      onContextMenu={showContextMenu([
        {
          key: 'copy',
          onClick: () => copyImageToClipboard(src),
        },
        {
          key: 'download',
          onClick: () => downloadImage(src),
        },
      ])}
    />
  );
}
// example-end
