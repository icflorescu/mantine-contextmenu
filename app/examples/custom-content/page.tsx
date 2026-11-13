import { Code } from '@mantine/core';
import type { Route } from 'next';
import { CodeBlock } from '~/components/CodeBlock';
import { PageNavigation } from '~/components/PageNavigation';
import { PageSubtitle } from '~/components/PageSubtitle';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { readCodeFile } from '~/lib/code';
import { allPromiseProps, getRouteMetadata } from '~/lib/utils';
import { CustomContentExample } from './CustomContentExample';
import { InteractiveContentExample } from './InteractiveContentExample';

const PATH: Route = '/examples/custom-content';

export const metadata = getRouteMetadata(PATH);

export default async function CustomContentExamplePage() {
  const code = await allPromiseProps({
    'CustomContentExample.tsx': readCodeFile<string>(`${PATH}/CustomContentExample.tsx`),
    'FancyButton.tsx': readCodeFile<string>(`${PATH}/FancyButton.tsx`),
    'FancyButton.module.css': readCodeFile<string>(`${PATH}/FancyButton.module.css`),
  });
  const interactiveCode = await readCodeFile<string>(`${PATH}/InteractiveContentExample.tsx`);

  return (
    <>
      <PageTitle of={PATH} />
      <Txt>
        You can also display custom content in the context menu by providing a render callback to the{' '}
        <Code>showContextMenu</Code> function instead of an array of items.
        <br />
        The render callback will receive a <Code>close</Code> function that you can use to close the menu.
        <br />
        Have a look at the example below to see how it works:
      </Txt>
      <CodeBlock tabs={{ code, keys: ['CustomContentExample.tsx', 'FancyButton.tsx', 'FancyButton.module.css'] }} />
      <Txt>Right-click on the image to trigger the context menu:</Txt>
      <CustomContentExample />
      <PageSubtitle value="Interactive content" />
      <Txt>
        Custom content can contain interactive elements such as inputs, sliders or checkboxes; the menu is only closed
        when clicking outside of it, pressing <Code>Escape</Code>, or when you call the <Code>close</Code> function.
        <br />
        Keep in mind that the render callback is called with the values available when the menu is shown, so interactive
        content should keep its own state in a separate component, like in the example below:
      </Txt>
      <CodeBlock code={interactiveCode} />
      <Txt>Right-click on the image to adjust it:</Txt>
      <InteractiveContentExample />
      <Txt>Head over to the next example to discover other features.</Txt>
      <PageNavigation of={PATH} />
    </>
  );
}
