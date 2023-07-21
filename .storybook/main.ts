// module.exports = {
//   stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
//   addons: ["@storybook/addon-links", "@storybook/addon-docs", "@storybook/addon-essentials", "@storybook/preset-create-react-app", "@storybook/addon-interactions"],
//   framework: {
//     name: "@storybook/react-webpack5",
//     options: {}
//   },
//   docs: {
//     autodocs: true
//   }
// };

import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
    "@storybook/addon-docs"
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  // refs: {
  //   'design-system': {
  //     title: 'Storybook Design System',
  //     url: 'https://5ccbc373887ca40020446347-yldsqjoxzb.chromatic.com',
  //   },
  // },
};

export default config;