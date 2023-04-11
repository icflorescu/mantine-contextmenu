import { createContext, useContext, useState } from 'react';
import { ContextMenu, ContextMenuInstanceOptions } from './ContextMenu';
import type { ContextMenuOptions, ContextMenuProviderProps, ShowContextMenuFunction } from './types';

const MenuContext = createContext<ShowContextMenuFunction>(() => () => undefined);

/**
 * Provider that allows to show a context menu anywhere in your application.
 * If you wrap your application with this provider, you can use the `useContextMenu` hook
 * anywhere in the component tree to access a function that shows the context menu.
 */
export function ContextMenuProvider({
  zIndex = 9999,
  shadow = 'sm',
  borderRadius = 'xs',
  children,
}: ContextMenuProviderProps) {
  const [data, setData] = useState<(ContextMenuInstanceOptions & ContextMenuOptions) | null>(null);

  const destroy = () => {
    setData(null);
  };

  const showContextMenu: ShowContextMenuFunction = (items, options) => (e) => {
    e.preventDefault();
    setData({
      x: e.clientX,
      y: e.clientY,
      items,
      zIndex: options?.zIndex || zIndex,
      shadow: options?.shadow || shadow,
      borderRadius: options?.borderRadius || borderRadius,
    });
  };

  return (
    <MenuContext.Provider value={showContextMenu}>
      {children}
      {data && <ContextMenu onHide={destroy} {...data} />}
    </MenuContext.Provider>
  );
}

/**
 * Hook returning a function that shows a context menu.
 */
export function useContextMenu() {
  return useContext(MenuContext);
}
