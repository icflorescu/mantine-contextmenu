import { notifications } from '@mantine/notifications';
import { StaticImageData } from 'next/image';
import img0 from '~/assets/0.webp';
import img1 from '~/assets/1.webp';
import img2 from '~/assets/2.webp';
import img3 from '~/assets/3.webp';
import img4 from '~/assets/4.webp';
import img5 from '~/assets/5.webp';
import img6 from '~/assets/6.webp';
import img7 from '~/assets/7.webp';
import img8 from '~/assets/8.webp';
import img9 from '~/assets/9.webp';

export type UnsplashImage = {
  file: StaticImageData;
  author: { name: string; profile: string };
};

export const unsplashImages: UnsplashImage[] = [
  {
    file: img0,
    author: { name: 'Daria Shatova', profile: 'dariasha911' },
  },
  {
    file: img1,
    author: { name: 'Lloyd Henneman', profile: 'lloydhenneman' },
  },
  {
    file: img2,
    author: { name: 'Michael Sum', profile: 'michaelsum1228' },
  },
  {
    file: img3,
    author: { name: 'Zeke Tucker', profile: 'zeketucker' },
  },
  {
    file: img4,
    author: { name: 'Roberto Huczek', profile: 'tamoio' },
  },
  {
    file: img5,
    author: { name: 'Andriyko Podilnyk', profile: 'andriyko' },
  },
  {
    file: img6,
    author: { name: 'Nathalie Jolie', profile: 'visucy' },
  },
  {
    file: img7,
    author: { name: 'Kristina Yadykina', profile: 'kristlisa' },
  },
  {
    file: img8,
    author: { name: 'Manja Vitolic', profile: 'madhatterzone' },
  },
  {
    file: img9,
    author: { name: 'Pacto Visual', profile: 'pactovisual' },
  },
];

export function copyImageToClipboard(src: string) {
  if (typeof ClipboardItem === 'undefined' || !navigator.clipboard) {
    notifications.show({
      color: 'red',
      title: 'Error',
      message: 'Your browser does not support copying images to clipboard in this context',
      withBorder: true,
    });
    return;
  }
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    canvas.toBlob((blob) => {
      const item = new ClipboardItem({ 'image/png': blob! });
      navigator.clipboard.write([item]);
    });
  };
  notifications.show({
    title: 'Done',
    message: 'Image copied to clipboard',
    withBorder: true,
  });
}

export async function downloadImage(src: string) {
  const image = await fetch(src);
  const imageBlob = await image.blob();
  const imageURL = URL.createObjectURL(imageBlob);

  const link = document.createElement('a');
  link.href = imageURL;
  link.download = src;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
