import { Code, Container } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import CodeBlock from '~/components/CodeBlock';
import PageNavigation from '~/components/PageNavigation';
import PageSubtitle from '~/components/PageSubtitle';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import { NestedSubmenuExample, SubmenuExample } from '~/examples/SubmenuExamples';
import readCodeExample from '~/lib/readCodeExample';

const PATH = 'examples/submenus';

type Example = 'submenu' | 'nested-submenu';

export const getStaticProps: GetStaticProps<{ code: Record<Example, string> }> = async () => ({
  props: {
    code: (await readCodeExample('examples/SubmenuExamples.tsx')) as Record<Example, string>,
  },
});

export default function Page({ code }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <PageTitle of={PATH} />
      <PageText>
        An item with an <Code>items</Code> property will render a submenu, available when hovering over the given
        option.
      </PageText>
      <CodeBlock language="typescript" content={code['submenu']} />
      <PageText>Right-click on the image below to trigger the context menu:</PageText>
      <SubmenuExample />
      <PageSubtitle value="Nesting support" />
      <PageText>
        You can nest as many submenus as you want. Don’t abuse this feature, though, as it might be confusing for the
        user.
      </PageText>
      <CodeBlock language="typescript" content={code['nested-submenu']} />
      <PageText>Right-click on the image below to trigger a deeply nested context menu:</PageText>
      <NestedSubmenuExample />
      <PageNavigation of={PATH} />
    </Container>
  );
}
