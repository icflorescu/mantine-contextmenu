import { Container } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import CodeBlock from '~/components/CodeBlock';
import PageNavigation from '~/components/PageNavigation';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import SubMenuExample from '~/examples/SubMenuExample';
import readCodeExample from '~/lib/readCodeExample';

const PATH = 'examples/sub-menus';

export const getStaticProps: GetStaticProps<{ code: string }> = async () => ({
  props: { code: (await readCodeExample('examples/SubMenuExample.tsx')) as string },
});

export default function Page({ code }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <PageTitle of={PATH} />
      <PageText>
        a // TODO
      </PageText>
      <PageText>
        b // TODO
      </PageText>
      <CodeBlock language="typescript" content={code} />
      <PageText>Right-click on any image to trigger the context menu:</PageText>
      <SubMenuExample />
      <PageNavigation of={PATH} />
    </Container>
  );
}
