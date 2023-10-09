import { Text, ThemeIcon } from '@mantine/core';
import { FC, ReactNode } from 'react';
import classes from './HomePageFeature.module.css';

type HopePageFeatureProps = {
  icon: FC<{ size?: string | number }>;
  title: ReactNode;
  children: ReactNode;
};

export default function HomePageFeature({ icon: Icon, title, children }: HopePageFeatureProps) {
  return (
    <div className={classes.root}>
      <ThemeIcon className={classes.icon} size={48} radius="md">
        <Icon />
      </ThemeIcon>
      <div>
        <Text className={classes.title}>{title}</Text>
        <Text className={classes.description} size="sm">
          {children}
        </Text>
      </div>
    </div>
  );
}
