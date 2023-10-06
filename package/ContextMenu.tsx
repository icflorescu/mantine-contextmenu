import { Paper, px, useDirection, useMantineTheme } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import classes from './ContextMenu.module.css';
import { ContextMenuDivider } from './ContextMenuDivider';
import { ContextMenuItem } from './ContextMenuItem';
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

export function ContextMenu({
  x,
  y,
  content,
  zIndex,
  shadow,
  borderRadius,
  onHide,
  className,
  style,
  classNames,
  styles,
}: ContextMenuProps) {
  const [paperRef] = useResizeObserver<HTMLDivElement>();
  const { width, height } = paperRef.current?.getBoundingClientRect() || { width: 0, height: 0 };

  let windowWidth = 0;
  let windowHeight = 0;
  if (typeof window !== 'undefined') ({ innerWidth: windowWidth, innerHeight: windowHeight } = window);

  // trigger a rerender to make sure that context menu is positioned correctly
  const [, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);

  const { dir } = useDirection();
  const { spacing } = useMantineTheme();
  const mdSpacing = px(spacing.md) as number;

  return (
    <Paper
      ref={paperRef}
      shadow={shadow}
      radius={borderRadius}
      className={clsx(classes.root, className, classNames?.root)}
      style={{
        ...styles?.root,
        ...style,
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
        ? content.map(({ key, className, style, onClick, items, title, ...otherOptions }) =>
            onClick || items ? (
              <ContextMenuItem
                key={key}
                className={clsx(classNames?.item, className)}
                style={{ ...styles?.item, ...style }}
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
                style={{ ...styles?.divider, ...style }}
              />
            )
          )
        : content(onHide)}
    </Paper>
  );
}
