/**
 * @license MIT
 * Copyright (c) 2025 Michael Alba
 */
const { defineConfig } = require('cypress');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'uqbvjv',
  reporter: 'spec',
  e2e: {
    experimentalModifyObstructiveThirdPartyCode: true,
    specPattern: 'cypress/e2e/step_definitions/**/*.feature',
    async setupNodeEvents(on, config) {
      config.env = config.env || {};
      await addCucumberPreprocessorPlugin(on, config);

      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      allureWriter(on, config);

      return config;
    },
  },
  env: {
    'cypress-cucumber-preprocessor': {
      stepDefinitions: 'cypress/e2e/step_definitions/**/*.js'
    }
  }
});
