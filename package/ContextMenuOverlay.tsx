import { useContext } from 'react';
import { ContextMenuSettingsCtx } from './ContextMenuProvider';

export type ContextMenuOverlayProps = React.PropsWithChildren<{
  zIndex: number | undefined;
  onHide: () => void;
}>;

export function ContextMenuOverlay({ zIndex, children, onHide }: ContextMenuOverlayProps) {
  const { repositionOnRepeat } = useContext(ContextMenuSettingsCtx);

  const handleHide = (e: React.MouseEvent) => {
    e.preventDefault();
    onHide();
  };

  const handleContextMenu = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (repositionOnRepeat) {
      const { clientX, clientY } = e;
      try {
        document
          .elementsFromPoint(clientX, clientY)[1]
          .dispatchEvent(new MouseEvent('contextmenu', { bubbles: true, clientX, clientY }));
      } catch {
        // ignore error
      }
    } else {
      onHide();
    }
  };

  return (
    <div
      className="mantine-contextmenu-overlay"
      style={{ zIndex }}
      onClick={handleHide}
      onContextMenu={handleContextMenu}
    >
      {children}
    </div>
  );
}
