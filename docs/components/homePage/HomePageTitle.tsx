import { Title, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    marginBottom: '.75em',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[8],
    fontSize: 28,
    '@media (min-width: 300px)': {
      fontSize: 32,
    },
    '@media (min-width: 360px)': {
      fontSize: 38,
    },
    '@media (min-width: 420px)': {
      fontSize: 46,
    },
    [`@media (min-width: ${theme.breakpoints.xs})`]: {
      marginTop: '.5em',
      lineHeight: 1.15,
      fontSize: 52,
    },
    [`@media (min-width: ${theme.breakpoints.sm})`]: {
      fontSize: 64,
    },
    [`@media (min-width: ${theme.breakpoints.md})`]: {
      marginTop: '.66em',
    },
  },
  gradientText: {
    background: theme.fn.gradient({ from: theme.colors.blue[6], to: theme.colors.cyan[6] }),
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
}));

export default function HomePageTitle() {
  const { classes } = useStyles();
  return (
    <Title className={classes.root} order={2}>
      A context menu
      <br />
      for your Mantine
      <br />
      <span className={classes.gradientText}>applications.</span>
    </Title>
  );
}
