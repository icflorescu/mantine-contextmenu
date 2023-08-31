import {Box, Text, UnstyledButton, createStyles, px, type MantineColor} from '@mantine/core';
import {ContextMenuItemOptions, ContextMenuOptions} from './types';
import {WithRequiredProperty} from './utils';
import {ContextMenu} from "./ContextMenu";
import {Ref, RefObject, useEffect, useRef, useState} from "react";

const useStyles = createStyles((theme, {color}: { color?: MantineColor }) => {
  const verticalPadding = px(theme.spacing.sm) / 2;
  return {
    root: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      paddingTop: verticalPadding,
      paddingBottom: verticalPadding,
      paddingLeft: theme.spacing.sm,
      paddingRight: theme.spacing.sm,
      color: color && theme.colors[color][6],
      transition: 'background .15s ease',
      '&[disabled]': {
        cursor: 'not-allowed',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
      },
      '&:hover:not([disabled])': {
        background: theme.fn.rgba(
          color ? theme.colors[color][6] : theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
          color ? (theme.colorScheme === 'dark' ? 0.15 : 0.08) : 0.25
        ),
      },
      '&:active:not([disabled])': {
        background: theme.fn.rgba(
          color ? theme.colors[color][6] : theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
          color ? (theme.colorScheme === 'dark' ? 0.3 : 0.2) : 0.5
        ),
      },
    },
    icon: {
      fontSize: 0,
      marginRight: theme.spacing.xs,
    },
    title: {
      whiteSpace: 'nowrap',
    },
    chevron: {
      ":before": {
        borderStyle: 'solid',
        borderWidth: '0.1em 0.1em 0 0',
        content: '""',
        display: 'inline-block',
        height: '0.6em',
        position: 'relative',
        top: '0.4em',
        verticalAlign: 'top',
        width: '0.6em',
        left: '0.4em',
        transform: "rotate(45deg)",
      }
    }
  };
});

type ContextMenuSubmenuProps = WithRequiredProperty<Omit<ContextMenuItemOptions, 'key'>, 'title' | 'submenu'> & {
  submenuOptions?: ContextMenuOptions,
  showSubmenu: boolean,
  onItemHover: () => void;
};

export function ContextMenuSubmenu({
                                     className,
                                     style,
                                     icon,
                                     title,
                                     color,
                                     submenu,
                                     submenuOptions,
                                     showSubmenu,
                                     onItemHover,
                                   }: ContextMenuSubmenuProps) {
  const {cx, classes} = useStyles({color});

  const [{x, y}, setCoordinate] = useState<{ x: number, y: number }>({x: 0, y: 0});
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const {width, x, y} = ref.current?.getBoundingClientRect() || {width: 0, x: 0, y: 0};
    if (x && y) {
      setCoordinate({x: x + width, y});
    }
  }, [ref]);

  return (
    <Box
      className={cx(classes.root, className)}
      style={style}
      ref={ref}
      onMouseOver={onItemHover}
    >
      {icon && <Box className={classes.icon}>{icon}</Box>}
      <Text className={classes.title} size="sm">
        {title}
      </Text>
      <span className={classes.chevron}></span>
      {showSubmenu && <ContextMenu
          x={x}
          y={y}
          content={submenu}
          zIndex={submenuOptions?.zIndex}
          shadow={submenuOptions?.shadow}
          borderRadius={submenuOptions?.borderRadius}
          className={submenuOptions?.className}
          style={submenuOptions?.style}
          sx={submenuOptions?.sx}
          classNames={submenuOptions?.classNames}
          styles={submenuOptions?.styles}
          subOptions={submenuOptions}
          onHide={() => void 0}/>}
    </Box>
  );
}
