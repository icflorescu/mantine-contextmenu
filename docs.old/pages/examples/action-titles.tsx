import { Container } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import CodeBlock from '~/components/CodeBlock';
import PageNavigation from '~/components/PageNavigation';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import ActionTitlesExample from '~/examples/ActionTitlesExample';
import readCodeExample from '~/lib/readCodeExample';

const PATH = 'examples/action-titles';

export const getStaticProps: GetStaticProps<{ code: string }> = async () => ({
  props: { code: (await readCodeExample('examples/ActionTitlesExample.tsx')) as string },
});

export default function Page({ code }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <PageTitle of={PATH} />
      <PageText>
        If you’re not happy with the titles that are generated automatically based on the action keys, you can provide
        your own, like so:
      </PageText>
      <CodeBlock language="typescript" content={code} />
      <PageText>Right-click on the image to trigger the context menu:</PageText>
      <ActionTitlesExample />
      <PageNavigation of={PATH} />
    </Container>
  );
}
