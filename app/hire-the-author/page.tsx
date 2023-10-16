import { AUTHOR_LINK, AUTHOR_NAME, PRODUCT_NAME } from '~/app/config';
import { ExternalLink } from '~/components/ExternalLink';
import { PageNavigation } from '~/components/PageNavigation';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { getRouteMetadata } from '~/lib/utils';

const PATH = '/hire-the-author';
export const metadata = getRouteMetadata(PATH);

export default function HireTheAuthorPage() {
  return (
    <>
      <PageTitle of={PATH} />
      <Txt warning>This page is WIP, but here’s the TLDR:</Txt>
      <Txt>
        Hey, I’m <ExternalLink to={AUTHOR_LINK}>{AUTHOR_NAME}</ExternalLink>, the creator of {PRODUCT_NAME}.
      </Txt>
      <Txt>
        If you want to hire my services, you’ll know how to reach me via the email address listed on my{' '}
        <ExternalLink to={AUTHOR_LINK}>GitHub profile page</ExternalLink>.
      </Txt>
      <PageNavigation of={PATH} />
    </>
  );
}
