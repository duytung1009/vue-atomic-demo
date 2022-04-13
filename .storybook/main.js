// use `mergeConfig` to recursively merge Vite options
const { mergeConfig } = require("vite");

module.exports = {
  framework: "@storybook/vue3",
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, { configType }) {
    // return the customized config
    config.css = {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/_boostrap.scss";\n@import "@/assets/_custom.scss";`,
        },
      },
    };
    return config;
  },
};
