import { Code, Container } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import CodeBlock from '~/components/CodeBlock';
import ExternalLink from '~/components/ExternalLink';
import PageNavigation from '~/components/PageNavigation';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import BasicConfigurationExample from '~/examples/BasicConfigurationExample';
import allPromiseProps from '~/lib/allPromiseProps';
import readCodeExample from '~/lib/readCodeExample';

const PATH = 'examples/basic-configuration';

export const getStaticProps: GetStaticProps<{ code: Record<'provider' | 'example', string> }> = async () => ({
  props: {
    code: await allPromiseProps({
      provider: readCodeExample('examples/_app-provider-props.tsx') as Promise<string>,
      example: readCodeExample('examples/BasicConfigurationExample.tsx') as Promise<string>,
    }),
  },
});

export default function Page({ code }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <PageTitle of={PATH} />
      <PageText>
        The <Code>ContextMenuProvider</Code> component accepts the following props that are used as default values for
        the context menu container:
        <ul>
          <li>
            <Code>zIndex</Code> → number; defaults to <Code>9999</Code>
          </li>
          <li>
            <Code>shadow</Code> → a <Code>MantineShadow</Code> value; see{' '}
            <ExternalLink to="https://mantine.dev/core/paper/">
              Mantine <Code>Paper</Code> documentation
            </ExternalLink>
            ; defaults to <Code>sm</Code>
          </li>
          <li>
            <Code>borderRadius</Code> → a <Code>MantineNumberSize</Code> value; see{' '}
            <ExternalLink to="https://mantine.dev/core/paper/">
              Mantine <Code>Paper</Code> documentation
            </ExternalLink>
            ; defaults to <Code>xs</Code>
          </li>
        </ul>
      </PageText>
      <CodeBlock language="typescript" content={code.provider} />
      <PageText>
        These props are used as default values for the context menu and you can override them by passing the same props
        as the second argument to the <Code>showContextMenu</Code> function returned by the <Code>useContextMenu</Code>{' '}
        hook:
      </PageText>
      <CodeBlock language="typescript" content={code.example} />
      <PageText>Right-click on the image to trigger the context menu:</PageText>
      <BasicConfigurationExample />
      <PageNavigation of={PATH} />
    </Container>
  );
}
