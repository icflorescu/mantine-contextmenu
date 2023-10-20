'use client';

import { useContextMenu } from '__PACKAGE__';
import { Picture } from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/images';

export function BasicUsageExample() {
  // example-start
  const { showContextMenu } = useContextMenu();
  // example-skip
  const image = unsplashImages[1];
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
  // example-end
}
