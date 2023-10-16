import { CodeBlock } from '~/components/CodeBlock';
import { PageNavigation } from '~/components/PageNavigation';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { readCodeFile } from '~/lib/code';
import { getRouteMetadata } from '~/lib/utils';
import { ActionColorsExample } from './ActionColorsExample';

const PATH = '/examples/action-colors';

export const metadata = getRouteMetadata(PATH);

export default async function ActionColorsExamplePage() {
  const code = (await readCodeFile(`${PATH}/ActionColorsExample.tsx`)) as string;

  return (
    <>
      <PageTitle of={PATH} />
      <Txt>You can specify action colors for the context menu items, like so:</Txt>
      <CodeBlock code={code} />
      <Txt>Right-click on the image to trigger the context menu:</Txt>
      <ActionColorsExample />
      <PageNavigation of={PATH} />
    </>
  );
}
