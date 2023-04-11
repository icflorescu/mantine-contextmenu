import { Flex } from '@mantine/core';
import { IconCopy, IconDownload, IconFlipHorizontal, IconFlipVertical } from '@tabler/icons-react';
import { useContextMenu } from 'mantine-contextmenu';
import { useState } from 'react';
import Picture from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/image';
import FancyButton from './FancyButton';

export default function CustomContentExample() {
  const showContextMenu = useContextMenu();

  const [flipVertical, setFlipVertical] = useState(false);
  const [flipHorizontal, setFlipHorizontal] = useState(false);
  const image = unsplashImages[7];
  const { src } = image.file;
  return (
    <Picture
      image={image}
      flipVertical={flipVertical}
      flipHorizontal={flipHorizontal}
      onContextMenu={showContextMenu((close) => (
        <Flex wrap="wrap" w={200}>
          <FancyButton
            icon={<IconCopy size={16} />}
            text="Copy"
            onClick={() => {
              close();
              copyImageToClipboard(src);
            }}
          />
          <FancyButton
            icon={<IconDownload size={16} />}
            text="Download"
            onClick={() => {
              close();
              downloadImage(src);
            }}
          />
          <FancyButton
            icon={<IconFlipVertical size={16} />}
            text="Flip vertical"
            onClick={() => {
              close();
              setFlipVertical((v) => !v);
            }}
          />
          <FancyButton
            icon={<IconFlipHorizontal size={16} />}
            text="Flip horizontal"
            onClick={() => {
              close();
              setFlipHorizontal((v) => !v);
            }}
          />
        </Flex>
      ))}
    />
  );
}
