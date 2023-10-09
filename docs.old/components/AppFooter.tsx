import { Group, Text, useMantineTheme } from '@mantine/core';
import { AUTHOR_LINK, LICENSE_LINK, MANTINE_DATATABLE_LINK, NPM_LINK, REPO_LINK, SPONSOR_LINK } from '~/config';
import classes from './AppFooter.module.css';
import ExternalLink from './ExternalLink';

export default function AppFooter() {
  const { colors } = useMantineTheme();
  const color = colors.blue[7].substring(1);
  const badgeParams = `?style=flat&color=${color}`;
  return (
    <div className={classes.root}>
      <Group gap="xs">
        <ExternalLink to={LICENSE_LINK} rel="license">
          <img src={`https://img.shields.io/npm/l/mantine-contextmenu.svg${badgeParams}`} alt="MIT License" />
        </ExternalLink>
        <ExternalLink to={SPONSOR_LINK}>
          <img
            src={`https://img.shields.io/static/v1?label=github&message=sponsor&color=${color}`}
            alt="Sponsor the author"
          />
        </ExternalLink>
      </Group>
      <Text size="sm" ta="center">
        Built by <ExternalLink to={AUTHOR_LINK}>Ionut-Cristian Florescu</ExternalLink>, the author of{' '}
        <ExternalLink to={MANTINE_DATATABLE_LINK}>Mantine DataTable</ExternalLink>.
        <br />
        Please <ExternalLink to={SPONSOR_LINK}>sponsor my work</ExternalLink> if you find it useful.
      </Text>
      <Group gap="xs">
        <ExternalLink to={REPO_LINK}>
          <img
            src={`https://img.shields.io/github/stars/icflorescu/mantine-contextmenu${badgeParams}`}
            alt="GitHub Stars"
          />
        </ExternalLink>
        <ExternalLink to={NPM_LINK}>
          <img src={`https://img.shields.io/npm/dm/mantine-contextmenu.svg${badgeParams}`} alt="NPM Downloads" />
        </ExternalLink>
      </Group>
    </div>
  );
}
