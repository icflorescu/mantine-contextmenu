import { MantineColor } from '@mantine/core';
import { IconHeartHandshake, IconHome, IconList, IconRocket, TablerIconsProps } from '@tabler/icons-react';

export const PRODUCT_NAME = 'Mantine ContextMenu';
export const PRODUCT_DESCRIPTION =
  'Design your Mantine applications for productivity and meet your users’ expectations by enhancing your UIs with desktop-grade context menus';

export const WEBSITE_LINK = 'https://icflorescu.github.io/mantine-contextmenu';
export const V6_WEBSITE_LINK = 'https://icflorescu.github.io/mantine-contextmenu-v6';

export const AUTHOR_NAME = 'Ionut-Cristian Florescu';
export const AUTHOR_LINK = 'https://github.com/icflorescu';
export const REPO_LINK = 'https://github.com/icflorescu/mantine-contextmenu';
export const LICENSE_LINK = `${REPO_LINK}/blob/main/LICENSE`;
export const NPM_LINK = 'https://www.npmjs.com/package/mantine-contextmenu';
export const SPONSORS_LINK = 'https://github.com/sponsors/icflorescu';
export const MANTINE_DATATABLE_LINK = 'https://icflorescu.github.io/mantine-datatable/';
export const MANTINE_LINK = 'https://mantine.dev';
export const NEXTJS_LINK = 'https://nextjs.org';
export const VITE_LINK = 'https://vitejs.dev';
export const REMIX_LINK = 'https://remix.run';
export const CRA_LINK = 'https://create-react-app.dev';
export const GATSBY_LINK = 'https://www.gatsbyjs.com';

export const DOWNLOADS_REFRESH_INTERVAL = 1000 * 60 * 60 * 24; // 1 day

export type RouteInfo = {
  href: string;
  title: string;
  description: string;
} & ({ icon?: never; color?: never } | { icon: React.FC<TablerIconsProps>; color: MantineColor });

export const EXAMPLES_ROUTE_COLOR: MantineColor = 'green';

export const ROUTES: RouteInfo[] = [
  {
    href: '/',
    title: 'Home',
    description: PRODUCT_DESCRIPTION,
    icon: IconHome,
    color: 'blue',
  },
  {
    href: '/getting-started',
    title: 'Getting started',
    description: `Learn how to get started with ${PRODUCT_NAME}`,
    icon: IconRocket,
    color: 'orange',
  },
  {
    href: '/examples/basic-usage',
    title: 'Basic usage',
    description: `Learn how to use ${PRODUCT_NAME} in your application`,
  },
  // '/examples/basic-usage',
  // '/examples/basic-configuration',
  // '/type-definitions',
  // '/contribute-and-support',
  // '/hire-the-author',
  {
    href: '/hire-the-author',
    title: 'Hire the author',
    description: `Hire ${AUTHOR_NAME}, the author of ${PRODUCT_NAME}, a full-stack developer with 20+ years of experience`,
    icon: IconHeartHandshake,
    color: 'red',
  },
  {
    href: `${REPO_LINK}/blob/main/CHANGELOG.md`,
    title: `Changelog`,
    description: `See ${PRODUCT_NAME} changelog`,
    icon: IconList,
    color: 'gray',
  },
];
