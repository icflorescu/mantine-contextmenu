import { Container } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import CodeBlock from '~/components/CodeBlock';
import PageNavigation from '~/components/PageNavigation';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import readCodeExample from '~/lib/readCodeExample';

const PATH = 'type-definitions';

export const getStaticProps: GetStaticProps<{ code: string }> = async () => ({
  props: { code: (await readCodeExample('../package/types.ts')) as string },
});

export default function Page({ code }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <PageTitle of={PATH} />
      <PageText>
        Mantine ContextMenu is written in TypeScript and the component properties are well documented with additional
        JSDoc annotations, so you can harness the full power of your IDE to build type safe applications with
        confidence.
      </PageText>
      <CodeBlock language="typescript" content={code} noCopy />
      <PageNavigation of={PATH} />
    </Container>
  );
}
