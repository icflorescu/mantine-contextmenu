import { Container } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import CodeBlock from '~/components/CodeBlock';
import PageNavigation from '~/components/PageNavigation';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import ActionColorsExample from '~/examples/ActionColorsExample';
import readCodeExample from '~/lib/readCodeExample';

const PATH = 'examples/action-colors';

export const getStaticProps: GetStaticProps<{ code: string }> = async () => ({
  props: { code: (await readCodeExample('examples/ActionColorsExample.tsx')) as string },
});

export default function Page({ code }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <PageTitle of={PATH} />
      <PageText>You can provide action colors to the context menu items, like so:</PageText>
      <CodeBlock language="typescript" content={code} />
      <PageText>Right-click on the image to trigger the context menu:</PageText>
      <ActionColorsExample />
      <PageNavigation of={PATH} />
    </Container>
  );
}
