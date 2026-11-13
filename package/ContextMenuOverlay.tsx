import { type JSX, useContext, useRef } from 'react';
import { ContextMenuSettingsCtx } from './ContextMenuProvider';

export type ContextMenuOverlayProps = React.PropsWithChildren<{
  zIndex: number | undefined;
  onHide: () => void;
}>;

export function ContextMenuOverlay({ zIndex, children, onHide }: ContextMenuOverlayProps): JSX.Element {
  const { repositionOnRepeat } = useContext(ContextMenuSettingsCtx);
  const pressedInsideRef = useRef(false);

  // The overlay's only DOM children are the menus, so an event targeting anything but the overlay itself comes
  // from inside a menu (or from a portal rendered by a component inside it, such as a Select dropdown)
  const handlePointerDown = (e: React.PointerEvent) => {
    pressedInsideRef.current = e.target !== e.currentTarget;
  };

  const handleClick = (e: React.MouseEvent) => {
    // Only hide on clicks outside the menu, so that custom content can contain interactive elements.
    // A click whose press started inside (e.g. dragging a slider and releasing outside) is ignored too.
    const pressedInside = pressedInsideRef.current;
    pressedInsideRef.current = false;
    if (pressedInside || e.target !== e.currentTarget) return;
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
      onPointerDown={handlePointerDown}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
    >
      {children}
    </div>
  );
}
