import { Box, parseThemeColor, rgba, UnstyledButton } from '@mantine/core';
import { useMediaQuery, useTimeout } from '@mantine/hooks';
import clsx from 'clsx';
import { type JSX, type KeyboardEvent, type MouseEventHandler, useContext, useRef, useState } from 'react';
import { ContextMenu } from './ContextMenu';
import { ContextMenuSettingsCtx } from './ContextMenuProvider';
import type { ContextMenuContent, ContextMenuItemOptions, ContextMenuOptions, WithRequiredProperty } from './types';

export function ContextMenuItem({
  className,
  style,
  icon,
  iconRight,
  title,
  color,
  disabled,
  onClick,
  onHide,
  items,
  submenuProps,
}: WithRequiredProperty<Omit<ContextMenuItemOptions, 'key'>, 'title'> & {
  onHide: () => void;
  submenuProps: Pick<ContextMenuOptions, 'className' | 'classNames' | 'style' | 'styles'> & { dir?: 'ltr' | 'rtl' };
}): JSX.Element {
  const ref = useRef<HTMLButtonElement>(null);
  const { submenuDelay } = useContext(ContextMenuSettingsCtx);
  const dir = submenuProps.dir || 'ltr';

  const hoverAvailable = useMediaQuery('(hover: hover)');

  const [submenuPosition, setSubmenuPosition] = useState<{ x: number; y: number; focusFirstItem?: boolean } | null>(
    null
  );

  const openSubmenu = (focusFirstItem?: boolean) => {
    const rect = (ref.current as HTMLButtonElement).getBoundingClientRect();
    const x = dir === 'ltr' ? rect.right : rect.left;
    setSubmenuPosition({ x, y: rect.top, focusFirstItem });
  };

  const { start: startShowingSubmenu, clear: stopShowingSubmenu } = useTimeout(() => openSubmenu(), submenuDelay);

  const { start: startHidingSubmenu, clear: stopHidingSubmenu } = useTimeout(() => {
    setSubmenuPosition(null);
  }, submenuDelay);

  const showSubmenu = () => {
    stopHidingSubmenu();
    startShowingSubmenu();
  };

  const hideSubmenu = () => {
    stopShowingSubmenu();
    startHidingSubmenu();
  };

  const hasSubmenu = items && !disabled;
  const showSubmenuOnHover = hasSubmenu && hoverAvailable;

  const openSubmenuWithKeyboard = () => {
    stopShowingSubmenu();
    stopHidingSubmenu();
    openSubmenu(true);
  };

  const closeSubmenuWithKeyboard = () => {
    stopShowingSubmenu();
    stopHidingSubmenu();
    setSubmenuPosition(null);
    ref.current?.focus();
  };

  const handleKeyDown = hasSubmenu
    ? (e: KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === (dir === 'ltr' ? 'ArrowRight' : 'ArrowLeft')) {
          e.preventDefault();
          openSubmenuWithKeyboard();
        }
      }
    : undefined;

  const handleClick: MouseEventHandler<HTMLButtonElement> | undefined = hasSubmenu
    ? (e) => {
        e.stopPropagation();
        // A click with `detail === 0` was triggered with the keyboard (Enter/Space)
        if (e.detail === 0) openSubmenuWithKeyboard();
        else showSubmenu();
      }
    : onClick
      ? (e) => {
          onHide();
          onClick?.(e);
        }
      : undefined;

  return (
    <div
      onMouseEnter={showSubmenuOnHover ? showSubmenu : undefined}
      onMouseLeave={showSubmenuOnHover ? hideSubmenu : undefined}
    >
      <UnstyledButton
        ref={ref}
        dir={dir}
        style={[
          (theme) => {
            const { colors } = theme;
            const parsedColor = color ? parseThemeColor({ color, theme }).value : undefined;
            return {
              '--mantine-contextmenu-item-button-color': parsedColor ? parsedColor : 'var(--mantine-color-text)',
              '--mantine-contextmenu-item-button-hover-bg-color-light': parsedColor
                ? rgba(parsedColor, 0.08)
                : rgba(colors.gray[4], 0.25),
              '--mantine-contextmenu-item-button-hover-bg-color-dark': parsedColor
                ? rgba(parsedColor, 0.15)
                : rgba(colors.dark[3], 0.25),
              '--mantine-contextmenu-item-button-pressed-bg-color-light': parsedColor
                ? rgba(parsedColor, 0.2)
                : rgba(colors.gray[4], 0.5),
              '--mantine-contextmenu-item-button-pressed-bg-color-dark': parsedColor
                ? rgba(parsedColor, 0.3)
                : rgba(colors.dark[3], 0.5),
            };
          },
          style,
        ]}
        className={clsx('mantine-contextmenu-item-button', className)}
        disabled={disabled}
        role="menuitem"
        aria-haspopup={items ? 'menu' : undefined}
        aria-expanded={items ? !!submenuPosition : undefined}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        {icon && (
          <Box fz={0} me="xs" mt={-2}>
            {icon}
          </Box>
        )}
        <div className="mantine-contextmenu-item-button-title">{title}</div>
        {iconRight ? (
          <Box fz={0} ms="xs" mt={-2}>
            {iconRight}
          </Box>
        ) : (
          items && (
            <Box mt={-1} ms="xs">
              ›
            </Box>
          )
        )}
      </UnstyledButton>
      {submenuPosition && (
        <ContextMenu
          content={items as ContextMenuContent}
          onHide={onHide}
          onClose={closeSubmenuWithKeyboard}
          {...submenuProps}
          {...submenuPosition}
        />
      )}
    </div>
  );
}
