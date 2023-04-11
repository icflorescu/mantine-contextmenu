import { Paper, createStyles, px } from '@mantine/core';
import { useClickOutside, useElementSize, useMergedRef, useWindowEvent } from '@mantine/hooks';
import { MouseEventHandler } from 'react';
import ContextMenuDivider from './ContextMenuDivider';
import ContextMenuItem from './ContextMenuItem';
import type { ContextMenuContent, ContextMenuOptions } from './types';
import { humanize } from './utils';

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

type ContextMenuProps = ContextMenuOptions &
  ContextMenuInstanceOptions & {
    onHide: () => void;
  };

export function ContextMenu({ x, y, content, zIndex, shadow, borderRadius, onHide }: ContextMenuProps) {
  useWindowEvent('resize', onHide);
  useWindowEvent('scroll', onHide);

  const clickOutsideRef = useClickOutside<HTMLDivElement>(onHide);
  const { ref: sizeRef, width, height } = useElementSize();
  const ref = useMergedRef(clickOutsideRef, sizeRef);

  let windowWidth = 0;
  let windowHeight = 0;
  if (typeof window !== 'undefined') ({ innerWidth: windowWidth, innerHeight: windowHeight } = window);

  const {
    classes,
    theme: { dir, spacing },
  } = useStyles();

  const mdSpacing = px(spacing.md);

  const handleClick: (onClick: MouseEventHandler<HTMLButtonElement>) => MouseEventHandler<HTMLButtonElement> =
    (onClick) => (e) => {
      onHide();
      onClick(e);
    };

  return (
    <Paper
      ref={ref}
      shadow={shadow}
      radius={borderRadius}
      className={classes.root}
      sx={{
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
        ? content.map(({ key, onClick, title, ...otherOptions }) =>
            onClick ? (
              <ContextMenuItem
                key={key}
                title={title ?? humanize(key)}
                onClick={handleClick(onClick)}
                {...otherOptions}
              />
            ) : (
              <ContextMenuDivider key={key} />
            )
          )
        : content(onHide)}
    </Paper>
  );
}
