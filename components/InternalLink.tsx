import { Anchor } from '@mantine/core';
import { kebabCase } from 'lodash';
import type { Route } from 'next';
import Link from 'next/link';

export type InternalLinkProps = React.PropsWithChildren<{
  className?: string;
  to: Route;
  subtitle?: string;
}>;

export function InternalLink({ className, to, subtitle, children }: InternalLinkProps) {
  let href = to;
  if (subtitle) href += `/#${kebabCase(subtitle)}`;
  return (
    <Anchor className={className} inherit component={Link} href={href as Route}>
      {children}
    </Anchor>
  );
}
