import { Title } from '@mantine/core';
import { getRouteTitle } from '~/lib/utils';
import classes from './PageTitle.module.css';

export type PageTitleProps = {
  of: string;
};

export function PageTitle({ of }: PageTitleProps) {
  return (
    <Title className={classes.root} order={2}>
      {getRouteTitle(of)}
    </Title>
  );
}
