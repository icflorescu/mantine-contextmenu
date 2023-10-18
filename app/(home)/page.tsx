import { Code } from '@mantine/core';
import { PRODUCT_NAME } from '~/app/config';
import { ExternalLink } from '~/components/ExternalLink';
import { InternalLink } from '~/components/InternalLink';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { getRouteMetadata } from '~/lib/utils';

const PATH = '/';
export const metadata = getRouteMetadata(PATH);

export default function HomePage() {
  return (
    <>
      <PageTitle>{PRODUCT_NAME} V7 alpha is here! 🎉</PageTitle>
      <Txt warning>This page is still WIP.</Txt>
      <Txt>
        This is a <strong>major rewrite</strong> of the library internals, with the following goals in mind:
      </Txt>
      <ul>
        <li>
          <strong>Mantine V7 compatibility</strong> - switch the styling approach from CSS-in-JS to PostCSS (or PostCSS
          modules)
        </li>
        <li>
          Make the repo easier to maintain by switching from a monorepo approach to a single-package that includes the
          source code, documentation and examples; this should also make it easier for new contributors to get started
        </li>
        <li>
          Streamline the build process - switch from bundling the code with <Code>esbuild</Code> to simply transpiling
          it with plain <Code>tsc</Code> and <Code>postcss</Code>
          commands
        </li>
        <li>
          Rewrite the entire documentation website to make use of{' '}
          <ExternalLink to="https://nextjs.org/docs/app">Next.js app router</ExternalLink> and{' '}
          <ExternalLink to="https://nextjs.org/docs/app/building-your-application/rendering/server-components">
            React Server Components
          </ExternalLink>
          ; this should also ensure the package will work properly in such an environment
        </li>
      </ul>
      <Txt>For now, have a look at:</Txt>
      <ul>
        <li>
          How to <InternalLink to="/getting-started">get started</InternalLink>
        </li>
        <li>
          <InternalLink to="/examples/basic-usage">Usage examples</InternalLink>
        </li>
        <li>
          <InternalLink to="/type-definitions">Type definitions</InternalLink>
        </li>
        <li>
          How to speed up the development process by{' '}
          <InternalLink to="/contribute-and-support">sponsoring</InternalLink> or{' '}
          <InternalLink to="/hire-the-author">hiring</InternalLink> the author
        </li>
      </ul>
      <Txt>Stay tuned for more updates soon!</Txt>
    </>
  );
}
