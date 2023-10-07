import { ActionIcon, Button, Group, SegmentedControl, Text, useMantineColorScheme } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconBrandNpm, IconHeartFilled, IconMenu2, IconMoon, IconSun } from '@tabler/icons-react';
import clsx from 'clsx';
import { NPM_LINK, REPO_LINK, SPONSOR_LINK } from '~/config';
import classes from './AppHeader.module.css';
import AppHeaderColorSchemeLabel from './AppHeaderColorSchemeLabel';
import GitHubIcon from './GitHubIcon';
import Logo from './Logo';
import { NpmDownloads } from './NpmDownloads';

const REPO_LINK_ARIA_LABEL = 'View Mantine DataTable source code on GitHub';
const SPONSORS_LINK_ARIA_LABEL = 'Sponsor Mantine DataTable project on GitHub Sponsors';

export default function AppHeader({
  navbarVisible,
  onShowNavbarClick,
}: {
  navbarVisible: boolean;
  onShowNavbarClick: () => void;
}) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const ColorSchemeIcon = colorScheme === 'dark' ? IconSun : IconMoon;
  const [{ y: windowScrollY }] = useWindowScroll();

  return (
    <Group className={clsx(classes.root, { [classes.windowScrolledOnY]: windowScrollY !== 0 })} px="sm" gap="xs">
      <Group gap="xs">
        <IconMenu2 className={classes.menuIcon} strokeWidth={1} onClick={onShowNavbarClick} />
        <Group gap="xs" className={classes.buttons}>
          <Button
            classNames={{
              root: classes.button,
              section: classes.buttonIcon,
              label: classes.buttonLabel,
            }}
            size="xs"
            variant="default"
            leftSection={<GitHubIcon size={16} />}
            component="a"
            href={REPO_LINK}
            target="_blank"
            aria-label={REPO_LINK_ARIA_LABEL}
          >
            Source code
          </Button>
          <Button
            classNames={{
              root: classes.button,
              section: clsx(classes.buttonIcon, classes.buttonIconSponsor),
              label: classes.buttonLabel,
            }}
            size="xs"
            variant="default"
            leftSection={<IconHeartFilled size={18} />}
            component="a"
            href={SPONSOR_LINK}
            target="_blank"
            aria-label={SPONSORS_LINK_ARIA_LABEL}
          >
            Sponsor
          </Button>
          <Button
            classNames={{
              root: classes.button,
              section: clsx(classes.buttonIcon),
              label: classes.buttonLabel,
            }}
            size="xs"
            variant="default"
            leftSection={<IconBrandNpm color="#CC3534" />}
            component="a"
            href={NPM_LINK}
            target="_blank"
            aria-label="View Mantine DataTable on npm"
          >
            <NpmDownloads />
          </Button>
        </Group>
        <Logo className={clsx(classes.logo, { [classes.logoWithNavbarVisible]: navbarVisible })} insideHeader />
      </Group>
      <Group className={classes.actionIcons} gap="xs">
        <ActionIcon
          className={classes.actionIcon}
          variant="outline"
          component="a"
          href={REPO_LINK}
          target="_blank"
          aria-label={REPO_LINK_ARIA_LABEL}
        >
          <GitHubIcon size={16} />
        </ActionIcon>
        <ActionIcon
          className={clsx(classes.actionIcon, classes.actionIconRed)}
          variant="outline"
          component="a"
          href={SPONSOR_LINK}
          target="_blank"
          aria-label={SPONSORS_LINK_ARIA_LABEL}
        >
          <IconHeartFilled size={16} />
        </ActionIcon>
        <ActionIcon
          aria-label="Toggle color scheme"
          className={classes.actionIcon}
          variant="outline"
          onClick={() => toggleColorScheme()}
        >
          <ColorSchemeIcon size={16} />
        </ActionIcon>
      </Group>
      <Group className={classes.colorSchemeSegmentedControlContainer} gap="xs">
        <Text size="xs" fw={500}>
          Switch theme
        </Text>
        <SegmentedControl
          size="xs"
          className={classes.colorSchemeSegmentedControl}
          value={colorScheme}
          onChange={() => toggleColorScheme()}
          data={[
            { value: 'light', label: <AppHeaderColorSchemeLabel value="Light" /> },
            { value: 'dark', label: <AppHeaderColorSchemeLabel value="Dark" /> },
          ]}
        />
      </Group>
    </Group>
  );
}
