import { AppShellNavbar, Box, ScrollArea } from '@mantine/core';
import { getNavbarButtonsInfo } from '~/lib/utils';
import { NavbarButton } from './NavbarButton';
import { NavbarDynamicLinkButtons } from './NavbarDynamicLinkButtons';
import { NavbarExamples } from './NavbarExamples';

export type NavbarProps = {
  onClick: () => void;
};

export function Navbar({ onClick }: NavbarProps) {
  const buttonsInfo = getNavbarButtonsInfo();

  return (
    <AppShellNavbar onClick={onClick}>
      <ScrollArea>
        <Box py="md">
          {buttonsInfo['before-examples'].map((item) => (
            <NavbarButton key={item.href} {...item} />
          ))}
          <NavbarExamples items={buttonsInfo['examples']} />
          {buttonsInfo['after-examples'].map((item) => (
            <NavbarButton key={item.href} {...item} />
          ))}
          <NavbarDynamicLinkButtons />
        </Box>
      </ScrollArea>
    </AppShellNavbar>
  );
}
