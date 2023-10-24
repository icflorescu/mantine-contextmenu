import { MantineColor } from '@mantine/core';
import {
  IconAdjustments,
  IconBrandCss3,
  IconHeartFilled,
  IconHeartHandshake,
  IconHome,
  IconList,
  IconQuestionMark,
  IconRocket,
  TablerIconsProps,
} from '@tabler/icons-react';

export const PRODUCT_NAME = 'Mantine ContextMenu';
export const PRODUCT_DESCRIPTION =
  'Design your Mantine applications for productivity and meet your users’ expectations by enhancing your UIs with desktop-grade context menus';

export const WEB_ROOT = 'https://icflorescu.github.io';
export const WEBSITE_LINK = `${WEB_ROOT}/${process.env.PACKAGE_NAME}`;
export const V6_WEBSITE_LINK = `${WEB_ROOT}/${process.env.PACKAGE_NAME}-v6`;
export const MANTINE_DATATABLE_PRODUCT_NAME = 'Mantine DataTable';
export const MANTINE_DATATABLE_LINK = `${WEB_ROOT}/mantine-datatable/`;

export const AUTHOR_NAME = 'Ionut-Cristian Florescu';
export const AUTHOR_LINK = 'https://github.com/icflorescu';
export const REPO_LINK = `${AUTHOR_LINK}/${process.env.PACKAGE_NAME}`;
export const LICENSE_LINK = `${REPO_LINK}/blob/main/LICENSE`;
export const NPM_LINK = `https://www.npmjs.com/package/${process.env.PACKAGE_NAME}`;
export const SPONSORS_LINK = 'https://github.com/sponsors/icflorescu';
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
    href: '/styling',
    title: 'Styling',
    description: `Learn how styling works in Mantine V7 and ${PRODUCT_NAME} V7`,
    icon: IconBrandCss3,
    color: 'pink',
  },
  {
    href: '/examples/basic-usage',
    title: 'Basic usage',
    description: `Example: basic usage of ${PRODUCT_NAME}`,
  },
  {
    href: '/examples/basic-configuration',
    title: 'Basic configuration',
    description: `Example: basic ${PRODUCT_NAME} configuration`,
  },
  {
    href: '/examples/action-titles',
    title: 'Action titles',
    description: `Example: Adding titles to ${PRODUCT_NAME} items`,
  },
  {
    href: '/examples/action-icons',
    title: 'Action icons',
    description: `Example: Adding icons to ${PRODUCT_NAME} items`,
  },
  {
    href: '/examples/action-colors',
    title: 'Action colors',
    description: `Example: Setting ${PRODUCT_NAME} item colors`,
  },
  {
    href: '/examples/action-dividers',
    title: 'Action dividers',
    description: `Example: Adding dividers between ${PRODUCT_NAME} items`,
  },
  {
    href: '/examples/multiple-targets',
    title: 'Multiple targets',
    description: `Example: Adding ${PRODUCT_NAME} to multiple targets`,
  },
  {
    href: '/examples/custom-content',
    title: 'Custom content',
    description: `Example: Configuring ${PRODUCT_NAME} to show custom content`,
  },
  {
    href: '/examples/custom-styling',
    title: 'Custom styling',
    description: `Example: Learn how you can customize the styling of ${PRODUCT_NAME}`,
  },
  {
    href: '/examples/submenus',
    title: 'Submenus',
    description: `Example: How to create ${PRODUCT_NAME} submenus (nested menus)`,
  },
  {
    href: '/examples/imperative-hiding',
    title: 'Imperative hiding',
    description: `Example: How to imperatively hide a ${PRODUCT_NAME}`,
  },
  {
    href: '/type-definitions',
    title: 'Type definitions',
    description: `${PRODUCT_NAME} is written in TypeScript and its options are well documented with additional JSDoc annotations`,
    icon: IconAdjustments,
    color: 'grape',
  },
  {
    href: '/mantine-v6-support',
    title: 'Mantine V6 support',
    description: `${PRODUCT_NAME} is compatible with Mantine V7; if you're using Mantine V6, please check the old documentation website`,
    icon: IconQuestionMark,
    color: 'orange',
  },
  {
    href: '/contribute-and-support',
    title: 'Contribute and support',
    description: `Contribute and support the development of ${PRODUCT_NAME} by sponsoring or hiring its author, starring the repo, raising issues, bringing up new ideas and coming up with pull-requests`,
    icon: IconHeartFilled,
    color: 'red',
  },
  {
    href: '/hire-the-author',
    title: 'Hire the author',
    description: `Hire ${AUTHOR_NAME}, the author of ${PRODUCT_NAME}, a full-stack developer with 20+ years of experience`,
    icon: IconHeartHandshake,
    color: 'teal',
  },
  {
    href: `${REPO_LINK}/blob/main/CHANGELOG.md`,
    title: `Changelog`,
    description: `See ${PRODUCT_NAME} changelog`,
    icon: IconList,
    color: 'gray',
  },
];
