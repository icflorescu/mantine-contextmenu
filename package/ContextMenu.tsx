'use client';

import { Paper, px, useDirection, useMantineTheme } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';
import clsx from 'clsx';
import { useContext } from 'react';
import { ContextMenuDivider } from './ContextMenuDivider';
import { ContextMenuItem } from './ContextMenuItem';
import { MenuSettingsContext } from './ContextMenuProvider';
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
  };

export function ContextMenu({ x, y, content, zIndex, onHide, className, style, classNames, styles }: ContextMenuProps) {
  const { shadow, borderRadius } = useContext(MenuSettingsContext);
  const [paperRef] = useResizeObserver<HTMLDivElement>();
  const { width, height } = paperRef.current?.getBoundingClientRect() || { width: 0, height: 0 };

  let windowWidth = 0;
  let windowHeight = 0;
  if (typeof window !== 'undefined') ({ innerWidth: windowWidth, innerHeight: windowHeight } = window);

  const { dir } = useDirection();
  const theme = useMantineTheme();
  const resolvedStyle = typeof style === 'function' ? style(theme) : style;
  const resolvedStyles = typeof styles === 'function' ? styles(theme) : styles;
  const mdSpacing = px(theme.spacing.md) as number;

  return (
    <Paper
      ref={paperRef}
      shadow={shadow}
      radius={borderRadius}
      className={clsx('mantine-contextmenu', className, classNames?.root)}
      style={{
        ...resolvedStyles?.root,
        ...resolvedStyle,
        zIndex,
        top: y + height + mdSpacing > windowHeight ? windowHeight - height - mdSpacing : y,
        left:
          dir === 'ltr'
            ? x + width + mdSpacing > windowWidth
              ? windowWidth - width - mdSpacing
              : x
            : windowWidth - mdSpacing - (x - width - mdSpacing < 0 ? width + mdSpacing : x),
      }}
    >
      {Array.isArray(content)
        ? content.map(({ key, className, style, onClick, items, title, ...otherOptions }) => {
            const resolvedItemStyle = typeof style === 'function' ? style(theme) : style;
            return onClick || items ? (
              <ContextMenuItem
                key={key}
                className={clsx(classNames?.item, className)}
                style={{ ...resolvedStyles?.item, ...resolvedItemStyle }}
                title={title ?? humanize(key)}
                onClick={onClick}
                onHide={onHide}
                items={items}
                {...otherOptions}
              />
            ) : (
              <ContextMenuDivider
                key={key}
                className={clsx(classNames?.divider, className)}
                style={{ ...resolvedStyles?.divider, ...resolvedItemStyle }}
              />
            );
          })
        : content(onHide)}
    </Paper>
  );
}
