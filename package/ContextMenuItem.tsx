'use client';

import { Box, UnstyledButton, parseThemeColor, rgba, useMantineTheme } from '@mantine/core';
import clsx from 'clsx';
import { useRef, useState, type MouseEventHandler } from 'react';
import { ContextMenu } from './ContextMenu';
import type { ContextMenuContent, ContextMenuItemOptions, WithRequiredProperty } from './types';

export function ContextMenuItem({
  className,
  style,
  icon,
  title,
  color,
  disabled,
  onClick,
  onHide,
  items,
}: WithRequiredProperty<Omit<ContextMenuItemOptions, 'key'>, 'title'> & { onHide: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [submenuPosition, setSubmenuPosition] = useState<{ x: number; y: number } | null>(null);

  const handleClick: MouseEventHandler<HTMLButtonElement> | undefined = onClick
    ? (e) => {
        onHide();
        onClick!(e);
      }
    : undefined;

  const showSubmenu = () => {
    const { top: y, right: x } = ref.current!.getBoundingClientRect();
    setSubmenuPosition({ x, y });
  };

  const hideSubmenu = () => {
    setSubmenuPosition(null);
  };

  const hasItemsAndIsNotDisabled = items && !disabled;

  const theme = useMantineTheme();
  const { colors } = theme;
  const parsedColor = color ? parseThemeColor({ color, theme }).value : undefined;

  return (
    <div
      onMouseOver={hasItemsAndIsNotDisabled ? showSubmenu : undefined}
      onMouseOut={hasItemsAndIsNotDisabled ? hideSubmenu : undefined}
    >
      <UnstyledButton
        ref={ref}
        style={{
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
          ...(typeof style === 'function' ? style(theme) : style),
        }}
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
        {items && (
          <Box fz={10} mt={-2} ml="xs">
            ▶
          </Box>
        )}
      </UnstyledButton>
      {submenuPosition && <ContextMenu content={items as ContextMenuContent} onHide={onHide} {...submenuPosition} />}
    </div>
  );
}
