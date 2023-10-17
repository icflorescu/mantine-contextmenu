'use client';

import { AppShell, AppShellMain, AppShellNavbar, Container } from '@mantine/core';
import { useDisclosure, useResizeObserver } from '@mantine/hooks';
import { getNavbarButtonsInfo } from '~/lib/utils';
import classes from './AppWrapper.module.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { NavbarButton } from './NavbarButton';
import { NavbarDynamicLinkButtons } from './NavbarDynamicLinkButtons';
import { NavbarExamples } from './NavbarExamples';

export function AppWrapper({ children }: React.PropsWithChildren) {
  const [navbarExpanded, { toggle: toggleNavbar, close: collapseNavbar }] = useDisclosure(false);
  const navbarButtonsInfo = getNavbarButtonsInfo();
  const [ref] = useResizeObserver();

  return (
    <AppShell
      style={{ '--docs-footer-height': `${ref.current?.getBoundingClientRect().height || 154}px` }}
      className={classes.root}
      header={{ height: 60 }}
      navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !navbarExpanded } }}
    >
      <Header navbarExpanded={navbarExpanded} toggleNavbar={toggleNavbar} />
      <AppShellNavbar py="md" onClick={collapseNavbar}>
        {navbarButtonsInfo['before-examples'].map((item) => (
          <NavbarButton key={item.href} {...item} />
        ))}
        <NavbarExamples items={navbarButtonsInfo['examples']} />
        {navbarButtonsInfo['after-examples'].map((item) => (
          <NavbarButton key={item.href} {...item} />
        ))}
        <NavbarDynamicLinkButtons />
      </AppShellNavbar>
      <AppShellMain className={classes.main}>
        <div className={classes.content}>
          <Container>{children}</Container>
        </div>
      </AppShellMain>
      <Footer ref={ref} />
    </AppShell>
  );
}
