import { Portal } from '@mantine/core';
import { useHotkeys, useWindowEvent } from '@mantine/hooks';
import { ContextMenu, type ContextMenuProps } from './ContextMenu';
import { ContextMenuOverlay } from './ContextMenuOverlay';

export type ContextMenuPortalProps = ContextMenuProps & {
  zIndex?: number;
  dir: 'ltr' | 'rtl';
};

export function ContextMenuPortal({ onHide, zIndex, dir, ...otherProps }: ContextMenuPortalProps) {
  useWindowEvent('resize', onHide);
  useWindowEvent('scroll', onHide);
  useHotkeys([['Escape', onHide]]);

  return (
    <Portal>
      <ContextMenuOverlay zIndex={zIndex} onHide={onHide}>
        <ContextMenu {...otherProps} onHide={onHide} dir={dir} />
      </ContextMenuOverlay>
    </Portal>
  );
}
