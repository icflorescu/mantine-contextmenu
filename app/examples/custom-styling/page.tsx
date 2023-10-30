import { Code } from '@mantine/core';
import type { Route } from 'next';
import { MANTINE_LINK } from '~/app/config';
import { CodeBlock } from '~/components/CodeBlock';
import { ExternalLink } from '~/components/ExternalLink';
import { InternalLink } from '~/components/InternalLink';
import { PageNavigation } from '~/components/PageNavigation';
import { PageSubtitle } from '~/components/PageSubtitle';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { readCodeFile } from '~/lib/code';
import { allPromiseProps, getRouteMetadata } from '~/lib/utils';
import IndividualActionStylingExample from './IndividualActionStylingExample';
import { StylingWithClassNameExample } from './StylingWithClassNameExample';
import StylingWithClassNamesExample from './StylingWithClassNamesExample';
import { StylingWithStyleFunctionExample } from './StylingWithStyleFunctionExample';
import { StylingWithStyleObjectExample } from './StylingWithStyleObjectExample';
import { StylingWithStylesFunctionsExample } from './StylingWithStylesFunctionsExample';
import { StylingWithStylesObjectExample } from './StylingWithStylesObjectExample';

const PATH: Route = '/examples/custom-styling';

export const metadata = getRouteMetadata(PATH);

export default async function CustomStylingExamplePage() {
  const code = await allPromiseProps({
    'ProviderPropsExample.tsx': readCodeFile<string>(`${PATH}/ProviderPropsExample.tsx`),
    'ProviderPropsExample.module.css': readCodeFile<string>(`${PATH}/ProviderPropsExample.module.css`),
    'StylingWithClassNameExample.tsx': readCodeFile<string>(`${PATH}/StylingWithClassNameExample.tsx`),
    'StylingWithClassNameExample.module.css': readCodeFile<string>(`${PATH}/StylingWithClassNameExample.module.css`),
    'StylingWithStyleObjectExample.tsx': readCodeFile<string>(`${PATH}/StylingWithStyleObjectExample.tsx`),
    'StylingWithStyleFunctionExample.tsx': readCodeFile<string>(`${PATH}/StylingWithStyleFunctionExample.tsx`),
    'StylingWithClassNamesExample.tsx': readCodeFile<string>(`${PATH}/StylingWithClassNamesExample.tsx`),
    'StylingWithClassNamesExample.module.css': readCodeFile<string>(`${PATH}/StylingWithClassNamesExample.module.css`),
    'StylingWithStylesObjectExample.tsx': readCodeFile<string>(`${PATH}/StylingWithStylesObjectExample.tsx`),
    'StylingWithStylesFunctionsExample.tsx': readCodeFile<string>(`${PATH}/StylingWithStylesFunctionsExample.tsx`),
    'IndividualActionStylingExample.tsx': readCodeFile<string>(`${PATH}/IndividualActionStylingExample.tsx`),
    'IndividualActionStylingExample.module.css': readCodeFile<string>(
      `${PATH}/IndividualActionStylingExample.module.css`
    ),
  });

  return (
    <>
      <PageTitle of={PATH} />
      <Txt>
        There are more ways to style a context menu besides setting its{' '}
        <InternalLink to="/examples/basic-configuration">basic configuration options</InternalLink> and its items{' '}
        <InternalLink to="/examples/action-colors">action colors</InternalLink>.
      </Txt>
      <Txt>
        The <Code>ContextMenuProvider</Code> wrapper component accepts the following properties: <Code>className</Code>,{' '}
        <Code>style</Code>, <Code>classNames</Code> and <Code>styles</Code>.
        <br />
        Have a look at <ExternalLink to={`${MANTINE_LINK}/styles/styles-api/`}>Mantine Styles API</ExternalLink>{' '}
        documentation to make a general idea of how these properties work.
      </Txt>
      <Txt>
        The <Code>className</Code> and <Code>style</Code> properties can be used to target the component root, while the{' '}
        <Code>classNames</Code> and <Code>styles</Code> properties can be used to target the individual component parts,{' '}
        <Code>root</Code>, <Code>item</Code> and <Code>divider</Code>.
      </Txt>
      <Txt>
        If you provide the above properties to the <Code>ContextMenuProvider</Code> component, they will be passed down
        to all the context menus that are rendered within the provider.
      </Txt>
      <CodeBlock tabs={{ code, keys: ['ProviderPropsExample.tsx', 'ProviderPropsExample.module.css'] }} />
      <Txt idea title="Tip">
        When styling with class names, you may need to increase selector specificity to override the default styling.
        Use <ExternalLink to="https://developer.mozilla.org/en-US/docs/Web/CSS/@layer">CSS layers</ExternalLink> or{' '}
        <ExternalLink to="https://blogs.halodoc.io/best-practices-that-we-follow-to-avoid-specificity-issues/">
          repeated class names
        </ExternalLink>{' '}
        to do so.
      </Txt>
      <Txt>
        The <Code>ContextMenuProvider</Code> styling values can be overriden by setting the similarly-named properties
        of an <em>options</em> object passed as the second argument to the <Code>showContextMenu</Code>
        function returned by <Code>useContextMenu</Code> hook to target the individual context menu instances, in which
        case they will override the initial provider properties.
        <br />
        The examples below will use this approach.
      </Txt>
      <PageSubtitle value="Styling the container with a className" />
      <Txt>
        You can specify a <Code>className</Code> that will target the component root:
      </Txt>
      <CodeBlock tabs={{ code, keys: ['StylingWithClassNameExample.tsx', 'StylingWithClassNameExample.module.css'] }} />
      <StylingWithClassNameExample />
      <PageSubtitle value="Styling the container with a style object" />
      <Txt>
        You can specify a <Code>style</Code> object with CSS properties that will be applied to the component root:
      </Txt>
      <CodeBlock code={code['StylingWithStyleObjectExample.tsx']} />
      <StylingWithStyleObjectExample />
      <Txt>
        The <Code>style</Code> property can also point to a function that will receive the current theme as an argument
        and return a style object:
      </Txt>
      <CodeBlock code={code['StylingWithStyleFunctionExample.tsx']} />
      <StylingWithStyleFunctionExample />
      <PageSubtitle value="Styling with multiple class names" />
      <Txt>
        Here’s an example of how you can use <Code>classNames</Code> property to target the individual component parts:
      </Txt>
      <CodeBlock
        tabs={{ code, keys: ['StylingWithClassNamesExample.tsx', 'StylingWithClassNamesExample.module.css'] }}
      />
      <StylingWithClassNamesExample />
      <PageSubtitle value="Styling with multiple style objects" />
      <Txt>
        Here’s an example of how you can use the <Code>styles</Code> property to target the individual component parts:
      </Txt>
      <CodeBlock code={code['StylingWithStylesObjectExample.tsx']} />
      <StylingWithStylesObjectExample />
      <Txt>You can also use functions that receive the current theme as an argument and return styles objects:</Txt>
      <CodeBlock code={code['StylingWithStylesFunctionsExample.tsx']} />
      <StylingWithStylesFunctionsExample />
      <PageSubtitle value="Styling individual actions with className and style" />
      <Txt>
        You can also style individual actions by passing a <Code>className</Code> or <Code>style</Code> property to the
        object describing an individual menu item:
      </Txt>
      <CodeBlock
        tabs={{ code, keys: ['IndividualActionStylingExample.tsx', 'IndividualActionStylingExample.module.css'] }}
      />
      <IndividualActionStylingExample />
      <Txt>Head over to the next example to discover other features.</Txt>
      <PageNavigation of={PATH} />
    </>
  );
}
