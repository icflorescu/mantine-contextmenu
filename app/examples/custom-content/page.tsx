import { Code } from '@mantine/core';
import { CodeBlock } from '~/components/CodeBlock';
import { PageNavigation } from '~/components/PageNavigation';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { readCodeFile } from '~/lib/code';
import { allPromiseProps, getRouteMetadata } from '~/lib/utils';
import { CustomContentExample } from './CustomContentExample';

const PATH = '/examples/custom-content';

export const metadata = getRouteMetadata(PATH);

export default async function CustomContentExamplePage() {
  const code = await allPromiseProps({
    'CustomContentExample.tsx': readCodeFile<string>(`${PATH}/CustomContentExample.tsx`),
    'FancyButton.tsx': readCodeFile<string>(`${PATH}/FancyButton.tsx`),
    'FancyButton.module.css': readCodeFile<string>(`${PATH}/FancyButton.module.css`),
  });

  return (
    <>
      <PageTitle of={PATH} />
      <Txt>
        You can also display custom content in the context menu by providing a render callback to the
        <Code>showContextMenu</Code> function instead of an array of items.
        <br />
        The render callback will receive a <Code>close</Code>
        function that you can use to close the menu.
        <br />
        Have a look at the example below to see how it works:
      </Txt>
      <CodeBlock tabs={{ code, keys: ['CustomContentExample.tsx', 'FancyButton.tsx', 'FancyButton.module.css'] }} />
      <Txt>Right-click on the image to trigger the context menu:</Txt>
      <CustomContentExample />
      <Txt>Head over to the next example to discover other features.</Txt>
      <PageNavigation of={PATH} />
    </>
  );
}
