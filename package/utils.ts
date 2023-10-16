/**
 * Utility type that makes a property required
 */
export type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property];
};

/**
 * Utility type that makes a property optional
 */
export type WithOptionalProperty<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Utility function that returns a humanized version of a string, e.g. "camelCase" -> "Camel Case"
 */
export function humanize(value: string) {
  const str = value
    .replace(/([a-z\d])([A-Z]+)/g, '$1 $2')
    .replace(/\W|_/g, ' ')
    .trim()
    .toLowerCase();
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

/**
 * A very simple utility function that returns a concatenated string of non-empty class names
 */
export function cs(...args: (string | undefined | null)[]) {
  return args.filter(Boolean).join(' ');
}
