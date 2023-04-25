import { Code, Container } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import CodeBlock from '~/components/CodeBlock';
import CodeFiles from '~/components/CodeBlockTabs';
import ExternalLink from '~/components/ExternalLink';
import InternalLink from '~/components/InternalLink';
import PageNavigation from '~/components/PageNavigation';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import GettingStartedExample from '~/examples/GettingStartedExample';
import allPromiseProps from '~/lib/allPromiseProps';
import { getFirstExamplePagePath } from '~/lib/page';
import readCodeExample from '~/lib/readCodeExample';

const PATH = 'getting-started';

export const getStaticProps: GetStaticProps<{ code: Record<'app' | 'example', string> }> = async () => ({
  props: {
    code: await allPromiseProps({
      app: readCodeExample('examples/_app.tsx') as Promise<string>,
      example: readCodeExample('examples/GettingStartedExample.tsx') as Promise<string>,
    }),
  },
});

export default function Page({ code }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <PageTitle of={PATH} />
      <PageText>
        If you’re using Next.js, Vite, Create React App, Remix or Gatsby, make sure to have a look at{' '}
        <ExternalLink to="https://mantine.dev/pages/getting-started/">Getting started with Mantine</ExternalLink> page.
      </PageText>
      <PageText>
        Mantine ContextMenu depends on <Code>@mantine/core</Code> and <Code>@mantine/hooks</Code>.
        <br />
        Mantine also depends on <Code>@emotion/react</Code> (and <Code>@emotion/server</Code> when used with SSR
        frameworks).
        <br />
      </PageText>
      <PageText>Install the package and its dependencies:</PageText>
      <CodeFiles
        items={[
          {
            title: 'yarn',
            language: 'bash',
            content: 'yarn add @mantine/core @mantine/hooks @emotion/react mantine-contextmenu',
          },
          {
            title: 'pnpm',
            language: 'bash',
            content: 'pnpm i @mantine/core @mantine/hooks @emotion/react mantine-contextmenu',
          },
          {
            title: 'npm',
            language: 'bash',
            content: 'npm i @mantine/core @mantine/hooks @emotion/react mantine-contextmenu',
          },
        ]}
      />
      <PageText info>
        If you are using Next.js, you also need to install <Code>@mantine/next</Code> and <Code>@emotion/server</Code>{' '}
        and make sure to follow the Mantine{' '}
        <ExternalLink to="https://mantine.dev/guides/next/">usage with Next.js</ExternalLink> guide.
      </PageText>
      <PageText>
        Wrap your application with the <Code>ContextMenuProvider</Code> component.
        <br />
        Make sure to place the <Code>ContextMenuProvider</Code> below <Code>MantineProvider</Code>.
      </PageText>
      <PageText>
        For example, if you are using Next.js, you can wrap your application in <Code>_app.tsx</Code> file like so:
      </PageText>
      <CodeBlock language="typescript" content={code.app} />
      <PageText>
        Then you can import the <Code>useContextMenu</Code> hook and use it in your components like so:
      </PageText>
      <CodeBlock language="typescript" content={code.example} />
      <PageText>Right-click on the image to trigger the context menu:</PageText>
      <GettingStartedExample />
      <PageText>
        <InternalLink to={getFirstExamplePagePath()}>Browse the code examples</InternalLink> to see the context menu in
        action and learn how to use it, and refer to the{' '}
        <InternalLink to="/type-definitions">type definitions page</InternalLink> for the exhaustive list of
        customizable options.
      </PageText>
      <PageNavigation of={PATH} />
    </Container>
  );
}
