import { Group, Stack, Text } from '@mantine/core';
import { IconDiscountCheck, IconExternalLink, IconInfoCircle } from '@tabler/icons-react';
import clsx from 'clsx';
import { MANTINE_DATATABLE_LINK, MANTINE_DATATABLE_PRODUCT_NAME, MANTINE_LINK, V6_WEBSITE_LINK } from '~/app/config';
import { ExternalLink } from '~/components/ExternalLink';
import classes from './HomePageSubtitle.module.css';

export function HomePageSubtitle() {
  return (
    <Stack gap={4}>
      <Group gap={8} align="flex-start" wrap="nowrap">
        <IconDiscountCheck className={clsx(classes.leftIcon, classes.iconAuthor)} />
        <Text size="sm">
          built by the author of{' '}
          <ExternalLink className="nowrap" to={MANTINE_DATATABLE_LINK}>
            {MANTINE_DATATABLE_PRODUCT_NAME} <IconExternalLink className={classes.linkIcon} />
          </ExternalLink>
        </Text>
      </Group>
      <Group gap={8} align="flex-start" wrap="nowrap">
        <IconDiscountCheck className={clsx(classes.leftIcon, classes.iconCompat)} />
        <Text size="sm">
          compatible with{' '}
          <ExternalLink className="nowrap" to={MANTINE_LINK}>
            Mantine V8.x <IconExternalLink className={classes.linkIcon} />
          </ExternalLink>
        </Text>
      </Group>
      <Group gap={8} align="flex-start" wrap="nowrap">
        <IconInfoCircle className={clsx(classes.leftIcon, classes.iconOldVersion)} />
        <Text size="sm">
          old version compatible with <ExternalLink to="https://v6.mantine.dev">Mantine V6</ExternalLink>{' '}
          <span className="nowrap">
            available{' '}
            <ExternalLink className="nowrap" to={V6_WEBSITE_LINK}>
              here <IconExternalLink className={classes.linkIcon} />
            </ExternalLink>
          </span>
        </Text>
      </Group>
    </Stack>
  );
}
