import { Box, Collapse, rgba, useMantineTheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { IconChevronRight } from '@tabler/icons-react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AppNavbarButton, { AppNavbarButtonDisplayProps } from './AppNavbarButton';
import classes from './AppNavbarLinkList.module.css';
import AppNavbarLinkListItem from './AppNavbarLinkListItem';

type AppNavbarLinkList = Omit<AppNavbarButtonDisplayProps, 'icon'> & {
  items: { title: string; description?: string; to: string }[];
};

export default function AppNavbarLinkList({ color = 'blue', title, items }: AppNavbarLinkList) {
  const localStorageKey = `${title}-navlinks-open`;

  const [open, setOpen] = useLocalStorage({
    key: localStorageKey,
    defaultValue: false,
    getInitialValueInEffect: true,
  });

  const [connectorVisible, setConnectorVisible] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (open) {
      timeout = setTimeout(() => {
        setConnectorVisible(true);
      }, 200);
    } else {
      setConnectorVisible(false);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [open]);

  const { asPath } = useRouter();

  useEffect(() => {
    if (items.map((item) => item.to).includes(asPath)) {
      setOpen(true);
    }
  }, [asPath, items, localStorageKey, setOpen]);

  const { colors } = useMantineTheme();

  return (
    <>
      <AppNavbarButton
        icon={IconChevronRight}
        rotateIcon={open}
        color={color}
        title={title}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
      />
      <Collapse className={classes.items} in={open || false} transitionDuration={200}>
        <Box
          style={{ '--component-bg-color': rgba(colors[color][6], 0.5) }}
          className={clsx(classes.connector, { [classes.connectorVisible]: connectorVisible })}
        />
        {items.map(({ title, description, to }) => (
          <AppNavbarLinkListItem
            key={to}
            title={title}
            description={description}
            to={to}
            color={color}
            active={to === asPath}
          />
        ))}
      </Collapse>
    </>
  );
}
