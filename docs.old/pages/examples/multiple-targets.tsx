import { Container } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import CodeBlock from '~/components/CodeBlock';
import PageNavigation from '~/components/PageNavigation';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import MultipleTargetsExample from '~/examples/MultipleTargetsExample';
import readCodeExample from '~/lib/readCodeExample';

const PATH = 'examples/multiple-targets';

export const getStaticProps: GetStaticProps<{ code: string }> = async () => ({
  props: { code: (await readCodeExample('examples/MultipleTargetsExample.tsx')) as string },
});

export default function Page({ code }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <PageTitle of={PATH} />
      <PageText>
        Since its component tree is only created when you right-click on a target element and destroyed when hidden,
        implementing the context menu functionality on multiple target will not result in performance issues.
      </PageText>
      <PageText>
        In the example below, a single context menu instance is generated when needed and destroyed when hidden:
      </PageText>
      <CodeBlock language="typescript" content={code} />
      <PageText>Right-click on any image to trigger the context menu:</PageText>
      <MultipleTargetsExample />
      <PageNavigation of={PATH} />
    </Container>
  );
}
