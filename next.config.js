/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('@ducanh2912/next-pwa').default({ dest: 'public' });
const { name: PACKAGE_NAME, version: PACKAGE_VERSION } = require('./package.json');

module.exports = async () => {
  const { downloads } = await fetch('https://api.npmjs.org/downloads/point/last-month/mantine-contextmenu')
    .then((res) => res.json())
    .catch(() => ({ downloads: 0 }));

  /**
   * @type {import('next').NextConfig}
   */
  const config = {
    output: 'export',
    trailingSlash: true,
    images: { unoptimized: true },
    experimental: {
      typedRoutes: true,
      optimizePackageImports: [
        '@mantine/code-highlight',
        '@mantine/core',
        '@mantine/hooks',
        '@mantine/notifications',
        '@tabler/icons-react',
      ],
    },
    env: {
      GITHUB_PAGES: String(process.env.GITHUB_PAGES === 'TRUE' || false).toUpperCase(),
      PACKAGE_NAME,
      PACKAGE_VERSION,
      INITIAL_NPM_DOWNLOADS: String(downloads),
    },
  };

  if (process.env.GITHUB_PAGES) config.basePath = '/mantine-contextmenu';

  return withPWA(config);
};
