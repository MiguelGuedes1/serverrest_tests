const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://serverest.dev',
    reporter: 'mocha-junit-reporter',
    reporterOptions: {
      mochaFile: 'cypress/results/results.xml', // Onde o relatório vai ser salvo
      toConsole: true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});