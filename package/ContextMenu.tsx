import { Paper, Portal, createStyles, packSx, px } from '@mantine/core';
import { useClickOutside, useMergedRef, useResizeObserver, useWindowEvent } from '@mantine/hooks';
import {createRef, CSSProperties, ForwardedRef, forwardRef, MouseEventHandler, useEffect, useState} from 'react';
import { ContextMenuDivider } from './ContextMenuDivider';
import { ContextMenuItem } from './ContextMenuItem';
import type { ContextMenuContent, ContextMenuOptions } from './types';
import { humanize } from './utils';
import {ContextMenuSubMenu} from "./ContextMenuSubMenu";

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
  subOptions?: ContextMenuOptions;
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
  subOptions,
}: ContextMenuProps, inboundRef: ForwardedRef<HTMLDivElement>) {
  useWindowEvent('resize', onHide);
  useWindowEvent('scroll', onHide);

  const clickOutsideRef = useClickOutside<HTMLDivElement>(onHide);
  const [sizeRef] = useResizeObserver<HTMLDivElement>();
  const { width, height } = sizeRef.current?.getBoundingClientRect() || { width: 0, height: 0 };
  const ref = useMergedRef(clickOutsideRef, sizeRef, inboundRef);

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

  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);

  const toggleShowSubMenu = (show: boolean) => () => {
    setShowSubMenu(show);
  }

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
          ? content.map(({ key, className, sx, style, onClick, title, submenu, ...otherOptions }) =>
              submenu ? (
                <ContextMenuSubMenu
                  key={key}
                  className={cx(classNames?.submenu, className)}
                  sx={sx}
                  style={{ ...styleProperties?.submenu, ...style } as CSSProperties}
                  title={title ?? humanize(key)}
                  submenu={submenu}
                  subOptions={subOptions}
                  showSubMenu={showSubMenu}
                  onItemHover={toggleShowSubMenu(true)}
                  {...otherOptions}
                />
              ): onClick ? (
                <ContextMenuItem
                  key={key}
                  className={cx(classNames?.item, className)}
                  sx={sx}
                  style={{ ...styleProperties?.item, ...style } as CSSProperties}
                  title={title ?? humanize(key)}
                  onClick={handleClick(onClick)}
                  onItemHover={toggleShowSubMenu(false)}
                  {...otherOptions}
                />
              ) : (
                <ContextMenuDivider
                  key={key}
                  className={cx(classNames?.divider, className)}
                  sx={sx}
                  style={{ ...styleProperties?.divider, ...style } as CSSProperties}
                  onItemHover={toggleShowSubMenu(false)}
                />
              )
            )
          : content(onHide)}
      </Paper>
    </Portal>
  );
}