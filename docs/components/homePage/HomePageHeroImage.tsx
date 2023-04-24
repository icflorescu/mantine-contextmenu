import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    overflow: 'hidden',
    borderRadius: theme.radius.sm,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
    position: 'relative',
  },
  rightShadow: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 10,
    background: `linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent)`,
  },
}));

export default function HomePageHeroImage() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <img src={`${process.env.BASE_PATH}/mantine-contextmenu.png`} alt="Mantine ContextMenu" />
      <div className={classes.rightShadow} />
    </div>
  );
}
