import { Anchor } from '@mantine/core';
import { ReactNode } from 'react';

type ExternalLinkProps = {
  className?: string;
  to: string;
  rel?: string;
  children: ReactNode;
};

export default function ExternalLink({ className, to, rel, children }: ExternalLinkProps) {
  return (
    <Anchor className={className} href={to} target="_blank" rel={rel ?? 'noreferrer'}>
      {children}
    </Anchor>
  );
}
