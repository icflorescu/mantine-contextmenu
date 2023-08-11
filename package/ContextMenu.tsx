import { Paper, Portal, createStyles, packSx, px } from '@mantine/core';
import { useClickOutside, useMergedRef, useResizeObserver, useWindowEvent } from '@mantine/hooks';
import { CSSProperties, MouseEventHandler, useEffect, useState } from 'react';
import { ContextMenuDivider } from './ContextMenuDivider';
import { ContextMenuItem } from './ContextMenuItem';
import type { ContextMenuContent, ContextMenuOptions } from './types';
import { humanize } from './utils';

const EMPTY_OBJECT = {};

const useStyles = createStyles((theme) => ({
  root: {
    position: 'fixed',
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    overflow: 'hidden',
    transition: 'all .15s ease',
  },
}));

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
  sx,
  classNames,
  styles,
}: ContextMenuProps) {
  useWindowEvent('resize', onHide);
  useWindowEvent('scroll', onHide);

  const clickOutsideRef = useClickOutside<HTMLDivElement>(onHide);
  const [sizeRef] = useResizeObserver<HTMLDivElement>();
  const { width, height } = sizeRef.current?.getBoundingClientRect() || { width: 0, height: 0 };
  const ref = useMergedRef(clickOutsideRef, sizeRef);

  let windowWidth = 0;
  let windowHeight = 0;
  if (typeof window !== 'undefined') ({ innerWidth: windowWidth, innerHeight: windowHeight } = window);

  // trigger a rerender to make sure that context menu is positioned correctly
  const [, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);

  const handleClick: (onClick: MouseEventHandler<HTMLButtonElement>) => MouseEventHandler<HTMLButtonElement> =
    (onClick) => (e) => {
      onHide();
      onClick(e);
    };

  const { cx, classes, theme } = useStyles();
  const { dir, spacing } = theme;
  const styleProperties = typeof styles === 'function' ? styles(theme, EMPTY_OBJECT, EMPTY_OBJECT) : styles;
  const mdSpacing = px(spacing.md);

  return (
    <Portal>
      <Paper
        ref={ref}
        shadow={shadow}
        radius={borderRadius}
        className={cx(classes.root, className, classNames?.root)}
        style={{ ...styleProperties?.root, ...style } as CSSProperties}
        sx={[
          {
            zIndex,
            top: y + height + mdSpacing > windowHeight ? windowHeight - height - mdSpacing : y,
            left:
              dir === 'ltr'
                ? x + width + mdSpacing > windowWidth
                  ? windowWidth - width - mdSpacing
                  : x
                : windowWidth - mdSpacing - (x - width - mdSpacing < 0 ? width + mdSpacing : x),
          },
          ...packSx(sx),
        ]}
      >
        {Array.isArray(content)
          ? content.map(({ key, className, sx, style, onClick, title, ...otherOptions }) =>
              onClick ? (
                <ContextMenuItem
                  key={key}
                  className={cx(classNames?.item, className)}
                  sx={sx}
                  style={{ ...styleProperties?.item, ...style } as CSSProperties}
                  title={title ?? humanize(key)}
                  onClick={handleClick(onClick)}
                  {...otherOptions}
                />
              ) : (
                <ContextMenuDivider
                  key={key}
                  className={cx(classNames?.divider, className)}
                  sx={sx}
                  style={{ ...styleProperties?.divider, ...style } as CSSProperties}
                />
              )
            )
          : content(onHide)}
      </Paper>
    </Portal>
  );
}
