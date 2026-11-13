import { Anchor } from '@mantine/core';

export type ExternalLinkProps = React.PropsWithChildren<{
  className?: string;
  to: string;
  rel?: string;
  tabIndex?: number;
}>;

export function ExternalLink({ className, to, rel, tabIndex, children }: ExternalLinkProps) {
  return (
    <Anchor className={className} inherit href={to} target="_blank" rel={rel || 'noreferrer'} tabIndex={tabIndex}>
      {children}
    </Anchor>
  );
}
