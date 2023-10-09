import { Code, Container } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import CodeBlock from '~/components/CodeBlock';
import ExternalLink from '~/components/ExternalLink';
import InternalLink from '~/components/InternalLink';
import PageNavigation from '~/components/PageNavigation';
import PageSubtitle from '~/components/PageSubtitle';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import StylingExampleMenuWithClassName from '~/examples/StylingExampleMenuWithClassName';
import StylingExampleMenuWithStyleObject from '~/examples/StylingExampleMenuWithStyleObject';
import StylingExampleMenuWithSxFunction from '~/examples/StylingExampleMenuWithSxFunction';
import StylingExampleMenuWithSxObject from '~/examples/StylingExampleMenuWithSxObject';
import StylingExampleWithClassNames from '~/examples/StylingExampleWithClassNames';
import StylingExampleWithIndividualActionStyling from '~/examples/StylingExampleWithIndividualActionStyling';
import StylingExampleWithStylesFunction from '~/examples/StylingExampleWithStylesFunction';
import StylingExampleWithStylesObject from '~/examples/StylingExampleWithStylesObject';
import allPromiseProps from '~/lib/allPromiseProps';
import readCodeExample from '~/lib/readCodeExample';

type ExampleName =
  | 'app-provider-styling-props'
  | 'menu-with-class-name'
  | 'menu-with-style-object'
  | 'menu-with-sx-object'
  | 'menu-with-sx-function'
  | 'with-class-names'
  | 'with-styles-object'
  | 'with-styles-function'
  | 'with-individual-action-styling';

const PATH = 'examples/styling';

export const getStaticProps: GetStaticProps<{
  code: Record<ExampleName, string>;
}> = async () => ({
  props: {
    code: await allPromiseProps({
      'app-provider-styling-props': readCodeExample('examples/_app-provider-styling-props.tsx') as Promise<string>,
      'menu-with-class-name': readCodeExample('examples/StylingExampleMenuWithClassName.tsx') as Promise<string>,
      'menu-with-style-object': readCodeExample('examples/StylingExampleMenuWithStyleObject.tsx') as Promise<string>,
      'menu-with-sx-object': readCodeExample('examples/StylingExampleMenuWithSxObject.tsx') as Promise<string>,
      'menu-with-sx-function': readCodeExample('examples/StylingExampleMenuWithSxFunction.tsx') as Promise<string>,
      'with-class-names': readCodeExample('examples/StylingExampleWithClassNames.tsx') as Promise<string>,
      'with-styles-object': readCodeExample('examples/StylingExampleWithStylesObject.tsx') as Promise<string>,
      'with-styles-function': readCodeExample('examples/StylingExampleWithStylesFunction.tsx') as Promise<string>,
      'with-individual-action-styling': readCodeExample(
        'examples/StylingExampleWithIndividualActionStyling.tsx'
      ) as Promise<string>,
    }),
  },
});

export default function Page({ code }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <PageTitle of={PATH} />
      <PageText>
        There are many ways to style a context menu besides setting its{' '}
        <InternalLink to="/examples/basic-configuration">basic configuration options</InternalLink> and its items{' '}
        <InternalLink to="http://localhost:3000/examples/action-colors">action colors</InternalLink>.
        <br />
        The <Code>ContextMenuProvider</Code> wrapper component accepts the following properties:
        <ul>
          <li>
            <Code>className</Code>
          </li>
          <li>
            <Code>style</Code>
          </li>
          <li>
            <Code>sx</Code>
          </li>
          <li>
            <Code>classNames</Code>
          </li>
          <li>
            <Code>styles</Code>
          </li>
        </ul>
        The <Code>className</Code>, <Code>style</Code> and <Code>sx</Code> properties are used to target the component
        root, while the <Code>classNames</Code> and <Code>styles</Code> properties can be used to target the individual
        component parts, <Code>root</Code> and <Code>item</Code>.
      </PageText>
      <PageText>
        The above properties, if passed to the <Code>ContextMenuProvider</Code> component, will be passed down to all
        the context menus that are rendered within the provider.
      </PageText>
      <CodeBlock language="typescript" content={code['app-provider-styling-props']} />
      <PageText warning>
        When styling with class names, you may need to increase selector specificity to override the default styling.
        <br />
        See{' '}
        <ExternalLink to="https://stackoverflow.com/questions/62660480/is-there-a-way-to-increase-specificity-by-adding-the-element-with-emotion">
          this StackOverflow question
        </ExternalLink>{' '}
        for more information.
      </PageText>
      <PageText>
        You can pass an <em>options</em> object with the same properties as the second argument to the{' '}
        <Code>showContextMenu</Code> function returned by <Code>useContextMenu</Code> hook to target the individual
        context menu instances, in which case they will override any provider properties.
        <br />
        The examples below will use this approach.
      </PageText>
      <PageSubtitle value="Styling the container with a className" />
      <PageText>
        You can specify a <Code>className</Code> that will target the component root:
      </PageText>
      <CodeBlock language="typescript" content={code['menu-with-class-name']} />
      <StylingExampleMenuWithClassName />
      <PageSubtitle value="Styling the container with a style object" />
      <PageText>
        You can specify a <Code>style</Code> object with CSS properties that will be applied to the component root:
      </PageText>
      <CodeBlock language="typescript" content={code['menu-with-style-object']} />
      <StylingExampleMenuWithStyleObject />
      <PageSubtitle value="Styling the container with sx" />
      <PageText>
        You can provide an{' '}
        <ExternalLink to="https://mantine.dev/styles/sx/">
          <Code>sx</Code> property
        </ExternalLink>{' '}
        that will target the component root:
      </PageText>
      <CodeBlock language="typescript" content={code['menu-with-sx-object']} />
      <StylingExampleMenuWithSxObject />
      <PageText>
        The <Code>sx</Code> property can also point to a function that receives the current theme as its argument:
      </PageText>
      <CodeBlock language="typescript" content={code['menu-with-sx-function']} />
      <StylingExampleMenuWithSxFunction />
      <PageSubtitle value="Styling with multiple class names" />
      <PageText>
        Here’s an example of how you can use <Code>classNames</Code> property to target the individual component parts:
      </PageText>
      <CodeBlock language="typescript" content={code['with-class-names']} />
      <StylingExampleWithClassNames />
      <PageSubtitle value="Styling with a styles object" />
      <PageText>
        Here’s an example of how you can use <Code>styles</Code> property to target the individual component parts:
      </PageText>
      <CodeBlock language="typescript" content={code['with-styles-object']} />
      <StylingExampleWithStylesObject />
      <PageText>
        The <Code>styles</Code> property can also point to a function that receives the current theme as its argument:
      </PageText>
      <CodeBlock language="typescript" content={code['with-styles-function']} />
      <StylingExampleWithStylesFunction />
      <PageSubtitle value="Styling individual actions with className, style or sx" />
      <PageText>
        You can also style individual actions by passing a <Code>className</Code>, <Code>style</Code> or <Code>sx</Code>{' '}
        property to the object describing an individual menu item:
      </PageText>
      <CodeBlock language="typescript" content={code['with-individual-action-styling']} />
      <StylingExampleWithIndividualActionStyling />
      <PageNavigation of={PATH} />
    </Container>
  );
}
