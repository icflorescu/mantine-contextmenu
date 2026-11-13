import { Portal } from '@mantine/core';
import { useHotkeys, useWindowEvent } from '@mantine/hooks';
import { type JSX, useEffect } from 'react';
import { ContextMenu, type ContextMenuProps } from './ContextMenu';
import { ContextMenuOverlay } from './ContextMenuOverlay';

export type ContextMenuPortalProps = ContextMenuProps & {
  zIndex?: number;
  dir: 'ltr' | 'rtl';
};

export function ContextMenuPortal({ onHide, zIndex, dir, ...otherProps }: ContextMenuPortalProps): JSX.Element {
  useWindowEvent('resize', onHide);
  useWindowEvent('scroll', onHide);
  useHotkeys([['Escape', onHide]]);

  // Return focus to the element that had it before the menu opened, unless something else has taken it since
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    return () => {
      const { activeElement } = document;
      const focusWasLost = !activeElement || activeElement === document.body;
      if (focusWasLost && previouslyFocused instanceof HTMLElement && previouslyFocused.isConnected) {
        previouslyFocused.focus();
      }
    };
  }, []);

  return (
    <Portal>
      <ContextMenuOverlay zIndex={zIndex} onHide={onHide}>
        <ContextMenu {...otherProps} onHide={onHide} dir={dir} />
      </ContextMenuOverlay>
    </Portal>
  );
}
