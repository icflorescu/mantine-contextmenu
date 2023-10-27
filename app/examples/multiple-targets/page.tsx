import { CodeBlock } from '~/components/CodeBlock';
import { PageNavigation } from '~/components/PageNavigation';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { readCodeFile } from '~/lib/code';
import { getRouteMetadata } from '~/lib/utils';
import { MultipleTargetsExample } from './MultipleTargetsExample';

const PATH = '/examples/multiple-targets';

export const metadata = getRouteMetadata(PATH);

export default async function MultipleTargetsExamplePage() {
  const code = await readCodeFile<string>(`${PATH}/MultipleTargetsExample.tsx`);

  return (
    <>
      <PageTitle of={PATH} />
      <Txt>
        Since its component tree is only created when you right-click on a target element and destroyed when hidden,
        implementing the context menu functionality on multiple target will not result in performance issues.
      </Txt>
      <Txt>
        In the example below, a single context menu instance is generated when needed and destroyed when hidden:
      </Txt>
      <CodeBlock code={code} />
      <Txt>Right-click on the image to trigger the context menu:</Txt>
      <MultipleTargetsExample />
      <Txt>Head over to the next example to discover other features.</Txt>
      <PageNavigation of={PATH} />
    </>
  );
}
