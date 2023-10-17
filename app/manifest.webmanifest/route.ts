import { MetadataRoute } from 'next';
import { PRODUCT_DESCRIPTION, PRODUCT_NAME, WEBSITE_LINK } from '~/app/config';

/**
 * we need to use this instead of a manifest.ts file because the basePath is
 * not being applied to the manifest route in the generated layout...
 */

const data: MetadataRoute.Manifest = {
  name: `Enhance your users’ experience with ${PRODUCT_NAME}`,
  short_name: PRODUCT_NAME,
  description: PRODUCT_DESCRIPTION,
  start_url: './',
  scope: '.',
  display: 'standalone',
  background_color: '#ffffff',
  theme_color: '#1971c2',
  icons: [
    {
      src: `${process.env.GITHUB_PAGES === 'TRUE' ? WEBSITE_LINK : ''}/icon.svg`,
      sizes: 'any',
    },
  ],
};

export const GET = () => Response.json(data);
