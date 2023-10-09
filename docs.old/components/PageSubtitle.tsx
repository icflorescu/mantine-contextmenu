import { MantineSpacing, Title } from '@mantine/core';
import kebabCase from 'lodash/kebabCase';
import classes from './PageSubtitle.module.css';

export default function PageSubtitle({
  value,
  mt = 'xl',
  mb = 'xl',
}: {
  value: string;
  mt?: MantineSpacing;
  mb?: MantineSpacing;
}) {
  return (
    <Title className={classes.root} mt={mt} mb={mb} order={3}>
      <a id={`${kebabCase(value)}`}>{value}</a>
    </Title>
  );
}
