import { Code } from '@mantine/core';
import type { Route } from 'next';
import { CodeBlock } from '~/components/CodeBlock';
import { InternalLink } from '~/components/InternalLink';
import { PageNavigation } from '~/components/PageNavigation';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { readCodeFile } from '~/lib/code';
import { getRouteMetadata } from '~/lib/utils';
import { ActionDividersExample } from './ActionDividersExample';

const PATH: Route = '/examples/action-dividers';

export const metadata = getRouteMetadata(PATH);

export default async function ActionDividersExamplePage() {
  const code = await readCodeFile<string>(`${PATH}/ActionDividersExample.tsx`);

  return (
    <>
      <PageTitle of={PATH} />
      <Txt>
        An item missing both its{' '}
        <InternalLink to="/examples/basic-usage">
          <Code>onClick</Code> handler
        </InternalLink>{' '}
        and{' '}
        <InternalLink to="/examples/submenus">
          <Code>items</Code> property
        </InternalLink>{' '}
        will be rendered as a divider, like so:
      </Txt>
      <CodeBlock code={code} />
      <Txt>Right-click on the image to trigger the context menu:</Txt>
      <ActionDividersExample />
      <Txt>Head over to the next example to discover other features.</Txt>
      <PageNavigation of={PATH} />
    </>
  );
}
