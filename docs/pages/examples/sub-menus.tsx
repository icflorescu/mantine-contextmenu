import {Code, Container} from '@mantine/core';
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
        An item with a <Code>submenu</Code> property will render a sub context menu, available when hovering over the given option.
        The field is the same as the config array, with support for nesting.
      </PageText>
      <CodeBlock language="typescript" content={code} />
      <PageText>Right-click on any image to trigger the context menu:</PageText>
      <SubMenuExample />
      <PageNavigation of={PATH} />
    </Container>
  );
}
