import { Code, Container } from '@mantine/core';
import ExternalLink from '~/components/ExternalLink';
import PageNavigation from '~/components/PageNavigation';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import { AUTHOR_LINK, MANTINE_DATATABLE_LINK, MANTINE_LINK, SPONSOR_LINK } from '~/config';

const PATH = 'mantine-v7-support';

export default function Page() {
  return (
    <Container>
      <PageTitle of={PATH} />
      <PageText warning>
        Mantine ContextMenu v6.x supports <ExternalLink to="https://v6.mantine.dev/">Mantine v6.x</ExternalLink>.
        <br />
        <ExternalLink to={MANTINE_LINK}>Mantine v7.x</ExternalLink> support is on the roadmap. You can help speed up the
        process by <ExternalLink to={SPONSOR_LINK}>sponsoring me on GitHub</ExternalLink>.
      </PageText>
      <PageText>
        As most of you already know, Mantine v7 came up with{' '}
        <ExternalLink to="https://mantine.dev/changelog/7-0-0/">
          a significant number of breaking changes, most of them referring to how styling is implemented
        </ExternalLink>
        .
      </PageText>
      <PageText>
        As some of you know, Mantine-ContextMenu was born as an experiment related to{' '}
        <ExternalLink to={MANTINE_DATATABLE_LINK}>Mantine-DataTable</ExternalLink>, one of my dearest open-source
        projects.
      </PageText>
      <PageText>
        While <ExternalLink to={MANTINE_DATATABLE_LINK}>Mantine-DataTable</ExternalLink> has over 650 GitHub stars and
        35k <Code>npm</Code> downloads per month (as of October 1st 2023) and is being used by lots of startups and
        developers worldwide, I’m still struggling with raising enough funds to be able to dedicate as much time as I’d
        like to the project.
      </PageText>
      <PageText>
        To put it bluntly, building and maintaining successful open-source projects doesn’t pay my bills, or maybe I’m
        simply not yet good enough at raising awareness and converting it into sponsorship income.
      </PageText>
      <PageText>The very same applies to Mantine-ContextMenu.</PageText>
      <PageText>
        Thank you for your support and understanding,
        <br />
        <ExternalLink to={AUTHOR_LINK}>Ionut-Cristian Florescu</ExternalLink>
      </PageText>
      <PageNavigation of={PATH} />
    </Container>
  );
}
