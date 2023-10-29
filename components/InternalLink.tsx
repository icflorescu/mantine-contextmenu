import { Anchor } from '@mantine/core';
import type { Route } from 'next';
import Link from 'next/link';

export type InternalLinkProps = React.PropsWithChildren<{
  className?: string;
  to: Route;
  hash?: string;
}>;

export function InternalLink({ className, to, hash, children }: InternalLinkProps) {
  let href = to;
  if (hash) href += `#${hash}`;
  return (
    <Anchor className={className} inherit component={Link} href={href as Route}>
      {children}
    </Anchor>
  );
}
