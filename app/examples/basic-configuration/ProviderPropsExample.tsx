import { ContextMenuProvider } from '__PACKAGE__';

export function ProviderPropsExample({ children }: { children: React.ReactNode }) {
  // example-start
  return (
    <ContextMenuProvider zIndex={5000} shadow="md" borderRadius="md" repositionOnRepeat>
      {children}
    </ContextMenuProvider>
  );
  // example-end
}
