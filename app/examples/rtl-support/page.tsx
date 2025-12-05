import { Code } from '@mantine/core';
import type { Route } from 'next';
import { MANTINE_LINK } from '~/app/config';
import { CodeBlock } from '~/components/CodeBlock';
import { ExternalLink } from '~/components/ExternalLink';
import { PageNavigation } from '~/components/PageNavigation';
import { PageSubtitle } from '~/components/PageSubtitle';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { readCodeFile } from '~/lib/code';
import { allPromiseProps, getRouteMetadata } from '~/lib/utils';
import { RtlSupportExample } from './RtlSupportExample';

const PATH: Route = '/examples/rtl-support';

export const metadata = getRouteMetadata(PATH);

export default async function RtlSupportExamplePage() {
  const code = await allPromiseProps({
    'RtlProviderExample.tsx': readCodeFile<string>(`${PATH}/RtlProviderExample.tsx`),
    'RtlSupportExampleContent.tsx': readCodeFile<string>(`${PATH}/RtlSupportExampleContent.tsx`),
  });

  return (
    <>
      <PageTitle of={PATH} />
      <Txt>
        Mantine ContextMenu fully supports RTL (right-to-left) layouts, making it suitable for Arabic, Hebrew, Persian,
        and other RTL languages. The component automatically detects and adapts to the text direction when wrapped in
        Mantine's <Code>DirectionProvider</Code>.
      </Txt>
      <PageSubtitle value="How RTL support works" />
      <Txt>When using RTL mode, the context menu automatically adjusts:</Txt>
      <ul>
        <li>
          <strong>Menu positioning</strong> — The menu appears to the left of the cursor instead of the right, ensuring
          it stays within viewport bounds
        </li>
        <li>
          <strong>Text alignment</strong> — Text and content align to the right, following RTL reading direction
        </li>
        <li>
          <strong>Icon spacing</strong> — Icons are positioned on the correct side using logical CSS properties (
          <Code>margin-inline-start</Code> and <Code>margin-inline-end</Code>)
        </li>
        <li>
          <strong>Submenu positioning</strong> — Submenus open to the left of their parent items, with properly
          positioned indicators
        </li>
      </ul>
      <PageSubtitle value="Setting up RTL" />
      <Txt>
        To enable RTL support, wrap your application (or the relevant section) in Mantine's{' '}
        <Code>DirectionProvider</Code> component. The context menu will automatically detect the direction using
        Mantine's <Code>useDirection</Code> hook:
      </Txt>
      <CodeBlock code={code['RtlProviderExample.tsx']} />
      <Txt>
        The <Code>DirectionProvider</Code> (see{' '}
        <ExternalLink to={`${MANTINE_LINK}/core/direction-provider/`}>Mantine DirectionProvider docs</ExternalLink>)
        sets the text direction for all Mantine components within its context. The context menu automatically reads this
        direction and adjusts its behavior accordingly.
      </Txt>
      <PageSubtitle value="Interactive example" />
      <Txt>
        Toggle the switch below to test RTL support. Try right-clicking at different positions (left, center, right
        edges of the image) to see how the menu intelligently positions itself. Notice how submenus open in the correct
        direction and all text, icons, and indicators are properly aligned:
      </Txt>
      <CodeBlock code={code['RtlSupportExampleContent.tsx']} />
      <RtlSupportExample />
      <Txt>Head over to the next example to discover other features.</Txt>
      <PageNavigation of={PATH} />
    </>
  );
}
