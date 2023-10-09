'use client';

import { Box, Text, UnstyledButton } from '@mantine/core';
import clsx from 'clsx';
import { MouseEventHandler, useRef, useState } from 'react';
import { ContextMenu } from './ContextMenu';
import classes from './ContextMenuItem.module.css';
import { ContextMenuContent, ContextMenuItemOptions } from './types';
import type { WithRequiredProperty } from './utils';

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

  return (
    <div
      onMouseOver={hasItemsAndIsNotDisabled ? showSubmenu : undefined}
      onMouseOut={hasItemsAndIsNotDisabled ? hideSubmenu : undefined}
    >
      <UnstyledButton
        ref={ref}
        className={clsx(classes.button, className)}
        style={style}
        disabled={disabled}
        onClick={handleClick}
      >
        {icon && (
          <Box fz={0} mr="xs">
            {icon}
          </Box>
        )}
        <Text className={classes.title} size="sm">
          {title}
        </Text>
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
