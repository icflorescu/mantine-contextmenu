import { Title } from '@mantine/core';
import kebabCase from 'lodash/kebabCase';
import classes from './PageSubtitle.module.css';

export type PageSubtitleProps = {
  value: string;
};

export function PageSubtitle({ value }: PageSubtitleProps) {
  return (
    <Title className={classes.root} order={3}>
      <a id={`${kebabCase(value)}`}>{value}</a>
    </Title>
  );
}
