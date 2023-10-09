import { Group, lighten, Text, UnstyledButton, useMantineTheme } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import clsx from 'clsx';
import Link from 'next/link';
import { getPageNavigation } from '~/lib/page';
import classes from './PageNavigation.module.css';

export default function PageNavigation({ of }: { of: string }) {
  const { back, next } = getPageNavigation(of);
  const { colors } = useMantineTheme();

  return (
    <div className={classes.root}>
      <UnstyledButton
        style={{
          '--component-button-bg-color-light': lighten(colors.gray[1], 0.5),
          '--component-button-bg-color-dark': colors.dark[1],
        }}
        className={clsx(classes.button, { [classes.withoutNext]: !next })}
        component={Link}
        href={`/${back.path}`}
        aria-label={back.description || 'Go back'}
        rel="prev"
      >
        <Group px="sm" py="xs" justify="space-between" wrap="nowrap">
          <IconArrowLeft />
          <div>
            <Text fw={500} ta="right">
              Go back
            </Text>
            <Text lineClamp={1} size="sm" c="dimmed" ta="right">
              {back.title}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
      {next && (
        <UnstyledButton
          className={classes.button}
          component={Link}
          href={`/${next.path}`}
          aria-label={next.description || 'Up next'}
          rel="next"
        >
          <Group px="sm" py="xs" justify="space-between" wrap="nowrap">
            <div>
              <Text fw={500}>Up next</Text>
              <Text lineClamp={1} size="sm" c="dimmed">
                {next.title}
              </Text>
            </div>
            <IconArrowRight />
          </Group>
        </UnstyledButton>
      )}
    </div>
  );
}
