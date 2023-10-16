import { MetadataRoute } from 'next';
import { PRODUCT_DESCRIPTION, PRODUCT_NAME, WEBSITE_LINK } from './config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `Enhance your users’ experience with ${PRODUCT_NAME}`,
    short_name: PRODUCT_NAME,
    description: PRODUCT_DESCRIPTION,
    start_url: '/',
    scope: '.',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1971c2',
    icons: [
      {
        src: `${process.env.GITHUB_PAGES ? WEBSITE_LINK : ''}/icon.svg`,
        sizes: 'any',
      },
    ],
  };
}
