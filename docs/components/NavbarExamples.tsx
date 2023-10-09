import { Box, Collapse } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { PRODUCT_NAME } from '~/app/config';
import { NavbarButton, NavbarButtonProps } from './NavbarButton';
import classes from './NavbarExamples.module.css';

const EXPANSION_STATE_STORAGE_KEY = 'mantine-contextmenu-examples-expanded';

export type NavbarExamplesProps = {
  items: NavbarButtonProps[];
};

export function NavbarExamples({ items }: NavbarExamplesProps) {
  const [expanded, { toggle, open }] = useDisclosure(false, {
    onOpen: () => localStorage.setItem(EXPANSION_STATE_STORAGE_KEY, 'true'),
    onClose: () => localStorage.removeItem(EXPANSION_STATE_STORAGE_KEY),
  });

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith('/examples/') || localStorage.getItem(EXPANSION_STATE_STORAGE_KEY)) {
      open();
    }
  }, [open, pathname]);

  return (
    <>
      <NavbarButton
        title="Examples"
        description={`${PRODUCT_NAME} usage examples`}
        color="green"
        onClick={(e) => {
          e.stopPropagation();
          toggle();
        }}
        expanded={expanded}
      />
      <Collapse in={expanded} pos="relative">
        <Box bg="green" className={classes.line} />
        {items.map((item) => (
          <NavbarButton key={item.href} {...item} />
        ))}
      </Collapse>
    </>
  );
}
