import { MantineColor } from '@mantine/core';
import {
  IconAdjustments,
  IconBrandCss3,
  IconHeartHandshake,
  IconHome,
  IconList,
  IconQuestionMark,
  IconRocket,
  IconThumbUpFilled,
  TablerIconsProps,
} from '@tabler/icons-react';
import type { Route } from 'next';

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
  href: Route;
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
    description: `How to install ${PRODUCT_NAME} in your project, import its CSS styles, wrap your application in the provider and use the hook in your code`,
    icon: IconRocket,
    color: 'orange',
  },
  {
    href: '/styling',
    title: 'Styling',
    description: `Learn how styling works in ${PRODUCT_NAME} and how to make sure your styles are applied in the correct order`,
    icon: IconBrandCss3,
    color: 'pink',
  },
  {
    href: '/examples/basic-usage',
    title: 'Basic usage',
    description: `Example: basic usage of ${PRODUCT_NAME} - just provide an array of objects describing the menu items`,
  },
  {
    href: '/examples/basic-configuration',
    title: 'Basic configuration',
    description: `Example: basic ${PRODUCT_NAME} configuration - how to set the necessary props on the provider and override them in the hook-returned function`,
  },
  {
    href: '/examples/action-titles',
    title: 'Action titles',
    description: `Example: ${PRODUCT_NAME} automatically generates item titles based on the action IDs, but you can provide your own if you're not happy with the default ones`,
  },
  {
    href: '/examples/action-icons',
    title: 'Action icons',
    description: `Example: how to specify icons for ${PRODUCT_NAME} items by setting the icon properties on the actions`,
  },
  {
    href: '/examples/action-colors',
    title: 'Action colors',
    description: `Example: how to override the default ${PRODUCT_NAME} item colors, if you need certain actions to stand out`,
  },
  {
    href: '/examples/action-dividers',
    title: 'Action dividers',
    description: `Example: how to add dividers between ${PRODUCT_NAME} items, if you need to visually group them together`,
  },
  {
    href: '/examples/conditionally-disabling-items',
    title: 'Conditionally disabling items',
    description: `Example: how to conditionally disable ${PRODUCT_NAME} items, if they're not applicable in certain situations, without hiding them`,
  },
  {
    href: '/examples/conditionally-hiding-items',
    title: 'Conditionally hiding items',
    description: `Example: how to conditionally hide ${PRODUCT_NAME} items, instead of hiding them, if they're not applicable in certain situations`,
  },
  {
    href: '/examples/multiple-targets',
    title: 'Multiple targets',
    description: `Example: how to use the same function provided by the ${PRODUCT_NAME} hook to show different menus for different targets`,
  },
  {
    href: '/examples/custom-content',
    title: 'Custom content',
    description: `Example: how to configure ${PRODUCT_NAME} to show custom content instead of the default menu items`,
  },
  {
    href: '/examples/custom-styling',
    title: 'Custom styling',
    description: `Example: learn how you can customize the styling of ${PRODUCT_NAME} by using custom class names, style objects and functions`,
  },
  {
    href: '/examples/submenus',
    title: 'Submenus',
    description: `Example: How to nest multiple ${PRODUCT_NAME}s to create submenus, if you need to group actions together`,
  },
  {
    href: '/examples/imperative-hiding',
    title: 'Imperative hiding',
    description: `Example: ${PRODUCT_NAME} hides itself automatically when the user scrolls the page or clicks outside of it, but you can also hide it imperatively`,
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
    icon: IconThumbUpFilled,
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
    href: `${REPO_LINK}/blob/main/CHANGELOG.md` as Route,
    title: `Changelog`,
    description: `See ${PRODUCT_NAME} changelog`,
    icon: IconList,
    color: 'gray',
  },
];
