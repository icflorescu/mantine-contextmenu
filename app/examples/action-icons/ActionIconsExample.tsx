'use client';

import { notifications } from '@mantine/notifications';
import { IconCopy, IconDownload, IconExclamationCircle, IconTrash } from '@tabler/icons-react';
import { useContextMenu } from '__PACKAGE__';
import { Picture } from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/images';

export function ActionIconsExample() {
  // example-start
  const { showContextMenu } = useContextMenu();
  // example-skip
  const image = unsplashImages[4];
  const { src } = image.file;

  const handleDelete = () => {
    notifications.show({
      color: 'red',
      title: 'Can’t do that',
      message: 'You know you can’t delete an image from the Internet, right?',
    });
  };
  // example-resume
  return (
    <Picture
      image={image}
      onContextMenu={showContextMenu([
        {
          key: 'copy',
          icon: <IconCopy size={16} />,
          onClick: () => copyImageToClipboard(src),
        },
        {
          key: 'download',
          iconRight: <IconDownload size={16} />,
          onClick: () => downloadImage(src),
        },
        {
          key: 'delete',
          icon: <IconTrash size={16} />,
          iconRight: <IconExclamationCircle size={16} />,
          onClick: () => handleDelete,
        },
      ])}
    />
  );
  // example-end
}
