const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // custom logic if needed
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  },
});
