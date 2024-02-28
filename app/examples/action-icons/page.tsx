import { Code } from '@mantine/core';
import type { Route } from 'next';
import { CodeBlock } from '~/components/CodeBlock';
import { PageNavigation } from '~/components/PageNavigation';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { readCodeFile } from '~/lib/code';
import { getRouteMetadata } from '~/lib/utils';
import { ActionIconsExample } from './ActionIconsExample';

const PATH: Route = '/examples/action-icons';

export const metadata = getRouteMetadata(PATH);

export default async function ActionIconsExamplePage() {
  const code = await readCodeFile<string>(`${PATH}/ActionIconsExample.tsx`);

  return (
    <>
      <PageTitle of={PATH} />
      <Txt>
        You can provide action icons to the context menu items by setting the <Code>icon</Code> and{' '}
        <Code>iconRight</Code> properties, like so:
      </Txt>
      <CodeBlock code={code} />
      <Txt>Right-click on the image to trigger the context menu:</Txt>
      <ActionIconsExample />
      <Txt>Head over to the next example to discover other features.</Txt>
      <PageNavigation of={PATH} />
    </>
  );
}
