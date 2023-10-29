import type { Route } from 'next';
import { CodeBlock } from '~/components/CodeBlock';
import { PageNavigation } from '~/components/PageNavigation';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { readCodeFile } from '~/lib/code';
import { getRouteMetadata } from '~/lib/utils';
import { ActionTitlesExample } from './ActionTitlesExample';

const PATH: Route = '/examples/action-titles';

export const metadata = getRouteMetadata(PATH);

export default async function ActionTitlesExamplePage() {
  const code = await readCodeFile<string>(`${PATH}/ActionTitlesExample.tsx`);

  return (
    <>
      <PageTitle of={PATH} />
      <Txt>
        If you’re not happy with the titles that are generated automatically based on the action keys, you can provide
        your own, like so:
      </Txt>
      <CodeBlock code={code} />
      <Txt>Right-click on the image to trigger the context menu:</Txt>
      <ActionTitlesExample />
      <Txt>Head over to the next example to discover other features.</Txt>
      <PageNavigation of={PATH} />
    </>
  );
}
