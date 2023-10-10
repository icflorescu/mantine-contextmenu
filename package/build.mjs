import { build } from 'esbuild';
import style from 'esbuild-style-plugin';
import pkg from './package.json' assert { type: 'json' };

const formats = [
  { name: 'esm', extension: 'mjs' },
  { name: 'cjs', extension: 'cjs' },
];

/** @type {import('esbuild').BuildOptions} */
const config = {
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['esnext'],
  logLevel: 'info',
  entryPoints: ['index.ts'],
  inject: ['react-shim.mjs'],
  external: Object.keys(pkg.peerDependencies),
  plugins: [style()],
  banner: { js: "'use client';" },
};

for (const { name, extension } of formats) {
  await build({ ...config, format: name, outfile: `./dist/index.${extension}` });
}
