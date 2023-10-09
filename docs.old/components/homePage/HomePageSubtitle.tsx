import { Text } from '@mantine/core';
import { IconDiscountCheck, IconExclamationCircle, IconExternalLink } from '@tabler/icons-react';
import clsx from 'clsx';
import ExternalLink from '~/components/ExternalLink';
import { MANTINE_DATATABLE_LINK } from '~/config';
import InternalLink from '../InternalLink';
import classes from './HomePageSubtitle.module.css';

export function HomePageSubtitle() {
  return (
    <div className={classes.root}>
      <Text className={classes.paragraph} c="dimmed" size="sm">
        <IconDiscountCheck className={clsx(classes.startIcon, classes.checkIcon)} size={18} /> built by the author of{' '}
        <ExternalLink className={classes.link} to={MANTINE_DATATABLE_LINK}>
          Mantine DataTable <IconExternalLink className={classes.linkIcon} size={14} />
        </ExternalLink>
        <br />
      </Text>
      <Text className={classes.paragraph} c="dimmed" size="sm">
        <IconExclamationCircle className={clsx(classes.startIcon, classes.exclamationIcon)} size={18} /> supports{' '}
        <ExternalLink className={classes.link} to="https://v6.mantine.dev/">
          Mantine v6.x <IconExternalLink className={classes.linkIcon} size={14} />
        </ExternalLink>
        ; support for Mantine v7.x <InternalLink to="/mantine-v7-support">is on the roadmap</InternalLink>.
      </Text>
    </div>
  );
}
