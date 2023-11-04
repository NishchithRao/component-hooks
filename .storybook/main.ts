import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  core: { builder: '@storybook/builder-vite' },
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react-vite',
};

module.exports = config;
