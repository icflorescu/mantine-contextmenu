import { Code } from '@mantine/core';
import { CodeBlock } from '~/components/CodeBlock';
import { PageNavigation } from '~/components/PageNavigation';
import { PageSubtitle } from '~/components/PageSubtitle';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { readCodeFile } from '~/lib/code';
import { getRouteMetadata } from '~/lib/utils';
import { NestedSubmenuExample, SubmenuExample } from './SubmenuExamples';

const PATH = '/examples/submenus';

export const metadata = getRouteMetadata(PATH);

export default async function ActionColorsExamplePage() {
  const code = (await readCodeFile(`${PATH}/SubmenuExamples.tsx`)) as Record<'submenu' | 'nested-submenu', string>;

  return (
    <>
      <PageTitle of={PATH} />
      <Txt>
        An item with an <Code>items</Code> property will render a submenu, available when hovering over the given
        option.
      </Txt>
      <CodeBlock code={code['submenu']} />
      <Txt>Right-click on the image to trigger the context menu:</Txt>
      <SubmenuExample />
      <PageSubtitle value="Nesting" />
      <Txt>
        You can nest as many submenus as you want. Don’t abuse this feature, though, as it might be confusing for the
        user.
      </Txt>
      <CodeBlock code={code['nested-submenu']} />
      <Txt>Right-click on the image to trigger the context menu:</Txt>
      <NestedSubmenuExample />
      <PageNavigation of={PATH} />
    </>
  );
}
