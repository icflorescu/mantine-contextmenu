import type { MantineColor, MantineNumberSize, MantineShadow } from '@mantine/core';
import type { MouseEventHandler, ReactNode } from 'react';

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
  borderRadius?: MantineNumberSize;
};

export type ContextMenuProviderProps = ContextMenuOptions & {
  children: ReactNode;
};

export type ContextMenuItemOptions = {
  /**
   * Unique key of the context menu item
   */
  key: string;
} & (
  | {
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

      /**
       * Optional context menu item `onClick` handler; if not provided, a divider will be rendered instead
       */
      onClick: MouseEventHandler<HTMLButtonElement>;
    }
  | {
      icon?: never;
      title?: never;
      color?: never;
      disabled?: never;
      onClick?: never;
    }
);

export type ShowContextMenuFunction = (
  /**
   * Context menu items
   */
  items: ContextMenuItemOptions[],

  /**
   * Context menu options (overrides provider options)
   */
  options?: ContextMenuOptions
) => MouseEventHandler;
