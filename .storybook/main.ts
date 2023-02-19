import type { StorybookConfig, Options } from '@storybook/core-common';

const config: StorybookConfig = {
  core: { builder: 'webpack5' },
  stories: [
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-essentials', '@nrwl/react/plugins/storybook'],
  webpackFinal: async (config, { configType }: Options) => {
    // add your own webpack tweaks if needed

    return config;
  },
};

module.exports = config;
