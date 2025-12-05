import { Paper, px } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';
import clsx from 'clsx';
import { useContext, useEffect, useState } from 'react';
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
  };

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
}: ContextMenuProps) {
  const { shadow, borderRadius } = useContext(ContextMenuSettingsCtx);
  const [paperRef] = useResizeObserver<HTMLDivElement>();
  const [isMounted, setIsMounted] = useState(false);

  // eslint-disable-next-line react-hooks/refs
  const { width, height } = paperRef.current?.getBoundingClientRect() || { width: 0, height: 0 };

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

  return (
    <Paper
      ref={paperRef}
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
                : x - width < mdSpacing
                  ? mdSpacing
                  : x - width,
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
