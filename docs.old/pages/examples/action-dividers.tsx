import { Code, Container } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import CodeBlock from '~/components/CodeBlock';
import PageNavigation from '~/components/PageNavigation';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import ActionDividersExample from '~/examples/ActionDividersExample';
import readCodeExample from '~/lib/readCodeExample';

const PATH = 'examples/action-dividers';

export const getStaticProps: GetStaticProps<{ code: string }> = async () => ({
  props: { code: (await readCodeExample('examples/ActionDividersExample.tsx')) as string },
});

export default function Page({ code }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <PageTitle of={PATH} />
      <PageText>
        An item without an <Code>onClick</Code> handler or an <Code>items</Code> property will be rendered as a divider,
        like so:
      </PageText>
      <CodeBlock language="typescript" content={code} />
      <PageText>Right-click on the image to trigger the context menu:</PageText>
      <ActionDividersExample />
      <PageNavigation of={PATH} />
    </Container>
  );
}
