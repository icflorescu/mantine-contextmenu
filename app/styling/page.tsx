import { Code } from '@mantine/core';
import { ExternalLink } from '~/components/ExternalLink';
import { PageNavigation } from '~/components/PageNavigation';
import { PageSubtitle } from '~/components/PageSubtitle';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { getRouteMetadata } from '~/lib/utils';
import { MANTINE_LINK, PRODUCT_NAME, REPO_LINK } from '../config';

const PATH = '/styling';
export const metadata = getRouteMetadata(PATH);

export default function StylingPage() {
  return (
    <>
      <PageTitle of={PATH} />
      <Txt>
        {PRODUCT_NAME} V7 is a major release with{' '}
        <ExternalLink to={`${REPO_LINK}/blob/main/CHANGELOG.md`}>breaking changes</ExternalLink> and is compatible with{' '}
        <ExternalLink to={MANTINE_LINK}>Mantine V7</ExternalLink>.
        <br />
        One of the breaking changes in Mantine V7 is the{' '}
        <ExternalLink to={`${MANTINE_LINK}/changelog/7-0-0/#migration-to-native-css`}>
          migration to native CSS
        </ExternalLink>
        .
        <br />
        The styling is no longer done with CSS-in-JS (<ExternalLink to="https://emotion.sh">Emotion</ExternalLink>),
        hence the <Code>createStyles</Code> function is no longer available for use in other libraries built on top of
        it or in your own code.
      </Txt>
      <Txt idea>
        If you have used {PRODUCT_NAME} with Mantine V6 and you’re migrating to V7, please make sure to check out the
        Mantine V7.0 and V7.1 changelogs to understand the new styling approach and how you can use CSS layers to
        control the order of styles in your application.
      </Txt>
      <Txt>
        In V7, all <Code>@mantine/*</Code> packages are shipped with native CSS files which can be imported from{' '}
        <Code>@mantine/{'{package}'}/styles.css</Code> or <Code>@mantine/{'{package}'}/styles.layer.css</Code>.
      </Txt>
      <Txt>
        Similarly, {PRODUCT_NAME} comes with native CSS files which can be imported from{' '}
        <Code>mantine-contextmenu/styles.css</Code> or <Code>mantine-contextmenu/styles.layer.css</Code>.
      </Txt>
      <PageSubtitle value="Controlling the order of styles with CSS layers" />
      <Txt>
        Some bundlers and frameworks (
        <ExternalLink to="https://github.com/vercel/next.js/issues/16630">including Next.js</ExternalLink>) do not allow
        you to control the order of stylesheets in your application.
        <br />
        You can mitigate this by making use of{' '}
        <ExternalLink to="https://developer.mozilla.org/en-US/docs/Web/CSS/@layer">CSS layers</ExternalLink>.
        <br />
        While <Code>@mantine/{'{package}'}/styles.layer.css</Code> files use a layer named <Code>mantine</Code>,{' '}
        <Code>mantine-contextmenu/styles.css</Code> place styles in a layer named <Code>mantine-contextmenu</Code>.
      </Txt>
      <PageNavigation of={PATH} />
    </>
  );
}
