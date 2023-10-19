import { Code } from '@mantine/core';
import { MANTINE_LINK } from '~/app/config';
import { CodeBlock } from '~/components/CodeBlock';
import { ExternalLink } from '~/components/ExternalLink';
import { PageNavigation } from '~/components/PageNavigation';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { readCodeFile } from '~/lib/code';
import { allPromiseProps, getRouteMetadata } from '~/lib/utils';
import { BasicConfigurationExample } from './BasicConfigurationExample';

const PATH = '/examples/basic-configuration';

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
      <PageNavigation of={PATH} />
    </>
  );
}
