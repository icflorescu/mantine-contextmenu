import { DirectionProvider, MantineProvider } from '@mantine/core';
import { useEffect, useRef } from 'react';
import { render } from 'vitest-browser-react';
import {
  type ContextMenuContent,
  ContextMenuProvider,
  type ContextMenuProviderProps,
  useContextMenu,
} from '../package/index';

type TriggerProps = {
  content: ContextMenuContent;
  style?: React.CSSProperties;
};

const baseStyle = {
  position: 'fixed',
  top: 50,
  left: 50,
  width: 300,
  height: 200,
} satisfies React.CSSProperties;

function triggerAttributes(style?: React.CSSProperties) {
  return {
    'data-testid': 'trigger',
    role: 'button',
    'aria-haspopup': 'menu',
    tabIndex: 0,
    style: { ...baseStyle, ...style },
  } as const;
}

function Trigger({ content, style }: TriggerProps) {
  const { showContextMenu } = useContextMenu();
  return (
    <div {...triggerAttributes(style)} onContextMenu={showContextMenu(content)}>
      Trigger
    </div>
  );
}

function NativeTrigger({ content, style }: TriggerProps) {
  const { showContextMenu } = useContextMenu();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    // `satisfies` guards the public type: the handler must accept native DOM events too.
    const handler = showContextMenu(content) satisfies ((event: MouseEvent) => void) & ((event: TouchEvent) => void);
    element.addEventListener('contextmenu', handler);
    return () => element.removeEventListener('contextmenu', handler);
  }, [content, showContextMenu]);

  return (
    <div {...triggerAttributes(style)} ref={ref}>
      Trigger
    </div>
  );
}

export function renderContextMenu(
  content: ContextMenuContent,
  {
    dir = 'ltr',
    triggerStyle,
    nativeEvents = false,
    ...providerProps
  }: Omit<ContextMenuProviderProps, 'children'> & {
    dir?: 'ltr' | 'rtl';
    triggerStyle?: React.CSSProperties;
    nativeEvents?: boolean;
  } = {}
) {
  const TriggerComponent = nativeEvents ? NativeTrigger : Trigger;
  return render(
    <DirectionProvider initialDirection={dir}>
      <MantineProvider>
        <ContextMenuProvider {...providerProps}>
          <TriggerComponent content={content} style={triggerStyle} />
          <button type="button">Outside</button>
        </ContextMenuProvider>
      </MantineProvider>
    </DirectionProvider>
  );
}
