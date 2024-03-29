'use client';

import { useContextMenu } from '__PACKAGE__';
import { Picture } from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/images';

export function ActionTitlesExample() {
  // example-start
  const { showContextMenu } = useContextMenu();
  // example-skip
  const image = unsplashImages[3];
  const { src } = image.file;
  // example-resume
  return (
    <Picture
      image={image}
      onContextMenu={showContextMenu([
        {
          key: 'copy',
          title: 'Copy image to clipboard',
          onClick: () => copyImageToClipboard(src),
        },
        {
          key: 'download',
          title: 'Download image to your computer',
          onClick: () => downloadImage(src),
        },
      ])}
    />
  );
  // example-end
}
