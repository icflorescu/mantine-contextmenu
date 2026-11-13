import { Paper, px } from '@mantine/core';
import { useMergedRef, useResizeObserver } from '@mantine/hooks';
import clsx from 'clsx';
import { type JSX, type KeyboardEvent, useContext, useEffect, useRef, useState } from 'react';
import { ContextMenuDivider } from './ContextMenuDivider';
import { ContextMenuItem } from './ContextMenuItem';
import { ContextMenuSettingsCtx } from './ContextMenuProvider';
import type { ContextMenuContent, ContextMenuOptions } from './types';
import { humanize } from './utils';

export type ContextMenuInstanceOptions = {
  x: number;
  y: number;
  content: ContextMenuContent;
};

export type ContextMenuProps = ContextMenuOptions &
  ContextMenuInstanceOptions & {
    onHide: () => void;
    dir?: 'ltr' | 'rtl';
    /**
     * Whether to focus the first item when the menu is shown (i.e. when opened with the keyboard).
     */
    focusFirstItem?: boolean;
    /**
     * Called when a submenu should close itself (ArrowLeft/ArrowRight in RTL or Escape).
     */
    onClose?: () => void;
  };

function getItemButtons(menu: HTMLElement) {
  return Array.from(
    menu.querySelectorAll<HTMLButtonElement>(':scope > div > .mantine-contextmenu-item-button:not([disabled])')
  );
}

export function ContextMenu({
  x,
  y,
  content,
  zIndex,
  onHide,
  className,
  style,
  classNames,
  styles,
  dir = 'ltr',
  focusFirstItem,
  onClose,
}: ContextMenuProps): JSX.Element {
  const { shadow, borderRadius } = useContext(ContextMenuSettingsCtx);
  const [paperRef, { width, height }] = useResizeObserver<HTMLDivElement>();
  const [isMounted, setIsMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergedRef(paperRef, menuRef);

  let windowWidth = 0;
  let windowHeight = 0;
  if (typeof window !== 'undefined') ({ innerWidth: windowWidth, innerHeight: windowHeight } = window);

  const submenuProps = { className, classNames, style, styles, dir };

  // Wait for dimensions to be measured before showing to prevent visible repositioning
  const hasSize = width > 0 && height > 0;

  useEffect(() => {
    if (hasSize) {
      requestAnimationFrame(() => setIsMounted(true));
    }
  }, [hasSize]);

  const isSubmenu = !!onClose;

  // Move focus into the menu once it's visible, so it can be operated with the keyboard
  useEffect(() => {
    const menu = menuRef.current;
    if (!isMounted || !menu) return;
    if (focusFirstItem) {
      (getItemButtons(menu)[0] ?? menu).focus();
    } else if (!isSubmenu) {
      // Submenus opened on hover shouldn't steal focus from their parent menu
      menu.focus();
    }
  }, [isMounted, focusFirstItem, isSubmenu]);

  const isItemsArray = Array.isArray(content);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    // Custom content may contain inputs or other controls, so leave its keyboard handling alone
    if (!isItemsArray || e.defaultPrevented) return;
    const menu = menuRef.current;
    if (!menu) return;
    const items = getItemButtons(menu);
    const index = items.indexOf(document.activeElement as HTMLButtonElement);
    let next: HTMLButtonElement | undefined;
    switch (e.key) {
      case 'ArrowDown':
        next = items[(index + 1) % items.length];
        break;
      case 'ArrowUp':
        next = items[index <= 0 ? items.length - 1 : index - 1];
        break;
      case 'Home':
        next = items[0];
        break;
      case 'End':
        next = items[items.length - 1];
        break;
      case 'Tab':
        break;
      case 'Escape':
      case dir === 'ltr' ? 'ArrowLeft' : 'ArrowRight':
        if (!onClose) return;
        onClose();
        break;
      default:
        return;
    }
    e.preventDefault();
    e.stopPropagation();
    next?.focus();
  };

  return (
    <Paper
      ref={mergedRef}
      role={isItemsArray ? 'menu' : undefined}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      shadow={shadow}
      radius={borderRadius}
      className={clsx('mantine-contextmenu', isMounted && 'mantine-contextmenu-mounted', className, classNames?.root)}
      style={[
        ({ spacing: { md } }) => {
          const mdSpacing = px(md) as number;
          return {
            zIndex,
            top: y + height + mdSpacing > windowHeight ? windowHeight - height - mdSpacing : y,
            left:
              dir === 'ltr'
                ? x + width + mdSpacing > windowWidth
                  ? windowWidth - width - mdSpacing
                  : x
                : Math.max(x - width, mdSpacing),
          };
        },
        style,
        styles?.root,
      ]}
    >
      {isItemsArray
        ? content.map(({ key, hidden, className, style, onClick, items, title, ...otherOptions }) =>
            hidden ? null : onClick || items ? (
              <ContextMenuItem
                key={key}
                className={clsx(classNames?.item, className)}
                style={[styles?.item, style]}
                title={title ?? humanize(key)}
                onClick={onClick}
                onHide={onHide}
                items={items}
                submenuProps={submenuProps}
                {...otherOptions}
              />
            ) : (
              <ContextMenuDivider
                key={key}
                className={clsx(classNames?.divider, className)}
                style={[styles?.divider, style]}
              />
            )
          )
        : content(onHide)}
    </Paper>
  );
}
