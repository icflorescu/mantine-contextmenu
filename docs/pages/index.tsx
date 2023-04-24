import { Container, Text, createStyles } from '@mantine/core';
import { IconLifebuoy, IconRocket, IconScale, IconSettings } from '@tabler/icons-react';
import HomePageButtons from '~/components/homePage/HomePageButtons';
import HomePageFeature from '~/components/homePage/HomePageFeature';
import HomePageHeroImage from '~/components/homePage/HomePageHeroImage';
import HomePageTitle from '~/components/homePage/HomePageTitle';

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
        <HomePageHeroImage />
        <Text className={classes.subtitle}>
          Mantine ContextMenu brings right-click functionality to your user interfaces.
        </Text>
        <div className={classes.features}>
          <HomePageFeature icon={IconSettings} title="Lightweight yet customizable">
            Features a succinct API, respects the Mantine dark mode and can be easily customized by providing your own
            content instead of using the default generated menu items
          </HomePageFeature>
          <HomePageFeature icon={IconLifebuoy} title="Typescript based">
            The entire codebase is written in TypeScript, options are well typed and documented with JSDoc, so you can
            build type safe applications with confidence
          </HomePageFeature>
          <HomePageFeature icon={IconScale} title="Free and open-source">
            This package is released under the MIT license, same as Mantine, so you can freely build fantastic data-rich
            applications with it
          </HomePageFeature>
          <HomePageFeature icon={IconRocket} title="Use anywhere">
            You can use it in any modern React framework supported by Mantine, such as Next.js, Vite, Create React App,
            Remix or Gatsby
          </HomePageFeature>
        </div>
        <HomePageButtons />
      </div>
    </Container>
  );
}
