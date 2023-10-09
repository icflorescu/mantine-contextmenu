import { Title } from '@mantine/core';
import Head from 'next/head';
import { SEO_DEFAULT_DESCRIPTION } from '~/config';
import { getPageMeta } from '~/lib/page';
import classes from './PageTitle.module.css';

export default function PageTitle({ of }: { of: string }) {
  const { title, description } = getPageMeta(of);
  const titleWithSuffix = `${title} | Mantine DataTable`;
  const descriptionContent = description ?? SEO_DEFAULT_DESCRIPTION;
  return (
    <>
      <Head>
        <title>{titleWithSuffix}</title>
        <meta property="og:title" content={titleWithSuffix} />
        <meta name="twitter:title" content={titleWithSuffix} />
        <meta name="description" content={descriptionContent} />
        <meta property="og:description" content={descriptionContent} />
        <meta name="twitter:description" content={descriptionContent} />
      </Head>
      <Title className={classes.root} order={2}>
        {title}
      </Title>
    </>
  );
}
