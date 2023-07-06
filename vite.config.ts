import { defineConfig } from 'vitest/config';
import GithubActionsReporter from 'vitest-github-actions-reporter';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  define: {
    'import.meta.vitest': 'undefined',
  },
  test: {
    reporters: process.env['GITHUB_ACTIONS'] ? ['default', new GithubActionsReporter()] : 'default',
    includeSource: ['src/**/*.{js,ts}'],
  },
});
