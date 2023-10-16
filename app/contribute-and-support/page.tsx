import { Box, Code } from '@mantine/core';
import { AUTHOR_LINK, AUTHOR_NAME, MANTINE_DATATABLE_LINK, MANTINE_LINK, PRODUCT_NAME, REPO_LINK } from '~/app/config';
import { ExternalLink } from '~/components/ExternalLink';
import { InternalLink } from '~/components/InternalLink';
import { PageNavigation } from '~/components/PageNavigation';
import { PageSubtitle } from '~/components/PageSubtitle';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { getRouteMetadata } from '~/lib/utils';
import { ContributorsImage } from './ContributorsImage';

const PATH = '/contribute-and-support';
export const metadata = getRouteMetadata(PATH);

const TWITTER_TEXT = encodeURIComponent('Check out the missing context-menu for Mantine UI applications!');
const TWITTER_URL = encodeURIComponent(REPO_LINK);
const TWITTER_HASHTAGS = encodeURIComponent('react,mantine,ui,contextmenu,frontend,opensource');

export default function ContributeAndSupportPage() {
  return (
    <>
      <PageTitle of={PATH} />
      <Txt>
        I’ve dedicated a sizeable amount of my own free time to build {PRODUCT_NAME} and{' '}
        <ExternalLink to={MANTINE_DATATABLE_LINK}>Mantine DataTable</ExternalLink> because:
      </Txt>
      <ul>
        <li>
          I think <ExternalLink to={MANTINE_LINK}>Mantine</ExternalLink> is currently the best React UI Framework;
          however people were{' '}
          <ExternalLink to="https://github.com/mantinedev/mantine/discussions/1049">asking</ExternalLink> in the
          community for a ContextMenu component;
        </li>
        <li>
          I’m a keen advocate of open-source and{' '}
          <ExternalLink to="https://medium.com/@icflorescu/open-source-capitalism-and-democracy-c71f025b6eba">
            I believe in its power to make our world a better place.
          </ExternalLink>
        </li>
      </ul>
      <PageSubtitle value="Please sponsor my work" />
      <Txt>
        I built {PRODUCT_NAME} and <ExternalLink to={MANTINE_DATATABLE_LINK}>Mantine DataTable</ExternalLink> out of
        passion, but the constand effort of spending so many hours on open-source development and maintenance takes its
        toll, and passion alone doesn’t pay the bills. So, if you find {PRODUCT_NAME} useful and you want to support its
        future development, please consider{' '}
        <ExternalLink to="https://github.com/sponsors/icflorescu">sponsoring my work</ExternalLink> ❤️.
      </Txt>
      <PageSubtitle value="Raise issues and discuss new features" />
      <Txt>
        If you find a bug please don’t hesitate to{' '}
        <ExternalLink to={`${REPO_LINK}/issues`}>raise an issue</ExternalLink>.
        <br />
        If you have an idea about a new or missing feature, let’s discuss it{' '}
        <ExternalLink to={`${REPO_LINK}/discussions`}>here</ExternalLink>.
      </Txt>
      <Txt>
        <strong>But:</strong>
      </Txt>
      <Txt warning>
        Be considerate when asking for a new feature!
        <br />
        Is it really something that would be useful for other poeple, or just an edge case?
        <br />
        Keep in mind that I am not paid to work on this project, so I have to prioritize my time and effort.
      </Txt>
      <PageSubtitle value="Become a code contributor" />
      <Txt>
        If you’re willing to put your effort into it, <strong>coming up with a pull-request would be fantastic!</strong>{' '}
        🙌
        <br />
        It would mean{' '}
        <strong>
          you’re one of the few people who don’t just{' '}
          <ExternalLink to="https://github.com/readme/featured/unseen-oss">
            <em>take open-source for granted</em>
          </ExternalLink>
          , but actually understand its true essence and are generous enough to contribute their own time and skills to
          a project they find useful
        </strong>
        . 🏅
      </Txt>
      <Txt>Here’s the list of people who have already contributed to {PRODUCT_NAME}:</Txt>
      <Box my="sm">
        <ExternalLink to={`${REPO_LINK}/graphs/contributors`}>
          <ContributorsImage />
        </ExternalLink>
      </Box>
      <Txt>Things to consider before contributing:</Txt>
      <Txt info>
        Please target your PRs to the <Code>next</Code> branch.
        <br />
        Pushing to the <Code>main</Code> branch triggers a GitHub deployment workflow, so PRs targeting{' '}
        <Code>main</Code> will be rejected.
        <br />
        If you want to implement a new feature or improve an existing one, make sure to add an example page and/or alter
        the one(s) already referring to it.
        <br />
        It’s not a feature if other people don’t know about it or don’t understand how to use it.
      </Txt>
      <PageSubtitle value="List of code contributors" />
      <PageSubtitle value="Other means of support" />
      <Txt>
        If you find this project useful, it would help a lot if you could:
        <br />
        🙏{' '}
        <strong>
          <ExternalLink to={REPO_LINK}>star the repository</ExternalLink>
        </strong>
        <br />
        💕{' '}
        <ExternalLink
          to={`https://twitter.com/share?text=${TWITTER_TEXT}&url=${TWITTER_URL}&hashtags=${TWITTER_HASHTAGS}&via=icflorescu`}
        >
          spread the word
        </ExternalLink>
        <br />
        👍 <ExternalLink to="https://www.linkedin.com/in/icflorescu">endorse me on LinkedIn</ExternalLink>
        <br />
        or, better yet, <InternalLink to="/hire-the-author">hire my services</InternalLink>.
      </Txt>
      <PageSubtitle value="Why do repository stars matter" />
      <Txt>
        The more stars this repository gets, the more visibility it gains among the Mantine users community. The more
        users it gets, the more chances that some of those users will become active code contributors willing to put
        their effort into bringing new features to life and/or fixing bugs.
        <br />
        As the repository gain awareness, my chances of getting hired to work on Mantine-based projects will increase,
        which in turn will help maintain my vested interest in keeping the project alive.
      </Txt>
      <Txt>
        Thank you for your support,
        <br />
        <ExternalLink to={AUTHOR_LINK}>{AUTHOR_NAME}</ExternalLink>
      </Txt>
      <PageNavigation of={PATH} />
    </>
  );
}
