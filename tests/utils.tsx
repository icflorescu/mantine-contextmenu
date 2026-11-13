import { DirectionProvider, MantineProvider } from '@mantine/core';
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

function Trigger({ content, style }: TriggerProps) {
  const { showContextMenu } = useContextMenu();
  return (
    // biome-ignore lint/a11y/useSemanticElements: mimics a focusable, non-button context menu target
    <div
      data-testid="trigger"
      role="button"
      aria-haspopup="menu"
      tabIndex={0}
      style={{ position: 'fixed', top: 50, left: 50, width: 300, height: 200, ...style }}
      onContextMenu={showContextMenu(content)}
    >
      Trigger
    </div>
  );
}

export function renderContextMenu(
  content: ContextMenuContent,
  {
    dir = 'ltr',
    triggerStyle,
    ...providerProps
  }: Omit<ContextMenuProviderProps, 'children'> & { dir?: 'ltr' | 'rtl'; triggerStyle?: React.CSSProperties } = {}
) {
  return render(
    <DirectionProvider initialDirection={dir}>
      <MantineProvider>
        <ContextMenuProvider {...providerProps}>
          <Trigger content={content} style={triggerStyle} />
          <button type="button">Outside</button>
        </ContextMenuProvider>
      </MantineProvider>
    </DirectionProvider>
  );
}
