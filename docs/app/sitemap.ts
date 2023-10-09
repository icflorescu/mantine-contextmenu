import { MetadataRoute } from 'next';
import { WEBSITE_LINK } from './config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: WEBSITE_LINK,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // todo: add more pages here
  ];
}
