import { getRouteMetadata } from '~/lib/utils';
import { HomePageContent } from './HomePageContent';

export const metadata = getRouteMetadata('/');

export default function HomePage() {
  return <HomePageContent />;
}
