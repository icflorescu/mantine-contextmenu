import { createContext, useContext, useState } from 'react';
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

const DEFAULT_SETTINGS: WithRequiredProperty<ContextMenuSettings, 'shadow' | 'borderRadius' | 'submenuDelay'> = {
  shadow: 'sm',
  borderRadius: 'xs',
  submenuDelay: 500,
};

export const ContextMenuSettingsCtx = createContext(DEFAULT_SETTINGS);
export const ContextMenuCtx = createContext<{
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
}>({ showContextMenu: () => () => undefined, hideContextMenu: () => undefined, isContextMenuVisible: false });

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
  children,
}: ContextMenuProviderProps) {
  const [data, setData] = useState<(ContextMenuInstanceOptions & ContextMenuOptions) | null>(null);

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
    <ContextMenuSettingsCtx.Provider value={{ shadow, borderRadius, submenuDelay }}>
      <ContextMenuCtx.Provider value={{ showContextMenu, hideContextMenu, isContextMenuVisible: !!data }}>
        {children}
        {data && <ContextMenuPortal onHide={hideContextMenu} {...data} />}
      </ContextMenuCtx.Provider>
    </ContextMenuSettingsCtx.Provider>
  );
}

/**
 * Hook returning functions that show and hide the context menu.
 */
export function useContextMenu() {
  return useContext(ContextMenuCtx);
}
