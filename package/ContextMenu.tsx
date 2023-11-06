import { Paper, px, useDirection } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';
import clsx from 'clsx';
import { useContext } from 'react';
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
  };

export function ContextMenu({ x, y, content, zIndex, onHide, className, style, classNames, styles }: ContextMenuProps) {
  const { shadow, borderRadius } = useContext(ContextMenuSettingsCtx);
  const [paperRef] = useResizeObserver<HTMLDivElement>();
  const { width, height } = paperRef.current?.getBoundingClientRect() || { width: 0, height: 0 };

  let windowWidth = 0;
  let windowHeight = 0;
  if (typeof window !== 'undefined') ({ innerWidth: windowWidth, innerHeight: windowHeight } = window);

  const { dir } = useDirection();

  return (
    <Paper
      ref={paperRef}
      shadow={shadow}
      radius={borderRadius}
      className={clsx('mantine-contextmenu', className, classNames?.root)}
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
                : windowWidth - mdSpacing - (x - width - mdSpacing < 0 ? width + mdSpacing : x),
          };
        },
        style,
        styles?.root,
      ]}
    >
      {Array.isArray(content)
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
