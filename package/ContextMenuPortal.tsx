import { Portal } from '@mantine/core';
import { useHotkeys, useWindowEvent } from '@mantine/hooks';
import { ContextMenu, type ContextMenuProps } from './ContextMenu';
import { ContextMenuOverlay } from './ContextMenuOverlay';

export type ContextMenuPortalProps = ContextMenuProps & {
  zIndex?: number;
};

export function ContextMenuPortal({ onHide, zIndex, ...otherProps }: ContextMenuPortalProps) {
  useWindowEvent('resize', onHide);
  useWindowEvent('scroll', onHide);
  useHotkeys([['Escape', onHide]]);

  return (
    <Portal>
      <ContextMenuOverlay zIndex={zIndex} onHide={onHide}>
        <ContextMenu {...otherProps} onHide={onHide} />
      </ContextMenuOverlay>
    </Portal>
  );
}
