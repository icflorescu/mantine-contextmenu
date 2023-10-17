import type { MantineColor, MantineShadow, MantineSize, MantineTheme } from '@mantine/core';
import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';

/**
 * Utility type that makes a property required
 */
export type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property];
};

/**
 * Utility type that makes a property optional
 */
export type WithOptionalProperty<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Context menu options
 */
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
   * Context menu container style; can be a function that accepts theme and returns a style object
   */
  style?: CSSProperties | ((theme: MantineTheme) => CSSProperties);

  /**
   * Context menu elements classNames; an object with `root`, `item` and `divider` keys and class names as values
   * @see https://mantine.dev/styles/styles-api/
   */
  classNames?: Partial<Record<'root' | 'item' | 'divider', string>>;

  /**
   * Context menu styles; can be an object with `root`, `item` and `divider` keys and `CSSProperties` as values,
   * or a function that accepts the current theme and returns a similarly structured object
   */
  styles?:
    | Partial<Record<'root' | 'item' | 'divider', CSSProperties>>
    | ((theme: MantineTheme) => Partial<Record<'root' | 'item' | 'divider', CSSProperties>>);
};

/**
 * Context menu provider props
 */
export type ContextMenuProviderProps = ContextMenuOptions & {
  children: ReactNode;
};

/**
 * Context menu item options
 */
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
  style?: CSSProperties | ((theme: MantineTheme) => CSSProperties);
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

/**
 * Context menu content - either an array of context menu items or a function that accepts a close callback and returns context menu content
 */
export type ContextMenuContent = ContextMenuItemOptions[] | ((close: () => void) => JSX.Element);

/**
 * Context menu hook return value
 */
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
