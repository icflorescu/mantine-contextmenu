import { Group, Text, useMantineTheme } from '@mantine/core';
import type { Ref } from 'react';
import {
  AUTHOR_LINK,
  AUTHOR_NAME,
  LICENSE_LINK,
  MANTINE_DATATABLE_LINK,
  MANTINE_DATATABLE_PRODUCT_NAME,
  NPM_LINK,
  REPO_LINK,
  SPONSORS_LINK,
} from '~/app/config';
import { ExternalLink } from './ExternalLink';
import classes from './Footer.module.css';

export type FooterProps = {
  ref: Ref<HTMLDivElement>;
};

export function Footer({ ref }: FooterProps) {
  const { colors } = useMantineTheme();
  const color = colors.blue[7].substring(1);
  const badgeParams = `?style=flat&color=${color}`;
  return (
    <footer ref={ref} className={classes.root}>
      <Group className={classes.imageLinks} gap="xs">
        <ExternalLink className={classes.imageLink} to={LICENSE_LINK} rel="license">
          <img src={`https://img.shields.io/npm/l/${process.env.PACKAGE_NAME}.svg${badgeParams}`} alt="MIT License" />
        </ExternalLink>
        <ExternalLink className={classes.imageLink} to={SPONSORS_LINK}>
          <img
            src={`https://img.shields.io/static/v1?label=github&message=sponsor&color=${color}`}
            alt="Sponsor the author"
          />
        </ExternalLink>
      </Group>
      <Text size="sm" ta="center">
        Built by <ExternalLink to={AUTHOR_LINK}>{AUTHOR_NAME}</ExternalLink>, the author of{' '}
        <ExternalLink to={MANTINE_DATATABLE_LINK}>{MANTINE_DATATABLE_PRODUCT_NAME}</ExternalLink>.
        <br />
        Please <ExternalLink to={SPONSORS_LINK}>sponsor my work</ExternalLink> if you find it useful.
      </Text>
      <Group className={classes.imageLinks} gap="xs">
        <ExternalLink className={classes.imageLink} to={REPO_LINK}>
          <img
            src={`https://img.shields.io/github/stars/icflorescu/${process.env.PACKAGE_NAME}${badgeParams}`}
            alt="GitHub Stars"
          />
        </ExternalLink>
        <ExternalLink className={classes.imageLink} to={NPM_LINK}>
          <img
            src={`https://img.shields.io/npm/dm/${process.env.PACKAGE_NAME}.svg${badgeParams}`}
            alt="NPM Downloads"
          />
        </ExternalLink>
      </Group>
    </footer>
  );
}
