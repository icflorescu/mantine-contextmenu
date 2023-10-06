import { Button, Group } from '@mantine/core';
import { IconBulb, IconRocket } from '@tabler/icons-react';
import clsx from 'clsx';
import Link from 'next/link';
import GitHubIcon from '~/components/GitHubIcon';
import { REPO_LINK } from '~/config';
import { getFirstExamplePagePath } from '~/lib/page';
import classes from './HomePageButtons.module.css';

export default function HomePageButtons() {
  return (
    <Group className={classes.root}>
      <Button
        classNames={{ root: classes.button, label: classes.buttonLabel }}
        size="md"
        variant="gradient"
        gradient={{ from: 'blue', to: 'cyan' }}
        leftSection={<IconRocket />}
        component={Link}
        href="/getting-started"
      >
        Get started
      </Button>
      <Button
        classNames={{ root: classes.button, label: classes.buttonLabel }}
        size="md"
        variant="gradient"
        gradient={{ from: 'gray.6', to: 'gray.5' }}
        leftSection={<GitHubIcon size={20} />}
        component="a"
        href={REPO_LINK}
        target="_blank"
      >
        View code
      </Button>
      <Button
        classNames={{ root: clsx(classes.button, classes.examplesButton), label: classes.buttonLabel }}
        size="md"
        variant="gradient"
        gradient={{ from: 'green.7', to: 'green.6' }}
        leftSection={<IconBulb />}
        component={Link}
        href={getFirstExamplePagePath()}
      >
        Learn by example
      </Button>
    </Group>
  );
}
