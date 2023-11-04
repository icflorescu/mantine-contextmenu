import { type ReactNode } from 'react';

export function DummyOverlay({
  zIndex,
  children,
  onClick,
}: {
  zIndex?: number;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <div
      className="mantine-contextmenu-overlay"
      style={{
        zIndex,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
