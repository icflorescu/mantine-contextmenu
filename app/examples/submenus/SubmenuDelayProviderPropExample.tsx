import { ContextMenuProvider } from '__PACKAGE__';

export function SubmenuDelayProviderPropExample({ children }: { children: React.ReactNode }) {
  // example-start
  return <ContextMenuProvider submenuDelay={1000}>{children}</ContextMenuProvider>;
  // example-end
}
