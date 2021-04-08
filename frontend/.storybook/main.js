module.exports = {
    stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
    // webpackFinal is modified by @nextjs/storybook-plugin to include node-modules and nextjs/babel
  }