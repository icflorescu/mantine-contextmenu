import pwa from '@ducanh2912/next-pwa';
import pkg from '../package/package.json' assert { type: 'json' };

const withPWA = pwa({ dest: 'public' });

const nextConfig = async () => {
  const { downloads: INITIAL_NPM_DOWNLOADS } = await fetch(
    'https://api.npmjs.org/downloads/point/last-month/mantine-contextmenu'
  ).then((res) => res.json());

  /**
   * @type {import('next').NextConfig}
   */
  const config = {
    output: 'export',
    reactStrictMode: true,
    transpilePackages: ['mantine-contextmenu'],
    images: { unoptimized: true },
    env: {
      GITHUB_PAGES: process.env.GITHUB_PAGES === 'true',
      PACKAGE_VERSION: pkg.version,
      INITIAL_NPM_DOWNLOADS,
    },
  };

  if (process.env.GITHUB_PAGES === 'true') config.basePath = '/mantine-contextmenu';

  return withPWA(config);
};

export default nextConfig;
