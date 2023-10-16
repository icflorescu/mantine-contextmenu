/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('@ducanh2912/next-pwa').default({ dest: 'public' });
const { version: PACKAGE_VERSION } = require('./package.json');

module.exports = async () => {
  const { downloads: INITIAL_NPM_DOWNLOADS } = await fetch(
    'https://api.npmjs.org/downloads/point/last-month/mantine-contextmenu'
  )
    .then((res) => res.json())
    .catch(() => ({ downloads: 0 }));

  /**
   * @type {import('next').NextConfig}
   */
  const config = {
    output: 'export',
    images: { unoptimized: true },
    env: {
      GITHUB_PAGES: process.env.GITHUB_PAGES === 'true',
      PACKAGE_VERSION,
      INITIAL_NPM_DOWNLOADS,
    },
  };

  if (process.env.GITHUB_PAGES === 'true') config.basePath = '/mantine-contextmenu';

  return withPWA(config);
};
