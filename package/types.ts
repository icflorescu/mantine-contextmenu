import type { MantineColor, MantineShadow, MantineSize } from '@mantine/core';
import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';

export type ContextMenuOptions = {
  /**
   * zIndex of context menu
   * @default 9999
   */
  zIndex?: number;

  /**
   * Context menu shadow
   * @default 'sm'
   */
  shadow?: MantineShadow;

  /**
   * Context menu border radius
   * @default 'xs'
   */
  borderRadius?: MantineSize;

  /**
   * Context menu container className
   */
  className?: string;

  /**
   * Context menu container style
   */
  style?: CSSProperties;

  /**
   * Context menu elements classNames; an object with `root`, `item` and `divider` keys and class names as values
   * @see https://mantine.dev/styles/styles-api/
   */
  classNames?: Record<'root' | 'item' | 'divider', string>;

  /**
   * Context menu styles; can be an object with `root`, `item` and `divider` keys and `CSSProperties` as values,
   * or a function that accepts the current theme and returns a styles object
   */
  styles?: Record<'root' | 'item' | 'divider', CSSProperties>;
};

export type ContextMenuProviderProps = ContextMenuOptions & {
  children: ReactNode;
};

export type ContextMenuItemOptions = {
  /**
   * Unique key of the context menu item or divider
   */
  key: string;
  /**
   * Context menu item or divider className
   */
  className?: string;

  /**
   * Context menu item or divider style
   */
  style?: CSSProperties;
} & (
  | ({
      /**
       * Optional context menu item icon
       */
      icon?: ReactNode;

      /**
       * Optional context menu item title; if not provided, one will be generated automatically by "humanizing" the key
       * @default humanize(key)
       */
      title?: ReactNode;

      /**
       * Optional context menu item color
       */
      color?: MantineColor;

      /**
       * Boolean indicating whether the context menu item is disabled
       */
      disabled?: boolean;
    } & (
      | {
          /**
           * Optional context menu item `onClick` handler; if not provided, a divider will be rendered instead
           */
          onClick: MouseEventHandler<HTMLButtonElement>;

          items?: never;
        }
      | {
          onClick?: never;

          /**
           * Optional items; if provided, a submenu will be rendered
           */
          items: ContextMenuItemOptions[];
        }
    ))
  | {
      icon?: never;
      title?: never;
      color?: never;
      disabled?: never;
      onClick?: never;
      items?: never;
    }
);

export type ContextMenuContent = ContextMenuItemOptions[] | ((close: () => void) => JSX.Element);

export type ShowContextMenuFunction = (
  /**
   * Context menu content - either an array of context menu items
   * or a function that accepts a close callback and returns context menu content
   */
  content: ContextMenuContent,

  /**
   * Context menu options (overrides provider options)
   */
  options?: ContextMenuOptions
) => MouseEventHandler;
