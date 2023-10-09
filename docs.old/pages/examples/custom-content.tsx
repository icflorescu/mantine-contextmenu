import { Code, Container } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import CodeBlockTabs from '~/components/CodeBlockTabs';
import PageNavigation from '~/components/PageNavigation';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import CustomContentExample from '~/examples/CustomContentExample';
import allPromiseProps from '~/lib/allPromiseProps';
import readCodeExample from '~/lib/readCodeExample';

const PATH = 'examples/custom-content';

export const getStaticProps: GetStaticProps<{
  code: Record<'example' | 'fancy-button', string>;
}> = async () => ({
  props: {
    code: await allPromiseProps({
      example: readCodeExample('examples/CustomContentExample.tsx') as Promise<string>,
      'fancy-button': readCodeExample('examples/FancyButton.tsx') as Promise<string>,
    }),
  },
});

export default function Page({ code }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <PageTitle of={PATH} />
      <PageText>
        You can also display custom content in the context menu by providing a render callback to the{' '}
        <Code>showContextMenu</Code> function instead of an array of items.
        <br />
        The render callback will receive a <Code>close</Code> function that you can use to close the menu.
        <br />
        Have a look at the example below to see how it works:
      </PageText>
      <CodeBlockTabs
        items={[
          {
            title: 'CustomContentExample.tsx',
            language: 'typescript',
            content: code['example'],
          },
          { title: 'FancyButton.tsx', language: 'typescript', content: code['fancy-button'] },
        ]}
      />
      <PageText>Right-click on the image to trigger the context menu:</PageText>
      <CustomContentExample />
      <PageNavigation of={PATH} />
    </Container>
  );
}
