import { Code } from '@mantine/core';
import { CodeBlock } from '~/components/CodeBlock';
import { PageNavigation } from '~/components/PageNavigation';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { readCodeFile } from '~/lib/code';
import { getRouteMetadata } from '~/lib/utils';
import { ImperativeHidingExample } from './ImperativeHidingExample';

const PATH = '/examples/imperative-hiding';

export const metadata = getRouteMetadata(PATH);

export default async function ImperativeHidingExamplePage() {
  const code = await readCodeFile<string>(`${PATH}/ImperativeHidingExample.tsx`);

  return (
    <>
      <PageTitle of={PATH} />
      <Txt>
        A visible context menu hides automatically when the user clicks anywhere on the page, hits the{' '}
        <Code>Escape</Code> key, scrolls the or resizes the browser window.
      </Txt>
      <Txt>
        However, you can also hide the context menu <em>imperatively</em> by calling the <Code>hideContextMenu</Code>{' '}
        function returned by the <Code>useContextMenu</Code> hook.
      </Txt>
      <Txt>
        The <Code>useContextMenu</Code> hook also returns an <Code>isContextMenuVisible</Code> boolean that you can use
        to determine whether the context menu is currently visible.
      </Txt>
      <Txt>
        In the example below, we’ll hide the context menu automatically when the user presses the <Code>H</Code> key,
        his mouse cursor leaves the page, or after five seconds have elapsed:
      </Txt>
      <CodeBlock code={code} />
      <Txt>Right-click on the image below to show the context menu:</Txt>
      <ImperativeHidingExample />
      <PageNavigation of={PATH} />
    </>
  );
}
