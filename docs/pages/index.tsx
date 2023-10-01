import { Container, Text, createStyles } from '@mantine/core';
import { IconLifebuoy, IconRocket, IconScale, IconSettings } from '@tabler/icons-react';
import ExternalLink from '~/components/ExternalLink';
import InternalLink from '~/components/InternalLink';
import HomePageButtons from '~/components/homePage/HomePageButtons';
import HomePageFeature from '~/components/homePage/HomePageFeature';
import HomePageHeroImage from '~/components/homePage/HomePageHeroImage';
import { HomePageSubtitle } from '~/components/homePage/HomePageSubtitle';
import HomePageTitle from '~/components/homePage/HomePageTitle';
import {
  CRA_LINK,
  GATSBY_LINK,
  LICENSE_LINK,
  MANTINE_LINK,
  NEXTJS_LINK,
  REMIX_LINK,
  REPO_LINK,
  VITE_LINK,
} from '~/config';

const useStyles = createStyles((theme) => ({
  root: {
    maxWidth: 640,
    margin: '0 auto',
  },
  subtitle: {
    margin: '1em 0 2em',
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[8],
    [`@media (min-width: ${theme.breakpoints.xs})`]: {
      fontSize: 20,
    },
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      fontSize: 24,
    },
  },
  features: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.lg,
    columnGap: `calc(${theme.spacing.lg} * 2)`,
    [`@media (min-width: ${theme.breakpoints.xs})`]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      rowGap: `calc(${theme.spacing.lg} * 2)`,
    },
  },
}));

export default function Page() {
  const { classes } = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        <HomePageTitle />
        <HomePageSubtitle />
        <HomePageHeroImage />
        <Text className={classes.subtitle}>
          Design your applications for productivity and meet your users’ expectations by enhancing your UIs with
          desktop-grade context menus.
        </Text>
        <div className={classes.features}>
          <HomePageFeature icon={IconSettings} title="Lightweight yet customizable">
            Features a <InternalLink to="/examples/basic-usage">succinct API</InternalLink>, respects the Mantine dark
            mode and can be{' '}
            <InternalLink to="/examples/custom-content">easily customized by providing your own content</InternalLink>{' '}
            instead of using the default generated menu items
          </HomePageFeature>
          <HomePageFeature icon={IconLifebuoy} title="Typescript based">
            The entire codebase is <ExternalLink to={REPO_LINK}>written in TypeScript</ExternalLink>, options are{' '}
            <InternalLink to="/type-definitions">well typed</InternalLink> and documented with JSDoc, so you can build
            type safe applications with confidence
          </HomePageFeature>
          <HomePageFeature icon={IconScale} title="Free and open-source">
            This package is released under the <ExternalLink to={LICENSE_LINK}>MIT license</ExternalLink>, same as{' '}
            <ExternalLink to={MANTINE_LINK}>Mantine library</ExternalLink>, so you can freely build fantastic data-rich
            applications with it
          </HomePageFeature>
          <HomePageFeature icon={IconRocket} title="Use anywhere">
            You can use it in any modern React framework supported by{' '}
            <ExternalLink to={MANTINE_LINK}>Mantine</ExternalLink>, such as{' '}
            <ExternalLink to={NEXTJS_LINK}>Next.js</ExternalLink>, <ExternalLink to={VITE_LINK}>Vite</ExternalLink>,{' '}
            <ExternalLink to={CRA_LINK}>Create React App</ExternalLink>,{' '}
            <ExternalLink to={REMIX_LINK}>Remix</ExternalLink> or <ExternalLink to={GATSBY_LINK}>Gatsby</ExternalLink>
          </HomePageFeature>
        </div>
        <HomePageButtons />
      </div>
    </Container>
  );
}
