import { useDirection } from '@mantine/core';
import { type Context, createContext, type JSX, useContext, useState } from 'react';
import type { ContextMenuInstanceOptions } from './ContextMenu';
import { ContextMenuPortal } from './ContextMenuPortal';
import type {
  ContextMenuOptions,
  ContextMenuProviderProps,
  ContextMenuSettings,
  HideContextMenuFunction,
  ShowContextMenuEvent,
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
 * Detects whether a mouse event came from React's synthetic event system rather than from the DOM directly.
 */
function isReactMouseEvent(event: React.MouseEvent | MouseEvent): event is React.MouseEvent {
  return 'nativeEvent' in event;
}

/**
 * Detects a `contextmenu` event triggered with the keyboard (Shift+F10 or the context menu key)
 * rather than with a pointing device: those don't report the secondary (right) mouse button.
 */
function isKeyboardEvent(e: MouseEvent) {
  if (e.type !== 'contextmenu' || e.button === 2 || e.ctrlKey) return false;
  const pointerType = 'pointerType' in e ? e.pointerType : undefined;
  return pointerType !== 'touch' && pointerType !== 'pen';
}

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
  const [data, setData] = useState<
    (ContextMenuInstanceOptions & ContextMenuOptions & { focusFirstItem?: boolean }) | null
  >(null);
  const { dir } = useDirection();

  const hideContextMenu = () => {
    setData(null);
  };

  const showContextMenu: ShowContextMenuFunction = (content, options) => (e: ShowContextMenuEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const setDataFromEvent = (x: number, y: number, focusFirstItem = false) =>
      setData({
        x,
        y,
        focusFirstItem,
        content,
        zIndex: options?.zIndex || zIndex,
        className: options?.className,
        style: options?.style,
        classNames: options?.classNames,
        styles: options?.styles,
      });

    if ('touches' in e) {
      // For touch events, use the coordinates of the first touch point
      const touched = e.touches.item(0);
      // This should always exist, but we check just in case
      if (touched) {
        setDataFromEvent(touched.clientX, touched.clientY);
      }
    } else {
      const { clientX, clientY } = e;
      const nativeEvent = isReactMouseEvent(e) ? e.nativeEvent : e;
      if (!isKeyboardEvent(nativeEvent)) {
        // For mouse events, use the coordinates of the mouse pointer directly
        setDataFromEvent(clientX, clientY);
      } else if (clientX === 0 && clientY === 0 && e.target instanceof Element) {
        // Some browsers report (0, 0) for keyboard-triggered events; show the menu below the focused element instead
        const rect = e.target.getBoundingClientRect();
        setDataFromEvent(dir === 'rtl' ? rect.right : rect.left, rect.bottom, true);
      } else {
        // For all other keyboard-triggered events use the reported coordinates and focus the first item in the menu
        setDataFromEvent(clientX, clientY, true);
      }
    }
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
