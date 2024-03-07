import { defineConfig } from 'tsup';

import packageJson from './package.json';

export default defineConfig({
  clean: true,
  dts: true,
  external: Object.keys(packageJson.peerDependencies || {}),
  entry: ['src', '!src/**/*.stories.tsx', '!src/**/*.css'],
  outDir: 'dist',
  platform: 'node',
  target: 'esnext',
  format: ['esm'],
});
