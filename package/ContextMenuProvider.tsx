import { useDirection } from '@mantine/core';
import { type Context, createContext, type JSX, useContext, useState } from 'react';
import type { ContextMenuInstanceOptions } from './ContextMenu';
import { ContextMenuPortal } from './ContextMenuPortal';
import type {
  ContextMenuOptions,
  ContextMenuProviderProps,
  ContextMenuSettings,
  HideContextMenuFunction,
  ShowContextMenuFunction,
  WithRequiredProperty,
} from './types';

type ResolvedContextMenuSettings = WithRequiredProperty<
  ContextMenuSettings,
  'shadow' | 'borderRadius' | 'submenuDelay'
>;

const DEFAULT_SETTINGS: ResolvedContextMenuSettings = {
  shadow: 'sm',
  borderRadius: 'xs',
  submenuDelay: 500,
  repositionOnRepeat: false,
};

export const ContextMenuSettingsCtx: Context<ResolvedContextMenuSettings> = createContext(DEFAULT_SETTINGS);

type ContextMenuContextValue = {
  /**
   * Function that shows the context menu.
   */
  showContextMenu: ShowContextMenuFunction;

  /**
   * Function that hides the context menu.
   */
  hideContextMenu: HideContextMenuFunction;

  /**
   * Boolean indicating whether the context menu is currently visible.
   */
  isContextMenuVisible: boolean;
};

export const ContextMenuCtx: Context<ContextMenuContextValue> = createContext<ContextMenuContextValue>({
  showContextMenu: () => () => undefined,
  hideContextMenu: () => undefined,
  isContextMenuVisible: false,
});

/**
 * Provider that allows to show a context menu anywhere in your application.
 * If you wrap your application with this provider, you can use the `useContextMenu` hook
 * anywhere in the component tree to access a function that shows the context menu.
 */
export function ContextMenuProvider({
  zIndex = 9999,
  shadow = DEFAULT_SETTINGS.shadow,
  borderRadius = DEFAULT_SETTINGS.borderRadius,
  submenuDelay = DEFAULT_SETTINGS.submenuDelay,
  repositionOnRepeat = DEFAULT_SETTINGS.repositionOnRepeat,
  children,
}: ContextMenuProviderProps): JSX.Element {
  const [data, setData] = useState<(ContextMenuInstanceOptions & ContextMenuOptions) | null>(null);
  const { dir } = useDirection();

  const hideContextMenu = () => {
    setData(null);
  };

  const showContextMenu: ShowContextMenuFunction = (content, options) => (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const { x, y } =
      'touches' in e ? { x: e.touches.item(0).clientX, y: e.touches.item(0).clientY } : { x: e.clientX, y: e.clientY };

    setData({
      x,
      y,
      content,
      zIndex: options?.zIndex || zIndex,
      className: options?.className,
      style: options?.style,
      classNames: options?.classNames,
      styles: options?.styles,
    });
  };

  return (
    <ContextMenuSettingsCtx.Provider value={{ shadow, borderRadius, submenuDelay, repositionOnRepeat }}>
      <ContextMenuCtx.Provider value={{ showContextMenu, hideContextMenu, isContextMenuVisible: !!data }}>
        {children}
        {data && <ContextMenuPortal onHide={hideContextMenu} dir={dir} {...data} />}
      </ContextMenuCtx.Provider>
    </ContextMenuSettingsCtx.Provider>
  );
}

/**
 * Hook returning functions that show and hide the context menu.
 */
export function useContextMenu(): ContextMenuContextValue {
  return useContext(ContextMenuCtx);
}
