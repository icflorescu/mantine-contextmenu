import { Code } from '@mantine/core';
import type { Route } from 'next';
import { MANTINE_LINK } from '~/app/config';
import { CodeBlock } from '~/components/CodeBlock';
import { ExternalLink } from '~/components/ExternalLink';
import { PageNavigation } from '~/components/PageNavigation';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { readCodeFile } from '~/lib/code';
import { allPromiseProps, getRouteMetadata } from '~/lib/utils';
import { BasicConfigurationExample } from './BasicConfigurationExample';

const PATH: Route = '/examples/basic-configuration';

export const metadata = getRouteMetadata(PATH);

export default async function BasicConfigurationExamplePage() {
  const code = await allPromiseProps({
    'ProviderPropsExample.tsx': readCodeFile<string>(`${PATH}/ProviderPropsExample.tsx`),
    'BasicConfigurationExampleContent.tsx': readCodeFile<string>(`${PATH}/BasicConfigurationExampleContent.tsx`),
  });

  return (
    <>
      <PageTitle of={PATH} />
      <Txt>
        The <Code>ContextMenuProvider</Code> component accepts the following props that are used as default values for
        the context menu container:
      </Txt>
      <ul>
        <li>
          <Code>zIndex: number</Code> → defaults to <Code>9999</Code>
        </li>
        <li>
          <Code>shadow: MantineShadow</Code> → defaults to <Code>sm</Code> (see{' '}
          <ExternalLink to={`${MANTINE_LINK}/core/paper/`}>Mantine Paper</ExternalLink> docs)
        </li>
        <li>
          <Code>borderRadius: MantineSize</Code> → defaults to <Code>xs</Code> (see{' '}
          <ExternalLink to={`${MANTINE_LINK}/core/paper/`}>Mantine Paper</ExternalLink> docs)
        </li>
        <li>
          <Code>repositionOnRepeat: boolean</Code> → defaults to <Code>false</Code>
          <br />
          Whether to reposition the context menu when the triggering event repeats.
          <br />
          If set to true, the context menu will reposition itself to the position of the triggering event.
          <br />
          If unset or set to false, the context menu will hide automatically when the triggering event repeats.
        </li>
      </ul>
      <CodeBlock code={code['ProviderPropsExample.tsx']} />
      <Txt>
        The <Code>zIndex</Code> value can be overridden by setting the <Code>zIndex</Code> property to the{' '}
        <em>options</em> object passed as the second argument to the <Code>showContextMenu</Code> function returned by
        the <Code>useContextMenu</Code> hook:
      </Txt>
      <CodeBlock code={code['BasicConfigurationExampleContent.tsx']} />
      <Txt>Right-click on the image to trigger the context menu:</Txt>
      <BasicConfigurationExample />
      <Txt>Head over to the next example to discover other features.</Txt>
      <PageNavigation of={PATH} />
    </>
  );
}
