import { MantineColor } from '@mantine/core';
import { IconAdjustments, IconHeartHandshake, IconHome, IconLifebuoy, IconList, IconRocket } from '@tabler/icons-react';
import { FC } from 'react';

export const MIXPANEL_PROJECT_TOKEN = '5e5998d76a5f7b40fb7136c6c9aa03a1';

export const SEO_DEFAULT_TITLE = 'Mantine ContextMenu';
export const SEO_DEFAULT_DESCRIPTION = 'The missing context-menu for Mantine UI applications';
export const SEO_CREATOR = '@icflorescu';

export const HEADER_HEIGHT = 56;
export const FOOTER_HEIGHT_BELOW_NAVBAR_BREAKPOINT = 164;
export const FOOTER_HEIGHT_ABOVE_NAVBAR_BREAKPOINT = 92;
export const NAVBAR_WIDTH = 300;
export const NAVBAR_BREAKPOINT = 'md';

export const AUTHOR_LINK = 'https://github.com/icflorescu';
export const REPO_LINK = 'https://github.com/icflorescu/mantine-contextmenu';
export const LICENSE_LINK = `${REPO_LINK}/blob/main/LICENSE`;
export const NPM_LINK = 'https://www.npmjs.com/package/mantine-contextmenu';
export const SPONSOR_LINK = 'https://github.com/sponsors/icflorescu';
export const MANTINE_DATATABLE_LINK = 'https://icflorescu.github.io/mantine-datatable/';
export const MANTINE_LINK = 'https://mantine.dev';
export const NEXTJS_LINK = 'https://nextjs.org';
export const VITE_LINK = 'https://vitejs.dev';
export const REMIX_LINK = 'https://remix.run';
export const CRA_LINK = 'https://create-react-app.dev';
export const GATSBY_LINK = 'https://www.gatsbyjs.com';

export const PAGES: ({ external?: true; title: string; color?: MantineColor; description?: string } & (
  | {
      path?: string;
      icon: FC<{ size?: string | number }>;
      items?: never;
    }
  | {
      path: string;
      icon?: never;
      items: { path: string; title: string; description?: string }[];
    }
))[] = [
  { title: 'Home', description: SEO_DEFAULT_DESCRIPTION, icon: IconHome },
  {
    path: 'getting-started',
    title: 'Getting started',
    description:
      'How to install Mantine ContextMenu, its dependencies and how to import and use it in your application',
    color: 'orange',
    icon: IconRocket,
  },
  {
    path: 'examples',
    title: 'Examples',
    color: 'green',
    items: [
      { path: 'basic-usage', title: 'Basic usage', description: 'Example: basic usage' },
      {
        path: 'basic-configuration',
        title: 'Basic configuration',
        description: 'Example: basic Mantine ContextMenu configuration',
      },
      {
        path: 'action-titles',
        title: 'Action titles',
        description: 'Example: Adding titles to Mantine ContextMenu items',
      },
      {
        path: 'action-icons',
        title: 'Action icons',
        description: 'Example: Adding icons to Mantine ContextMenu items',
      },
      {
        path: 'action-colors',
        title: 'Action colors',
        description: 'Example: Setting Mantine ContextMenu items color',
      },
      {
        path: 'action-dividers',
        title: 'Action dividers',
        description: 'Example: Adding dividers between Mantine ContextMenu items',
      },
      {
        path: 'multiple-targets',
        title: 'Multiple targets',
        description: 'Example: Adding Mantine ContextMenu to multiple targets',
      },
      {
        path: 'custom-content',
        title: 'Custom content',
        description: 'Example: Condiguring Mantine ContextMenu to show custom content',
      },
      {
        path: 'styling',
        title: 'Styling',
        description: 'Example: Styling Mantine ContextMenu',
      },
    ],
  },
  {
    path: 'type-definitions',
    title: 'Type definitions',
    description:
      'Mantine ContextMenu is written in TypeScript and its options are well documented with additional JSDoc annotations',
    color: 'grape',
    icon: IconAdjustments,
  },
  {
    path: 'contribute-and-support',
    title: 'Contribute & support',
    description:
      'Contribute and support the development of Mantine ContextMenu by raising issues, bringing up new ideas, coming up with pull-requests, starring the repo or hiring its author',
    color: 'teal',
    icon: IconLifebuoy,
  },
  {
    path: 'hire-the-author',
    title: 'Hire the author',
    description: 'Hire the author of Mantine ContextMenu - a fullstack/frontend developer with 20+ years of experience',
    color: 'red',
    icon: IconHeartHandshake,
  },
  {
    external: true,
    path: `${REPO_LINK}/blob/main/CHANGELOG.md`,
    title: 'Changelog',
    color: 'gray',
    icon: IconList,
  },
];
