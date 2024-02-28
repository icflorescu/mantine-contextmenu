import { Box, UnstyledButton, parseThemeColor, rgba } from '@mantine/core';
import { useMediaQuery, useTimeout } from '@mantine/hooks';
import clsx from 'clsx';
import { useContext, useRef, useState, type MouseEventHandler } from 'react';
import { ContextMenu } from './ContextMenu';
import { ContextMenuSettingsCtx } from './ContextMenuProvider';
import type { ContextMenuContent, ContextMenuItemOptions, WithRequiredProperty } from './types';

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
}: WithRequiredProperty<Omit<ContextMenuItemOptions, 'key'>, 'title'> & { onHide: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const { submenuDelay } = useContext(ContextMenuSettingsCtx);

  const hoverAvailable = useMediaQuery(`(hover: hover)`);

  const [submenuPosition, setSubmenuPosition] = useState<{ x: number; y: number } | null>(null);

  const { start: startShowingSubmenu, clear: stopShowingSubmenu } = useTimeout(() => {
    const { top: y, right: x } = ref.current!.getBoundingClientRect();
    setSubmenuPosition({ x, y });
  }, submenuDelay);

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

  const handleClick: MouseEventHandler<HTMLButtonElement> | undefined = hasSubmenu
    ? (e) => {
        e.stopPropagation();
        showSubmenu();
      }
    : onClick
      ? (e) => {
          onHide();
          onClick!(e);
        }
      : undefined;

  return (
    <div
      onMouseEnter={showSubmenuOnHover ? showSubmenu : undefined}
      onMouseLeave={showSubmenuOnHover ? hideSubmenu : undefined}
    >
      <UnstyledButton
        ref={ref}
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
        onClick={handleClick}
      >
        {icon && (
          <Box fz={0} mr="xs" mt={-2}>
            {icon}
          </Box>
        )}
        <div className="mantine-contextmenu-item-button-title">{title}</div>
        { iconRight ? (
          <Box fz={0} ml="xs" mt={-2}>
            {iconRight}
          </Box>
        ) : items && (
          <Box fz={10} mt={-2} ml="xs">
            ▶
          </Box>
        )}
      </UnstyledButton>
      {submenuPosition && <ContextMenu content={items as ContextMenuContent} onHide={onHide} {...submenuPosition} />}
    </div>
  );
}
