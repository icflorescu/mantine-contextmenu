import { ExternalLink } from '~/components/ExternalLink';
import { PageNavigation } from '~/components/PageNavigation';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { getRouteMetadata } from '~/lib/utils';
import { MANTINE_LINK, PRODUCT_NAME, V6_WEBSITE_LINK } from '../config';

const PATH = '/mantine-v6-support';
export const metadata = getRouteMetadata(PATH);

export default function MantineV6SupportPage() {
  return (
    <>
      <PageTitle of={PATH} />
      <Txt warning>This page is still WIP, but here’s the TLDR:</Txt>
      <Txt>
        {PRODUCT_NAME} V7 is a major release with breaking changes and is compatible with{' '}
        <ExternalLink to={MANTINE_LINK}>Mantine V7</ExternalLink>.
        <br />
        If you are using <ExternalLink to="https://v6.mantine.dev">Mantine V6</ExternalLink>, you’ll need to use{' '}
        <ExternalLink to={V6_WEBSITE_LINK}>{PRODUCT_NAME} V6</ExternalLink>.
      </Txt>
      <PageNavigation of={PATH} />
    </>
  );
}
