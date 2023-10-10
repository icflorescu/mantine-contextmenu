import { useWindowScroll } from '@mantine/hooks';
import memoize from 'lodash/memoize';
import { Metadata } from 'next';
import { EXAMPLES_ROUTE_COLOR, PRODUCT_NAME, ROUTES } from '~/app/config';
import { NavbarButtonProps } from '~/components/NavbarButton';

export type WithOptionalProperty<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export const getRouteMetadata = memoize((href: string): Metadata => {
  const route = ROUTES.find((route) => route.href === href);
  if (!route) throw new Error(`Route ${href} not found`);
  const { title, description } = route;
  return { title: `${title}${href.startsWith('/examples/') ? ' example' : ''} | ${PRODUCT_NAME}`, description };
});

export const getRouteTitle = memoize((href: string) => {
  const route = ROUTES.find((route) => route.href === href);
  if (!route) throw new Error(`Route ${href} not found`);
  return route.title;
});

export const getRouteNavInfo = memoize(() => {
  const info: Record<'before-examples' | 'examples' | 'after-examples', NavbarButtonProps[]> = {
    'before-examples': [],
    examples: [],
    'after-examples': [],
  };

  let examplesReached = false;
  let examplesPassed = false;
  for (const route of ROUTES) {
    const isExample = route.href.startsWith('/examples');
    if (isExample) examplesReached = true;
    if (!isExample && examplesReached) examplesPassed = true;
    if (!examplesReached) {
      info['before-examples'].push(route as NavbarButtonProps);
    } else if (examplesPassed) {
      info['after-examples'].push(route as NavbarButtonProps);
    } else {
      info.examples.push({ ...route, color: EXAMPLES_ROUTE_COLOR });
    }
  }

  return info;
});

export function useIsScrolled() {
  const [{ y }] = useWindowScroll();
  return y > 0;
}

export function allPromiseProps<T>(object: { [K in keyof T]: Promise<T[K]> | T[K] }): Promise<T> {
  return Promise.all(Object.values(object)).then((results) =>
    Object.keys(object).reduce((fulfilledObject, key, index) => {
      fulfilledObject[key as keyof T] = results[index] as T[keyof T];
      return fulfilledObject;
    }, {} as T)
  );
}
