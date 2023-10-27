import { Code } from '@mantine/core';
import { CodeBlock } from '~/components/CodeBlock';
import { PageNavigation } from '~/components/PageNavigation';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { readCodeFile } from '~/lib/code';
import { getRouteMetadata } from '~/lib/utils';
import { ConditionallyDisablingItemsExample } from './ConditionallyDisablingItemsExample';

const PATH = '/examples/conditionally-disabling-items';

export const metadata = getRouteMetadata(PATH);

export default async function HidingItemsContitionallyExamplePage() {
  const code = await readCodeFile<string>(`${PATH}/ConditionallyDisablingItemsExample.tsx`);

  return (
    <>
      <PageTitle of={PATH} />
      <Txt>
        You can conditionally disable a menu item by setting its <Code>disabled</Code> property to <Code>true</Code>:
      </Txt>
      <CodeBlock code={code} />
      <Txt>Right-click on the image to trigger the context menu:</Txt>
      <ConditionallyDisablingItemsExample />
      <Txt>
        Head over to the next example to learn how you could conditionally <strong>hide</strong> a menu item instead of
        disabling it.
      </Txt>
      <PageNavigation of={PATH} />
    </>
  );
}
