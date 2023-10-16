import { CodeBlock } from '~/components/CodeBlock';
import { PageNavigation } from '~/components/PageNavigation';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { readCodeFile } from '~/lib/code';
import { getRouteMetadata } from '~/lib/utils';
import { ActionIconsExample } from './ActionIconsExample';

const PATH = '/examples/action-icons';

export const metadata = getRouteMetadata(PATH);

export default async function ActionIconsExamplePage() {
  const code = (await readCodeFile(`${PATH}/ActionIconsExample.tsx`)) as string;

  return (
    <>
      <PageTitle of={PATH} />
      <Txt>You can provide action icons to the context menu items, like so:</Txt>
      <CodeBlock code={code} />
      <Txt>Right-click on the image to trigger the context menu:</Txt>
      <ActionIconsExample />
      <PageNavigation of={PATH} />
    </>
  );
}
