module.exports = {
  stories: [
    "../stories/*.stories.@(mdx|js|jsx|ts|tsx)",
    "../stories/components/*/*.@(mdx|js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "storybook-builder-vite",
  },
};
