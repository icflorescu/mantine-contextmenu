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
