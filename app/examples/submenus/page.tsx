import { Code } from '@mantine/core';
import type { Route } from 'next';
import { CodeBlock } from '~/components/CodeBlock';
import { PageNavigation } from '~/components/PageNavigation';
import { PageSubtitle } from '~/components/PageSubtitle';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { readCodeFile } from '~/lib/code';
import { allPromiseProps, getRouteMetadata } from '~/lib/utils';
import { SubmenuDelayExample } from './SubmenuDelayExample';
import { NestedSubmenuExample, SubmenuExample } from './SubmenuExamples';

const PATH: Route = '/examples/submenus';

export const metadata = getRouteMetadata(PATH);

export default async function ActionColorsExamplePage() {
  const code = await allPromiseProps({
    default: readCodeFile<Record<'submenu' | 'nested-submenu', string>>(`${PATH}/SubmenuExamples.tsx`),
    submenuDelayProviderProp: readCodeFile<string>(`${PATH}/SubmenuDelayProviderPropExample.tsx`),
  });

  return (
    <>
      <PageTitle of={PATH} />
      <Txt>
        An item with an <Code>items</Code> property will render a submenu, available when hovering over the given
        option.
      </Txt>
      <CodeBlock code={code['default']['submenu']} />
      <Txt>Right-click on the image to trigger the context menu:</Txt>
      <SubmenuExample />
      <PageSubtitle value="Nesting" />
      <Txt>
        You can nest as many submenus as you want. Don’t abuse this feature, though, as it might be confusing for the
        user.
      </Txt>
      <CodeBlock code={code['default']['nested-submenu']} />
      <Txt>Right-click on the image to trigger the context menu:</Txt>
      <NestedSubmenuExample />
      <PageSubtitle value="Controlling the show/hide delay" />
      <Txt>
        You can change the default <Code>500ms</Code> delay between hovering over or out of an item and the submenu
        appearing or disappearing by setting the <Code>submenuDelay</Code> property of the{' '}
        <Code>ContextMenuProvider</Code> component.
      </Txt>
      <CodeBlock code={code['submenuDelayProviderProp']} />
      <Txt>Right-click on the image to trigger the context menu:</Txt>
      <SubmenuDelayExample />
      <Txt>Head over to the next example to discover other features.</Txt>
      <PageNavigation of={PATH} />
    </>
  );
}
