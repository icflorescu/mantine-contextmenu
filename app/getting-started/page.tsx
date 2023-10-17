import { Code } from '@mantine/core';
import { MANTINE_LINK, PACKAGE_NAME, PRODUCT_NAME } from '~/app/config';
import { CodeBlock } from '~/components/CodeBlock';
import { ExternalLink } from '~/components/ExternalLink';
import { InternalLink } from '~/components/InternalLink';
import { PageNavigation } from '~/components/PageNavigation';
import { PageSubtitle } from '~/components/PageSubtitle';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { readCodeFile } from '~/lib/code';
import { allPromiseProps, getFirstExampleRoute, getRouteMetadata } from '~/lib/utils';
import GettingStartedExample from './GettingStartedExample';

const PATH = '/getting-started';

export const metadata = getRouteMetadata(PATH);

export default async function GettingStartedPage() {
  const code = await allPromiseProps({
    'RootLayout.tsx': readCodeFile<string>(`${PATH}/RootLayout.tsx`),
    'layout.css': readCodeFile<string>(`${PATH}/layout.css`),
    'GettingStartedExample.tsx': readCodeFile<string>(`${PATH}/GettingStartedExample.tsx`),
  });

  const { href: firstExampleHref } = getFirstExampleRoute();

  return (
    <>
      <PageTitle of={PATH} />
      <Txt>
        {PRODUCT_NAME} depends on <Code>@mantine/core</Code> and <Code>@mantine/hooks</Code>.
      </Txt>
      <Txt>
        Create a new <ExternalLink to={`${MANTINE_LINK}pages/getting-started/`}>application with Mantine</ExternalLink>{' '}
        and install the package:
      </Txt>
      <CodeBlock
        tabs={[
          {
            language: 'shell',
            fileName: 'yarn',
            code: `yarn add ${PACKAGE_NAME}`,
          },
          { language: 'shell', fileName: 'npm', code: `npm i ${PACKAGE_NAME}` },
          { language: 'shell', fileName: 'pnpm', code: `pnpm i ${PACKAGE_NAME}` },
        ]}
      />
      <Txt>
        Wrap your application in a <Code>ContextMenuProvider</Code> <strong>inside</strong> the{' '}
        <Code>MantineProvider</Code> and don’t forget to import the necessary CSS files{' '}
        <strong>in the correct order</strong>.
      </Txt>
      <Txt idea>
        The <Code>@mantine/core</Code> package styles must be applied before {PRODUCT_NAME} styles.
      </Txt>
      <Txt>
        For example, if you’re using a <ExternalLink to={`${MANTINE_LINK}/guides/next/`}></ExternalLink>Next.js
        application with an app router, your <Code>layout.tsx</Code> could look like this:
      </Txt>
      <CodeBlock tabs={{ code, keys: ['RootLayout.tsx', 'layout.css'] }} />
      <PageSubtitle value="Use the hook in your code" />
      <Txt>
        Import the <Code>useContextMenu</Code> hook and use it in your components like so:
      </Txt>
      <CodeBlock code={code['GettingStartedExample.tsx']} />
      <Txt>
        The above code will produce the following result (right-click on the image to trigger the context menu):
      </Txt>
      <GettingStartedExample />
      <Txt>
        Browse the <InternalLink to={firstExampleHref}>code examples</InternalLink> to see the context menu in action
        and learn how to use it, and refer to the{' '}
        <InternalLink to="/type-definitions">type definitions page</InternalLink> for the exhaustive list of
        customizable options.
      </Txt>
      <PageNavigation of={PATH} />
    </>
  );
}
