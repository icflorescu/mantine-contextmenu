import { Button, Flex, Stack, Text } from '@mantine/core';
import { IconBrandGithub, IconLifebuoy, IconRocket, IconScale, IconSettings } from '@tabler/icons-react';
import clsx from 'clsx';
import Link from 'next/link';
import {
  CRA_LINK,
  GATSBY_LINK,
  LICENSE_LINK,
  MANTINE_LINK,
  NEXTJS_LINK,
  PRODUCT_NAME,
  REMIX_LINK,
  REPO_LINK,
  VITE_LINK,
} from '~/app/config';
import { ExternalLink } from '~/components/ExternalLink';
import { InternalLink } from '~/components/InternalLink';
import { getFirstExampleRoute, getRouteMetadata } from '~/lib/utils';
import { Feature } from './Feature';
import { HeroImage } from './HeroImage';
import { HomePageSubtitle } from './HomePageSubtitle';
import { HomePageTitle } from './HomePageTitle';
import classes from './page.module.css';

const PATH = '/';
export const metadata = getRouteMetadata(PATH);

const { href: firstExampleHref, title: firstExampleTitle } = getFirstExampleRoute();

export default function HomePage() {
  return (
    <Stack gap="xl" maw={642} mx="auto">
      <HomePageTitle />
      <HomePageSubtitle />
      <HeroImage />
      <Text component="div">
        Design your applications for productivity and meet your users’ expectations by enhancing your UIs with
        desktop-grade context menus.
      </Text>
      <Flex direction={{ base: 'column', xs: 'row' }} gap="xl" wrap={{ base: 'nowrap', xs: 'wrap' }}>
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
      <Flex wrap="wrap" gap="md">
        <Button
          classNames={{ root: clsx(classes.button, classes.buttonHalf), label: classes.buttonLabel }}
          size="md"
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan' }}
          component={Link}
          href="/getting-started"
          aria-label={`Get started with ${PRODUCT_NAME}`}
          leftSection={<IconRocket />}
        >
          Get started
        </Button>
        <Button
          classNames={{ root: clsx(classes.button, classes.buttonHalf), label: classes.buttonLabel }}
          size="md"
          variant="gradient"
          gradient={{ from: 'gray.6', to: 'gray.5' }}
          component="a"
          href="/get-started"
          target="_blank"
          aria-label={`View the source code of ${PRODUCT_NAME} on GitHub`}
          leftSection={<IconBrandGithub />}
        >
          View code
        </Button>
        <Button
          classNames={{ root: classes.button, label: classes.buttonLabel }}
          size="md"
          variant="gradient"
          gradient={{ from: 'green.7', to: 'green.6' }}
          component={Link}
          href={firstExampleHref}
          aria-label={firstExampleTitle}
          leftSection={<IconRocket />}
        >
          Learn by example
        </Button>
      </Flex>
    </Stack>
  );
}
