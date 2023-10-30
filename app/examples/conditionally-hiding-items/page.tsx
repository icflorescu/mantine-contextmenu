import { Code } from '@mantine/core';
import type { Route } from 'next';
import { CodeBlock } from '~/components/CodeBlock';
import { PageNavigation } from '~/components/PageNavigation';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { readCodeFile } from '~/lib/code';
import { getRouteMetadata } from '~/lib/utils';
import { ConditionallyHidingItemsExample } from './ConditionallyHidingItemsExample';

const PATH: Route = '/examples/conditionally-hiding-items';

export const metadata = getRouteMetadata(PATH);

export default async function HidingItemsContitionallyExamplePage() {
  const code = await readCodeFile<string>(`${PATH}/ConditionallyHidingItemsExample.tsx`);

  return (
    <>
      <PageTitle of={PATH} />
      <Txt>
        You can conditionally hide a menu item by setting its <Code>hidden</Code> property to <Code>true</Code>:
      </Txt>
      <CodeBlock code={code} />
      <Txt>Right-click on the image to trigger the context menu:</Txt>
      <ConditionallyHidingItemsExample />
      <Txt>Head over to the next example to discover other features.</Txt>
      <PageNavigation of={PATH} />
    </>
  );
}
