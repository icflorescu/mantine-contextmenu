import { Portal } from '@mantine/core';
import { useClickOutside, useWindowEvent } from '@mantine/hooks';
import { ContextMenu, type ContextMenuProps } from './ContextMenu';

export function ContextMenuPortal({ onHide, ...otherProps }: ContextMenuProps) {
  useWindowEvent('resize', onHide);
  useWindowEvent('scroll', onHide);
  const portalInnerRef = useClickOutside<HTMLDivElement>(onHide);

  return (
    <Portal innerRef={portalInnerRef}>
      <ContextMenu {...otherProps} onHide={onHide} />
    </Portal>
  );
}
