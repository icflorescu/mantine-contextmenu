'use client';

import { Grid, GridCol } from '@mantine/core';
import { IconCopy, IconDownload, IconLink } from '@tabler/icons-react';
import { useContextMenu } from '__PACKAGE__';
import { Picture } from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/images';

const images = unsplashImages.slice(1);

export function MultipleTargetsExample() {
  // example-start
  // 👇 the same function will be used for multiple components
  const { showContextMenu } = useContextMenu();

  return (
    <Grid>
      {images.map((image, index) => (
        <GridCol span={{ xs: 4 }} key={index}>
          <Picture
            image={image}
            onContextMenu={showContextMenu([
              {
                key: 'copy',
                icon: <IconCopy size={16} />,
                onClick: () => copyImageToClipboard(image.file.src),
              },
              {
                key: 'download',
                icon: <IconDownload size={16} />,
                onClick: () => downloadImage(image.file.src),
              },
              { key: 'divider' },
              {
                key: 'author',
                icon: <IconLink size={16} />,
                title: `Open ${image.author.name}’s profile`,
                onClick: () => window.open(`https://unsplash.com/@${image.author.profile}`, '_blank'),
              },
            ])}
          />
        </GridCol>
      ))}
    </Grid>
  );
  // example-end
}
