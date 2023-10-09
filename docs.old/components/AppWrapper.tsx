import { Box, lighten, useMantineTheme } from '@mantine/core';
import { ReactNode, useState } from 'react';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import AppNavbar from './AppNavbar';
import classes from './AppWrapper.module.css';

export default function AppWrapper({ children }: { children: ReactNode }) {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const { colors } = useMantineTheme();

  return (
    <>
      <AppNavbar visible={navbarVisible} onHideClick={() => setNavbarVisible(false)} />
      <AppHeader navbarVisible={navbarVisible} onShowNavbarClick={() => setNavbarVisible(true)} />
      <Box
        style={{
          '--component-bg-color-light': lighten(colors.gray[0], 0.9),
          '--component-bg-color-dark': colors.dark[8],
          '--component-after-bg-color-light': `linear-gradient(rgba(0, 0, 0, 0.015), rgba(0, 0, 0, 0) 30%)`,
          '--component-after-bg-color-dark': `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0) 30%)`,
        }}
        className={classes.main}
      >
        {children}
      </Box>
      <AppFooter />
    </>
  );
}
