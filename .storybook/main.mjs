import path from 'path';
import postcss from 'postcss';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    // Find PostCSS loader in Storybook's webpack configuration
    const postCssRule = config.module.rules.find(
      (rule) => rule.use && rule.use.find((use) => use.loader && use.loader.includes('postcss-loader'))
    );

    if (postCssRule) {
      // Get the PostCSS loader options
      const postCssLoader = postCssRule.use.find((use) => use.loader && use.loader.includes('postcss-loader'));
      
      // Use our custom PostCSS config
      if (postCssLoader) {
        postCssLoader.options = {
          ...postCssLoader.options,
          implementation: postcss,
          postcssOptions: {
            config: path.resolve(__dirname, '../postcss.config.mjs'),
          },
        };
      }
    }
    
    return config;
  },
};

export default config; 