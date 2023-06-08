import { Text, createStyles } from '@mantine/core';
import { IconDiscountCheck, IconExternalLink } from '@tabler/icons-react';
import ExternalLink from '~/components/ExternalLink';
import { MANTINE_DATATABLE_LINK } from '~/config';

const useStyles = createStyles((theme) => ({
  root: {
    marginBottom: '2em',
  },
  checkIcon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.green[6],
    verticalAlign: -4,
  },
  link: {
    '&:hover': {
      textDecoration: 'none',
      borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.blue[7] : theme.colors.blue[5]}`,
    },
  },
  linkIcon: {
    verticalAlign: -2,
  },
}));

export function HomePageAuthor() {
  const { classes } = useStyles();
  return (
    <Text className={classes.root} color="dimmed" size="sm">
      <IconDiscountCheck className={classes.checkIcon} size={18} /> built by the author of{' '}
      <ExternalLink className={classes.link} to={MANTINE_DATATABLE_LINK}>
        Mantine DataTable <IconExternalLink className={classes.linkIcon} size={14} />
      </ExternalLink>
    </Text>
  );
}
