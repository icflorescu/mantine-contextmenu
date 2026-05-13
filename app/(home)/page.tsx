import { Flex, Stack, Text } from '@mantine/core';
import { IconLifebuoy, IconRocket, IconScale, IconSettings } from '@tabler/icons-react';
import type { Route } from 'next';
import {
  CRA_LINK,
  GATSBY_LINK,
  LICENSE_LINK,
  MANTINE_LINK,
  NEXTJS_LINK,
  REMIX_LINK,
  REPO_LINK,
  VITE_LINK,
} from '~/app/config';
import { ExternalLink } from '~/components/ExternalLink';
import { InternalLink } from '~/components/InternalLink';
import { getFirstExampleRoute, getRouteMetadata } from '~/lib/utils';
import { Feature } from './Feature';
import { HeroImage } from './HeroImage';
import { HomePageActions } from './HomePageActions';
import { HomePageSubtitle } from './HomePageSubtitle';
import { HomePageTitle } from './HomePageTitle';

const PATH: Route = '/';
export const metadata = getRouteMetadata(PATH);

const { href: firstExampleHref } = getFirstExampleRoute();

export default function HomePage() {
  return (
    <Stack gap="xl">
      <HomePageTitle />
      <HomePageSubtitle />
      <HeroImage />
      <Text component="div">
        Craft your applications for productivity and meet your users’ expectations by enhancing your UIs with
        desktop-grade,{' '}
        <ExternalLink to="https://bundlephobia.com/package/mantine-contextmenu">lightweight</ExternalLink> yet
        fully-featured context menus that respect the Mantine color scheme out of the box.
      </Text>
      <Flex
        direction={{ base: 'column', xs: 'row' }}
        gap="xl"
        wrap={{ base: 'nowrap', xs: 'wrap' }}
        mb={{ base: 0, md: 'sm' }}
      >
        <Feature icon={IconSettings} title="Lightweight yet customizable">
          Features a <InternalLink to="/examples/basic-usage">succinct API</InternalLink>, respects the Mantine dark
          mode and can be{' '}
          <InternalLink to="/examples/custom-content">easily customized by providing your own content</InternalLink>{' '}
          instead of using the default generated menu items
        </Feature>
        <Feature icon={IconLifebuoy} title="Typescript based">
          The entire codebase is <ExternalLink to={REPO_LINK}>written in TypeScript</ExternalLink>, options are{' '}
          <InternalLink to="/type-definitions">well typed</InternalLink> and documented with JSDoc, so you can build
          type safe applications with confidence
        </Feature>
        <Feature icon={IconScale} title="Free and open-source">
          This package is released under the <ExternalLink to={LICENSE_LINK}>MIT license</ExternalLink>, same as{' '}
          <ExternalLink to={MANTINE_LINK}>Mantine</ExternalLink>, so you can freely build fantastic data-rich
          applications with it
        </Feature>
        <Feature icon={IconRocket} title="Use anywhere">
          You can use it in any modern React framework supported by{' '}
          <ExternalLink to={MANTINE_LINK}>Mantine</ExternalLink>, such as{' '}
          <ExternalLink to={NEXTJS_LINK}>Next.js</ExternalLink>, <ExternalLink to={VITE_LINK}>Vite</ExternalLink>,{' '}
          <ExternalLink to={CRA_LINK}>Create React App</ExternalLink>,{' '}
          <ExternalLink to={REMIX_LINK}>Remix</ExternalLink> or <ExternalLink to={GATSBY_LINK}>Gatsby</ExternalLink>
        </Feature>
      </Flex>
      <HomePageActions firstExampleHref={firstExampleHref} />
    </Stack>
  );
}
