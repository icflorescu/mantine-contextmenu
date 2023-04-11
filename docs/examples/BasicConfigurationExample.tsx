import { useContextMenu } from 'mantine-contextmenu';
import Picture from '~/components/Picture';
import { copyImageToClipboard, downloadImage, unsplashImages } from '~/lib/image';

export default function BasicConfigurationExample() {
  // example-start
  const showContextMenu = useContextMenu();
  // example-skip
  const image = unsplashImages[2];
  const { src } = image.file;
  // example-resume
  return (
    <Picture
      image={image}
      onContextMenu={showContextMenu(
        [
          {
            key: 'copy',
            onClick: () => copyImageToClipboard(src),
          },
          {
            key: 'download',
            onClick: () => downloadImage(src),
          },
        ],
        { zIndex: 1000, shadow: 'md', borderRadius: 'md' }
      )}
    />
  );
  // example-end
}
