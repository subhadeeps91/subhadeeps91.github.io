const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'sxakze',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // you can also plug in custom test logic here
    },
  },
});
