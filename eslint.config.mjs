import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: ['.next/', 'out/', 'dist/', 'public/'],
  },
  {
    rules: {
      'no-console': 'error',
      'object-shorthand': 'error',
      'no-useless-rename': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@next/next/no-img-element': 'off',
    },
  },
];

export default eslintConfig;
